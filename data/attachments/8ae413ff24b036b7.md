# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixture_based_tests/homepage-filters-validation.spec.js >> Home Page filters validation >> Multiple filter validation
- Location: tests/specs/fixture_based_tests/homepage-filters-validation.spec.js:132:8

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 4
+ Received  + 1

- Array [
-   "Thangaraj Testing sample 1",
-   "Test sample Learning path Magic 2026",
- ]
+ Array []
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - tabpanel "Assigned Courses" [active] [ref=e79]:
            - generic [ref=e81]:
              - generic [ref=e82]:
                - generic [ref=e85]: Learning Progress
                - generic [ref=e87]:
                  - generic [ref=e89]:
                    - application [ref=e92]
                    - generic:
                      - generic: "2"
                      - generic: Total Assigned
                  - generic [ref=e99]:
                    - generic [ref=e102]: 0 Assigned
                    - generic [ref=e105]: 2 In Progress
                    - generic [ref=e108]: 0 Completed
              - generic [ref=e109]:
                - generic [ref=e111]:
                  - generic [ref=e112]: Learning Trend
                  - button "Expand chart" [ref=e114] [cursor=pointer]:
                    - img "fullscreen" [ref=e116]:
                      - img [ref=e117]
                - application [ref=e123]:
                  - generic [ref=e170]:
                    - generic [ref=e171]:
                      - generic [ref=e173]: Dec
                      - generic [ref=e175]: Jan
                      - generic [ref=e177]: Feb
                      - generic [ref=e179]: Mar
                      - generic [ref=e181]: Apr
                      - generic [ref=e183]: May
                      - generic [ref=e185]: Jun
                    - generic [ref=e186]:
                      - generic [ref=e188]: "0"
                      - generic [ref=e190]: "5"
                      - generic [ref=e192]: "10"
                      - generic [ref=e194]: "18"
            - generic [ref=e195]:
              - generic [ref=e196]:
                - textbox "Search" [ref=e197]: sample
                - generic [ref=e198]:
                  - button "close-circle" [ref=e199] [cursor=pointer]:
                    - img "close-circle" [ref=e200]:
                      - img [ref=e201]
                  - img "search" [ref=e203]:
                    - img [ref=e204]
              - generic [ref=e206]:
                - generic [ref=e207]:
                  - generic: Skill category
                  - combobox [ref=e208]
                - img "down" [ref=e210]:
                  - img [ref=e211]
              - generic [ref=e213]:
                - generic [ref=e214]:
                  - generic: Skill Name
                  - combobox [ref=e215]
                - img "down" [ref=e217]:
                  - img [ref=e218]
              - generic [ref=e220]:
                - textbox "Due Date" [ref=e222]: 2026-05-30
                - generic "to" [ref=e224]:
                  - img "swap-right" [ref=e225]:
                    - img [ref=e226]
                - textbox "Due Date" [ref=e229]: 2026-06-30
                - generic:
                  - img "calendar":
                    - img
                - button "close-circle" [ref=e230] [cursor=pointer]:
                  - img "close-circle" [ref=e231]:
                    - img [ref=e232]
            - generic [ref=e236]:
              - strong [ref=e238]: Quick Filters
              - generic [ref=e239]:
                - generic [ref=e240]:
                  - generic [ref=e241]: Priority
                  - generic "Filter by priority" [ref=e242]:
                    - generic [ref=e243] [cursor=pointer]: Optional
                    - generic [ref=e244] [cursor=pointer]: Mandatory
                - generic [ref=e245]:
                  - generic [ref=e246]: Status
                  - generic "Filter by status" [ref=e247]:
                    - generic [ref=e248] [cursor=pointer]: Assigned
                    - generic [ref=e249] [cursor=pointer]: In Progress
            - generic [ref=e250]:
              - generic [ref=e252]:
                - generic [ref=e256]:
                  - generic [ref=e257]:
                    - generic [ref=e259]:
                      - img "crown" [ref=e260]:
                        - img [ref=e261]
                      - text: Assigned By Manager
                    - generic [ref=e264]: 1 Content
                  - generic [ref=e265]:
                    - generic "Sort courses" [ref=e267] [cursor=pointer]:
                      - generic [ref=e268]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e269]
                      - img "down" [ref=e271]:
                        - img [ref=e272]
                    - button "Collapse section" [expanded] [ref=e275] [cursor=pointer]:
                      - img "up" [ref=e277]:
                        - img [ref=e278]
                - generic [ref=e285] [cursor=pointer]:
                  - generic [ref=e286]:
                    - generic [ref=e288]:
                      - generic [ref=e289]: Due
                      - generic [ref=e290]: 30-05-2026
                    - generic [ref=e292]:
                      - status "Assigned learning path" [ref=e293]:
                        - img [ref=e294]:
                          - img [ref=e295]
                        - generic [ref=e297]: Learning Path
                      - button "Click the card to open the learning path" [disabled] [ref=e299]:
                        - generic:
                          - img:
                            - img
                  - generic [ref=e300]:
                    - generic [ref=e302]: Thangaraj Testing sample 1
                    - generic [ref=e304]:
                      - generic [ref=e305]:
                        - generic [ref=e307]: GenAI, Data Science, Cloud Engineering Core
                        - generic [ref=e309]: Secure API Service, AI, Automation & IaC
                      - separator [ref=e310]
                      - generic [ref=e311]:
                        - generic [ref=e312]: Mandatory
                        - generic [ref=e313]: Assigned by Manager
              - generic [ref=e315]:
                - generic [ref=e319]:
                  - generic [ref=e320]:
                    - generic [ref=e322]:
                      - img "user" [ref=e323]:
                        - img [ref=e324]
                      - text: Assigned By Admin
                    - generic [ref=e327]: 1 Content
                  - generic [ref=e328]:
                    - generic "Sort courses" [ref=e330] [cursor=pointer]:
                      - generic [ref=e331]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e332]
                      - img "down" [ref=e334]:
                        - img [ref=e335]
                    - button "Collapse section" [expanded] [ref=e338] [cursor=pointer]:
                      - img "up" [ref=e340]:
                        - img [ref=e341]
                - generic [ref=e348] [cursor=pointer]:
                  - generic [ref=e349]:
                    - generic [ref=e351]:
                      - generic [ref=e352]: Due
                      - generic [ref=e353]: 25-06-2026
                    - generic [ref=e355]:
                      - status "Assigned learning path" [ref=e356]:
                        - img [ref=e357]:
                          - img [ref=e358]
                        - generic [ref=e360]: Learning Path
                      - button "Click the card to open the learning path" [disabled] [ref=e362]:
                        - generic:
                          - img:
                            - img
                  - generic [ref=e363]:
                    - generic [ref=e365]: Test sample Learning path Magic 2026
                    - generic [ref=e367]:
                      - generic [ref=e368]:
                        - generic [ref=e370]: Crowd Entertainment
                        - generic [ref=e372]: Confusion Magic, Vanishing Magic
                      - separator [ref=e373]
                      - generic [ref=e374]:
                        - generic [ref=e375]: Mandatory
                        - generic [ref=e376]: Assigned by Admin
  - generic [ref=e377]: "0"
