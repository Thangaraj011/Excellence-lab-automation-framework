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

}