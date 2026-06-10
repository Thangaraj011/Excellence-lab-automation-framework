# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-filters-validation.spec.js >> Home Page filters validation >> Quick filters status validation
- Location: tests/specs/homepage/homepage-filters-validation.spec.js:63:8

# Error details

```
ReferenceError: page is not defined
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
  196 |       if (!text.includes(skillCategoryValue)) {
  197 |         throw new Error(
  198 |           `${contentName} does not have ${skillCategoryValue} as skill category`,
  199 |         );
  200 |       }
  201 |       console.log(
  202 |         `${contentName} has skill category ${skillCategoryValue} as skill category`,
  203 |       );
  204 |     }
  205 |   }
  206 | 
  207 |   async verifyOnlySelectedSkillNameContentsVisible(skillNameValue) {
  208 |     const pills = this.page.locator("._listPillSkillName_p5zy6_670");
  209 |     const count = await pills.count();
  210 |     for (let i = 0; i < count; i++) {
  211 |       const pill = pills.nth(i);
  212 |       const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
  213 |       const contentName = (
  214 |         await pill
  215 |           .locator(
  216 |             "xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]",
  217 |           )
  218 |           .textContent()
  219 |       )
  220 |         ?.replace(/\s+/g, " ")
  221 |         .trim();
  222 |       if (!text.includes(skillNameValue)) {
  223 |         throw new Error(
  224 |           `${contentName} does not have ${skillNameValue} as skill name`,
  225 |         );
  226 |       }
  227 |       console.log(
  228 |         `${contentName} has skill category ${skillNameValue} as skill name`,
  229 |       );
  230 |     }
  231 |   }
  232 | 
  233 |   async verifyDisplayedContentsPriority(priorityLevel) {
  234 |     const pills = this.page.locator('[class*="_listPillPriority"]');
  235 |     const count = await pills.count();
  236 |     for (let i = 0; i < count; i++) {
  237 |       const pill = pills.nth(i);
  238 |       const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
  239 |       const contentName = (
  240 |         await pill
  241 |           .locator(
  242 |             "xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]",
  243 |           )
  244 |           .textContent()
  245 |       )
  246 |         ?.replace(/\s+/g, " ")
  247 |         .trim();
  248 |       if (!text.includes(priorityLevel)) {
  249 |         throw new Error(
  250 |           `${contentName} does not have ${priorityLevel} as priority Level`,
  251 |         );
  252 |       }
  253 |       console.log(`${contentName} has priority Level as ${priorityLevel}`);
  254 |     }
  255 |   }
  256 | 
  257 |   async selectSkillCategory(skillCategory) {
  258 |     await this.skillCatgeoryDropdown.click();
  259 |     await this.page.getByText(skillCategory).click();
  260 |     await this.page
  261 |       .locator('[class*="_listPillSkillCategory_"]')
  262 |       .first()
  263 |       .waitFor({ state: "visible" });
  264 |   }
  265 | 
  266 |   async selectSkillName(skillName) {
  267 |     await this.skillNameDropdown.fill(skillName);
  268 |     await this.page.locator(".ant-select-item-option").first().click();
  269 |     await this.page
  270 |       .locator('[class*="_listPillSkillName_"]')
  271 |       .first()
  272 |       .waitFor({ state: "visible" });
  273 |   }
  274 | 
  275 |   async selectDueDates(dueDateStart, dueDateEnd) {
  276 |     await this.dueDateInputs.first().click();
  277 |     await this.dueDateInputs.nth(0).fill(dueDateStart);
  278 |     await this.dueDateInputs.nth(0).press("Enter");
  279 |     await this.dueDateInputs.nth(1).fill(dueDateEnd);
  280 |     await this.dueDateInputs.nth(1).press("Enter");
  281 |     await this.page
  282 |       .locator('[class*="_listDueDate_"]')
  283 |       .first()
  284 |       .waitFor({ state: "visible" });
  285 |   }
  286 | 
  287 |   async selectPriority(priorityLevel) {
  288 |     this.page.getByText(priorityLevel, { exact: true }).click();
  289 |     await this.page
  290 |       .locator('[class*="_listPillPriority"]')
  291 |       .first()
  292 |       .waitFor({ state: "visible" });
  293 |   }
  294 | 
  295 |   async selectStatus(status) {
> 296 |     const responsePromise = page.waitForResponse(
      |                             ^ ReferenceError: page is not defined
  297 |       (resp) =>
  298 |         resp.url().includes("items") && resp.request().method() === "POST",
  299 |     );
  300 |     await this.page.getByText(status, { exact: true }).click();
  301 |     await this.page
  302 |       .locator('[class*="_cardListOnly_"]')
  303 |       .first()
  304 |       .waitFor({ state: "visible" });
  305 |     const body = await (await responsePromise).json();
  306 |     console.log(body);
  307 |   }
  308 | 
  309 |   async verifyAllDueDatesInRange(startDate, endDate) {
  310 |     const dueDates = this.page.locator('[class*="_listDueDate_"]');
  311 |     const count = await dueDates.count();
  312 |     for (let i = 0; i < count; i++) {
  313 |       const raw = (await dueDates.nth(i).textContent())
  314 |         ?.replace(/\s+/g, " ")
  315 |         .trim();
  316 |       const match = raw.match(/(\d{2})-(\d{2})-(\d{4})/);
  317 |       const date = match ? `${match[3]}-${match[2]}-${match[1]}` : undefined;
  318 |       const contentName = (
  319 |         await dueDates
  320 |           .nth(i)
  321 |           .locator(
  322 |             "xpath=following::div[@class='_listHeadingWrap_p5zy6_516'][1]",
  323 |           )
  324 |           .textContent()
  325 |       )
  326 |         ?.replace(/\s+/g, " ")
  327 |         .trim();
  328 |       if (!date || !(date >= startDate && date <= endDate)) {
  329 |         throw new Error(
  330 |           `Due date "${raw}" is not within ${startDate} – ${endDate}`,
  331 |         );
  332 |       }
  333 |       console.log(
  334 |         ` "${contentName}" due date is within the given start date "${startDate}" and End date "${endDate}" range `,
  335 |       );
  336 |     }
  337 |   }
  338 | 
  339 |   verifyNamesSorted(names, order = "asc") {
  340 |     const cleaned = names.map((n) => n.replace(/\s+/g, " ").trim());
  341 |     const compare = (a, b) =>
  342 |       a.localeCompare(b, undefined, { sensitivity: "base", numeric: true });
  343 | 
  344 |     const isSorted = cleaned.every(
  345 |       (val, i) =>
  346 |         i === 0 ||
  347 |         (order === "asc"
  348 |           ? compare(cleaned[i - 1], val) <= 0
  349 |           : compare(cleaned[i - 1], val) >= 0),
  350 |     );
  351 | 
  352 |     expect(
  353 |       isSorted,
  354 |       `Names not in ${order} order:\n${cleaned.join("\n")}`,
  355 |     ).toBe(true);
  356 |   }
  357 | 
  358 |   async getContentNames() {
  359 |     const cards = this.page.locator('[class*="_listHeadingWrap_"]');
  360 |     await cards.first().waitFor({ state: "visible" });
  361 |     const names = await cards.allTextContents();
  362 |     return names.map((n) => n.trim()).filter(Boolean);
  363 |   }
  364 | 
  365 |   async getManagerAssignedCardNames() {
  366 |     await this.assignedByManagerSection.waitFor({ state: "visible" });
  367 |     const cards = this.managerAssignedContentTitles;
  368 |     await cards.first().waitFor({ state: "visible" });
  369 |     return (await cards.allTextContents()).map((n) => n.trim()).filter(Boolean);
  370 |   }
  371 | 
  372 |   async getAdminAssignedCardNames() {
  373 |     await this.assignedByAdminSection.waitFor({ state: "visible" });
  374 |     const cards = this.adminAssignedContentTitles;
  375 |     await cards.first().waitFor({ state: "visible" });
  376 |     return (await cards.allTextContents()).map((n) => n.trim()).filter(Boolean);
  377 |   }
  378 | 
  379 |   async getContentProgressButton(contentName) {
  380 |     const btn = this.page.locator(
  381 |       `//span[text()='${contentName}']/following::button[1]`,
  382 |     );
  383 |     await btn.scrollIntoViewIfNeeded();
  384 |     await btn.waitFor({ state: "visible" });
  385 |     return btn;
  386 |   }
  387 | 
  388 |   async getLearningPathProgressPercentage() {
  389 |     const progressLocator = this.learningPathProgressLocator;
  390 |     await progressLocator.waitFor({ state: "visible" });
  391 |     const currentProgress = (await progressLocator.textContent())?.trim() ?? "";
  392 |     return currentProgress;
  393 |   }
  394 | 
  395 |   async getListedIndividualContentNames() {
  396 |     const contentNames = await this.page
```