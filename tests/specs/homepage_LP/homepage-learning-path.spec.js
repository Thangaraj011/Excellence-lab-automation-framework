import { test, expect } from '../../fixtures/index.js';
import {  BasicComponents } from '../../utils/BasicComponents.js';

test.describe.serial('Homepage Learning path status update validation', () =>{

  test('Learning path specific individual content status update to Inprogress validation', { tags: ['@LPtests'] }, async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
    const basicComponents = new BasicComponents();
    const todaysDate = basicComponents.getTodaysDate();
    console.log(todaysDate);
    const learningPathName = await genericUtils.getValueByKey('IP_LearningPathName');
    const individualContentName = await genericUtils.getValueByKey('IP_IndividualContentName');
    await homePage.verifyHomepageLoaded();
    await homePage.verifyManagerAndAdminSections();
    await homePage.verifyContentVisible(learningPathName);

    await homePage.openLearningPath(learningPathName);
    await homePage.verifyLearningPathDetailsScreen(learningPathName);
    const currentLearningPathProgressPercentage = await homePage.getLearningPathProgressPercentage();
    console.log(currentLearningPathProgressPercentage);

    await homePage.verifyFiltersOnLearningPathDetailsScreen();
    await homePage.verifyContentVisible(individualContentName);

    const progressButton = await homePage.getContentProgressButton(individualContentName);
    await progressButton.hover();
    await homePage.verifyAssignedTooltip();

    await progressButton.click();
    await homePage.verifyInProgressTooltip();

    const updatedLearningPathProgressPercentage = await homePage.verifyLearningPathDetailsScreen(learningPathName);
    expect(updatedLearningPathProgressPercentage).not.toBe(currentLearningPathProgressPercentage);

    await learningRecordsPage.getLearningRecordsButton().click();
    await authPage.waitForLoadState('domcontentloaded');
    await learningRecordsPage.screenTitleCheck();

    const contentTitle = await learningRecordsPage.getFirstContentTitle();
    await expect(contentTitle).toHaveText(individualContentName);
    //await expect(learningRecordsPage.getContentDate(individualContentName))
    //  .toHaveText(todaysDate);
    // await expect(learningRecordsPage.getContentStatus(individualContentName))
    //   .toHaveText('In Progress');
  });


  test('Learning path specific individual content status update to Completed validation', { tags: ['@LPtests'] }, async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
    const basicComponents = new BasicComponents();
    const todaysDate = basicComponents.getTodaysDate();
    console.log(todaysDate);
    const learningPathName = await genericUtils.getValueByKey('IP_LearningPathName');
    const individualContentName = await genericUtils.getValueByKey('IP_IndividualContentName');
    await homePage.verifyHomepageLoaded();
    await homePage.verifyManagerAndAdminSections();
    await homePage.verifyContentVisible(learningPathName);

    await homePage.openLearningPath(learningPathName);
    await homePage.verifyLearningPathDetailsScreen(learningPathName);
    const currentLearningPathProgressPercentage = await homePage.getLearningPathProgressPercentage();
    console.log(currentLearningPathProgressPercentage);

    await homePage.verifyFiltersOnLearningPathDetailsScreen();
    await homePage.verifyContentVisible(individualContentName);

    const progressButton = await homePage.getContentProgressButton(individualContentName);
    await progressButton.hover();
    await homePage.verifyInProgressTooltip();
    await progressButton.click();

    await homePage.verifyConfirmCompletionDialog(individualContentName);
    await homePage.yesMarkCompleteButton.click();
    await homePage.verifyMarkCompleteToast();

    const updatedLearningPathProgressPercentage = await homePage.verifyLearningPathDetailsScreen(learningPathName);
    expect(updatedLearningPathProgressPercentage).not.toBe(currentLearningPathProgressPercentage);

    await learningRecordsPage.getLearningRecordsButton().click();
    await authPage.waitForLoadState('domcontentloaded');
    await learningRecordsPage.screenTitleCheck();

    const contentTitle = await learningRecordsPage.getFirstContentTitle();
    await expect(contentTitle).toHaveText(individualContentName);
    //await expect(learningRecordsPage.getContentDate(individualContentName))
    //  .toHaveText(todaysDate);
    // await expect(learningRecordsPage.getContentStatus(individualContentName))
    //   .toHaveText('Completed');
  });

  test('Entire Learning path status update to Completed validation', { tags: ['@LPtests'] }, async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
    const basicComponents = new BasicComponents();
    const todaysDate = basicComponents.getTodaysDate();
    console.log(todaysDate);
    const learningPathName = await genericUtils.getValueByKey('IP_LearningPathName');
    const individualContentName = await genericUtils.getValueByKey('IP_IndividualContentName');
    await homePage.verifyHomepageLoaded();
    await homePage.verifyManagerAndAdminSections();
    await homePage.verifyContentVisible(learningPathName);

    await homePage.openLearningPath(learningPathName);
    await homePage.verifyLearningPathDetailsScreen(learningPathName);
    const currentLearningPathProgressPercentage = await homePage.getLearningPathProgressPercentage();
    await homePage.verifyFiltersOnLearningPathDetailsScreen();

    const contentNames = await homePage.getListedIndividualContentNames();
    await homePage.markAllIndividualContentsToCompleteStatus(contentNames);

    const updatedLearningPathProgressPercentage = await homePage.verifyLearningPathDetailsScreen(learningPathName);
    expect(updatedLearningPathProgressPercentage).not.toBe(currentLearningPathProgressPercentage);

    await learningRecordsPage.getLearningRecordsButton().click();
    await authPage.waitForLoadState('domcontentloaded');
    await learningRecordsPage.screenTitleCheck();

    
  });



});