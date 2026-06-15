import { test as base, chromium, firefox, webkit } from '@playwright/test';
import { HomePage }            from '../../page_objects/HomePage.js';
import { LearningRecordsPage } from '../../page_objects/LearningRecordsPage.js';
import { ContentCataloguePage } from '../../page_objects/ContentCataloguePage.js';
import { TeamDashboardPage }   from '../../page_objects/TeamDashboardPage.js';
import { GenericUtils }        from '../utils/GenericUtils.js';

const PROFILE_REGISTRY = {
  'employee':        'auth/user.json',
  'managerindirect': 'auth/managerindirect.json',
  'managerdirect':   'auth/managerdirect.json',
  'admin':           'auth/admin.json',
  'adminmanager':    'auth/adminmanager.json',
};

async function launchBrowser(storageStatePath) {
  const launchers = { chromium, firefox, webkit };
  const launcher  = launchers[process.env.BROWSER_TYPE || 'chromium'];
  if (!launcher) throw new Error(`Unsupported BROWSER_TYPE: "${process.env.BROWSER_TYPE}"`);

  const browser = await launcher.launch({
    headless: process.env.CI ? true : false,
    slowMo:   process.env.SLOW_MO ? parseInt(process.env.SLOW_MO, 10) : 0,
  });

  const context = await browser.newContext({
    baseURL: process.env.BASE_URL, 
    locale: 'en-US', 
    timezoneId: 'America/New_York',
    ...(storageStatePath ? { storageState: storageStatePath } : {}),
  });

  return { browser, context };
}

export const test = base.extend({

  context: async ({}, use) => {
    const { browser, context } = await launchBrowser();
    await use(context);
    await context.close();
    await browser.close();
  },

  authContext: async ({}, use, testInfo) => {
    const projectStorageState = testInfo.project.use?.storageState;
    const statePath = projectStorageState || process.env.AUTH_STATE_FILE || 'auth/user.json';
    console.log(`Running Project [${testInfo.project.name}] with state: ${statePath}`);
    
    const { browser, context } = await launchBrowser(statePath);
    await use(context);
    await context.close();
    await browser.close();
  },

  authPage: async ({authContext}, use) => {
    const page = await authContext.newPage();
    await page.goto(process.env.BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    await use(page);
  },


  plainPage: async ({context}, use) => {
    const page = await context.newPage();
    await page.goto(process.env.BASE_URL);
    await use(page);
  },

  employeePage: async ({}, use) => {
    const { browser, context } = await launchBrowser(PROFILE_REGISTRY['employee']);
    const page = await context.newPage();
    await page.goto(process.env.BASE_URL);
    await use(page);
    await context.close();
    await browser.close();
  },

  managerDirPage: async ({}, use) => {
    const { browser, context } = await launchBrowser(PROFILE_REGISTRY['managerdirect']);
    const page = await context.newPage();
    await page.goto(process.env.BASE_URL);
    await use(page);
    await context.close();
    await browser.close();
  },

  managerIndPage: async ({}, use) => {
    const { browser, context } = await launchBrowser(PROFILE_REGISTRY['managerindirect']);
    const page = await context.newPage();
    await page.goto(process.env.BASE_URL);
    await use(page);
    await context.close();
    await browser.close();
  },

  adminPage: async ({}, use) => {
    const { browser, context } = await launchBrowser(PROFILE_REGISTRY['admin']);
    const page = await context.newPage();
    await page.goto(process.env.BASE_URL);
    await use(page);
    await context.close();
    await browser.close();
  },

  adminmanagerPage: async ({}, use) => {
    const { browser, context } = await launchBrowser(PROFILE_REGISTRY['adminmanager']);
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

  teamDashboardPage: async ({ authPage }, use) => {
    await use(new TeamDashboardPage(authPage));
  },

  contentCataloguePage: async ({ authPage }, use) => {
    await use(new ContentCataloguePage(authPage));
  },

  genericUtils: async ({ context }, use, testInfo) => {
    await use(new GenericUtils(context, testInfo));
  },


});

export { expect } from '@playwright/test';