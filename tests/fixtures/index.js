import { test as base, chromium, firefox, webkit } from '@playwright/test';
import { HomePage }            from '../../page_objects/HomePage.js';
import { LearningRecordsPage } from '../../page_objects/LearningRecordsPage.js';
import { GenericUtils }        from '../utils/GenericUtils.js';


async function launchBrowser() {
  const launchers = { chromium, firefox, webkit };
  const launcher  = launchers[process.env.BROWSER_TYPE || 'chromium'];
  if (!launcher) throw new Error(`Unsupported BROWSER_TYPE: "${process.env.BROWSER_TYPE}"`);
  const browser = await launcher.launch({
    headless: process.env.CI ? true : false,
    slowMo:   process.env.SLOW_MO ? parseInt(process.env.SLOW_MO) : 0,
  });
  const context = await browser.newContext({
    baseURL: process.env.BASE_FE_URL, locale: 'en-US', timezoneId: 'America/New_York',
  });
  return { browser, context };
}

export const test = base.extend({

  authPage: async ({}, use, testInfo) => {
    const {browser,context} = await launchBrowser();
    const page = await context.newPage();
    await page.goto(process.env.BASE_URL);

    const utils = new GenericUtils(context, testInfo);
    const token = await utils.generateJWT(process.env.EMP_USER);
    await utils.setupAuthCookie(token);
    await page.reload();
    await page.waitForLoadState('domcontentloaded');

    await use(page);

    await context.close();
    await browser.close();
  },


  plainPage: async ({}, use) => {
    const {browser, context} = await launchBrowser();
    const page = await context.newPage();
    await page.goto(process.env.BASE_URL);

    await use(page);

    await context.close();
    await browser.close();
  },

  


  homePage: async ({ authPage }, use) => {
    await use(new HomePage(authPage));
  },

  learningRecordsPage: async ({ authPage }, use) => {
    await use(new LearningRecordsPage(authPage));
  },

  genericUtils: async ({ authPage }, use, testInfo) => {
    await use(new GenericUtils(authPage.context(), testInfo));
  },

});

export { expect } from '@playwright/test';