# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: excellencelabtest1.spec.js >> Authentication Tests >> Employee Homepage validation
- Location: tests/specs/excellencelabtest1.spec.js:6:7

# Error details

```
ReferenceError: contentName is not defined
```

# Test source

```ts
  1  | 
  2  | export class HomePage {
  3  |   constructor(page) {
  4  |     this.page = page;
  5  |     this.titleText = page.getByRole('heading', { name: 'Homepage' });
  6  |     this.assignedCoursesTitle =  page.getByRole('tab', { name: 'Assigned Courses' });
  7  |     this.aiReccomendationsTitle =  page.getByRole('tab', { name: 'AI Recommendations' });
  8  |     this.searchTextbox = page.getByPlaceholder('Search');
  9  |     this.skillCatgeoryDropdown = page.getByRole('combobox', { name: 'Skill category' });
  10 |     this.skillNameDropdown = page.getByRole('combobox', { name: 'Skill Name' });
  11 |     this.duaDateStart = page.getByPlaceholder('Due Date').and(page.locator('[date-range="start"]'));
  12 |     this.dueDateEnd = page.getByPlaceholder('Due Date').and(page.locator('[date-range="end"]'));
  13 |     this.priorityOptionalButton = page.getByText('Optional', { exact: true });
  14 |     this.priorityMandatoryButton = page.getByText('Mandatory', { exact: true });
  15 |     this.statusAssignedButton = page.getByText('Assigned', { exact: true });
  16 |     this.statusInProgressButton = page.getByText('In Progress', { exact: true });
  17 |     this.assignedByManagerSection = page.getByText('Assigned By Manager', { exact: true });
  18 |     this.assignedByAdminSection = page.getByText('Assigned By Admin', { exact: true });
  19 |     this.managerAssigned = page.locator("//span[text()='Assigned By Manager']/../../../../../../../following::div[@class='ant-card-body']");
  20 |     this.contentCard = page.locator('._listColumn_p5zy6_346 ._listTop_p5zy6_354 ._listHeadingWrap_p5zy6_516');
> 21 |     this.specificContentStatusButton = page.locator(`//span[text()='${contentName}']/../../../div/div/div/div/button`);
     |                                                                       ^ ReferenceError: contentName is not defined
  22 | 
  23 |   }
  24 | 
  25 |   async titleCheck() {
  26 |       await this.titleText.waitFor({ state: 'visible' });
  27 |   }
  28 | 
  29 |   async searchCourse(courseName) {
  30 |     await this.searchTextbox.fill(courseName);
  31 |   }
  32 | 
  33 |   async selectSkillCategory(category) {
  34 |     await this.skillCatgeoryDropdown.selectOption({ label: category });
  35 |   }
  36 | 
  37 |   async selectSkillName(skillName) {
  38 |     await this.skillNameDropdown.selectOption({ label: skillName });
  39 |   }
  40 | 
  41 |   async getContentName(){
  42 |     await this.contentCard.first().waitFor({ state: 'visible' });
  43 |     const names = await this.contentCard.allTextContents();
  44 |     return names.map(n => n.trim()).filter(Boolean);
  45 |   }
  46 | 
  47 |   async getManagerAssignedCardNames() {
  48 |     await this.assignedByManagerSection.waitFor({ state: 'visible' });
  49 | 
  50 |   const names = await this.assignedByManagerSection.evaluate(headerEl => {
  51 |     // The header <span> lives inside .ant-card-head → .ant-card
  52 |     // The content cards live inside .ant-card-body of that SAME .ant-card
  53 |     const card = headerEl.closest('.ant-card');
  54 |     if (!card) return [];
  55 | 
  56 |     const cardBody = card.querySelector('.ant-card-body');
  57 |     if (!cardBody) return [];
  58 | 
  59 |     const results = [];
  60 |     cardBody
  61 |       .querySelectorAll('[class*="listHeadingWrap"]')
  62 |       .forEach(node => {
  63 |         const text = node.textContent?.trim();
  64 |         if (text) results.push(text);
  65 |       });
  66 | 
  67 |     return results;
  68 |   });
  69 | 
  70 |   return names;  
  71 |   }
  72 | 
  73 | 
  74 |   async _getCardNamesFollowingHeader(headerLocator) {
  75 |     const names = await headerLocator.evaluate(el => {
  76 |       const results = [];
  77 |       let sibling = el.closest('[class]')?.nextElementSibling;
  78 |       while (sibling) {
  79 |         sibling.querySelectorAll('[class*="listHeadingWrap"]').forEach(node => {
  80 |           const text = node.textContent?.trim();
  81 |           if (text) results.push(text);
  82 |         });
  83 |         sibling = sibling.nextElementSibling;
  84 |       }
  85 |       return results;
  86 |     });
  87 |     return names;
  88 |   }
  89 | 
  90 |   async specificContent(contentName){
  91 |     await this.specificContentStatusButton(contentName);
  92 |   }
  93 | 
  94 | }
```