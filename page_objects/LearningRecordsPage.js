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

  async getLearningRecordsButton()
  {
    return await this.learningRecords;
  }

  async screenTitleCheck()
  {
    await expect(this.titleText.textContext()).toBeVisible();
  }

  async getFirstContentTitle(){
    return this.firstContenttitle.textContent();
  }

  async getContentSource(contentName)
  {
    return await this.page.locator(`//tbody/tr/td[contains(@title,'${contentName}}')]//following-sibling::td`).first().textContent();
  }

  async getContentType(contentName)
  {
    return await this.page.locator(`//tbody/tr/td[contains(@title,'${contentName}}')]//following-sibling::td`).nth(1).textContent();
  }

  async getContentDate(contentName)
  {
    return await this.page.locator(`//tbody/tr/td[contains(@title,'${contentName}}')]//following-sibling::td`).nth(2).textContent();
  }

  async getContentStatus(contentName)
  {
    return await this.page.locator(`//tbody/tr/td[contains(@title,'${contentName}}')]//following-sibling::td`).nth(3).textContent();
  }

  async getContentActionIcon(contentName)
  {
    return await this.page.locator(`//tbody/tr/td[contains(@title,'${contentName}}')]//following-sibling::td/button`);
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