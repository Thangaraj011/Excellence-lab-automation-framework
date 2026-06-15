# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixture_based_tests/homepage-learning-path-customized.spec.js >> Homepage Learning path status update validation >> Entire Learning path status update to Completed validation
- Location: tests/specs/fixture_based_tests/homepage-learning-path-customized.spec.js:61:8

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('div').filter({ hasText: 'Marked as completed' }).first() to be hidden
    8 × locator resolved to visible <div class="ant-message ant-message-top css-xbngoj css-var-root ant-message-css-var">…</div>

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
          - separator [ref=e30]:
            - generic [ref=e32]: Admin
          - link "dashboard Dashboard" [ref=e34] [cursor=pointer]:
            - /url: /admin/dashboard
            - button "dashboard Dashboard" [ref=e35]:
              - img "dashboard" [ref=e37]:
                - img [ref=e38]
              - generic [ref=e40]: Dashboard
          - link "user Designation" [ref=e41] [cursor=pointer]:
            - /url: /role-management
            - button "user Designation" [ref=e42]:
              - img "user" [ref=e44]:
                - img [ref=e45]
              - generic [ref=e47]: Designation
          - link:
            - /url: /job-category-management
          - link "book Skills" [ref=e48] [cursor=pointer]:
            - /url: /skills-management
            - button "book Skills" [ref=e49]:
              - img "book" [ref=e51]:
                - img [ref=e52]
              - generic [ref=e54]: Skills
          - menu [ref=e55]:
            - menuitem "folder Content Catalogue" [ref=e56] [cursor=pointer]:
              - img "folder" [ref=e57]:
                - img [ref=e58]
              - generic [ref=e60]: Content Catalogue
            - menuitem "container Content Suggestion" [ref=e61] [cursor=pointer]:
              - img "container" [ref=e62]:
                - img [ref=e63]
              - generic [ref=e65]: Content Suggestion
          - menu [ref=e66]:
            - menuitem "clear Cleanup" [ref=e67] [cursor=pointer]:
              - img "clear" [ref=e68]:
                - img [ref=e69]
              - generic [ref=e71]: Cleanup
          - menu [ref=e72]:
            - menuitem "robot AI Metadata" [ref=e73] [cursor=pointer]:
              - img "robot" [ref=e74]:
                - img [ref=e75]
              - generic [ref=e77]: AI Metadata
          - link "bar-chart Content Performance" [ref=e78] [cursor=pointer]:
            - /url: /content-performance
            - button "bar-chart Content Performance" [ref=e79]:
              - img "bar-chart" [ref=e81]:
                - img [ref=e82]
              - generic [ref=e84]: Content Performance
          - link "link Job Category Skills" [ref=e85] [cursor=pointer]:
            - /url: /job-category-skills-mapping
            - button "link Job Category Skills" [ref=e86]:
              - img "link" [ref=e88]:
                - img [ref=e89]
              - generic [ref=e91]: Job Category Skills
          - link "apartment Role Based Learning" [ref=e92] [cursor=pointer]:
            - /url: /admin/role-based-learning
            - button "apartment Role Based Learning" [ref=e93]:
              - img "apartment" [ref=e95]:
                - img [ref=e96]
              - generic [ref=e98]: Role Based Learning
          - link "user-add People" [ref=e99] [cursor=pointer]:
            - /url: /bulk-assignment
            - button "user-add People" [ref=e100]:
              - img "user-add" [ref=e102]:
                - img [ref=e103]
              - generic [ref=e105]: People
          - link "history Assignment History" [ref=e106] [cursor=pointer]:
            - /url: /assignment-history/individual
            - button "history Assignment History" [ref=e107]:
              - img "history" [ref=e109]:
                - img [ref=e110]
              - generic [ref=e112]: Assignment History
        - generic [ref=e113]:
          - link "My profile" [ref=e114] [cursor=pointer]:
            - /url: /my-profile
            - img [ref=e116]
            - generic [ref=e117]: Janakjit Singh Sethi
          - generic [ref=e118]:
            - link "form Feedback" [ref=e119] [cursor=pointer]:
              - /url: /user-feedback
              - button "form Feedback" [ref=e120]:
                - img "form" [ref=e122]:
                  - img [ref=e123]
                - generic [ref=e126]: Feedback
            - button "menu-fold Minimize" [ref=e127] [cursor=pointer]:
              - img "menu-fold" [ref=e129]:
                - img [ref=e130]
              - generic [ref=e132]: Minimize
            - button "logout Logout" [ref=e133] [cursor=pointer]:
              - img "logout" [ref=e135]:
                - img [ref=e136]
              - generic [ref=e138]: Logout
    - main [ref=e140]:
      - generic [ref=e145]:
        - generic [ref=e146]:
          - button "Back to homepage" [ref=e147] [cursor=pointer]:
            - img "arrow-left" [ref=e149]:
              - img [ref=e150]
          - heading "DE | Associate | Week 1" [level=4] [ref=e152]
        - generic [ref=e154]:
          - generic [ref=e155]: In Progress
          - generic [ref=e156]: Mandatory
        - generic [ref=e157]:
          - progressbar "Learning path completion 38 percent" [ref=e159]
          - strong [ref=e164]: 38%
        - separator [ref=e165]
        - heading "Learning Path Content" [level=5] [ref=e166]
        - generic [ref=e169]:
          - strong [ref=e171]: Quick Filters
          - generic [ref=e172]:
            - generic [ref=e173]:
              - generic [ref=e174]: Priority
              - generic "Filter by priority" [ref=e175]:
                - generic [ref=e176] [cursor=pointer]: Optional
                - generic [ref=e177] [cursor=pointer]: Mandatory
            - generic [ref=e178]:
              - generic [ref=e179]: Status
              - generic "Filter by status" [ref=e180]:
                - generic [ref=e181] [cursor=pointer]: Assigned
                - generic [ref=e182] [cursor=pointer]: In Progress
                - generic [ref=e183] [cursor=pointer]: Completed
        - generic [ref=e184]:
          - generic [ref=e187] [cursor=pointer]:
            - generic [ref=e188]:
              - generic [ref=e190]:
                - generic [ref=e191]: Due
                - generic [ref=e192]: N/A
              - generic [ref=e194]:
                - status "Individual Content" [ref=e195]:
                  - img [ref=e196]:
                    - img [ref=e197]
                  - generic [ref=e199]: Individual Content
                - img "Completed" [ref=e201]:
                  - img "check-circle" [ref=e202]:
                    - img [ref=e203]
            - generic [ref=e207]:
              - generic [ref=e209]: Conceptual understanding of Subnets, Regions, AZ
              - generic [ref=e211]:
                - generic [ref=e212]:
                  - generic [ref=e214]: Cloud Platforms
                  - generic [ref=e216]: GCP
                - separator [ref=e217]
                - generic [ref=e218]:
                  - generic [ref=e219]: Mandatory
                  - generic [ref=e220]: Assigned by Admin
          - generic [ref=e223] [cursor=pointer]:
            - generic [ref=e224]:
              - generic [ref=e226]:
                - generic [ref=e227]: Due
                - generic [ref=e228]: N/A
              - generic [ref=e230]:
                - status "Individual Content" [ref=e231]:
                  - img [ref=e232]:
                    - img [ref=e233]
                  - generic [ref=e235]: Individual Content
                - img "Completed" [ref=e237]:
                  - img "check-circle" [ref=e238]:
                    - img [ref=e239]
            - generic [ref=e243]:
              - generic [ref=e245]: IAM Overview
              - generic [ref=e247]:
                - generic [ref=e248]:
                  - generic [ref=e250]: Strategic Data Application, GenAI
                  - generic [ref=e252]: Data Governance & Security, Secure API Service
                - separator [ref=e253]
                - generic [ref=e254]:
                  - generic [ref=e255]: Mandatory
                  - generic [ref=e256]: Assigned by Admin
          - generic [ref=e259] [cursor=pointer]:
            - generic [ref=e260]:
              - generic [ref=e262]:
                - generic [ref=e263]: Due
                - generic [ref=e264]: N/A
              - generic [ref=e266]:
                - status "Individual Content" [ref=e267]:
                  - img [ref=e268]:
                    - img [ref=e269]
                  - generic [ref=e271]: Individual Content
                - img "Completed" [ref=e273]:
                  - img "check-circle" [ref=e274]:
                    - img [ref=e275]
            - generic [ref=e279]:
              - generic [ref=e281]: Create IAM Roles and Service Accounts
              - generic [ref=e283]:
                - generic [ref=e284]:
                  - generic [ref=e286]: Strategic Data Application
                  - generic [ref=e288]: Data Governance & Security
                - separator [ref=e289]
                - generic [ref=e290]:
                  - generic [ref=e291]: Mandatory
                  - generic [ref=e292]: Assigned by Admin
          - generic [ref=e295] [cursor=pointer]:
            - generic [ref=e296]:
              - generic [ref=e298]:
                - generic [ref=e299]: Due
                - generic [ref=e300]: N/A
              - generic [ref=e302]:
                - status "Individual Content" [ref=e303]:
                  - img [ref=e304]:
                    - img [ref=e305]
                  - generic [ref=e307]: Individual Content
                - img "Completed" [ref=e309]:
                  - img "check-circle" [ref=e310]:
                    - img [ref=e311]
            - generic [ref=e315]:
              - generic [ref=e317]: What is BigQuery?
              - generic [ref=e319]:
                - generic [ref=e320]:
                  - generic [ref=e322]: Data Engineering
                  - generic [ref=e324]: Cloud BigQuery
                - separator [ref=e325]
                - generic [ref=e326]:
                  - generic [ref=e327]: Mandatory
                  - generic [ref=e328]: Assigned by Admin
          - generic [ref=e331] [cursor=pointer]:
            - generic [ref=e332]:
              - generic [ref=e334]:
                - generic [ref=e335]: Due
                - generic [ref=e336]: N/A
              - generic [ref=e338]:
                - status "Individual Content" [ref=e339]:
                  - img [ref=e340]:
                    - img [ref=e341]
                  - generic [ref=e343]: Individual Content
                - img "Completed" [ref=e345]:
                  - img "check-circle" [ref=e346]:
                    - img [ref=e347]
            - generic [ref=e351]:
              - generic [ref=e353]: BiqQuery Architecture
              - generic [ref=e355]:
                - generic [ref=e356]:
                  - generic [ref=e358]: Data Engineering
                  - generic [ref=e360]: Cloud BigQuery
                - separator [ref=e361]
                - generic [ref=e362]:
                  - generic [ref=e363]: Mandatory
                  - generic [ref=e364]: Assigned by Admin
          - generic [ref=e367] [cursor=pointer]:
            - generic [ref=e368]:
              - generic [ref=e370]:
                - generic [ref=e371]: Due
                - generic [ref=e372]: N/A
              - generic [ref=e374]:
                - status "Individual Content" [ref=e375]:
                  - img [ref=e376]:
                    - img [ref=e377]
                  - generic [ref=e379]: Individual Content
                - img "Completed" [ref=e381]:
                  - img "check-circle" [ref=e382]:
                    - img [ref=e383]
            - generic [ref=e387]:
              - generic [ref=e389]: Region and Multi-Region concept
              - generic [ref=e391]:
                - generic [ref=e392]:
                  - generic [ref=e394]: Data Engineering
                  - generic [ref=e396]: Cloud BigQuery
                - separator [ref=e397]
                - generic [ref=e398]:
                  - generic [ref=e399]: Mandatory
                  - generic [ref=e400]: Assigned by Admin
          - generic [ref=e403] [cursor=pointer]:
            - generic [ref=e404]:
              - generic [ref=e406]:
                - generic [ref=e407]: Due
                - generic [ref=e408]: N/A
              - generic [ref=e410]:
                - status "Individual Content" [ref=e411]:
                  - img [ref=e412]:
                    - img [ref=e413]
                  - generic [ref=e415]: Individual Content
                - button "Assigned, mark as in progress" [ref=e417]:
                  - img "step-forward" [ref=e419]:
                    - img [ref=e420]
            - generic [ref=e422]:
              - generic [ref=e424]: Introduction to loading data into BigQuery
              - generic [ref=e426]:
                - generic [ref=e427]:
                  - generic [ref=e429]: Data Engineering
                  - generic [ref=e431]: Cloud BigQuery
                - separator [ref=e432]
                - generic [ref=e433]:
                  - generic [ref=e434]: Mandatory
                  - generic [ref=e435]: Assigned by Admin
          - generic [ref=e438] [cursor=pointer]:
            - generic [ref=e439]:
              - generic [ref=e441]:
                - generic [ref=e442]: Due
                - generic [ref=e443]: N/A
              - generic [ref=e445]:
                - status "Individual Content" [ref=e446]:
                  - img [ref=e447]:
                    - img [ref=e448]
                  - generic [ref=e450]: Individual Content
                - button "Assigned, mark as in progress" [ref=e452]:
                  - img "step-forward" [ref=e454]:
                    - img [ref=e455]
            - generic [ref=e457]:
              - generic [ref=e459]: Streaming Data into BigQuery
              - generic [ref=e461]:
                - generic [ref=e462]:
                  - generic [ref=e464]: Data Engineering
                  - generic [ref=e466]: Cloud BigQuery
                - separator [ref=e467]
                - generic [ref=e468]:
                  - generic [ref=e469]: Mandatory
                  - generic [ref=e470]: Assigned by Admin
          - generic [ref=e473] [cursor=pointer]:
            - generic [ref=e474]:
              - generic [ref=e476]:
                - generic [ref=e477]: Due
                - generic [ref=e478]: N/A
              - generic [ref=e480]:
                - status "Individual Content" [ref=e481]:
                  - img [ref=e482]:
                    - img [ref=e483]
                  - generic [ref=e485]: Individual Content
                - button "Assigned, mark as in progress" [ref=e487]:
                  - img "step-forward" [ref=e489]:
                    - img [ref=e490]
            - generic [ref=e492]:
              - generic [ref=e494]: Create a merge query stored procedure
              - generic [ref=e496]:
                - generic [ref=e497]:
                  - generic [ref=e499]: Data Engineering
                  - generic [ref=e501]: Cloud BigQuery
                - separator [ref=e502]
                - generic [ref=e503]:
                  - generic [ref=e504]: Mandatory
                  - generic [ref=e505]: Assigned by Admin
          - generic [ref=e508] [cursor=pointer]:
            - generic [ref=e509]:
              - generic [ref=e511]:
                - generic [ref=e512]: Due
                - generic [ref=e513]: N/A
              - generic [ref=e515]:
                - status "Individual Content" [ref=e516]:
                  - img [ref=e517]:
                    - img [ref=e518]
                  - generic [ref=e520]: Individual Content
                - button "Assigned, mark as in progress" [ref=e522]:
                  - img "step-forward" [ref=e524]:
                    - img [ref=e525]
            - generic [ref=e527]:
              - generic [ref=e529]: Exporting table data into GCS ( Console & bq command )
              - generic [ref=e531]:
                - generic [ref=e532]:
                  - generic [ref=e534]: Data Engineering
                  - generic [ref=e536]: Cloud BigQuery
                - separator [ref=e537]
                - generic [ref=e538]:
                  - generic [ref=e539]: Mandatory
                  - generic [ref=e540]: Assigned by Admin
          - generic [ref=e543] [cursor=pointer]:
            - generic [ref=e544]:
              - generic [ref=e546]:
                - generic [ref=e547]: Due
                - generic [ref=e548]: N/A
              - generic [ref=e550]:
                - status "Individual Content" [ref=e551]:
                  - img [ref=e552]:
                    - img [ref=e553]
                  - generic [ref=e555]: Individual Content
                - button "Assigned, mark as in progress" [ref=e557]:
                  - img "step-forward" [ref=e559]:
                    - img [ref=e560]
            - generic [ref=e562]:
              - generic [ref=e564]: Execute SQL queries on BigQuery using Python
              - generic [ref=e566]:
                - generic [ref=e567]:
                  - generic [ref=e569]: Data Engineering
                  - generic [ref=e571]: Cloud BigQuery
                - separator [ref=e572]
                - generic [ref=e573]:
                  - generic [ref=e574]: Mandatory
                  - generic [ref=e575]: Assigned by Admin
          - generic [ref=e578] [cursor=pointer]:
            - generic [ref=e579]:
              - generic [ref=e581]:
                - generic [ref=e582]: Due
                - generic [ref=e583]: N/A
              - generic [ref=e585]:
                - status "Individual Content" [ref=e586]:
                  - img [ref=e587]:
                    - img [ref=e588]
                  - generic [ref=e590]: Individual Content
                - button "Assigned, mark as in progress" [ref=e592]:
                  - img "step-forward" [ref=e594]:
                    - img [ref=e595]
            - generic [ref=e597]:
              - generic [ref=e599]: Create External tables from GCS data files
              - generic [ref=e601]:
                - generic [ref=e602]:
                  - generic [ref=e604]: Data Engineering
                  - generic [ref=e606]: Cloud BigQuery
                - separator [ref=e607]
                - generic [ref=e608]:
                  - generic [ref=e609]: Mandatory
                  - generic [ref=e610]: Assigned by Admin
          - generic [ref=e613] [cursor=pointer]:
            - generic [ref=e614]:
              - generic [ref=e616]:
                - generic [ref=e617]: Due
                - generic [ref=e618]: N/A
              - generic [ref=e620]:
                - status "Individual Content" [ref=e621]:
                  - img [ref=e622]:
                    - img [ref=e623]
                  - generic [ref=e625]: Individual Content
                - button "In progress, mark complete" [ref=e627]:
                  - img [ref=e629]:
                    - img [ref=e630]
            - generic [ref=e633]:
              - generic [ref=e635]: Query external data source (Google Sheet, Cloud Storage, etc.)
              - generic [ref=e637]:
                - generic [ref=e638]:
                  - generic [ref=e640]: Data Engineering
                  - generic [ref=e642]: Cloud BigQuery
                - separator [ref=e643]
                - generic [ref=e644]:
                  - generic [ref=e645]: Mandatory
                  - generic [ref=e646]: Assigned by Admin
          - generic [ref=e649] [cursor=pointer]:
            - generic [ref=e650]:
              - generic [ref=e652]:
                - generic [ref=e653]: Due
                - generic [ref=e654]: N/A
              - generic [ref=e656]:
                - status "Individual Content" [ref=e657]:
                  - img [ref=e658]:
                    - img [ref=e659]
                  - generic [ref=e661]: Individual Content
                - button "Assigned, mark as in progress" [ref=e663]:
                  - img "step-forward" [ref=e665]:
                    - img [ref=e666]
            - generic [ref=e668]:
              - generic [ref=e670]: Federated Query ( Test with CloudSQL as External Source )
              - generic [ref=e672]:
                - generic [ref=e673]:
                  - generic [ref=e675]: Data Engineering
                  - generic [ref=e677]: Cloud BigQuery
                - separator [ref=e678]
                - generic [ref=e679]:
                  - generic [ref=e680]: Mandatory
                  - generic [ref=e681]: Assigned by Admin
          - generic [ref=e684] [cursor=pointer]:
            - generic [ref=e685]:
              - generic [ref=e687]:
                - generic [ref=e688]: Due
                - generic [ref=e689]: N/A
              - generic [ref=e691]:
                - status "Individual Content" [ref=e692]:
                  - img [ref=e693]:
                    - img [ref=e694]
                  - generic [ref=e696]: Individual Content
                - button "Assigned, mark as in progress" [ref=e698]:
                  - img "step-forward" [ref=e700]:
                    - img [ref=e701]
            - generic [ref=e703]:
              - generic [ref=e705]: Schema Design with Best Practices
              - generic [ref=e707]:
                - generic [ref=e708]:
                  - generic [ref=e710]: Data Engineering
                  - generic [ref=e712]: Cloud BigQuery
                - separator [ref=e713]
                - generic [ref=e714]:
                  - generic [ref=e715]: Mandatory
                  - generic [ref=e716]: Assigned by Admin
          - generic [ref=e719] [cursor=pointer]:
            - generic [ref=e720]:
              - generic [ref=e722]:
                - generic [ref=e723]: Due
                - generic [ref=e724]: N/A
              - generic [ref=e726]:
                - status "Individual Content" [ref=e727]:
                  - img [ref=e728]:
                    - img [ref=e729]
                  - generic [ref=e731]: Individual Content
                - button "Assigned, mark as in progress" [ref=e733]:
                  - img "step-forward" [ref=e735]:
                    - img [ref=e736]
            - generic [ref=e738]:
              - generic [ref=e740]: Create Partitioned & Clustered Tables
              - generic [ref=e742]:
                - generic [ref=e743]:
                  - generic [ref=e745]: Data Engineering
                  - generic [ref=e747]: Cloud BigQuery
                - separator [ref=e748]
                - generic [ref=e749]:
                  - generic [ref=e750]: Mandatory
                  - generic [ref=e751]: Assigned by Admin
  - generic [ref=e752]: "0"
  - generic [ref=e754]:
    - img "check-circle" [ref=e755]:
      - img [ref=e756]
    - generic [ref=e758]: Marked as completed
