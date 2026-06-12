# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixture_based_tests/homepage-filters-validation.spec.js >> Home Page filters validation >> Multiple filter validation
- Location: tests/specs/fixture_based_tests/homepage-filters-validation.spec.js:132:8

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('[class*="_listDueDate_"]').first() to be visible

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
                    - generic [ref=e91]: No assigned content yet
                    - generic:
                      - generic: "0"
                      - generic: Total Assigned
                  - generic [ref=e92]:
                    - generic [ref=e95]: 0 Assigned
                    - generic [ref=e98]: 0 In Progress
                    - generic [ref=e101]: 0 Completed
              - generic [ref=e102]:
                - generic [ref=e104]:
                  - generic [ref=e105]: Learning Trend
                  - button "Expand chart" [ref=e107] [cursor=pointer]:
                    - img "fullscreen" [ref=e109]:
                      - img [ref=e110]
                - application [ref=e116]:
                  - generic [ref=e163]:
                    - generic [ref=e164]:
                      - generic [ref=e166]: Dec
                      - generic [ref=e168]: Jan
                      - generic [ref=e170]: Feb
                      - generic [ref=e172]: Mar
                      - generic [ref=e174]: Apr
                      - generic [ref=e176]: May
                      - generic [ref=e178]: Jun
                    - generic [ref=e179]:
                      - generic [ref=e181]: "0"
                      - generic [ref=e183]: "5"
                      - generic [ref=e185]: "10"
                      - generic [ref=e187]: "18"
            - generic [ref=e188]:
              - generic [ref=e189]:
                - textbox "Search" [ref=e190]: linkedin
                - generic [ref=e191]:
                  - button "close-circle" [ref=e192] [cursor=pointer]:
                    - img "close-circle" [ref=e193]:
                      - img [ref=e194]
                  - img "search" [ref=e196]:
                    - img [ref=e197]
              - generic [ref=e199]:
                - generic [ref=e200]:
                  - generic: Skill category
                  - combobox [ref=e201]
                - img "down" [ref=e203]:
                  - img [ref=e204]
              - generic [ref=e206]:
                - generic [ref=e207]:
                  - generic: Skill Name
                  - combobox [ref=e208]
                - img "down" [ref=e210]:
                  - img [ref=e211]
              - generic [ref=e213]:
                - textbox "Due Date" [ref=e215]: 2026-05-04
                - generic "to" [ref=e217]:
                  - img "swap-right" [ref=e218]:
                    - img [ref=e219]
                - textbox "Due Date" [ref=e222]: 2026-06-30
                - generic:
                  - img "calendar":
                    - img
                - button "close-circle" [ref=e223] [cursor=pointer]:
                  - img "close-circle" [ref=e224]:
                    - img [ref=e225]
            - generic [ref=e229]:
              - strong [ref=e231]: Quick Filters
              - generic [ref=e232]:
                - generic [ref=e233]:
                  - generic [ref=e234]: Priority
                  - generic "Filter by priority" [ref=e235]:
                    - generic [ref=e236] [cursor=pointer]: Optional
                    - generic [ref=e237] [cursor=pointer]: Mandatory
                - generic [ref=e238]:
                  - generic [ref=e239]: Status
                  - generic "Filter by status" [ref=e240]:
                    - generic [ref=e241] [cursor=pointer]: Assigned
                    - generic [ref=e242] [cursor=pointer]: In Progress
            - generic [ref=e243]:
              - generic [ref=e245]:
                - generic [ref=e249]:
                  - generic [ref=e250]:
                    - generic [ref=e252]:
                      - img "crown" [ref=e253]:
                        - img [ref=e254]
                      - text: Assigned By Manager
                    - generic [ref=e257]: 0 Content
                  - generic [ref=e258]:
                    - generic "Sort courses" [ref=e260] [cursor=pointer]:
                      - generic [ref=e261]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e262]
                      - img "down" [ref=e264]:
                        - img [ref=e265]
                    - button "Collapse section" [expanded] [ref=e268] [cursor=pointer]:
                      - img "up" [ref=e270]:
                        - img [ref=e271]
                - generic [ref=e274]:
                  - img "No data" [ref=e276]
                  - generic [ref=e288]: No courses assigned by manager
              - generic [ref=e290]:
                - generic [ref=e294]:
                  - generic [ref=e295]:
                    - generic [ref=e297]:
                      - img "user" [ref=e298]:
                        - img [ref=e299]
                      - text: Assigned By Admin
                    - generic [ref=e302]: 0 Content
                  - generic [ref=e303]:
                    - generic "Sort courses" [ref=e305] [cursor=pointer]:
                      - generic [ref=e306]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e307]
                      - img "down" [ref=e309]:
                        - img [ref=e310]
                    - button "Collapse section" [expanded] [ref=e313] [cursor=pointer]:
                      - img "up" [ref=e315]:
                        - img [ref=e316]
                - generic [ref=e319]:
                  - img "No data" [ref=e321]
                  - generic [ref=e333]: No courses assigned by admin
  - generic [ref=e334]: "0"
