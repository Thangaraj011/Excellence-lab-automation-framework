
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

    this.contentCard = page.locator('.ant-card-body ._listColumn_p5zy6_346 ._listTop_p5zy6_354 ._listHeadingWrap_p5zy6_516');

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

  async getManagerAssignedCardNames() {
    await this.assignedByManagerSection.waitFor({ state: 'visible' });
    const sectionContainer = this.page.locator('div, section, .ant-card', { 
    hasText: 'Assigned By Manager'}).first();

    const count = await sectionCards.count();
    if (count === 0) {
      return this._getCardNamesFollowingHeader(this.assignedByManagerSection);
    }
    return (await sectionCards.allTextContents()).map(n => n.trim()).filter(Boolean);
  }


  async _getCardNamesFollowingHeader(headerLocator) {
    const names = await headerLocator.evaluate(el => {
      const results = [];
      let sibling = el.closest('[class]')?.nextElementSibling;
      while (sibling) {
        sibling.querySelectorAll('[class*="listHeadingWrap"]').forEach(node => {
          const text = node.textContent?.trim();
          if (text) results.push(text);
        });
        sibling = sibling.nextElementSibling;
      }
      return results;
    });
    return names;
  }

}