# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-filters-validation.spec.js >> Home Page filters validation >> Search textbox filter validation
- Location: tests/specs/homepage/homepage-filters-validation.spec.js:11:8

# Error details

```
TypeError: cards.allTextContents(...)?.replace is not a function
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
              - textbox "Search" [active] [ref=e90]: linkedin
              - generic [ref=e91]:
                - button "close-circle" [ref=e92] [cursor=pointer]:
                  - img "close-circle" [ref=e93]:
                    - img [ref=e94]
                - img "search" [ref=e96]:
                  - img [ref=e97]
            - generic [ref=e99]:
              - generic [ref=e100]:
                - generic: Skill category
                - combobox [ref=e101]
              - img "down" [ref=e103]:
                - img [ref=e104]
            - generic [ref=e106]:
              - generic [ref=e107]:
                - generic: Skill Name
                - combobox [ref=e108]
              - img "down" [ref=e110]:
                - img [ref=e111]
            - generic [ref=e113]:
              - textbox "Due Date" [ref=e115]
              - generic "to" [ref=e117]:
                - img "swap-right" [ref=e118]:
                  - img [ref=e119]
              - textbox "Due Date" [ref=e122]
              - generic:
                - img "calendar":
                  - img
          - generic [ref=e125]:
            - strong [ref=e127]: Quick Filters
            - generic [ref=e128]:
              - generic [ref=e129]:
                - generic [ref=e130]: Priority
                - generic "Filter by priority" [ref=e131]:
                  - generic [ref=e132] [cursor=pointer]: Optional
                  - generic [ref=e133] [cursor=pointer]: Mandatory
              - generic [ref=e134]:
                - generic [ref=e135]: Status
                - generic "Filter by status" [ref=e136]:
                  - generic [ref=e137] [cursor=pointer]: Assigned
                  - generic [ref=e138] [cursor=pointer]: In Progress
          - generic [ref=e139]:
            - generic [ref=e145]:
              - generic [ref=e148]:
                - img "crown" [ref=e149]:
                  - img [ref=e150]
                - text: Assigned By Manager
              - generic [ref=e152]:
                - generic "Sort courses" [ref=e154] [cursor=pointer]:
                  - generic [ref=e155]:
                    - generic: Sort by
                    - combobox "Sort courses" [ref=e156]
                  - img "down" [ref=e158]:
                    - img [ref=e159]
                - button "Collapse section" [expanded] [ref=e162] [cursor=pointer]:
                  - img "up" [ref=e164]:
                    - img [ref=e165]
            - generic [ref=e202]:
              - generic [ref=e205]:
                - img "user" [ref=e206]:
                  - img [ref=e207]
                - text: Assigned By Admin
              - generic [ref=e209]:
                - generic "Sort courses" [ref=e211] [cursor=pointer]:
                  - generic [ref=e212]:
                    - generic: Sort by
                    - combobox "Sort courses" [ref=e213]
                  - img "down" [ref=e215]:
                    - img [ref=e216]
                - button "Collapse section" [expanded] [ref=e219] [cursor=pointer]:
                  - img "up" [ref=e221]:
                    - img [ref=e222]
```

# Test source

