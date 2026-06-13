# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-filters-validation.spec.js >> Home Page filters validation >> Due Date filter validation
- Location: tests/specs/homepage/homepage-filters-validation.spec.js:29:10

# Error details

```
TypeError: this.dueDateEnd.fill(...).press is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - heading "Homepage" [level=4] [ref=e68]
        - generic [ref=e69]:
          - tablist [ref=e70]:
            - generic [ref=e72]:
              - tab "Assigned Courses" [selected] [ref=e74] [cursor=pointer]
              - tab "AI Recommendations" [ref=e76] [cursor=pointer]
          - tabpanel "Assigned Courses" [ref=e79]:
            - generic [ref=e88]:
              - generic [ref=e89]:
                - textbox "Search" [ref=e90]
                - img "search" [ref=e92]:
                  - img [ref=e93]
              - generic [ref=e95]:
                - generic [ref=e96]:
                  - generic: Skill category
                  - combobox [ref=e97]
                - img "down" [ref=e99]:
                  - img [ref=e100]
              - generic [ref=e102]:
                - generic [ref=e103]:
                  - generic: Skill Name
                  - combobox [ref=e104]
                - img "down" [ref=e106]:
                  - img [ref=e107]
              - generic [ref=e109]:
                - textbox "Due Date" [ref=e111]: 2026-05-04
                - generic "to" [ref=e113]:
                  - img "swap-right" [ref=e114]:
                    - img [ref=e115]
                - textbox "Due Date" [active] [ref=e118]: 2026-06-09
                - generic:
                  - img "calendar":
                    - img
                - button "close-circle" [ref=e119] [cursor=pointer]:
                  - img "close-circle" [ref=e120]:
                    - img [ref=e121]
            - generic [ref=e125]:
              - strong [ref=e127]: Quick Filters
              - generic [ref=e128]:
                - generic [ref=e129]:
                  - generic [ref=e130]: Priority
                  - generic "Filter by priority" [ref=e131]:
                    - generic [ref=e132] [cursor=pointer]: Optional
                    - generic [ref=e133] [cursor=pointer]: Mandatory
                - generic [ref=e134]:
                  - generic [ref=e135]: Status
                  - generic "Filter by status" [ref=e136]:
                    - generic [ref=e137] [cursor=pointer]: Assigned
                    - generic [ref=e138] [cursor=pointer]: In Progress
            - generic [ref=e139]:
              - generic [ref=e145]:
                - generic [ref=e148]:
                  - img "crown" [ref=e149]:
                    - img [ref=e150]
                  - text: Assigned By Manager
                - generic [ref=e152]:
                  - generic "Sort courses" [ref=e154] [cursor=pointer]:
                    - generic [ref=e155]:
                      - generic: Sort by
                      - combobox "Sort courses" [ref=e156]
                    - img "down" [ref=e158]:
                      - img [ref=e159]
                  - button "Collapse section" [expanded] [ref=e162] [cursor=pointer]:
                    - img "up" [ref=e164]:
                      - img [ref=e165]
              - generic [ref=e202]:
                - generic [ref=e205]:
                  - img "user" [ref=e206]:
                    - img [ref=e207]
                  - text: Assigned By Admin
                - generic [ref=e209]:
                  - generic "Sort courses" [ref=e211] [cursor=pointer]:
                    - generic [ref=e212]:
                      - generic: Sort by
                      - combobox "Sort courses" [ref=e213]
                    - img "down" [ref=e215]:
                      - img [ref=e216]
                  - button "Collapse section" [expanded] [ref=e219] [cursor=pointer]:
                    - img "up" [ref=e221]:
                      - img [ref=e222]
  - generic [ref=e257]:
    - generic [ref=e259]:
      - generic [ref=e260]:
        - button "Last year (Control + left)" [ref=e261] [cursor=pointer]
        - button "Previous month (PageUp)" [ref=e263] [cursor=pointer]
        - generic [ref=e265]:
          - button "Choose a month" [ref=e266] [cursor=pointer]: May
          - button "Choose a year" [ref=e267] [cursor=pointer]: "2026"
      - table [ref=e269]:
        - rowgroup [ref=e270]:
          - row "Su Mo Tu We Th Fr Sa" [ref=e271]:
            - columnheader "Su" [ref=e272]
            - columnheader "Mo" [ref=e273]
            - columnheader "Tu" [ref=e274]
            - columnheader "We" [ref=e275]
            - columnheader "Th" [ref=e276]
            - columnheader "Fr" [ref=e277]
            - columnheader "Sa" [ref=e278]
        - rowgroup [ref=e279]:
          - row "26 27 28 29 30 1 2" [ref=e280]:
            - cell "26" [ref=e281] [cursor=pointer]:
              - generic [ref=e282]: "26"
            - cell "27" [ref=e283] [cursor=pointer]:
              - generic [ref=e284]: "27"
            - cell "28" [ref=e285] [cursor=pointer]:
              - generic [ref=e286]: "28"
            - cell "29" [ref=e287] [cursor=pointer]:
              - generic [ref=e288]: "29"
            - cell "30" [ref=e289] [cursor=pointer]:
              - generic [ref=e290]: "30"
            - cell "1" [ref=e291] [cursor=pointer]:
              - generic [ref=e292]: "1"
            - cell "2" [ref=e293] [cursor=pointer]:
              - generic [ref=e294]: "2"
          - row "3 4 5 6 7 8 9" [ref=e295]:
            - cell "3" [ref=e296] [cursor=pointer]:
              - generic [ref=e297]: "3"
            - cell "4" [ref=e298] [cursor=pointer]:
              - generic [ref=e299]: "4"
            - cell "5" [ref=e300] [cursor=pointer]:
              - generic [ref=e301]: "5"
            - cell "6" [ref=e302] [cursor=pointer]:
              - generic [ref=e303]: "6"
            - cell "7" [ref=e304] [cursor=pointer]:
              - generic [ref=e305]: "7"
            - cell "8" [ref=e306] [cursor=pointer]:
              - generic [ref=e307]: "8"
            - cell "9" [ref=e308] [cursor=pointer]:
              - generic [ref=e309]: "9"
          - row "10 11 12 13 14 15 16" [ref=e310]:
            - cell "10" [ref=e311] [cursor=pointer]:
              - generic [ref=e312]: "10"
            - cell "11" [ref=e313] [cursor=pointer]:
              - generic [ref=e314]: "11"
            - cell "12" [ref=e315] [cursor=pointer]:
              - generic [ref=e316]: "12"
            - cell "13" [ref=e317] [cursor=pointer]:
              - generic [ref=e318]: "13"
            - cell "14" [ref=e319] [cursor=pointer]:
              - generic [ref=e320]: "14"
            - cell "15" [ref=e321] [cursor=pointer]:
              - generic [ref=e322]: "15"
            - cell "16" [ref=e323] [cursor=pointer]:
              - generic [ref=e324]: "16"
          - row "17 18 19 20 21 22 23" [ref=e325]:
            - cell "17" [ref=e326] [cursor=pointer]:
              - generic [ref=e327]: "17"
            - cell "18" [ref=e328] [cursor=pointer]:
              - generic [ref=e329]: "18"
            - cell "19" [ref=e330] [cursor=pointer]:
              - generic [ref=e331]: "19"
            - cell "20" [ref=e332] [cursor=pointer]:
              - generic [ref=e333]: "20"
            - cell "21" [ref=e334] [cursor=pointer]:
              - generic [ref=e335]: "21"
            - cell "22" [ref=e336] [cursor=pointer]:
              - generic [ref=e337]: "22"
            - cell "23" [ref=e338] [cursor=pointer]:
              - generic [ref=e339]: "23"
          - row "24 25 26 27 28 29 30" [ref=e340]:
            - cell "24" [ref=e341] [cursor=pointer]:
              - generic [ref=e342]: "24"
            - cell "25" [ref=e343] [cursor=pointer]:
              - generic [ref=e344]: "25"
            - cell "26" [ref=e345] [cursor=pointer]:
              - generic [ref=e346]: "26"
            - cell "27" [ref=e347] [cursor=pointer]:
              - generic [ref=e348]: "27"
            - cell "28" [ref=e349] [cursor=pointer]:
              - generic [ref=e350]: "28"
            - cell "29" [ref=e351] [cursor=pointer]:
              - generic [ref=e352]: "29"
            - cell "30" [ref=e353] [cursor=pointer]:
              - generic [ref=e354]: "30"
          - row "31 1 2 3 4 5 6" [ref=e355]:
            - cell "31" [ref=e356] [cursor=pointer]:
              - generic [ref=e357]: "31"
            - cell "1" [ref=e358] [cursor=pointer]:
              - generic [ref=e359]: "1"
            - cell "2" [ref=e360] [cursor=pointer]:
              - generic [ref=e361]: "2"
            - cell "3" [ref=e362] [cursor=pointer]:
              - generic [ref=e363]: "3"
            - cell "4" [ref=e364] [cursor=pointer]:
              - generic [ref=e365]: "4"
            - cell "5" [ref=e366] [cursor=pointer]:
              - generic [ref=e367]: "5"
            - cell "6" [ref=e368] [cursor=pointer]:
              - generic [ref=e369]: "6"
    - generic [ref=e371]:
      - generic [ref=e372]:
        - generic [ref=e373]:
          - button "Choose a month" [ref=e374] [cursor=pointer]: Jun
          - button "Choose a year" [ref=e375] [cursor=pointer]: "2026"
        - button "Next month (PageDown)" [ref=e376] [cursor=pointer]
        - button "Next year (Control + right)" [ref=e378] [cursor=pointer]
      - table [ref=e381]:
        - rowgroup [ref=e382]:
          - row "Su Mo Tu We Th Fr Sa" [ref=e383]:
            - columnheader "Su" [ref=e384]
            - columnheader "Mo" [ref=e385]
            - columnheader "Tu" [ref=e386]
            - columnheader "We" [ref=e387]
            - columnheader "Th" [ref=e388]
            - columnheader "Fr" [ref=e389]
            - columnheader "Sa" [ref=e390]
        - rowgroup [ref=e391]:
          - row "31 1 2 3 4 5 6" [ref=e392]:
            - cell "31" [ref=e393] [cursor=pointer]:
              - generic [ref=e394]: "31"
            - cell "1" [ref=e395] [cursor=pointer]:
              - generic [ref=e396]: "1"
            - cell "2" [ref=e397] [cursor=pointer]:
              - generic [ref=e398]: "2"
            - cell "3" [ref=e399] [cursor=pointer]:
              - generic [ref=e400]: "3"
            - cell "4" [ref=e401] [cursor=pointer]:
              - generic [ref=e402]: "4"
            - cell "5" [ref=e403] [cursor=pointer]:
              - generic [ref=e404]: "5"
            - cell "6" [ref=e405] [cursor=pointer]:
              - generic [ref=e406]: "6"
          - row "7 8 9 10 11 12 13" [ref=e407]:
            - cell "7" [ref=e408] [cursor=pointer]:
              - generic [ref=e409]: "7"
            - cell "8" [ref=e410] [cursor=pointer]:
              - generic [ref=e411]: "8"
            - cell "9" [ref=e412] [cursor=pointer]:
              - generic [ref=e413]: "9"
            - cell "10" [ref=e414] [cursor=pointer]:
              - generic [ref=e415]: "10"
            - cell "11" [ref=e416] [cursor=pointer]:
              - generic [ref=e417]: "11"
            - cell "12" [ref=e418] [cursor=pointer]:
              - generic [ref=e419]: "12"
            - cell "13" [ref=e420] [cursor=pointer]:
              - generic [ref=e421]: "13"
          - row "14 15 16 17 18 19 20" [ref=e422]:
            - cell "14" [ref=e423] [cursor=pointer]:
              - generic [ref=e424]: "14"
            - cell "15" [ref=e425] [cursor=pointer]:
              - generic [ref=e426]: "15"
            - cell "16" [ref=e427] [cursor=pointer]:
              - generic [ref=e428]: "16"
            - cell "17" [ref=e429] [cursor=pointer]:
              - generic [ref=e430]: "17"
            - cell "18" [ref=e431] [cursor=pointer]:
              - generic [ref=e432]: "18"
            - cell "19" [ref=e433] [cursor=pointer]:
              - generic [ref=e434]: "19"
            - cell "20" [ref=e435] [cursor=pointer]:
              - generic [ref=e436]: "20"
          - row "21 22 23 24 25 26 27" [ref=e437]:
            - cell "21" [ref=e438] [cursor=pointer]:
              - generic [ref=e439]: "21"
            - cell "22" [ref=e440] [cursor=pointer]:
              - generic [ref=e441]: "22"
            - cell "23" [ref=e442] [cursor=pointer]:
              - generic [ref=e443]: "23"
            - cell "24" [ref=e444] [cursor=pointer]:
              - generic [ref=e445]: "24"
            - cell "25" [ref=e446] [cursor=pointer]:
              - generic [ref=e447]: "25"
            - cell "26" [ref=e448] [cursor=pointer]:
              - generic [ref=e449]: "26"
            - cell "27" [ref=e450] [cursor=pointer]:
              - generic [ref=e451]: "27"
          - row "28 29 30 1 2 3 4" [ref=e452]:
            - cell "28" [ref=e453] [cursor=pointer]:
              - generic [ref=e454]: "28"
            - cell "29" [ref=e455] [cursor=pointer]:
              - generic [ref=e456]: "29"
            - cell "30" [ref=e457] [cursor=pointer]:
              - generic [ref=e458]: "30"
            - cell "1" [ref=e459] [cursor=pointer]:
              - generic [ref=e460]: "1"
            - cell "2" [ref=e461] [cursor=pointer]:
              - generic [ref=e462]: "2"
            - cell "3" [ref=e463] [cursor=pointer]:
              - generic [ref=e464]: "3"
            - cell "4" [ref=e465] [cursor=pointer]:
              - generic [ref=e466]: "4"
          - row "5 6 7 8 9 10 11" [ref=e467]:
            - cell "5" [ref=e468] [cursor=pointer]:
              - generic [ref=e469]: "5"
            - cell "6" [ref=e470] [cursor=pointer]:
              - generic [ref=e471]: "6"
            - cell "7" [ref=e472] [cursor=pointer]:
              - generic [ref=e473]: "7"
            - cell "8" [ref=e474] [cursor=pointer]:
              - generic [ref=e475]: "8"
            - cell "9" [ref=e476] [cursor=pointer]:
              - generic [ref=e477]: "9"
            - cell "10" [ref=e478] [cursor=pointer]:
              - generic [ref=e479]: "10"
            - cell "11" [ref=e480] [cursor=pointer]:
              - generic [ref=e481]: "11"
```

