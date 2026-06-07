# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: excellence-lab-homepage-Individual-content.spec.js >> Excellence Lab Homepage Individual Content Status Update Validation >> Individual Content update status to Inprogress
- Location: tests/specs/excellence-lab-homepage-Individual-content.spec.js:6:8

# Error details

```
ReferenceError: locator is not defined
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
  6   |     this.homepageTitle = page.getByRole('heading', { name: 'Homepage' });
  7   |     this.assignedCoursesTitle =  page.getByRole('tab', { name: 'Assigned Courses' });
  8   |     this.aiReccomendationsTitle =  page.getByRole('tab', { name: 'AI Recommendations' });
  9   |     this.searchTextbox = page.getByPlaceholder('Search');
  10  |     this.skillCatgeoryDropdown = page.getByRole('combobox', { name: 'Skill category' });
  11  |     this.skillNameDropdown = page.getByRole('combobox', { name: 'Skill Name' });
  12  |     this.duaDateStart = page.getByPlaceholder('Due Date').and(page.locator('[date-range="start"]'));
  13  |     this.dueDateEnd = page.getByPlaceholder('Due Date').and(page.locator('[date-range="end"]'));
  14  |     this.priorityOptionalButton = page.getByText('Optional', { exact: true });
  15  |     this.priorityMandatoryButton = page.getByText('Mandatory', { exact: true });
  16  |     this.statusAssignedButton = page.getByText('Assigned', { exact: true });
  17  |     this.statusInProgressButton = page.getByText('In Progress', { exact: true });
  18  |     this.assignedByManagerSection = page.getByText('Assigned By Manager', { exact: true });
  19  |     this.assignedByAdminSection = page.getByText('Assigned By Admin', { exact: true });
  20  |     this.managerAssignedContentCards = page.locator(`//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']`);
  21  |     this.adminAssignedContentCards = page.locator(`//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']`);
  22  |     this.contentCard = page.locator('._listColumn_p5zy6_346 ._listTop_p5zy6_354 ._listHeadingWrap_p5zy6_516');
  23  |     this.assignedTooltip = page.getByRole('tooltip', { name: 'Mark as in progress' });
  24  |     this.inProgressTooltip = page.getByRole('tooltip', { name: 'Mark complete' });
  25  |     this.learningPathTooltip = page.getByRole('tooltip', { name: 'Click the card to open the learning path' });
  26  |     this.inprogressToast = page.getByText('Marked as in progress');
  27  |     this.markCompleteToast = page.locator('div').filter({ hasText: 'Marked as completed' }).first();
  28  |     this.confirmCompleteCancelButton = page.getByRole('button', { name: 'Cancel'});
  29  |     this.yesMarkCompleteButton = page.getByRole('button', { name: 'Yes, mark complete'});
  30  | 
  31  |   }
  32  | 
  33  |   async homepageTitleCheck() {
  34  |       await this.homepageTitle.waitFor({ state: 'visible' });
  35  |       await expect(this.assignedCoursesTitle).toBeVisible();
  36  |       await expect(this.aiReccomendationsTitle).toBeVisible();
  37  |   }
  38  | 
  39  |   async searchCourse(courseName) {
  40  |     await this.searchTextbox.waitFor({ state: 'visible' });
  41  |     await this.searchTextbox.fill(courseName);
  42  |   }
  43  | 
  44  |   async selectSkillCategory(category) {
  45  |     await this.skillCatgeoryDropdown.waitFor({ state: 'visible' });
  46  |     await this.skillCatgeoryDropdown.selectOption({ label: category });
  47  |   }
  48  | 
  49  |   async selectSkillName(skillName) {
  50  |     await this.skillNameDropdown.waitFor({ state: 'visible' });
  51  |     await this.skillNameDropdown.selectOption({ label: skillName });
  52  |   }
  53  | 
  54  |   async getContentName(){
  55  |     await this.contentCard.first().waitFor({ state: 'visible' });
  56  |     const names = await this.contentCard.allTextContents();
  57  |     return names.map(n => n.trim()).filter(Boolean);
  58  |   }
  59  | 
  60  |   async getManagerAssignedCardNames() {
  61  |     await this.assignedByManagerSection.waitFor({ state: 'visible' });
> 62  |     const managerAssignedContentNames = await this.managerAssignedContentCards.filter({has: locator(`//span[@class='_listHeading_p5zy6_516']`)}).allTextContents();
      |                                                                                             ^ ReferenceError: locator is not defined
  63  |     return managerAssignedContentNames;
  64  |   }
  65  | 
  66  |     async getAdminAssignedCardNames() {
  67  |     await this.assignedByAdminSection.waitFor({ state: 'visible' });
  68  |     const adminAssignedContentNames = await this.adminAssignedContentCards.filter({has: locator(`//span[@class='_listHeading_p5zy6_516']`)}).allTextContents();
  69  |     return adminAssignedContentNames;
  70  |   }
  71  | 
  72  |   async checkManagerAdminsections(){
  73  |     await this.assignedByManagerSection.waitFor({ state: 'visible' });
  74  |     await expect(this.adminAssignedContentCards).toBeVisible();
  75  |     await expect(this.assignedByAdminSection).toBeVisible();
  76  |     await expect(this.adminAssignedContentCards).toBeVisible();
  77  |   }
  78  | 
  79  | 
  80  |   // async _getCardNamesFollowingHeader(headerLocator) {
  81  |   //   const names = await headerLocator.evaluate(el => {
  82  |   //     const results = [];
  83  |   //     let sibling = el.closest('[class]')?.nextElementSibling;
  84  |   //     while (sibling) {
  85  |   //       sibling.querySelectorAll('[class*="listHeadingWrap"]').forEach(node => {
  86  |   //         const text = node.textContent?.trim();
  87  |   //         if (text) results.push(text);
  88  |   //       });
  89  |   //       sibling = sibling.nextElementSibling;
  90  |   //     }
  91  |   //     return results;
  92  |   //   });
  93  |   //   return names;
  94  |   // }
  95  | 
  96  |   async specificContent(contentName) {
  97  |     const btn = this.page.locator(`//span[text()='${contentName}']`);
  98  |     await btn.scrollIntoViewIfNeeded();
  99  |     await btn.first().highlight()
  100 |     await btn.waitFor({ state: 'visible' });
  101 |   }
  102 | 
  103 |   async specificContentProgressButton(contentName) {
  104 |     const btn = this.page.locator(`//span[text()='${contentName}']/../../../div/div/div/div/button`);
  105 |     await btn.scrollIntoViewIfNeeded();
  106 |     await btn.waitFor({ state: 'visible' });
  107 |     return btn;
  108 |   }
  109 | 
  110 |   async assignedTooltipMessageCheck(){
  111 |     const toolTipMessage = await this.assignedTooltip;
  112 |     await expect(toolTipMessage).toBeVisible();
  113 |   }
  114 | 
  115 |   async inProgressTooltipMessageCheck(){
  116 |     const toolTipMessage = await this.inProgressTooltip;
  117 |     await expect(toolTipMessage).toBeVisible();
  118 |   }
  119 | 
  120 |   async learningPathTooltipMessageCheck(){
  121 |     const toolTipMessage = await this.learningPathTooltip;
  122 |     await expect(toolTipMessage).toBeVisible();
  123 |   }
  124 | 
  125 |   async inProgressToastMessageCheck(){
  126 |     const toast = await this.inProgressToast;
  127 |     await toast.waitFor({ state: 'visible', timeout: 8000 });
  128 |   }
  129 | 
  130 |   async markCompleteToastMessageCheck(){
  131 |     const toast = await this.markCompleteToast;
  132 |     await toast.waitFor({ state: 'visible', timeout: 8000 });
  133 |   }
  134 | 
  135 |   async confirmCompletionWarningMessageCheck(contentName)
  136 |   {
  137 |     await this.page.getByText('Confirm completion').toBeVisible();
  138 |     await this.page.getByLabel('Confirm completion').getByText(`${contentName}']`).toBeVisible();
  139 |   }
  140 | 
  141 | 
  142 | }
```