```

# Test source

```ts
  307 |       console.log("No due dates present — ordering check skipped");
  308 |       return;
  309 |     }
  310 | 
  311 |     if (dates.length === 1) {
  312 |       console.log("Only one due date present — ordering check trivially passes");
  313 |       return;
  314 |     }
  315 | 
  316 |     const isSorted = dates.every(
  317 |       (val, i) =>
  318 |         i === 0 ||
  319 |         (order === "asc" ? dates[i - 1] <= val : dates[i - 1] >= val),
  320 |     );
  321 | 
  322 |     expect(
  323 |       isSorted,
  324 |       `Due dates are not in ${order} order:\n${dates.join("\n")}`,
  325 |     ).toBe(true);
  326 | 
  327 |     console.log(`All due dates are displayed in ${order} order`);
  328 |   }
  329 | 
  330 |   async verifyAllDueDatesInRange(startDate, endDate) {
  331 |     const dueDates = this.page.locator('[class*="_listDueDate_"]');
  332 |     await dueDates.first.waitFor({state: "visible"});
  333 |     const count = await dueDates.count();
  334 |     for (let i = 0; i < count; i++) {
  335 |       const raw = (await dueDates.nth(i).textContent())
  336 |         ?.replace(/\s+/g, " ")
  337 |         .trim();
  338 |       const match = raw.match(/(\d{2})-(\d{2})-(\d{4})/);
  339 |       const date = match ? `${match[3]}-${match[2]}-${match[1]}` : undefined;
  340 |       const contentName = (
  341 |         await dueDates
  342 |           .nth(i)
  343 |           .locator(
  344 |             "xpath=following::div[@class='_listHeadingWrap_p5zy6_516'][1]",
  345 |           )
  346 |           .textContent()
  347 |       )
  348 |         ?.replace(/\s+/g, " ")
  349 |         .trim();
  350 |       if (!date || !(date >= startDate && date <= endDate)) {
  351 |         throw new Error(
  352 |           `Due date "${raw}" is not within ${startDate} – ${endDate}`,
  353 |         );
  354 |       }
  355 |       console.log(
  356 |         ` "${contentName}" due date is within the given start date "${startDate}" and End date "${endDate}" range `,
  357 |       );
  358 |     }
  359 |   }
  360 | 
  361 |   verifyContentTitlesSorted(names, order = "asc") {
  362 |     const cleaned = names.map((n) => n.replace(/\s+/g, " ").trim());
  363 |     const compare = (a, b) =>
  364 |       a.localeCompare(b, undefined, { sensitivity: "base", numeric: true });
  365 | 
  366 |     const isSorted = cleaned.every(
  367 |       (val, i) =>
  368 |         i === 0 ||
  369 |         (order === "asc"
  370 |           ? compare(cleaned[i - 1], val) <= 0
  371 |           : compare(cleaned[i - 1], val) >= 0),
  372 |     );
  373 | 
  374 |     expect(
  375 |       isSorted,
  376 |       `Names not in ${order} order:\n${cleaned.join("\n")}`,
  377 |     ).toBe(true);
  378 |   }
  379 | 
  380 |   async selectSkillCategory(skillCategory) {
  381 |     await this.skillCatgeoryDropdown.click();
  382 |     await this.page.getByText(skillCategory).click();
  383 |     await this.page
  384 |       .locator('[class*="_listPillSkillCategory_"]')
  385 |       .first()
  386 |       .waitFor({ state: "visible" });
  387 |   }
  388 | 
  389 |   async selectSkillName(skillName) {
  390 |     await this.skillNameDropdown.fill(skillName);
  391 |     await this.page.locator(".ant-select-item-option").first().click();
  392 |     await this.page
  393 |       .locator('[class*="_listPillSkillName_"]')
  394 |       .first()
  395 |       .waitFor({ state: "visible" });
  396 |   }
  397 | 
  398 |   async selectDueDates(dueDateStart, dueDateEnd) {
  399 |     await this.dueDateInputs.first().click();
  400 |     await this.dueDateInputs.nth(0).fill(dueDateStart);
  401 |     await this.dueDateInputs.nth(0).press("Enter");
  402 |     await this.dueDateInputs.nth(1).fill(dueDateEnd);
  403 |     await this.dueDateInputs.nth(1).press("Enter");
  404 |     await this.page
  405 |       .locator('[class*="_listDueDate_"]')
  406 |       .first()
> 407 |       .waitFor({ state: "visible" });
      |        ^ Error: locator.waitFor: Target page, context or browser has been closed
  408 |   }
  409 | 
  410 |   async selectPriority(priorityLevel) {
  411 |     this.page.getByText(priorityLevel, { exact: true }).click();
  412 |     await this.page
  413 |       .locator('[class*="_listPillPriority"]')
  414 |       .first()
  415 |       .waitFor({ state: "visible" });
  416 |   }
  417 | 
  418 |   async selectStatusAndReturnResponses(status, api_status) {
  419 |     const statusFragment = `status=${api_status.toLowerCase()}`;
  420 | 
  421 |     const makeMatcher = (source) => (resp) =>
  422 |       resp.url().includes(`source=${source}`) &&
  423 |       resp.url().toLowerCase().includes(statusFragment) &&
  424 |       resp.request().method() === "GET" &&
  425 |       resp.status() === 200;
  426 | 
  427 |     const managerPromise = this.page
  428 |       .waitForResponse(makeMatcher("MANAGER"), { timeout: 5000 })
  429 |       .catch(() => null);
  430 |     const adminPromise = this.page
  431 |       .waitForResponse(makeMatcher("ADMIN"), { timeout: 5000 })
  432 |       .catch(() => null);
  433 | 
  434 |     await this.page.getByText(status, { exact: true }).click();
  435 |     await this.page
  436 |       .locator('[class*="_cardListOnly_"]')
  437 |       .first()
  438 |       .waitFor({ state: "visible" });
  439 | 
  440 |     const [managerResp, adminResp] = await Promise.all([
  441 |       managerPromise,
  442 |       adminPromise,
  443 |     ]);
  444 |     return [managerResp, adminResp];
  445 |   }
  446 | 
  447 |   async selectManagerSortByOption(optionText) {
  448 |     await this.managerSortByDropdown.click();
  449 |     await this.page.locator(`//div[text()='${optionText}']`).click();
  450 |     await this.contentCard.first().waitFor({ state: "visible" });
  451 |   }
  452 | 
  453 |   async selectAdminSortByOption(optionText) {
  454 |     await this.adminSortByDropdown.click();
  455 |     await this.page.locator(`//div[text()='${optionText}']`).click();
  456 |     await this.contentCard.first().waitFor({ state: "visible" });
  457 |   }
  458 | 
  459 |   async getAllTitlesFromResponses(managerResp, adminResp) {
  460 |     const extractTitles = async (resp) => {
  461 |       if (!resp) return [];
  462 |       const body = await resp.json().catch(() => null);
  463 |       const courses = body?.data?.courses;
  464 |       if (!Array.isArray(courses)) return [];
  465 |       return courses.map((c) => c.title.replace(/\s+/g, " ").trim());
  466 |     };
  467 | 
  468 |     const managerTitles = await extractTitles(managerResp);
  469 |     const adminTitles = await extractTitles(adminResp);
  470 |     const allTitles = [...managerTitles, ...adminTitles];
  471 | 
  472 |     return allTitles;
  473 |   }
  474 | 
  475 |   async getContentNames() {
  476 |     const cards = this.page.locator('[class*="_listHeadingWrap_"]');
  477 |     await cards.first().waitFor({ state: "visible" });
  478 |     const names = await cards.allTextContents();
  479 |     return names.map((n) => n.replace(/\s+/g, " ").trim()).filter(Boolean);
  480 |   }
  481 | 
  482 |   async getManagerAssignedCardNames() {
  483 |     await this.assignedByManagerSection.waitFor({ state: "visible" });
  484 |     const cards = this.managerAssignedContentTitles;
  485 |     await cards.first().waitFor({ state: "visible" });
  486 |     return (await cards.allTextContents()).map((n) => n.trim()).filter(Boolean);
  487 |   }
  488 | 
  489 | 
  490 |   async getAdminAssignedCardNames() {
  491 |     await this.assignedByAdminSection.waitFor({ state: "visible" });
  492 |     const cards = this.adminAssignedContentTitles;
  493 |     await cards.first().waitFor({ state: "visible" });
  494 |     return (await cards.allTextContents()).map((n) => n.trim()).filter(Boolean);
  495 |   }
  496 | 
  497 |   async getContentProgressButton(contentName) {
  498 |     const btn = this.page.locator(
  499 |       `//span[text()='${contentName}']/following::button[1]`,
  500 |     );
  501 |     await btn.scrollIntoViewIfNeeded();
  502 |     await btn.waitFor({ state: "visible" });
  503 |     return btn;
  504 |   }
  505 | 
  506 |   async getLearningPathProgressPercentage() {
  507 |     const progressLocator = this.learningPathProgressLocator;
```