# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-filters-validation.spec.js >> Home Page filters validation >> Quick filters priority Optional validation
- Location: tests/specs/homepage/homepage-filters-validation.spec.js:53:8

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('[class*="_listPillPriority"]').nth(1).locator('xpath=preceding::div[@class=\'_listHeadingWrap_p5zy6_516\']') resolved to 2 elements:
    1) <div class="_listHeadingWrap_p5zy6_516">…</div> aka locator('div').filter({ hasText: /^Test sample learning 28723$/ })
    2) <div class="_listHeadingWrap_p5zy6_516">…</div> aka locator('div').filter({ hasText: /^Global security measures 2026$/ })

Call log:
  - waiting for locator('[class*="_listPillPriority"]').nth(1).locator('xpath=preceding::div[@class=\'_listHeadingWrap_p5zy6_516\']')

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - tabpanel "Assigned Courses" [active] [ref=e79]:
            - generic [ref=e81]:
              - generic [ref=e82]:
                - generic [ref=e85]: Learning Progress
                - generic [ref=e87]:
                  - generic [ref=e89]:
                    - application [ref=e92]
                    - generic:
                      - generic: "4"
                      - generic: Total Assigned
                  - generic [ref=e102]:
                    - generic [ref=e105]: 3 Assigned
                    - generic [ref=e108]: 0 In Progress
                    - generic [ref=e111]: 1 Completed
              - generic [ref=e112]:
                - generic [ref=e114]:
                  - generic [ref=e115]: Learning Trend
                  - button "Expand chart" [ref=e117] [cursor=pointer]:
                    - img "fullscreen" [ref=e119]:
                      - img [ref=e120]
                - application [ref=e126]:
                  - generic [ref=e173]:
                    - generic [ref=e174]:
                      - generic [ref=e176]: Dec
                      - generic [ref=e178]: Jan
                      - generic [ref=e180]: Feb
                      - generic [ref=e182]: Mar
                      - generic [ref=e184]: Apr
                      - generic [ref=e186]: May
                      - generic [ref=e188]: Jun
                    - generic [ref=e189]:
                      - generic [ref=e191]: "0"
                      - generic [ref=e193]: "5"
                      - generic [ref=e195]: "10"
                      - generic [ref=e197]: "18"
            - generic [ref=e198]:
              - generic [ref=e199]:
                - textbox "Search" [ref=e200]
                - img "search" [ref=e202]:
                  - img [ref=e203]
              - generic [ref=e205]:
                - generic [ref=e206]:
                  - generic: Skill category
                  - combobox [ref=e207]
                - img "down" [ref=e209]:
                  - img [ref=e210]
              - generic [ref=e212]:
                - generic [ref=e213]:
                  - generic: Skill Name
                  - combobox [ref=e214]
                - img "down" [ref=e216]:
                  - img [ref=e217]
              - generic [ref=e219]:
                - textbox "Due Date" [ref=e221]
                - generic "to" [ref=e223]:
                  - img "swap-right" [ref=e224]:
                    - img [ref=e225]
                - textbox "Due Date" [ref=e228]
                - generic:
                  - img "calendar":
                    - img
            - generic [ref=e231]:
              - strong [ref=e233]: Quick Filters
              - generic [ref=e234]:
                - generic [ref=e235]:
                  - generic [ref=e236]: Priority
                  - generic "Filter by priority" [ref=e237]:
                    - generic [ref=e238] [cursor=pointer]: Optional
                    - generic [ref=e239] [cursor=pointer]: Mandatory
                - generic [ref=e240]:
                  - generic [ref=e241]: Status
                  - generic "Filter by status" [ref=e242]:
                    - generic [ref=e243] [cursor=pointer]: Assigned
                    - generic [ref=e244] [cursor=pointer]: In Progress
            - generic [ref=e245]:
              - generic [ref=e247]:
                - generic [ref=e251]:
                  - generic [ref=e252]:
                    - generic [ref=e254]:
                      - img "crown" [ref=e255]:
                        - img [ref=e256]
                      - text: Assigned By Manager
                    - generic [ref=e259]: 3 Content
                  - generic [ref=e260]:
                    - generic "Sort courses" [ref=e262] [cursor=pointer]:
                      - generic [ref=e263]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e264]
                      - img "down" [ref=e266]:
                        - img [ref=e267]
                    - button "Collapse section" [expanded] [ref=e270] [cursor=pointer]:
                      - img "up" [ref=e272]:
                        - img [ref=e273]
                - generic [ref=e277]:
                  - generic [ref=e280] [cursor=pointer]:
                    - generic [ref=e281]:
                      - generic [ref=e283]:
                        - generic [ref=e284]: Due
                        - generic [ref=e285]: 23-05-2026
                      - generic [ref=e287]:
                        - status "Assigned learning path" [ref=e288]:
                          - img [ref=e289]:
                            - img [ref=e290]
                          - generic [ref=e292]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e294]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e295]:
                      - generic [ref=e297]: Test sample learning 28723
                      - generic [ref=e300]:
                        - generic [ref=e301]: Optional
                        - generic [ref=e302]: Assigned by Manager
                  - generic [ref=e305] [cursor=pointer]:
                    - generic [ref=e306]:
                      - generic [ref=e308]:
                        - generic [ref=e309]: Due
                        - generic [ref=e310]: 31-05-2026
                      - generic [ref=e312]:
                        - status "Individual Content" [ref=e313]:
                          - img [ref=e314]:
                            - img [ref=e315]
                          - generic [ref=e317]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e319]:
                          - img "step-forward" [ref=e321]:
                            - img [ref=e322]
                    - generic [ref=e324]:
                      - generic [ref=e326]: Global security measures 2026
                      - generic [ref=e328]:
                        - generic [ref=e329]:
                          - generic [ref=e331]: Administration
                          - generic [ref=e333]: Security Management
                        - separator [ref=e334]
                        - generic [ref=e335]:
                          - generic [ref=e336]: Optional
                          - generic [ref=e337]: Assigned by Manager
                  - generic [ref=e340] [cursor=pointer]:
                    - generic [ref=e341]:
                      - generic [ref=e343]:
                        - generic [ref=e344]: Due
                        - generic [ref=e345]: 28-05-2026
                      - generic [ref=e347]:
                        - status "Individual Content" [ref=e348]:
                          - img [ref=e349]:
                            - img [ref=e350]
                          - generic [ref=e352]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e354]:
                          - img "step-forward" [ref=e356]:
                            - img [ref=e357]
                    - generic [ref=e359]:
                      - generic [ref=e361]: Master Control Override Horizon Zero Dawn
                      - generic [ref=e363]:
                        - generic [ref=e364]:
                          - generic [ref=e366]: Crowd Entertainment, Cloud Engineering Core, Software Development Lifecycle (SDLC) Management, Code Review & Quality Assurance, Programming Proficiency, System Design & Architecture
                          - generic [ref=e368]: Vanishing Magic, Automation & IaC, Agile/Scrum Methodologies, Code Review Methodologies and Test-Driven Development (TDD) Practices, Software Development, Microservices Architecture Design, High-Level Design (HLD) & Low-Level Design (LLD), Cloud Architecture & Solution Design, Architecture Best Practices and Frameworks
                        - separator [ref=e369]
                        - generic [ref=e370]:
                          - generic [ref=e371]: Optional
                          - generic [ref=e372]: Assigned by Manager
              - generic [ref=e374]:
                - generic [ref=e378]:
                  - generic [ref=e379]:
                    - generic [ref=e381]:
                      - img "user" [ref=e382]:
                        - img [ref=e383]
                      - text: Assigned By Admin
                    - generic [ref=e386]: 0 Content
                  - generic [ref=e387]:
                    - generic "Sort courses" [ref=e389] [cursor=pointer]:
                      - generic [ref=e390]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e391]
                      - img "down" [ref=e393]:
                        - img [ref=e394]
                    - button "Collapse section" [expanded] [ref=e397] [cursor=pointer]:
                      - img "up" [ref=e399]:
                        - img [ref=e400]
                - generic [ref=e403]:
                  - img "No data" [ref=e405]
                  - generic [ref=e417]: No courses assigned by admin
  - generic [ref=e418]: "0"
