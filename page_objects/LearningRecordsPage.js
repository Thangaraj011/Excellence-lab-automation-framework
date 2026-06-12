import {expect} from '@playwright/test';


export class LearningRecordsPage {

  constructor(page) {
    this.page = page;
    this.learningRecords = page.getByRole('button', { name: 'Learning Records' });
    this.titleText = page.getByRole('heading', { name: 'Learning Records' });
    this.firstContentTitle = page.locator(`//tbody/tr/td[contains(@class,'ant-table-cell-ellipsis')]`).first();
    this.firstContentSource = page.locator(`//tbody/tr[contains(@class,'ant-table-row')]/td[2]`).first();
    this.firstContentType = page.locator(`//tbody/tr[contains(@class,'ant-table-row')]/td[3]`).first();
    this.firstContentDate = page.locator(`//tbody/tr[contains(@class,'ant-table-row')]/td[4]`).first();
    this.firstContentStatus = page.locator(`//tbody/tr[contains(@class,'ant-table-row')]/td[5]`).first();

    this.firstContentActionIcon = page.locator(`//tbody/tr[contains(@class,'ant-table-row')]/td/button`).first();
    this.editOption = page.locator(`//span[text()='Edit']`);
    this.deleteOption = page.locator(`//span[text()='Delete']`);

    this.totalPageCount = page.locator(`//li[@class='ant-pagination-next']/preceding-sibling::li[contains(@class,'ant-pagination-item')]`);
    this.conetntPerPageDropdown = page.locator(`div.ant-select-content`);
    this.tenPerPageOption = page.getByRole('option', { name: '10 / page' });
    this.editSubTabHeaderTitle = page.locator(`div.ant-modal-title`);
    this.editSubTabContentTitle = page.locator(`#title`);
    this.editSubTabProvider = page.locator(`#provider`);
    this.editSubTabDateInput = page.locator(`#date`);
    this.editSubTabStatus = page.locator(`#status`);
    this.inProgressOption = page.locator('div.ant-select-item-option[title="In Progress"]');
    this.completedOption = page.locator('div.ant-select-item-option[title="Completed"]');
    this.editSubTabCancelButton = page.getByRole('button', {  name : 'Cancel'});
    this.editSubTabSaveButton = page.getByRole('button', {  name : 'Save'});
    this.learningRecordsUpdateToast = page
      .locator("div")
      .filter({ hasText: "Learning record updated successfully" })
      .first();

  }



  async verifyStatusOfTheContents(contentNames, todaysDate){
    await this.getLearningRecordsButton().click();
    await this.page.waitForLoadState('domcontentloaded');
    await this.screenTitleCheck();
    for (const contentName of contentNames) {
    await expect(this.getContentDate(contentName)).toHaveText(todaysDate);
    await expect(this.getContentStatus(contentName)).toHaveText('Completed');
  }
}

  async verifyInLearningRecords(name, date, expectedStatus) {
  await this.getLearningRecordsButton().click();
  await this.page.waitForLoadState('domcontentloaded');
  await this.screenTitleCheck();

  await expect(this.getFirstContentTitle()).toHaveText(name);
  await expect(this.getContentDate(name)).toHaveText(date);
  await expect(this.getContentStatus(name)).toHaveText(expectedStatus);
}

  getLearningRecordsButton()
  {
    return this.learningRecords;
  }

  async screenTitleCheck()
  {
    await expect(this.titleText).toBeVisible();
  }

  getFirstContentTitle(){
    return this.firstContentTitle;
  }

  getContentSource(contentName)
  {
    return this.page.locator(`//tbody/tr/td[@title='${contentName}']//following-sibling::td`).first();
  }

  getContentType(contentName)
  {
    return this.page.locator(`//tbody/tr/td[@title='${contentName}']//following-sibling::td`).nth(1);
  }

  getContentDate(contentName)
  {
    return this.page.locator(`//tbody/tr/td[@title='${contentName}']//following-sibling::td`).nth(2);
  }

  getContentStatus(contentName)
  {
    return this.page.locator(`//tbody/tr/td[@title='${contentName}']//following-sibling::td`).nth(3);
  }


  getContentActionIcon(contentName)
  {
    return this.page.locator(`//tbody/tr/td[@title='${contentName}']//following-sibling::td/button`);
  }

  async getEditOption()
  {
    return this.editOption;
  }

  async getDeleteOption()
  {
    return this.deleteOption;
  }

  async getTotalPageCount(){
    const count = await this.totalPageCount.last().textContent();
    return parseInt(count?.trim(), 10) || 1;
  }

