# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage-Individual-content-with-fixtures.spec.js >> Homepage Individual Content status update validation with custom Fixtures >> Individual Content update status to Inprogress with custom fixtures
- Location: tests/specs/homepage-Individual-content-with-fixtures.spec.js:12:3

# Error details

```
TypeError: Cannot read properties of undefined (reading 'verifyHomepageLoaded')
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/testFixtures';
  2  | 
  3  | test.describe.serial('Homepage Individual Content status update validation with custom Fixtures', () => {
  4  | 
  5  |   test.beforeEach(async ({ testContext }) => {
  6  |     const token = await testContext.genericUtils.generateJWT(process.env.EMP_USER);
  7  |     await testContext.genericUtils.setupAuthCookie(token);
  8  |     await testContext.page.reload();
  9  |     await testContext.page.waitForLoadState('domcontentloaded');
  10 |   });
  11 |   
  12 |   test('Individual Content update status to Inprogress with custom fixtures', {tag: '@fixtures'}, async ({testContext}) => {
  13 |     
  14 |     const contentName = await testContext.genericUtils.getValueByKey('IP_ContentName');
> 15 |     await testContext.poManager.homePage.verifyHomepageLoaded();
     |                                          ^ TypeError: Cannot read properties of undefined (reading 'verifyHomepageLoaded')
  16 |     await testContext.poManager.homePage.verifyManagerAndAdminSections();
  17 |     // const managerAssignedContents = await contextSetup.poManager._homePage.getManagerAssignedCardNames();
  18 |     // console.log(managerAssignedContents);
  19 |     // const adminAssignedContents = await contextSetup.poManager._homePage.getAdminAssignedCardNames();
  20 |     // console.log(adminAssignedContents);
  21 |     // await testContext.poManager._homePage.verifyContentVisible(contentName);
  22 |     // const contentProgressButton = await testContext.poManager._homePage.getContentProgressButton(contentName);
  23 |     // await contentProgressButton.hover();
  24 |     // await testContext.poManager._homePage.verifyAssignedTooltip();
  25 |     // await contentProgressButton.click();
  26 |     // await testContext.poManager._homePage.verifyInProgressTooltip();
  27 |     // await testContext.poManager._learningRecordsPage.getLearningRecordsButton().click();
  28 |     // await page.waitForLoadState('domcontentloaded');
  29 |     // await testContext.poManager._learningRecordsPage.screenTitleCheck();
  30 |     // const contentTitle = await testContext.poManager._learningRecordsPage.getFirstContentTitle();
  31 |     // await expect(contentTitle).toHaveText(contentName);
  32 |     // await expect(testContext.poManager._learningRecordsPage.getContentSource(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentSource'));
  33 |     // // await expect(testContext.poManager._learningRecordsPage.getContentType(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentType'));
  34 |     // // await expect(testContext.poManager._learningRecordsPage.getContentDate(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentDate'));
  35 |     // await expect(testContext.poManager._learningRecordsPage.getContentStatus(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentStatus'));
  36 | 
  37 | 
  38 |   });
  39 | 
  40 |   test('Individual Content update status to Complete with custom fixtures', {tag: '@fixtures'}, async ({testContext}) => {
  41 | 
  42 |     const contentName = await testContext.genericUtils.getValueByKey('IP_ContentName');
  43 |     await testContext.poManager.homePage.verifyHomepageLoaded();
  44 |     await testContext.poManager.homePage.verifyManagerAndAdminSections();
  45 |     // await testContext.poManager._homePage.verifyContentVisible(contentName);
  46 |     // const contentProgressButton = await testContext.poManager._homePage.getContentProgressButton(contentName);
  47 |     // await contentProgressButton.hover();
  48 |     // await testContext.poManager._homePage.verifyInProgressTooltip();
  49 |     // await contentProgressButton.click();
  50 |     // await testContext.poManager._homePage.verifyConfirmCompletionDialog(contentName);
  51 |     // await testContext.poManager._homePage.yesMarkCompleteButton.click();
  52 |     // await testContext.poManager._homePage.verifyMarkCompleteToast();
  53 |     // await testContext.poManager._learningRecordsPage.getLearningRecordsButton().click();
  54 |     // await page.waitForLoadState('domcontentloaded');
  55 |     // await testContext.poManager._learningRecordsPage.screenTitleCheck();
  56 |     // const contentTitle = await testContext.poManager._learningRecordsPage.getFirstContentTitle();
  57 |     // await expect(contentTitle).toHaveText(contentName);
  58 |     // await expect(testContext.poManager._learningRecordsPage.getContentSource(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentSource'));
  59 |     // // await expect(contextSetup.poManager._learningRecordsPage.getContentType(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentType'));
  60 |     // // await expect(contextSetup.poManager._learningRecordsPage.getContentDate(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentDate'));
  61 |     // await expect(contextSetup.poManager._learningRecordsPage.getContentStatus(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentStatus'));
  62 | 
  63 | 
  64 |   });
  65 | 
  66 |   
  67 | 
  68 | });
```