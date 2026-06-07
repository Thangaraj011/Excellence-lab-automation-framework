import { test, expect } from '@playwright/test';
import { TestContextSetup } from '../context/TestContextSetup';

test.describe.serial('Homepage Individual Content Status Update Validation', () => {
  
  test('Individual Content update status to Inprogress', {tag: '@smoke'}, async ({}, testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
    const page = await contextSetup.init(`${process.env.BASE_URL}`, `${process.env.BROWSER_TYPE}`);
    const token = await contextSetup.genericUtils.generateJWT(process.env.EMP_USER);
    await contextSetup.genericUtils.setupAuthCookie(token);
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    const contentName = await contextSetup.genericUtils.getValueByKey('IP_ContentName');
    await contextSetup.poManager.homePage.verifyHomepageLoaded();
    await contextSetup.poManager.homePage.verifyManagerAndAdminSections();
    // const managerAssignedContents = await contextSetup.poManager.homePage.getManagerAssignedCardNames();
    // console.log(managerAssignedContents);
    // const adminAssignedContents = await contextSetup.poManager.homePage.getAdminAssignedCardNames();
    // console.log(adminAssignedContents);
    await contextSetup.poManager.homePage.verifyContentVisible(contentName);
    const contentProgressButton = await contextSetup.poManager.homePage.getContentProgressButton(contentName);
    await contentProgressButton.hover();
    await contextSetup.poManager.homePage.verifyAssignedTooltip();
    await contentProgressButton.click();
    await contextSetup.poManager.homePage.verifyInProgressTooltip();
    await contextSetup.poManager.learningRecordsPage.getLearningRecordsButton().click();
    await page.waitForLoadState('domcontentloaded');
    await contextSetup.poManager.learningRecordsPage.screenTitleCheck();
    const contentTitle = await contextSetup.poManager.learningRecordsPage.getFirstContentTitle();
    await expect(contentTitle).toHaveText(contentName);
    await expect(contextSetup.poManager.learningRecordsPage.getContentSource(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentSource'));
    await expect(contextSetup.poManager.learningRecordsPage.getContentType(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentType'));
    await expect(contextSetup.poManager.learningRecordsPage.getContentDate(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentDate'));
    await expect(contextSetup.poManager.learningRecordsPage.getContentStatus(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentStatus'));


  });

  test.only('Individual Content update status to Complete', {tag: '@smoke'}, async ({}, testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
    const page = await contextSetup.init(`${process.env.BASE_URL}`, 'chromium');
    const token = await contextSetup.genericUtils.generateJWT(process.env.EMP_USER);
    await contextSetup.genericUtils.setupAuthCookie(token);
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    const contentName = await contextSetup.genericUtils.getValueByKey('IP_ContentName');
    await contextSetup.poManager.homePage.verifyHomepageLoaded();
    await contextSetup.poManager.homePage.verifyManagerAndAdminSections();
    await contextSetup.poManager.homePage.verifyContentVisible(contentName);
    const contentProgressButton = await contextSetup.poManager.homePage.getContentProgressButton(contentName);
    await contentProgressButton.hover();
    await contextSetup.poManager.homePage.verifyInProgressTooltip();
    await contentProgressButton.click();
    await contextSetup.poManager.homePage.verifyConfirmCompletionDialog(contentName);
    await contextSetup.poManager.homePage.yesMarkCompleteButton.click();
    await contextSetup.poManager.homePage.verifyMarkCompleteToast();
    await contextSetup.poManager.learningRecordsPage.getLearningRecordsButton().click();
    await page.waitForLoadState('domcontentloaded');
    await contextSetup.poManager.learningRecordsPage.screenTitleCheck();
    const contentTitle = await contextSetup.poManager.learningRecordsPage.getFirstContentTitle();
    await expect(contentTitle).toHaveText(contentName);
    await expect(contextSetup.poManager.learningRecordsPage.getContentSource(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentSource'));
    // await expect(contextSetup.poManager.learningRecordsPage.getContentType(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentType'));
    // await expect(contextSetup.poManager.learningRecordsPage.getContentDate(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentDate'));
    // await expect(contextSetup.poManager.learningRecordsPage.getContentStatus(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentStatus'));


  });

  

});