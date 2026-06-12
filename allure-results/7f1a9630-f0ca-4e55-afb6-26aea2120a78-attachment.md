# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixture_based_tests/learningrecords-contents-verification.spec.js >> Learning records Individual contents details verification >> Single Individual contents learning recods details validation
- Location: tests/specs/fixture_based_tests/learningrecords-contents-verification.spec.js:20:10

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: 'Homepage' }) to be visible

```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | import { error } from "node:console";
  3   | 
  4   | export class HomePage {
  5   |   constructor(page) {
  6   |     this.page = page;
  7   | 
  8   |     this.homepageTitle = page.getByRole("heading", { name: "Homepage" });
  9   |     this.assignedCoursesTab = page.getByRole("tab", {
  10  |       name: "Assigned Courses",
  11  |     });
  12  |     this.aiRecommendationsTab = page.getByRole("tab", {
  13  |       name: "AI Recommendations",
  14  |     });
  15  | 
  16  |     this.searchTextbox = page.getByPlaceholder("Search");
  17  |     this.skillCatgeoryDropdown = page.locator(".ant-select-content", {
  18  |       hasText: "Skill category",
  19  |     });
  20  |     this.skillCatgeoryDropdown2 = page.locator(".ant-select-content", {
  21  |       hasText: "Skill Name",
  22  |     });
  23  |     this.skillNameDropdown = page.locator(
  24  |       `//div[text()='Skill Name']/following-sibling::input`,
  25  |     );
  26  |     this.dueDateInputs = page.locator(".ant-picker-input input");
  27  | 
  28  | 
  29  | 
  30  |     this.statusAssignedButton = page.getByText("Assigned", { exact: true });
  31  |     this.statusInProgressButton = page.getByText("In Progress", {
  32  |       exact: true,
  33  |     });
  34  | 
  35  |     this.assignedByManagerSection = page.getByText("Assigned By Manager", {
  36  |       exact: true,
  37  |     });
  38  |     this.managerSortByDropdown = page
  39  |       .getByRole("combobox", { name: "Sort courses" })
  40  |       .first();
  41  | 
  42  |     this.assignedByAdminSection = page.getByText("Assigned By Admin", {
  43  |       exact: true,
  44  |     });
  45  |     this.adminSortByDropdown = page
  46  |       .getByRole("combobox", { name: "Sort courses" })
  47  |       .nth(1);
  48  | 
  49  |     this.managerAssignedContentCards = page.locator(
  50  |       `//span[normalize-space()='Assigned By Manager']/ancestor::div[contains(@class,'ant-card-bordered')][1]/div[contains(@class,'ant-card-body')]//div[@class='ant-card-body']`,
  51  |     );
  52  |     this.adminAssignedContentCards = page.locator(
  53  |       `//span[normalize-space()='Assigned By Admin']/ancestor::div[contains(@class,'ant-card-bordered')][1]/div[contains(@class,'ant-card-body')]//div[@class='ant-card-body']`,
  54  |     );
  55  |     this.contentCard = page.locator(
  56  |       '[class*="_listColumn_"] [class*="_listTop_"] [class*="_listHeadingWrap_"]',
  57  |     );
  58  | 
  59  |     this.managerAssignedContentTitles = page.locator(
  60  |       `//span[normalize-space()='Assigned By Manager']/ancestor::div[contains(@class,'ant-card-bordered')][1]//div[contains(@class,'_listHeadingWrap_')]`,
  61  |     );
  62  |     this.adminAssignedContentTitles = page.locator(
  63  |       `//span[normalize-space()='Assigned By Admin']/ancestor::div[contains(@class,'ant-card-bordered')][1]//div[contains(@class,'_listHeadingWrap_')]`,
  64  |     );
  65  | 
  66  |     this.managerAssignedContentDueDate = page.locator(`//span[normalize-space()='Assigned By Manager']/ancestor::div[contains(@class,'ant-card-bordered')][1]//div[contains(@class,'_listDueRow_')]/span[contains(@class,'_listDueDate_')]`);
  67  |     this.adminAssignedContentDueDate = page.locator(`//span[normalize-space()='Assigned By Admin']/ancestor::div[contains(@class,'ant-card-bordered')][1]//div[contains(@class,'_listDueRow_')]/span[contains(@class,'_listDueDate_')]`);
  68  | 
  69  |     this.assignedTooltip = page.getByRole("tooltip", {
  70  |       name: "Mark as in progress",
  71  |     });
  72  |     this.inProgressTooltip = page.getByRole("tooltip", {
  73  |       name: "Mark complete",
  74  |     });
  75  |     this.learningPathTooltip = page.getByRole("tooltip", {
  76  |       name: "Click the card to open the learning path",
  77  |     });
  78  | 
  79  |     this.inProgressToast = page.getByText("Marked as in progress");
  80  |     this.markCompleteToast = page
  81  |       .locator("div")
  82  |       .filter({ hasText: "Marked as completed" })
  83  |       .first();
  84  | 
  85  |     this.confirmCompleteCancelButton = page.getByRole("button", {
  86  |       name: "Cancel",
  87  |     });
  88  |     this.yesMarkCompleteButton = page.getByRole("button", {
  89  |       name: "Yes, mark complete",
  90  |     });
  91  |     this.learningPathProgressLocator = this.page.locator(
  92  |       '[class*="_pathProgressPercent_"]',
  93  |     );
  94  | 
  95  |     this.profileName = this.page.getByRole('link', { name: 'My profile' }).locator('._userName_k4we4_232');
  96  |   }
  97  | 
  98  |   async verifyHomepageLoaded() {
> 99  |     await this.homepageTitle.waitFor({ state: "visible" });
      |                              ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  100 |     await expect(this.assignedCoursesTab).toBeVisible();
  101 |     await expect(this.aiRecommendationsTab).toBeVisible();
  102 |   }
  103 | 
  104 |   async verifyManagerAndAdminSections() {
  105 |     await expect(this.assignedByManagerSection).toBeVisible();
  106 |     await expect(this.assignedByAdminSection).toBeVisible();
  107 |   }
  108 | 
  109 |   async verifyAssignedTooltip() {
  110 |     await expect(this.assignedTooltip).toBeVisible();
  111 |   }
  112 |   async verifyInProgressTooltip() {
  113 |     await expect(this.inProgressTooltip).toBeVisible();
  114 |   }
  115 |   async verifyLearningPathTooltip() {
  116 |     await expect(this.learningPathTooltip).toBeVisible();
  117 |   }
  118 | 
  119 |   async verifyInProgressToast() {
  120 |     await this.inProgressToast.waitFor({ state: "visible", timeout: 8000 });
  121 |   }
  122 | 
  123 |   async verifyMarkCompleteToast() {
  124 |     await this.markCompleteToast.waitFor({ state: "visible", timeout: 8000 });
  125 |   }
  126 | 
  127 |   async verifyConfirmCompletionDialog(contentName) {
  128 |     await expect(this.page.getByText("Confirm completion")).toBeVisible();
  129 |     await expect(
  130 |       this.page.getByLabel("Confirm completion").getByText(contentName),
  131 |     ).toBeVisible();
  132 |   }
  133 | 
  134 |   async verifyContentVisible(searchText) {
  135 |   const cards = this.page.locator('[class*="_listColumn_"] [class*="_listTop_"] [class*="_listHeadingWrap_"]');
  136 |   const titles = await cards.allTextContents();
  137 |   const search = searchText.replace(/\s+/g, " ").trim().toLowerCase();
  138 |   const cardsTitles = titles.map(t => t.replace(/\s+/g, " ").trim().toLowerCase());
  139 |   const failures = cardsTitles.filter(t => !t.includes(search));
  140 | 
  141 |   expect(
  142 |     failures,
  143 |     `${failures.length} card(s) did not contain "${searchText}":\n- ${failures.join("\n- ")}`
  144 |   ).toHaveLength(0);
  145 | }
  146 | 
  147 |   async verifyLearningPathDetailsScreen(learningPathName) {
  148 |     await expect(
  149 |       this.page.getByRole("heading", { name: `${learningPathName}` }),
  150 |     ).toBeVisible();
  151 |     await expect(this.page.locator(".ant-progress-rail")).toBeVisible();
  152 |   }
  153 | 
  154 |   async verifyFiltersOnLearningPathDetailsScreen() {
  155 |     await expect(
  156 |       this.page.getByRole("heading", { name: "Learning Path Content" }),
  157 |     ).toBeVisible();
  158 |     await expect(this.page.getByText("Quick Filters")).toBeVisible();
  159 |     await expect(this.page.getByText("Priority")).toBeVisible();
  160 |     await expect(
  161 |       this.page.locator("span").filter({ hasText: "Optional" }).first(),
  162 |     ).toBeVisible();
  163 |     await expect(
  164 |       this.page.getByLabel("Filter by priority").getByText("Mandatory"),
  165 |     ).toBeVisible();
  166 |     await expect(this.page.getByText("Status")).toBeVisible();
  167 |     await expect(
  168 |       this.page.locator("span").filter({ hasText: "Assigned" }).nth(1),
  169 |     ).toBeVisible();
  170 |     await expect(
  171 |       this.page.locator("span").filter({ hasText: "In Progress" }).first(),
  172 |     ).toBeVisible();
  173 |     await expect(
  174 |       this.page.locator("span").filter({ hasText: "Completed" }).first(),
  175 |     ).toBeVisible();
  176 |   }
  177 | 
  178 |   async verifyOnlySelectedSkillCategoryContentsVisible(skillCategoryValue) {
  179 |     const pills = this.page.locator("._listPillSkillCategory_p5zy6_654");
  180 |     await pills.first.waitFor({state: 'visible'});
  181 |     const count = await pills.count();
  182 |     for (let i = 0; i < count; i++) {
  183 |       const pill = pills.nth(i);
  184 |       const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
  185 |       console.log(`Pill[${i}] text = "${text}"`);
  186 |       const contentName = (
  187 |         await pill
  188 |           .locator(
  189 |             "xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]",
  190 |           )
  191 |           .textContent()
  192 |       )
  193 |         ?.replace(/\s+/g, " ")
  194 |         .trim();
  195 |       if (!text.includes(skillCategoryValue)) {
  196 |         throw new Error(
  197 |           `${contentName} does not have ${skillCategoryValue} as skill category`,
  198 |         );
  199 |       }
```