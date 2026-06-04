import { test, expect } from '@playwright/test';
import { TestContextSetup } from '../utils/TestContextSetup';

test.describe('Individual Content Status Update Validation', () => {
  
  test('Individual Content update status to Inprogress', {tag: '@smoke'}, async () => {
    const contextSetup = new TestContextSetup(testInfo);
    const page = await contextSetup.init(`${process.env.BASE_FE_URL}`, 'chromium');
    const token = await contextSetup.genericUtils.generateJWT(process.env.EMP_USERNAME);
    await contextSetup.genericUtils.setupAuthCookie(token);
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    const contentName = await contextSetup.genericUtils.getValueByKey('IP_ContentName');
    const contentBtn = await contextSetup.poManager._homePage.specificContent(contentName);
    await contentBtn.hover();
    await contextSetup.poManager._homePage.assignedTooltipMessageCheck();
    await contentBtn.click();
    await page.pause();

  });

  test('Individual Content update status to Complete', {tag: '@smoke'}, async () => {
    const contextSetup = new TestContextSetup();
    const page = await contextSetup.init(`https://rahulshettyacademy.com/practice`, 'firefox');
    await page.pause();
  });

  test('log in with valid credentials webkit', async () => {
    const contextSetup = new TestContextSetup();
    const page = await contextSetup.init(`https://eventhub.rahulshettyacademy.com/login`, 'webkit');
    await page.pause();

  });

});