import { test, expect } from '../../fixtures/index.js';

const SEARCH_TERM = 'Gemini';
const TYPE_FILTER = 'Article';

test.describe.serial('Content Catalogue filter validation', () => {
  test('search content catalogue Individual content and filter by type', async ({ homePage, contentCataloguePage }) => {
    await homePage.verifyHomepageLoaded();
    await homePage.verifyManagerAndAdminSections();

    await contentCataloguePage.open();
    await contentCataloguePage.verifyPageLoaded();

    await contentCataloguePage.search(SEARCH_TERM);
    const rowCount = await contentCataloguePage.getRowCount();
    expect(rowCount).toBeGreaterThan(0);
    await contentCataloguePage.verifyRowsContainText(SEARCH_TERM);

    await contentCataloguePage.applyTypeFilter(TYPE_FILTER);
    const filteredCount = await contentCataloguePage.getRowCount();
    expect(filteredCount).toBeGreaterThan(0);
    await contentCataloguePage.verifyRowsType(TYPE_FILTER);
  });
});
