# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixture_based_tests/homepage-learning-path-customized.spec.js >> Homepage Learning path status update validation >> Learning path specific individual content status update to Inprogress validation
- Location: tests/specs/fixture_based_tests/homepage-learning-path-customized.spec.js:20:3

# Error details

```
TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('//span[text()=\'Magic entertainment new 2026\']/following::button[1]')

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
          - heading "New Magic Learning path 2026 99" [level=4] [ref=e75]
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
            - generic [ref=e130]: Magic entertainment new 2026
            - generic [ref=e132]:
              - generic [ref=e133]:
                - generic [ref=e135]: Crowd Entertainment
                - generic [ref=e137]: Shape Shifting Magic
              - separator [ref=e138]
              - generic [ref=e139]:
                - generic [ref=e140]: Mandatory
                - generic [ref=e141]: Assigned by Manager
  - generic [ref=e142]: "0"
```

# Test source

```ts
  338 | 
  339 |   async selectAdminSortByOption(optionText) {
  340 |     await this.adminSortByDropdown.click();
  341 |     await this.page
  342 |       .locator(".ant-select-item-option")
  343 |       .filter({ hasText: optionText })
  344 |       .click();
  345 |     await this.contentCard.first().waitFor({ state: "visible" });
  346 |   }
  347 | 
  348 |   async getAllTitlesFromResponses(managerResp, adminResp) {
  349 |     const extractTitles = async (resp) => {
  350 |       if (!resp) return [];
  351 |       const body = await resp.json().catch(() => null);
  352 |       const courses = body?.data?.courses;
  353 |       if (!Array.isArray(courses)) return [];
  354 |       return courses.map((c) => c.title.replace(/\s+/g, " ").trim());
  355 |     };
  356 | 
  357 |     const managerTitles = await extractTitles(managerResp);
  358 |     const adminTitles = await extractTitles(adminResp);
  359 |     const allTitles = [...managerTitles, ...adminTitles];
  360 | 
  361 |     return allTitles;
  362 |   }
  363 | 
  364 |   async verifyAllDueDatesInRange(startDate, endDate) {
  365 |     const dueDates = this.page.locator('[class*="_listDueDate_"]');
  366 |     const count = await dueDates.count();
  367 |     for (let i = 0; i < count; i++) {
  368 |       const raw = (await dueDates.nth(i).textContent())
  369 |         ?.replace(/\s+/g, " ")
  370 |         .trim();
  371 |       const match = raw.match(/(\d{2})-(\d{2})-(\d{4})/);
  372 |       const date = match ? `${match[3]}-${match[2]}-${match[1]}` : undefined;
  373 |       const contentName = (
  374 |         await dueDates
  375 |           .nth(i)
  376 |           .locator(
  377 |             "xpath=following::div[@class='_listHeadingWrap_p5zy6_516'][1]",
  378 |           )
  379 |           .textContent()
  380 |       )
  381 |         ?.replace(/\s+/g, " ")
  382 |         .trim();
  383 |       if (!date || !(date >= startDate && date <= endDate)) {
  384 |         throw new Error(
  385 |           `Due date "${raw}" is not within ${startDate} – ${endDate}`,
  386 |         );
  387 |       }
  388 |       console.log(
  389 |         ` "${contentName}" due date is within the given start date "${startDate}" and End date "${endDate}" range `,
  390 |       );
  391 |     }
  392 |   }
  393 | 
  394 |   verifyNamesSorted(names, order = "asc") {
  395 |     const cleaned = names.map((n) => n.replace(/\s+/g, " ").trim());
  396 |     const compare = (a, b) =>
  397 |       a.localeCompare(b, undefined, { sensitivity: "base", numeric: true });
  398 | 
  399 |     const isSorted = cleaned.every(
  400 |       (val, i) =>
  401 |         i === 0 ||
  402 |         (order === "asc"
  403 |           ? compare(cleaned[i - 1], val) <= 0
  404 |           : compare(cleaned[i - 1], val) >= 0),
  405 |     );
  406 | 
  407 |     expect(
  408 |       isSorted,
  409 |       `Names not in ${order} order:\n${cleaned.join("\n")}`,
  410 |     ).toBe(true);
  411 |   }
  412 | 
  413 |   async getContentNames() {
  414 |     const cards = this.page.locator('[class*="_listHeadingWrap_"]');
  415 |     await cards.first().waitFor({ state: "visible" });
  416 |     const names = await cards.allTextContents();
  417 |     return names.map((n) => n.replace(/\s+/g, " ").trim()).filter(Boolean);
  418 |   }
  419 | 
  420 |   async getManagerAssignedCardNames() {
  421 |     await this.assignedByManagerSection.waitFor({ state: "visible" });
  422 |     const cards = this.managerAssignedContentTitles;
  423 |     await cards.first().waitFor({ state: "visible" });
  424 |     return (await cards.allTextContents()).map((n) => n.trim()).filter(Boolean);
  425 |   }
  426 | 
  427 |   async getAdminAssignedCardNames() {
  428 |     await this.assignedByAdminSection.waitFor({ state: "visible" });
  429 |     const cards = this.adminAssignedContentTitles;
  430 |     await cards.first().waitFor({ state: "visible" });
  431 |     return (await cards.allTextContents()).map((n) => n.trim()).filter(Boolean);
  432 |   }
  433 | 
  434 |   async getContentProgressButton(contentName) {
  435 |     const btn = this.page.locator(
  436 |       `//span[text()='${contentName}']/following::button[1]`,
  437 |     );
