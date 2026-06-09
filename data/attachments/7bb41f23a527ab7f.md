# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-filters-validation.spec.js >> Home Page filters validation >> Skill category filter validation
- Location: tests/specs/homepage/homepage-filters-validation.spec.js:17:10

# Error details

```
ReferenceError: page is not defined
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
                  - combobox [expanded] [active] [ref=e97]:
                    - listbox:
                      - option "Accounts Payables": 73390af1-e994-4a2a-b2a0-ccee405274dd
                      - option "Administration": ea91ca2a-23c5-46ca-9524-cb81ac11bf4b
                - img "search" [ref=e99]:
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
  - generic [ref=e255]:
    - generic "Accounts Payables" [ref=e256] [cursor=pointer]:
      - generic [ref=e257]: Accounts Payables
    - generic "Administration" [ref=e258] [cursor=pointer]:
      - generic [ref=e259]: Administration
    - generic "AI Fluency" [ref=e260] [cursor=pointer]:
      - generic [ref=e261]: AI Fluency
    - generic "Audit, Risk & Assurance" [ref=e262] [cursor=pointer]:
      - generic [ref=e263]: Audit, Risk & Assurance
    - generic "Cloud Engineering Core" [ref=e264] [cursor=pointer]:
      - generic [ref=e265]: Cloud Engineering Core
    - generic "Cloud Platforms" [ref=e266] [cursor=pointer]:
      - generic [ref=e267]: Cloud Platforms
    - generic "Cloud Resilience & Security" [ref=e268] [cursor=pointer]:
      - generic [ref=e269]: Cloud Resilience & Security
    - generic "Code Review & Quality Assurance" [ref=e270] [cursor=pointer]:
      - generic [ref=e271]: Code Review & Quality Assurance
    - generic "Commercial Governance and FinOps" [ref=e272] [cursor=pointer]:
      - generic [ref=e273]: Commercial Governance and FinOps
    - generic "Consulting & Business Development Initiatives" [ref=e274] [cursor=pointer]:
      - generic [ref=e275]: Consulting & Business Development Initiatives
```

# Test source

