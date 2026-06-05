import { test, expect } from '@playwright/test';
import { TestContextSetup } from '../utils/TestContextSetup';

test.describe('Excellence Lab Homepage Individual Content Status Update Validation', () => {
  
  test('Individual Content update status to Inprogress', {tag: '@smoke'}, async ({}, testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
    const page = await contextSetup.init(`${process.env.BASE_FE_URL}`, 'chromium');
    const token = await contextSetup.genericUtils.generateJWT(process.env.EMP_USERNAME);
    await contextSetup.genericUtils.setupAuthCookie(token);
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    const contentName = await contextSetup.genericUtils.getValueByKey('IP_ContentName');
    await contextSetup.poManager._homePage.homepageTitleCheck();
    await contextSetup.poManager._homePage.checkManagerAdminsections();
    // const managerAssignedContents = await contextSetup.poManager._homePage.getManagerAssignedCardNames();
    // console.log(managerAssignedContents);
    // const adminAssignedContents = await contextSetup.poManager._homePage.getAdminAssignedCardNames();
    // console.log(adminAssignedContents);
    await contextSetup.poManager._homePage.specificContentDisplayCheck(contentName);
    const contentProgressButton = await contextSetup.poManager._homePage.specificContentProgressButton(contentName);
    await contentProgressButton.hover();
    await contextSetup.poManager._homePage.assignedTooltipMessageCheck();
    await contentProgressButton.click();
    await contextSetup.poManager._homePage.inProgressToastMessageCheck();
    await contextSetup.poManager._learningRecordsPage.getLearningRecordsButton().click();
    await page.waitForLoadState('domcontentloaded');
    await contextSetup.poManager._learningRecordsPage.screenTitleCheck();
    const contentTitle = await contextSetup.poManager._learningRecordsPage.getFirstContentTitle();
    await expect(contentTitle).toHaveText(contentName);
    await expect(contextSetup.poManager._learningRecordsPage.getContentSource()).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentSource'));
    await expect(contextSetup.poManager._learningRecordsPage.getContentType()).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentType'));
    await expect(contextSetup.poManager._learningRecordsPage.getContentDate()).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentDate'));
    await expect(contextSetup.poManager._learningRecordsPage.getContentStatus()).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentStatus'));
    await page.pause();

  });

  test.only('Individual Content update status to Complete', {tag: '@smoke'}, async ({}, testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
    const page = await contextSetup.init(`${process.env.BASE_FE_URL}`, 'chromium');
    const token = await contextSetup.genericUtils.generateJWT(process.env.EMP_USERNAME);
    await contextSetup.genericUtils.setupAuthCookie(token);
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    const contentName = await contextSetup.genericUtils.getValueByKey('IP_ContentName');
    await contextSetup.poManager._homePage.homepageTitleCheck();
    await contextSetup.poManager._homePage.checkManagerAdminsections();
    await contextSetup.poManager._homePage.specificContentDisplayCheck(contentName);
    const contentProgressButton = await contextSetup.poManager._homePage.specificContentProgressButton(contentName);
    await contentProgressButton.hover();
    await contextSetup.poManager._homePage.inProgressTooltipMessageCheck();
    await contentProgressButton.click();
    await contextSetup.poManager._homePage.confirmCompletionWarningMessageCheck(contentName);
    await contextSetup.poManager._homePage.yesMarkCompleteButton.click();
    await contextSetup.poManager._homePage.markCompleteToastMessageCheck();
    await contextSetup.poManager._learningRecordsPage.getLearningRecordsButton().click();
    await page.waitForLoadState('domcontentloaded');
    await contextSetup.poManager._learningRecordsPage.screenTitleCheck();
    const contentTitle = await contextSetup.poManager._learningRecordsPage.getFirstContentTitle();
    await expect(contentTitle).toHaveText(contentName);
    await expect(contextSetup.poManager._learningRecordsPage.getContentSource(contentName)).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentSource'));
    await expect(contextSetup.poManager._learningRecordsPage.getContentType(contentName)).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentType'));
    await expect(contextSetup.poManager._learningRecordsPage.getContentDate(contentName)).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentDate'));
    await expect(contextSetup.poManager._learningRecordsPage.getContentStatus(contentName)).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentStatus'));
    await page.pause();

  });

  

});