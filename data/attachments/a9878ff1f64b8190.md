# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-filters-validation.spec.js >> Home Page filters validation >> Skill Name filter validation
- Location: tests/specs/homepage/homepage-filters-validation.spec.js:23:10

# Error details

```
Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
Call log:
  - waiting for locator('.ant-select-content').filter({ hasText: 'Skill Name' })
    - locator resolved to <div class="ant-select-content">…</div>
    - fill("Software Development Lifecycle (SDLC) Management — Agile/Scrum Methodologies")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

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
              - textbox "Due Date" [ref=e111]
              - generic "to" [ref=e113]:
                - img "swap-right" [ref=e114]:
                  - img [ref=e115]
              - textbox "Due Date" [ref=e118]
              - generic:
                - img "calendar":
                  - img
          - generic [ref=e121]:
            - strong [ref=e123]: Quick Filters
            - generic [ref=e124]:
              - generic [ref=e125]:
                - generic [ref=e126]: Priority
                - generic "Filter by priority" [ref=e127]:
                  - generic [ref=e128] [cursor=pointer]: Optional
                  - generic [ref=e129] [cursor=pointer]: Mandatory
              - generic [ref=e130]:
                - generic [ref=e131]: Status
                - generic "Filter by status" [ref=e132]:
                  - generic [ref=e133] [cursor=pointer]: Assigned
                  - generic [ref=e134] [cursor=pointer]: In Progress
          - generic [ref=e135]:
            - generic [ref=e141]:
              - generic [ref=e144]:
                - img "crown" [ref=e145]:
                  - img [ref=e146]
                - text: Assigned By Manager
              - generic [ref=e148]:
                - generic "Sort courses" [ref=e150] [cursor=pointer]:
                  - generic [ref=e151]:
                    - generic: Sort by
                    - combobox "Sort courses" [ref=e152]
                  - img "down" [ref=e154]:
                    - img [ref=e155]
                - button "Collapse section" [expanded] [ref=e158] [cursor=pointer]:
                  - img "up" [ref=e160]:
                    - img [ref=e161]
            - generic [ref=e198]:
              - generic [ref=e201]:
                - img "user" [ref=e202]:
                  - img [ref=e203]
                - text: Assigned By Admin
              - generic [ref=e205]:
                - generic "Sort courses" [ref=e207] [cursor=pointer]:
                  - generic [ref=e208]:
                    - generic: Sort by
                    - combobox "Sort courses" [ref=e209]
                  - img "down" [ref=e211]:
                    - img [ref=e212]
                - button "Collapse section" [expanded] [ref=e215] [cursor=pointer]:
                  - img "up" [ref=e217]:
                    - img [ref=e218]
```

# Test source

