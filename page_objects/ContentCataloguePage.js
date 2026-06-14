import { expect } from '@playwright/test';

export class ContentCataloguePage {
  constructor(page) {
    this.page = page;

    this.pageTitle = page.getByRole('heading', {
      name: /Content Catalogue - Individual Content/i,
    });

    this.searchInput = page.locator('input[placeholder="Search content..."]');
    this.typeFilterDropdown = page.locator('div.ant-select', {
      hasText: 'Filter by type',
    }).first();
    this.levelFilterDropdown = page.locator('div.ant-select', {
      hasText: 'Filter by level',
    }).first();
    this.sourceFilterDropdown = page.locator('div.ant-select', {
      hasText: 'Filter by source',
    }).first();

    this.tableRows = page.locator('tr.ant-table-row-level-0');
    this.typeOption = (type) =>
      page.locator('.ant-select-item-option-content', { hasText: type }).first();
  }

  async open() {
    const catalogueLink = this.page.getByText('Content Catalogue', {
      exact: true,
    });
    await catalogueLink.click();
    await this.pageTitle.waitFor({ state: 'visible' });
  }

  async verifyPageLoaded() {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.searchInput).toBeVisible();
    await expect(this.typeFilterDropdown).toBeVisible();
  }

  async search(term) {
    await this.searchInput.fill(term);
    await this.page.waitForTimeout(1200);
  }

  async applyTypeFilter(type) {
    await this.typeFilterDropdown.click();
    const option = this.typeOption(type);
    await expect(option).toBeVisible();
    await option.click();
    await this.page.waitForTimeout(1200);
  }

  async getRowCount() {
    return this.tableRows.count();
  }

  async verifyRowsContainText(term) {
    const rowCount = await this.getRowCount();
    for (let index = 0; index < rowCount; index++) {
      const rowText = (await this.tableRows.nth(index).innerText()).toLowerCase();
      expect(rowText).toContain(term.toLowerCase());
    }
  }

  async verifyRowsType(type) {
    const rowCount = await this.getRowCount();
    for (let index = 0; index < rowCount; index++) {
      const typeCell = this.tableRows.nth(index).locator('td').nth(3);
      await expect(typeCell).toHaveText(type);
    }
  }
}
