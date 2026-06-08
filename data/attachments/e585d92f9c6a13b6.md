# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-learning-path-sample.spec.js >> Homepage Learning path status update validation >> Learning path specific individual content status update to Completed validation
- Location: tests/specs/homepage/homepage-learning-path-sample.spec.js:38:3

# Error details

```
ReferenceError: expectedStatus is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
      - generic [ref=e68]:
        - generic [ref=e69]:
          - button "Back to homepage" [ref=e70] [cursor=pointer]:
            - img "arrow-left" [ref=e72]:
              - img [ref=e73]
          - heading "Test sample Learning path Magic 2026" [level=4] [ref=e75]
        - generic [ref=e77]:
          - generic [ref=e78]: In Progress
          - generic [ref=e79]: Mandatory
        - generic [ref=e80]:
          - progressbar "Learning path completion 50 percent" [ref=e82]
          - strong [ref=e87]: 50%
        - separator [ref=e88]
        - heading "Learning Path Content" [level=5] [ref=e89]
        - generic [ref=e92]:
          - strong [ref=e94]: Quick Filters
          - generic [ref=e95]:
            - generic [ref=e96]:
              - generic [ref=e97]: Priority
              - generic "Filter by priority" [ref=e98]:
                - generic [ref=e99] [cursor=pointer]: Optional
                - generic [ref=e100] [cursor=pointer]: Mandatory
            - generic [ref=e101]:
              - generic [ref=e102]: Status
              - generic "Filter by status" [ref=e103]:
                - generic [ref=e104] [cursor=pointer]: Assigned
                - generic [ref=e105] [cursor=pointer]: In Progress
                - generic [ref=e106] [cursor=pointer]: Completed
        - generic [ref=e107]:
          - generic [ref=e110] [cursor=pointer]:
            - generic [ref=e111]:
              - generic [ref=e113]:
                - generic [ref=e114]: Due
                - generic [ref=e115]: 28-05-2026
              - generic [ref=e117]:
                - status "Individual Content" [ref=e118]:
                  - img [ref=e119]:
                    - img [ref=e120]
                  - generic [ref=e122]: Individual Content
                - button "In progress, mark complete" [ref=e124]:
                  - img [ref=e126]:
                    - img [ref=e127]
            - generic [ref=e130]:
              - generic [ref=e132]: Test sample confusion Magic 2026
              - generic [ref=e134]:
                - generic [ref=e135]:
                  - generic [ref=e137]: Crowd Entertainment
                  - generic [ref=e139]: Confusion Magic
                - separator [ref=e140]
                - generic [ref=e141]:
                  - generic [ref=e142]: Mandatory
                  - generic [ref=e143]: Assigned by Admin
          - generic [ref=e146] [cursor=pointer]:
            - generic [ref=e147]:
              - generic [ref=e149]:
                - generic [ref=e150]: Due
                - generic [ref=e151]: 31-05-2026
              - generic [ref=e153]:
                - status "Individual Content" [ref=e154]:
                  - img [ref=e155]:
                    - img [ref=e156]
                  - generic [ref=e158]: Individual Content
                - img "Completed" [ref=e160]:
                  - img "check-circle" [ref=e161]:
                    - img [ref=e162]
            - generic [ref=e166]:
              - generic [ref=e168]: Confusion magic sample test 2026
              - generic [ref=e170]:
                - generic [ref=e171]:
                  - generic [ref=e173]: Crowd Entertainment
                  - generic [ref=e175]: Vanishing Magic
                - separator [ref=e176]
                - generic [ref=e177]:
                  - generic [ref=e178]: Mandatory
                  - generic [ref=e179]: Assigned by Admin
  - generic [ref=e180]: "0"
  - generic [ref=e182]:
    - img "check-circle" [ref=e183]:
      - img [ref=e184]
    - generic [ref=e186]: Marked as completed
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/index.js';
  2  | import {  BasicComponents } from '../../utils/BasicComponents.js';
  3  | import { learningPathData } from '../../data/homepage-learning-path-sample.data.js';
  4  | 
  5  | test.describe.serial('Homepage Learning path status update validation', () =>{
  6  |   let todaysDate;
  7  | 
  8  |   test.beforeEach(async ({ homePage, genericUtils }) => {
  9  |     todaysDate = new BasicComponents().getTodaysDate();
  10 |     const { learningPathName } = learningPathData.individualInProgress;
  11 | 
  12 |     await homePage.verifyHomepageLoaded();
  13 |     await homePage.verifyManagerAndAdminSections();
  14 |     await homePage.verifyContentVisible(learningPathName);
  15 | 
  16 |     await homePage.openLearningPath(learningPathName);
  17 |     await homePage.verifyLearningPathDetailsScreen(learningPathName);
  18 |   });
  19 | 
  20 |   test('Learning path specific individual content status update to Inprogress validation', { tag: ['@LPtestsNew'] }, async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
  21 |     const data = learningPathData.individualInProgress;
  22 | 
  23 |     await homePage.verifyFiltersOnLearningPathDetailsScreen();
  24 |     await homePage.verifyContentVisible(data.contentName);
  25 | 
  26 |     await test.step('Mark content as In Progress', async () => {
  27 |         const progressButton = await homePage.getContentProgressButton(data.contentName);
  28 |         await progressButton.hover();
  29 |         await homePage.verifyAssignedTooltip();
  30 |         await progressButton.click();
  31 |         await homePage.verifyInProgressTooltip();
  32 |       });
  33 | 
  34 |     await learningRecordsPage.verifyInLearningRecords(data.contentName, todaysDate, data.expectedStatus);
  35 |   });
  36 | 
  37 | 
  38 |   test('Learning path specific individual content status update to Completed validation', { tag: ['@LPtestsNew'] }, async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
  39 |     const data = learningPathData.individualCompleted;
  40 |     const currentProgress = await homePage.getLearningPathProgressPercentage();
  41 | 
  42 |     await homePage.verifyFiltersOnLearningPathDetailsScreen();
  43 |     await homePage.verifyContentVisible(data.contentName);
  44 | 
  45 |     await test.step('Mark content as Completed', async () => {
  46 |         const progressButton = await homePage.getContentProgressButton(data.contentName);
  47 |         await progressButton.hover();
  48 |         await homePage.verifyInProgressTooltip();
  49 |         await progressButton.click();
  50 | 
  51 |         await homePage.verifyConfirmCompletionDialog(data.contentName);
  52 |         await homePage.yesMarkCompleteButton.click();
  53 |         await homePage.verifyMarkCompleteToast();
  54 |       });
  55 | 
  56 |     await homePage.expectProgressChanged(currentProgress);
  57 | 
> 58 |     await learningRecordsPage.verifyInLearningRecords(data.contentName, todaysDate, expectedStatus);
     |                                                                                     ^ ReferenceError: expectedStatus is not defined
  59 |   });
  60 | 
  61 |   test('Entire Learning path status update to Completed validation', { tag: ['@LPtestsNew'] }, async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
  62 |     const data = learningPathData.entirePathCompleted;
  63 |     const currentProgress = await homePage.getLearningPathProgressPercentage();
  64 |     
  65 |     await homePage.verifyFiltersOnLearningPathDetailsScreen();
  66 | 
  67 |     const contentNames = await homePage.getListedIndividualContentNames();
  68 |     await homePage.markAllIndividualContentsToCompleteStatus(contentNames);
  69 | 
  70 |     await homePage.expectProgressChanged(currentProgress);
  71 | 
  72 |     await learningRecordsPage.verifyStatusOfTheContents(contentNames, todaysDate);
  73 | 
  74 |   });
  75 | 
  76 | 
  77 | 
  78 | });
```