```

# Test source

```ts
  43  |       await homePage.verifyAllDueDatesInRange(data.dueDateStart,data.dueDateEnd);
  44  |     },
  45  |   );
  46  | 
  47  |   test(
  48  |     "Quick filters priority validation",
  49  |     { tag: ["@homepageFilters"] },
  50  |     async ({ authPage, homePage, genericUtils }) => {
  51  |       await homePage.selectPriority(data.priorityLevel);
  52  |       await homePage.verifyDisplayedContentsPriority(data.priorityLevel);
  53  |     },
  54  |   );
  55  | 
  56  |   test(
  57  |     "Quick filters status validation",
  58  |     { tag: ["@homepageFilters"] },
  59  |     async ({ authPage, homePage, genericUtils }) => {
  60  |       const [managerResponse, adminResponse] = await homePage.selectStatusAndReturnResponses(data.contentStatus,data.apiUrlIdentifier);
  61  |       const apiContentTitlesRetrieved = await homePage.getAllTitlesFromResponses(managerResponse,adminResponse);
  62  |       const uiContentTitlesDisplayed = await homePage.getContentNames();
  63  |       expect(apiContentTitlesRetrieved).toEqual(uiContentTitlesDisplayed);
  64  |     },
  65  |   );
  66  | 
  67  |   test(
  68  |     "Assigned By Manager Content Title sort By filter validation",
  69  |     { tag: ["@homepageFilters"] },
  70  |     async ({ authPage, homePage, genericUtils }) => {
  71  |       await homePage.selectManagerSortByOption(data.sortByTitleDescending);
  72  |       const contentNames = await homePage.getManagerAssignedCardNames();
  73  |       await homePage.verifyContentTitlesSorted(contentNames,data.sortToDescending);
  74  |     },
  75  |   );
  76  | 
  77  |   test(
  78  |     "Assigned By Manager Content Priority sort By filter validation",
  79  |     { tag: ["@homepageFilters"] },
  80  |     async ({ authPage, homePage, genericUtils }) => {
  81  |       const data = filtersTestData.sortByFilters;
  82  |       await homePage.selectManagerSortByOption(data.sortByMandatoryFirst);
  83  |       const cards = await homePage.managerAssignedContentCards;
  84  |       await homePage.verifyOptionalContentsDisplayedLast(cards);
  85  |     },
  86  |   );
  87  | 
  88  |   test(
  89  |     "Assigned By Manager Content Due Date sort By filter validation",
  90  |     { tag: ["@homepageFilters"] },
  91  |     async ({ authPage, homePage, genericUtils }) => {
  92  |       const data = filtersTestData.sortByFilters;
  93  |       await homePage.selectManagerSortByOption(data.sortByDueDateLateFirst);
  94  |       const dueDates = await homePage.managerAssignedContentDueDate;
  95  |       await homePage.verifyDueDatesSorted(dueDates, data.sortToDescending);
  96  |     },
  97  |   );
  98  | 
  99  |   test(
  100 |     "Assigned By Admin Content Title sort By filter validation",
  101 |     { tag: ["@homepageFilters"] },
  102 |     async ({ authPage, homePage, genericUtils }) => {
  103 |       const data = filtersTestData.sortByFilters;
  104 |       await homePage.selectAdminSortByOption(data.sortByTitleDescending);
  105 |       const contentNames = await homePage.getAdminAssignedCardNames();
  106 |       await homePage.verifyContentTitlesSorted(contentNames,data.sortToDescending);
  107 |     },
  108 |   );
  109 | 
  110 |   test(
  111 |     "Assigned By Admin Content Priority sort By filter validation",
  112 |     { tag: ["@homepageFilters"] },
  113 |     async ({ authPage, homePage, genericUtils }) => {
  114 |       const data = filtersTestData.sortByFilters;
  115 |       await homePage.selectAdminSortByOption(data.sortByMandatoryFirst);
  116 |       const cards = await homePage.adminAssignedContentCards;
  117 |       await homePage.verifyOptionalContentsDisplayedLast(cards);
  118 |     },
  119 |   );
  120 | 
  121 |   test(
  122 |     "Assigned By Admin Content Due Date sort By filter validation",
  123 |     { tag: ["@homepageFilters"] },
  124 |     async ({ authPage, homePage, genericUtils }) => {
  125 |       const data = filtersTestData.sortByFilters;
  126 |       await homePage.selectAdminSortByOption(data.sortByDueDateEarlyFirst);
  127 |       const dueDates = await homePage.adminAssignedContentDueDate;
  128 |       await homePage.verifyDueDatesSorted(dueDates, data.sortToAscending);
  129 |     },
  130 |   );
  131 | 
  132 |   test.only(
  133 |     "Multiple filter validation",
  134 |     { tag: ["@homepageFilters"] },
  135 |     async ({ authPage, homePage, genericUtils }) => {
  136 |       await homePage.enterSearchText(data.searchContentText);
  137 |       await homePage.selectDueDates(data.dueDateStart, data.dueDateEnd);
  138 |       await homePage.selectPriority(data.priorityLevel);
  139 |       const [managerResponse, adminResponse] = await homePage.selectStatusAndReturnResponses(data.contentStatus,data.apiUrlIdentifier);
  140 |       await authPage.pause();
  141 |       const apiContentTitlesRetrieved = await homePage.getAllTitlesFromResponses(managerResponse,adminResponse);
  142 |       const uiContentTitlesDisplayed = await homePage.getContentNames();
> 143 |       expect(apiContentTitlesRetrieved).toEqual(uiContentTitlesDisplayed);
      |                                         ^ Error: expect(received).toEqual(expected) // deep equality
  144 |     },
  145 |   );
  146 | });
  147 | 
```