  async findTitlesAcrossPages(titles, options = {}) {
  const {
    nextSelector = 'li.ant-pagination-next button',
    rowSelector = `//tbody/tr/td[contains(@class,'ant-table-cell-ellipsis')]`,
    maxPages,
    requireAll = true,
    asLink = false, 
  } = options;

  const actualMaxPages = maxPages ?? (await this.getTotalPageCount());
  const wanted = Array.isArray(titles) ? titles : [titles];
  const results = new Map();

  for (let pageNum = 1; pageNum <= actualMaxPages; pageNum++) {
    await this.page.locator(rowSelector).first().waitFor({ state: 'visible' });

    for (const title of wanted) {
      if (results.has(title)) continue;

      // Robust Locator Strategy: Checks the HTML 'title' attribute first, then falls back to fuzzy text matching
      const locator = asLink
        ? this.page.getByRole('link', { name: title, exact: false })
        : this.page.locator(`[title="${title}"]`)
            .or(this.page.getByText(title, { exact: false }))
            .first();

      if (await locator.count() > 0) {
        results.set(title, pageNum);
      }
    }

    if (results.size === wanted.length) break;

    const nextLi = this.page.locator('li.ant-pagination-next');
    const isDisabled =
      (await nextLi.getAttribute('aria-disabled')) === 'true' ||
      (await nextLi.getAttribute('class'))?.includes('disabled');
    if (isDisabled) break;

    const firstRowText = await this.page.locator(rowSelector).first().innerText();
    await this.page.locator(nextSelector).first().click();
    
    await this.page.locator(rowSelector).first()
      .filter({ hasNotText: firstRowText })
      .first()
      .waitFor({ state: 'visible' })
      .catch(() => this.page.waitForTimeout(500));
  }

  const found = Object.fromEntries(results);
  const missing = wanted.filter((t) => !results.has(t));

  if (requireAll && missing.length > 0) {
    throw new Error(`Title(s) not found: ${missing.join(', ')}`);
  }

  return { found, missing, allFound: missing.length === 0 };
}

  async findAndAssertRecord( targetTitle, expectedValues) {
    let isItemFound = false;

    const tableRows = this.page.locator(`//tbody/tr`);
    const nextButton = this.page.locator('li.ant-pagination-next').first();

    while (!isItemFound) {
        await tableRows.first().waitFor({ state: 'visible' });
        const rowCount = await tableRows.count();

        for (let i = 1; i < rowCount; i++) {
            const row = tableRows.nth(i);
            const actualTitle = await row.locator('td').nth(0).innerText();

            if (actualTitle.includes(targetTitle)) {
                isItemFound = true;
                console.log(`Match found for "${targetTitle}". Verifying details...`);

                const actualSource = await row.locator('td').nth(1).innerText();
                const actualType = await row.locator('td').nth(2).innerText();
                const actualDate = await row.locator('td').nth(3).innerText();
                const actualStatus = await row.locator('td').nth(4).innerText();

                expect(actualSource.trim()).toBe(expectedValues.source);
                expect(actualType.trim()).toBe(expectedValues.type);
                expect(actualDate.trim()).toBe(expectedValues.date);
                expect(actualStatus.trim()).toBe(expectedValues.status);

                break;
            }
        }

        if (!isItemFound) {
            const isNextDisabled = await nextButton.isDisabled() || 
            await nextButton.getAttribute('aria-disabled') === 'true' ||
            (await nextButton.getAttribute('class'))?.includes('disabled');

            if (!isNextDisabled) {
                console.log(`Item not found on this page. Clicking Next page...`);
                
                const initialFirstRowText = await tableRows.nth(1).innerText();
                await nextButton.click();

                await this.page.waitForFunction(
                    ([selector, oldText]) => {
                        const firstRow = document.querySelector(selector);
                        return firstRow && firstRow.innerText !== oldText;
                    },
                    ['tbody tr', initialFirstRowText]
                );
            } else {
                throw new Error(`Target content title "${targetTitle}" was not found across any pagination pages.`);
            }
        }
    }
}

  async findContentAndInitiateActions(title, expectedSource){
    let isItemFound = false;

    const tableRows = this.page.locator(`tbody tr.ant-table-row`);
    const nextButton = this.page.locator('li.ant-pagination-next').first();

    while (!isItemFound) {
        await tableRows.first().waitFor({ state: 'visible' });
        await expect(tableRows.first().locator('td').first()).not.toBeEmpty();
        const matchingRow = tableRows.filter({ hasText: title });
        const matchCount = await matchingRow.count();

        if (matchCount > 0) {
            isItemFound = true;
            console.log(`Match found for "${title}". Verifying details...`);

            const actualSource = await matchingRow.locator('td').nth(1).innerText();
            expect(actualSource.trim()).toBe(expectedSource);
            
            return matchingRow;
        }

        if (!isItemFound) {
            const isNextDisabled = await nextButton.isDisabled() || 
            await nextButton.getAttribute('aria-disabled') === 'true' ||
            (await nextButton.getAttribute('class'))?.includes('disabled');

            if (!isNextDisabled) {
                console.log(`Item not found on this page. Clicking Next page...`);
                
                const initialFirstRowText = await tableRows.nth(0).locator('td').first().innerText();
                await nextButton.click();

                await this.page.waitForFunction(
                    ([selector, oldText]) => {
                        const firstCell = document.querySelector(selector);
                        return firstCell && firstCell.innerText !== oldText;
                    },
                    ['tbody tr.ant-table-row td', initialFirstRowText]
                );
            } else {
                throw new Error(`Target content title "${title}" was not found across any pagination pages.`);
            }
        }
    }
  }

  async setTenContentperPage(){
    await this.conetntPerPageDropdown.click();
    await this.page.locator(`.rc-virtual-list-holder-inner`).waitFor({state: 'visible'});
    await this.tenPerPageOption.click();
    await this.page.waitForLoadState('domcontentloaded');
  }


  

}