# Test source

```ts
  77  | 
  78  |   async verifyContentVisible(contentName) {
  79  |     const content = this.page.getByText(contentName, { exact: true });
  80  |     await content.scrollIntoViewIfNeeded();
  81  |     await expect(content).toBeVisible();
  82  |   }
  83  | 
  84  | 
  85  |   async verifyLearningPathDetailsScreen(learningPathName)
  86  |   {
  87  |     await expect(this.page.getByRole('heading', { name: `${learningPathName}` })).toBeVisible();
  88  |     await expect(this.page.locator('.ant-progress-rail')).toBeVisible();
  89  |   }
  90  | 
  91  |   async verifyFiltersOnLearningPathDetailsScreen(){
  92  |     await expect(this.page.getByRole('heading', { name: 'Learning Path Content' })).toBeVisible();
  93  |     await expect(this.page.getByText('Quick Filters')).toBeVisible();
  94  |     await expect(this.page.getByText('Priority')).toBeVisible();
  95  |     await expect(this.page.locator('span').filter({ hasText: 'Optional' }).first()).toBeVisible();
  96  |     await expect(this.page.getByLabel('Filter by priority').getByText('Mandatory')).toBeVisible();
  97  |     await expect(this.page.getByText('Status')).toBeVisible();
  98  |     await expect(this.page.locator('span').filter({ hasText: 'Assigned' }).nth(1)).toBeVisible();
  99  |     await expect(this.page.locator('span').filter({ hasText: 'In Progress' }).first()).toBeVisible();
  100 |     await expect(this.page.locator('span').filter({ hasText: 'Completed' }).first()).toBeVisible();
  101 |   }
  102 | 
  103 |   async openIndividualContent(contentName){
  104 |     await this.page.getByText(contentName).click();
  105 | 
  106 |   }
  107 | 
  108 |   async openLearningPath(learningPathName){
  109 |     const content = this.page.getByText(learningPathName, { exact: true });
  110 |     await content.scrollIntoViewIfNeeded();
  111 |     await expect(content).toBeVisible();
  112 |     await this.page.getByText(learningPathName).click();
  113 |   }
  114 | 
  115 | 
  116 | 
  117 |   async verifySearchContentVisible(courseName, contentName) {
  118 |     await this.searchTextbox.waitFor({ state: 'visible' });
  119 |     await this.searchTextbox.fill(courseName);
  120 |     await this.page.waitForLoadState('domcontentloaded');
  121 |     await this.verifyContentVisible(contentName);
  122 |   }
  123 | 
  124 |   async verifyOnlySelectedSkillCategoryContentsVisible(skillCategoryValue) {
  125 |     const pills =  this.page.locator('._listPillSkillCategory_p5zy6_654');
  126 |     const count = await pills.count();
  127 |     for(let i=0;i<count;i++){
  128 |       const pill = pills.nth(i);
  129 |       const text = (await pill.textContent())?.replace(/\s+/g, ' ').trim();
  130 |       console.log(`Pill[${i}] text = "${text}"`);
  131 |       const contentName = (
  132 |         await pill
  133 |         .locator("xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]")
  134 |         .textContent()
  135 |       )?.replace(/\s+/g, ' ').trim();
  136 |       if(!text.includes(skillCategoryValue)){
  137 |         throw new Error(`${contentName} does not have ${skillCategoryValue} as skill category`);
  138 |       }
  139 |       console.log(`${contentName} has skill category ${skillCategoryValue} as skill category`);
  140 |     }
  141 |   }
  142 | 
  143 |   async verifyOnlySelectedSkillNameContentsVisible(skillNameValue) {
  144 |     const pills =  this.page.locator('._listPillSkillName_p5zy6_670');
  145 |     const count = await pills.count();
  146 |     for(let i=0;i<count;i++){
  147 |       const pill = pills.nth(i);
  148 |       const text = (await pill.textContent())?.replace(/\s+/g, ' ').trim();
  149 |       console.log(`Pill[${i}] text = "${text}"`);
  150 |       const contentName = (
  151 |         await pill
  152 |         .locator("xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]")
  153 |         .textContent()
  154 |       )?.replace(/\s+/g, ' ').trim();
  155 |       if(!text.includes(skillNameValue)){
  156 |         throw new Error(`${contentName} does not have ${skillNameValue} as skill name`);
  157 |       }
  158 |       console.log(`${contentName} has skill category ${skillNameValue} as skill name`);
  159 |     }
  160 |   }
  161 | 
  162 |   async selectSkillCategory(skillCategory) {
  163 |     await this.skillCatgeoryDropdown.click();
  164 |     await this.page.getByText(skillCategory).click();
  165 |     await this.page.locator('[class*="_listPillSkillCategory_"]').first().waitFor({ state: 'visible' });
  166 |   }
  167 | 
  168 |   async selectSkillName(skillName) {
  169 |     await this.skillNameDropdown.fill(skillName);
  170 |     await this.page.locator('.ant-select-item-option').first().click();
  171 |     await this.page.locator('[class*="_listPillSkillName_"]').first().waitFor({ state: 'visible' });
  172 | 
  173 |   }
  174 | 
  175 |   async selectDueDates(dueDateStart, dueDateEnd) {
  176 |     await this.dueDateStart.fill(dueDateStart);
> 177 |     await this.dueDateEnd.fill(dueDateEnd).press('Enter');
      |                                            ^ TypeError: this.dueDateEnd.fill(...).press is not a function
  178 |     await this.page.locator('[class*="_listDueDate_"]').first().waitFor({ state: 'visible' });
  179 | 
  180 |   }
  181 | 
  182 | 
  183 | 
  184 |   async getContentNames(){
  185 |     const cards = this.page.locator('[class*="_listHeadingWrap_"]');
  186 |     await cards.first().waitFor({ state: 'visible' });
  187 |     const names = await cards.allTextContents();
  188 |     return names.map(n => n.trim()).filter(Boolean);
  189 |   }
  190 | 
  191 |   async getManagerAssignedCardNames() {
  192 |     await this.assignedByManagerSection.waitFor({ state: 'visible' });
  193 |     const cards = this.page.locator(
  194 |       `//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  195 |     );
  196 |     await cards.first().waitFor({ state: 'visible' });
  197 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  198 |   }
  199 | 
  200 |     async getAdminAssignedCardNames() {
  201 |     await this.assignedByAdminSection.waitFor({ state: 'visible' });
  202 |     const cards = this.page.locator(
  203 |       `//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  204 |     );
  205 |     await cards.first().waitFor({ state: 'visible' });
  206 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  207 |   }
  208 | 
  209 | 
  210 |   async getContentProgressButton(contentName) {
  211 |     const btn = this.page.locator(
  212 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  213 |     );
  214 |     await btn.scrollIntoViewIfNeeded();
  215 |     await btn.waitFor({ state: 'visible' });
  216 |     return btn;
  217 |   }
  218 | 
  219 |   async getLearningPathProgressPercentage()
  220 |   {
  221 |     const progressLocator = this.learningPathProgressLocator;
  222 |     await progressLocator.waitFor({ state: 'visible' });
  223 |     const currentProgress = (await progressLocator.textContent())?.trim() ?? '';
  224 |     return currentProgress;
  225 |   }
  226 | 
  227 | 
  228 |   async getListedIndividualContentNames(){
  229 |     const contentNames = await this.page.locator(`//div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`).allTextContents();
  230 |     return contentNames;
  231 |   }
  232 | 
  233 | 
  234 |   async markAllIndividualContentsToCompleteStatus(contentNames)
  235 |   {
  236 |     for (const contentName of contentNames) {
  237 |       const progressButton = this.page.locator(
  238 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  239 |     );
  240 | 
  241 |       if ((await progressButton.count()) === 0) {
  242 |         console.log(`"${contentName}" already complete (no button) — skipping`);
  243 |         continue;
  244 |       }
  245 | 
  246 |       await progressButton.scrollIntoViewIfNeeded();
  247 |       await progressButton.hover();
  248 | 
  249 |       const tooltip = this.page.getByRole('tooltip');
  250 |       await tooltip.waitFor({ state: 'visible' });
  251 |       const message = ((await tooltip.textContent())?.trim() ?? '').toLowerCase();
  252 | 
  253 |       if(message.includes('in progress')){
  254 |         await progressButton.click();
  255 |         await this.verifyInProgressToast()
  256 |         await this.inProgressToast.waitFor({ state: 'hidden' });
  257 | 
  258 |         await progressButton.hover();
  259 |         await this.verifyInProgressTooltip();
  260 |         await progressButton.click();
  261 |         await this.confirmCompletion(contentName);
  262 | 
  263 |       } else if (message.includes('mark complete')){
  264 |         await progressButton.click();
  265 |         await this.confirmCompletion(contentName);
  266 |       }
  267 |   }
  268 |     const finalProgressPercentage = await this.getLearningPathProgressPercentage();
  269 |     expect(finalProgressPercentage).toBe('100%');
  270 |   }
  271 | 
  272 | 
  273 |   async confirmCompletion(contentName) {
  274 |     await this.verifyConfirmCompletionDialog(contentName);
  275 |     await this.yesMarkCompleteButton.click();
  276 |     await this.verifyMarkCompleteToast();
  277 |     await this.markCompleteToast.waitFor({ state: 'hidden' });
```