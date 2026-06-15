import { expect } from '@playwright/test';

export class TeamDashboardPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Team dashboard' });
    this.homeLink = page.getByRole('link', { name: 'Homepage' }).first();
    this.learningRecordsLink = page.getByRole('link', { name: 'Learning Records' }).first();
    this.teamDashboardLink = page.getByRole('link', { name: 'Team dashboard' }).first();
    this.profileLink = page.getByRole('link', { name: 'Tarun Sareen' });
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
    this.signInButton = page.getByRole('button', { name: 'Sign in with Google' });

    this.searchReporteeInput = page.getByPlaceholder('Direct or all reportees');
    this.exportCsvButton = page.getByRole('button', { name: 'Export CSV' });
    this.statusAssignedButton = page.getByRole('button', { name: 'Assigned' }).first();
    this.statusInProgressButton = page.getByRole('button', { name: 'In Progress' }).first();
    this.statusCompletedButton = page.getByRole('button', { name: 'Completed' }).first();
    this.priorityOptionalButton = page.getByRole('button', { name: 'Optional' }).first();
    this.priorityMandatoryButton = page.getByRole('button', { name: 'Mandatory' }).first();

    this.filterByJobCategoryInput = page.getByPlaceholder('Filter by job category');
    this.filterBySquadInput = page.getByPlaceholder('Filter by squad');
    this.filterByProGrowSkillInput = page.getByPlaceholder('Filter by Pro or Grow people skill');
    this.filterBySkillCategoryInput = page.getByPlaceholder('Filter by skill category');
    this.filterBySkillNameInput = page.getByPlaceholder('Filter by skill name');
    this.filterBySourceInput = page.getByPlaceholder('Filter by source');

    this.monthButton = page.getByRole('button', { name: 'Month' });
    this.quarterButton = page.getByRole('button', { name: 'Quarter' });
    this.yearButton = page.getByRole('button', { name: 'Year' });

    this.tableRows = page.locator('table tbody tr');
    this.tableHeaders = page.locator('table th');
    this.firstRow = this.tableRows.first();
    this.pagination = page.locator('.ant-pagination');
  }

  async gotoTeamDashboard() {
    await this.page.goto('/team-dashboard');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async verifyLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.searchReporteeInput).toBeVisible();
    await expect(this.exportCsvButton).toBeVisible();
    await expect(this.statusAssignedButton).toBeVisible();
    await expect(this.priorityOptionalButton).toBeVisible();
  }

  async verifySidebarLinksVisible() {
    await expect(this.homeLink).toBeVisible();
    await expect(this.learningRecordsLink).toBeVisible();
    await expect(this.teamDashboardLink).toBeVisible();
    await expect(this.profileLink).toBeVisible();
    await expect(this.logoutButton).toBeVisible();
  }

  async verifySummaryWidgetsVisible() {
    await expect(this.page.getByText('Assigned Courses')).toBeVisible();
    await expect(this.page.getByText('Overdue')).toBeVisible();
    await expect(this.page.getByText('Not Started')).toBeVisible();
    await expect(this.page.getByText('In Progress')).toBeVisible();
    await expect(this.page.getByText('Completed')).toBeVisible();
    await expect(this.page.getByText('Total')).toBeVisible();
    await expect(this.page.getByText('Overall Progress')).toBeVisible();
    await expect(this.page.getByText('AI Suggestions', { exact: false })).toBeVisible();
  }

  async searchReportee(value) {
    await this.searchReporteeInput.fill(value);
    await this.searchReporteeInput.press('Enter');
    await this.page.waitForLoadState('networkidle');
  }

  async clearSearch() {
    await this.searchReporteeInput.fill('');
    await this.searchReporteeInput.press('Enter');
    await this.page.waitForLoadState('networkidle');
  }

  async clickStatusFilter(value) {
    await this.page.getByRole('button', { name: value, exact: true }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickPriorityFilter(value) {
    await this.page.getByRole('button', { name: value, exact: true }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickAssignedByFilter(value) {
    await this.page.getByText(value, { exact: true }).first().click();
    await this.page.waitForLoadState('networkidle');
  }

  async applyFilterByPlaceholder(placeholder, value) {
    const input = this.page.getByPlaceholder(placeholder);
    await input.fill(value);
    await input.press('Enter');
    await this.page.waitForLoadState('networkidle');
  }

  async selectTimePeriod(period) {
    await this.page.getByRole('button', { name: period, exact: true }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickExportCsv() {
    await this.exportCsvButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async verifyTableHeaders(expectedHeaders) {
    const actualHeaders = await this.tableHeaders.allTextContents();
    expect(actualHeaders).toEqual(expectedHeaders);
  }

  async verifyTableHasRows() {
    await expect(this.tableRows.first()).toBeVisible();
  }

  async verifyFirstRowContains(value) {
    await expect(this.firstRow).toContainText(value);
  }

  async verifyPaginationVisible() {
    await expect(this.pagination).toBeVisible();
  }

  async navigateToPage(pageNumber) {
    await this.page.locator('.ant-pagination li', { hasText: `${pageNumber}` }).first().click();
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToLearningRecords() {
    await this.learningRecordsLink.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickLogout() {
    await this.logoutButton.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async verifyOnLoginPage() {
    await expect(this.signInButton).toBeVisible();
  }
}
