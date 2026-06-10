# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-filters-validation.spec.js >> Home Page filters validation >> Quick filters priority Optional validation
- Location: tests/specs/homepage/homepage-filters-validation.spec.js:53:8

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: 'Homepage' }) to be visible

```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | 
  3   | export class HomePage {
  4   |   constructor(page) {
  5   |     this.page = page;
  6   | 
  7   |     this.homepageTitle = page.getByRole("heading", { name: "Homepage" });
  8   |     this.assignedCoursesTab = page.getByRole("tab", {
  9   |       name: "Assigned Courses",
  10  |     });
  11  |     this.aiRecommendationsTab = page.getByRole("tab", {
  12  |       name: "AI Recommendations",
  13  |     });
  14  | 
  15  |     this.searchTextbox = page.getByPlaceholder("Search");
  16  |     this.skillCatgeoryDropdown = page.locator(".ant-select-content", {
  17  |       hasText: "Skill category",
  18  |     });
  19  |     this.skillCatgeoryDropdown2 = page.locator(".ant-select-content", {
  20  |       hasText: "Skill Name",
  21  |     });
  22  |     this.skillNameDropdown = page.locator(
  23  |       `//div[text()='Skill Name']/following-sibling::input`,
  24  |     );
  25  |     this.dueDateInputs = page.locator(".ant-picker-input input");
  26  |     this.dueDateStart = page
  27  |       .getByPlaceholder("Due Date")
  28  |       .and(page.locator('[date-range="start"]'));
  29  |     this.dueDateEnd = page
  30  |       .getByPlaceholder("Due Date")
  31  |       .and(page.locator('[date-range="end"]'));
  32  | 
  33  |     this.statusAssignedButton = page.getByText("Assigned", { exact: true });
  34  |     this.statusInProgressButton = page.getByText("In Progress", {
  35  |       exact: true,
  36  |     });
  37  | 
  38  |     this.assignedByManagerSection = page.getByText("Assigned By Manager", {
  39  |       exact: true,
  40  |     });
  41  |     this.assignedByAdminSection = page.getByText("Assigned By Admin", {
  42  |       exact: true,
  43  |     });
  44  | 
  45  |     this.managerAssignedContentCards = page.locator(
  46  |       `//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']`,
  47  |     );
  48  |     this.adminAssignedContentCards = page.locator(
  49  |       `//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']`,
  50  |     );
  51  |     this.contentCard = page.locator(
  52  |       '[class*="_listColumn_"] [class*="_listTop_"] [class*="_listHeadingWrap_"]',
  53  |     );
  54  | 
  55  |     this.managerAssignedContentTitles = page.locator(
  56  |       `//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`,
  57  |     );
  58  |     this.adminAssignedContentTitles = page.locator(
  59  |       `//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`,
  60  |     );
  61  | 
  62  |     this.assignedTooltip = page.getByRole("tooltip", {
  63  |       name: "Mark as in progress",
  64  |     });
  65  |     this.inProgressTooltip = page.getByRole("tooltip", {
  66  |       name: "Mark complete",
  67  |     });
  68  |     this.learningPathTooltip = page.getByRole("tooltip", {
  69  |       name: "Click the card to open the learning path",
  70  |     });
  71  | 
  72  |     this.inProgressToast = page.getByText("Marked as in progress");
  73  |     this.markCompleteToast = page
  74  |       .locator("div")
  75  |       .filter({ hasText: "Marked as completed" })
  76  |       .first();
  77  | 
  78  |     this.confirmCompleteCancelButton = page.getByRole("button", {
  79  |       name: "Cancel",
  80  |     });
  81  |     this.yesMarkCompleteButton = page.getByRole("button", {
  82  |       name: "Yes, mark complete",
  83  |     });
  84  |     this.learningPathProgressLocator = this.page.locator(
  85  |       '[class*="_pathProgressPercent_"]',
  86  |     );
  87  |   }
  88  | 
  89  |   async verifyHomepageLoaded() {
> 90  |     await this.homepageTitle.waitFor({ state: "visible" });
      |                              ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  91  |     await expect(this.assignedCoursesTab).toBeVisible();
  92  |     await expect(this.aiRecommendationsTab).toBeVisible();
  93  |   }
  94  | 
  95  |   async verifyManagerAndAdminSections() {
  96  |     await expect(this.assignedByManagerSection).toBeVisible();
  97  |     //await expect(this.managerAssignedContentCards).toBeVisible();
  98  |     await expect(this.assignedByAdminSection).toBeVisible();
  99  |     //await expect(this.adminAssignedContentCards).
  100 |     // toBeVisible();
  101 |   }
  102 | 
  103 |   async verifyAssignedTooltip() {
  104 |     await expect(this.assignedTooltip).toBeVisible();
  105 |   }
  106 |   async verifyInProgressTooltip() {
  107 |     await expect(this.inProgressTooltip).toBeVisible();
  108 |   }
  109 |   async verifyLearningPathTooltip() {
  110 |     await expect(this.learningPathTooltip).toBeVisible();
  111 |   }
  112 | 
  113 |   async verifyInProgressToast() {
  114 |     await this.inProgressToast.waitFor({ state: "visible", timeout: 8000 });
  115 |   }
  116 | 
  117 |   async verifyMarkCompleteToast() {
  118 |     await this.markCompleteToast.waitFor({ state: "visible", timeout: 8000 });
  119 |   }
  120 | 
  121 |   async verifyConfirmCompletionDialog(contentName) {
  122 |     await expect(this.page.getByText("Confirm completion")).toBeVisible();
  123 |     await expect(
  124 |       this.page.getByLabel("Confirm completion").getByText(contentName),
  125 |     ).toBeVisible();
  126 |   }
  127 | 
  128 |   async verifyContentVisible(contentName) {
  129 |     const content = this.page.getByText(contentName, { exact: true });
  130 |     await content.scrollIntoViewIfNeeded();
  131 |     await expect(content).toBeVisible();
  132 |   }
  133 | 
  134 |   async verifyLearningPathDetailsScreen(learningPathName) {
  135 |     await expect(
  136 |       this.page.getByRole("heading", { name: `${learningPathName}` }),
  137 |     ).toBeVisible();
  138 |     await expect(this.page.locator(".ant-progress-rail")).toBeVisible();
  139 |   }
  140 | 
  141 |   async verifyFiltersOnLearningPathDetailsScreen() {
  142 |     await expect(
  143 |       this.page.getByRole("heading", { name: "Learning Path Content" }),
  144 |     ).toBeVisible();
  145 |     await expect(this.page.getByText("Quick Filters")).toBeVisible();
  146 |     await expect(this.page.getByText("Priority")).toBeVisible();
  147 |     await expect(
  148 |       this.page.locator("span").filter({ hasText: "Optional" }).first(),
  149 |     ).toBeVisible();
  150 |     await expect(
  151 |       this.page.getByLabel("Filter by priority").getByText("Mandatory"),
  152 |     ).toBeVisible();
  153 |     await expect(this.page.getByText("Status")).toBeVisible();
  154 |     await expect(
  155 |       this.page.locator("span").filter({ hasText: "Assigned" }).nth(1),
  156 |     ).toBeVisible();
  157 |     await expect(
  158 |       this.page.locator("span").filter({ hasText: "In Progress" }).first(),
  159 |     ).toBeVisible();
  160 |     await expect(
  161 |       this.page.locator("span").filter({ hasText: "Completed" }).first(),
  162 |     ).toBeVisible();
  163 |   }
  164 | 
  165 |   async openIndividualContent(contentName) {
  166 |     await this.page.getByText(contentName).click();
  167 |   }
  168 | 
  169 |   async openLearningPath(learningPathName) {
  170 |     const content = this.page.getByText(learningPathName, { exact: true });
  171 |     await content.scrollIntoViewIfNeeded();
  172 |     await expect(content).toBeVisible();
  173 |     await this.page.getByText(learningPathName).click();
  174 |   }
  175 | 
  176 |   async verifySearchContentVisible(courseName, contentName) {
  177 |     await this.searchTextbox.waitFor({ state: "visible" });
  178 |     await this.searchTextbox.fill(courseName);
  179 |     await this.page.waitForLoadState("domcontentloaded");
  180 |     await this.verifyContentVisible(contentName);
  181 |   }
  182 | 
  183 |   async verifyOnlySelectedSkillCategoryContentsVisible(skillCategoryValue) {
  184 |     const pills = this.page.locator("._listPillSkillCategory_p5zy6_654");
  185 |     const count = await pills.count();
  186 |     for (let i = 0; i < count; i++) {
  187 |       const pill = pills.nth(i);
  188 |       const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
  189 |       console.log(`Pill[${i}] text = "${text}"`);
  190 |       const contentName = (
```