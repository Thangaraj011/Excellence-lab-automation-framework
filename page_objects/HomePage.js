
export class HomePage {
  constructor(page) {
    this.page = page;
    this.titleText = page.getByRole('heading', { name: 'Homepage' });
    this.assignedCoursesTitle =  page.getByRole('tab', { name: 'Assigned Courses' });
    this.searchTextbox = page.getByPlaceholder('Search');
    this.skillCatgeoryDropdown = page.getByRole('combobox', { name: 'Skill category' });
    this.skillNameDropdown = page.getByRole('combobox', { name: 'Skill Name' });
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