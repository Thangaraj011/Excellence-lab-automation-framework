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
    this.contentCard = page.locator(
      '[class*="_listColumn_"] [class*="_listTop_"] [class*="_listHeadingWrap_"]'
    );
    
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


  async verifyLearningPathDetailsScreen(learningPathName)
  {
    await expect(this.page.getByRole('heading', { name: `${learningPathName}` })).toBeVisible();
    await expect(this.page.locator('.ant-progress-rail')).toBeVisible();
  }

  async verifyFiltersOnLearningPathDetailsScreen(){
    await expect(this.page.getByRole('heading', { name: 'Learning Path Content' })).toBeVisible();
    await expect(this.page.getByText('Quick Filters')).toBeVisible();
    await expect(this.page.getByText('Priority')).toBeVisible();
    await expect(this.page.locator('span').filter({ hasText: 'Optional' }).first()).toBeVisible();
    await expect(this.page.getByLabel('Filter by priority').getByText('Mandatory')).toBeVisible();
    await expect(this.page.getByText('Status')).toBeVisible();
    await expect(this.page.locator('span').filter({ hasText: 'Assigned' }).nth(1)).toBeVisible();
    await expect(this.page.locator('span').filter({ hasText: 'In Progress' }).first()).toBeVisible();
    await expect(this.page.locator('span').filter({ hasText: 'Completed' }).first()).toBeVisible();
  }

  async openIndividualContent(contentName){
    await this.page.getByText(contentName).click();

  }

  async openLearningPath(learningPathName){
    const content = this.page.getByText(learningPathName, { exact: true });
    await content.scrollIntoViewIfNeeded();
    await expect(content).toBeVisible();
    await this.page.getByText(learningPathName).click();
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

  async getLearningPathProgressPercentage()
  {
    const progressLocator = this.page.locator('[class*="_pathProgressPercent_"]');
    await progressLocator.waitFor({ state: 'visible' });
    const currentProgress = (await progressLocator.textContent())?.trim() ?? '';
    return currentProgress;
  }


  async getListedIndividualContentNames(){
    const contentNames = await this.page.locator(`//div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`).allTextContents();
    return contentNames;
  }


  async markAllIndividualContentsToCompleteStatus(contentNames)
  {
    for (const contentName of contentNames) {
      const progressButton = await this.getContentProgressButton(contentName);
      await progressButton.hover();

      const tooltip = this.page.getByRole('tooltip');
      await tooltip.waitFor({ state: 'visible' });
      const message = ((await tooltip.textContent())?.trim() ?? '').toLowerCase();

      if(message.includes('in progress')){
        await progressButton.click();
        await this.verifyInProgressToast()
        await this.inProgressToast.waitFor({ state: 'hidden' });

        await progressButton.hover();
        await this.verifyInProgressTooltip();
        await progressButton.click();
        await this.confirmCompletion(contentName);

      } else if (message.includes('mark complete')){
        await progressButton.click();
        await this.confirmCompletion(contentName);
      }
  }
    const finalProgressPercentage = await this.getLearningPathProgressPercentage();
    expect(finalProgressPercentage).toBe('100%');
  }


  async confirmCompletion(contentName) {
    await this.verifyConfirmCompletionDialog(contentName);
    await this.yesMarkCompleteButton.click();
    await this.verifyMarkCompleteToast();
    await this.markCompleteToast.waitFor({ state: 'hidden' });
}

}