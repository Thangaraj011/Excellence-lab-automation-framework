# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixture_based_tests/learningrecords-contents-verification.spec.js >> Learning records Individual contents details verification >> AI Recommended contents learning recods Edit details validation
- Location: tests/specs/fixture_based_tests/learningrecords-contents-verification.spec.js:32:10

# Error details

```
Error: browser.newContext: "deviceScaleFactor" option is not supported with null "viewport"
```

# Test source

```ts
  1  | import { test as base, chromium, firefox, webkit } from '@playwright/test';
  2  | import { HomePage }            from '../../page_objects/HomePage.js';
  3  | import { LearningRecordsPage } from '../../page_objects/LearningRecordsPage.js';
  4  | import { GenericUtils }        from '../utils/GenericUtils.js';
  5  | 
  6  | 
  7  | async function launchBrowser() {
  8  |   const launchers = { chromium, firefox, webkit };
  9  |   const launcher  = launchers[process.env.BROWSER_TYPE || 'chromium'];
  10 |   if (!launcher) throw new Error(`Unsupported BROWSER_TYPE: "${process.env.BROWSER_TYPE}"`);
  11 |   const browser = await launcher.launch({
  12 |     headless: process.env.CI ? true : false,
  13 |     slowMo:   process.env.SLOW_MO ? parseInt(process.env.SLOW_MO) : 0,
  14 |   });
> 15 |   const context = await browser.newContext({
     |                   ^ Error: browser.newContext: "deviceScaleFactor" option is not supported with null "viewport"
  16 |     baseURL: process.env.BASE_URL, locale: 'en-US', timezoneId: 'America/New_York',
  17 |   });
  18 |   return { browser, context };
  19 | }
  20 | 
  21 | export const test = base.extend({
  22 | 
  23 |   authPage: async ({}, use, testInfo) => {
  24 |     const {browser,context} = await launchBrowser();
  25 |     const page = await context.newPage();
  26 |     const screenSize = await page.evaluate(() => {
  27 |     return {
  28 |       width: window.screen.availWidth,
  29 |       height: window.screen.availHeight
  30 |     };
  31 |   });
  32 |     await page.setViewportSize(screenSize);
  33 |     await page.goto(process.env.BASE_URL);
  34 | 
  35 |     const utils = new GenericUtils(context, testInfo);
  36 |     const token = await utils.generateJWT(process.env.EMP_USER);
  37 |     await utils.setupAuthCookie(token);
  38 |     await page.reload();
  39 |     await page.waitForLoadState('domcontentloaded');
  40 | 
  41 |     await use(page);
  42 | 
  43 |     await context.close();
  44 |     await browser.close();
  45 |   },
  46 | 
  47 | 
  48 |   plainPage: async ({}, use) => {
  49 |     const {browser, context} = await launchBrowser();
  50 |     const page = await context.newPage();
  51 |     const screenSize = await page.evaluate(() => {
  52 |     return {
  53 |       width: window.screen.availWidth,
  54 |       height: window.screen.availHeight
  55 |     };
  56 |   });
  57 |     await page.setViewportSize(screenSize);
  58 |     await page.goto(process.env.BASE_URL);
  59 | 
  60 |     await use(page);
  61 | 
  62 |     await context.close();
  63 |     await browser.close();
  64 |   },
  65 | 
  66 | 
  67 |   homePage: async ({ authPage }, use) => {
  68 |     await use(new HomePage(authPage));
  69 |   },
  70 | 
  71 |   learningRecordsPage: async ({ authPage }, use) => {
  72 |     await use(new LearningRecordsPage(authPage));
  73 |   },
  74 | 
  75 |   genericUtils: async ({ authPage }, use, testInfo) => {
  76 |     await use(new GenericUtils(authPage.context(), testInfo));
  77 |   },
  78 | 
  79 | 
  80 | });
  81 | 
  82 | export { expect } from '@playwright/test';
```