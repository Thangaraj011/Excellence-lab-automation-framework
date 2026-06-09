import { test, expect } from '../../fixtures/index.js';
import {  BasicComponents } from '../../utils/BasicComponents.js';
import { learningPathData } from '../../data/homepage-learning-path-sample.data.js';

test.describe.serial('Homepage Learning path status update validation', () =>{
  let todaysDate;

  test.beforeEach(async ({ homePage, genericUtils }) => {
    todaysDate = new BasicComponents().getTodaysDate();
    const { learningPathName } = learningPathData.individualInProgress;

    await homePage.verifyHomepageLoaded();
    await homePage.verifyManagerAndAdminSections();
    await homePage.verifyContentVisible(learningPathName);

    await homePage.openLearningPath(learningPathName);
    await homePage.verifyLearningPathDetailsScreen(learningPathName);
  });

  test('Learning path specific individual content status update to Inprogress validation', { tag: ['@LPtestsNew'] }, async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
    const data = learningPathData.individualInProgress;

    await homePage.verifyFiltersOnLearningPathDetailsScreen();
    await homePage.verifyContentVisible(data.contentName);

    await test.step('Mark content as In Progress', async () => {
        const progressButton = await homePage.getContentProgressButton(data.contentName);
        await progressButton.hover();
        await homePage.verifyAssignedTooltip();
        await progressButton.click();
        await homePage.verifyInProgressTooltip();
      });

    await learningRecordsPage.verifyInLearningRecords(data.contentName, todaysDate, data.expectedStatus);
  });


  test('Learning path specific individual content status update to Completed validation', { tag: ['@LPtestsNew'] }, async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
    const data = learningPathData.individualCompleted;
    const currentProgress = await homePage.getLearningPathProgressPercentage();

    await homePage.verifyFiltersOnLearningPathDetailsScreen();
    await homePage.verifyContentVisible(data.contentName);

    await test.step('Mark content as Completed', async () => {
        const progressButton = await homePage.getContentProgressButton(data.contentName);
        await progressButton.hover();
        await homePage.verifyInProgressTooltip();
        await progressButton.click();

        await homePage.verifyConfirmCompletionDialog(data.contentName);
        await homePage.yesMarkCompleteButton.click();
        await homePage.verifyMarkCompleteToast();
      });

    await homePage.expectProgressChanged(currentProgress);

    await learningRecordsPage.verifyInLearningRecords(data.contentName, todaysDate, data.expectedStatus);
  });

  test('Entire Learning path status update to Completed validation', { tag: ['@LPtestsNew'] }, async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
    const data = learningPathData.entirePathCompleted;
    const currentProgress = await homePage.getLearningPathProgressPercentage();
    
    await homePage.verifyFiltersOnLearningPathDetailsScreen();

    const contentNames = await homePage.getListedIndividualContentNames();
    await homePage.markAllIndividualContentsToCompleteStatus(contentNames);

    await homePage.expectProgressChanged(currentProgress);

    await learningRecordsPage.verifyStatusOfTheContents(contentNames, todaysDate);

  });



});