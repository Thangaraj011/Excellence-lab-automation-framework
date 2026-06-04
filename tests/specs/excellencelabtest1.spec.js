import { test, expect } from '@playwright/test';
import { TestContextSetup } from '../utils/TestContextSetup';

test.describe('Authentication Tests', () => {
  
  test('Employee Homepage validation', {tag: '@smoke'}, async ({},testInfo) => {

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

});