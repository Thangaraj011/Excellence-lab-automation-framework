# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixture_based_tests/learningrecords-contents-verification.spec.js >> Learning records Individual contents details verification >> AI Recommended contents learning recods Edit details validation
- Location: tests/specs/fixture_based_tests/learningrecords-contents-verification.spec.js:32:10

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('tbody tr').first() to be visible
    34 × locator resolved to hidden <tr aria-hidden="true" class="ant-table-measure-row">…</tr>

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
            - row "Advanced REST Assured API Automation Framework Full Course ... AI Generated Video Jun 09, 2026 Completed — ellipsis" [ref=e149]:
              - cell "Advanced REST Assured API Automation Framework Full Course ..." [ref=e150]:
                - link "Advanced REST Assured API Automation Framework Full Course ..." [ref=e151] [cursor=pointer]:
                  - /url: https://www.youtube.com/watch?v=kay86__5eTg
              - cell "AI Generated" [ref=e152]:
                - generic [ref=e153]: AI Generated
              - cell "Video" [ref=e154]:
                - generic [ref=e155]: Video
              - cell "Jun 09, 2026" [ref=e156]
              - cell "Completed" [ref=e157]:
                - generic [ref=e158]: Completed
              - cell "—" [ref=e159]
              - cell "ellipsis" [ref=e160]:
                - button "ellipsis" [ref=e161] [cursor=pointer]:
                  - img "ellipsis" [ref=e163]:
                    - img [ref=e164]
            - 'row "CI/CD for QA: How to Integrate Your Tests into Pipelines - Medium AI Generated Article Jun 09, 2026 Completed — ellipsis" [ref=e166]':
              - 'cell "CI/CD for QA: How to Integrate Your Tests into Pipelines - Medium" [ref=e167]':
                - 'link "CI/CD for QA: How to Integrate Your Tests into Pipelines - Medium" [ref=e168] [cursor=pointer]':
                  - /url: https://medium.com/@pr.moreirarocha/ci-cd-for-qa-how-to-integrate-your-tests-into-pipelines-2aee54b36be1
              - cell "AI Generated" [ref=e169]:
                - generic [ref=e170]: AI Generated
              - cell "Article" [ref=e171]:
                - generic [ref=e172]: Article
              - cell "Jun 09, 2026" [ref=e173]
              - cell "Completed" [ref=e174]:
                - generic [ref=e175]: Completed
              - cell "—" [ref=e176]
              - cell "ellipsis" [ref=e177]:
                - button "ellipsis" [ref=e178] [cursor=pointer]:
                  - img "ellipsis" [ref=e180]:
                    - img [ref=e181]
            - row "Confusion magic sample test 2026 Admin Article Jun 08, 2026 Completed — —" [ref=e183]:
              - cell "Confusion magic sample test 2026" [ref=e184]:
                - link "Confusion magic sample test 2026" [ref=e185] [cursor=pointer]:
                  - /url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4260479/
              - cell "Admin" [ref=e186]:
                - generic [ref=e187]: Admin
              - cell "Article" [ref=e188]:
                - generic [ref=e189]: Article
              - cell "Jun 08, 2026" [ref=e190]
              - cell "Completed" [ref=e191]:
                - generic [ref=e192]: Completed
              - cell "—" [ref=e193]
              - cell "—" [ref=e194]
            - row "Test sample confusion Magic 2026 Admin Article Jun 08, 2026 In Progress — —" [ref=e195]:
              - cell "Test sample confusion Magic 2026" [ref=e196]:
                - link "Test sample confusion Magic 2026" [ref=e197] [cursor=pointer]:
                  - /url: https://pipovillanueva.com/april-2015-some-thoughts-about-clarity-and-confusion-in-magic/
              - cell "Admin" [ref=e198]:
                - generic [ref=e199]: Admin
              - cell "Article" [ref=e200]:
                - generic [ref=e201]: Article
              - cell "Jun 08, 2026" [ref=e202]
              - cell "In Progress" [ref=e203]:
                - generic [ref=e204]: In Progress
              - cell "—" [ref=e205]
              - cell "—" [ref=e206]
            - row "Migrate Teradata to BigQuery Admin Skill Badge Jun 09, 2026 Completed — —" [ref=e207]:
              - cell "Migrate Teradata to BigQuery" [ref=e208]
              - cell "Admin" [ref=e209]:
                - generic [ref=e210]: Admin
              - cell "Skill Badge" [ref=e211]:
                - generic [ref=e212]: Skill Badge
              - cell "Jun 09, 2026" [ref=e213]
              - cell "Completed" [ref=e214]:
                - generic [ref=e215]: Completed
              - cell "—" [ref=e216]
              - cell "—" [ref=e217]
            - row "Test sample 2026 001 Manager Article Jun 08, 2026 In Progress — —" [ref=e218]:
              - cell "Test sample 2026 001" [ref=e219]:
                - link "Test sample 2026 001" [ref=e220] [cursor=pointer]:
                  - /url: https://www.tricentis.com/blog/defining-your-test-strategy
              - cell "Manager" [ref=e221]:
                - generic [ref=e222]: Manager
              - cell "Article" [ref=e223]:
                - generic [ref=e224]: Article
              - cell "Jun 08, 2026" [ref=e225]
              - cell "In Progress" [ref=e226]:
                - generic [ref=e227]: In Progress
              - cell "—" [ref=e228]
              - cell "—" [ref=e229]
            - row "Effective way to increase productivity in 2026 Manager Article Jun 08, 2026 Completed — —" [ref=e230]:
              - cell "Effective way to increase productivity in 2026" [ref=e231]:
                - link "Effective way to increase productivity in 2026" [ref=e232] [cursor=pointer]:
                  - /url: https://www.high-performance-speakers.com/news/tips-and-tricks/enhance-habits-increase-productivity
              - cell "Manager" [ref=e233]:
                - generic [ref=e234]: Manager
              - cell "Article" [ref=e235]:
                - generic [ref=e236]: Article
              - cell "Jun 08, 2026" [ref=e237]
              - cell "Completed" [ref=e238]:
                - generic [ref=e239]: Completed
              - cell "—" [ref=e240]
              - cell "—" [ref=e241]
            - row "Monitor and Log with Google Cloud Operations Suite Admin Skill Badge Jun 08, 2026 Completed — —" [ref=e242]:
              - cell "Monitor and Log with Google Cloud Operations Suite" [ref=e243]
              - cell "Admin" [ref=e244]:
                - generic [ref=e245]: Admin
              - cell "Skill Badge" [ref=e246]:
                - generic [ref=e247]: Skill Badge
              - cell "Jun 08, 2026" [ref=e248]
              - cell "Completed" [ref=e249]:
                - generic [ref=e250]: Completed
              - cell "—" [ref=e251]
              - cell "—" [ref=e252]
            - row "Competitor Analysis and Market Research - Qualtrics Admin Article Jun 07, 2026 In Progress — —" [ref=e253]:
              - cell "Competitor Analysis and Market Research - Qualtrics" [ref=e254]:
                - link "Competitor Analysis and Market Research - Qualtrics" [ref=e255] [cursor=pointer]:
                  - /url: https://www.qualtrics.com/en-au/experience-management/brand/research-competitors/
              - cell "Admin" [ref=e256]:
                - generic [ref=e257]: Admin
              - cell "Article" [ref=e258]:
                - generic [ref=e259]: Article
              - cell "Jun 07, 2026" [ref=e260]
              - cell "In Progress" [ref=e261]:
                - generic [ref=e262]: In Progress
              - cell "—" [ref=e263]
              - cell "—" [ref=e264]
            - row "The Art of Active Listening | The Harvard Business Review Guide Admin Youtube Jun 05, 2026 Completed — —" [ref=e265]:
              - cell "The Art of Active Listening | The Harvard Business Review Guide" [ref=e266]:
                - link "The Art of Active Listening | The Harvard Business Review Guide" [ref=e267] [cursor=pointer]:
                  - /url: https://www.youtube.com/watch?v=aDMtx5ivKK0
              - cell "Admin" [ref=e268]:
                - generic [ref=e269]: Admin
              - cell "Youtube" [ref=e270]:
                - generic [ref=e271]: Youtube
              - cell "Jun 05, 2026" [ref=e272]
              - cell "Completed" [ref=e273]:
                - generic [ref=e274]: Completed
              - cell "—" [ref=e275]
              - cell "—" [ref=e276]
        - list [ref=e277]:
          - listitem [ref=e278]: Total 55 records
          - listitem "Previous Page" [ref=e279]:
            - button "left" [disabled] [ref=e280]:
              - img "left" [ref=e281]:
                - img [ref=e282]
          - listitem "1" [ref=e284] [cursor=pointer]:
            - generic [ref=e285]: "1"
          - listitem "2" [ref=e286] [cursor=pointer]:
            - generic [ref=e287]: "2"
          - listitem "3" [ref=e288] [cursor=pointer]:
            - generic [ref=e289]: "3"
          - listitem "4" [ref=e290] [cursor=pointer]:
            - generic [ref=e291]: "4"
          - listitem "5" [ref=e292] [cursor=pointer]:
            - generic [ref=e293]: "5"
          - listitem "6" [ref=e294] [cursor=pointer]:
            - generic [ref=e295]: "6"
          - listitem "Next Page" [ref=e296] [cursor=pointer]:
            - button "right" [ref=e297]:
              - img "right" [ref=e298]:
                - img [ref=e299]
          - listitem [ref=e301]:
            - generic "Page Size" [ref=e302]:
              - generic [ref=e303]:
                - generic "10 / page" [ref=e304]
                - combobox "Page Size" [ref=e305]
              - img "down" [ref=e307]:
                - img [ref=e308]
