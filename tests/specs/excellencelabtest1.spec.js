import { test, expect } from '@playwright/test';
import { TestContextSetup } from '../utils/TestContextSetup';

test.describe('Authentication Tests', () => {
  
  test('Employee Homepage validation', {tag: '@smoke'}, async ({},testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
    const page = await contextSetup.init(`${process.env.BASE_BE_URL}`, 'chromium');
    const currentMap = await contextSetup.genericUtils.jsonToMap();
    console.log(await currentMap.get('IP_Title'));
    const token = await contextSetup.genericUtils.generateJWT(process.env.EMP_USERNAME);
    const page2 = await contextSetup.openNewTab();
    await page2.goto(`${process.env.BASE_FE_URL}`);
    await contextSetup.genericUtils.setupAuthCookie(token);
    await page2.reload();
    await page2.waitForLoadState('networkidle');

  });

});