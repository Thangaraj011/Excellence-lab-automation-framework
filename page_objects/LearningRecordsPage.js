import {expect} from '@playwright/test';


export class LearningRecordsPage {

  constructor(page) {
    this.page = page;
    this.learningRecords = page.getByRole('button', { name: 'Learning Records' });
    this.titleText = page.getByRole('heading', { name: 'Learning Records' });
    this.firstContenttitle = page.locator(`//tbody/tr/td[contains(@class,'ant-table-cell-ellipsi')]`).first();
    this.firstContentSource = page.locator(`//tbody/tr[contains(@class,'ant-table-row')]/td[2]`).first();
    this.firstContentStatus = page.locator(`//tbody/tr[contains(@class,'ant-table-row')]/td[3]`).first();
    this.firstContentType = page.locator(`//tbody/tr[contains(@class,'ant-table-row')]/td[4]`).first();
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
    return this.firstContenttitle;
  }

  getContentSource(contentName)
  {
    return this.page.locator(`//tbody/tr/td[contains(@title,'${contentName}')]//following-sibling::td`).first();
  }

  getContentType(contentName)
  {
    return this.page.locator(`//tbody/tr/td[contains(@title,'${contentName}')]//following-sibling::td`).nth(1);
  }

  getContentDate(contentName)
  {
    return this.page.locator(`//tbody/tr/td[contains(@title,'${contentName}')]//following-sibling::td`).nth(2);
  }

  getContentStatus(contentName)
  {
    return this.page.locator(`//tbody/tr/td[contains(@title,'${contentName}')]//following-sibling::td`).nth(3);
  }

  getContentActionIcon(contentName)
  {
    return this.page.locator(`//tbody/tr/td[contains(@title,'${contentName}')]//following-sibling::td/button`);
  }

  async getEditOption()
  {
    return this.editOption;
  }

  async getDeleteOption()
  {
    return this.deleteOption;
  }

}