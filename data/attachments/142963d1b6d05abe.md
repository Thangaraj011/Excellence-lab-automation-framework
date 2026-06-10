# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-filters-validation.spec.js >> Home Page filters validation >> Due Date filter validation
- Location: tests/specs/homepage/homepage-filters-validation.spec.js:29:10

# Error details

```
Error: Due date "30-05-2026" is not within 2026-05-04 – 2026-06-09
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
          - tabpanel "Assigned Courses" [ref=e79]:
            - generic [ref=e81]:
              - generic [ref=e82]:
                - generic [ref=e85]: Learning Progress
                - generic [ref=e87]:
                  - generic [ref=e89]:
                    - application [ref=e92]
                    - generic:
                      - generic: "13"
                      - generic: Total Assigned
                  - generic [ref=e105]:
                    - generic [ref=e108]: 9 Assigned
                    - generic [ref=e111]: 2 In Progress
                    - generic [ref=e114]: 2 Completed
              - generic [ref=e115]:
                - generic [ref=e117]:
                  - generic [ref=e118]: Learning Trend
                  - button "Expand chart" [ref=e120] [cursor=pointer]:
                    - img "fullscreen" [ref=e122]:
                      - img [ref=e123]
                - application [ref=e129]:
                  - generic [ref=e176]:
                    - generic [ref=e177]:
                      - generic [ref=e179]: Dec
                      - generic [ref=e181]: Jan
                      - generic [ref=e183]: Feb
                      - generic [ref=e185]: Mar
                      - generic [ref=e187]: Apr
                      - generic [ref=e189]: May
                      - generic [ref=e191]: Jun
                    - generic [ref=e192]:
                      - generic [ref=e194]: "0"
                      - generic [ref=e196]: "5"
                      - generic [ref=e198]: "10"
                      - generic [ref=e200]: "18"
            - generic [ref=e201]:
              - generic [ref=e202]:
                - textbox "Search" [ref=e203]
                - img "search" [ref=e205]:
                  - img [ref=e206]
              - generic [ref=e208]:
                - generic [ref=e209]:
                  - generic: Skill category
                  - combobox [ref=e210]
                - img "down" [ref=e212]:
                  - img [ref=e213]
              - generic [ref=e215]:
                - generic [ref=e216]:
                  - generic: Skill Name
                  - combobox [ref=e217]
                - img "down" [ref=e219]:
                  - img [ref=e220]
              - generic [ref=e222]:
                - textbox "Due Date" [ref=e224]: 2026-05-04
                - generic "to" [ref=e226]:
                  - img "swap-right" [ref=e227]:
                    - img [ref=e228]
                - textbox "Due Date" [active] [ref=e231]: 2026-06-09
                - generic:
                  - img "calendar":
                    - img
                - button "close-circle" [ref=e232] [cursor=pointer]:
                  - img "close-circle" [ref=e233]:
                    - img [ref=e234]
            - generic [ref=e238]:
              - strong [ref=e240]: Quick Filters
              - generic [ref=e241]:
                - generic [ref=e242]:
                  - generic [ref=e243]: Priority
                  - generic "Filter by priority" [ref=e244]:
                    - generic [ref=e245] [cursor=pointer]: Optional
                    - generic [ref=e246] [cursor=pointer]: Mandatory
                - generic [ref=e247]:
                  - generic [ref=e248]: Status
                  - generic "Filter by status" [ref=e249]:
                    - generic [ref=e250] [cursor=pointer]: Assigned
                    - generic [ref=e251] [cursor=pointer]: In Progress
            - generic [ref=e252]:
              - generic [ref=e254]:
                - generic [ref=e258]:
                  - generic [ref=e259]:
                    - generic [ref=e261]:
                      - img "crown" [ref=e262]:
                        - img [ref=e263]
                      - text: Assigned By Manager
                    - generic [ref=e266]: 9 Content
                  - generic [ref=e267]:
                    - generic "Sort courses" [ref=e269] [cursor=pointer]:
                      - generic [ref=e270]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e271]
                      - img "down" [ref=e273]:
                        - img [ref=e274]
                    - button "Collapse section" [expanded] [ref=e277] [cursor=pointer]:
                      - img "up" [ref=e279]:
                        - img [ref=e280]
                - generic [ref=e284]:
                  - generic [ref=e287] [cursor=pointer]:
                    - generic [ref=e288]:
                      - generic [ref=e290]:
                        - generic [ref=e291]: Due
                        - generic [ref=e292]: 30-05-2026
                      - generic [ref=e294]:
                        - status "Assigned learning path" [ref=e295]:
                          - img [ref=e296]:
                            - img [ref=e297]
                          - generic [ref=e299]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e301]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e302]:
                      - generic [ref=e304]: Thangaraj Testing sample 1
                      - generic [ref=e306]:
                        - generic [ref=e307]:
                          - generic [ref=e309]: GenAI, Data Science, Cloud Engineering Core
                          - generic [ref=e311]: Secure API Service, AI, Automation & IaC
                        - separator [ref=e312]
                        - generic [ref=e313]:
                          - generic [ref=e314]: Mandatory
                          - generic [ref=e315]: Assigned by Manager
                  - generic [ref=e318] [cursor=pointer]:
                    - generic [ref=e319]:
                      - generic [ref=e321]:
                        - generic [ref=e322]: Due
                        - generic [ref=e323]: 28-05-2026
                      - generic [ref=e325]:
                        - status "Assigned learning path" [ref=e326]:
                          - img [ref=e327]:
                            - img [ref=e328]
                          - generic [ref=e330]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e332]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e333]:
                      - generic [ref=e335]: Learning path new case
                      - generic [ref=e337]:
                        - generic [ref=e338]:
                          - generic [ref=e340]: Software Development Lifecycle (SDLC) Management
                          - generic [ref=e342]: Agile/Scrum Methodologies
                        - separator [ref=e343]
                        - generic [ref=e344]:
                          - generic [ref=e345]: Mandatory
                          - generic [ref=e346]: Assigned by Manager
                  - generic [ref=e349] [cursor=pointer]:
                    - generic [ref=e350]:
                      - generic [ref=e352]:
                        - generic [ref=e353]: Due
                        - generic [ref=e354]: 31-05-2026
                      - generic [ref=e356]:
                        - status "Assigned learning path" [ref=e357]:
                          - img [ref=e358]:
                            - img [ref=e359]
                          - generic [ref=e361]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e363]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e364]:
                      - generic [ref=e366]: New Magic Learning path 2026 99
                      - generic [ref=e368]:
                        - generic [ref=e369]:
                          - generic [ref=e371]: Crowd Entertainment
                          - generic [ref=e373]: Shape Shifting Magic
                        - separator [ref=e374]
                        - generic [ref=e375]:
                          - generic [ref=e376]: Mandatory
                          - generic [ref=e377]: Assigned by Manager
                  - generic [ref=e380] [cursor=pointer]:
                    - generic [ref=e381]:
                      - generic [ref=e383]:
                        - generic [ref=e384]: Due
                        - generic [ref=e385]: 31-05-2026
                      - generic [ref=e387]:
                        - status "Assigned learning path" [ref=e388]:
                          - img [ref=e389]:
                            - img [ref=e390]
                          - generic [ref=e392]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e394]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e395]:
                      - generic [ref=e397]: Typewriting Skills Learning 2026
                      - generic [ref=e399]:
                        - generic [ref=e400]:
                          - generic [ref=e402]: Software Development
                          - generic [ref=e404]: Python Basics
                        - separator [ref=e405]
                        - generic [ref=e406]:
                          - generic [ref=e407]: Mandatory
                          - generic [ref=e408]: Assigned by Manager
                  - generic [ref=e411] [cursor=pointer]:
                    - generic [ref=e412]:
                      - generic [ref=e414]:
                        - generic [ref=e415]: Due
                        - generic [ref=e416]: 28-05-2026
                      - generic [ref=e418]:
                        - status "Individual Content" [ref=e419]:
                          - img [ref=e420]:
                            - img [ref=e421]
                          - generic [ref=e423]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e425]:
                          - img "step-forward" [ref=e427]:
                            - img [ref=e428]
                    - generic [ref=e430]:
                      - generic [ref=e432]: Major comedy show 2026
                      - generic [ref=e435]:
                        - generic [ref=e436]: Mandatory
                        - generic [ref=e437]: Assigned by Manager
                  - generic [ref=e440] [cursor=pointer]:
                    - generic [ref=e441]:
                      - generic [ref=e443]:
                        - generic [ref=e444]: Due
                        - generic [ref=e445]: 31-05-2026
                      - generic [ref=e447]:
                        - status "Individual Content" [ref=e448]:
                          - img [ref=e449]:
                            - img [ref=e450]
                          - generic [ref=e452]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e454]:
                          - img "step-forward" [ref=e456]:
                            - img [ref=e457]
                    - generic [ref=e459]:
                      - generic [ref=e461]: "Software Architecture: REST API Design - The Complete Guide | Udemy"
                      - generic [ref=e463]:
                        - generic [ref=e464]:
                          - generic [ref=e466]: System Design & Architecture
                          - generic [ref=e468]: Microservices Architecture Design
                        - separator [ref=e469]
                        - generic [ref=e470]:
                          - generic [ref=e471]: Mandatory
                          - generic [ref=e472]: Assigned by Manager
                  - generic [ref=e475] [cursor=pointer]:
                    - generic [ref=e476]:
                      - generic [ref=e478]:
                        - generic [ref=e479]: Due
                        - generic [ref=e480]: 28-05-2026
                      - generic [ref=e482]:
                        - status "Individual Content" [ref=e483]:
                          - img [ref=e484]:
                            - img [ref=e485]
                          - generic [ref=e487]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e489]:
                          - img "step-forward" [ref=e491]:
                            - img [ref=e492]
                    - generic [ref=e494]:
                      - generic [ref=e496]: Master Control Override Horizon Zero Dawn
                      - generic [ref=e498]:
                        - generic [ref=e499]:
                          - generic [ref=e501]: Crowd Entertainment, System Design & Architecture, Cloud Engineering Core, Software Development Lifecycle (SDLC) Management, Code Review & Quality Assurance, Programming Proficiency
                          - generic [ref=e503]: Vanishing Magic, Microservices Architecture Design, High-Level Design (HLD) & Low-Level Design (LLD), Cloud Architecture & Solution Design, Architecture Best Practices and Frameworks, Automation & IaC, Agile/Scrum Methodologies, Code Review Methodologies and Test-Driven Development (TDD) Practices, Software Development
                        - separator [ref=e504]
                        - generic [ref=e505]:
                          - generic [ref=e506]: Optional
                          - generic [ref=e507]: Assigned by Admin and Manager
                  - generic [ref=e510] [cursor=pointer]:
                    - generic [ref=e511]:
                      - generic [ref=e513]:
                        - generic [ref=e514]: Due
                        - generic [ref=e515]: 23-05-2026
                      - generic [ref=e517]:
                        - status "Assigned learning path" [ref=e518]:
                          - img [ref=e519]:
                            - img [ref=e520]
                          - generic [ref=e522]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e524]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e525]:
                      - generic [ref=e527]: Test sample learning 28723
                      - generic [ref=e530]:
                        - generic [ref=e531]: Optional
                        - generic [ref=e532]: Assigned by Manager
                  - generic [ref=e535] [cursor=pointer]:
                    - generic [ref=e536]:
                      - generic [ref=e538]:
                        - generic [ref=e539]: Due
                        - generic [ref=e540]: 31-05-2026
                      - generic [ref=e542]:
                        - status "Individual Content" [ref=e543]:
                          - img [ref=e544]:
                            - img [ref=e545]
                          - generic [ref=e547]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e549]:
                          - img "step-forward" [ref=e551]:
                            - img [ref=e552]
                    - generic [ref=e554]:
                      - generic [ref=e556]: Global security measures 2026
                      - generic [ref=e558]:
                        - generic [ref=e559]:
                          - generic [ref=e561]: Administration
                          - generic [ref=e563]: Security Management
                        - separator [ref=e564]
                        - generic [ref=e565]:
                          - generic [ref=e566]: Optional
                          - generic [ref=e567]: Assigned by Manager
              - generic [ref=e569]:
                - generic [ref=e573]:
                  - generic [ref=e574]:
                    - generic [ref=e576]:
                      - img "user" [ref=e577]:
                        - img [ref=e578]
                      - text: Assigned By Admin
                    - generic [ref=e581]: 2 Content
                  - generic [ref=e582]:
                    - generic "Sort courses" [ref=e584] [cursor=pointer]:
                      - generic [ref=e585]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e586]
                      - img "down" [ref=e588]:
                        - img [ref=e589]
                    - button "Collapse section" [expanded] [ref=e592] [cursor=pointer]:
                      - img "up" [ref=e594]:
                        - img [ref=e595]
                - generic [ref=e599]:
                  - generic [ref=e602] [cursor=pointer]:
                    - generic [ref=e603]:
                      - generic [ref=e605]:
                        - generic [ref=e606]: Due
                        - generic [ref=e607]: 29-05-2026
                      - generic [ref=e609]:
                        - status "Individual Content" [ref=e610]:
                          - img [ref=e611]:
                            - img [ref=e612]
                          - generic [ref=e614]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e616]:
                          - img "step-forward" [ref=e618]:
                            - img [ref=e619]
                    - generic [ref=e621]:
                      - generic [ref=e623]: Introduction to Generative AI [Learning Path]
                      - generic [ref=e626]:
                        - generic [ref=e627]: Mandatory
                        - generic [ref=e628]: Assigned by Admin
                  - generic [ref=e631] [cursor=pointer]:
                    - generic [ref=e632]:
                      - generic [ref=e634]:
                        - generic [ref=e635]: Due
                        - generic [ref=e636]: 29-05-2026
                      - generic [ref=e638]:
                        - status "Individual Content" [ref=e639]:
                          - img [ref=e640]:
                            - img [ref=e641]
                          - generic [ref=e643]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e645]:
                          - img "step-forward" [ref=e647]:
                            - img [ref=e648]
                    - generic [ref=e650]:
                      - generic [ref=e652]: Introduction to Generative AI [Learning Path]
                      - generic [ref=e655]:
                        - generic [ref=e656]: Mandatory
                        - generic [ref=e657]: Assigned by Admin
  - generic [ref=e658]: "0"
```

