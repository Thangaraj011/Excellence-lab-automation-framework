import {expect} from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.titleText = page.getByRole('heading', { name: 'Homepage' });
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
    this.managerAssigned = page.locator("//span[text()='Assigned By Manager']/../../../../../../../following::div[@class='ant-card-body']");
    this.contentCard = page.locator('._listColumn_p5zy6_346 ._listTop_p5zy6_354 ._listHeadingWrap_p5zy6_516');
    this.assignedTooltip = page.getByRole('tooltip', { name: 'Mark as in progress' });
    this.inProgressTooltip = page.getByRole('tooltip', { name: 'Mark complete' });
    this.learningPathTooltip = page.getByRole('tooltip', { name: 'Click the card to open the learning path' });
    this.inprogressToast = page;
    this.markCompleteToast = page;
    this.confirmCompleteCancelButton = page.getByRole('button', { name: 'Cancel'});
    this.yesMarkCompleteButton = page.getByRole('button', { name: 'Yes, mark complete'});

  }

  async titleCheck() {
      await this.titleText.waitFor({ state: 'visible' });
  }

  async searchCourse(courseName) {
    await this.searchTextbox.fill(courseName);
  }

  async selectSkillCategory(category) {
    await this.skillCatgeoryDropdown.selectOption({ label: category });
  }

  async selectSkillName(skillName) {
    await this.skillNameDropdown.selectOption({ label: skillName });
  }

  async getContentName(){
    await this.contentCard.first().waitFor({ state: 'visible' });
    const names = await this.contentCard.allTextContents();
    return names.map(n => n.trim()).filter(Boolean);
  }

  // async getManagerAssignedCardNames() {
  //   await this.assignedByManagerSection.waitFor({ state: 'visible' });

  // const names = await this.assignedByManagerSection.evaluate(headerEl => {
  //   // The header <span> lives inside .ant-card-head → .ant-card
  //   // The content cards live inside .ant-card-body of that SAME .ant-card
  //   const card = headerEl.closest('.ant-card');
  //   if (!card) return [];

  //   const cardBody = card.querySelector('.ant-card-body');
  //   if (!cardBody) return [];

  //   const results = [];
  //   cardBody
  //     .querySelectorAll('[class*="listHeadingWrap"]')
  //     .forEach(node => {
  //       const text = node.textContent?.trim();
  //       if (text) results.push(text);
  //     });

  //   return results;
  // });

  // return names;  
  // }


  // async _getCardNamesFollowingHeader(headerLocator) {
  //   const names = await headerLocator.evaluate(el => {
  //     const results = [];
  //     let sibling = el.closest('[class]')?.nextElementSibling;
  //     while (sibling) {
  //       sibling.querySelectorAll('[class*="listHeadingWrap"]').forEach(node => {
  //         const text = node.textContent?.trim();
  //         if (text) results.push(text);
  //       });
  //       sibling = sibling.nextElementSibling;
  //     }
  //     return results;
  //   });
  //   return names;
  // }

  async specificContent(contentName) {
    const btn = this.page.locator(`//span[text()='${contentName}']/../../../div/div/div/div/button`);
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
    await expect(toast).toHaveText("Mark as in progress");
  }

  async markCompleteToastMessageCheck(){
    const toast = await this.markCompleteToast;
    await toast.waitFor({ state: 'visible', timeout: 8000 });
    await expect(toast).toHaveText("Mark as Completed");
  }

  async confirmCompletionWarningMessageCheck(contentName)
  {
    await this.page.locator(`//div[text()='Confirm completion']`).toBeVisible();
    await this.page.locator(`//div[text()='${contentName}']`).toBeVisible();
  }


}