> 438 |     await btn.scrollIntoViewIfNeeded();
      |               ^ TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 15000ms exceeded.
  439 |     await btn.waitFor({ state: "visible" });
  440 |     return btn;
  441 |   }
  442 | 
  443 |   async getLearningPathProgressPercentage() {
  444 |     const progressLocator = this.learningPathProgressLocator;
  445 |     await progressLocator.waitFor({ state: "visible" });
  446 |     const currentProgress = (await progressLocator.textContent())?.trim() ?? "";
  447 |     return currentProgress;
  448 |   }
  449 | 
  450 |   async getListedIndividualContentNames() {
  451 |     const contentNames = await this.page
  452 |       .locator(
  453 |         `//div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`,
  454 |       )
  455 |       .allTextContents();
  456 |     return contentNames;
  457 |   }
  458 | 
  459 |   async markAllIndividualContentsToCompleteStatus(contentNames) {
  460 |     for (const contentName of contentNames) {
  461 |       const progressButton = this.page.locator(
  462 |         `//span[text()='${contentName}']/following::button[1]`,
  463 |       );
  464 | 
  465 |       if ((await progressButton.count()) === 0) {
  466 |         console.log(`"${contentName}" already complete (no button) — skipping`);
  467 |         continue;
  468 |       }
  469 | 
  470 |       await progressButton.scrollIntoViewIfNeeded();
  471 |       await progressButton.hover();
  472 | 
  473 |       const tooltip = this.page.getByRole("tooltip");
  474 |       await tooltip.waitFor({ state: "visible" });
  475 |       const message = (
  476 |         (await tooltip.textContent())?.trim() ?? ""
  477 |       ).toLowerCase();
  478 | 
  479 |       if (message.includes("in progress")) {
  480 |         await progressButton.click();
  481 |         await this.verifyInProgressToast();
  482 |         await this.inProgressToast.waitFor({ state: "hidden" });
  483 | 
  484 |         await progressButton.hover();
  485 |         await this.verifyInProgressTooltip();
  486 |         await progressButton.click();
  487 |         await this.confirmCompletion(contentName);
  488 |       } else if (message.includes("mark complete")) {
  489 |         await progressButton.click();
  490 |         await this.confirmCompletion(contentName);
  491 |       }
  492 |     }
  493 |     const finalProgressPercentage =
  494 |       await this.getLearningPathProgressPercentage();
  495 |     expect(finalProgressPercentage).toBe("100%");
  496 |   }
  497 | 
  498 |   async confirmCompletion(contentName) {
  499 |     await this.verifyConfirmCompletionDialog(contentName);
  500 |     await this.yesMarkCompleteButton.click();
  501 |     await this.verifyMarkCompleteToast();
  502 |     await this.markCompleteToast.waitFor({ state: "hidden" });
  503 |   }
  504 | 
  505 |   async expectProgressChanged(previousProgress) {
  506 |     await expect(this.learningPathProgressLocator).not.toHaveText(
  507 |       previousProgress,
  508 |     );
  509 |   }
  510 | }
  511 | 
```