# Test source

```ts
  103 |     await expect(this.page.getByText('Status')).toBeVisible();
  104 |     await expect(this.page.locator('span').filter({ hasText: 'Assigned' }).nth(1)).toBeVisible();
  105 |     await expect(this.page.locator('span').filter({ hasText: 'In Progress' }).first()).toBeVisible();
  106 |     await expect(this.page.locator('span').filter({ hasText: 'Completed' }).first()).toBeVisible();
  107 |   }
  108 | 
  109 |   async openIndividualContent(contentName){
  110 |     await this.page.getByText(contentName).click();
  111 | 
  112 |   }
  113 | 
  114 |   async openLearningPath(learningPathName){
  115 |     const content = this.page.getByText(learningPathName, { exact: true });
  116 |     await content.scrollIntoViewIfNeeded();
  117 |     await expect(content).toBeVisible();
  118 |     await this.page.getByText(learningPathName).click();
  119 |   }
  120 | 
  121 | 
  122 | 
  123 |   async verifySearchContentVisible(courseName, contentName) {
  124 |     await this.searchTextbox.waitFor({ state: 'visible' });
  125 |     await this.searchTextbox.fill(courseName);
  126 |     await this.page.waitForLoadState('domcontentloaded');
  127 |     await this.verifyContentVisible(contentName);
  128 |   }
  129 | 
  130 |   async verifyOnlySelectedSkillCategoryContentsVisible(skillCategoryValue) {
  131 |     const pills =  this.page.locator('._listPillSkillCategory_p5zy6_654');
  132 |     const count = await pills.count();
  133 |     for(let i=0;i<count;i++){
  134 |       const pill = pills.nth(i);
  135 |       const text = (await pill.textContent())?.replace(/\s+/g, ' ').trim();
  136 |       console.log(`Pill[${i}] text = "${text}"`);
  137 |       const contentName = (
  138 |         await pill
  139 |         .locator("xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]")
  140 |         .textContent()
  141 |       )?.replace(/\s+/g, ' ').trim();
  142 |       if(!text.includes(skillCategoryValue)){
  143 |         throw new Error(`${contentName} does not have ${skillCategoryValue} as skill category`);
  144 |       }
  145 |       console.log(`${contentName} has skill category ${skillCategoryValue} as skill category`);
  146 |     }
  147 |   }
  148 | 
  149 |   async verifyOnlySelectedSkillNameContentsVisible(skillNameValue) {
  150 |     const pills =  this.page.locator('._listPillSkillName_p5zy6_670');
  151 |     const count = await pills.count();
  152 |     for(let i=0;i<count;i++){
  153 |       const pill = pills.nth(i);
  154 |       const text = (await pill.textContent())?.replace(/\s+/g, ' ').trim();
  155 |       console.log(`Pill[${i}] text = "${text}"`);
  156 |       const contentName = (
  157 |         await pill
  158 |         .locator("xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]")
  159 |         .textContent()
  160 |       )?.replace(/\s+/g, ' ').trim();
  161 |       if(!text.includes(skillNameValue)){
  162 |         throw new Error(`${contentName} does not have ${skillNameValue} as skill name`);
  163 |       }
  164 |       console.log(`${contentName} has skill category ${skillNameValue} as skill name`);
  165 |     }
  166 |   }
  167 | 
  168 |   async selectSkillCategory(skillCategory) {
  169 |     await this.skillCatgeoryDropdown.click();
  170 |     await this.page.getByText(skillCategory).click();
  171 |     await this.page.locator('[class*="_listPillSkillCategory_"]').first().waitFor({ state: 'visible' });
  172 |   }
  173 | 
  174 |   async selectSkillName(skillName) {
  175 |     await this.skillNameDropdown.fill(skillName);
  176 |     await this.page.locator('.ant-select-item-option').first().click();
  177 |     await this.page.locator('[class*="_listPillSkillName_"]').first().waitFor({ state: 'visible' });
  178 | 
  179 |   }
  180 | 
  181 |   async selectDueDates(dueDateStart, dueDateEnd) {
  182 |     await this.dueDateInputs.first().click();
  183 |     await this.dueDateInputs.nth(0).fill(dueDateStart)
  184 |     await this.dueDateInputs.nth(0).press('Enter');
  185 |     await this.dueDateInputs.nth(1).fill(dueDateEnd)
  186 |     await this.dueDateInputs.nth(1).press('Enter');
  187 |     await this.page.locator('[class*="_listDueDate_"]').first().waitFor({ state: 'visible' });
  188 | 
  189 |   }
  190 | 
  191 |   async verifyAllDueDatesInRange(startDate, endDate) {
  192 |   const dueDates = this.page.locator('[class*="_listDueDate_"]');
  193 |   const count = await dueDates.count();
  194 |   for (let i = 0; i < count; i++) {
  195 |     const raw = (await dueDates.nth(i).textContent())?.replace(/\s+/g, ' ').trim();
  196 |     const date = raw.match(/\d{4}-\d{2}-\d{2}/)?.[0];
  197 |     const contentName = (
  198 |         await dueDates.nth(i)
  199 |         .locator("xpath=following::div[@class='_listHeadingWrap_p5zy6_516'][1]")
  200 |         .textContent()
  201 |       )?.replace(/\s+/g, ' ').trim();
  202 |     if (!date || !(date >= startDate && date <= endDate)) {
> 203 |       throw new Error(`Due date "${raw}" is not within ${startDate} – ${endDate}`);
      |             ^ Error: Due date "30-05-2026" is not within 2026-05-04 – 2026-06-09
  204 |     }
  205 |     console.log(`${contentName} due date is within the given start date ${startDate} and End date ${endDate} range `);
  206 |   }
  207 | }
  208 | 
  209 | verifyNamesSorted(names, order = 'asc') {
  210 |   const cleaned = names.map(n => n.replace(/\s+/g, ' ').trim());
  211 |   const compare = (a, b) => a.localeCompare(b, undefined, { sensitivity: 'base', numeric: true });
  212 | 
  213 |   const isSorted = cleaned.every((val, i) =>
  214 |     i === 0 || (order === 'asc'
  215 |       ? compare(cleaned[i - 1], val) <= 0
  216 |       : compare(cleaned[i - 1], val) >= 0)
  217 |   );
  218 | 
  219 |   expect(isSorted, `Names not in ${order} order:\n${cleaned.join('\n')}`).toBe(true);
  220 | }
  221 | 
  222 | 
  223 | 
  224 |   async getContentNames(){
  225 |     const cards = this.page.locator('[class*="_listHeadingWrap_"]');
  226 |     await cards.first().waitFor({ state: 'visible' });
  227 |     const names = await cards.allTextContents();
  228 |     return names.map(n => n.trim()).filter(Boolean);
  229 |   }
  230 | 
  231 |   async getManagerAssignedCardNames() {
  232 |     await this.assignedByManagerSection.waitFor({ state: 'visible' });
  233 |     const cards = this.managerAssignedContentTitles();
  234 |     await cards.first().waitFor({ state: 'visible' });
  235 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  236 |   }
  237 | 
  238 |     async getAdminAssignedCardNames() {
  239 |     await this.assignedByAdminSection.waitFor({ state: 'visible' });
  240 |     const cards = this.adminAssignedContentTitles()
  241 |     await cards.first().waitFor({ state: 'visible' });
  242 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  243 |   }
  244 | 
  245 | 
  246 |   async getContentProgressButton(contentName) {
  247 |     const btn = this.page.locator(
  248 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  249 |     );
  250 |     await btn.scrollIntoViewIfNeeded();
  251 |     await btn.waitFor({ state: 'visible' });
  252 |     return btn;
  253 |   }
  254 | 
  255 |   async getLearningPathProgressPercentage()
  256 |   {
  257 |     const progressLocator = this.learningPathProgressLocator;
  258 |     await progressLocator.waitFor({ state: 'visible' });
  259 |     const currentProgress = (await progressLocator.textContent())?.trim() ?? '';
  260 |     return currentProgress;
  261 |   }
  262 | 
  263 | 
  264 |   async getListedIndividualContentNames(){
  265 |     const contentNames = await this.page.locator(`//div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`).allTextContents();
  266 |     return contentNames;
  267 |   }
  268 | 
  269 | 
  270 |   async markAllIndividualContentsToCompleteStatus(contentNames)
  271 |   {
  272 |     for (const contentName of contentNames) {
  273 |       const progressButton = this.page.locator(
  274 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  275 |     );
  276 | 
  277 |       if ((await progressButton.count()) === 0) {
  278 |         console.log(`"${contentName}" already complete (no button) — skipping`);
  279 |         continue;
  280 |       }
  281 | 
  282 |       await progressButton.scrollIntoViewIfNeeded();
  283 |       await progressButton.hover();
  284 | 
  285 |       const tooltip = this.page.getByRole('tooltip');
  286 |       await tooltip.waitFor({ state: 'visible' });
  287 |       const message = ((await tooltip.textContent())?.trim() ?? '').toLowerCase();
  288 | 
  289 |       if(message.includes('in progress')){
  290 |         await progressButton.click();
  291 |         await this.verifyInProgressToast()
  292 |         await this.inProgressToast.waitFor({ state: 'hidden' });
  293 | 
  294 |         await progressButton.hover();
  295 |         await this.verifyInProgressTooltip();
  296 |         await progressButton.click();
  297 |         await this.confirmCompletion(contentName);
  298 | 
  299 |       } else if (message.includes('mark complete')){
  300 |         await progressButton.click();
  301 |         await this.confirmCompletion(contentName);
  302 |       }
  303 |   }
```