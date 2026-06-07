# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: custom-fixture-sample-test2.spec.js >> Homepage Individual Content status update validation with custom fixture sample >> Individual Content update status to Inprogress with custom fixture sample
- Location: tests/specs/custom-fixture-sample-test2.spec.js:5:3

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('//tbody/tr/td[contains(@title,\'Competitor Analysis and Market Research - Qualtrics\')]//following-sibling::td').nth(3)
Expected: "Completed"
Received: "In Progress"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('//tbody/tr/td[contains(@title,\'Competitor Analysis and Market Research - Qualtrics\')]//following-sibling::td').nth(3)
    14 × locator resolved to <td class="ant-table-cell">…</td>
       - unexpected value "In Progress"

```

```yaml
- cell "In Progress"
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/index.js';
  2  | 
  3  | test.describe.serial('Homepage Individual Content status update validation with custom fixture sample', () => {
  4  | 
  5  |   test('Individual Content update status to Inprogress with custom fixture sample', { tag: '@fixture2' },
  6  |     async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
  7  | 
  8  |       const contentName = await genericUtils.getValueByKey('IP_ContentName');
  9  | 
  10 |       await homePage.verifyHomepageLoaded();
  11 |       await homePage.verifyManagerAndAdminSections();
  12 |       await homePage.verifyContentVisible(contentName);
  13 | 
  14 |       const progressBtn = await homePage.getContentProgressButton(contentName);
  15 |       await progressBtn.hover();
  16 |       await homePage.verifyAssignedTooltip();
  17 |       await progressBtn.click();
  18 |       await homePage.verifyInProgressTooltip();
  19 | 
  20 |       await learningRecordsPage.getLearningRecordsButton().click();
  21 |       await authPage.waitForLoadState('domcontentloaded');
  22 |       await learningRecordsPage.screenTitleCheck();
  23 | 
  24 |       const contentTitle = await learningRecordsPage.getFirstContentTitle();
  25 |       await expect(contentTitle).toHaveText(contentName);
  26 |       await expect(learningRecordsPage.getContentSource(contentName))
  27 |         .toHaveText(await genericUtils.getValueByKey('IP_ContentSource'));
  28 |     //   await expect(learningRecordsPage.getContentType(contentName))
  29 |     //     .toHaveText(await genericUtils.getValueByKey('IP_ContentType'));
  30 |     //   await expect(learningRecordsPage.getContentDate(contentName))
  31 |     //     .toHaveText(await genericUtils.getValueByKey('IP_ContentDate'));
  32 |       await expect(learningRecordsPage.getContentStatus(contentName))
> 33 |         .toHaveText(await genericUtils.getValueByKey('IP_ContentStatus'));
     |          ^ Error: expect(locator).toHaveText(expected) failed
  34 |     }
  35 |   );
  36 | 
  37 |   test('Individual Content update status to Complete with custom fixture sample', { tag: '@fixture2' },
  38 |     async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {
  39 | 
  40 |       const contentName = await genericUtils.getValueByKey('IP_ContentName');
  41 | 
  42 |       await homePage.verifyHomepageLoaded();
  43 |       await homePage.verifyManagerAndAdminSections();
  44 |       await homePage.verifyContentVisible(contentName);
  45 | 
  46 |       const progressBtn = await homePage.getContentProgressButton(contentName);
  47 |       await progressBtn.hover();
  48 |       await homePage.verifyInProgressTooltip();
  49 |       await progressBtn.click();
  50 | 
  51 |       await homePage.verifyConfirmCompletionDialog(contentName);
  52 |       await homePage.yesMarkCompleteButton.click();
  53 |       await homePage.verifyMarkCompleteToast();
  54 | 
  55 |       await learningRecordsPage.getLearningRecordsButton().click();
  56 |       await authPage.waitForLoadState('domcontentloaded');
  57 |       await learningRecordsPage.screenTitleCheck();
  58 | 
  59 |       const contentTitle = await learningRecordsPage.getFirstContentTitle();
  60 |       await expect(contentTitle).toHaveText(contentName);
  61 |       await expect(learningRecordsPage.getContentSource(contentName))
  62 |         .toHaveText(await genericUtils.getValueByKey('IP_ContentSource'));
  63 |     //   await expect(learningRecordsPage.getContentType(contentName))
  64 |     //     .toHaveText(await genericUtils.getValueByKey('IP_ContentType'));
  65 |     //   await expect(learningRecordsPage.getContentDate(contentName))
  66 |     //     .toHaveText(await genericUtils.getValueByKey('IP_ContentDate'));
  67 |       await expect(learningRecordsPage.getContentStatus(contentName))
  68 |         .toHaveText(await genericUtils.getValueByKey('IP_ContentStatus'));
  69 |     }
  70 |   );
  71 | 
  72 | });
```