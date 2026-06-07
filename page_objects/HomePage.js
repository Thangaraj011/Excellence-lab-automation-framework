import {expect} from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;

    this.homepageTitle = page.getByRole('heading', { name: 'Homepage' });
    this.assignedCoursesTab =  page.getByRole('tab', { name: 'Assigned Courses' });
    this.aiRecommendationsTab =  page.getByRole('tab', { name: 'AI Recommendations' });

    this.searchTextbox = page.getByPlaceholder('Search');
    this.skillCatgeoryDropdown = page.getByRole('combobox', { name: 'Skill category' });
    this.skillNameDropdown = page.getByRole('combobox', { name: 'Skill Name' });
    this.dueDateStart = page.getByPlaceholder('Due Date').and(page.locator('[date-range="start"]'));
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
    
    this.inProgressToast = page.getByText('Marked as in progress');
    this.markCompleteToast = page.locator('div').filter({ hasText: 'Marked as completed' }).first();
    
    this.confirmCompleteCancelButton = page.getByRole('button', { name: 'Cancel'});
    this.yesMarkCompleteButton = page.getByRole('button', { name: 'Yes, mark complete'});

  }

  async verifyHomepageLoaded() {
      await this.homepageTitle.waitFor({ state: 'visible' });
      await expect(this.assignedCoursesTab).toBeVisible();
      await expect(this.aiRecommendationsTab).toBeVisible();
  }

  async verifyManagerAndAdminSections() {
    await expect(this.assignedByManagerSection).toBeVisible();
    await expect(this.assignedByAdminSection).toBeVisible();
  }

  async verifyAssignedTooltip()     { await expect(this.assignedTooltip).toBeVisible(); }
  async verifyInProgressTooltip()   { await expect(this.inProgressTooltip).toBeVisible(); }
  async verifyLearningPathTooltip() { await expect(this.learningPathTooltip).toBeVisible(); }

  async verifyInProgressToast() {
    await this.inProgressToast.waitFor({ state: 'visible', timeout: 8000 });
  }

  async verifyMarkCompleteToast() {
    await this.markCompleteToast.waitFor({ state: 'visible', timeout: 8000 });
  }

  async verifyConfirmCompletionDialog(contentName) {
    await expect(this.page.getByText('Confirm completion')).toBeVisible();
    await expect(
      this.page.getByLabel('Confirm completion').getByText(contentName)
    ).toBeVisible();
  }

  async verifyContentVisible(contentName) {
    const content = this.page.getByText(contentName, { exact: true });
    await content.scrollIntoViewIfNeeded();
    await expect(content).toBeVisible();
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

  async getContentNames(){
    const cards = this.page.locator('[class*="_listHeadingWrap_"]');
    await cards.first().waitFor({ state: 'visible' });
    const names = await cards.allTextContents();
    return names.map(n => n.trim()).filter(Boolean);
  }

  async getManagerAssignedCardNames() {
    await this.assignedByManagerSection.waitFor({ state: 'visible' });
    const cards = this.page.locator(
      `//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
    );
    await cards.first().waitFor({ state: 'visible' });
    return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  }

    async getAdminAssignedCardNames() {
    await this.assignedByAdminSection.waitFor({ state: 'visible' });
    const cards = this.page.locator(
      `//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
    );
    await cards.first().waitFor({ state: 'visible' });
    return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  }


  async getContentProgressButton(contentName) {
    const btn = this.page.locator(
      `//span[text()='${contentName}']/../../../div/div/div/div/button`
    );
    await btn.scrollIntoViewIfNeeded();
    await btn.waitFor({ state: 'visible' });
    return btn;
  }


}