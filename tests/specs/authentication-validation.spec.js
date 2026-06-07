import { test, expect } from '@playwright/test';
import { TestContextSetup } from '../context/TestContextSetup';

test.describe('User Login Successful Tests', () => {
  
  test('Employee Login Homepage validation', async ({},testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
    const page = await contextSetup.init(`${process.env.BASE_URL}`, 'chromium');
    const token = await contextSetup.genericUtils.generateJWT(process.env.EMP_USER);
    await contextSetup.genericUtils.setupAuthCookie(token);
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    await contextSetup.poManager._homePage.homepageTitleCheck();
    await contextSetup.poManager._homePage.checkManagerAdminsections();
  });

  test('Manager Indirect Login Homepage validation', async ({},testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
    const page = await contextSetup.init(`${process.env.BASE_URL}`, 'chromium');
    const token = await contextSetup.genericUtils.generateJWT(process.env.MANAGER_IND_USER);
    await contextSetup.genericUtils.setupAuthCookie(token);
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    await contextSetup.poManager._homePage.homepageTitleCheck();
    await contextSetup.poManager._homePage.checkManagerAdminsections();
  });

  test('Manager Direct Login Homepage validation', async ({},testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
    const page = await contextSetup.init(`${process.env.BASE_URL}`, 'chromium');
    const token = await contextSetup.genericUtils.generateJWT(process.env.MANAGER_DIR_USER);
    await contextSetup.genericUtils.setupAuthCookie(token);
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    await contextSetup.poManager._homePage.homepageTitleCheck();
    await contextSetup.poManager._homePage.checkManagerAdminsections();
  });

  test('Admin Login Homepage validation', async ({},testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
    const page = await contextSetup.init(`${process.env.BASE_URL}`, 'chromium');
    const token = await contextSetup.genericUtils.generateJWT(process.env.ADMIN_USER);
    await contextSetup.genericUtils.setupAuthCookie(token);
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    await contextSetup.poManager._homePage.homepageTitleCheck();
    await contextSetup.poManager._homePage.checkManagerAdminsections();
  });


    test('Admin Manager Login Homepage validation', async ({},testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
    const page = await contextSetup.init(`${process.env.BASE_URL}`, 'chromium');
    const token = await contextSetup.genericUtils.generateJWT(process.env.ADMIN_MANAGER_USER);
    await contextSetup.genericUtils.setupAuthCookie(token);
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    await contextSetup.poManager._homePage.homepageTitleCheck();
    await contextSetup.poManager._homePage.checkManagerAdminsections();
  });





});