```

# Test source

```ts
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
  191 |         await pill
  192 |           .locator(
  193 |             "xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]",
  194 |           )
  195 |           .textContent()
  196 |       )
  197 |         ?.replace(/\s+/g, " ")
  198 |         .trim();
  199 |       if (!text.includes(skillCategoryValue)) {
  200 |         throw new Error(
  201 |           `${contentName} does not have ${skillCategoryValue} as skill category`,
  202 |         );
  203 |       }
  204 |       console.log(
  205 |         `${contentName} has skill category ${skillCategoryValue} as skill category`,
  206 |       );
  207 |     }
  208 |   }
  209 | 
  210 |   async verifyOnlySelectedSkillNameContentsVisible(skillNameValue) {
  211 |     const pills = this.page.locator("._listPillSkillName_p5zy6_670");
  212 |     const count = await pills.count();
  213 |     for (let i = 0; i < count; i++) {
  214 |       const pill = pills.nth(i);
  215 |       const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
  216 |       console.log(`Pill[${i}] text = "${text}"`);
  217 |       const contentName = (
  218 |         await pill
  219 |           .locator(
  220 |             "xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]",
  221 |           )
  222 |           .textContent()
  223 |       )
  224 |         ?.replace(/\s+/g, " ")
  225 |         .trim();
  226 |       if (!text.includes(skillNameValue)) {
  227 |         throw new Error(
  228 |           `${contentName} does not have ${skillNameValue} as skill name`,
  229 |         );
  230 |       }
  231 |       console.log(
  232 |         `${contentName} has skill category ${skillNameValue} as skill name`,
  233 |       );
  234 |     }
  235 |   }
  236 | 
  237 |   async verifyDisplayedContentsPriority(priorityLevel) {
  238 |     const pills = this.page.locator('[class*="_listPillPriority"]');
  239 |     const count = await pills.count();
  240 |     for (let i = 0; i < count; i++) {
  241 |       const pill = pills.nth(i);
  242 |       const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
  243 |       console.log(`Pill[${i}] text = "${text}"`);
  244 |       const contentName = (
  245 |         await pill
  246 |           .locator("xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516']")
> 247 |           .textContent()
      |            ^ Error: locator.textContent: Error: strict mode violation: locator('[class*="_listPillPriority"]').nth(1).locator('xpath=preceding::div[@class=\'_listHeadingWrap_p5zy6_516\']') resolved to 2 elements:
  248 |       )
  249 |         ?.replace(/\s+/g, " ")
  250 |         .trim();
  251 |       if (!text.includes(priorityLevel)) {
  252 |         throw new Error(
  253 |           `${contentName} does not have ${priorityLevel} as priority Level`,
  254 |         );
  255 |       }
  256 |       console.log(`${contentName} has priority Level as ${priorityLevel}`);
  257 |     }
  258 |   }
  259 | 
  260 |   async selectSkillCategory(skillCategory) {
  261 |     await this.skillCatgeoryDropdown.click();
  262 |     await this.page.getByText(skillCategory).click();
  263 |     await this.page
  264 |       .locator('[class*="_listPillSkillCategory_"]')
  265 |       .first()
  266 |       .waitFor({ state: "visible" });
  267 |   }
  268 | 
  269 |   async selectSkillName(skillName) {
  270 |     await this.skillNameDropdown.fill(skillName);
  271 |     await this.page.locator(".ant-select-item-option").first().click();
  272 |     await this.page
  273 |       .locator('[class*="_listPillSkillName_"]')
  274 |       .first()
  275 |       .waitFor({ state: "visible" });
  276 |   }
  277 | 
  278 |   async selectDueDates(dueDateStart, dueDateEnd) {
  279 |     await this.dueDateInputs.first().click();
  280 |     await this.dueDateInputs.nth(0).fill(dueDateStart);
  281 |     await this.dueDateInputs.nth(0).press("Enter");
  282 |     await this.dueDateInputs.nth(1).fill(dueDateEnd);
  283 |     await this.dueDateInputs.nth(1).press("Enter");
  284 |     await this.page
  285 |       .locator('[class*="_listDueDate_"]')
  286 |       .first()
  287 |       .waitFor({ state: "visible" });
  288 |   }
  289 | 
  290 |   async selectPriority(priorityLevel) {
  291 |     this.page.getByText(priorityLevel, { exact: true }).click();
  292 |     await this.page
  293 |       .locator('[class*="_listPillPriority"]')
  294 |       .first()
  295 |       .waitFor({ state: "visible" });
  296 |   }
  297 | 
  298 |   async verifyAllDueDatesInRange(startDate, endDate) {
  299 |     const dueDates = this.page.locator('[class*="_listDueDate_"]');
  300 |     const count = await dueDates.count();
  301 |     for (let i = 0; i < count; i++) {
  302 |       const raw = (await dueDates.nth(i).textContent())
  303 |         ?.replace(/\s+/g, " ")
  304 |         .trim();
  305 |       const match = raw.match(/(\d{2})-(\d{2})-(\d{4})/);
  306 |       const date = match ? `${match[3]}-${match[2]}-${match[1]}` : undefined;
  307 |       const contentName = (
  308 |         await dueDates
  309 |           .nth(i)
  310 |           .locator(
  311 |             "xpath=following::div[@class='_listHeadingWrap_p5zy6_516'][1]",
  312 |           )
  313 |           .textContent()
  314 |       )
  315 |         ?.replace(/\s+/g, " ")
  316 |         .trim();
  317 |       if (!date || !(date >= startDate && date <= endDate)) {
  318 |         throw new Error(
  319 |           `Due date "${raw}" is not within ${startDate} – ${endDate}`,
  320 |         );
  321 |       }
  322 |       console.log(
  323 |         ` "${contentName}" due date is within the given start date "${startDate}" and End date "${endDate}" range `,
  324 |       );
  325 |     }
  326 |   }
  327 | 
  328 |   verifyNamesSorted(names, order = "asc") {
  329 |     const cleaned = names.map((n) => n.replace(/\s+/g, " ").trim());
  330 |     const compare = (a, b) =>
  331 |       a.localeCompare(b, undefined, { sensitivity: "base", numeric: true });
  332 | 
  333 |     const isSorted = cleaned.every(
  334 |       (val, i) =>
  335 |         i === 0 ||
  336 |         (order === "asc"
  337 |           ? compare(cleaned[i - 1], val) <= 0
  338 |           : compare(cleaned[i - 1], val) >= 0),
  339 |     );
  340 | 
  341 |     expect(
  342 |       isSorted,
  343 |       `Names not in ${order} order:\n${cleaned.join("\n")}`,
  344 |     ).toBe(true);
  345 |   }
  346 | 
  347 |   async getContentNames() {
```