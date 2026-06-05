import {expect} from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.homepageTitle = page.getByRole('heading', { name: 'Homepage' });
    this.assignedCoursesTitle =  page.getByRole('tab', { name: 'Assigned Courses' });
    this.aiReccomendationsTitle =  page.getByRole('tab', { name: 'AI Recommendations' });
    this.searchTextbox = page.getByPlaceholder('Search');
    this.skillCatgeoryDropdown = page.getByRole('combobox', { name: 'Skill category' });
    this.skillNameDropdown = page.getByRole('combobox', { name: 'Skill Name' });
    this.duaDateStart = page.getByPlaceholder('Due Date').and(page.locator('[date-range="start"]'));
    this.dueDateEnd = page.getByPlaceholder('Due Date').and(page.locator('[date-range="end"]'));
    this.priorityOptionalButton = page.getByText('Optional', { exact: true });
    this.priorityMandatoryButton = page.getByText('Mandatory', { exact: true });
    this.statusAssignedButton = page.getByText('Assigned', { exact: true });
    this.statusInProgressButton = page.getByText('In Progress', { exact: true });
    this.assignedByManagerSection = page.getByText('Assigned By Manager', { exact: true });
    this.assignedByAdminSection = page.getByText('Assigned By Admin', { exact: true });
    this.managerAssignedContentCards = page.locator(`//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']`);
    this.adminAssignedContentCards = page.locator(`//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']`);
    this.contentCard = page.locator('._listColumn_p5zy6_346 ._listTop_p5zy6_354 ._listHeadingWrap_p5zy6_516');
    this.assignedTooltip = page.getByRole('tooltip', { name: 'Mark as in progress' });
    this.inProgressTooltip = page.getByRole('tooltip', { name: 'Mark complete' });
    this.learningPathTooltip = page.getByRole('tooltip', { name: 'Click the card to open the learning path' });
    this.inprogressToast = page.getByText('Marked as in progress');
    this.markCompleteToast = page.locator('div').filter({ hasText: 'Marked as completed' }).first();
    this.confirmCompleteCancelButton = page.getByRole('button', { name: 'Cancel'});
    this.yesMarkCompleteButton = page.getByRole('button', { name: 'Yes, mark complete'});

  }

  async homepageTitleCheck() {
      await this.homepageTitle.waitFor({ state: 'visible' });
      await expect(this.assignedCoursesTitle).toBeVisible();
      await expect(this.aiReccomendationsTitle).toBeVisible();
  }

  async searchCourse(courseName) {
    await this.searchTextbox.waitFor({ state: 'visible' });
    await this.searchTextbox.fill(courseName);
  }

  async selectSkillCategory(category) {
    await this.skillCatgeoryDropdown.waitFor({ state: 'visible' });
    await this.skillCatgeoryDropdown.selectOption({ label: category });
  }

  async selectSkillName(skillName) {
    await this.skillNameDropdown.waitFor({ state: 'visible' });
    await this.skillNameDropdown.selectOption({ label: skillName });
  }

  async getContentName(){
    await this.contentCard.first().waitFor({ state: 'visible' });
    const names = await this.contentCard.allTextContents();
    return names.map(n => n.trim()).filter(Boolean);
  }

  async getManagerAssignedCardNames() {
    await this.assignedByManagerSection.waitFor({ state: 'visible' });
    const contentsElement = this.page.locator(`//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_p5zy6_516')]`);
    await contentsElement.first().waitFor({ state: 'visible' });
    console.log("********************* Manager Assigned Contents ************************");
    const managerAssignedContentNames = await contentsElement.allTextContents();
    return managerAssignedContentNames;
  }

    async getAdminAssignedCardNames() {
    await this.assignedByAdminSection.waitFor({ state: 'visible' });
    const contentsElement = this.page.locator(`//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_p5zy6_516')]`);
    await contentsElement.first().waitFor({ state: 'visible' });
    console.log("********************* Admin Assigned Contents ************************");
    const adminAssignedContentNames = await contentsElement.allTextContents();
    return adminAssignedContentNames;
  }

  async checkManagerAdminsections(){
    await this.assignedByManagerSection.waitFor({ state: 'visible' });
    await expect(this.adminAssignedContentCards).toBeVisible();
    await expect(this.assignedByAdminSection).toBeVisible();
    await expect(this.adminAssignedContentCards).toBeVisible();
  }


  async specificContentDisplayCheck(contentName) {
    const btn = this.page.locator(`//span[text()='${contentName}']`);
    await btn.scrollIntoViewIfNeeded();
    await btn.first().highlight()
    await btn.waitFor({ state: 'visible' });
  }

  async specificContentProgressButton(contentName) {
    const btn = this.page.locator(`//span[text()='${contentName}']/../../../div/div/div/div/button`);
    await btn.scrollIntoViewIfNeeded();
    await btn.waitFor({ state: 'visible' });
    return btn;
  }

  async assignedTooltipMessageCheck(){
    const toolTipMessage = await this.assignedTooltip;
    await expect(toolTipMessage).toBeVisible();
  }

  async inProgressTooltipMessageCheck(){
    const toolTipMessage = await this.inProgressTooltip;
    await expect(toolTipMessage).toBeVisible();
  }

  async learningPathTooltipMessageCheck(){
    const toolTipMessage = await this.learningPathTooltip;
    await expect(toolTipMessage).toBeVisible();
  }

  async inProgressToastMessageCheck(){
    const toast = await this.inProgressToast;
    await toast.waitFor({ state: 'visible', timeout: 8000 });
  }

  async markCompleteToastMessageCheck(){
    const toast = await this.markCompleteToast;
    await toast.waitFor({ state: 'visible', timeout: 8000 });
  }

  async confirmCompletionWarningMessageCheck(contentName)
  {
    await this.page.getByText('Confirm completion').toBeVisible();
    await this.page.getByLabel('Confirm completion').getByText(`${contentName}`).toBeVisible();
  }


}