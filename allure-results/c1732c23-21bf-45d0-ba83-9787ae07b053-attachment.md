# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage_LP/homepage-learning-path.spec.js >> Homepage Learning path status update validation >> Learning path specific individual content status update to Inprogress validation
- Location: tests/specs/homepage_LP/homepage-learning-path.spec.js:5:3

# Error details

```
ReferenceError: page is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
      - generic [ref=e68]:
        - generic [ref=e69]:
          - button "Back to homepage" [ref=e70] [cursor=pointer]:
            - img "arrow-left" [ref=e72]:
              - img [ref=e73]
          - heading "Learning path new case" [level=4] [ref=e75]
        - generic [ref=e77]:
          - generic [ref=e78]: Assigned
          - generic [ref=e79]: Mandatory
        - generic [ref=e80]:
          - progressbar "Learning path completion 0 percent" [ref=e82]
          - strong [ref=e86]: 0%
        - separator [ref=e87]
        - heading "Learning Path Content" [level=5] [ref=e88]
        - generic [ref=e91]:
          - strong [ref=e93]: Quick Filters
          - generic [ref=e94]:
            - generic [ref=e95]:
              - generic [ref=e96]: Priority
              - generic "Filter by priority" [ref=e97]:
                - generic [ref=e98] [cursor=pointer]: Optional
                - generic [ref=e99] [cursor=pointer]: Mandatory
            - generic [ref=e100]:
              - generic [ref=e101]: Status
              - generic "Filter by status" [ref=e102]:
                - generic [ref=e103] [cursor=pointer]: Assigned
                - generic [ref=e104] [cursor=pointer]: In Progress
                - generic [ref=e105] [cursor=pointer]: Completed
        - generic [ref=e106]:
          - generic [ref=e109] [cursor=pointer]:
            - generic [ref=e110]:
              - generic [ref=e112]:
                - generic [ref=e113]: Due
                - generic [ref=e114]: 22-05-2026
              - generic [ref=e116]:
                - status "Individual Content" [ref=e117]:
                  - img [ref=e118]:
                    - img [ref=e119]
                  - generic [ref=e121]: Individual Content
                - button "Assigned, mark as in progress" [ref=e123]:
                  - img "step-forward" [ref=e125]:
                    - img [ref=e126]
            - generic [ref=e128]:
              - generic [ref=e130]: Test sample 2026 001
              - generic [ref=e132]:
                - generic [ref=e133]:
                  - generic [ref=e135]: Software Development Lifecycle (SDLC) Management
                  - generic [ref=e137]: Agile/Scrum Methodologies
                - separator [ref=e138]
                - generic [ref=e139]:
                  - generic [ref=e140]: Mandatory
                  - generic [ref=e141]: Assigned by Manager
          - generic [ref=e144] [cursor=pointer]:
            - generic [ref=e145]:
              - generic [ref=e147]:
                - generic [ref=e148]: Due
                - generic [ref=e149]: 27-05-2026
              - generic [ref=e151]:
                - status "Individual Content" [ref=e152]:
                  - img [ref=e153]:
                    - img [ref=e154]
                  - generic [ref=e156]: Individual Content
                - button "Assigned, mark as in progress" [ref=e158]:
                  - img "step-forward" [ref=e160]:
                    - img [ref=e161]
            - generic [ref=e163]:
              - generic [ref=e165]: Test sample 2026 002
              - generic [ref=e167]:
                - generic [ref=e168]:
                  - generic [ref=e170]: Software Development Lifecycle (SDLC) Management
                  - generic [ref=e172]: Agile/Scrum Methodologies
                - separator [ref=e173]
                - generic [ref=e174]:
                  - generic [ref=e175]: Mandatory
                  - generic [ref=e176]: Assigned by Manager
  - generic [ref=e177]: "0"
```

# Test source

