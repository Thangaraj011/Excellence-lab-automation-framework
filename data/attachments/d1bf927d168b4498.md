# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-filters-validation.spec.js >> Home Page filters validation >> Skill Name filter validation
- Location: tests/specs/homepage/homepage-filters-validation.spec.js:23:10

# Error details

```
Error: Learning path new case does not have Software Development Lifecycle (SDLC) Management — Agile/Scrum Methodologies as skill name
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
            - generic [ref=e81]:
              - generic [ref=e82]:
                - generic [ref=e85]: Learning Progress
                - generic [ref=e87]:
                  - generic [ref=e89]:
                    - application [ref=e92]
                    - generic:
                      - generic: "5"
                      - generic: Total Assigned
                  - generic [ref=e105]:
                    - generic [ref=e108]: 1 Assigned
                    - generic [ref=e111]: 2 In Progress
                    - generic [ref=e114]: 2 Completed
              - generic [ref=e115]:
                - generic [ref=e117]:
                  - generic [ref=e118]: Learning Trend
                  - button "Expand chart" [ref=e120] [cursor=pointer]:
                    - img "fullscreen" [ref=e122]:
                      - img [ref=e123]
                - application [ref=e129]:
                  - generic [ref=e176]:
                    - generic [ref=e177]:
                      - generic [ref=e179]: Dec
                      - generic [ref=e181]: Jan
                      - generic [ref=e183]: Feb
                      - generic [ref=e185]: Mar
                      - generic [ref=e187]: Apr
                      - generic [ref=e189]: May
                      - generic [ref=e191]: Jun
                    - generic [ref=e192]:
                      - generic [ref=e194]: "0"
                      - generic [ref=e196]: "5"
                      - generic [ref=e198]: "10"
                      - generic [ref=e200]: "18"
            - generic [ref=e201]:
              - generic [ref=e202]:
                - textbox "Search" [ref=e203]
                - img "search" [ref=e205]:
                  - img [ref=e206]
              - generic [ref=e208]:
                - generic [ref=e209]:
                  - generic: Skill category
                  - combobox [ref=e210]
                - img "down" [ref=e212]:
                  - img [ref=e213]
              - generic: Software Development Lifecycle (SDLC) Management — Agile/Scrum Methodologies
              - generic [ref=e215]:
                - generic [ref=e216]:
                  - generic "Software Development Lifecycle (SDLC) Management — Agile/Scrum Methodologies" [ref=e217]
                  - combobox [active] [ref=e218]
                - img "down" [ref=e220]:
                  - img [ref=e221]
                - img "close-circle" [ref=e224] [cursor=pointer]:
                  - img [ref=e225]
              - generic [ref=e227]:
                - textbox "Due Date" [ref=e229]
                - generic "to" [ref=e231]:
                  - img "swap-right" [ref=e232]:
                    - img [ref=e233]
                - textbox "Due Date" [ref=e236]
                - generic:
                  - img "calendar":
                    - img
            - generic [ref=e239]:
              - strong [ref=e241]: Quick Filters
              - generic [ref=e242]:
                - generic [ref=e243]:
                  - generic [ref=e244]: Priority
                  - generic "Filter by priority" [ref=e245]:
                    - generic [ref=e246] [cursor=pointer]: Optional
                    - generic [ref=e247] [cursor=pointer]: Mandatory
                - generic [ref=e248]:
                  - generic [ref=e249]: Status
                  - generic "Filter by status" [ref=e250]:
                    - generic [ref=e251] [cursor=pointer]: Assigned
                    - generic [ref=e252] [cursor=pointer]: In Progress
            - generic [ref=e253]:
              - generic [ref=e255]:
                - generic [ref=e259]:
                  - generic [ref=e260]:
                    - generic [ref=e262]:
                      - img "crown" [ref=e263]:
                        - img [ref=e264]
                      - text: Assigned By Manager
                    - generic [ref=e267]: 2 Content
                  - generic [ref=e268]:
                    - generic "Sort courses" [ref=e270] [cursor=pointer]:
                      - generic [ref=e271]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e272]
                      - img "down" [ref=e274]:
                        - img [ref=e275]
                    - button "Collapse section" [expanded] [ref=e278] [cursor=pointer]:
                      - img "up" [ref=e280]:
                        - img [ref=e281]
                - generic [ref=e285]:
                  - generic [ref=e288] [cursor=pointer]:
                    - generic [ref=e289]:
                      - generic [ref=e291]:
                        - generic [ref=e292]: Due
                        - generic [ref=e293]: 28-05-2026
                      - generic [ref=e295]:
                        - status "Assigned learning path" [ref=e296]:
                          - img [ref=e297]:
                            - img [ref=e298]
                          - generic [ref=e300]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e302]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e303]:
                      - generic [ref=e305]: Learning path new case
                      - generic [ref=e307]:
                        - generic [ref=e308]:
                          - generic [ref=e310]: Software Development Lifecycle (SDLC) Management
                          - generic [ref=e312]: Agile/Scrum Methodologies
                        - separator [ref=e313]
                        - generic [ref=e314]:
                          - generic [ref=e315]: Mandatory
                          - generic [ref=e316]: Assigned by Manager
                  - generic [ref=e319] [cursor=pointer]:
                    - generic [ref=e320]:
                      - generic [ref=e322]:
                        - generic [ref=e323]: Due
                        - generic [ref=e324]: 28-05-2026
                      - generic [ref=e326]:
                        - status "Individual Content" [ref=e327]:
                          - img [ref=e328]:
                            - img [ref=e329]
                          - generic [ref=e331]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e333]:
                          - img "step-forward" [ref=e335]:
                            - img [ref=e336]
                    - generic [ref=e338]:
                      - generic [ref=e340]: Master Control Override Horizon Zero Dawn
                      - generic [ref=e342]:
                        - generic [ref=e343]:
                          - generic [ref=e345]: Crowd Entertainment, System Design & Architecture, Cloud Engineering Core, Software Development Lifecycle (SDLC) Management, Code Review & Quality Assurance, Programming Proficiency
                          - generic [ref=e347]: Vanishing Magic, Microservices Architecture Design, High-Level Design (HLD) & Low-Level Design (LLD), Cloud Architecture & Solution Design, Architecture Best Practices and Frameworks, Automation & IaC, Agile/Scrum Methodologies, Code Review Methodologies and Test-Driven Development (TDD) Practices, Software Development
                        - separator [ref=e348]
                        - generic [ref=e349]:
                          - generic [ref=e350]: Optional
                          - generic [ref=e351]: Assigned by Admin and Manager
              - generic [ref=e353]:
                - generic [ref=e357]:
                  - generic [ref=e358]:
                    - generic [ref=e360]:
                      - img "user" [ref=e361]:
                        - img [ref=e362]
                      - text: Assigned By Admin
                    - generic [ref=e365]: 1 Content
                  - generic [ref=e366]:
                    - generic "Sort courses" [ref=e368] [cursor=pointer]:
                      - generic [ref=e369]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e370]
                      - img "down" [ref=e372]:
                        - img [ref=e373]
                    - button "Collapse section" [expanded] [ref=e376] [cursor=pointer]:
                      - img "up" [ref=e378]:
                        - img [ref=e379]
                - generic [ref=e386] [cursor=pointer]:
                  - generic [ref=e387]:
                    - generic [ref=e389]:
                      - generic [ref=e390]: Due
                      - generic [ref=e391]: N/A
                    - generic [ref=e393]:
                      - status "Individual Content" [ref=e394]:
                        - img [ref=e395]:
                          - img [ref=e396]
                        - generic [ref=e398]: Individual Content
                      - button "In progress, mark complete" [ref=e400]:
                        - img [ref=e402]:
                          - img [ref=e403]
                  - generic [ref=e406]:
                    - generic [ref=e408]: Test sample 2026 001
                    - generic [ref=e410]:
                      - generic [ref=e411]:
                        - generic [ref=e413]: Software Development Lifecycle (SDLC) Management
                        - generic [ref=e415]: Agile/Scrum Methodologies
                      - separator [ref=e416]
                      - generic [ref=e418]: Assigned by Admin
  - generic [ref=e419]: "0"
```