```ts
  68  |   }
  69  | 
  70  |   async verifyConfirmCompletionDialog(contentName) {
  71  |     await expect(this.page.getByText('Confirm completion')).toBeVisible();
  72  |     await expect(
  73  |       this.page.getByLabel('Confirm completion').getByText(contentName)
  74  |     ).toBeVisible();
  75  |   }
  76  | 
  77  |   async verifyContentVisible(contentName) {
  78  |     const content = this.page.getByText(contentName, { exact: true });
  79  |     await content.scrollIntoViewIfNeeded();
  80  |     await expect(content).toBeVisible();
  81  |   }
  82  | 
  83  | 
  84  |   async verifyLearningPathDetailsScreen(learningPathName)
  85  |   {
  86  |     await expect(this.page.getByRole('heading', { name: `${learningPathName}` })).toBeVisible();
  87  |     await expect(this.page.locator('.ant-progress-rail')).toBeVisible();
  88  |   }
  89  | 
  90  |   async verifyFiltersOnLearningPathDetailsScreen(){
  91  |     await expect(this.page.getByRole('heading', { name: 'Learning Path Content' })).toBeVisible();
  92  |     await expect(this.page.getByText('Quick Filters')).toBeVisible();
  93  |     await expect(this.page.getByText('Priority')).toBeVisible();
  94  |     await expect(this.page.locator('span').filter({ hasText: 'Optional' }).first()).toBeVisible();
  95  |     await expect(this.page.getByLabel('Filter by priority').getByText('Mandatory')).toBeVisible();
  96  |     await expect(this.page.getByText('Status')).toBeVisible();
  97  |     await expect(this.page.locator('span').filter({ hasText: 'Assigned' }).nth(1)).toBeVisible();
  98  |     await expect(this.page.locator('span').filter({ hasText: 'In Progress' }).first()).toBeVisible();
  99  |     await expect(this.page.locator('span').filter({ hasText: 'Completed' }).first()).toBeVisible();
  100 |   }
  101 | 
  102 |   async openIndividualContent(contentName){
  103 |     await this.page.getByText(contentName).click();
  104 | 
  105 |   }
  106 | 
  107 |   async openLearningPath(learningPathName){
  108 |     const content = this.page.getByText(learningPathName, { exact: true });
  109 |     await content.scrollIntoViewIfNeeded();
  110 |     await expect(content).toBeVisible();
  111 |     await this.page.getByText(learningPathName).click();
  112 |   }
  113 | 
  114 | 
  115 | 
  116 |   async verifySearchContentVisible(courseName, contentName) {
  117 |     await this.searchTextbox.waitFor({ state: 'visible' });
  118 |     await this.searchTextbox.fill(courseName);
  119 |     await this.page.waitForLoadState('domcontentloaded');
  120 |     await this.verifyContentVisible(contentName);
  121 |   }
  122 | 
  123 |   async verifyOnlySelectedSkillCategoryContentsVisible(skillCategoryValue) {
  124 |     const pills =  this.page.locator('._listPillSkillCategory_p5zy6_654');
  125 |     const count = await pills.count();
  126 |     for(let i=0;i<count;i++){
  127 |       const pill = pills.nth(i);
  128 |       const text = (await pill.textContent())?.replace(/\s+/g, ' ').trim();
  129 |       console.log(`Pill[${i}] text = "${text}"`);
  130 |       const contentName = (
  131 |         await pill
  132 |         .locator("xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]")
  133 |         .textContent()
  134 |       )?.replace(/\s+/g, ' ').trim();
  135 |       if(!text.includes(skillCategoryValue)){
  136 |         throw new Error(`${contentName} does not have ${skillCategoryValue} as skill category`);
  137 |       }
  138 |       console.log(`${contentName} has skill category ${skillCategoryValue} as skill category`);
  139 |     }
  140 |   }
  141 | 
  142 |   async verifyOnlySelectedSkillNameContentsVisible(skillNameValue) {
  143 |     const pills =  this.page.locator('._listPillSkillName_p5zy6_670');
  144 |     const count = await pills.count();
  145 |     for(let i=0;i<count;i++){
  146 |       const pill = pills.nth(i);
  147 |       const text = (await pill.textContent())?.replace(/\s+/g, ' ').trim();
  148 |       console.log(`Pill[${i}] text = "${text}"`);
  149 |       const contentName = (
  150 |         await pill
  151 |         .locator("xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]")
  152 |         .textContent()
  153 |       )?.replace(/\s+/g, ' ').trim();
  154 |       if(!text.includes(skillNameValue)){
  155 |         throw new Error(`${contentName} does not have ${skillNameValue} as skill name`);
  156 |       }
  157 |       console.log(`${contentName} has skill category ${skillNameValue} as skill name`);
  158 |     }
  159 |   }
  160 | 
  161 |   async selectSkillCategory(skillCategory) {
  162 |     await this.skillCatgeoryDropdown.click();
  163 |     await this.page.getByText(skillCategory).click();
  164 |     await this.page.locator('[class*="_listPillSkillCategory_"]').first().waitFor({ state: 'visible' });
  165 |   }
  166 | 
  167 |   async selectSkillName(skillName) {
> 168 |     await this.skillNameDropdown.fill(skillName);
      |                                  ^ Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
  169 |     await this.page.locator('.ant-select-item-option').first().click();
  170 |     await this.page.locator('[class*="_listPillSkillName_"]').first().waitFor({ state: 'visible' });
  171 | 
  172 |   }
  173 | 
  174 |   async getContentNames(){
  175 |     const cards = this.page.locator('[class*="_listHeadingWrap_"]');
  176 |     await cards.first().waitFor({ state: 'visible' });
  177 |     const names = await cards.allTextContents();
  178 |     return names.map(n => n.trim()).filter(Boolean);
  179 |   }
  180 | 
  181 |   async getManagerAssignedCardNames() {
  182 |     await this.assignedByManagerSection.waitFor({ state: 'visible' });
  183 |     const cards = this.page.locator(
  184 |       `//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  185 |     );
  186 |     await cards.first().waitFor({ state: 'visible' });
  187 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  188 |   }
  189 | 
  190 |     async getAdminAssignedCardNames() {
  191 |     await this.assignedByAdminSection.waitFor({ state: 'visible' });
  192 |     const cards = this.page.locator(
  193 |       `//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  194 |     );
  195 |     await cards.first().waitFor({ state: 'visible' });
  196 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  197 |   }
  198 | 
  199 | 
  200 |   async getContentProgressButton(contentName) {
  201 |     const btn = this.page.locator(
  202 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  203 |     );
  204 |     await btn.scrollIntoViewIfNeeded();
  205 |     await btn.waitFor({ state: 'visible' });
  206 |     return btn;
  207 |   }
  208 | 
  209 |   async getLearningPathProgressPercentage()
  210 |   {
  211 |     const progressLocator = this.learningPathProgressLocator;
  212 |     await progressLocator.waitFor({ state: 'visible' });
  213 |     const currentProgress = (await progressLocator.textContent())?.trim() ?? '';
  214 |     return currentProgress;
  215 |   }
  216 | 
  217 | 
  218 |   async getListedIndividualContentNames(){
  219 |     const contentNames = await this.page.locator(`//div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`).allTextContents();
  220 |     return contentNames;
  221 |   }
  222 | 
  223 | 
  224 |   async markAllIndividualContentsToCompleteStatus(contentNames)
  225 |   {
  226 |     for (const contentName of contentNames) {
  227 |       const progressButton = this.page.locator(
  228 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  229 |     );
  230 | 
  231 |       if ((await progressButton.count()) === 0) {
  232 |         console.log(`"${contentName}" already complete (no button) — skipping`);
  233 |         continue;
  234 |       }
  235 | 
  236 |       await progressButton.scrollIntoViewIfNeeded();
  237 |       await progressButton.hover();
  238 | 
  239 |       const tooltip = this.page.getByRole('tooltip');
  240 |       await tooltip.waitFor({ state: 'visible' });
  241 |       const message = ((await tooltip.textContent())?.trim() ?? '').toLowerCase();
  242 | 
  243 |       if(message.includes('in progress')){
  244 |         await progressButton.click();
  245 |         await this.verifyInProgressToast()
  246 |         await this.inProgressToast.waitFor({ state: 'hidden' });
  247 | 
  248 |         await progressButton.hover();
  249 |         await this.verifyInProgressTooltip();
  250 |         await progressButton.click();
  251 |         await this.confirmCompletion(contentName);
  252 | 
  253 |       } else if (message.includes('mark complete')){
  254 |         await progressButton.click();
  255 |         await this.confirmCompletion(contentName);
  256 |       }
  257 |   }
  258 |     const finalProgressPercentage = await this.getLearningPathProgressPercentage();
  259 |     expect(finalProgressPercentage).toBe('100%');
  260 |   }
  261 | 
  262 | 
  263 |   async confirmCompletion(contentName) {
  264 |     await this.verifyConfirmCompletionDialog(contentName);
  265 |     await this.yesMarkCompleteButton.click();
  266 |     await this.verifyMarkCompleteToast();
  267 |     await this.markCompleteToast.waitFor({ state: 'hidden' });
  268 | }
```