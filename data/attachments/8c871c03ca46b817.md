# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage-Individual-content-with-fixtures.spec.js >> Homepage Individual Content status update validation with custom Fixtures >> Individual Content update status to Inprogress with custom fixtures
- Location: tests/specs/homepage-Individual-content-with-fixtures.spec.js:12:3

# Error details

```
TypeError: testContext.poManager.getHomePage is not a function
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
> 15 |     const homePage = await testContext.poManager.getHomePage();
     |                                                  ^ TypeError: testContext.poManager.getHomePage is not a function
  16 |     await homePage.verifyHomepageLoaded();
  17 |     await homePage.verifyManagerAndAdminSections();
  18 |     // const managerAssignedContents = await contextSetup.poManager._homePage.getManagerAssignedCardNames();
  19 |     // console.log(managerAssignedContents);
  20 |     // const adminAssignedContents = await contextSetup.poManager._homePage.getAdminAssignedCardNames();
  21 |     // console.log(adminAssignedContents);
  22 |     // await testContext.poManager._homePage.verifyContentVisible(contentName);
  23 |     // const contentProgressButton = await testContext.poManager._homePage.getContentProgressButton(contentName);
  24 |     // await contentProgressButton.hover();
  25 |     // await testContext.poManager._homePage.verifyAssignedTooltip();
  26 |     // await contentProgressButton.click();
  27 |     // await testContext.poManager._homePage.verifyInProgressTooltip();
  28 |     // await testContext.poManager._learningRecordsPage.getLearningRecordsButton().click();
  29 |     // await page.waitForLoadState('domcontentloaded');
  30 |     // await testContext.poManager._learningRecordsPage.screenTitleCheck();
  31 |     // const contentTitle = await testContext.poManager._learningRecordsPage.getFirstContentTitle();
  32 |     // await expect(contentTitle).toHaveText(contentName);
  33 |     // await expect(testContext.poManager._learningRecordsPage.getContentSource(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentSource'));
  34 |     // // await expect(testContext.poManager._learningRecordsPage.getContentType(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentType'));
  35 |     // // await expect(testContext.poManager._learningRecordsPage.getContentDate(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentDate'));
  36 |     // await expect(testContext.poManager._learningRecordsPage.getContentStatus(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentStatus'));
  37 | 
  38 | 
  39 |   });
  40 | 
  41 |   test('Individual Content update status to Complete with custom fixtures', {tag: '@fixtures'}, async ({testContext}) => {
  42 | 
  43 |     const contentName = await testContext.genericUtils.getValueByKey('IP_ContentName');
  44 |     const homePage = await testContext.poManager.getHomePage();
  45 |     await homePage.verifyHomepageLoaded();
  46 |     await homePage.verifyManagerAndAdminSections();
  47 |     // await testContext.poManager._homePage.verifyContentVisible(contentName);
  48 |     // const contentProgressButton = await testContext.poManager._homePage.getContentProgressButton(contentName);
  49 |     // await contentProgressButton.hover();
  50 |     // await testContext.poManager._homePage.verifyInProgressTooltip();
  51 |     // await contentProgressButton.click();
  52 |     // await testContext.poManager._homePage.verifyConfirmCompletionDialog(contentName);
  53 |     // await testContext.poManager._homePage.yesMarkCompleteButton.click();
  54 |     // await testContext.poManager._homePage.verifyMarkCompleteToast();
  55 |     // await testContext.poManager._learningRecordsPage.getLearningRecordsButton().click();
  56 |     // await page.waitForLoadState('domcontentloaded');
  57 |     // await testContext.poManager._learningRecordsPage.screenTitleCheck();
  58 |     // const contentTitle = await testContext.poManager._learningRecordsPage.getFirstContentTitle();
  59 |     // await expect(contentTitle).toHaveText(contentName);
  60 |     // await expect(testContext.poManager._learningRecordsPage.getContentSource(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentSource'));
  61 |     // // await expect(contextSetup.poManager._learningRecordsPage.getContentType(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentType'));
  62 |     // // await expect(contextSetup.poManager._learningRecordsPage.getContentDate(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentDate'));
  63 |     // await expect(contextSetup.poManager._learningRecordsPage.getContentStatus(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentStatus'));
  64 | 
  65 | 
  66 |   });
  67 | 
  68 |   
  69 | 
  70 | });
```