```

# Test source

```ts
  403 |         (order === "asc"
  404 |           ? compare(cleaned[i - 1], val) <= 0
  405 |           : compare(cleaned[i - 1], val) >= 0),
  406 |     );
  407 | 
  408 |     expect(
  409 |       isSorted,
  410 |       `Names not in ${order} order:\n${cleaned.join("\n")}`,
  411 |     ).toBe(true);
  412 |   }
  413 | 
  414 |   async getContentNames() {
  415 |     const cards = this.page.locator('[class*="_listHeadingWrap_"]');
  416 |     await cards.first().waitFor({ state: "visible" });
  417 |     const names = await cards.allTextContents();
  418 |     return names.map((n) => n.replace(/\s+/g, " ").trim()).filter(Boolean);
  419 |   }
  420 | 
  421 |   async getManagerAssignedCardNames() {
  422 |     await this.assignedByManagerSection.waitFor({ state: "visible" });
  423 |     const cards = this.managerAssignedContentTitles;
  424 |     await cards.first().waitFor({ state: "visible" });
  425 |     return (await cards.allTextContents()).map((n) => n.trim()).filter(Boolean);
  426 |   }
  427 | 
  428 |   async getAdminAssignedCardNames() {
  429 |     await this.assignedByAdminSection.waitFor({ state: "visible" });
  430 |     const cards = this.adminAssignedContentTitles;
  431 |     await cards.first().waitFor({ state: "visible" });
  432 |     return (await cards.allTextContents()).map((n) => n.trim()).filter(Boolean);
  433 |   }
  434 | 
  435 |   async getContentProgressButton(contentName) {
  436 |     const btn = this.page.locator(
  437 |       `//span[text()='${contentName}']/ancestor::div[@class='ant-card-body'][1]//button`,
  438 |     );
  439 |     await btn.scrollIntoViewIfNeeded();
  440 |     await btn.waitFor({ state: "visible" });
  441 |     return btn;
  442 |   }
  443 | 
  444 |   async getLearningPathProgressPercentage() {
  445 |     const progressLocator = this.learningPathProgressLocator;
  446 |     await progressLocator.waitFor({ state: "visible" });
  447 |     const currentProgress = (await progressLocator.textContent())?.trim() ?? "";
  448 |     return currentProgress;
  449 |   }
  450 | 
  451 |   async getListedIndividualContentNames() {
  452 |     const contentNames = await this.page
  453 |       .locator(
  454 |         `//div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`,
  455 |       )
  456 |       .allTextContents();
  457 |     return contentNames;
  458 |   }
  459 | 
  460 |   async markAllIndividualContentsToCompleteStatus(contentNames) {
  461 |     for (const contentName of contentNames) {
  462 |       const progressButton = this.page.locator(
  463 |         `//span[text()='${contentName}']/ancestor::div[@class='ant-card-body'][1]//button`,
  464 |       );
  465 | 
  466 |       if ((await progressButton.count()) === 0) {
  467 |         console.log(`"${contentName}" already complete (no button) — skipping`);
  468 |         continue;
  469 |       }
  470 | 
  471 |       await progressButton.scrollIntoViewIfNeeded();
  472 |       await progressButton.hover();
  473 | 
  474 |       const tooltip = this.page.getByRole("tooltip");
  475 |       await tooltip.waitFor({ state: "visible" });
  476 |       const message = (
  477 |         (await tooltip.textContent())?.trim() ?? ""
  478 |       ).toLowerCase();
  479 | 
  480 |       if (message.includes("in progress")) {
  481 |         await progressButton.click();
  482 |         await this.verifyInProgressToast();
  483 |         await this.inProgressToast.waitFor({ state: "hidden" });
  484 | 
  485 |         await progressButton.hover();
  486 |         await this.verifyInProgressTooltip();
  487 |         await progressButton.click();
  488 |         await this.confirmCompletion(contentName);
  489 |       } else if (message.includes("mark complete")) {
  490 |         await progressButton.click();
  491 |         await this.confirmCompletion(contentName);
  492 |       }
  493 |     }
  494 |     const finalProgressPercentage =
  495 |       await this.getLearningPathProgressPercentage();
  496 |     expect(finalProgressPercentage).toBe("100%");
  497 |   }
  498 | 
  499 |   async confirmCompletion(contentName) {
  500 |     await this.verifyConfirmCompletionDialog(contentName);
  501 |     await this.yesMarkCompleteButton.click();
  502 |     await this.verifyMarkCompleteToast();
> 503 |     await this.markCompleteToast.waitFor({ state: "hidden" });
      |                                  ^ Error: locator.waitFor: Target page, context or browser has been closed
  504 |   }
  505 | 
  506 |   async expectProgressChanged(previousProgress) {
  507 |     await expect(this.learningPathProgressLocator).not.toHaveText(
  508 |       previousProgress,
  509 |     );
  510 |   }
  511 | }
  512 | 
```