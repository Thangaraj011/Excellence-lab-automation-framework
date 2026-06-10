import { test, expect } from "../../fixtures/index.js";
import { filtersTestData } from "../../data/homepage-filters-validation.data.js";

test.describe.serial("Home Page filters validation", () => {
  const data = filtersTestData.searchFilters;
  test.beforeEach(async ({ homePage, genericUtils }) => {
    await homePage.verifyHomepageLoaded();
    await homePage.verifyManagerAndAdminSections();
  });

  test(
    "Search textbox filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      await homePage.verifySearchContentVisible(data.searchContentText);
    },
  );

  test(
    "Skill category filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      await homePage.selectSkillCategory(data.skillCategoryValue);
      await homePage.verifyOnlySelectedSkillCategoryContentsVisible(
        data.skillCategoryValue,
      );
    },
  );

  test(
    "Skill Name filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      await homePage.selectSkillName(data.skillNameValue);
      await homePage.verifyOnlySelectedSkillNameContentsVisible(
        data.skillNameValue,
      );
    },
  );

  test(
    "Due Date filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      await homePage.selectDueDates(data.dueDateStart, data.dueDateEnd);
      await homePage.verifyAllDueDatesInRange(
        data.dueDateStart,
        data.dueDateEnd,
      );
    },
  );

  test(
    "Quick filters priority validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      const data = filtersTestData.quickFilters;
      await homePage.selectPriority(data.optionalPriority);
      await homePage.verifyDisplayedContentsPriority(data.optionalPriority);
    },
  );

  test(
    "Quick filters status validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      const data = filtersTestData.quickFilters;
      await homePage.selectPriority(data.assignedStatus);
      await homePage.verifyDisplayedContentsPriority(data.mandatoryPriority);
    },
  );

  test.only(
    "Assigned By Manager sort By filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      const data = filtersTestData.managerSortBy;
      const contentNames = await homePage.getManagerAssignedCardNames();
      await homePage.verifyNamesSorted(contentNames, data.titleSortToAscending);
    },
  );

  test(
    "Assigned By Admin sort By filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      const data = filtersTestData.adminSortBy;
      await homePage.verifySearchContentVisible(data.searchContentText);
      const contentNames = await homePage.getAdminAssignedCardNames();
      await homePage.verifyNamesSorted(contentNames, "desc");
    },
  );

  test(
    "Multiple filter validation",
    { tag: ["@homepageFilters"] },
    async ({ authPage, homePage, genericUtils }) => {
      const data = filtersTestData.searchFilters;
      await homePage.verifySearchContentVisible(data.searchContentText);
    },
  );
});
