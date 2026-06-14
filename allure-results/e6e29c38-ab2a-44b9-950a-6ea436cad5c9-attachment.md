# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-filters-validation.spec.js >> Home Page filters validation >> Assigned By Admin sort By filter validation
- Location: tests/specs/homepage/homepage-filters-validation.spec.js:94:8

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('//span[normalize-space()=\'Assigned By Manager\']/ancestor::div[contains(@class,\'ant-card\')][1]/following-sibling::div[contains(@class,\'ant-card-body\')]//div[contains(@class,\'_listHeadingWrap_\')]').first() to be visible

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
                      - generic: "59"
                      - generic: Total Assigned
                  - generic [ref=e105]:
                    - generic [ref=e108]: 42 Assigned
                    - generic [ref=e111]: 9 In Progress
                    - generic [ref=e114]: 8 Completed
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
                - textbox "Due Date" [ref=e224]
                - generic "to" [ref=e226]:
                  - img "swap-right" [ref=e227]:
                    - img [ref=e228]
                - textbox "Due Date" [ref=e231]
                - generic:
                  - img "calendar":
                    - img
            - generic [ref=e234]:
              - strong [ref=e236]: Quick Filters
              - generic [ref=e237]:
                - generic [ref=e238]:
                  - generic [ref=e239]: Priority
                  - generic "Filter by priority" [ref=e240]:
                    - generic [ref=e241] [cursor=pointer]: Optional
                    - generic [ref=e242] [cursor=pointer]: Mandatory
                - generic [ref=e243]:
                  - generic [ref=e244]: Status
                  - generic "Filter by status" [ref=e245]:
                    - generic [ref=e246] [cursor=pointer]: Assigned
                    - generic [ref=e247] [cursor=pointer]: In Progress
            - generic [ref=e248]:
              - generic [ref=e250]:
                - generic [ref=e254]:
                  - generic [ref=e255]:
                    - generic [ref=e257]:
                      - img "crown" [ref=e258]:
                        - img [ref=e259]
                      - text: Assigned By Manager
                    - generic [ref=e262]: 11 Content
                  - generic [ref=e263]:
                    - generic [ref=e264]:
                      - generic: Priority (Mand...
                      - generic "Sort courses" [ref=e265] [cursor=pointer]:
                        - generic [ref=e266]:
                          - generic "Priority (Mand..." [ref=e267]
                          - combobox "Sort courses" [active] [ref=e268]
                        - img "close-circle" [ref=e270]:
                          - img [ref=e271]
                    - button "Collapse section" [expanded] [ref=e274] [cursor=pointer]:
                      - img "up" [ref=e276]:
                        - img [ref=e277]
                - generic [ref=e281]:
                  - generic [ref=e284] [cursor=pointer]:
                    - generic [ref=e285]:
                      - generic [ref=e287]:
                        - generic [ref=e288]: Due
                        - generic [ref=e289]: 30-06-2026
                      - generic [ref=e291]:
                        - status "Assigned learning path" [ref=e292]:
                          - img [ref=e293]:
                            - img [ref=e294]
                          - generic [ref=e296]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e298]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e299]:
                      - generic [ref=e301]: AI Engineering | Technical Expert Badges
                      - generic [ref=e303]:
                        - generic [ref=e304]:
                          - generic [ref=e306]: GenAI, Data Science, Cloud Engineering Core
                          - generic [ref=e308]: Secure API Service, AI, Automation & IaC
                        - separator [ref=e309]
                        - generic [ref=e310]:
                          - generic [ref=e311]: Mandatory
                          - generic [ref=e312]: Assigned by Manager
                  - generic [ref=e315] [cursor=pointer]:
                    - generic [ref=e316]:
                      - generic [ref=e318]:
                        - generic [ref=e319]: Due
                        - generic [ref=e320]: 28-05-2026
                      - generic [ref=e322]:
                        - status "Assigned learning path" [ref=e323]:
                          - img [ref=e324]:
                            - img [ref=e325]
                          - generic [ref=e327]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e329]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e330]:
                      - generic [ref=e332]: Learning path new case
                      - generic [ref=e334]:
                        - generic [ref=e335]:
                          - generic [ref=e337]: Software Development Lifecycle (SDLC) Management
                          - generic [ref=e339]: Agile/Scrum Methodologies
                        - separator [ref=e340]
                        - generic [ref=e341]:
                          - generic [ref=e342]: Mandatory
                          - generic [ref=e343]: Assigned by Manager
                  - generic [ref=e346] [cursor=pointer]:
                    - generic [ref=e347]:
                      - generic [ref=e349]:
                        - generic [ref=e350]: Due
                        - generic [ref=e351]: 28-05-2026
                      - generic [ref=e353]:
                        - status "Individual Content" [ref=e354]:
                          - img [ref=e355]:
                            - img [ref=e356]
                          - generic [ref=e358]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e360]:
                          - img "step-forward" [ref=e362]:
                            - img [ref=e363]
                    - generic [ref=e365]:
                      - generic [ref=e367]: Major comedy show 2026
                      - generic [ref=e370]:
                        - generic [ref=e371]: Mandatory
                        - generic [ref=e372]: Assigned by Manager
                  - generic [ref=e375] [cursor=pointer]:
                    - generic [ref=e376]:
                      - generic [ref=e378]:
                        - generic [ref=e379]: Due
                        - generic [ref=e380]: 31-05-2026
                      - generic [ref=e382]:
                        - status "Assigned learning path" [ref=e383]:
                          - img [ref=e384]:
                            - img [ref=e385]
                          - generic [ref=e387]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e389]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e390]:
                      - generic [ref=e392]: New Magic Learning path 2026 99
                      - generic [ref=e394]:
                        - generic [ref=e395]:
                          - generic [ref=e397]: Crowd Entertainment
                          - generic [ref=e399]: Shape Shifting Magic
                        - separator [ref=e400]
                        - generic [ref=e401]:
                          - generic [ref=e402]: Mandatory
                          - generic [ref=e403]: Assigned by Manager
                  - generic [ref=e406] [cursor=pointer]:
                    - generic [ref=e407]:
                      - generic [ref=e409]:
                        - generic [ref=e410]: Due
                        - generic [ref=e411]: 25-06-2026
                      - generic [ref=e413]:
                        - status "Individual Content" [ref=e414]:
                          - img [ref=e415]:
                            - img [ref=e416]
                          - generic [ref=e418]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e420]:
                          - img "step-forward" [ref=e422]:
                            - img [ref=e423]
                    - generic [ref=e425]:
                      - generic [ref=e427]: Partners use Gemini Enterpirse
                      - generic [ref=e429]:
                        - generic [ref=e430]:
                          - generic [ref=e432]: AI Fluency
                          - generic [ref=e434]: AI Fluency
                        - separator [ref=e435]
                        - generic [ref=e436]:
                          - generic [ref=e437]: Mandatory
                          - generic [ref=e438]: Assigned by Manager
                  - generic [ref=e441] [cursor=pointer]:
                    - generic [ref=e442]:
                      - generic [ref=e444]:
                        - generic [ref=e445]: Due
                        - generic [ref=e446]: 31-05-2026
                      - generic [ref=e448]:
                        - status "Individual Content" [ref=e449]:
                          - img [ref=e450]:
                            - img [ref=e451]
                          - generic [ref=e453]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e455]:
                          - img "step-forward" [ref=e457]:
                            - img [ref=e458]
                    - generic [ref=e460]:
                      - generic [ref=e462]: "Software Architecture: REST API Design - The Complete Guide | Udemy"
                      - generic [ref=e464]:
                        - generic [ref=e465]:
                          - generic [ref=e467]: System Design & Architecture
                          - generic [ref=e469]: Microservices Architecture Design
                        - separator [ref=e470]
                        - generic [ref=e471]:
                          - generic [ref=e472]: Mandatory
                          - generic [ref=e473]: Assigned by Manager
                  - generic [ref=e476] [cursor=pointer]:
                    - generic [ref=e477]:
                      - generic [ref=e479]:
                        - generic [ref=e480]: Due
                        - generic [ref=e481]: 30-05-2026
                      - generic [ref=e483]:
                        - status "Assigned learning path" [ref=e484]:
                          - img [ref=e485]:
                            - img [ref=e486]
                          - generic [ref=e488]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e490]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e491]:
                      - generic [ref=e493]: Thangaraj Testing sample 1
                      - generic [ref=e495]:
                        - generic [ref=e496]:
                          - generic [ref=e498]: GenAI, Data Science, Cloud Engineering Core
                          - generic [ref=e500]: Secure API Service, AI, Automation & IaC
                        - separator [ref=e501]
                        - generic [ref=e502]:
                          - generic [ref=e503]: Mandatory
                          - generic [ref=e504]: Assigned by Manager
                  - generic [ref=e507] [cursor=pointer]:
                    - generic [ref=e508]:
                      - generic [ref=e510]:
                        - generic [ref=e511]: Due
                        - generic [ref=e512]: 31-05-2026
                      - generic [ref=e514]:
                        - status "Assigned learning path" [ref=e515]:
                          - img [ref=e516]:
                            - img [ref=e517]
                          - generic [ref=e519]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e521]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e522]:
                      - generic [ref=e524]: Typewriting Skills Learning 2026
                      - generic [ref=e526]:
                        - generic [ref=e527]:
                          - generic [ref=e529]: Software Development
                          - generic [ref=e531]: Python Basics
                        - separator [ref=e532]
                        - generic [ref=e533]:
                          - generic [ref=e534]: Mandatory
                          - generic [ref=e535]: Assigned by Manager
                  - generic [ref=e538] [cursor=pointer]:
                    - generic [ref=e539]:
                      - generic [ref=e541]:
                        - generic [ref=e542]: Due
                        - generic [ref=e543]: 31-05-2026
                      - generic [ref=e545]:
                        - status "Individual Content" [ref=e546]:
                          - img [ref=e547]:
                            - img [ref=e548]
                          - generic [ref=e550]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e552]:
                          - img "step-forward" [ref=e554]:
                            - img [ref=e555]
                    - generic [ref=e557]:
                      - generic [ref=e559]: Global security measures 2026
                      - generic [ref=e561]:
                        - generic [ref=e562]:
                          - generic [ref=e564]: Administration
                          - generic [ref=e566]: Security Management
                        - separator [ref=e567]
                        - generic [ref=e568]:
                          - generic [ref=e569]: Optional
                          - generic [ref=e570]: Assigned by Manager
                  - generic [ref=e573] [cursor=pointer]:
                    - generic [ref=e574]:
                      - generic [ref=e576]:
                        - generic [ref=e577]: Due
                        - generic [ref=e578]: 28-05-2026
                      - generic [ref=e580]:
                        - status "Individual Content" [ref=e581]:
                          - img [ref=e582]:
                            - img [ref=e583]
                          - generic [ref=e585]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e587]:
                          - img "step-forward" [ref=e589]:
                            - img [ref=e590]
                    - generic [ref=e592]:
                      - generic [ref=e594]: Master Control Override Horizon Zero Dawn
                      - generic [ref=e596]:
                        - generic [ref=e597]:
                          - generic [ref=e599]: Crowd Entertainment, System Design & Architecture, Cloud Engineering Core, Software Development Lifecycle (SDLC) Management, Code Review & Quality Assurance, Programming Proficiency
                          - generic [ref=e601]: Vanishing Magic, Microservices Architecture Design, High-Level Design (HLD) & Low-Level Design (LLD), Cloud Architecture & Solution Design, Architecture Best Practices and Frameworks, Automation & IaC, Agile/Scrum Methodologies, Code Review Methodologies and Test-Driven Development (TDD) Practices, Software Development
                        - separator [ref=e602]
                        - generic [ref=e603]:
                          - generic [ref=e604]: Optional
                          - generic [ref=e605]: Assigned by Admin and Manager
                  - generic [ref=e608] [cursor=pointer]:
                    - generic [ref=e609]:
                      - generic [ref=e611]:
                        - generic [ref=e612]: Due
                        - generic [ref=e613]: 23-05-2026
                      - generic [ref=e615]:
                        - status "Assigned learning path" [ref=e616]:
                          - img [ref=e617]:
                            - img [ref=e618]
                          - generic [ref=e620]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e622]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e623]:
                      - generic [ref=e625]: Test sample learning 28723
                      - generic [ref=e628]:
                        - generic [ref=e629]: Optional
                        - generic [ref=e630]: Assigned by Manager
              - generic [ref=e632]:
                - generic [ref=e636]:
                  - generic [ref=e637]:
                    - generic [ref=e639]:
                      - img "user" [ref=e640]:
                        - img [ref=e641]
                      - text: Assigned By Admin
                    - generic [ref=e644]: 40 Content
                  - generic [ref=e645]:
                    - generic "Sort courses" [ref=e647] [cursor=pointer]:
                      - generic [ref=e648]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e649]
                      - img "down" [ref=e651]:
                        - img [ref=e652]
                    - button "Collapse section" [expanded] [ref=e655] [cursor=pointer]:
                      - img "up" [ref=e657]:
                        - img [ref=e658]
                - generic [ref=e662]:
                  - generic [ref=e665] [cursor=pointer]:
                    - generic [ref=e666]:
                      - generic [ref=e668]:
                        - generic [ref=e669]: Due
                        - generic [ref=e670]: N/A
                      - generic [ref=e672]:
                        - status "Individual Content" [ref=e673]:
                          - img [ref=e674]:
                            - img [ref=e675]
                          - generic [ref=e677]: Individual Content
                        - button "In progress, mark complete" [ref=e679]:
                          - img [ref=e681]:
                            - img [ref=e682]
                    - generic [ref=e685]:
                      - generic [ref=e687]: Generative AI Leader | Google Cloud Skills Boost
                      - generic [ref=e689]:
                        - generic [ref=e690]:
                          - generic [ref=e692]: AI Fluency
                          - generic [ref=e694]: AI Fluency
                        - separator [ref=e695]
                        - generic [ref=e696]:
                          - generic [ref=e697]: Mandatory
                          - generic [ref=e698]: Assigned by Admin
                  - generic [ref=e701] [cursor=pointer]:
                    - generic [ref=e702]:
                      - generic [ref=e704]:
                        - generic [ref=e705]: Due
                        - generic [ref=e706]: N/A
                      - generic [ref=e708]:
                        - status "Individual Content" [ref=e709]:
                          - img [ref=e710]:
                            - img [ref=e711]
                          - generic [ref=e713]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e715]:
                          - img "step-forward" [ref=e717]:
                            - img [ref=e718]
                    - generic [ref=e720]:
                      - generic [ref=e722]: LinkedIn Sales Navigator MASTERCLASS - Tutorial, Tips, Tricks, and Hacks to Find Leads Hands-on demonstration of using the website effectively.
                      - generic [ref=e724]:
                        - generic [ref=e725]:
                          - generic [ref=e727]: Consulting & Business Development Initiatives
                          - generic [ref=e729]: Sales Execution & Deal Closure
                        - separator [ref=e730]
                        - generic [ref=e731]:
                          - generic [ref=e732]: Mandatory
                          - generic [ref=e733]: Assigned by Admin
                  - generic [ref=e736] [cursor=pointer]:
                    - generic [ref=e737]:
                      - generic [ref=e739]:
                        - generic [ref=e740]: Due
                        - generic [ref=e741]: N/A
                      - generic [ref=e743]:
                        - status "Individual Content" [ref=e744]:
                          - img [ref=e745]:
                            - img [ref=e746]
                          - generic [ref=e748]: Individual Content
                        - button "In progress, mark complete" [ref=e750]:
                          - img [ref=e752]:
                            - img [ref=e753]
                    - generic [ref=e756]:
                      - generic [ref=e758]: "122. How To Be More Confident and Calm in Your Communication: Managing the \"ABC’s\" of... [Podcast, Stanford Graduate School of Business]"
                      - generic [ref=e760]:
                        - generic [ref=e761]:
                          - generic [ref=e763]: Stakeholder & Client Partnership
                          - generic [ref=e765]: Effective Communication
                        - separator [ref=e766]
                        - generic [ref=e767]:
                          - generic [ref=e768]: Mandatory
                          - generic [ref=e769]: Assigned by Admin
                  - generic [ref=e772] [cursor=pointer]:
                    - generic [ref=e773]:
                      - generic [ref=e775]:
                        - generic [ref=e776]: Due
                        - generic [ref=e777]: N/A
                      - generic [ref=e779]:
                        - status "Individual Content" [ref=e780]:
                          - img [ref=e781]:
                            - img [ref=e782]
                          - generic [ref=e784]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e786]:
                          - img "step-forward" [ref=e788]:
                            - img [ref=e789]
                    - generic [ref=e791]:
                      - generic [ref=e793]: "Optimize your Email Deliverability: Content | Heinz Marketing"
                      - generic [ref=e795]:
                        - generic [ref=e796]:
                          - generic [ref=e798]: Consulting & Business Development Initiatives
                          - generic [ref=e800]: Sales Execution & Deal Closure
                        - separator [ref=e801]
                        - generic [ref=e802]:
                          - generic [ref=e803]: Mandatory
                          - generic [ref=e804]: Assigned by Admin
                  - generic [ref=e807] [cursor=pointer]:
                    - generic [ref=e808]:
                      - generic [ref=e810]:
                        - generic [ref=e811]: Due
                        - generic [ref=e812]: N/A
                      - generic [ref=e814]:
                        - status "Individual Content" [ref=e815]:
                          - img [ref=e816]:
                            - img [ref=e817]
                          - generic [ref=e819]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e821]:
                          - img "step-forward" [ref=e823]:
                            - img [ref=e824]
                    - generic [ref=e826]:
                      - generic [ref=e828]: "Customer Profiles: How to Build and Use Them - Qualtrics"
                      - generic [ref=e830]:
                        - generic [ref=e831]:
                          - generic [ref=e833]: Consulting & Business Development Initiatives
                          - generic [ref=e835]: Sales Execution & Deal Closure
                        - separator [ref=e836]
                        - generic [ref=e837]:
                          - generic [ref=e838]: Mandatory
                          - generic [ref=e839]: Assigned by Admin
                  - generic [ref=e842] [cursor=pointer]:
                    - generic [ref=e843]:
                      - generic [ref=e845]:
                        - generic [ref=e846]: Due
                        - generic [ref=e847]: N/A
                      - generic [ref=e849]:
                        - status "Individual Content" [ref=e850]:
                          - img [ref=e851]:
                            - img [ref=e852]
                          - generic [ref=e854]: Individual Content
                        - button "In progress, mark complete" [ref=e856]:
                          - img [ref=e858]:
                            - img [ref=e859]
                    - generic [ref=e862]:
                      - generic [ref=e864]: Communicating and Working with Stakeholders | Google Project Management Certificate - YouTube
                      - generic [ref=e866]:
                        - generic [ref=e867]:
                          - generic [ref=e869]: Stakeholder & Client Partnership
                          - generic [ref=e871]: Stakeholder Management, Effective Communication
                        - separator [ref=e872]
                        - generic [ref=e873]:
                          - generic [ref=e874]: Mandatory
                          - generic [ref=e875]: Assigned by Admin
                  - generic [ref=e878] [cursor=pointer]:
                    - generic [ref=e879]:
                      - generic [ref=e881]:
                        - generic [ref=e882]: Due
                        - generic [ref=e883]: N/A
                      - generic [ref=e885]:
                        - status "Individual Content" [ref=e886]:
                          - img [ref=e887]:
                            - img [ref=e888]
                          - generic [ref=e890]: Individual Content
                        - button "In progress, mark complete" [ref=e892]:
                          - img [ref=e894]:
                            - img [ref=e895]
                    - generic [ref=e898]:
                      - generic [ref=e900]: Competitor Analysis and Market Research - Qualtrics
                      - generic [ref=e902]:
                        - generic [ref=e903]:
                          - generic [ref=e905]: Consulting & Business Development Initiatives
                          - generic [ref=e907]: Sales Execution & Deal Closure
                        - separator [ref=e908]
                        - generic [ref=e909]:
                          - generic [ref=e910]: Mandatory
                          - generic [ref=e911]: Assigned by Admin
                  - generic [ref=e914] [cursor=pointer]:
                    - generic [ref=e915]:
                      - generic [ref=e917]:
                        - generic [ref=e918]: Due
                        - generic [ref=e919]: N/A
                      - generic [ref=e921]:
                        - status "Individual Content" [ref=e922]:
                          - img [ref=e923]:
                            - img [ref=e924]
                          - generic [ref=e926]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e928]:
                          - img "step-forward" [ref=e930]:
                            - img [ref=e931]
                    - generic [ref=e933]:
                      - generic [ref=e935]: "AI Boost Bites: Your Edge in the AI-Powered World | Google Cloud Skills Boost"
                      - generic [ref=e937]:
                        - generic [ref=e938]:
                          - generic [ref=e940]: AI Fluency
                          - generic [ref=e942]: AI Fluency
                        - separator [ref=e943]
                        - generic [ref=e944]:
                          - generic [ref=e945]: Mandatory
                          - generic [ref=e946]: Assigned by Admin
                  - generic [ref=e949] [cursor=pointer]:
                    - generic [ref=e950]:
                      - generic [ref=e952]:
                        - generic [ref=e953]: Due
                        - generic [ref=e954]: N/A
                      - generic [ref=e956]:
                        - status "Individual Content" [ref=e957]:
                          - img [ref=e958]:
                            - img [ref=e959]
                          - generic [ref=e961]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e963]:
                          - img "step-forward" [ref=e965]:
                            - img [ref=e966]
                    - generic [ref=e968]:
                      - generic [ref=e970]: "Finance: What Managers Need to Know [HBR]"
                      - generic [ref=e972]:
                        - generic [ref=e973]:
                          - generic [ref=e975]: Financial Acumen
                          - generic [ref=e977]: Financial Acumen
                        - separator [ref=e978]
                        - generic [ref=e979]:
                          - generic [ref=e980]: Mandatory
                          - generic [ref=e981]: Assigned by Admin
                  - generic [ref=e984] [cursor=pointer]:
                    - generic [ref=e985]:
                      - generic [ref=e987]:
                        - generic [ref=e988]: Due
                        - generic [ref=e989]: N/A
                      - generic [ref=e991]:
                        - status "Individual Content" [ref=e992]:
                          - img [ref=e993]:
                            - img [ref=e994]
                          - generic [ref=e996]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e998]:
                          - img "step-forward" [ref=e1000]:
                            - img [ref=e1001]
                    - generic [ref=e1003]:
                      - generic [ref=e1005]: What Does Lead Qualification Mean? | How to Qualify Sales Leads Goes over frameworks used to qualify leads, with examples.
                      - generic [ref=e1007]:
                        - generic [ref=e1008]:
                          - generic [ref=e1010]: Consulting & Business Development Initiatives
                          - generic [ref=e1012]: Consultative Selling
                        - separator [ref=e1013]
                        - generic [ref=e1014]:
                          - generic [ref=e1015]: Mandatory
                          - generic [ref=e1016]: Assigned by Admin
                  - generic [ref=e1019] [cursor=pointer]:
                    - generic [ref=e1020]:
                      - generic [ref=e1022]:
                        - generic [ref=e1023]: Due
                        - generic [ref=e1024]: N/A
                      - generic [ref=e1026]:
                        - status "Individual Content" [ref=e1027]:
                          - img [ref=e1028]:
                            - img [ref=e1029]
                          - generic [ref=e1031]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1033]:
                          - img "step-forward" [ref=e1035]:
                            - img [ref=e1036]
                    - generic [ref=e1038]:
                      - generic [ref=e1040]: 5 Rules for Communicating Effectively with Executives
                      - generic [ref=e1042]:
                        - generic [ref=e1043]:
                          - generic [ref=e1045]: Stakeholder & Client Partnership
                          - generic [ref=e1047]: Effective Communication
                        - separator [ref=e1048]
                        - generic [ref=e1049]:
                          - generic [ref=e1050]: Mandatory
                          - generic [ref=e1051]: Assigned by Admin
                  - generic [ref=e1054] [cursor=pointer]:
                    - generic [ref=e1055]:
                      - generic [ref=e1057]:
                        - generic [ref=e1058]: Due
                        - generic [ref=e1059]: N/A
                      - generic [ref=e1061]:
                        - status "Individual Content" [ref=e1062]:
                          - img [ref=e1063]:
                            - img [ref=e1064]
                          - generic [ref=e1066]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1068]:
                          - img "step-forward" [ref=e1070]:
                            - img [ref=e1071]
                    - generic [ref=e1073]:
                      - generic [ref=e1075]: "How to Control Your Emotions During a Difficult Conversation: The Harvard Business Review Guide"
                      - generic [ref=e1077]:
                        - generic [ref=e1078]:
                          - generic [ref=e1080]: Stakeholder & Client Partnership
                          - generic [ref=e1082]: Effective Communication
                        - separator [ref=e1083]
                        - generic [ref=e1084]:
                          - generic [ref=e1085]: Mandatory
                          - generic [ref=e1086]: Assigned by Admin
                  - generic [ref=e1089] [cursor=pointer]:
                    - generic [ref=e1090]:
                      - generic [ref=e1092]:
                        - generic [ref=e1093]: Due
                        - generic [ref=e1094]: N/A
                      - generic [ref=e1096]:
                        - status "Individual Content" [ref=e1097]:
                          - img [ref=e1098]:
                            - img [ref=e1099]
                          - generic [ref=e1101]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1103]:
                          - img "step-forward" [ref=e1105]:
                            - img [ref=e1106]
                    - generic [ref=e1108]:
                      - generic [ref=e1110]: Master the Art of Questions to Unlock Meaningful Conversations - YouTube In an entertaining & interactive way, demonstrates "intentional communication" and the art of asking right questions.
                      - generic [ref=e1112]:
                        - generic [ref=e1113]:
                          - generic [ref=e1115]: Consulting & Business Development Initiatives, Stakeholder & Client Partnership
                          - generic [ref=e1117]: Consultative Selling, Stakeholder Management
                        - separator [ref=e1118]
                        - generic [ref=e1119]:
                          - generic [ref=e1120]: Mandatory
                          - generic [ref=e1121]: Assigned by Admin
                  - generic [ref=e1124] [cursor=pointer]:
                    - generic [ref=e1125]:
                      - generic [ref=e1127]:
                        - generic [ref=e1128]: Due
                        - generic [ref=e1129]: N/A
                      - generic [ref=e1131]:
                        - status "Individual Content" [ref=e1132]:
                          - img [ref=e1133]:
                            - img [ref=e1134]
                          - generic [ref=e1136]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1138]:
                          - img "step-forward" [ref=e1140]:
                            - img [ref=e1141]
                    - generic [ref=e1143]:
                      - generic [ref=e1145]: 23 Elevator Pitch Examples to Inspire Your Own [+Templates & Expert Tips]
                      - generic [ref=e1147]:
                        - generic [ref=e1148]:
                          - generic [ref=e1150]: Consulting & Business Development Initiatives
                          - generic [ref=e1152]: Sales Execution & Deal Closure
                        - separator [ref=e1153]
                        - generic [ref=e1154]:
                          - generic [ref=e1155]: Mandatory
                          - generic [ref=e1156]: Assigned by Admin
                  - generic [ref=e1159] [cursor=pointer]:
                    - generic [ref=e1160]:
                      - generic [ref=e1162]:
                        - generic [ref=e1163]: Due
                        - generic [ref=e1164]: N/A
                      - generic [ref=e1166]:
                        - status "Individual Content" [ref=e1167]:
                          - img [ref=e1168]:
                            - img [ref=e1169]
                          - generic [ref=e1171]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1173]:
                          - img "step-forward" [ref=e1175]:
                            - img [ref=e1176]
                    - generic [ref=e1178]:
                      - generic [ref=e1180]: You Must Understand Your Competition | Wolters Kluwer
                      - generic [ref=e1182]:
                        - generic [ref=e1183]:
                          - generic [ref=e1185]: Consulting & Business Development Initiatives
                          - generic [ref=e1187]: Sales Execution & Deal Closure, Commercial Account Management
                        - separator [ref=e1188]
                        - generic [ref=e1189]:
                          - generic [ref=e1190]: Mandatory
                          - generic [ref=e1191]: Assigned by Admin
                  - generic [ref=e1194] [cursor=pointer]:
                    - generic [ref=e1195]:
                      - generic [ref=e1197]:
                        - generic [ref=e1198]: Due
                        - generic [ref=e1199]: N/A
                      - generic [ref=e1201]:
                        - status "Individual Content" [ref=e1202]:
                          - img [ref=e1203]:
                            - img [ref=e1204]
                          - generic [ref=e1206]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1208]:
                          - img "step-forward" [ref=e1210]:
                            - img [ref=e1211]
                    - generic [ref=e1213]:
                      - generic [ref=e1215]: The science behind dramatically better conversations | Charles Duhigg | TEDxManchester - YouTube Speaks about the role of precise questions to understand the other person's wishes best. "The matching principle".
                      - generic [ref=e1217]:
                        - generic [ref=e1218]:
                          - generic [ref=e1220]: Consulting & Business Development Initiatives, Stakeholder & Client Partnership
                          - generic [ref=e1222]: Consultative Selling, Stakeholder Management
                        - separator [ref=e1223]
                        - generic [ref=e1224]:
                          - generic [ref=e1225]: Mandatory
                          - generic [ref=e1226]: Assigned by Admin
                  - generic [ref=e1229] [cursor=pointer]:
                    - generic [ref=e1230]:
                      - generic [ref=e1232]:
                        - generic [ref=e1233]: Due
                        - generic [ref=e1234]: N/A
                      - generic [ref=e1236]:
                        - status "Individual Content" [ref=e1237]:
                          - img [ref=e1238]:
                            - img [ref=e1239]
                          - generic [ref=e1241]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1243]:
                          - img "step-forward" [ref=e1245]:
                            - img [ref=e1246]
                    - generic [ref=e1248]:
                      - generic [ref=e1250]: Fundamentals of Finance & Economics for Businesses – Crash Course
                      - generic [ref=e1252]:
                        - generic [ref=e1253]:
                          - generic [ref=e1255]: Financial Acumen
                          - generic [ref=e1257]: Financial Acumen
                        - separator [ref=e1258]
                        - generic [ref=e1259]:
                          - generic [ref=e1260]: Mandatory
                          - generic [ref=e1261]: Assigned by Admin
                  - generic [ref=e1264] [cursor=pointer]:
                    - generic [ref=e1265]:
                      - generic [ref=e1267]:
                        - generic [ref=e1268]: Due
                        - generic [ref=e1269]: N/A
                      - generic [ref=e1271]:
                        - status "Individual Content" [ref=e1272]:
                          - img [ref=e1273]:
                            - img [ref=e1274]
                          - generic [ref=e1276]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1278]:
                          - img "step-forward" [ref=e1280]:
                            - img [ref=e1281]
                    - generic [ref=e1283]:
                      - generic [ref=e1285]: "Think Fast, Talk Smart: Communication Techniques - YouTube"
                      - generic [ref=e1287]:
                        - generic [ref=e1288]:
                          - generic [ref=e1290]: Stakeholder & Client Partnership
                          - generic [ref=e1292]: Effective Communication
                        - separator [ref=e1293]
                        - generic [ref=e1294]:
                          - generic [ref=e1295]: Mandatory
                          - generic [ref=e1296]: Assigned by Admin
                  - generic [ref=e1299] [cursor=pointer]:
                    - generic [ref=e1300]:
                      - generic [ref=e1302]:
                        - generic [ref=e1303]: Due
                        - generic [ref=e1304]: N/A
                      - generic [ref=e1306]:
                        - status "Individual Content" [ref=e1307]:
                          - img [ref=e1308]:
                            - img [ref=e1309]
                          - generic [ref=e1311]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1313]:
                          - img "step-forward" [ref=e1315]:
                            - img [ref=e1316]
                    - generic [ref=e1318]:
                      - generic [ref=e1320]: Mastering Sales Qualification for Effective Lead Conversion | Gong
                      - generic [ref=e1322]:
                        - generic [ref=e1323]:
                          - generic [ref=e1325]: Consulting & Business Development Initiatives
                          - generic [ref=e1327]: Sales Execution & Deal Closure
                        - separator [ref=e1328]
                        - generic [ref=e1329]:
                          - generic [ref=e1330]: Mandatory
                          - generic [ref=e1331]: Assigned by Admin
                  - generic [ref=e1334] [cursor=pointer]:
                    - generic [ref=e1335]:
                      - generic [ref=e1337]:
                        - generic [ref=e1338]: Due
                        - generic [ref=e1339]: N/A
                      - generic [ref=e1341]:
                        - status "Individual Content" [ref=e1342]:
                          - img [ref=e1343]:
                            - img [ref=e1344]
                          - generic [ref=e1346]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1348]:
                          - img "step-forward" [ref=e1350]:
                            - img [ref=e1351]
                    - generic [ref=e1353]:
                      - generic [ref=e1355]: Prompt Engineering Guide
                      - generic [ref=e1357]:
                        - generic [ref=e1358]:
                          - generic [ref=e1360]: AI Fluency
                          - generic [ref=e1362]: AI Fluency
                        - separator [ref=e1363]
                        - generic [ref=e1364]:
                          - generic [ref=e1365]: Mandatory
                          - generic [ref=e1366]: Assigned by Admin
                  - generic [ref=e1369] [cursor=pointer]:
                    - generic [ref=e1370]:
                      - generic [ref=e1372]:
                        - generic [ref=e1373]: Due
                        - generic [ref=e1374]: N/A
                      - generic [ref=e1376]:
                        - status "Individual Content" [ref=e1377]:
                          - img [ref=e1378]:
                            - img [ref=e1379]
                          - generic [ref=e1381]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1383]:
                          - img "step-forward" [ref=e1385]:
                            - img [ref=e1386]
                    - generic [ref=e1388]:
                      - generic [ref=e1390]: Challenger Sales Model Summary & Tips | Pipedrive Speaks of pushing the customer to get out of their comfort zone.
                      - generic [ref=e1392]:
                        - generic [ref=e1393]:
                          - generic [ref=e1395]: Consulting & Business Development Initiatives
                          - generic [ref=e1397]: Consultative Selling
                        - separator [ref=e1398]
                        - generic [ref=e1399]:
                          - generic [ref=e1400]: Mandatory
                          - generic [ref=e1401]: Assigned by Admin
                  - generic [ref=e1404] [cursor=pointer]:
                    - generic [ref=e1405]:
                      - generic [ref=e1407]:
                        - generic [ref=e1408]: Due
                        - generic [ref=e1409]: N/A
                      - generic [ref=e1411]:
                        - status "Individual Content" [ref=e1412]:
                          - img [ref=e1413]:
                            - img [ref=e1414]
                          - generic [ref=e1416]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1418]:
                          - img "step-forward" [ref=e1420]:
                            - img [ref=e1421]
                    - generic [ref=e1423]:
                      - generic [ref=e1425]: How to Build Positioning & Messaging (by an ex-Google PMM) - YouTube Gives a concerete, helpful blueprint for making a value proposition and positioning.
                      - generic [ref=e1427]:
                        - generic [ref=e1428]:
                          - generic [ref=e1430]: Consulting & Business Development Initiatives
                          - generic [ref=e1432]: Market Research & Pipeline Generation
                        - separator [ref=e1433]
                        - generic [ref=e1434]:
                          - generic [ref=e1435]: Mandatory
                          - generic [ref=e1436]: Assigned by Admin
                  - generic [ref=e1439] [cursor=pointer]:
                    - generic [ref=e1440]:
                      - generic [ref=e1442]:
                        - generic [ref=e1443]: Due
                        - generic [ref=e1444]: N/A
                      - generic [ref=e1446]:
                        - status "Individual Content" [ref=e1447]:
                          - img [ref=e1448]:
                            - img [ref=e1449]
                          - generic [ref=e1451]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1453]:
                          - img "step-forward" [ref=e1455]:
                            - img [ref=e1456]
                    - generic [ref=e1458]:
                      - generic [ref=e1460]: What Will Happen to Marketing in the Age of AI? | Jessica Apotheker | TED - YouTube Shows how AI tools speed up the marketing process, and help us unlock insights.
                      - generic [ref=e1462]:
                        - generic [ref=e1463]:
                          - generic [ref=e1465]: Consulting & Business Development Initiatives
                          - generic [ref=e1467]: Sales Execution & Deal Closure
                        - separator [ref=e1468]
                        - generic [ref=e1469]:
                          - generic [ref=e1470]: Mandatory
                          - generic [ref=e1471]: Assigned by Admin
                  - generic [ref=e1474] [cursor=pointer]:
                    - generic [ref=e1475]:
                      - generic [ref=e1477]:
                        - generic [ref=e1478]: Due
                        - generic [ref=e1479]: N/A
                      - generic [ref=e1481]:
                        - status "Individual Content" [ref=e1482]:
                          - img [ref=e1483]:
                            - img [ref=e1484]
                          - generic [ref=e1486]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1488]:
                          - img "step-forward" [ref=e1490]:
                            - img [ref=e1491]
                    - generic [ref=e1493]:
                      - generic [ref=e1495]: Building Financial Acumen as a Sales Professional
                      - generic [ref=e1497]:
                        - generic [ref=e1498]:
                          - generic [ref=e1500]: Financial Acumen
                          - generic [ref=e1502]: Financial Acumen
                        - separator [ref=e1503]
                        - generic [ref=e1504]:
                          - generic [ref=e1505]: Mandatory
                          - generic [ref=e1506]: Assigned by Admin
                  - generic [ref=e1509] [cursor=pointer]:
                    - generic [ref=e1510]:
                      - generic [ref=e1512]:
                        - generic [ref=e1513]: Due
                        - generic [ref=e1514]: N/A
                      - generic [ref=e1516]:
                        - status "Individual Content" [ref=e1517]:
                          - img [ref=e1518]:
                            - img [ref=e1519]
                          - generic [ref=e1521]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1523]:
                          - img "step-forward" [ref=e1525]:
                            - img [ref=e1526]
                    - generic [ref=e1528]:
                      - generic [ref=e1530]: 20 Open-Ended Sales Questions That'll Get Prospects Talking to You
                      - generic [ref=e1532]:
                        - generic [ref=e1533]:
                          - generic [ref=e1535]: Consulting & Business Development Initiatives
                          - generic [ref=e1537]: Sales Execution & Deal Closure
                        - separator [ref=e1538]
                        - generic [ref=e1539]:
                          - generic [ref=e1540]: Mandatory
                          - generic [ref=e1541]: Assigned by Admin
                  - generic [ref=e1544] [cursor=pointer]:
                    - generic [ref=e1545]:
                      - generic [ref=e1547]:
                        - generic [ref=e1548]: Due
                        - generic [ref=e1549]: N/A
                      - generic [ref=e1551]:
                        - status "Individual Content" [ref=e1552]:
                          - img [ref=e1553]:
                            - img [ref=e1554]
                          - generic [ref=e1556]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1558]:
                          - img "step-forward" [ref=e1560]:
                            - img [ref=e1561]
                    - generic [ref=e1563]:
                      - generic [ref=e1565]: "Effective Communication Skills: Stakeholder Analysis"
                      - generic [ref=e1567]:
                        - generic [ref=e1568]:
                          - generic [ref=e1570]: Stakeholder & Client Partnership
                          - generic [ref=e1572]: Effective Communication
                        - separator [ref=e1573]
                        - generic [ref=e1574]:
                          - generic [ref=e1575]: Mandatory
                          - generic [ref=e1576]: Assigned by Admin
                  - generic [ref=e1579] [cursor=pointer]:
                    - generic [ref=e1580]:
                      - generic [ref=e1582]:
                        - generic [ref=e1583]: Due
                        - generic [ref=e1584]: N/A
                      - generic [ref=e1586]:
                        - status "Individual Content" [ref=e1587]:
                          - img [ref=e1588]:
                            - img [ref=e1589]
                          - generic [ref=e1591]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1593]:
                          - img "step-forward" [ref=e1595]:
                            - img [ref=e1596]
                    - generic [ref=e1598]:
                      - generic [ref=e1600]: "Cold Calling: How To Turn Prospects Into Customers | Salesforce"
                      - generic [ref=e1602]:
                        - generic [ref=e1603]:
                          - generic [ref=e1605]: Consulting & Business Development Initiatives
                          - generic [ref=e1607]: Sales Execution & Deal Closure
                        - separator [ref=e1608]
                        - generic [ref=e1609]:
                          - generic [ref=e1610]: Mandatory
                          - generic [ref=e1611]: Assigned by Admin
                  - generic [ref=e1614] [cursor=pointer]:
                    - generic [ref=e1615]:
                      - generic [ref=e1617]:
                        - generic [ref=e1618]: Due
                        - generic [ref=e1619]: N/A
                      - generic [ref=e1621]:
                        - status "Individual Content" [ref=e1622]:
                          - img [ref=e1623]:
                            - img [ref=e1624]
                          - generic [ref=e1626]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1628]:
                          - img "step-forward" [ref=e1630]:
                            - img [ref=e1631]
                    - generic [ref=e1633]:
                      - generic [ref=e1635]: Use Body Language to Rock Your Next Presentation [Stanford GSB]
                      - generic [ref=e1637]:
                        - generic [ref=e1638]:
                          - generic [ref=e1640]: Stakeholder & Client Partnership
                          - generic [ref=e1642]: Effective Communication
                        - separator [ref=e1643]
                        - generic [ref=e1644]:
                          - generic [ref=e1645]: Mandatory
                          - generic [ref=e1646]: Assigned by Admin
                  - generic [ref=e1649] [cursor=pointer]:
                    - generic [ref=e1650]:
                      - generic [ref=e1652]:
                        - generic [ref=e1653]: Due
                        - generic [ref=e1654]: N/A
                      - generic [ref=e1656]:
                        - status "Individual Content" [ref=e1657]:
                          - img [ref=e1658]:
                            - img [ref=e1659]
                          - generic [ref=e1661]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1663]:
                          - img "step-forward" [ref=e1665]:
                            - img [ref=e1666]
                    - generic [ref=e1668]:
                      - generic [ref=e1670]: Gemini for Google Workspace | Google Cloud Skills Boost
                      - generic [ref=e1672]:
                        - generic [ref=e1673]:
                          - generic [ref=e1675]: AI Fluency
                          - generic [ref=e1677]: AI Fluency
                        - separator [ref=e1678]
                        - generic [ref=e1679]:
                          - generic [ref=e1680]: Mandatory
                          - generic [ref=e1681]: Assigned by Admin
                  - generic [ref=e1684] [cursor=pointer]:
                    - generic [ref=e1685]:
                      - generic [ref=e1687]:
                        - generic [ref=e1688]: Due
                        - generic [ref=e1689]: N/A
                      - generic [ref=e1691]:
                        - status "Individual Content" [ref=e1692]:
                          - img [ref=e1693]:
                            - img [ref=e1694]
                          - generic [ref=e1696]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1698]:
                          - img "step-forward" [ref=e1700]:
                            - img [ref=e1701]
                    - generic [ref=e1703]:
                      - generic [ref=e1705]: "Daniel Goleman: The 4 domains of emotional intelligence | Daniel Goleman for Big Think+"
                      - generic [ref=e1707]:
                        - generic [ref=e1708]:
                          - generic [ref=e1710]: Stakeholder & Client Partnership
                          - generic [ref=e1712]: Effective Communication
                        - separator [ref=e1713]
                        - generic [ref=e1714]:
                          - generic [ref=e1715]: Mandatory
                          - generic [ref=e1716]: Assigned by Admin
                  - generic [ref=e1719] [cursor=pointer]:
                    - generic [ref=e1720]:
                      - generic [ref=e1722]:
                        - generic [ref=e1723]: Due
                        - generic [ref=e1724]: N/A
                      - generic [ref=e1726]:
                        - status "Individual Content" [ref=e1727]:
                          - img [ref=e1728]:
                            - img [ref=e1729]
                          - generic [ref=e1731]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1733]:
                          - img "step-forward" [ref=e1735]:
                            - img [ref=e1736]
                    - generic [ref=e1738]:
                      - generic [ref=e1740]: Her Cold Email Strategy Has a 43% OPEN RATE! - YouTube Simple tips to make your email stand out from a sea of emails lying around in the inbox.
                      - generic [ref=e1742]:
                        - generic [ref=e1743]:
                          - generic [ref=e1745]: Consulting & Business Development Initiatives
                          - generic [ref=e1747]: Sales Execution & Deal Closure
                        - separator [ref=e1748]
                        - generic [ref=e1749]:
                          - generic [ref=e1750]: Mandatory
                          - generic [ref=e1751]: Assigned by Admin
                  - generic [ref=e1754] [cursor=pointer]:
                    - generic [ref=e1755]:
                      - generic [ref=e1757]:
                        - generic [ref=e1758]: Due
                        - generic [ref=e1759]: N/A
                      - generic [ref=e1761]:
                        - status "Individual Content" [ref=e1762]:
                          - img [ref=e1763]:
                            - img [ref=e1764]
                          - generic [ref=e1766]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1768]:
                          - img "step-forward" [ref=e1770]:
                            - img [ref=e1771]
                    - generic [ref=e1773]:
                      - generic [ref=e1775]: How to Write a Great Value Proposition [7 Top Examples + Template]
                      - generic [ref=e1777]:
                        - generic [ref=e1778]:
                          - generic [ref=e1780]: Consulting & Business Development Initiatives
                          - generic [ref=e1782]: Sales Execution & Deal Closure
                        - separator [ref=e1783]
                        - generic [ref=e1784]:
                          - generic [ref=e1785]: Mandatory
                          - generic [ref=e1786]: Assigned by Admin
                  - generic [ref=e1789] [cursor=pointer]:
                    - generic [ref=e1790]:
                      - generic [ref=e1792]:
                        - generic [ref=e1793]: Due
                        - generic [ref=e1794]: N/A
                      - generic [ref=e1796]:
                        - status "Individual Content" [ref=e1797]:
                          - img [ref=e1798]:
                            - img [ref=e1799]
                          - generic [ref=e1801]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1803]:
                          - img "step-forward" [ref=e1805]:
                            - img [ref=e1806]
                    - generic [ref=e1808]:
                      - generic [ref=e1810]: LinkedIn Sales Navigator for Beginners (Full Course) Goes over a number of features & tools in the program to get what's desired.
                      - generic [ref=e1812]:
                        - generic [ref=e1813]:
                          - generic [ref=e1815]: Consulting & Business Development Initiatives
                          - generic [ref=e1817]: Sales Execution & Deal Closure
                        - separator [ref=e1818]
                        - generic [ref=e1819]:
                          - generic [ref=e1820]: Mandatory
                          - generic [ref=e1821]: Assigned by Admin
                  - generic [ref=e1824] [cursor=pointer]:
                    - generic [ref=e1825]:
                      - generic [ref=e1827]:
                        - generic [ref=e1828]: Due
                        - generic [ref=e1829]: N/A
                      - generic [ref=e1831]:
                        - status "Individual Content" [ref=e1832]:
                          - img [ref=e1833]:
                            - img [ref=e1834]
                          - generic [ref=e1836]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1838]:
                          - img "step-forward" [ref=e1840]:
                            - img [ref=e1841]
                    - generic [ref=e1843]:
                      - generic [ref=e1845]: How to Get B2B Customer Segmentation Right [+Tips]
                      - generic [ref=e1847]:
                        - generic [ref=e1848]:
                          - generic [ref=e1850]: Consulting & Business Development Initiatives
                          - generic [ref=e1852]: Sales Execution & Deal Closure
                        - separator [ref=e1853]
                        - generic [ref=e1854]:
                          - generic [ref=e1855]: Mandatory
                          - generic [ref=e1856]: Assigned by Admin
                  - generic [ref=e1859] [cursor=pointer]:
                    - generic [ref=e1860]:
                      - generic [ref=e1862]:
                        - generic [ref=e1863]: Due
                        - generic [ref=e1864]: N/A
                      - generic [ref=e1866]:
                        - status "Individual Content" [ref=e1867]:
                          - img [ref=e1868]:
                            - img [ref=e1869]
                          - generic [ref=e1871]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1873]:
                          - img "step-forward" [ref=e1875]:
                            - img [ref=e1876]
                    - generic [ref=e1878]:
                      - generic [ref=e1880]: "30 Sales Call Tips: How to Start Conversations so Prospects Don't Hang Up On You"
                      - generic [ref=e1882]:
                        - generic [ref=e1883]:
                          - generic [ref=e1885]: Consulting & Business Development Initiatives
                          - generic [ref=e1887]: Sales Execution & Deal Closure
                        - separator [ref=e1888]
                        - generic [ref=e1889]:
                          - generic [ref=e1890]: Mandatory
                          - generic [ref=e1891]: Assigned by Admin
                  - generic [ref=e1894] [cursor=pointer]:
                    - generic [ref=e1895]:
                      - generic [ref=e1897]:
                        - generic [ref=e1898]: Due
                        - generic [ref=e1899]: N/A
                      - generic [ref=e1901]:
                        - status "Individual Content" [ref=e1902]:
                          - img [ref=e1903]:
                            - img [ref=e1904]
                          - generic [ref=e1906]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1908]:
                          - img "step-forward" [ref=e1910]:
                            - img [ref=e1911]
                    - generic [ref=e1913]:
                      - generic [ref=e1915]: "The art of negotiation: Six must-have strategies | LBS - YouTube"
                      - generic [ref=e1917]:
                        - generic [ref=e1918]:
                          - generic [ref=e1920]: Consulting & Business Development Initiatives
                          - generic [ref=e1922]: Sales Execution & Deal Closure
                        - separator [ref=e1923]
                        - generic [ref=e1924]:
                          - generic [ref=e1925]: Mandatory
                          - generic [ref=e1926]: Assigned by Admin
                  - generic [ref=e1929] [cursor=pointer]:
                    - generic [ref=e1930]:
                      - generic [ref=e1932]:
                        - generic [ref=e1933]: Due
                        - generic [ref=e1934]: 25-06-2026
                      - generic [ref=e1936]:
                        - status "Assigned learning path" [ref=e1937]:
                          - img [ref=e1938]:
                            - img [ref=e1939]
                          - generic [ref=e1941]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e1943]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e1944]:
                      - generic [ref=e1946]: Test sample Learning path Magic 2026
                      - generic [ref=e1948]:
                        - generic [ref=e1949]:
                          - generic [ref=e1951]: Crowd Entertainment
                          - generic [ref=e1953]: Confusion Magic, Vanishing Magic
                        - separator [ref=e1954]
                        - generic [ref=e1955]:
                          - generic [ref=e1956]: Mandatory
                          - generic [ref=e1957]: Assigned by Admin
                  - generic [ref=e1960] [cursor=pointer]:
                    - generic [ref=e1961]:
                      - generic [ref=e1963]:
                        - generic [ref=e1964]: Due
                        - generic [ref=e1965]: 29-05-2026
                      - generic [ref=e1967]:
                        - status "Individual Content" [ref=e1968]:
                          - img [ref=e1969]:
                            - img [ref=e1970]
                          - generic [ref=e1972]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1974]:
                          - img "step-forward" [ref=e1976]:
                            - img [ref=e1977]
                    - generic [ref=e1979]:
                      - generic [ref=e1981]: Introduction to Generative AI [Learning Path]
                      - generic [ref=e1984]:
                        - generic [ref=e1985]: Mandatory
                        - generic [ref=e1986]: Assigned by Admin
                  - generic [ref=e1989] [cursor=pointer]:
                    - generic [ref=e1990]:
                      - generic [ref=e1992]:
                        - generic [ref=e1993]: Due
                        - generic [ref=e1994]: 29-05-2026
                      - generic [ref=e1996]:
                        - status "Individual Content" [ref=e1997]:
                          - img [ref=e1998]:
                            - img [ref=e1999]
                          - generic [ref=e2001]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e2003]:
                          - img "step-forward" [ref=e2005]:
                            - img [ref=e2006]
                    - generic [ref=e2008]:
                      - generic [ref=e2010]: Introduction to Generative AI [Learning Path]
                      - generic [ref=e2013]:
                        - generic [ref=e2014]: Mandatory
                        - generic [ref=e2015]: Assigned by Admin
                  - generic [ref=e2018] [cursor=pointer]:
                    - generic [ref=e2019]:
                      - generic [ref=e2021]:
                        - generic [ref=e2022]: Due
                        - generic [ref=e2023]: N/A
                      - generic [ref=e2025]:
                        - status "Individual Content" [ref=e2026]:
                          - img [ref=e2027]:
                            - img [ref=e2028]
                          - generic [ref=e2030]: Individual Content
                        - button "In progress, mark complete" [ref=e2032]:
                          - img [ref=e2034]:
                            - img [ref=e2035]
                    - generic [ref=e2038]:
                      - generic [ref=e2040]: Test sample 2026 001
                      - generic [ref=e2042]:
                        - generic [ref=e2043]:
                          - generic [ref=e2045]: Software Development Lifecycle (SDLC) Management
                          - generic [ref=e2047]: Agile/Scrum Methodologies
                        - separator [ref=e2048]
                        - generic [ref=e2050]: Assigned by Admin
  - generic [ref=e2051]: "0"
```

# Test source

```ts
  323 |     const [managerResp, adminResp] = await Promise.all([
  324 |       managerPromise,
  325 |       adminPromise,
  326 |     ]);
  327 |     return [managerResp, adminResp];
  328 |   }
  329 | 
  330 |   async selectManagerSortByOption(optionText) {
  331 |     await this.managerSortByDropdown.click();
  332 |     await this.page
  333 |       .locator(".ant-select-item-option")
  334 |       .filter({ hasText: optionText })
  335 |       .click();
  336 |     await this.contentCard.first().waitFor({ state: "visible" });
  337 |   }
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
> 423 |     await cards.first().waitFor({ state: "visible" });
      |                         ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
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
  438 |     await btn.scrollIntoViewIfNeeded();
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