import { test, expect } from "../../fixtures/index.js";
import { filtersTestData } from "../../data/homepage-filters-validation.data.js";

test.describe.serial("Home Page filters validation", () => {
  const data = filtersTestData.multipleFilters;
  test.beforeEach(async ({ homePage }) => {
    await homePage.verifyHomepageLoaded();
    await homePage.verifyManagerAndAdminSections();
  });

  test(
    "Search textbox filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      await homePage.enterSearchText(data.searchContentText);
      await homePage.verifyContentVisible(data.searchContentText);
    },
  );

  test(
    "Skill category filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      await homePage.selectSkillCategory(data.skillCategoryValue);
      await homePage.verifyOnlySelectedSkillCategoryContentsVisible(data.skillCategoryValue);
    },
  );

  test(
    "Skill Name filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      await homePage.selectSkillName(data.skillNameValue);
      await homePage.verifyOnlySelectedSkillNameContentsVisible(data.skillNameValue);
    },
  );

  test(
    "Due Date filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      await homePage.selectDueDates(data.dueDateStart, data.dueDateEnd);
      await homePage.verifyAllDueDatesInRange(data.dueDateStart,data.dueDateEnd);
    },
  );

  test(
    "Quick filters priority validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      await homePage.selectPriority(data.priorityLevel);
      await homePage.verifyDisplayedContentsPriority(data.priorityLevel);
    },
  );

  test(
    "Quick filters status validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      const [managerResponse, adminResponse] = await homePage.selectStatusAndReturnResponses(data.contentStatus,data.apiUrlIdentifier);
      const apiContentTitlesRetrieved = await homePage.getAllTitlesFromResponses(managerResponse,adminResponse);
      const uiContentTitlesDisplayed = await homePage.getContentNames();
      expect(apiContentTitlesRetrieved).toEqual(uiContentTitlesDisplayed);
    },
  );

  test(
    "Assigned By Manager Content Title sort By filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      await homePage.selectManagerSortByOption(data.sortByTitleDescending);
      const contentNames = await homePage.getManagerAssignedCardNames();
      await homePage.verifyContentTitlesSorted(contentNames,data.sortToDescending);
    },
  );

  test(
    "Assigned By Manager Content Priority sort By filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      const data = filtersTestData.sortByFilters;
      await homePage.selectManagerSortByOption(data.sortByMandatoryFirst);
      const cards = await homePage.managerAssignedContentCards;
      await homePage.verifyOptionalContentsDisplayedLast(cards);
    },
  );

  test(
    "Assigned By Manager Content Due Date sort By filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      const data = filtersTestData.sortByFilters;
      await homePage.selectManagerSortByOption(data.sortByDueDateLateFirst);
      const dueDates = await homePage.managerAssignedContentDueDate;
      await homePage.verifyDueDatesSorted(dueDates, data.sortToDescending);
    },
  );

  test(
    "Assigned By Admin Content Title sort By filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      const data = filtersTestData.sortByFilters;
      await homePage.selectAdminSortByOption(data.sortByTitleDescending);
      const contentNames = await homePage.getAdminAssignedCardNames();
      await homePage.verifyContentTitlesSorted(contentNames,data.sortToDescending);
    },
  );

  test(
    "Assigned By Admin Content Priority sort By filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      const data = filtersTestData.sortByFilters;
      await homePage.selectAdminSortByOption(data.sortByMandatoryFirst);
      const cards = await homePage.adminAssignedContentCards;
      await homePage.verifyOptionalContentsDisplayedLast(cards);
    },
  );

  test(
    "Assigned By Admin Content Due Date sort By filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      const data = filtersTestData.sortByFilters;
      await homePage.selectAdminSortByOption(data.sortByDueDateEarlyFirst);
      const dueDates = await homePage.adminAssignedContentDueDate;
      await homePage.verifyDueDatesSorted(dueDates, data.sortToAscending);
    },
  );

  test.only(
    "Multiple filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      await homePage.enterSearchText(data.searchContentText);
      await homePage.selectDueDates(data.dueDateStart, data.dueDateEnd);
      await homePage.selectPriority(data.priorityLevel);
      const [managerResponse, adminResponse] = await homePage.selectStatusAndReturnResponses(data.contentStatus,data.apiUrlIdentifier);
      const apiContentTitlesRetrieved = await homePage.getAllTitlesFromResponses(managerResponse,adminResponse);
      const uiContentTitlesDisplayed = await homePage.getContentNames();
      expect(apiContentTitlesRetrieved).toEqual(uiContentTitlesDisplayed);
    },
  );
});
