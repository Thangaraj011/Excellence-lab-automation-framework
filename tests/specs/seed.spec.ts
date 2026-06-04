import { test, expect } from '@playwright/test';
import { TestContextSetup } from '../utils/TestContextSetup';

  test('Sample Test case new', async ({}, testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
        const page = await contextSetup.init(`${process.env.BASE_FE_URL}`, 'chromium');
        const token = await contextSetup.genericUtils?.generateJWT(process.env.EMP_USERNAME);
        await contextSetup.genericUtils?.setupAuthCookie(token);
        await page.reload();
        await page.waitForLoadState('domcontentloaded');
        const contentName = await contextSetup.genericUtils?.getValueByKey('IP_ContentName');
        const contentBtn = await contextSetup.poManager?._homePage.specificContent(contentName);
        await contentBtn.hover();
  });

