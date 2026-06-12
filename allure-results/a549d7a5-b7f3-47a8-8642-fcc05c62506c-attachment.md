# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixture_based_tests/learningrecords-contents-verification.spec.js >> Learning records Individual contents details verification >> AI Recommended contents learning recods Edit details validation
- Location: tests/specs/fixture_based_tests/learningrecords-contents-verification.spec.js:32:10

# Error details

```
Error: Target content title "Selenium WebDriver with Java -Basics to Advanced+Frameworks" was not found across any pagination pages.
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
            - 'row "Cloud Architecture: Design, Implement, and Manage Admin Quest Nov 13, 2025 COMPLETED — —" [ref=e149]':
              - 'cell "Cloud Architecture: Design, Implement, and Manage" [ref=e150]'
              - cell "Admin" [ref=e151]:
                - generic [ref=e152]: Admin
              - cell "Quest" [ref=e153]:
                - generic [ref=e154]: Quest
              - cell "Nov 13, 2025" [ref=e155]
              - cell "COMPLETED" [ref=e156]:
                - generic [ref=e157]: COMPLETED
              - cell "—" [ref=e158]
              - cell "—" [ref=e159]
            - row "Implement CI/CD Pipelines on Google Cloud Admin Course Nov 12, 2025 COMPLETED — —" [ref=e160]:
              - cell "Implement CI/CD Pipelines on Google Cloud" [ref=e161]:
                - link "Implement CI/CD Pipelines on Google Cloud" [ref=e162] [cursor=pointer]:
                  - /url: https://partner.cloudskillsboost.google/course_templates/691
              - cell "Admin" [ref=e163]:
                - generic [ref=e164]: Admin
              - cell "Course" [ref=e165]:
                - generic [ref=e166]: Course
              - cell "Nov 12, 2025" [ref=e167]
              - cell "COMPLETED" [ref=e168]:
                - generic [ref=e169]: COMPLETED
              - cell "—" [ref=e170]
              - cell "—" [ref=e171]
            - row "Set Up a Google Cloud Network Admin Quest Nov 03, 2025 COMPLETED — —" [ref=e172]:
              - cell "Set Up a Google Cloud Network" [ref=e173]
              - cell "Admin" [ref=e174]:
                - generic [ref=e175]: Admin
              - cell "Quest" [ref=e176]:
                - generic [ref=e177]: Quest
              - cell "Nov 03, 2025" [ref=e178]
              - cell "COMPLETED" [ref=e179]:
                - generic [ref=e180]: COMPLETED
              - cell "—" [ref=e181]
              - cell "—" [ref=e182]
            - row "Develop Serverless Applications on Cloud Run Admin Course Nov 16, 2025 COMPLETED — —" [ref=e183]:
              - cell "Develop Serverless Applications on Cloud Run" [ref=e184]:
                - link "Develop Serverless Applications on Cloud Run" [ref=e185] [cursor=pointer]:
                  - /url: https://partner.cloudskillsboost.google/course_templates/741
              - cell "Admin" [ref=e186]:
                - generic [ref=e187]: Admin
              - cell "Course" [ref=e188]:
                - generic [ref=e189]: Course
              - cell "Nov 16, 2025" [ref=e190]
              - cell "COMPLETED" [ref=e191]:
                - generic [ref=e192]: COMPLETED
              - cell "—" [ref=e193]
              - cell "—" [ref=e194]
            - row "Build Infrastructure with Terraform on Google Cloud Admin Quest Aug 24, 2025 COMPLETED — —" [ref=e195]:
              - cell "Build Infrastructure with Terraform on Google Cloud" [ref=e196]
              - cell "Admin" [ref=e197]:
                - generic [ref=e198]: Admin
              - cell "Quest" [ref=e199]:
                - generic [ref=e200]: Quest
              - cell "Aug 24, 2025" [ref=e201]
              - cell "COMPLETED" [ref=e202]:
                - generic [ref=e203]: COMPLETED
              - cell "—" [ref=e204]
              - cell "—" [ref=e205]
        - list [ref=e206]:
          - listitem [ref=e207]: Total 55 records
          - listitem "Previous Page" [ref=e208] [cursor=pointer]:
            - button "left" [ref=e209]:
              - img "left" [ref=e210]:
                - img [ref=e211]
          - listitem "1" [ref=e213] [cursor=pointer]:
            - generic [ref=e214]: "1"
          - listitem "2" [ref=e215] [cursor=pointer]:
            - generic [ref=e216]: "2"
          - listitem "3" [ref=e217] [cursor=pointer]:
            - generic [ref=e218]: "3"
          - listitem "4" [ref=e219] [cursor=pointer]:
            - generic [ref=e220]: "4"
          - listitem "5" [ref=e221] [cursor=pointer]:
            - generic [ref=e222]: "5"
          - listitem "6" [ref=e223] [cursor=pointer]:
            - generic [ref=e224]: "6"
          - listitem "Next Page" [ref=e225]:
            - button "right" [disabled] [ref=e226]:
              - img "right" [ref=e227]:
                - img [ref=e228]
          - listitem [ref=e230]:
            - generic "Page Size" [ref=e231]:
              - generic [ref=e232]:
                - generic "10 / page" [ref=e233]
                - combobox "Page Size" [ref=e234]
              - img "down" [ref=e236]:
                - img [ref=e237]
```

# Test source

