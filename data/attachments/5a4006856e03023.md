# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-filters-validation.spec.js >> Home Page filters validation >> Assigned By Manager sort By filter validation
- Location: tests/specs/homepage/homepage-filters-validation.spec.js:83:8

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('.ant-select-item-option').filter({ hasText: 'asc' })

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
                      - generic: "58"
                      - generic: Total Assigned
                  - generic [ref=e105]:
                    - generic [ref=e108]: 41 Assigned
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
                    - generic [ref=e262]: 10 Content
                  - generic [ref=e263]:
                    - generic "Sort courses" [ref=e265] [cursor=pointer]:
                      - generic [ref=e266]:
                        - generic: Sort by
                        - combobox "Sort courses" [expanded] [active] [ref=e267]:
                          - listbox [ref=e268]:
                            - option "Due date (soonest first)" [ref=e269]:
                              - generic [ref=e270]: Due date (soonest first)
                            - option "Due date (latest first)" [ref=e271]:
                              - generic [ref=e272]: Due date (latest first)
                            - option "Title A–Z" [ref=e273]:
                              - generic [ref=e274]: Title A–Z
                            - option "Title Z–A" [ref=e275]:
                              - generic [ref=e276]: Title Z–A
                            - option "Priority (Mandatory first)" [ref=e277]:
                              - generic [ref=e278]: Priority (Mandatory first)
                      - img "down" [ref=e280]:
                        - img [ref=e281]
                    - button "Collapse section" [expanded] [ref=e284] [cursor=pointer]:
                      - img "up" [ref=e286]:
                        - img [ref=e287]
                - generic [ref=e291]:
                  - generic [ref=e294] [cursor=pointer]:
                    - generic [ref=e295]:
                      - generic [ref=e297]:
                        - generic [ref=e298]: Due
                        - generic [ref=e299]: 30-06-2026
                      - generic [ref=e301]:
                        - status "Assigned learning path" [ref=e302]:
                          - img [ref=e303]:
                            - img [ref=e304]
                          - generic [ref=e306]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e308]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e309]:
                      - generic [ref=e311]: AI Engineering | Technical Expert Badges
                      - generic [ref=e313]:
                        - generic [ref=e314]:
                          - generic [ref=e316]: GenAI, Data Science, Cloud Engineering Core
                          - generic [ref=e318]: Secure API Service, AI, Automation & IaC
                        - separator [ref=e319]
                        - generic [ref=e320]:
                          - generic [ref=e321]: Mandatory
                          - generic [ref=e322]: Assigned by Manager
                  - generic [ref=e325] [cursor=pointer]:
                    - generic [ref=e326]:
                      - generic [ref=e328]:
                        - generic [ref=e329]: Due
                        - generic [ref=e330]: 30-05-2026
                      - generic [ref=e332]:
                        - status "Assigned learning path" [ref=e333]:
                          - img [ref=e334]:
                            - img [ref=e335]
                          - generic [ref=e337]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e339]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e340]:
                      - generic [ref=e342]: Thangaraj Testing sample 1
                      - generic [ref=e344]:
                        - generic [ref=e345]:
                          - generic [ref=e347]: GenAI, Data Science, Cloud Engineering Core
                          - generic [ref=e349]: Secure API Service, AI, Automation & IaC
                        - separator [ref=e350]
                        - generic [ref=e351]:
                          - generic [ref=e352]: Mandatory
                          - generic [ref=e353]: Assigned by Manager
                  - generic [ref=e356] [cursor=pointer]:
                    - generic [ref=e357]:
                      - generic [ref=e359]:
                        - generic [ref=e360]: Due
                        - generic [ref=e361]: 28-05-2026
                      - generic [ref=e363]:
                        - status "Assigned learning path" [ref=e364]:
                          - img [ref=e365]:
                            - img [ref=e366]
                          - generic [ref=e368]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e370]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e371]:
                      - generic [ref=e373]: Learning path new case
                      - generic [ref=e375]:
                        - generic [ref=e376]:
                          - generic [ref=e378]: Software Development Lifecycle (SDLC) Management
                          - generic [ref=e380]: Agile/Scrum Methodologies
                        - separator [ref=e381]
                        - generic [ref=e382]:
                          - generic [ref=e383]: Mandatory
                          - generic [ref=e384]: Assigned by Manager
                  - generic [ref=e387] [cursor=pointer]:
                    - generic [ref=e388]:
                      - generic [ref=e390]:
                        - generic [ref=e391]: Due
                        - generic [ref=e392]: 31-05-2026
                      - generic [ref=e394]:
                        - status "Assigned learning path" [ref=e395]:
                          - img [ref=e396]:
                            - img [ref=e397]
                          - generic [ref=e399]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e401]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e402]:
                      - generic [ref=e404]: New Magic Learning path 2026 99
                      - generic [ref=e406]:
                        - generic [ref=e407]:
                          - generic [ref=e409]: Crowd Entertainment
                          - generic [ref=e411]: Shape Shifting Magic
                        - separator [ref=e412]
                        - generic [ref=e413]:
                          - generic [ref=e414]: Mandatory
                          - generic [ref=e415]: Assigned by Manager
                  - generic [ref=e418] [cursor=pointer]:
                    - generic [ref=e419]:
                      - generic [ref=e421]:
                        - generic [ref=e422]: Due
                        - generic [ref=e423]: 31-05-2026
                      - generic [ref=e425]:
                        - status "Assigned learning path" [ref=e426]:
                          - img [ref=e427]:
                            - img [ref=e428]
                          - generic [ref=e430]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e432]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e433]:
                      - generic [ref=e435]: Typewriting Skills Learning 2026
                      - generic [ref=e437]:
                        - generic [ref=e438]:
                          - generic [ref=e440]: Software Development
                          - generic [ref=e442]: Python Basics
                        - separator [ref=e443]
                        - generic [ref=e444]:
                          - generic [ref=e445]: Mandatory
                          - generic [ref=e446]: Assigned by Manager
                  - generic [ref=e449] [cursor=pointer]:
                    - generic [ref=e450]:
                      - generic [ref=e452]:
                        - generic [ref=e453]: Due
                        - generic [ref=e454]: 28-05-2026
                      - generic [ref=e456]:
                        - status "Individual Content" [ref=e457]:
                          - img [ref=e458]:
                            - img [ref=e459]
                          - generic [ref=e461]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e463]:
                          - img "step-forward" [ref=e465]:
                            - img [ref=e466]
                    - generic [ref=e468]:
                      - generic [ref=e470]: Major comedy show 2026
                      - generic [ref=e473]:
                        - generic [ref=e474]: Mandatory
                        - generic [ref=e475]: Assigned by Manager
                  - generic [ref=e478] [cursor=pointer]:
                    - generic [ref=e479]:
                      - generic [ref=e481]:
                        - generic [ref=e482]: Due
                        - generic [ref=e483]: 31-05-2026
                      - generic [ref=e485]:
                        - status "Individual Content" [ref=e486]:
                          - img [ref=e487]:
                            - img [ref=e488]
                          - generic [ref=e490]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e492]:
                          - img "step-forward" [ref=e494]:
                            - img [ref=e495]
                    - generic [ref=e497]:
                      - generic [ref=e499]: "Software Architecture: REST API Design - The Complete Guide | Udemy"
                      - generic [ref=e501]:
                        - generic [ref=e502]:
                          - generic [ref=e504]: System Design & Architecture
                          - generic [ref=e506]: Microservices Architecture Design
                        - separator [ref=e507]
                        - generic [ref=e508]:
                          - generic [ref=e509]: Mandatory
                          - generic [ref=e510]: Assigned by Manager
                  - generic [ref=e513] [cursor=pointer]:
                    - generic [ref=e514]:
                      - generic [ref=e516]:
                        - generic [ref=e517]: Due
                        - generic [ref=e518]: 28-05-2026
                      - generic [ref=e520]:
                        - status "Individual Content" [ref=e521]:
                          - img [ref=e522]:
                            - img [ref=e523]
                          - generic [ref=e525]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e527]:
                          - img "step-forward" [ref=e529]:
                            - img [ref=e530]
                    - generic [ref=e532]:
                      - generic [ref=e534]: Master Control Override Horizon Zero Dawn
                      - generic [ref=e536]:
                        - generic [ref=e537]:
                          - generic [ref=e539]: Crowd Entertainment, System Design & Architecture, Cloud Engineering Core, Software Development Lifecycle (SDLC) Management, Code Review & Quality Assurance, Programming Proficiency
                          - generic [ref=e541]: Vanishing Magic, Microservices Architecture Design, High-Level Design (HLD) & Low-Level Design (LLD), Cloud Architecture & Solution Design, Architecture Best Practices and Frameworks, Automation & IaC, Agile/Scrum Methodologies, Code Review Methodologies and Test-Driven Development (TDD) Practices, Software Development
                        - separator [ref=e542]
                        - generic [ref=e543]:
                          - generic [ref=e544]: Optional
                          - generic [ref=e545]: Assigned by Admin and Manager
                  - generic [ref=e548] [cursor=pointer]:
                    - generic [ref=e549]:
                      - generic [ref=e551]:
                        - generic [ref=e552]: Due
                        - generic [ref=e553]: 23-05-2026
                      - generic [ref=e555]:
                        - status "Assigned learning path" [ref=e556]:
                          - img [ref=e557]:
                            - img [ref=e558]
                          - generic [ref=e560]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e562]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e563]:
                      - generic [ref=e565]: Test sample learning 28723
                      - generic [ref=e568]:
                        - generic [ref=e569]: Optional
                        - generic [ref=e570]: Assigned by Manager
                  - generic [ref=e573] [cursor=pointer]:
                    - generic [ref=e574]:
                      - generic [ref=e576]:
                        - generic [ref=e577]: Due
                        - generic [ref=e578]: 31-05-2026
                      - generic [ref=e580]:
                        - status "Individual Content" [ref=e581]:
                          - img [ref=e582]:
                            - img [ref=e583]
                          - generic [ref=e585]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e587]:
                          - img "step-forward" [ref=e589]:
                            - img [ref=e590]
                    - generic [ref=e592]:
                      - generic [ref=e594]: Global security measures 2026
                      - generic [ref=e596]:
                        - generic [ref=e597]:
                          - generic [ref=e599]: Administration
                          - generic [ref=e601]: Security Management
                        - separator [ref=e602]
                        - generic [ref=e603]:
                          - generic [ref=e604]: Optional
                          - generic [ref=e605]: Assigned by Manager
              - generic [ref=e607]:
                - generic [ref=e611]:
                  - generic [ref=e612]:
                    - generic [ref=e614]:
                      - img "user" [ref=e615]:
                        - img [ref=e616]
                      - text: Assigned By Admin
                    - generic [ref=e619]: 40 Content
                  - generic [ref=e620]:
                    - generic "Sort courses" [ref=e622] [cursor=pointer]:
                      - generic [ref=e623]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e624]
                      - img "down" [ref=e626]:
                        - img [ref=e627]
                    - button "Collapse section" [expanded] [ref=e630] [cursor=pointer]:
                      - img "up" [ref=e632]:
                        - img [ref=e633]
                - generic [ref=e637]:
                  - generic [ref=e640] [cursor=pointer]:
                    - generic [ref=e641]:
                      - generic [ref=e643]:
                        - generic [ref=e644]: Due
                        - generic [ref=e645]: N/A
                      - generic [ref=e647]:
                        - status "Individual Content" [ref=e648]:
                          - img [ref=e649]:
                            - img [ref=e650]
                          - generic [ref=e652]: Individual Content
                        - button "In progress, mark complete" [ref=e654]:
                          - img [ref=e656]:
                            - img [ref=e657]
                    - generic [ref=e660]:
                      - generic [ref=e662]: Generative AI Leader | Google Cloud Skills Boost
                      - generic [ref=e664]:
                        - generic [ref=e665]:
                          - generic [ref=e667]: AI Fluency
                          - generic [ref=e669]: AI Fluency
                        - separator [ref=e670]
                        - generic [ref=e671]:
                          - generic [ref=e672]: Mandatory
                          - generic [ref=e673]: Assigned by Admin
                  - generic [ref=e676] [cursor=pointer]:
                    - generic [ref=e677]:
                      - generic [ref=e679]:
                        - generic [ref=e680]: Due
                        - generic [ref=e681]: N/A
                      - generic [ref=e683]:
                        - status "Individual Content" [ref=e684]:
                          - img [ref=e685]:
                            - img [ref=e686]
                          - generic [ref=e688]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e690]:
                          - img "step-forward" [ref=e692]:
                            - img [ref=e693]
                    - generic [ref=e695]:
                      - generic [ref=e697]: LinkedIn Sales Navigator MASTERCLASS - Tutorial, Tips, Tricks, and Hacks to Find Leads Hands-on demonstration of using the website effectively.
                      - generic [ref=e699]:
                        - generic [ref=e700]:
                          - generic [ref=e702]: Consulting & Business Development Initiatives
                          - generic [ref=e704]: Sales Execution & Deal Closure
                        - separator [ref=e705]
                        - generic [ref=e706]:
                          - generic [ref=e707]: Mandatory
                          - generic [ref=e708]: Assigned by Admin
                  - generic [ref=e711] [cursor=pointer]:
                    - generic [ref=e712]:
                      - generic [ref=e714]:
                        - generic [ref=e715]: Due
                        - generic [ref=e716]: N/A
                      - generic [ref=e718]:
                        - status "Individual Content" [ref=e719]:
                          - img [ref=e720]:
                            - img [ref=e721]
                          - generic [ref=e723]: Individual Content
                        - button "In progress, mark complete" [ref=e725]:
                          - img [ref=e727]:
                            - img [ref=e728]
                    - generic [ref=e731]:
                      - generic [ref=e733]: "122. How To Be More Confident and Calm in Your Communication: Managing the \"ABC’s\" of... [Podcast, Stanford Graduate School of Business]"
                      - generic [ref=e735]:
                        - generic [ref=e736]:
                          - generic [ref=e738]: Stakeholder & Client Partnership
                          - generic [ref=e740]: Effective Communication
                        - separator [ref=e741]
                        - generic [ref=e742]:
                          - generic [ref=e743]: Mandatory
                          - generic [ref=e744]: Assigned by Admin
                  - generic [ref=e747] [cursor=pointer]:
                    - generic [ref=e748]:
                      - generic [ref=e750]:
                        - generic [ref=e751]: Due
                        - generic [ref=e752]: N/A
                      - generic [ref=e754]:
                        - status "Individual Content" [ref=e755]:
                          - img [ref=e756]:
                            - img [ref=e757]
                          - generic [ref=e759]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e761]:
                          - img "step-forward" [ref=e763]:
                            - img [ref=e764]
                    - generic [ref=e766]:
                      - generic [ref=e768]: "Optimize your Email Deliverability: Content | Heinz Marketing"
                      - generic [ref=e770]:
                        - generic [ref=e771]:
                          - generic [ref=e773]: Consulting & Business Development Initiatives
                          - generic [ref=e775]: Sales Execution & Deal Closure
                        - separator [ref=e776]
                        - generic [ref=e777]:
                          - generic [ref=e778]: Mandatory
                          - generic [ref=e779]: Assigned by Admin
                  - generic [ref=e782] [cursor=pointer]:
                    - generic [ref=e783]:
                      - generic [ref=e785]:
                        - generic [ref=e786]: Due
                        - generic [ref=e787]: N/A
                      - generic [ref=e789]:
                        - status "Individual Content" [ref=e790]:
                          - img [ref=e791]:
                            - img [ref=e792]
                          - generic [ref=e794]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e796]:
                          - img "step-forward" [ref=e798]:
                            - img [ref=e799]
                    - generic [ref=e801]:
                      - generic [ref=e803]: "Customer Profiles: How to Build and Use Them - Qualtrics"
                      - generic [ref=e805]:
                        - generic [ref=e806]:
                          - generic [ref=e808]: Consulting & Business Development Initiatives
                          - generic [ref=e810]: Sales Execution & Deal Closure
                        - separator [ref=e811]
                        - generic [ref=e812]:
                          - generic [ref=e813]: Mandatory
                          - generic [ref=e814]: Assigned by Admin
                  - generic [ref=e817] [cursor=pointer]:
                    - generic [ref=e818]:
                      - generic [ref=e820]:
                        - generic [ref=e821]: Due
                        - generic [ref=e822]: N/A
                      - generic [ref=e824]:
                        - status "Individual Content" [ref=e825]:
                          - img [ref=e826]:
                            - img [ref=e827]
                          - generic [ref=e829]: Individual Content
                        - button "In progress, mark complete" [ref=e831]:
                          - img [ref=e833]:
                            - img [ref=e834]
                    - generic [ref=e837]:
                      - generic [ref=e839]: Communicating and Working with Stakeholders | Google Project Management Certificate - YouTube
                      - generic [ref=e841]:
                        - generic [ref=e842]:
                          - generic [ref=e844]: Stakeholder & Client Partnership
                          - generic [ref=e846]: Stakeholder Management, Effective Communication
                        - separator [ref=e847]
                        - generic [ref=e848]:
                          - generic [ref=e849]: Mandatory
                          - generic [ref=e850]: Assigned by Admin
                  - generic [ref=e853] [cursor=pointer]:
                    - generic [ref=e854]:
                      - generic [ref=e856]:
                        - generic [ref=e857]: Due
                        - generic [ref=e858]: N/A
                      - generic [ref=e860]:
                        - status "Individual Content" [ref=e861]:
                          - img [ref=e862]:
                            - img [ref=e863]
                          - generic [ref=e865]: Individual Content
                        - button "In progress, mark complete" [ref=e867]:
                          - img [ref=e869]:
                            - img [ref=e870]
                    - generic [ref=e873]:
                      - generic [ref=e875]: Competitor Analysis and Market Research - Qualtrics
                      - generic [ref=e877]:
                        - generic [ref=e878]:
                          - generic [ref=e880]: Consulting & Business Development Initiatives
                          - generic [ref=e882]: Sales Execution & Deal Closure
                        - separator [ref=e883]
                        - generic [ref=e884]:
                          - generic [ref=e885]: Mandatory
                          - generic [ref=e886]: Assigned by Admin
                  - generic [ref=e889] [cursor=pointer]:
                    - generic [ref=e890]:
                      - generic [ref=e892]:
                        - generic [ref=e893]: Due
                        - generic [ref=e894]: N/A
                      - generic [ref=e896]:
                        - status "Individual Content" [ref=e897]:
                          - img [ref=e898]:
                            - img [ref=e899]
                          - generic [ref=e901]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e903]:
                          - img "step-forward" [ref=e905]:
                            - img [ref=e906]
                    - generic [ref=e908]:
                      - generic [ref=e910]: "AI Boost Bites: Your Edge in the AI-Powered World | Google Cloud Skills Boost"
                      - generic [ref=e912]:
                        - generic [ref=e913]:
                          - generic [ref=e915]: AI Fluency
                          - generic [ref=e917]: AI Fluency
                        - separator [ref=e918]
                        - generic [ref=e919]:
                          - generic [ref=e920]: Mandatory
                          - generic [ref=e921]: Assigned by Admin
                  - generic [ref=e924] [cursor=pointer]:
                    - generic [ref=e925]:
                      - generic [ref=e927]:
                        - generic [ref=e928]: Due
                        - generic [ref=e929]: N/A
                      - generic [ref=e931]:
                        - status "Individual Content" [ref=e932]:
                          - img [ref=e933]:
                            - img [ref=e934]
                          - generic [ref=e936]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e938]:
                          - img "step-forward" [ref=e940]:
                            - img [ref=e941]
                    - generic [ref=e943]:
                      - generic [ref=e945]: "Finance: What Managers Need to Know [HBR]"
                      - generic [ref=e947]:
                        - generic [ref=e948]:
                          - generic [ref=e950]: Financial Acumen
                          - generic [ref=e952]: Financial Acumen
                        - separator [ref=e953]
                        - generic [ref=e954]:
                          - generic [ref=e955]: Mandatory
                          - generic [ref=e956]: Assigned by Admin
                  - generic [ref=e959] [cursor=pointer]:
                    - generic [ref=e960]:
                      - generic [ref=e962]:
                        - generic [ref=e963]: Due
                        - generic [ref=e964]: N/A
                      - generic [ref=e966]:
                        - status "Individual Content" [ref=e967]:
                          - img [ref=e968]:
                            - img [ref=e969]
                          - generic [ref=e971]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e973]:
                          - img "step-forward" [ref=e975]:
                            - img [ref=e976]
                    - generic [ref=e978]:
                      - generic [ref=e980]: What Does Lead Qualification Mean? | How to Qualify Sales Leads Goes over frameworks used to qualify leads, with examples.
                      - generic [ref=e982]:
                        - generic [ref=e983]:
                          - generic [ref=e985]: Consulting & Business Development Initiatives
                          - generic [ref=e987]: Consultative Selling
                        - separator [ref=e988]
                        - generic [ref=e989]:
                          - generic [ref=e990]: Mandatory
                          - generic [ref=e991]: Assigned by Admin
                  - generic [ref=e994] [cursor=pointer]:
                    - generic [ref=e995]:
                      - generic [ref=e997]:
                        - generic [ref=e998]: Due
                        - generic [ref=e999]: N/A
                      - generic [ref=e1001]:
                        - status "Individual Content" [ref=e1002]:
                          - img [ref=e1003]:
                            - img [ref=e1004]
                          - generic [ref=e1006]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1008]:
                          - img "step-forward" [ref=e1010]:
                            - img [ref=e1011]
                    - generic [ref=e1013]:
                      - generic [ref=e1015]: 5 Rules for Communicating Effectively with Executives
                      - generic [ref=e1017]:
                        - generic [ref=e1018]:
                          - generic [ref=e1020]: Stakeholder & Client Partnership
                          - generic [ref=e1022]: Effective Communication
                        - separator [ref=e1023]
                        - generic [ref=e1024]:
                          - generic [ref=e1025]: Mandatory
                          - generic [ref=e1026]: Assigned by Admin
                  - generic [ref=e1029] [cursor=pointer]:
                    - generic [ref=e1030]:
                      - generic [ref=e1032]:
                        - generic [ref=e1033]: Due
                        - generic [ref=e1034]: N/A
                      - generic [ref=e1036]:
                        - status "Individual Content" [ref=e1037]:
                          - img [ref=e1038]:
                            - img [ref=e1039]
                          - generic [ref=e1041]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1043]:
                          - img "step-forward" [ref=e1045]:
                            - img [ref=e1046]
                    - generic [ref=e1048]:
                      - generic [ref=e1050]: "How to Control Your Emotions During a Difficult Conversation: The Harvard Business Review Guide"
                      - generic [ref=e1052]:
                        - generic [ref=e1053]:
                          - generic [ref=e1055]: Stakeholder & Client Partnership
                          - generic [ref=e1057]: Effective Communication
                        - separator [ref=e1058]
                        - generic [ref=e1059]:
                          - generic [ref=e1060]: Mandatory
                          - generic [ref=e1061]: Assigned by Admin
                  - generic [ref=e1064] [cursor=pointer]:
                    - generic [ref=e1065]:
                      - generic [ref=e1067]:
                        - generic [ref=e1068]: Due
                        - generic [ref=e1069]: N/A
                      - generic [ref=e1071]:
                        - status "Individual Content" [ref=e1072]:
                          - img [ref=e1073]:
                            - img [ref=e1074]
                          - generic [ref=e1076]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1078]:
                          - img "step-forward" [ref=e1080]:
                            - img [ref=e1081]
                    - generic [ref=e1083]:
                      - generic [ref=e1085]: Master the Art of Questions to Unlock Meaningful Conversations - YouTube In an entertaining & interactive way, demonstrates "intentional communication" and the art of asking right questions.
                      - generic [ref=e1087]:
                        - generic [ref=e1088]:
                          - generic [ref=e1090]: Consulting & Business Development Initiatives, Stakeholder & Client Partnership
                          - generic [ref=e1092]: Consultative Selling, Stakeholder Management
                        - separator [ref=e1093]
                        - generic [ref=e1094]:
                          - generic [ref=e1095]: Mandatory
                          - generic [ref=e1096]: Assigned by Admin
                  - generic [ref=e1099] [cursor=pointer]:
                    - generic [ref=e1100]:
                      - generic [ref=e1102]:
                        - generic [ref=e1103]: Due
                        - generic [ref=e1104]: N/A
                      - generic [ref=e1106]:
                        - status "Individual Content" [ref=e1107]:
                          - img [ref=e1108]:
                            - img [ref=e1109]
                          - generic [ref=e1111]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1113]:
                          - img "step-forward" [ref=e1115]:
                            - img [ref=e1116]
                    - generic [ref=e1118]:
                      - generic [ref=e1120]: 23 Elevator Pitch Examples to Inspire Your Own [+Templates & Expert Tips]
                      - generic [ref=e1122]:
                        - generic [ref=e1123]:
                          - generic [ref=e1125]: Consulting & Business Development Initiatives
                          - generic [ref=e1127]: Sales Execution & Deal Closure
                        - separator [ref=e1128]
                        - generic [ref=e1129]:
                          - generic [ref=e1130]: Mandatory
                          - generic [ref=e1131]: Assigned by Admin
                  - generic [ref=e1134] [cursor=pointer]:
                    - generic [ref=e1135]:
                      - generic [ref=e1137]:
                        - generic [ref=e1138]: Due
                        - generic [ref=e1139]: N/A
                      - generic [ref=e1141]:
                        - status "Individual Content" [ref=e1142]:
                          - img [ref=e1143]:
                            - img [ref=e1144]
                          - generic [ref=e1146]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1148]:
                          - img "step-forward" [ref=e1150]:
                            - img [ref=e1151]
                    - generic [ref=e1153]:
                      - generic [ref=e1155]: You Must Understand Your Competition | Wolters Kluwer
                      - generic [ref=e1157]:
                        - generic [ref=e1158]:
                          - generic [ref=e1160]: Consulting & Business Development Initiatives
                          - generic [ref=e1162]: Sales Execution & Deal Closure, Commercial Account Management
                        - separator [ref=e1163]
                        - generic [ref=e1164]:
                          - generic [ref=e1165]: Mandatory
                          - generic [ref=e1166]: Assigned by Admin
                  - generic [ref=e1169] [cursor=pointer]:
                    - generic [ref=e1170]:
                      - generic [ref=e1172]:
                        - generic [ref=e1173]: Due
                        - generic [ref=e1174]: N/A
                      - generic [ref=e1176]:
                        - status "Individual Content" [ref=e1177]:
                          - img [ref=e1178]:
                            - img [ref=e1179]
                          - generic [ref=e1181]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1183]:
                          - img "step-forward" [ref=e1185]:
                            - img [ref=e1186]
                    - generic [ref=e1188]:
                      - generic [ref=e1190]: The science behind dramatically better conversations | Charles Duhigg | TEDxManchester - YouTube Speaks about the role of precise questions to understand the other person's wishes best. "The matching principle".
                      - generic [ref=e1192]:
                        - generic [ref=e1193]:
                          - generic [ref=e1195]: Consulting & Business Development Initiatives, Stakeholder & Client Partnership
                          - generic [ref=e1197]: Consultative Selling, Stakeholder Management
                        - separator [ref=e1198]
                        - generic [ref=e1199]:
                          - generic [ref=e1200]: Mandatory
                          - generic [ref=e1201]: Assigned by Admin
                  - generic [ref=e1204] [cursor=pointer]:
                    - generic [ref=e1205]:
                      - generic [ref=e1207]:
                        - generic [ref=e1208]: Due
                        - generic [ref=e1209]: N/A
                      - generic [ref=e1211]:
                        - status "Individual Content" [ref=e1212]:
                          - img [ref=e1213]:
                            - img [ref=e1214]
                          - generic [ref=e1216]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1218]:
                          - img "step-forward" [ref=e1220]:
                            - img [ref=e1221]
                    - generic [ref=e1223]:
                      - generic [ref=e1225]: Fundamentals of Finance & Economics for Businesses – Crash Course
                      - generic [ref=e1227]:
                        - generic [ref=e1228]:
                          - generic [ref=e1230]: Financial Acumen
                          - generic [ref=e1232]: Financial Acumen
                        - separator [ref=e1233]
                        - generic [ref=e1234]:
                          - generic [ref=e1235]: Mandatory
                          - generic [ref=e1236]: Assigned by Admin
                  - generic [ref=e1239] [cursor=pointer]:
                    - generic [ref=e1240]:
                      - generic [ref=e1242]:
                        - generic [ref=e1243]: Due
                        - generic [ref=e1244]: N/A
                      - generic [ref=e1246]:
                        - status "Individual Content" [ref=e1247]:
                          - img [ref=e1248]:
                            - img [ref=e1249]
                          - generic [ref=e1251]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1253]:
                          - img "step-forward" [ref=e1255]:
                            - img [ref=e1256]
                    - generic [ref=e1258]:
                      - generic [ref=e1260]: "Think Fast, Talk Smart: Communication Techniques - YouTube"
                      - generic [ref=e1262]:
                        - generic [ref=e1263]:
                          - generic [ref=e1265]: Stakeholder & Client Partnership
                          - generic [ref=e1267]: Effective Communication
                        - separator [ref=e1268]
                        - generic [ref=e1269]:
                          - generic [ref=e1270]: Mandatory
                          - generic [ref=e1271]: Assigned by Admin
                  - generic [ref=e1274] [cursor=pointer]:
                    - generic [ref=e1275]:
                      - generic [ref=e1277]:
                        - generic [ref=e1278]: Due
                        - generic [ref=e1279]: N/A
                      - generic [ref=e1281]:
                        - status "Individual Content" [ref=e1282]:
                          - img [ref=e1283]:
                            - img [ref=e1284]
                          - generic [ref=e1286]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1288]:
                          - img "step-forward" [ref=e1290]:
                            - img [ref=e1291]
                    - generic [ref=e1293]:
                      - generic [ref=e1295]: Mastering Sales Qualification for Effective Lead Conversion | Gong
                      - generic [ref=e1297]:
                        - generic [ref=e1298]:
                          - generic [ref=e1300]: Consulting & Business Development Initiatives
                          - generic [ref=e1302]: Sales Execution & Deal Closure
                        - separator [ref=e1303]
                        - generic [ref=e1304]:
                          - generic [ref=e1305]: Mandatory
                          - generic [ref=e1306]: Assigned by Admin
                  - generic [ref=e1309] [cursor=pointer]:
                    - generic [ref=e1310]:
                      - generic [ref=e1312]:
                        - generic [ref=e1313]: Due
                        - generic [ref=e1314]: N/A
                      - generic [ref=e1316]:
                        - status "Individual Content" [ref=e1317]:
                          - img [ref=e1318]:
                            - img [ref=e1319]
                          - generic [ref=e1321]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1323]:
                          - img "step-forward" [ref=e1325]:
                            - img [ref=e1326]
                    - generic [ref=e1328]:
                      - generic [ref=e1330]: Prompt Engineering Guide
                      - generic [ref=e1332]:
                        - generic [ref=e1333]:
                          - generic [ref=e1335]: AI Fluency
                          - generic [ref=e1337]: AI Fluency
                        - separator [ref=e1338]
                        - generic [ref=e1339]:
                          - generic [ref=e1340]: Mandatory
                          - generic [ref=e1341]: Assigned by Admin
                  - generic [ref=e1344] [cursor=pointer]:
                    - generic [ref=e1345]:
                      - generic [ref=e1347]:
                        - generic [ref=e1348]: Due
                        - generic [ref=e1349]: N/A
                      - generic [ref=e1351]:
                        - status "Individual Content" [ref=e1352]:
                          - img [ref=e1353]:
                            - img [ref=e1354]
                          - generic [ref=e1356]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1358]:
                          - img "step-forward" [ref=e1360]:
                            - img [ref=e1361]
                    - generic [ref=e1363]:
                      - generic [ref=e1365]: Challenger Sales Model Summary & Tips | Pipedrive Speaks of pushing the customer to get out of their comfort zone.
                      - generic [ref=e1367]:
                        - generic [ref=e1368]:
                          - generic [ref=e1370]: Consulting & Business Development Initiatives
                          - generic [ref=e1372]: Consultative Selling
                        - separator [ref=e1373]
                        - generic [ref=e1374]:
                          - generic [ref=e1375]: Mandatory
                          - generic [ref=e1376]: Assigned by Admin
                  - generic [ref=e1379] [cursor=pointer]:
                    - generic [ref=e1380]:
                      - generic [ref=e1382]:
                        - generic [ref=e1383]: Due
                        - generic [ref=e1384]: N/A
                      - generic [ref=e1386]:
                        - status "Individual Content" [ref=e1387]:
                          - img [ref=e1388]:
                            - img [ref=e1389]
                          - generic [ref=e1391]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1393]:
                          - img "step-forward" [ref=e1395]:
                            - img [ref=e1396]
                    - generic [ref=e1398]:
                      - generic [ref=e1400]: How to Build Positioning & Messaging (by an ex-Google PMM) - YouTube Gives a concerete, helpful blueprint for making a value proposition and positioning.
                      - generic [ref=e1402]:
                        - generic [ref=e1403]:
                          - generic [ref=e1405]: Consulting & Business Development Initiatives
                          - generic [ref=e1407]: Market Research & Pipeline Generation
                        - separator [ref=e1408]
                        - generic [ref=e1409]:
                          - generic [ref=e1410]: Mandatory
                          - generic [ref=e1411]: Assigned by Admin
                  - generic [ref=e1414] [cursor=pointer]:
                    - generic [ref=e1415]:
                      - generic [ref=e1417]:
                        - generic [ref=e1418]: Due
                        - generic [ref=e1419]: N/A
                      - generic [ref=e1421]:
                        - status "Individual Content" [ref=e1422]:
                          - img [ref=e1423]:
                            - img [ref=e1424]
                          - generic [ref=e1426]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1428]:
                          - img "step-forward" [ref=e1430]:
                            - img [ref=e1431]
                    - generic [ref=e1433]:
                      - generic [ref=e1435]: What Will Happen to Marketing in the Age of AI? | Jessica Apotheker | TED - YouTube Shows how AI tools speed up the marketing process, and help us unlock insights.
                      - generic [ref=e1437]:
                        - generic [ref=e1438]:
                          - generic [ref=e1440]: Consulting & Business Development Initiatives
                          - generic [ref=e1442]: Sales Execution & Deal Closure
                        - separator [ref=e1443]
                        - generic [ref=e1444]:
                          - generic [ref=e1445]: Mandatory
                          - generic [ref=e1446]: Assigned by Admin
                  - generic [ref=e1449] [cursor=pointer]:
                    - generic [ref=e1450]:
                      - generic [ref=e1452]:
                        - generic [ref=e1453]: Due
                        - generic [ref=e1454]: N/A
                      - generic [ref=e1456]:
                        - status "Individual Content" [ref=e1457]:
                          - img [ref=e1458]:
                            - img [ref=e1459]
                          - generic [ref=e1461]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1463]:
                          - img "step-forward" [ref=e1465]:
                            - img [ref=e1466]
                    - generic [ref=e1468]:
                      - generic [ref=e1470]: Building Financial Acumen as a Sales Professional
                      - generic [ref=e1472]:
                        - generic [ref=e1473]:
                          - generic [ref=e1475]: Financial Acumen
                          - generic [ref=e1477]: Financial Acumen
                        - separator [ref=e1478]
                        - generic [ref=e1479]:
                          - generic [ref=e1480]: Mandatory
                          - generic [ref=e1481]: Assigned by Admin
                  - generic [ref=e1484] [cursor=pointer]:
                    - generic [ref=e1485]:
                      - generic [ref=e1487]:
                        - generic [ref=e1488]: Due
                        - generic [ref=e1489]: N/A
                      - generic [ref=e1491]:
                        - status "Individual Content" [ref=e1492]:
                          - img [ref=e1493]:
                            - img [ref=e1494]
                          - generic [ref=e1496]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1498]:
                          - img "step-forward" [ref=e1500]:
                            - img [ref=e1501]
                    - generic [ref=e1503]:
                      - generic [ref=e1505]: 20 Open-Ended Sales Questions That'll Get Prospects Talking to You
                      - generic [ref=e1507]:
                        - generic [ref=e1508]:
                          - generic [ref=e1510]: Consulting & Business Development Initiatives
                          - generic [ref=e1512]: Sales Execution & Deal Closure
                        - separator [ref=e1513]
                        - generic [ref=e1514]:
                          - generic [ref=e1515]: Mandatory
                          - generic [ref=e1516]: Assigned by Admin
                  - generic [ref=e1519] [cursor=pointer]:
                    - generic [ref=e1520]:
                      - generic [ref=e1522]:
                        - generic [ref=e1523]: Due
                        - generic [ref=e1524]: N/A
                      - generic [ref=e1526]:
                        - status "Individual Content" [ref=e1527]:
                          - img [ref=e1528]:
                            - img [ref=e1529]
                          - generic [ref=e1531]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1533]:
                          - img "step-forward" [ref=e1535]:
                            - img [ref=e1536]
                    - generic [ref=e1538]:
                      - generic [ref=e1540]: "Effective Communication Skills: Stakeholder Analysis"
                      - generic [ref=e1542]:
                        - generic [ref=e1543]:
                          - generic [ref=e1545]: Stakeholder & Client Partnership
                          - generic [ref=e1547]: Effective Communication
                        - separator [ref=e1548]
                        - generic [ref=e1549]:
                          - generic [ref=e1550]: Mandatory
                          - generic [ref=e1551]: Assigned by Admin
                  - generic [ref=e1554] [cursor=pointer]:
                    - generic [ref=e1555]:
                      - generic [ref=e1557]:
                        - generic [ref=e1558]: Due
                        - generic [ref=e1559]: N/A
                      - generic [ref=e1561]:
                        - status "Individual Content" [ref=e1562]:
                          - img [ref=e1563]:
                            - img [ref=e1564]
                          - generic [ref=e1566]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1568]:
                          - img "step-forward" [ref=e1570]:
                            - img [ref=e1571]
                    - generic [ref=e1573]:
                      - generic [ref=e1575]: "Cold Calling: How To Turn Prospects Into Customers | Salesforce"
                      - generic [ref=e1577]:
                        - generic [ref=e1578]:
                          - generic [ref=e1580]: Consulting & Business Development Initiatives
                          - generic [ref=e1582]: Sales Execution & Deal Closure
                        - separator [ref=e1583]
                        - generic [ref=e1584]:
                          - generic [ref=e1585]: Mandatory
                          - generic [ref=e1586]: Assigned by Admin
                  - generic [ref=e1589] [cursor=pointer]:
                    - generic [ref=e1590]:
                      - generic [ref=e1592]:
                        - generic [ref=e1593]: Due
                        - generic [ref=e1594]: N/A
                      - generic [ref=e1596]:
                        - status "Individual Content" [ref=e1597]:
                          - img [ref=e1598]:
                            - img [ref=e1599]
                          - generic [ref=e1601]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1603]:
                          - img "step-forward" [ref=e1605]:
                            - img [ref=e1606]
                    - generic [ref=e1608]:
                      - generic [ref=e1610]: Use Body Language to Rock Your Next Presentation [Stanford GSB]
                      - generic [ref=e1612]:
                        - generic [ref=e1613]:
                          - generic [ref=e1615]: Stakeholder & Client Partnership
                          - generic [ref=e1617]: Effective Communication
                        - separator [ref=e1618]
                        - generic [ref=e1619]:
                          - generic [ref=e1620]: Mandatory
                          - generic [ref=e1621]: Assigned by Admin
                  - generic [ref=e1624] [cursor=pointer]:
                    - generic [ref=e1625]:
                      - generic [ref=e1627]:
                        - generic [ref=e1628]: Due
                        - generic [ref=e1629]: N/A
                      - generic [ref=e1631]:
                        - status "Individual Content" [ref=e1632]:
                          - img [ref=e1633]:
                            - img [ref=e1634]
                          - generic [ref=e1636]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1638]:
                          - img "step-forward" [ref=e1640]:
                            - img [ref=e1641]
                    - generic [ref=e1643]:
                      - generic [ref=e1645]: Gemini for Google Workspace | Google Cloud Skills Boost
                      - generic [ref=e1647]:
                        - generic [ref=e1648]:
                          - generic [ref=e1650]: AI Fluency
                          - generic [ref=e1652]: AI Fluency
                        - separator [ref=e1653]
                        - generic [ref=e1654]:
                          - generic [ref=e1655]: Mandatory
                          - generic [ref=e1656]: Assigned by Admin
                  - generic [ref=e1659] [cursor=pointer]:
                    - generic [ref=e1660]:
                      - generic [ref=e1662]:
                        - generic [ref=e1663]: Due
                        - generic [ref=e1664]: N/A
                      - generic [ref=e1666]:
                        - status "Individual Content" [ref=e1667]:
                          - img [ref=e1668]:
                            - img [ref=e1669]
                          - generic [ref=e1671]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1673]:
                          - img "step-forward" [ref=e1675]:
                            - img [ref=e1676]
                    - generic [ref=e1678]:
                      - generic [ref=e1680]: "Daniel Goleman: The 4 domains of emotional intelligence | Daniel Goleman for Big Think+"
                      - generic [ref=e1682]:
                        - generic [ref=e1683]:
                          - generic [ref=e1685]: Stakeholder & Client Partnership
                          - generic [ref=e1687]: Effective Communication
                        - separator [ref=e1688]
                        - generic [ref=e1689]:
                          - generic [ref=e1690]: Mandatory
                          - generic [ref=e1691]: Assigned by Admin
                  - generic [ref=e1694] [cursor=pointer]:
                    - generic [ref=e1695]:
                      - generic [ref=e1697]:
                        - generic [ref=e1698]: Due
                        - generic [ref=e1699]: N/A
                      - generic [ref=e1701]:
                        - status "Individual Content" [ref=e1702]:
                          - img [ref=e1703]:
                            - img [ref=e1704]
                          - generic [ref=e1706]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1708]:
                          - img "step-forward" [ref=e1710]:
                            - img [ref=e1711]
                    - generic [ref=e1713]:
                      - generic [ref=e1715]: Her Cold Email Strategy Has a 43% OPEN RATE! - YouTube Simple tips to make your email stand out from a sea of emails lying around in the inbox.
                      - generic [ref=e1717]:
                        - generic [ref=e1718]:
                          - generic [ref=e1720]: Consulting & Business Development Initiatives
                          - generic [ref=e1722]: Sales Execution & Deal Closure
                        - separator [ref=e1723]
                        - generic [ref=e1724]:
                          - generic [ref=e1725]: Mandatory
                          - generic [ref=e1726]: Assigned by Admin
                  - generic [ref=e1729] [cursor=pointer]:
                    - generic [ref=e1730]:
                      - generic [ref=e1732]:
                        - generic [ref=e1733]: Due
                        - generic [ref=e1734]: N/A
                      - generic [ref=e1736]:
                        - status "Individual Content" [ref=e1737]:
                          - img [ref=e1738]:
                            - img [ref=e1739]
                          - generic [ref=e1741]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1743]:
                          - img "step-forward" [ref=e1745]:
                            - img [ref=e1746]
                    - generic [ref=e1748]:
                      - generic [ref=e1750]: How to Write a Great Value Proposition [7 Top Examples + Template]
                      - generic [ref=e1752]:
                        - generic [ref=e1753]:
                          - generic [ref=e1755]: Consulting & Business Development Initiatives
                          - generic [ref=e1757]: Sales Execution & Deal Closure
                        - separator [ref=e1758]
                        - generic [ref=e1759]:
                          - generic [ref=e1760]: Mandatory
                          - generic [ref=e1761]: Assigned by Admin
                  - generic [ref=e1764] [cursor=pointer]:
                    - generic [ref=e1765]:
                      - generic [ref=e1767]:
                        - generic [ref=e1768]: Due
                        - generic [ref=e1769]: N/A
                      - generic [ref=e1771]:
                        - status "Individual Content" [ref=e1772]:
                          - img [ref=e1773]:
                            - img [ref=e1774]
                          - generic [ref=e1776]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1778]:
                          - img "step-forward" [ref=e1780]:
                            - img [ref=e1781]
                    - generic [ref=e1783]:
                      - generic [ref=e1785]: LinkedIn Sales Navigator for Beginners (Full Course) Goes over a number of features & tools in the program to get what's desired.
                      - generic [ref=e1787]:
                        - generic [ref=e1788]:
                          - generic [ref=e1790]: Consulting & Business Development Initiatives
                          - generic [ref=e1792]: Sales Execution & Deal Closure
                        - separator [ref=e1793]
                        - generic [ref=e1794]:
                          - generic [ref=e1795]: Mandatory
                          - generic [ref=e1796]: Assigned by Admin
                  - generic [ref=e1799] [cursor=pointer]:
                    - generic [ref=e1800]:
                      - generic [ref=e1802]:
                        - generic [ref=e1803]: Due
                        - generic [ref=e1804]: N/A
                      - generic [ref=e1806]:
                        - status "Individual Content" [ref=e1807]:
                          - img [ref=e1808]:
                            - img [ref=e1809]
                          - generic [ref=e1811]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1813]:
                          - img "step-forward" [ref=e1815]:
                            - img [ref=e1816]
                    - generic [ref=e1818]:
                      - generic [ref=e1820]: How to Get B2B Customer Segmentation Right [+Tips]
                      - generic [ref=e1822]:
                        - generic [ref=e1823]:
                          - generic [ref=e1825]: Consulting & Business Development Initiatives
                          - generic [ref=e1827]: Sales Execution & Deal Closure
                        - separator [ref=e1828]
                        - generic [ref=e1829]:
                          - generic [ref=e1830]: Mandatory
                          - generic [ref=e1831]: Assigned by Admin
                  - generic [ref=e1834] [cursor=pointer]:
                    - generic [ref=e1835]:
                      - generic [ref=e1837]:
                        - generic [ref=e1838]: Due
                        - generic [ref=e1839]: N/A
                      - generic [ref=e1841]:
                        - status "Individual Content" [ref=e1842]:
                          - img [ref=e1843]:
                            - img [ref=e1844]
                          - generic [ref=e1846]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1848]:
                          - img "step-forward" [ref=e1850]:
                            - img [ref=e1851]
                    - generic [ref=e1853]:
                      - generic [ref=e1855]: "30 Sales Call Tips: How to Start Conversations so Prospects Don't Hang Up On You"
                      - generic [ref=e1857]:
                        - generic [ref=e1858]:
                          - generic [ref=e1860]: Consulting & Business Development Initiatives
                          - generic [ref=e1862]: Sales Execution & Deal Closure
                        - separator [ref=e1863]
                        - generic [ref=e1864]:
                          - generic [ref=e1865]: Mandatory
                          - generic [ref=e1866]: Assigned by Admin
                  - generic [ref=e1869] [cursor=pointer]:
                    - generic [ref=e1870]:
                      - generic [ref=e1872]:
                        - generic [ref=e1873]: Due
                        - generic [ref=e1874]: N/A
                      - generic [ref=e1876]:
                        - status "Individual Content" [ref=e1877]:
                          - img [ref=e1878]:
                            - img [ref=e1879]
                          - generic [ref=e1881]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1883]:
                          - img "step-forward" [ref=e1885]:
                            - img [ref=e1886]
                    - generic [ref=e1888]:
                      - generic [ref=e1890]: "The art of negotiation: Six must-have strategies | LBS - YouTube"
                      - generic [ref=e1892]:
                        - generic [ref=e1893]:
                          - generic [ref=e1895]: Consulting & Business Development Initiatives
                          - generic [ref=e1897]: Sales Execution & Deal Closure
                        - separator [ref=e1898]
                        - generic [ref=e1899]:
                          - generic [ref=e1900]: Mandatory
                          - generic [ref=e1901]: Assigned by Admin
                  - generic [ref=e1904] [cursor=pointer]:
                    - generic [ref=e1905]:
                      - generic [ref=e1907]:
                        - generic [ref=e1908]: Due
                        - generic [ref=e1909]: 25-06-2026
                      - generic [ref=e1911]:
                        - status "Assigned learning path" [ref=e1912]:
                          - img [ref=e1913]:
                            - img [ref=e1914]
                          - generic [ref=e1916]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e1918]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e1919]:
                      - generic [ref=e1921]: Test sample Learning path Magic 2026
                      - generic [ref=e1923]:
                        - generic [ref=e1924]:
                          - generic [ref=e1926]: Crowd Entertainment
                          - generic [ref=e1928]: Confusion Magic, Vanishing Magic
                        - separator [ref=e1929]
                        - generic [ref=e1930]:
                          - generic [ref=e1931]: Mandatory
                          - generic [ref=e1932]: Assigned by Admin
                  - generic [ref=e1935] [cursor=pointer]:
                    - generic [ref=e1936]:
                      - generic [ref=e1938]:
                        - generic [ref=e1939]: Due
                        - generic [ref=e1940]: 29-05-2026
                      - generic [ref=e1942]:
                        - status "Individual Content" [ref=e1943]:
                          - img [ref=e1944]:
                            - img [ref=e1945]
                          - generic [ref=e1947]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1949]:
                          - img "step-forward" [ref=e1951]:
                            - img [ref=e1952]
                    - generic [ref=e1954]:
                      - generic [ref=e1956]: Introduction to Generative AI [Learning Path]
                      - generic [ref=e1959]:
                        - generic [ref=e1960]: Mandatory
                        - generic [ref=e1961]: Assigned by Admin
                  - generic [ref=e1964] [cursor=pointer]:
                    - generic [ref=e1965]:
                      - generic [ref=e1967]:
                        - generic [ref=e1968]: Due
                        - generic [ref=e1969]: 29-05-2026
                      - generic [ref=e1971]:
                        - status "Individual Content" [ref=e1972]:
                          - img [ref=e1973]:
                            - img [ref=e1974]
                          - generic [ref=e1976]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1978]:
                          - img "step-forward" [ref=e1980]:
                            - img [ref=e1981]
                    - generic [ref=e1983]:
                      - generic [ref=e1985]: Introduction to Generative AI [Learning Path]
                      - generic [ref=e1988]:
                        - generic [ref=e1989]: Mandatory
                        - generic [ref=e1990]: Assigned by Admin
                  - generic [ref=e1993] [cursor=pointer]:
                    - generic [ref=e1994]:
                      - generic [ref=e1996]:
                        - generic [ref=e1997]: Due
                        - generic [ref=e1998]: N/A
                      - generic [ref=e2000]:
                        - status "Individual Content" [ref=e2001]:
                          - img [ref=e2002]:
                            - img [ref=e2003]
                          - generic [ref=e2005]: Individual Content
                        - button "In progress, mark complete" [ref=e2007]:
                          - img [ref=e2009]:
                            - img [ref=e2010]
                    - generic [ref=e2013]:
                      - generic [ref=e2015]: Test sample 2026 001
                      - generic [ref=e2017]:
                        - generic [ref=e2018]:
                          - generic [ref=e2020]: Software Development Lifecycle (SDLC) Management
                          - generic [ref=e2022]: Agile/Scrum Methodologies
                        - separator [ref=e2023]
                        - generic [ref=e2025]: Assigned by Admin
  - generic [ref=e2031]: "0"
