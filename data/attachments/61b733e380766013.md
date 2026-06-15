# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-filters-validation.spec.js >> Home Page filters validation >> Assigned By Manager sort By filter validation
- Location: tests/specs/homepage/homepage-filters-validation.spec.js:83:8

# Error details

```
TypeError: Cannot read properties of undefined (reading 'titleSortToAscending')
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - complementary [ref=e5]:
    - generic [ref=e7]:
      - link "EL Logo Excellence Lab" [ref=e9] [cursor=pointer]:
        - /url: /homepage
        - generic [ref=e10]:
          - img "EL Logo" [ref=e11]
          - heading "Excellence Lab" [level=4] [ref=e12]
      - generic [ref=e13]:
        - link "home Homepage" [ref=e14] [cursor=pointer]:
          - /url: /homepage
          - button "home Homepage" [ref=e15]:
            - img "home" [ref=e17]:
              - img [ref=e18]
            - generic [ref=e20]: Homepage
        - link "clock-circle Learning Records" [ref=e21] [cursor=pointer]:
          - /url: /history
          - button "clock-circle Learning Records" [ref=e22]:
            - img "clock-circle" [ref=e24]:
              - img [ref=e25]
            - generic [ref=e28]: Learning Records
        - link "file-text Content Catalogue" [ref=e29] [cursor=pointer]:
          - /url: /content-catalogue
          - button "file-text Content Catalogue" [ref=e30]:
            - img "file-text" [ref=e32]:
              - img [ref=e33]
            - generic [ref=e35]: Content Catalogue
      - generic [ref=e36]:
        - link "My profile" [ref=e37] [cursor=pointer]:
          - /url: /my-profile
          - img [ref=e39]
          - generic [ref=e40]: Thangaraj R
        - generic [ref=e41]:
          - link "form Feedback" [ref=e42] [cursor=pointer]:
            - /url: /user-feedback
            - button "form Feedback" [ref=e43]:
              - img "form" [ref=e45]:
                - img [ref=e46]
              - generic [ref=e49]: Feedback
          - button "menu-fold Minimize" [ref=e50] [cursor=pointer]:
            - img "menu-fold" [ref=e52]:
              - img [ref=e53]
            - generic [ref=e55]: Minimize
          - button "logout Logout" [ref=e56] [cursor=pointer]:
            - img "logout" [ref=e58]:
              - img [ref=e59]
            - generic [ref=e61]: Logout
  - main [ref=e63]:
    - generic [ref=e67]:
      - heading "Homepage" [level=4] [ref=e68]
      - generic [ref=e69]:
        - tablist [ref=e70]:
          - generic [ref=e72]:
            - tab "Assigned Courses" [selected] [ref=e74] [cursor=pointer]
            - tab "AI Recommendations" [ref=e76] [cursor=pointer]
        - tabpanel "Assigned Courses" [ref=e79]:
          - generic [ref=e88]:
            - generic [ref=e89]:
              - textbox "Search" [ref=e90]
              - img "search" [ref=e92]:
                - img [ref=e93]
            - generic [ref=e95]:
              - generic [ref=e96]:
                - generic: Skill category
                - combobox [ref=e97]
              - img "down" [ref=e99]:
                - img [ref=e100]
            - generic [ref=e102]:
              - generic [ref=e103]:
                - generic: Skill Name
                - combobox [ref=e104]
              - img "down" [ref=e106]:
                - img [ref=e107]
            - generic [ref=e109]:
              - textbox "Due Date" [ref=e111]
              - generic "to" [ref=e113]:
                - img "swap-right" [ref=e114]:
                  - img [ref=e115]
              - textbox "Due Date" [ref=e118]
              - generic:
                - img "calendar":
                  - img
          - generic [ref=e121]:
            - strong [ref=e123]: Quick Filters
            - generic [ref=e124]:
              - generic [ref=e125]:
                - generic [ref=e126]: Priority
                - generic "Filter by priority" [ref=e127]:
                  - generic [ref=e128] [cursor=pointer]: Optional
                  - generic [ref=e129] [cursor=pointer]: Mandatory
              - generic [ref=e130]:
                - generic [ref=e131]: Status
                - generic "Filter by status" [ref=e132]:
                  - generic [ref=e133] [cursor=pointer]: Assigned
                  - generic [ref=e134] [cursor=pointer]: In Progress
          - generic [ref=e135]:
            - generic [ref=e141]:
              - generic [ref=e144]:
                - img "crown" [ref=e145]:
                  - img [ref=e146]
                - text: Assigned By Manager
              - generic [ref=e148]:
                - generic "Sort courses" [ref=e150] [cursor=pointer]:
                  - generic [ref=e151]:
                    - generic: Sort by
                    - combobox "Sort courses" [ref=e152]
                  - img "down" [ref=e154]:
                    - img [ref=e155]
                - button "Collapse section" [expanded] [ref=e158] [cursor=pointer]:
                  - img "up" [ref=e160]:
                    - img [ref=e161]
            - generic [ref=e198]:
              - generic [ref=e201]:
                - img "user" [ref=e202]:
                  - img [ref=e203]
                - text: Assigned By Admin
              - generic [ref=e205]:
                - generic "Sort courses" [ref=e207] [cursor=pointer]:
                  - generic [ref=e208]:
                    - generic: Sort by
                    - combobox "Sort courses" [ref=e209]
                  - img "down" [ref=e211]:
                    - img [ref=e212]
                - button "Collapse section" [expanded] [ref=e215] [cursor=pointer]:
                  - img "up" [ref=e217]:
                    - img [ref=e218]
```

