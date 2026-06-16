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
    await expect(contextSetup.poManager.homePage.profileName).toHaveText('Thangaraj R');
    await contextSetup.poManager.homePage.verifyHomepageLoaded();
    await contextSetup.poManager.homePage.verifyManagerAndAdminSections();
  });

  test('Manager Indirect Login Homepage validation', async ({},testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
    const page = await contextSetup.init(`${process.env.BASE_URL}`, 'chromium');
    const token = await contextSetup.genericUtils.generateJWT(process.env.MANAGER_IND_USER);
    await contextSetup.genericUtils.setupAuthCookie(token);
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    await expect(contextSetup.poManager.homePage.profileName).toHaveText('Tarun Sareen');
    await contextSetup.poManager.homePage.verifyHomepageLoaded();
    await contextSetup.poManager.homePage.verifyManagerAndAdminSections();
  });

  test('Manager Direct Login Homepage validation', async ({},testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
    const page = await contextSetup.init(`${process.env.BASE_URL}`, 'chromium');
    const token = await contextSetup.genericUtils.generateJWT(process.env.MANAGER_DIR_USER);
    await contextSetup.genericUtils.setupAuthCookie(token);
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    await expect(contextSetup.poManager.homePage.profileName).toHaveText('Vinay Kumar Singh');
    await contextSetup.poManager.homePage.verifyHomepageLoaded();
    await contextSetup.poManager.homePage.verifyManagerAndAdminSections();
  });

  test('Admin Login Homepage validation', async ({},testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
    const page = await contextSetup.init(`${process.env.BASE_URL}`, 'chromium');
    const token = await contextSetup.genericUtils.generateJWT(process.env.ADMIN_USER);
    await contextSetup.genericUtils.setupAuthCookie(token);
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    await expect(contextSetup.poManager.homePage.profileName).toHaveText('Janakjit Singh Sethi');
    await contextSetup.poManager.homePage.verifyHomepageLoaded();
    await contextSetup.poManager.homePage.verifyManagerAndAdminSections();
  });


    test('Admin Manager Login Homepage validation', async ({},testInfo) => {
    const contextSetup = new TestContextSetup(testInfo);
    const page = await contextSetup.init(`${process.env.BASE_URL}`, 'chromium');
    const token = await contextSetup.genericUtils.generateJWT(process.env.ADMIN_MANAGER_USER);
    await contextSetup.genericUtils.setupAuthCookie(token);
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    await expect(contextSetup.poManager.homePage.profileName).toHaveText('Sameer Kumar');
    await contextSetup.poManager.homePage.verifyHomepageLoaded();
    await contextSetup.poManager.homePage.verifyManagerAndAdminSections();
  });





});