```ts
  1   | import {expect} from '@playwright/test';
  2   | 
  3   | export class HomePage {
  4   |   constructor(page) {
  5   |     this.page = page;
  6   | 
  7   |     this.homepageTitle = page.getByRole('heading', { name: 'Homepage' });
  8   |     this.assignedCoursesTab =  page.getByRole('tab', { name: 'Assigned Courses' });
  9   |     this.aiRecommendationsTab =  page.getByRole('tab', { name: 'AI Recommendations' });
  10  | 
  11  |     this.searchTextbox = page.getByPlaceholder('Search');
  12  |     this.skillCatgeoryDropdown = page.getByRole('combobox', { name: 'Skill category' });
  13  |     this.skillNameDropdown = page.getByRole('combobox', { name: 'Skill Name' });
  14  |     this.dueDateStart = page.getByPlaceholder('Due Date').and(page.locator('[date-range="start"]'));
  15  |     this.dueDateEnd = page.getByPlaceholder('Due Date').and(page.locator('[date-range="end"]'));
  16  | 
  17  | 
  18  |     this.priorityOptionalButton = page.getByText('Optional', { exact: true });
  19  |     this.priorityMandatoryButton = page.getByText('Mandatory', { exact: true });
  20  |     this.statusAssignedButton = page.getByText('Assigned', { exact: true });
  21  |     this.statusInProgressButton = page.getByText('In Progress', { exact: true });
  22  | 
  23  | 
  24  |     this.assignedByManagerSection = page.getByText('Assigned By Manager', { exact: true });
  25  |     this.assignedByAdminSection = page.getByText('Assigned By Admin', { exact: true });
  26  | 
  27  | 
  28  |     this.managerAssignedContentCards = page.locator(`//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']`);
  29  |     this.adminAssignedContentCards = page.locator(`//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']`);
  30  |     this.contentCard = page.locator('._listColumn_p5zy6_346 ._listTop_p5zy6_354 ._listHeadingWrap_p5zy6_516');
  31  |     
  32  |     this.assignedTooltip = page.getByRole('tooltip', { name: 'Mark as in progress' });
  33  |     this.inProgressTooltip = page.getByRole('tooltip', { name: 'Mark complete' });
  34  |     this.learningPathTooltip = page.getByRole('tooltip', { name: 'Click the card to open the learning path' });
  35  |     
  36  |     this.inProgressToast = page.getByText('Marked as in progress');
  37  |     this.markCompleteToast = page.locator('div').filter({ hasText: 'Marked as completed' }).first();
  38  |     
  39  |     this.confirmCompleteCancelButton = page.getByRole('button', { name: 'Cancel'});
  40  |     this.yesMarkCompleteButton = page.getByRole('button', { name: 'Yes, mark complete'});
  41  | 
  42  |   }
  43  | 
  44  |   async verifyHomepageLoaded() {
  45  |       await this.homepageTitle.waitFor({ state: 'visible' });
  46  |       await expect(this.assignedCoursesTab).toBeVisible();
  47  |       await expect(this.aiRecommendationsTab).toBeVisible();
  48  |   }
  49  | 
  50  |   async verifyManagerAndAdminSections() {
  51  |     await expect(this.assignedByManagerSection).toBeVisible();
  52  |     await expect(this.assignedByAdminSection).toBeVisible();
  53  |   }
  54  | 
  55  |   async verifyAssignedTooltip()     { await expect(this.assignedTooltip).toBeVisible(); }
  56  |   async verifyInProgressTooltip()   { await expect(this.inProgressTooltip).toBeVisible(); }
  57  |   async verifyLearningPathTooltip() { await expect(this.learningPathTooltip).toBeVisible(); }
  58  | 
  59  |   async verifyInProgressToast() {
  60  |     await this.inProgressToast.waitFor({ state: 'visible', timeout: 8000 });
  61  |   }
  62  | 
  63  |   async verifyMarkCompleteToast() {
  64  |     await this.markCompleteToast.waitFor({ state: 'visible', timeout: 8000 });
  65  |   }
  66  | 
  67  |   async verifyConfirmCompletionDialog(contentName) {
  68  |     await expect(this.page.getByText('Confirm completion')).toBeVisible();
  69  |     await expect(
  70  |       this.page.getByLabel('Confirm completion').getByText(contentName)
  71  |     ).toBeVisible();
  72  |   }
  73  | 
  74  |   async verifyContentVisible(contentName) {
  75  |     const content = this.page.getByText(contentName, { exact: true });
  76  |     await content.scrollIntoViewIfNeeded();
  77  |     await expect(content).toBeVisible();
  78  |   }
  79  | 
  80  |   async openIndividualContent(contentName){
  81  |     await this.page.getByText(`${contentName}`).click();
  82  | 
  83  |   }
  84  | 
  85  |   async openLearningPath(learningPathName){
  86  |     const content = this.page.getByText(learningPathName, { exact: true });
  87  |     await content.scrollIntoViewIfNeeded();
  88  |     await expect(content).toBeVisible();
  89  |     await this.page.getByText(`${learningPathName}`).click();
  90  |   }
  91  | 
  92  |   async verifyLearningPathDetailsScreen(learningPathName)
  93  |   {
  94  |     await expect(this.page.getByRole('heading', { name: `${learningPathName}` })).toBeVisible();
  95  |     await expect(this.page.locator('.ant-progress-rail')).toBeVisible();
  96  |     const currentProgress = await this.page.locator('._pathProgressPercent_hvo3t_91').textContent();
  97  |     return currentProgress;
  98  |   }
  99  | 
  100 |   async verifyFiltersOnLearningPathDetailsScreen(){
> 101 |     await expect(page.getByRole('heading', { name: 'Learning Path Content' })).toBeVisible();
      |                  ^ ReferenceError: page is not defined
  102 |     await expect(page.getByText('Quick Filters')).toBeVisible();
  103 |     await expect(page.getByText('Priority')).toBeVisible();
  104 |     await expect(page.locator('span').filter({ hasText: 'Optional' }).first()).toBeVisible();
  105 |     await expect(page.getByLabel('Filter by priority').getByText('Mandatory')).toBeVisible();
  106 |     await expect(page.getByText('Status')).toBeVisible();
  107 |     await expect(page.locator('span').filter({ hasText: 'Assigned' }).nth(1)).toBeVisible();
  108 |     await expect(page.locator('span').filter({ hasText: 'In Progress' }).first()).toBeVisible();
  109 |     await expect(page.locator('span').filter({ hasText: 'Completed' }).first()).toBeVisible();
  110 |   }
  111 | 
  112 |   async getListItems(){
  113 |     const items = await this.page.getByRole('listitem').locator('._listHeading_p5zy6_516').allTextContents();
  114 |     console.log(items);
  115 |   }
  116 | 
  117 | 
  118 |   async searchCourse(courseName) {
  119 |     await this.searchTextbox.waitFor({ state: 'visible' });
  120 |     await this.searchTextbox.fill(courseName);
  121 |   }
  122 | 
  123 |   async selectSkillCategory(category) {
  124 |     await this.skillCatgeoryDropdown.waitFor({ state: 'visible' });
  125 |     await this.skillCatgeoryDropdown.selectOption({ label: category });
  126 |   }
  127 | 
  128 |   async selectSkillName(skillName) {
  129 |     await this.skillNameDropdown.waitFor({ state: 'visible' });
  130 |     await this.skillNameDropdown.selectOption({ label: skillName });
  131 |   }
  132 | 
  133 |   async getContentNames(){
  134 |     const cards = this.page.locator('[class*="_listHeadingWrap_"]');
  135 |     await cards.first().waitFor({ state: 'visible' });
  136 |     const names = await cards.allTextContents();
  137 |     return names.map(n => n.trim()).filter(Boolean);
  138 |   }
  139 | 
  140 |   async getManagerAssignedCardNames() {
  141 |     await this.assignedByManagerSection.waitFor({ state: 'visible' });
  142 |     const cards = this.page.locator(
  143 |       `//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  144 |     );
  145 |     await cards.first().waitFor({ state: 'visible' });
  146 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  147 |   }
  148 | 
  149 |     async getAdminAssignedCardNames() {
  150 |     await this.assignedByAdminSection.waitFor({ state: 'visible' });
  151 |     const cards = this.page.locator(
  152 |       `//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  153 |     );
  154 |     await cards.first().waitFor({ state: 'visible' });
  155 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  156 |   }
  157 | 
  158 | 
  159 |   async getContentProgressButton(contentName) {
  160 |     const btn = this.page.locator(
  161 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  162 |     );
  163 |     await btn.scrollIntoViewIfNeeded();
  164 |     await btn.waitFor({ state: 'visible' });
  165 |     return btn;
  166 |   }
  167 | 
  168 | 
  169 | }
```