```ts
  163 |     let isItemFound = false;
  164 | 
  165 |     const tableRows = this.page.locator(`//tbody/tr`);
  166 |     const nextButton = this.page.locator('li.ant-pagination-next').first();
  167 | 
  168 |     while (!isItemFound) {
  169 |         await tableRows.first().waitFor({ state: 'visible' });
  170 |         const rowCount = await tableRows.count();
  171 | 
  172 |         for (let i = 1; i < rowCount; i++) {
  173 |             const row = tableRows.nth(i);
  174 |             const actualTitle = await row.locator('td').nth(0).innerText();
  175 | 
  176 |             if (actualTitle.includes(targetTitle)) {
  177 |                 isItemFound = true;
  178 |                 console.log(`Match found for "${targetTitle}". Verifying details...`);
  179 | 
  180 |                 const actualSource = await row.locator('td').nth(1).innerText();
  181 |                 const actualType = await row.locator('td').nth(2).innerText();
  182 |                 const actualDate = await row.locator('td').nth(3).innerText();
  183 |                 const actualStatus = await row.locator('td').nth(4).innerText();
  184 | 
  185 |                 expect(actualSource.trim()).toBe(expectedValues.source);
  186 |                 expect(actualType.trim()).toBe(expectedValues.type);
  187 |                 expect(actualDate.trim()).toBe(expectedValues.date);
  188 |                 expect(actualStatus.trim()).toBe(expectedValues.status);
  189 | 
  190 |                 break;
  191 |             }
  192 |         }
  193 | 
  194 |         if (!isItemFound) {
  195 |             const isNextDisabled = await nextButton.isDisabled() || 
  196 |             await nextButton.getAttribute('aria-disabled') === 'true' ||
  197 |             (await nextButton.getAttribute('class'))?.includes('disabled');
  198 | 
  199 |             if (!isNextDisabled) {
  200 |                 console.log(`Item not found on this page. Clicking Next page...`);
  201 |                 
  202 |                 const initialFirstRowText = await tableRows.nth(1).innerText();
  203 |                 await nextButton.click();
  204 | 
  205 |                 await this.page.waitForFunction(
  206 |                     ([selector, oldText]) => {
  207 |                         const firstRow = document.querySelector(selector);
  208 |                         return firstRow && firstRow.innerText !== oldText;
  209 |                     },
  210 |                     ['tbody tr', initialFirstRowText]
  211 |                 );
  212 |             } else {
  213 |                 throw new Error(`Target content title "${targetTitle}" was not found across any pagination pages.`);
  214 |             }
  215 |         }
  216 |     }
  217 | }
  218 | 
  219 |   async findContentAndInitiateActions(title, expectedSource){
  220 |     let isItemFound = false;
  221 | 
  222 |     const tableRows = this.page.locator(`tbody tr.ant-table-row`);
  223 |     const nextButton = this.page.locator('li.ant-pagination-next').first();
  224 | 
  225 |     while (!isItemFound) {
  226 |         await tableRows.first().waitFor({ state: 'visible' });
  227 |         const rowCount = await tableRows.count();
  228 | 
  229 |         for (let i = 0; i < rowCount; i++) {
  230 |             const row = tableRows.nth(i);
  231 |             const actualTitle = await row.locator('td').nth(0).innerText();
  232 |             console.log("Row 0 Text is:", await tableRows.nth(0).innerText());
  233 |             if (actualTitle.includes(title)) {
  234 |                 isItemFound = true;
  235 |                 console.log(`Match found for "${targetTitle}". Verifying details...`);
  236 | 
  237 |                 const actualSource = await row.locator('td').nth(1).innerText();
  238 |                 expect(actualSource.trim()).toBe(expectedSource);
  239 |                 return row;
  240 |                 break;
  241 |             }
  242 |         }
  243 | 
  244 |         if (!isItemFound) {
  245 |             const isNextDisabled = await nextButton.isDisabled() || 
  246 |             await nextButton.getAttribute('aria-disabled') === 'true' ||
  247 |             (await nextButton.getAttribute('class'))?.includes('disabled');
  248 | 
  249 |             if (!isNextDisabled) {
  250 |                 console.log(`Item not found on this page. Clicking Next page...`);
  251 |                 
  252 |                 const initialFirstRowText = await tableRows.nth(1).innerText();
  253 |                 await nextButton.click();
  254 | 
  255 |                 await this.page.waitForFunction(
  256 |                     ([selector, oldText]) => {
  257 |                         const firstRow = document.querySelector(selector);
  258 |                         return firstRow && firstRow.innerText !== oldText;
  259 |                     },
  260 |                     ['tbody tr', initialFirstRowText]
  261 |                 );
  262 |             } else {
> 263 |                 throw new Error(`Target content title "${title}" was not found across any pagination pages.`);
      |                       ^ Error: Target content title "Selenium WebDriver with Java -Basics to Advanced+Frameworks" was not found across any pagination pages.
  264 |             }
  265 |         }
  266 |     }
  267 |   }
  268 | 
  269 |   async setTenContentperPage(){
  270 |     await this.conetntPerPageDropdown.click();
  271 |     await this.page.locator(`.rc-virtual-list-holder-inner`).waitFor({state: 'visible'});
  272 |     await this.tenPerPageOption.click();
  273 |     await this.page.waitForLoadState('domcontentloaded');
  274 |   }
  275 | 
  276 | 
  277 |   
  278 | 
  279 | }
```