```

# Test source

```ts
  126 |             .or(this.page.getByText(title, { exact: false }))
  127 |             .first();
  128 | 
  129 |       if (await locator.count() > 0) {
  130 |         results.set(title, pageNum);
  131 |       }
  132 |     }
  133 | 
  134 |     if (results.size === wanted.length) break;
  135 | 
  136 |     const nextLi = this.page.locator('li.ant-pagination-next');
  137 |     const isDisabled =
  138 |       (await nextLi.getAttribute('aria-disabled')) === 'true' ||
  139 |       (await nextLi.getAttribute('class'))?.includes('disabled');
  140 |     if (isDisabled) break;
  141 | 
  142 |     const firstRowText = await this.page.locator(rowSelector).first().innerText();
  143 |     await this.page.locator(nextSelector).first().click();
  144 |     
  145 |     await this.page.locator(rowSelector).first()
  146 |       .filter({ hasNotText: firstRowText })
  147 |       .first()
  148 |       .waitFor({ state: 'visible' })
  149 |       .catch(() => this.page.waitForTimeout(500));
  150 |   }
  151 | 
  152 |   const found = Object.fromEntries(results);
  153 |   const missing = wanted.filter((t) => !results.has(t));
  154 | 
  155 |   if (requireAll && missing.length > 0) {
  156 |     throw new Error(`Title(s) not found: ${missing.join(', ')}`);
  157 |   }
  158 | 
  159 |   return { found, missing, allFound: missing.length === 0 };
  160 | }
  161 | 
  162 |   async findAndAssertRecord( targetTitle, expectedValues) {
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
  222 |     const tableRows = this.page.locator(`tbody tr`);
  223 |     const nextButton = this.page.locator('li.ant-pagination-next').first();
  224 | 
  225 |     while (!isItemFound) {
> 226 |         await tableRows.first().waitFor({ state: 'visible' });
      |                                 ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
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
  263 |                 throw new Error(`Target content title "${title}" was not found across any pagination pages.`);
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