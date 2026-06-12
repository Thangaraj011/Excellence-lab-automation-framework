# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixture_based_tests/learningrecords-contents-verification.spec.js >> Learning records Individual contents details verification >> AI Recommended contents learning recods Edit details validation
- Location: tests/specs/fixture_based_tests/learningrecords-contents-verification.spec.js:32:10

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('//span[text()=\'Edit\']')

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
            - row "Negotiation Skills Masterclass - Business, Contract, Salary [Udemy] Admin Course Jun 05, 2026 Completed — —" [ref=e149]:
              - cell "Negotiation Skills Masterclass - Business, Contract, Salary [Udemy]" [ref=e150]:
                - link "Negotiation Skills Masterclass - Business, Contract, Salary [Udemy]" [ref=e151] [cursor=pointer]:
                  - /url: https://searce.udemy.com/course/negotiation-skills-masterclass/
              - cell "Admin" [ref=e152]:
                - generic [ref=e153]: Admin
              - cell "Course" [ref=e154]:
                - generic [ref=e155]: Course
              - cell "Jun 05, 2026" [ref=e156]
              - cell "Completed" [ref=e157]:
                - generic [ref=e158]: Completed
              - cell "—" [ref=e159]
              - cell "—" [ref=e160]
            - 'row "Business Communication Skills: Handling Clients & Customers Admin Course Jun 05, 2026 Completed — —" [ref=e161]':
              - 'cell "Business Communication Skills: Handling Clients & Customers" [ref=e162]':
                - 'link "Business Communication Skills: Handling Clients & Customers" [ref=e163] [cursor=pointer]':
                  - /url: https://searce.udemy.com/course/customer-service-soft-skills-training/
              - cell "Admin" [ref=e164]:
                - generic [ref=e165]: Admin
              - cell "Course" [ref=e166]:
                - generic [ref=e167]: Course
              - cell "Jun 05, 2026" [ref=e168]
              - cell "Completed" [ref=e169]:
                - generic [ref=e170]: Completed
              - cell "—" [ref=e171]
              - cell "—" [ref=e172]
            - row "Generative AI Leader | Google Cloud Skills Boost Admin Course Jun 04, 2026 In Progress — —" [ref=e173]:
              - cell "Generative AI Leader | Google Cloud Skills Boost" [ref=e174]:
                - link "Generative AI Leader | Google Cloud Skills Boost" [ref=e175] [cursor=pointer]:
                  - /url: https://www.cloudskillsboost.google/paths/1951
              - cell "Admin" [ref=e176]:
                - generic [ref=e177]: Admin
              - cell "Course" [ref=e178]:
                - generic [ref=e179]: Course
              - cell "Jun 04, 2026" [ref=e180]
              - cell "In Progress" [ref=e181]:
                - generic [ref=e182]: In Progress
              - cell "—" [ref=e183]
              - cell "—" [ref=e184]
            - row "Selenium WebDriver with Java -Basics to Advanced+Frameworks AI Generated Course Jun 03, 2026 In Progress — ellipsis" [ref=e185]:
              - cell "Selenium WebDriver with Java -Basics to Advanced+Frameworks" [ref=e186]:
                - link "Selenium WebDriver with Java -Basics to Advanced+Frameworks" [ref=e187] [cursor=pointer]:
                  - /url: https://www.udemy.com/course/selenium-real-time-examplesinterview-questions/
              - cell "AI Generated" [ref=e188]:
                - generic [ref=e189]: AI Generated
              - cell "Course" [ref=e190]:
                - generic [ref=e191]: Course
              - cell "Jun 03, 2026" [ref=e192]
              - cell "In Progress" [ref=e193]:
                - generic [ref=e194]: In Progress
              - cell "—" [ref=e195]
              - cell "ellipsis" [ref=e196]:
                - button "ellipsis" [ref=e197] [cursor=pointer]:
                  - img "ellipsis" [ref=e199]:
                    - img [ref=e200]
            - row "Build Infrastructure with Terraform on Google Cloud Admin Skill Badge Aug 24, 2025 Completed — —" [ref=e202]:
              - cell "Build Infrastructure with Terraform on Google Cloud" [ref=e203]
              - cell "Admin" [ref=e204]:
                - generic [ref=e205]: Admin
              - cell "Skill Badge" [ref=e206]:
                - generic [ref=e207]: Skill Badge
              - cell "Aug 24, 2025" [ref=e208]
              - cell "Completed" [ref=e209]:
                - generic [ref=e210]: Completed
              - cell "—" [ref=e211]
              - cell "—" [ref=e212]
            - row "Build a Website on Google Cloud Admin Skill Badge Oct 29, 2025 Completed — —" [ref=e213]:
              - cell "Build a Website on Google Cloud" [ref=e214]
              - cell "Admin" [ref=e215]:
                - generic [ref=e216]: Admin
              - cell "Skill Badge" [ref=e217]:
                - generic [ref=e218]: Skill Badge
              - cell "Oct 29, 2025" [ref=e219]
              - cell "Completed" [ref=e220]:
                - generic [ref=e221]: Completed
              - cell "—" [ref=e222]
              - cell "—" [ref=e223]
            - row "Set Up a Google Cloud Network Admin Skill Badge Nov 03, 2025 Completed — —" [ref=e224]:
              - cell "Set Up a Google Cloud Network" [ref=e225]
              - cell "Admin" [ref=e226]:
                - generic [ref=e227]: Admin
              - cell "Skill Badge" [ref=e228]:
                - generic [ref=e229]: Skill Badge
              - cell "Nov 03, 2025" [ref=e230]
              - cell "Completed" [ref=e231]:
                - generic [ref=e232]: Completed
              - cell "—" [ref=e233]
              - cell "—" [ref=e234]
            - row "Implement CI/CD Pipelines on Google Cloud Admin Skill Badge Nov 12, 2025 Completed — —" [ref=e235]:
              - cell "Implement CI/CD Pipelines on Google Cloud" [ref=e236]
              - cell "Admin" [ref=e237]:
                - generic [ref=e238]: Admin
              - cell "Skill Badge" [ref=e239]:
                - generic [ref=e240]: Skill Badge
              - cell "Nov 12, 2025" [ref=e241]
              - cell "Completed" [ref=e242]:
                - generic [ref=e243]: Completed
              - cell "—" [ref=e244]
              - cell "—" [ref=e245]
            - 'row "Cloud Architecture: Design, Implement, and Manage Admin Skill Badge Nov 13, 2025 Completed — —" [ref=e246]':
              - 'cell "Cloud Architecture: Design, Implement, and Manage" [ref=e247]'
              - cell "Admin" [ref=e248]:
                - generic [ref=e249]: Admin
              - cell "Skill Badge" [ref=e250]:
                - generic [ref=e251]: Skill Badge
              - cell "Nov 13, 2025" [ref=e252]
              - cell "Completed" [ref=e253]:
                - generic [ref=e254]: Completed
              - cell "—" [ref=e255]
              - cell "—" [ref=e256]
            - row "Develop Serverless Applications on Cloud Run Admin Skill Badge Nov 16, 2025 Completed — —" [ref=e257]:
              - cell "Develop Serverless Applications on Cloud Run" [ref=e258]
              - cell "Admin" [ref=e259]:
                - generic [ref=e260]: Admin
              - cell "Skill Badge" [ref=e261]:
                - generic [ref=e262]: Skill Badge
              - cell "Nov 16, 2025" [ref=e263]
              - cell "Completed" [ref=e264]:
                - generic [ref=e265]: Completed
              - cell "—" [ref=e266]
              - cell "—" [ref=e267]
        - list [ref=e268]:
          - listitem [ref=e269]: Total 55 records
          - listitem "Previous Page" [ref=e270] [cursor=pointer]:
            - button "left" [ref=e271]:
              - img "left" [ref=e272]:
                - img [ref=e273]
          - listitem "1" [ref=e275] [cursor=pointer]:
            - generic [ref=e276]: "1"
          - listitem "2" [ref=e277] [cursor=pointer]:
            - generic [ref=e278]: "2"
          - listitem "3" [ref=e279] [cursor=pointer]:
            - generic [ref=e280]: "3"
          - listitem "4" [ref=e281] [cursor=pointer]:
            - generic [ref=e282]: "4"
          - listitem "5" [ref=e283] [cursor=pointer]:
            - generic [ref=e284]: "5"
          - listitem "6" [ref=e285] [cursor=pointer]:
            - generic [ref=e286]: "6"
          - listitem "Next Page" [ref=e287] [cursor=pointer]:
            - button "right" [ref=e288]:
              - img "right" [ref=e289]:
                - img [ref=e290]
          - listitem [ref=e292]:
            - generic "Page Size" [ref=e293]:
              - generic [ref=e294]:
                - generic "10 / page" [ref=e295]
                - combobox "Page Size" [ref=e296]
              - img "down" [ref=e298]:
                - img [ref=e299]
