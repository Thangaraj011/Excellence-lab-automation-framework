import { test, expect } from '../fixtures/index.js';

test.describe.serial('Team Dashboard manager indirect validation', () => {

  test.beforeEach(async ({ teamDashboardPage }) => {
    await teamDashboardPage.gotoTeamDashboard();
    await teamDashboardPage.verifyLoaded();
  });

  test('Manager Team Dashboard - Load and verify main sections', { tag: ['@TeamDashboard'] }, async ({ authPage, teamDashboardPage }) => {
    await test.step('Verify sidebar links and summary widgets are visible', async () => {
      await teamDashboardPage.verifySidebarLinksVisible();
      await teamDashboardPage.verifySummaryWidgetsVisible();
      await expect(teamDashboardPage.heading).toBeVisible();
      await expect(authPage).toHaveURL(/.*\/team-dashboard/);
    });
  });

  test('Team Dashboard - Search and reportee filters', { tag: ['@TeamDashboard'] }, async ({authPage, teamDashboardPage}) => {
    await test.step('Search for a reportee and verify results', async () => {
      await teamDashboardPage.searchReportee('Ankit');
      await teamDashboardPage.verifyTableHasRows();
      await teamDashboardPage.verifyFirstRowContains('Ankit');
    });

    await test.step('Clear the search and verify full list returns', async () => {
      await teamDashboardPage.clearSearch();
      await teamDashboardPage.verifyTableHasRows();
    });
  });

  test('Team Dashboard - Use status and priority quick filters', { tag: ['@TeamDashboard'] }, async ({authPage, teamDashboardPage}) => {
    await test.step('Apply status filters and verify reportees update', async () => {
      await teamDashboardPage.clickStatusFilter('Assigned');
      await teamDashboardPage.verifyTableHasRows();
      await teamDashboardPage.clickStatusFilter('In Progress');
      await teamDashboardPage.verifyTableHasRows();
      await teamDashboardPage.clickStatusFilter('Completed');
      await teamDashboardPage.verifyTableHasRows();
    });

    await test.step('Apply priority filters and verify reportees update', async () => {
      await teamDashboardPage.clickPriorityFilter('Optional');
      await teamDashboardPage.verifyTableHasRows();
      await teamDashboardPage.clickPriorityFilter('Mandatory');
      await teamDashboardPage.verifyTableHasRows();
    });
  });

  test('Team Dashboard - Assigned by and content filters', { tag: ['@TeamDashboard'] }, async ({authPage, teamDashboardPage}) => {
    await test.step('Apply assigned by filters and verify results', async () => {
      await teamDashboardPage.clickAssignedByFilter('Manager');
      await teamDashboardPage.verifyTableHasRows();
      await teamDashboardPage.clickAssignedByFilter('Admin');
      await teamDashboardPage.verifyTableHasRows();
    });

    await test.step('Apply content filters and verify results', async () => {
      await teamDashboardPage.applyFilterByPlaceholder('Filter by job category', 'Direct');
      await teamDashboardPage.verifyTableHasRows();
      await teamDashboardPage.applyFilterByPlaceholder('Filter by squad', '');
      await teamDashboardPage.verifyTableHasRows();
      await teamDashboardPage.applyFilterByPlaceholder('Filter by Pro or Grow people skill', 'Pro');
      await teamDashboardPage.verifyTableHasRows();
      await teamDashboardPage.applyFilterByPlaceholder('Filter by skill category', 'Agile');
      await teamDashboardPage.verifyTableHasRows();
      await teamDashboardPage.applyFilterByPlaceholder('Filter by skill name', 'Market Research');
      await teamDashboardPage.verifyTableHasRows();
    });

    await test.step('Change the time period filter', async () => {
      await teamDashboardPage.selectTimePeriod('Month');
      await teamDashboardPage.selectTimePeriod('Quarter');
      await teamDashboardPage.selectTimePeriod('Year');
    });
  });

  test('Team Dashboard - Export, pagination, and row details', { tag: ['@TeamDashboard'] }, async ({authPage, teamDashboardPage}) => {
    await test.step('Export the CSV and verify table header columns', async () => {
      await teamDashboardPage.clickExportCsv();
      await teamDashboardPage.verifyTableHeaders([
        'Name',
        'Role',
        'Assigned',
        'In Progress',
        'Completed',
        'Overall Progress',
        'Pro skills',
        'Grow skills',
      ]);
      await teamDashboardPage.verifyTableHasRows();
    });

    await test.step('Verify pagination controls work', async () => {
      await teamDashboardPage.verifyPaginationVisible();
      await teamDashboardPage.navigateToPage(2);
      await teamDashboardPage.verifyTableHasRows();
    });
  });

  test('Team Dashboard - Navigation and logout', { tag: ['@TeamDashboard'] }, async ({ authPage, teamDashboardPage }) => {
    await test.step('Navigate to Learning Records and return', async () => {
      await teamDashboardPage.navigateToLearningRecords();
      await expect(authPage).toHaveURL(/.*\/history/);
      await authPage.goto('/team-dashboard');
      await authPage.waitForLoadState('domcontentloaded');
    });

    await test.step('Logout and verify login screen', async () => {
      await teamDashboardPage.clickLogout();
      await teamDashboardPage.verifyOnLoginPage();
    });
  });
});