```ts
  44  | 
  45  |   }
  46  | 
  47  |   async verifyHomepageLoaded() {
  48  |       await this.homepageTitle.waitFor({ state: 'visible' });
  49  |       await expect(this.assignedCoursesTab).toBeVisible();
  50  |       await expect(this.aiRecommendationsTab).toBeVisible();
  51  |   }
  52  | 
  53  |   async verifyManagerAndAdminSections() {
  54  |     await expect(this.assignedByManagerSection).toBeVisible();
  55  |     await expect(this.assignedByAdminSection).toBeVisible();
  56  |   }
  57  | 
  58  |   async verifyAssignedTooltip()     { await expect(this.assignedTooltip).toBeVisible(); }
  59  |   async verifyInProgressTooltip()   { await expect(this.inProgressTooltip).toBeVisible(); }
  60  |   async verifyLearningPathTooltip() { await expect(this.learningPathTooltip).toBeVisible(); }
  61  | 
  62  |   async verifyInProgressToast() {
  63  |     await this.inProgressToast.waitFor({ state: 'visible', timeout: 8000 });
  64  |   }
  65  | 
  66  |   async verifyMarkCompleteToast() {
  67  |     await this.markCompleteToast.waitFor({ state: 'visible', timeout: 8000 });
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
  123 |   async verifyOnlySelectedSkillCategoryContentsVisible(skillcategoryValue) {
  124 |     const pills =  this.page.locator('._listPillSkillCategory_p5zy6_654');
  125 |     const count = await pills.count();
  126 |     for(let i=0;i<count;i++){
  127 |       const pill = pills.nth(i);
  128 |       const text = (await pill.textContent())?.trim();
  129 |       const contentName = (
  130 |         await pill
  131 |         .locator("xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516']")
  132 |         .textContent()
  133 |       )?.trim();
  134 |       if(text !== skillCategoryValue){
  135 |         throw new Error(`${contentName} does not have ${skillCategoryValue}`);
  136 |       }
  137 |       console.log(`${contentName} has skill category ${skillCategoryValue}`);
  138 |     }
  139 |   }
  140 | 
  141 |   async selectSkillCategory(skillCategory) {
  142 |     await this.skillCatgeoryDropdown.waitFor({ state: 'visible' });
  143 |     await this.skillCatgeoryDropdown.click();
> 144 |     await page.getByRole('option', { name: skillCategory }).click();
      |     ^ ReferenceError: page is not defined
  145 |     await this.page.waitForLoadState('domcontentloaded');
  146 |   }
  147 | 
  148 |   async selectSkillName(skillName) {
  149 |     await this.skillNameDropdown.waitFor({ state: 'visible' });
  150 |     await this.skillNameDropdown.click();
  151 |     await page.getByRole('option', { name: skillName }).click();
  152 |   }
  153 | 
  154 |   async getContentNames(){
  155 |     const cards = this.page.locator('[class*="_listHeadingWrap_"]');
  156 |     await cards.first().waitFor({ state: 'visible' });
  157 |     const names = await cards.allTextContents();
  158 |     return names.map(n => n.trim()).filter(Boolean);
  159 |   }
  160 | 
  161 |   async getManagerAssignedCardNames() {
  162 |     await this.assignedByManagerSection.waitFor({ state: 'visible' });
  163 |     const cards = this.page.locator(
  164 |       `//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  165 |     );
  166 |     await cards.first().waitFor({ state: 'visible' });
  167 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  168 |   }
  169 | 
  170 |     async getAdminAssignedCardNames() {
  171 |     await this.assignedByAdminSection.waitFor({ state: 'visible' });
  172 |     const cards = this.page.locator(
  173 |       `//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  174 |     );
  175 |     await cards.first().waitFor({ state: 'visible' });
  176 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  177 |   }
  178 | 
  179 | 
  180 |   async getContentProgressButton(contentName) {
  181 |     const btn = this.page.locator(
  182 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  183 |     );
  184 |     await btn.scrollIntoViewIfNeeded();
  185 |     await btn.waitFor({ state: 'visible' });
  186 |     return btn;
  187 |   }
  188 | 
  189 |   async getLearningPathProgressPercentage()
  190 |   {
  191 |     const progressLocator = this.learningPathProgressLocator;
  192 |     await progressLocator.waitFor({ state: 'visible' });
  193 |     const currentProgress = (await progressLocator.textContent())?.trim() ?? '';
  194 |     return currentProgress;
  195 |   }
  196 | 
  197 | 
  198 |   async getListedIndividualContentNames(){
  199 |     const contentNames = await this.page.locator(`//div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`).allTextContents();
  200 |     return contentNames;
  201 |   }
  202 | 
  203 | 
  204 |   async markAllIndividualContentsToCompleteStatus(contentNames)
  205 |   {
  206 |     for (const contentName of contentNames) {
  207 |       const progressButton = this.page.locator(
  208 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  209 |     );
  210 | 
  211 |       if ((await progressButton.count()) === 0) {
  212 |         console.log(`"${contentName}" already complete (no button) — skipping`);
  213 |         continue;
  214 |       }
  215 | 
  216 |       await progressButton.scrollIntoViewIfNeeded();
  217 |       await progressButton.hover();
  218 | 
  219 |       const tooltip = this.page.getByRole('tooltip');
  220 |       await tooltip.waitFor({ state: 'visible' });
  221 |       const message = ((await tooltip.textContent())?.trim() ?? '').toLowerCase();
  222 | 
  223 |       if(message.includes('in progress')){
  224 |         await progressButton.click();
  225 |         await this.verifyInProgressToast()
  226 |         await this.inProgressToast.waitFor({ state: 'hidden' });
  227 | 
  228 |         await progressButton.hover();
  229 |         await this.verifyInProgressTooltip();
  230 |         await progressButton.click();
  231 |         await this.confirmCompletion(contentName);
  232 | 
  233 |       } else if (message.includes('mark complete')){
  234 |         await progressButton.click();
  235 |         await this.confirmCompletion(contentName);
  236 |       }
  237 |   }
  238 |     const finalProgressPercentage = await this.getLearningPathProgressPercentage();
  239 |     expect(finalProgressPercentage).toBe('100%');
  240 |   }
  241 | 
  242 | 
  243 |   async confirmCompletion(contentName) {
  244 |     await this.verifyConfirmCompletionDialog(contentName);
```