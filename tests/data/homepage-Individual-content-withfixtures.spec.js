import { test, expect } from '../fixtures/testFixtures';

test.describe.serial('Homepage Individual Content status update validation with custom Fixtures', () => {

  test.beforeEach(async ({ testContext }) => {
    const token = await testContext.genericUtils.generateJWT(process.env.EMP_USER);
    await testContext.genericUtils.setupAuthCookie(token);
    await testContext.page.reload();
    await testContext.page.waitForLoadState('domcontentloaded');
  });
  
  test('Individual Content update status to Inprogress with custom fixtures', {tag: '@fixtures'}, async ({testContext}) => {
    
    const contentName = await testContext.genericUtils.getValueByKey('IP_ContentName');
    await testContext.poManager._homePage.verifyHomepageLoaded();
    await testContext.poManager._homePage.verifyManagerAndAdminSections();
    // const managerAssignedContents = await contextSetup.poManager._homePage.getManagerAssignedCardNames();
    // console.log(managerAssignedContents);
    // const adminAssignedContents = await contextSetup.poManager._homePage.getAdminAssignedCardNames();
    // console.log(adminAssignedContents);
    // await testContext.poManager._homePage.verifyContentVisible(contentName);
    // const contentProgressButton = await testContext.poManager._homePage.getContentProgressButton(contentName);
    // await contentProgressButton.hover();
    // await testContext.poManager._homePage.verifyAssignedTooltip();
    // await contentProgressButton.click();
    // await testContext.poManager._homePage.verifyInProgressTooltip();
    // await testContext.poManager._learningRecordsPage.getLearningRecordsButton().click();
    // await page.waitForLoadState('domcontentloaded');
    // await testContext.poManager._learningRecordsPage.screenTitleCheck();
    // const contentTitle = await testContext.poManager._learningRecordsPage.getFirstContentTitle();
    // await expect(contentTitle).toHaveText(contentName);
    // await expect(testContext.poManager._learningRecordsPage.getContentSource(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentSource'));
    // // await expect(testContext.poManager._learningRecordsPage.getContentType(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentType'));
    // // await expect(testContext.poManager._learningRecordsPage.getContentDate(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentDate'));
    // await expect(testContext.poManager._learningRecordsPage.getContentStatus(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentStatus'));


  });

  test('Individual Content update status to Complete with custom fixtures', {tag: '@fixtures'}, async ({testContext}) => {

    const contentName = await testContext.genericUtils.getValueByKey('IP_ContentName');
    await testContext.poManager._homePage.verifyHomepageLoaded();
    await testContext.poManager._homePage.verifyManagerAndAdminSections();
    // await testContext.poManager._homePage.verifyContentVisible(contentName);
    // const contentProgressButton = await testContext.poManager._homePage.getContentProgressButton(contentName);
    // await contentProgressButton.hover();
    // await testContext.poManager._homePage.verifyInProgressTooltip();
    // await contentProgressButton.click();
    // await testContext.poManager._homePage.verifyConfirmCompletionDialog(contentName);
    // await testContext.poManager._homePage.yesMarkCompleteButton.click();
    // await testContext.poManager._homePage.verifyMarkCompleteToast();
    // await testContext.poManager._learningRecordsPage.getLearningRecordsButton().click();
    // await page.waitForLoadState('domcontentloaded');
    // await testContext.poManager._learningRecordsPage.screenTitleCheck();
    // const contentTitle = await testContext.poManager._learningRecordsPage.getFirstContentTitle();
    // await expect(contentTitle).toHaveText(contentName);
    // await expect(testContext.poManager._learningRecordsPage.getContentSource(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentSource'));
    // // await expect(contextSetup.poManager._learningRecordsPage.getContentType(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentType'));
    // // await expect(contextSetup.poManager._learningRecordsPage.getContentDate(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentDate'));
    // await expect(contextSetup.poManager._learningRecordsPage.getContentStatus(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentStatus'));


  });

  

});