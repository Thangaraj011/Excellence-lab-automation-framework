# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-learning-path-sample.spec.js >> Homepage Learning path status update validation >> Learning path specific individual content status update to Inprogress validation
- Location: tests/specs/homepage/homepage-learning-path-sample.spec.js:20:3

# Error details

```
TypeError: Cannot destructure property 'learningPathName' of 'learningPathData.individualInProgress' as it is undefined.
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/index.js';
  2  | import {  BasicComponents } from '../../utils/BasicComponents.js';
  3  | import { learningPathData } from '../../data/homepage-learning-path-sample.data.js';
  4  | 
  5  | test.describe.serial('Homepage Learning path status update validation', () =>{
  6  |   let todaysDate;
  7  |   console.log('DATA:', JSON.stringify(learningPathData, null, 2));
  8  |   test.beforeEach(async ({ homePage, genericUtils }) => {
  9  |     todaysDate = new BasicComponents().getTodaysDate();
> 10 |     const { learningPathName } = learningPathData.individualInProgress;
     |             ^ TypeError: Cannot destructure property 'learningPathName' of 'learningPathData.individualInProgress' as it is undefined.
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
  22 |     const currentProgress = await homePage.getLearningPathProgressPercentage();
  23 | 
  24 |     await homePage.verifyFiltersOnLearningPathDetailsScreen();
  25 |     await homePage.verifyContentVisible(data.contentName);
  26 | 
  27 |     await test.step('Mark content as In Progress', async () => {
  28 |         const progressButton = await homePage.getContentProgressButton(data.contentName);
  29 |         await progressButton.hover();
  30 |         await homePage.verifyAssignedTooltip();
  31 |         await progressButton.click();
  32 |         await homePage.verifyInProgressTooltip();
  33 |       });
  34 | 
  35 |     await homePage.expectProgressChanged(currentProgress);
  36 | 
  37 |     await learningRecordsPage.verifyInLearningRecords(data.contentName, todaysDate, expectedStatus);
  38 |   });
  39 | 
  40 | 
  41 |   test('Learning path specific individual content status update to Completed validation', { tag: ['@LPtestsNew'] }, async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
  42 |     const data = learningPathData.individualCompleted;
  43 |     const currentProgress = await homePage.getLearningPathProgressPercentage();
  44 | 
  45 |     await homePage.verifyFiltersOnLearningPathDetailsScreen();
  46 |     await homePage.verifyContentVisible(data.contentName);
  47 | 
  48 |     await test.step('Mark content as Completed', async () => {
  49 |         const progressButton = await homePage.getContentProgressButton(data.contentName);
  50 |         await progressButton.hover();
  51 |         await homePage.verifyInProgressTooltip();
  52 |         await progressButton.click();
  53 | 
  54 |         await homePage.verifyConfirmCompletionDialog(data.contentName);
  55 |         await homePage.yesMarkCompleteButton.click();
  56 |         await homePage.verifyMarkCompleteToast();
  57 |       });
  58 | 
  59 |     await homePage.expectProgressChanged(currentProgress);
  60 | 
  61 |     await learningRecordsPage.verifyInLearningRecords(data.contentName, todaysDate, expectedStatus);
  62 |   });
  63 | 
  64 |   test('Entire Learning path status update to Completed validation', { tag: ['@LPtestsNew'] }, async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
  65 |     const data = learningPathData.entirePathCompleted;
  66 |     const currentProgress = await homePage.getLearningPathProgressPercentage();
  67 |     
  68 |     await homePage.verifyFiltersOnLearningPathDetailsScreen();
  69 | 
  70 |     const contentNames = await homePage.getListedIndividualContentNames();
  71 |     await homePage.markAllIndividualContentsToCompleteStatus(contentNames);
  72 | 
  73 |     await homePage.expectProgressChanged(currentProgress);
  74 | 
  75 |     await learningRecordsPage.verifyStatusOfTheContents(contentNames, todaysDate);
  76 | 
  77 |   });
  78 | 
  79 | 
  80 | 
  81 | });
```