import { test, expect } from '../fixtures/index.js';

test.describe.serial("Homepage Learning path status update validation"), ()=>{

  test("Learning path specific individual content status update to Inprogress validation"), async({authPage, homePage, learningRecordsPage, genericUtils}) => {
    
    const learningPathName = await genericUtils.getValueByKey('IP_LearningPathName');
    const contentName = await genericUtils.getValueByKey('IP_contentName');
    await homePage.verifyHomepageLoaded();
    await homePage.verifyManagerAndAdminSections();
    await homePage.verifyContentVisible(learningPathName);

    await homePage.openLearningPath(learningPathName);
    const currentLPProgress = await homePage.verifyLearningPathDetailsScreen(learningPathName);
    await homePage.verifyFiltersOnLearningPathDetailsScreen();
    await homePage.getListItems();



  }
}


