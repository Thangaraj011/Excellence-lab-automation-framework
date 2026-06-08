import { test, expect } from '../../fixtures/index.js';
import {  BasicComponents } from '../../utils/BasicComponents.js';

test.describe.serial('Homepage Learning path status update validation', () =>{
  let learningPathName;
  let todaysDate;

  test.beforeEach(async ({ homePage, genericUtils }) => {
    todaysDate = new BasicComponents().getTodaysDate();
    learningPathName = await genericUtils.getValueByKey('IP_LearningPathName');

    await homePage.verifyHomepageLoaded();
    await homePage.verifyManagerAndAdminSections();
    await homePage.verifyContentVisible(learningPathName);

    await homePage.openLearningPath(learningPathName);
    await homePage.verifyLearningPathDetailsScreen(learningPathName);
  });

  test('Learning path specific individual content status update to Inprogress validation', { tags: ['@LPtests'] }, async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
    const individualContentName = await genericUtils.getValueByKey('IP_IndividualContentName');
    const expectedStatus = await genericUtils.getValueByKey('IP_ContentStatus');
    const currentProgress = await homePage.getLearningPathProgressPercentage();

    await homePage.verifyFiltersOnLearningPathDetailsScreen();
    await homePage.verifyContentVisible(individualContentName);

    await test.step('Mark content as In Progress', async () => {
        const progressButton = await homePage.getContentProgressButton(individualContentName);
        await progressButton.hover();
        await homePage.verifyAssignedTooltip();
        await progressButton.click();
        await homePage.verifyInProgressTooltip();
      });

    await homePage.expectProgressChanged(currentProgress);

    await learningRecordsPage.verifyInLearningRecords(individualContentName, todaysDate, expectedStatus);
  });


  test('Learning path specific individual content status update to Completed validation', { tags: ['@LPtests'] }, async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
    const individualContentName = await genericUtils.getValueByKey('IP_IndividualContentName');
    const expectedStatus = await genericUtils.getValueByKey('IP_ContentStatus');
    const currentProgress = await homePage.getLearningPathProgressPercentage();

    await homePage.verifyFiltersOnLearningPathDetailsScreen();
    await homePage.verifyContentVisible(individualContentName);

    await test.step('Mark content as Completed', async () => {
        const progressButton = await homePage.getContentProgressButton(individualContentName);
        await progressButton.hover();
        await homePage.verifyInProgressTooltip();
        await progressButton.click();

        await homePage.verifyConfirmCompletionDialog(individualContentName);
        await homePage.yesMarkCompleteButton.click();
        await homePage.verifyMarkCompleteToast();
      });

    await homePage.expectProgressChanged(currentProgress);

    await learningRecordsPage.verifyInLearningRecords(individualContentName, todaysDate, expectedStatus);
  });

  test('Entire Learning path status update to Completed validation', { tags: ['@LPtests'] }, async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
    
    const currentProgress = await homePage.getLearningPathProgressPercentage();
    
    await homePage.verifyFiltersOnLearningPathDetailsScreen();

    const contentNames = await homePage.getListedIndividualContentNames();
    await homePage.markAllIndividualContentsToCompleteStatus(contentNames);

    await homePage.expectProgressChanged(currentProgress);

    await learningRecordsPage.verifyStatusOfTheContents(contentNames, todaysDate);

  });



});