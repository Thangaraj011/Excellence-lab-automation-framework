
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
    this.contentCardsAtManager = this.assignedByManagerSection.locator('._columnScrollBody_12h3c_15')
    this.assignedByAdminSection = page.getByText('Assigned By Admin', { exact: true });

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

}