```

# Test source

```ts
  1  | import { test, expect } from "../../fixtures/index.js";
  2  | import { filtersTestData } from "../../data/homepage-filters-validation.data.js";
  3  | import { learningRecordsData } from "../../data/learningrecordspage.data.js";
  4  | 
  5  | 
  6  | test.describe.serial('Learning records Individual contents details verification', ()=>{
  7  |     const data = learningRecordsData.multipleContents;
  8  |     test.beforeEach(async({authPage, homePage, learningRecordsPage}) =>{
  9  |         await homePage.verifyHomepageLoaded();
  10 |         await learningRecordsPage.getLearningRecordsButton().click();
  11 |         await authPage.waitForLoadState("domcontentloaded");
  12 |         await learningRecordsPage.screenTitleCheck();
  13 |     })
  14 | 
  15 |     test('Multiple Individual contents learning recods details validation', {tag: "@learningRecords"}, async({authPage, homePage, learningRecordsPage, genericUtils}) =>{
  16 |         await learningRecordsPage.setTenContentperPage();
  17 |         await learningRecordsPage.findTitlesAcrossPages(data.contentTitles);
  18 |     });
  19 | 
  20 |     test('Single Individual contents learning recods details validation', {tag: "@learningRecords"}, async({authPage, homePage, learningRecordsPage, genericUtils}) =>{
  21 |         const data = learningRecordsData.singleContent;
  22 |         const expectedData = {
  23 |         source: data.contentSource,
  24 |         type: data.contentType,
  25 |         date: data.contentDate,
  26 |         status: data.contentStatus
  27 |     };
  28 |         await learningRecordsPage.setTenContentperPage();
  29 |         await learningRecordsPage.findTitlesAcrossPages(data.contentTitle, expectedData);
  30 |     });
  31 | 
  32 |     test.only('AI Recommended contents learning recods Edit details validation', {tag: "@learningRecords"}, async({authPage, homePage, learningRecordsPage, genericUtils}) =>{
  33 |         const data = learningRecordsData.singleContent;
  34 |         await learningRecordsPage.setTenContentperPage();
  35 |         await learningRecordsPage.findTitlesAcrossPages(data.contentTitle, data.contentSource);
> 36 |         await learningRecordsPage.editOption.click();
     |                                              ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  37 |         await authPage.pause();
  38 |     });
  39 | 
  40 | 
  41 | })
```