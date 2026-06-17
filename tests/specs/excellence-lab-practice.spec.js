import { test, expect } from '../fixtures/index.js';
import { BasicComponents } from '../utils/BasicComponents.js';
import { learningPathData } from '../data/homepage-learning-path-sample.data.js';

test.describe.serial('Homepage Learning path status update validation', () => {
  let todaysDate;

  test.beforeEach(async ({homePage}) => {
    todaysDate = new BasicComponents().getTodaysDate();
    const { learningPathName } = learningPathData.individualInProgress;
    await homePage.verifyHomepageLoaded();
    await homePage.verifyManagerAndAdminSections();
  });


  test('Learning path specific individual content status update to Inprogress validation', { tag: ['@LPtestsNew'] }, async ({ homePage, learningRecordsPage }) => {
    const data = learningPathData.individualInProgress;
    await homePage.verifyContentVisible(data.learningPathName);
    await homePage.openLearningPath(data.learningPathName);
    await homePage.verifyLearningPathDetailsScreen(data.learningPathName);
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


});