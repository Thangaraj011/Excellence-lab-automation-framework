# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage-Individual-content-with-fixtures.spec.js >> Homepage Individual Content status update validation with custom Fixtures >> Individual Content update status to Inprogress with custom fixtures
- Location: tests/specs/homepage-Individual-content-with-fixtures.spec.js:12:3

# Error details

```
Error: toBeVisible can be only used with Locator object, was called with undefined
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
> 46  |       await expect(this.assignedCoursesTitle).toBeVisible();
      |                                               ^ Error: toBeVisible can be only used with Locator object, was called with undefined
  47  |       await expect(this.aiReccomendationsTitle).toBeVisible();
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
  80  | 
  81  |   async searchCourse(courseName) {
  82  |     await this.searchTextbox.waitFor({ state: 'visible' });
  83  |     await this.searchTextbox.fill(courseName);
  84  |   }
  85  | 
  86  |   async selectSkillCategory(category) {
  87  |     await this.skillCatgeoryDropdown.waitFor({ state: 'visible' });
  88  |     await this.skillCatgeoryDropdown.selectOption({ label: category });
  89  |   }
  90  | 
  91  |   async selectSkillName(skillName) {
  92  |     await this.skillNameDropdown.waitFor({ state: 'visible' });
  93  |     await this.skillNameDropdown.selectOption({ label: skillName });
  94  |   }
  95  | 
  96  |   async getContentNames(){
  97  |     const cards = this.page.locator('[class*="_listHeadingWrap_"]');
  98  |     await cards.first().waitFor({ state: 'visible' });
  99  |     const names = await cards.allTextContents();
  100 |     return names.map(n => n.trim()).filter(Boolean);
  101 |   }
  102 | 
  103 |   async getManagerAssignedCardNames() {
  104 |     await this.assignedByManagerSection.waitFor({ state: 'visible' });
  105 |     const cards = this.page.locator(
  106 |       `//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  107 |     );
  108 |     await cards.first().waitFor({ state: 'visible' });
  109 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  110 |   }
  111 | 
  112 |     async getAdminAssignedCardNames() {
  113 |     await this.assignedByAdminSection.waitFor({ state: 'visible' });
  114 |     const cards = this.page.locator(
  115 |       `//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  116 |     );
  117 |     await cards.first().waitFor({ state: 'visible' });
  118 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  119 |   }
  120 | 
  121 | 
  122 |   async getContentProgressButton(contentName) {
  123 |     const btn = this.page.locator(
  124 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  125 |     );
  126 |     await btn.scrollIntoViewIfNeeded();
  127 |     await btn.waitFor({ state: 'visible' });
  128 |     return btn;
  129 |   }
  130 | 
  131 | 
  132 | }
```