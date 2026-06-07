import { test, expect } from '@playwright/test';
import { TestContextSetup } from '../context/TestContextSetup';

  test('Employee Homepage Validation', async ({}, testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
        const page = await contextSetup.init(`${process.env.BASE_URL}`, 'chromium');
        const token = await contextSetup.genericUtils.generateJWT(process.env.MAN_USERNAME);
        await contextSetup.genericUtils.setupAuthCookie(token);
        await page.reload();
        await page.waitForLoadState('domcontentloaded');
        const contentName = await contextSetup.genericUtils.getValueByKey('IP_ContentName');
        const contentProgressButton = await contextSetup.poManager._homePage.specificContentProgressButton(contentName);
        await contentProgressButton.hover();
        await page.pause();
  });