```

# Test source

```ts
  235 |       );
  236 |     }
  237 |   }
  238 | 
  239 |   async verifyDisplayedContentsPriority(priorityLevel) {
  240 |     const pills = this.page.locator('[class*="_listPillPriority"]');
  241 |     const count = await pills.count();
  242 |     for (let i = 0; i < count; i++) {
  243 |       const pill = pills.nth(i);
  244 |       const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
  245 |       const contentName = (
  246 |         await pill
  247 |           .locator(
  248 |             "xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]",
  249 |           )
  250 |           .textContent()
  251 |       )
  252 |         ?.replace(/\s+/g, " ")
  253 |         .trim();
  254 |       if (!text.includes(priorityLevel)) {
  255 |         throw new Error(
  256 |           `${contentName} does not have ${priorityLevel} as priority Level`,
  257 |         );
  258 |       }
  259 |       console.log(`${contentName} has priority Level as ${priorityLevel}`);
  260 |     }
  261 |   }
  262 | 
  263 |   async selectSkillCategory(skillCategory) {
  264 |     await this.skillCatgeoryDropdown.click();
  265 |     await this.page.getByText(skillCategory).click();
  266 |     await this.page
  267 |       .locator('[class*="_listPillSkillCategory_"]')
  268 |       .first()
  269 |       .waitFor({ state: "visible" });
  270 |   }
  271 | 
  272 |   async selectSkillName(skillName) {
  273 |     await this.skillNameDropdown.fill(skillName);
  274 |     await this.page.locator(".ant-select-item-option").first().click();
  275 |     await this.page
  276 |       .locator('[class*="_listPillSkillName_"]')
  277 |       .first()
  278 |       .waitFor({ state: "visible" });
  279 |   }
  280 | 
  281 |   async selectDueDates(dueDateStart, dueDateEnd) {
  282 |     await this.dueDateInputs.first().click();
  283 |     await this.dueDateInputs.nth(0).fill(dueDateStart);
  284 |     await this.dueDateInputs.nth(0).press("Enter");
  285 |     await this.dueDateInputs.nth(1).fill(dueDateEnd);
  286 |     await this.dueDateInputs.nth(1).press("Enter");
  287 |     await this.page
  288 |       .locator('[class*="_listDueDate_"]')
  289 |       .first()
  290 |       .waitFor({ state: "visible" });
  291 |   }
  292 | 
  293 |   async selectPriority(priorityLevel) {
  294 |     this.page.getByText(priorityLevel, { exact: true }).click();
  295 |     await this.page
  296 |       .locator('[class*="_listPillPriority"]')
  297 |       .first()
  298 |       .waitFor({ state: "visible" });
  299 |   }
  300 | 
  301 |   async selectStatusAndReturnResponses(status, api_status) {
  302 |     const statusFragment = `status=${api_status.toLowerCase()}`;
  303 | 
  304 |     const makeMatcher = (source) => (resp) =>
  305 |       resp.url().includes(`source=${source}`) &&
  306 |       resp.url().toLowerCase().includes(statusFragment) &&
  307 |       resp.request().method() === "GET" &&
  308 |       resp.status() === 200;
  309 | 
  310 |     const managerPromise = this.page
  311 |       .waitForResponse(makeMatcher("MANAGER"), { timeout: 5000 })
  312 |       .catch(() => null);
  313 |     const adminPromise = this.page
  314 |       .waitForResponse(makeMatcher("ADMIN"), { timeout: 5000 })
  315 |       .catch(() => null);
  316 | 
  317 |     await this.page.getByText(status, { exact: true }).click();
  318 |     await this.page
  319 |       .locator('[class*="_cardListOnly_"]')
  320 |       .first()
  321 |       .waitFor({ state: "visible" });
  322 | 
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
> 335 |       .click();
      |        ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
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
```