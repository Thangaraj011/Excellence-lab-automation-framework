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

Locator: locator('//tbody/tr/td[contains(@title,\'Business Communication Skills: Handling Clients & Customers\')]//following-sibling::td').first()
Error: expected value must be a string or regular expression
Expected has type:  object
Expected has value: Promise {}

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - complementary [ref=e5]:
    - generic [ref=e7]:
      - link "EL Logo Excellence Lab" [ref=e9] [cursor=pointer]:
        - /url: /homepage
        - generic [ref=e10]:
          - img "EL Logo" [ref=e11]
          - heading "Excellence Lab" [level=4] [ref=e12]
      - generic [ref=e13]:
        - link "home Homepage" [ref=e14] [cursor=pointer]:
          - /url: /homepage
          - button "home Homepage" [ref=e15]:
            - img "home" [ref=e17]:
              - img [ref=e18]
            - generic [ref=e20]: Homepage
        - link "clock-circle Learning Records" [ref=e21] [cursor=pointer]:
          - /url: /history
          - button "clock-circle Learning Records" [ref=e22]:
            - img "clock-circle" [ref=e24]:
              - img [ref=e25]
            - generic [ref=e28]: Learning Records
        - link "file-text Content Catalogue" [ref=e29] [cursor=pointer]:
          - /url: /content-catalogue
          - button "file-text Content Catalogue" [ref=e30]:
            - img "file-text" [ref=e32]:
              - img [ref=e33]
            - generic [ref=e35]: Content Catalogue
      - generic [ref=e36]:
        - link "My profile" [ref=e37] [cursor=pointer]:
          - /url: /my-profile
          - img [ref=e39]
          - generic [ref=e40]: Thangaraj R
        - generic [ref=e41]:
          - link "form Feedback" [ref=e42] [cursor=pointer]:
            - /url: /user-feedback
            - button "form Feedback" [ref=e43]:
              - img "form" [ref=e45]:
                - img [ref=e46]
              - generic [ref=e49]: Feedback
          - button "menu-fold Minimize" [ref=e50] [cursor=pointer]:
            - img "menu-fold" [ref=e52]:
              - img [ref=e53]
            - generic [ref=e55]: Minimize
          - button "logout Logout" [ref=e56] [cursor=pointer]:
            - img "logout" [ref=e58]:
              - img [ref=e59]
            - generic [ref=e61]: Logout
  - main [ref=e63]:
    - generic [ref=e67]:
      - generic [ref=e69]:
        - heading "Learning Records" [level=4] [ref=e70]
        - text: Track your internal and external learning achievements
      - generic [ref=e74]:
        - table [ref=e78]:
          - rowgroup [ref=e79]:
            - row "Title/Activity Content Source Type Date Status Evidence Actions" [ref=e80]:
              - columnheader "Title/Activity" [ref=e81] [cursor=pointer]:
                - generic [ref=e82]:
                  - generic [ref=e83]: Title/Activity
                  - generic [ref=e85]:
                    - img [ref=e86]:
                      - img [ref=e87]
                    - img [ref=e89]:
                      - img [ref=e90]
              - columnheader "Content Source" [ref=e92]
              - columnheader "Type" [ref=e93]
              - columnheader "Date" [ref=e94] [cursor=pointer]:
                - generic [ref=e95]:
                  - generic [ref=e96]: Date
                  - generic [ref=e98]:
                    - img [ref=e99]:
                      - img [ref=e100]
                    - img [ref=e102]:
                      - img [ref=e103]
              - columnheader "Status" [ref=e105] [cursor=pointer]:
                - generic [ref=e106]:
                  - generic [ref=e107]: Status
                  - generic [ref=e109]:
                    - img [ref=e110]:
                      - img [ref=e111]
                    - img [ref=e113]:
                      - img [ref=e114]
              - columnheader "Evidence" [ref=e116]
              - columnheader "Actions" [ref=e117]
          - rowgroup [ref=e118]:
            - generic [ref=e119]:
              - generic [ref=e120]: Title/Activity
              - generic [ref=e122]:
                - img [ref=e123]:
                  - img [ref=e124]
                - img [ref=e126]:
                  - img [ref=e127]
            - generic [ref=e129]:
              - generic [ref=e130]: Date
              - generic [ref=e132]:
                - img [ref=e133]:
                  - img [ref=e134]
                - img [ref=e136]:
                  - img [ref=e137]
            - generic [ref=e139]:
              - generic [ref=e140]: Status
              - generic [ref=e142]:
                - img [ref=e143]:
                  - img [ref=e144]
                - img [ref=e146]:
                  - img [ref=e147]
            - 'row "Business Communication Skills: Handling Clients & Customers Admin Course Jun 05, 2026 Completed — —" [ref=e149]':
              - 'cell "Business Communication Skills: Handling Clients & Customers" [ref=e150]':
                - 'link "Business Communication Skills: Handling Clients & Customers" [ref=e151] [cursor=pointer]':
                  - /url: https://searce.udemy.com/course/customer-service-soft-skills-training/
              - cell "Admin" [ref=e152]:
                - generic [ref=e153]: Admin
              - cell "Course" [ref=e154]:
                - generic [ref=e155]: Course
              - cell "Jun 05, 2026" [ref=e156]
              - cell "Completed" [ref=e157]:
                - generic [ref=e158]: Completed
              - cell "—" [ref=e159]
              - cell "—" [ref=e160]
            - row "Generative AI Leader | Google Cloud Skills Boost Admin Course Jun 04, 2026 In Progress — —" [ref=e161]:
              - cell "Generative AI Leader | Google Cloud Skills Boost" [ref=e162]:
                - link "Generative AI Leader | Google Cloud Skills Boost" [ref=e163] [cursor=pointer]:
                  - /url: https://www.cloudskillsboost.google/paths/1951
              - cell "Admin" [ref=e164]:
                - generic [ref=e165]: Admin
              - cell "Course" [ref=e166]:
                - generic [ref=e167]: Course
              - cell "Jun 04, 2026" [ref=e168]
              - cell "In Progress" [ref=e169]:
                - generic [ref=e170]: In Progress
              - cell "—" [ref=e171]
              - cell "—" [ref=e172]
            - row "Selenium WebDriver with Java -Basics to Advanced+Frameworks AI Generated Course Jun 03, 2026 In Progress — ellipsis" [ref=e173]:
              - cell "Selenium WebDriver with Java -Basics to Advanced+Frameworks" [ref=e174]:
                - link "Selenium WebDriver with Java -Basics to Advanced+Frameworks" [ref=e175] [cursor=pointer]:
                  - /url: https://www.udemy.com/course/selenium-real-time-examplesinterview-questions/
              - cell "AI Generated" [ref=e176]:
                - generic [ref=e177]: AI Generated
              - cell "Course" [ref=e178]:
                - generic [ref=e179]: Course
              - cell "Jun 03, 2026" [ref=e180]
              - cell "In Progress" [ref=e181]:
                - generic [ref=e182]: In Progress
              - cell "—" [ref=e183]
              - cell "ellipsis" [ref=e184]:
                - button "ellipsis" [ref=e185] [cursor=pointer]:
                  - img "ellipsis" [ref=e187]:
                    - img [ref=e188]
            - row "Build Infrastructure with Terraform on Google Cloud Admin Skill Badge Aug 25, 2025 Completed — —" [ref=e190]:
              - cell "Build Infrastructure with Terraform on Google Cloud" [ref=e191]
              - cell "Admin" [ref=e192]:
                - generic [ref=e193]: Admin
              - cell "Skill Badge" [ref=e194]:
                - generic [ref=e195]: Skill Badge
              - cell "Aug 25, 2025" [ref=e196]
              - cell "Completed" [ref=e197]:
                - generic [ref=e198]: Completed
              - cell "—" [ref=e199]
              - cell "—" [ref=e200]
            - row "Build a Website on Google Cloud Admin Skill Badge Oct 30, 2025 Completed — —" [ref=e201]:
              - cell "Build a Website on Google Cloud" [ref=e202]
              - cell "Admin" [ref=e203]:
                - generic [ref=e204]: Admin
              - cell "Skill Badge" [ref=e205]:
                - generic [ref=e206]: Skill Badge
              - cell "Oct 30, 2025" [ref=e207]
              - cell "Completed" [ref=e208]:
                - generic [ref=e209]: Completed
              - cell "—" [ref=e210]
              - cell "—" [ref=e211]
        - list [ref=e212]:
          - listitem [ref=e213]: Total 44 records
          - listitem "Previous Page" [ref=e214]:
            - button "left" [disabled] [ref=e215]:
              - img "left" [ref=e216]:
                - img [ref=e217]
          - listitem "1" [ref=e219] [cursor=pointer]:
            - generic [ref=e220]: "1"
          - listitem "2" [ref=e221] [cursor=pointer]:
            - generic [ref=e222]: "2"
          - listitem "3" [ref=e223] [cursor=pointer]:
            - generic [ref=e224]: "3"
          - listitem "4" [ref=e225] [cursor=pointer]:
            - generic [ref=e226]: "4"
          - listitem "5" [ref=e227] [cursor=pointer]:
            - generic [ref=e228]: "5"
          - listitem "Next 5 Pages" [ref=e229] [cursor=pointer]:
            - generic [ref=e231]:
              - img "double-right" [ref=e232]:
                - img [ref=e233]
              - generic [ref=e235]: •••
          - listitem "9" [ref=e236] [cursor=pointer]:
            - generic [ref=e237]: "9"
          - listitem "Next Page" [ref=e238] [cursor=pointer]:
            - button "right" [ref=e239]:
              - img "right" [ref=e240]:
                - img [ref=e241]
          - listitem [ref=e243]:
            - generic "Page Size" [ref=e244]:
              - generic [ref=e245]:
                - generic "5 / page" [ref=e246]
                - combobox "Page Size" [ref=e247]
              - img "down" [ref=e249]:
                - img [ref=e250]
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
> 62 |     await expect(contextSetup.poManager._learningRecordsPage.getContentSource(contentName)).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentSource'));
     |                                                                                             ^ Error: expect(locator).toHaveText(expected) failed
  63 |     await expect(contextSetup.poManager._learningRecordsPage.getContentType(contentName)).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentType'));
  64 |     await expect(contextSetup.poManager._learningRecordsPage.getContentDate(contentName)).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentDate'));
  65 |     await expect(contextSetup.poManager._learningRecordsPage.getContentStatus(contentName)).toHaveText(contextSetup.genericUtils.getValueByKey('IP_ContentStatus'));
  66 |     await page.pause();
  67 | 
  68 |   });
  69 | 
  70 |   
  71 | 
  72 | });
```