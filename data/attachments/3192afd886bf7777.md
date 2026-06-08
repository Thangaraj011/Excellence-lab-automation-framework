# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: excellence-lab-homepage-Individual-content.spec.js >> Excellence Lab Homepage Individual Content Status Update Validation >> Individual Content update status to Complete
- Location: tests/specs/excellence-lab-homepage-Individual-content.spec.js:39:8

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('//tbody/tr/td[contains(@title,\'Business Communication Skills: Handling Clients & Customers\')]//following-sibling::td').nth(1)
Expected: "course"
Received: "Course"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('//tbody/tr/td[contains(@title,\'Business Communication Skills: Handling Clients & Customers\')]//following-sibling::td').nth(1)
    14 × locator resolved to <td class="ant-table-cell">…</td>
       - unexpected value "Course"

```

```yaml
- cell "Course"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { TestContextSetup } from '../utils/TestContextSetup';
  3  | 
  4  | test.describe('Excellence Lab Homepage Individual Content Status Update Validation', () => {
  5  |   
  6  |   test('Individual Content update status to Inprogress', {tag: '@smoke'}, async ({}, testInfo) => {
  7  |     const contextSetup = new TestContextSetup(testInfo);
  8  |     const page = await contextSetup.init(`${process.env.BASE_FE_URL}`, 'chromium');
  9  |     const token = await contextSetup.genericUtils.generateJWT(process.env.EMP_USERNAME);
  10 |     await contextSetup.genericUtils.setupAuthCookie(token);
  11 |     await page.reload();
  12 |     await page.waitForLoadState('domcontentloaded');
  13 |     const contentName = await contextSetup.genericUtils.getValueByKey('IP_ContentName');
  14 |     await contextSetup.poManager._homePage.homepageTitleCheck();
  15 |     await contextSetup.poManager._homePage.checkManagerAdminsections();
  16 |     // const managerAssignedContents = await contextSetup.poManager._homePage.getManagerAssignedCardNames();
  17 |     // console.log(managerAssignedContents);
  18 |     // const adminAssignedContents = await contextSetup.poManager._homePage.getAdminAssignedCardNames();
  19 |     // console.log(adminAssignedContents);
  20 |     await contextSetup.poManager._homePage.specificContentDisplayCheck(contentName);
  21 |     const contentProgressButton = await contextSetup.poManager._homePage.specificContentProgressButton(contentName);
  22 |     await contentProgressButton.hover();
  23 |     await contextSetup.poManager._homePage.assignedTooltipMessageCheck();
  24 |     await contentProgressButton.click();
  25 |     await contextSetup.poManager._homePage.inProgressToastMessageCheck();
  26 |     await contextSetup.poManager._learningRecordsPage.getLearningRecordsButton().click();
  27 |     await page.waitForLoadState('domcontentloaded');
  28 |     await contextSetup.poManager._learningRecordsPage.screenTitleCheck();
  29 |     const contentTitle = await contextSetup.poManager._learningRecordsPage.getFirstContentTitle();
  30 |     await expect(contentTitle).toHaveText(contentName);
  31 |     await expect(contextSetup.poManager._learningRecordsPage.getContentSource()).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentSource'));
  32 |     await expect(contextSetup.poManager._learningRecordsPage.getContentType()).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentType'));
  33 |     await expect(contextSetup.poManager._learningRecordsPage.getContentDate()).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentDate'));
  34 |     await expect(contextSetup.poManager._learningRecordsPage.getContentStatus()).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentStatus'));
  35 |     await page.pause();
  36 | 
  37 |   });
  38 | 
  39 |   test.only('Individual Content update status to Complete', {tag: '@smoke'}, async ({}, testInfo) => {
  40 |     const contextSetup = new TestContextSetup(testInfo);
  41 |     const page = await contextSetup.init(`${process.env.BASE_FE_URL}`, 'chromium');
  42 |     const token = await contextSetup.genericUtils.generateJWT(process.env.EMP_USERNAME);
  43 |     await contextSetup.genericUtils.setupAuthCookie(token);
  44 |     await page.reload();
  45 |     await page.waitForLoadState('domcontentloaded');
  46 |     const contentName = await contextSetup.genericUtils.getValueByKey('IP_ContentName');
  47 |     await contextSetup.poManager._homePage.homepageTitleCheck();
  48 |     await contextSetup.poManager._homePage.checkManagerAdminsections();
  49 |     // await contextSetup.poManager._homePage.specificContentDisplayCheck(contentName);
  50 |     // const contentProgressButton = await contextSetup.poManager._homePage.specificContentProgressButton(contentName);
  51 |     // await contentProgressButton.hover();
  52 |     // await contextSetup.poManager._homePage.inProgressTooltipMessageCheck();
  53 |     // await contentProgressButton.click();
  54 |     // await contextSetup.poManager._homePage.confirmCompletionWarningMessageCheck(contentName);
  55 |     // await contextSetup.poManager._homePage.yesMarkCompleteButton.click();
  56 |     // await contextSetup.poManager._homePage.markCompleteToastMessageCheck();
  57 |     await contextSetup.poManager._learningRecordsPage.getLearningRecordsButton().click();
  58 |     await page.waitForLoadState('domcontentloaded');
  59 |     await contextSetup.poManager._learningRecordsPage.screenTitleCheck();
  60 |     const contentTitle = await contextSetup.poManager._learningRecordsPage.getFirstContentTitle();
  61 |     await expect(contentTitle).toHaveText(contentName);
  62 |     await expect(contextSetup.poManager._learningRecordsPage.getContentSource(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentSource'));
> 63 |     await expect(contextSetup.poManager._learningRecordsPage.getContentType(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentType'));
     |                                                                                           ^ Error: expect(locator).toHaveText(expected) failed
  64 |     await expect(contextSetup.poManager._learningRecordsPage.getContentDate(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentDate'));
  65 |     await expect(contextSetup.poManager._learningRecordsPage.getContentStatus(contentName)).toHaveText(await contextSetup.genericUtils.getValueByKey('IP_ContentStatus'));
  66 |     await page.pause();
  67 | 
  68 |   });
  69 | 
  70 |   
  71 | 
  72 | });
```