```ts
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
  94  |   }
  95  | 
  96  |   async verifyHomepageLoaded() {
  97  |     await this.homepageTitle.waitFor({ state: "visible" });
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
  132 |   async verifyContentVisible(searchText) {
  133 |     const cards = this.page.locator('[class*="_listColumn_"] [class*="_listTop_"] [class*="_listHeadingWrap_"]');
> 134 |     const cardsTitles = cards.allTextContents()?.replace(/\s+/g, " ").trim().toLowerCase();
      |                                                  ^ TypeError: cards.allTextContents(...)?.replace is not a function
  135 |     const count = cardsTitles.count();
  136 |     for(let i=0;i<count; i++){
  137 |       if(!cardsTitles[i].includes(searchText)){
  138 |         throw new Error(
  139 |           `Content Title "${cardsTitles[i]}" does not contain search text "${searchText}"`,
  140 |         );
  141 |       }
  142 |     }
  143 |   }
  144 | 
  145 |   async verifyLearningPathDetailsScreen(learningPathName) {
  146 |     await expect(
  147 |       this.page.getByRole("heading", { name: `${learningPathName}` }),
  148 |     ).toBeVisible();
  149 |     await expect(this.page.locator(".ant-progress-rail")).toBeVisible();
  150 |   }
  151 | 
  152 |   async verifyFiltersOnLearningPathDetailsScreen() {
  153 |     await expect(
  154 |       this.page.getByRole("heading", { name: "Learning Path Content" }),
  155 |     ).toBeVisible();
  156 |     await expect(this.page.getByText("Quick Filters")).toBeVisible();
  157 |     await expect(this.page.getByText("Priority")).toBeVisible();
  158 |     await expect(
  159 |       this.page.locator("span").filter({ hasText: "Optional" }).first(),
  160 |     ).toBeVisible();
  161 |     await expect(
  162 |       this.page.getByLabel("Filter by priority").getByText("Mandatory"),
  163 |     ).toBeVisible();
  164 |     await expect(this.page.getByText("Status")).toBeVisible();
  165 |     await expect(
  166 |       this.page.locator("span").filter({ hasText: "Assigned" }).nth(1),
  167 |     ).toBeVisible();
  168 |     await expect(
  169 |       this.page.locator("span").filter({ hasText: "In Progress" }).first(),
  170 |     ).toBeVisible();
  171 |     await expect(
  172 |       this.page.locator("span").filter({ hasText: "Completed" }).first(),
  173 |     ).toBeVisible();
  174 |   }
  175 | 
  176 |   async verifyOnlySelectedSkillCategoryContentsVisible(skillCategoryValue) {
  177 |     const pills = this.page.locator("._listPillSkillCategory_p5zy6_654");
  178 |     await pills.first.waitFor({state: 'visible'});
  179 |     const count = await pills.count();
  180 |     for (let i = 0; i < count; i++) {
  181 |       const pill = pills.nth(i);
  182 |       const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
  183 |       console.log(`Pill[${i}] text = "${text}"`);
  184 |       const contentName = (
  185 |         await pill
  186 |           .locator(
  187 |             "xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]",
  188 |           )
  189 |           .textContent()
  190 |       )
  191 |         ?.replace(/\s+/g, " ")
  192 |         .trim();
  193 |       if (!text.includes(skillCategoryValue)) {
  194 |         throw new Error(
  195 |           `${contentName} does not have ${skillCategoryValue} as skill category`,
  196 |         );
  197 |       }
  198 |       console.log(
  199 |         `${contentName} has skill category ${skillCategoryValue} as skill category`,
  200 |       );
  201 |     }
  202 |   }
  203 | 
  204 |   async verifyOnlySelectedSkillNameContentsVisible(skillNameValue) {
  205 |     const pills = this.page.locator("._listPillSkillName_p5zy6_670");
  206 |     await pills.first.waitFor({state: 'visible'});
  207 |     const count = await pills.count();
  208 |     for (let i = 0; i < count; i++) {
  209 |       const pill = pills.nth(i);
  210 |       const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
  211 |       const contentName = (
  212 |         await pill
  213 |           .locator(
  214 |             "xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]",
  215 |           )
  216 |           .textContent()
  217 |       )
  218 |         ?.replace(/\s+/g, " ")
  219 |         .trim();
  220 |       if (!text.includes(skillNameValue)) {
  221 |         throw new Error(
  222 |           `${contentName} does not have ${skillNameValue} as skill name`,
  223 |         );
  224 |       }
  225 |       console.log(
  226 |         `${contentName} has skill category ${skillNameValue} as skill name`,
  227 |       );
  228 |     }
  229 |   }
  230 | 
  231 |   async verifyDisplayedContentsPriority(priorityLevel) {
  232 |     const pills = this.page.locator('[class*="_listPillPriority"]');
  233 |     await pills.first.waitFor({state: 'visible'});
  234 |     const count = await pills.count();
```