# Test source

```ts
  1   | import { test, expect } from "../../fixtures/index.js";
  2   | import { filtersTestData } from "../../data/homepage-filters-validation.data.js";
  3   | 
  4   | test.describe.serial("Home Page filters validation", () => {
  5   |   const data = filtersTestData.searchFilters;
  6   |   test.beforeEach(async ({ homePage, genericUtils }) => {
  7   |     await homePage.verifyHomepageLoaded();
  8   |     await homePage.verifyManagerAndAdminSections();
  9   |   });
  10  | 
  11  |   test(
  12  |     "Search textbox filter validation",
  13  |     { tag: ["@homepageFilters"] },
  14  |     async ({ authPage, homePage, genericUtils }) => {
  15  |       await homePage.verifySearchContentVisible(data.searchContentText);
  16  |     },
  17  |   );
  18  | 
  19  |   test(
  20  |     "Skill category filter validation",
  21  |     { tag: ["@homepageFilters"] },
  22  |     async ({ authPage, homePage, genericUtils }) => {
  23  |       await homePage.selectSkillCategory(data.skillCategoryValue);
  24  |       await homePage.verifyOnlySelectedSkillCategoryContentsVisible(
  25  |         data.skillCategoryValue,
  26  |       );
  27  |     },
  28  |   );
  29  | 
  30  |   test(
  31  |     "Skill Name filter validation",
  32  |     { tag: ["@homepageFilters"] },
  33  |     async ({ authPage, homePage, genericUtils }) => {
  34  |       await homePage.selectSkillName(data.skillNameValue);
  35  |       await homePage.verifyOnlySelectedSkillNameContentsVisible(
  36  |         data.skillNameValue,
  37  |       );
  38  |     },
  39  |   );
  40  | 
  41  |   test(
  42  |     "Due Date filter validation",
  43  |     { tag: ["@homepageFilters"] },
  44  |     async ({ authPage, homePage, genericUtils }) => {
  45  |       await homePage.selectDueDates(data.dueDateStart, data.dueDateEnd);
  46  |       await homePage.verifyAllDueDatesInRange(
  47  |         data.dueDateStart,
  48  |         data.dueDateEnd,
  49  |       );
  50  |     },
  51  |   );
  52  | 
  53  |   test(
  54  |     "Quick filters priority validation",
  55  |     { tag: ["@homepageFilters"] },
  56  |     async ({ authPage, homePage, genericUtils }) => {
  57  |       const data = filtersTestData.quickFilters;
  58  |       await homePage.selectPriority(data.optionalPriority);
  59  |       await homePage.verifyDisplayedContentsPriority(data.optionalPriority);
  60  |     },
  61  |   );
  62  | 
  63  |   test(
  64  |     "Quick filters status validation",
  65  |     { tag: ["@homepageFilters"] },
  66  |     async ({ authPage, homePage, genericUtils }) => {
  67  |       const data = filtersTestData.quickFilters;
  68  |       const [managerResponse, adminResponse] =
  69  |         await homePage.selectStatusAndReturnResponses(
  70  |           data.assignedStatus,
  71  |           data.apiUrlIdentifier,
  72  |         );
  73  |       const apiContentTitlesRetrieved =
  74  |         await homePage.getAllTitlesFromResponses(
  75  |           managerResponse,
  76  |           adminResponse,
  77  |         );
  78  |       const uiContentTitlesDisplayed = await homePage.getContentNames();
  79  |       expect(apiContentTitlesRetrieved).toEqual(uiContentTitlesDisplayed);
  80  |     },
  81  |   );
  82  | 
  83  |   test.only(
  84  |     "Assigned By Manager sort By filter validation",
  85  |     { tag: ["@homepageFilters"] },
  86  |     async ({ authPage, homePage, genericUtils }) => {
  87  |       const data = filtersTestData.managerSortBy;
> 88  |       await homePage.selectManagerSortByOption(data.titleSortToAscending);
      |                                                     ^ TypeError: Cannot read properties of undefined (reading 'titleSortToAscending')
  89  |       const contentNames = await homePage.getManagerAssignedCardNames();
  90  |       await homePage.verifyNamesSorted(contentNames, data.titleSortToAscending);
  91  |     },
  92  |   );
  93  | 
  94  |   test.only(
  95  |     "Assigned By Admin sort By filter validation",
  96  |     { tag: ["@homepageFilters"] },
  97  |     async ({ authPage, homePage, genericUtils }) => {
  98  |       const data = filtersTestData.sortByFilters;
  99  |       await homePage.selectManagerSortByOption(data.sortByMandatoryFirst);
  100 |       const ContentTitles = await homePage.getManagerAssignedCardNames();
  101 |     },
  102 |   );
  103 | 
  104 |   test(
  105 |     "Multiple filter validation",
  106 |     { tag: ["@homepageFilters"] },
  107 |     async ({ authPage, homePage, genericUtils }) => {
  108 |       const data = filtersTestData.searchFilters;
  109 |       await homePage.verifySearchContentVisible(data.searchContentText);
  110 |     },
  111 |   );
  112 | });
  113 | 
```