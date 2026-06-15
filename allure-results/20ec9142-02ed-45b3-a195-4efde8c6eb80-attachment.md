# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixture_based_tests/homepage-learning-path-customized.spec.js >> Homepage Learning path status update validation >> Entire Learning path status update to Completed validation
- Location: tests/specs/fixture_based_tests/homepage-learning-path-customized.spec.js:61:8

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
  41  |     this.managerSortByDropdown = page
  42  |       .getByRole("combobox", { name: "Sort courses" })
  43  |       .first();
  44  |     this.assignedByAdminSection = page.getByText("Assigned By Admin", {
  45  |       exact: true,
  46  |     });
  47  |     this.adminSortByDropdown = page
  48  |       .getByRole("combobox", { name: "Sort courses" })
  49  |       .nth(1);
  50  | 
  51  |     this.managerAssignedContentCards = page.locator(
  52  |       `//span[normalize-space()='Assigned By Manager']/ancestor::div[contains(@class,'ant-card')][1]/following-sibling::div[contains(@class,'ant-card-body')]`,
  53  |     );
  54  |     this.adminAssignedContentCards = page.locator(
  55  |       `//span[normalize-space()='Assigned By Admin']/ancestor::div[contains(@class,'ant-card')][1]/following-sibling::div[contains(@class,'ant-card-body')]`,
  56  |     );
  57  |     this.contentCard = page.locator(
  58  |       '[class*="_listColumn_"] [class*="_listTop_"] [class*="_listHeadingWrap_"]',
  59  |     );
  60  | 
  61  |     this.managerAssignedContentTitles = page.locator(
  62  |       `//span[normalize-space()='Assigned By Manager']/ancestor::div[contains(@class,'ant-card-bordered')][1]/div[contains(@class,'ant-card-body')]//div[contains(@class,'_listHeadingWrap_')]`,
  63  |     );
  64  |     this.adminAssignedContentTitles = page.locator(
  65  |       `//span[normalize-space()='Assigned By Admin']/ancestor::div[contains(@class,'ant-card-bordered')][1]/div[contains(@class,'ant-card-body')]//div[contains(@class,'_listHeadingWrap_')]`,
  66  |     );
  67  | 
  68  |     this.assignedTooltip = page.getByRole("tooltip", {
  69  |       name: "Mark as in progress",
  70  |     });
  71  |     this.inProgressTooltip = page.getByRole("tooltip", {
  72  |       name: "Mark complete",
  73  |     });
  74  |     this.learningPathTooltip = page.getByRole("tooltip", {
  75  |       name: "Click the card to open the learning path",
  76  |     });
  77  | 
  78  |     this.inProgressToast = page.getByText("Marked as in progress");
  79  |     this.markCompleteToast = page
  80  |       .locator("div")
  81  |       .filter({ hasText: "Marked as completed" })
  82  |       .first();
  83  | 
  84  |     this.confirmCompleteCancelButton = page.getByRole("button", {
  85  |       name: "Cancel",
  86  |     });
  87  |     this.yesMarkCompleteButton = page.getByRole("button", {
  88  |       name: "Yes, mark complete",
  89  |     });
  90  |     this.learningPathProgressLocator = this.page.locator(
  91  |       '[class*="_pathProgressPercent_"]',
  92  |     );
  93  | 
  94  |   }
  95  | 
  96  |   async verifyHomepageLoaded() {
> 97  |     await this.homepageTitle.waitFor({ state: "visible" });
      |                              ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  98  |     await expect(this.assignedCoursesTab).toBeVisible();
  99  |     await expect(this.aiRecommendationsTab).toBeVisible();
  100 |   }
  101 | 
  102 |   async verifyManagerAndAdminSections() {
  103 |     await expect(this.assignedByManagerSection).toBeVisible();
  104 |     await expect(this.assignedByAdminSection).toBeVisible();
  105 |   }
  106 | 
  107 |   async verifyAssignedTooltip() {
  108 |     await expect(this.assignedTooltip).toBeVisible();
  109 |   }
  110 |   async verifyInProgressTooltip() {
  111 |     await expect(this.inProgressTooltip).toBeVisible();
  112 |   }
  113 |   async verifyLearningPathTooltip() {
  114 |     await expect(this.learningPathTooltip).toBeVisible();
  115 |   }
  116 | 
  117 |   async verifyInProgressToast() {
  118 |     await this.inProgressToast.waitFor({ state: "visible", timeout: 8000 });
  119 |   }
  120 | 
  121 |   async verifyMarkCompleteToast() {
  122 |     await this.markCompleteToast.waitFor({ state: "visible", timeout: 8000 });
  123 |   }
  124 | 
  125 |   async verifyConfirmCompletionDialog(contentName) {
  126 |     await expect(this.page.getByText("Confirm completion")).toBeVisible();
  127 |     await expect(
  128 |       this.page.getByLabel("Confirm completion").getByText(contentName),
  129 |     ).toBeVisible();
  130 |   }
  131 | 
  132 |   async verifyContentVisible(contentName) {
  133 |     const content = this.page.getByText(contentName);
  134 |     await content.scrollIntoViewIfNeeded();
  135 |     await expect(content).toBeVisible();
  136 |   }
  137 | 
  138 |   async verifyLearningPathDetailsScreen(learningPathName) {
  139 |     await expect(
  140 |       this.page.getByRole("heading", { name: `${learningPathName}` }),
  141 |     ).toBeVisible();
  142 |     await expect(this.page.locator(".ant-progress-rail")).toBeVisible();
  143 |   }
  144 | 
  145 |   async verifyFiltersOnLearningPathDetailsScreen() {
  146 |     await expect(
  147 |       this.page.getByRole("heading", { name: "Learning Path Content" }),
  148 |     ).toBeVisible();
  149 |     await expect(this.page.getByText("Quick Filters")).toBeVisible();
  150 |     await expect(this.page.getByText("Priority")).toBeVisible();
  151 |     await expect(
  152 |       this.page.locator("span").filter({ hasText: "Optional" }).first(),
  153 |     ).toBeVisible();
  154 |     await expect(
  155 |       this.page.getByLabel("Filter by priority").getByText("Mandatory"),
  156 |     ).toBeVisible();
  157 |     await expect(this.page.getByText("Status")).toBeVisible();
  158 |     await expect(
  159 |       this.page.locator("span").filter({ hasText: "Assigned" }).nth(1),
  160 |     ).toBeVisible();
  161 |     await expect(
  162 |       this.page.locator("span").filter({ hasText: "In Progress" }).first(),
  163 |     ).toBeVisible();
  164 |     await expect(
  165 |       this.page.locator("span").filter({ hasText: "Completed" }).first(),
  166 |     ).toBeVisible();
  167 |   }
  168 | 
  169 |   async openIndividualContent(contentName) {
  170 |     await this.page.getByText(contentName).click();
  171 |   }
  172 | 
  173 |   async openLearningPath(learningPathName) {
  174 |     const content = this.page.getByText(learningPathName, { exact: true });
  175 |     await content.scrollIntoViewIfNeeded();
  176 |     await expect(content).toBeVisible();
  177 |     await this.page.getByText(learningPathName).click();
  178 |   }
  179 | 
  180 |   async verifySearchContentVisible(courseName, contentName) {
  181 |     await this.searchTextbox.waitFor({ state: "visible" });
  182 |     await this.searchTextbox.fill(courseName);
  183 |     await this.page.waitForLoadState("domcontentloaded");
  184 |     await this.verifyContentVisible(contentName);
  185 |   }
  186 | 
  187 |   async verifyOnlySelectedSkillCategoryContentsVisible(skillCategoryValue) {
  188 |     const pills = this.page.locator("._listPillSkillCategory_p5zy6_654");
  189 |     const count = await pills.count();
  190 |     for (let i = 0; i < count; i++) {
  191 |       const pill = pills.nth(i);
  192 |       const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
  193 |       console.log(`Pill[${i}] text = "${text}"`);
  194 |       const contentName = (
  195 |         await pill
  196 |           .locator(
  197 |             "xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]",
```