# Test source

```ts
  56  |     await expect(this.assignedByAdminSection).toBeVisible();
  57  |   }
  58  | 
  59  |   async verifyAssignedTooltip()     { await expect(this.assignedTooltip).toBeVisible(); }
  60  |   async verifyInProgressTooltip()   { await expect(this.inProgressTooltip).toBeVisible(); }
  61  |   async verifyLearningPathTooltip() { await expect(this.learningPathTooltip).toBeVisible(); }
  62  | 
  63  |   async verifyInProgressToast() {
  64  |     await this.inProgressToast.waitFor({ state: 'visible', timeout: 8000 });
  65  |   }
  66  | 
  67  |   async verifyMarkCompleteToast() {
  68  |     await this.markCompleteToast.waitFor({ state: 'visible', timeout: 8000 });
  69  |   }
  70  | 
  71  |   async verifyConfirmCompletionDialog(contentName) {
  72  |     await expect(this.page.getByText('Confirm completion')).toBeVisible();
  73  |     await expect(
  74  |       this.page.getByLabel('Confirm completion').getByText(contentName)
  75  |     ).toBeVisible();
  76  |   }
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
> 156 |         throw new Error(`${contentName} does not have ${skillNameValue} as skill name`);
      |               ^ Error: Learning path new case does not have Software Development Lifecycle (SDLC) Management — Agile/Scrum Methodologies as skill name
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
  175 |   async getContentNames(){
  176 |     const cards = this.page.locator('[class*="_listHeadingWrap_"]');
  177 |     await cards.first().waitFor({ state: 'visible' });
  178 |     const names = await cards.allTextContents();
  179 |     return names.map(n => n.trim()).filter(Boolean);
  180 |   }
  181 | 
  182 |   async getManagerAssignedCardNames() {
  183 |     await this.assignedByManagerSection.waitFor({ state: 'visible' });
  184 |     const cards = this.page.locator(
  185 |       `//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  186 |     );
  187 |     await cards.first().waitFor({ state: 'visible' });
  188 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  189 |   }
  190 | 
  191 |     async getAdminAssignedCardNames() {
  192 |     await this.assignedByAdminSection.waitFor({ state: 'visible' });
  193 |     const cards = this.page.locator(
  194 |       `//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  195 |     );
  196 |     await cards.first().waitFor({ state: 'visible' });
  197 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  198 |   }
  199 | 
  200 | 
  201 |   async getContentProgressButton(contentName) {
  202 |     const btn = this.page.locator(
  203 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  204 |     );
  205 |     await btn.scrollIntoViewIfNeeded();
  206 |     await btn.waitFor({ state: 'visible' });
  207 |     return btn;
  208 |   }
  209 | 
  210 |   async getLearningPathProgressPercentage()
  211 |   {
  212 |     const progressLocator = this.learningPathProgressLocator;
  213 |     await progressLocator.waitFor({ state: 'visible' });
  214 |     const currentProgress = (await progressLocator.textContent())?.trim() ?? '';
  215 |     return currentProgress;
  216 |   }
  217 | 
  218 | 
  219 |   async getListedIndividualContentNames(){
  220 |     const contentNames = await this.page.locator(`//div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`).allTextContents();
  221 |     return contentNames;
  222 |   }
  223 | 
  224 | 
  225 |   async markAllIndividualContentsToCompleteStatus(contentNames)
  226 |   {
  227 |     for (const contentName of contentNames) {
  228 |       const progressButton = this.page.locator(
  229 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  230 |     );
  231 | 
  232 |       if ((await progressButton.count()) === 0) {
  233 |         console.log(`"${contentName}" already complete (no button) — skipping`);
  234 |         continue;
  235 |       }
  236 | 
  237 |       await progressButton.scrollIntoViewIfNeeded();
  238 |       await progressButton.hover();
  239 | 
  240 |       const tooltip = this.page.getByRole('tooltip');
  241 |       await tooltip.waitFor({ state: 'visible' });
  242 |       const message = ((await tooltip.textContent())?.trim() ?? '').toLowerCase();
  243 | 
  244 |       if(message.includes('in progress')){
  245 |         await progressButton.click();
  246 |         await this.verifyInProgressToast()
  247 |         await this.inProgressToast.waitFor({ state: 'hidden' });
  248 | 
  249 |         await progressButton.hover();
  250 |         await this.verifyInProgressTooltip();
  251 |         await progressButton.click();
  252 |         await this.confirmCompletion(contentName);
  253 | 
  254 |       } else if (message.includes('mark complete')){
  255 |         await progressButton.click();
  256 |         await this.confirmCompletion(contentName);
```