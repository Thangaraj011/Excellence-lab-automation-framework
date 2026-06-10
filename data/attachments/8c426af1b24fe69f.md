# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-filters-validation.spec.js >> Home Page filters validation >> Due Date filter validation
- Location: tests/specs/homepage/homepage-filters-validation.spec.js:29:10

# Error details

```
TimeoutError: locator.press: Timeout 15000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Due Date').and(locator('[date-range="start"]')).nth(1)

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
                    - generic [ref=e266]: 10 Content
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
                        - generic [ref=e292]: 30-06-2026
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
                      - generic [ref=e304]: AI Engineering | Technical Expert Badges
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
                        - generic [ref=e323]: 30-05-2026
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
                      - generic [ref=e335]: Thangaraj Testing sample 1
                      - generic [ref=e337]:
                        - generic [ref=e338]:
                          - generic [ref=e340]: GenAI, Data Science, Cloud Engineering Core
                          - generic [ref=e342]: Secure API Service, AI, Automation & IaC
                        - separator [ref=e343]
                        - generic [ref=e344]:
                          - generic [ref=e345]: Mandatory
                          - generic [ref=e346]: Assigned by Manager
                  - generic [ref=e349] [cursor=pointer]:
                    - generic [ref=e350]:
                      - generic [ref=e352]:
                        - generic [ref=e353]: Due
                        - generic [ref=e354]: 28-05-2026
                      - generic [ref=e356]:
                        - status "Assigned learning path" [ref=e357]:
                          - img [ref=e358]:
                            - img [ref=e359]
                          - generic [ref=e361]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e363]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e364]:
                      - generic [ref=e366]: Learning path new case
                      - generic [ref=e368]:
                        - generic [ref=e369]:
                          - generic [ref=e371]: Software Development Lifecycle (SDLC) Management
                          - generic [ref=e373]: Agile/Scrum Methodologies
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
                      - generic [ref=e397]: New Magic Learning path 2026 99
                      - generic [ref=e399]:
                        - generic [ref=e400]:
                          - generic [ref=e402]: Crowd Entertainment
                          - generic [ref=e404]: Shape Shifting Magic
                        - separator [ref=e405]
                        - generic [ref=e406]:
                          - generic [ref=e407]: Mandatory
                          - generic [ref=e408]: Assigned by Manager
                  - generic [ref=e411] [cursor=pointer]:
                    - generic [ref=e412]:
                      - generic [ref=e414]:
                        - generic [ref=e415]: Due
                        - generic [ref=e416]: 31-05-2026
                      - generic [ref=e418]:
                        - status "Assigned learning path" [ref=e419]:
                          - img [ref=e420]:
                            - img [ref=e421]
                          - generic [ref=e423]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e425]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e426]:
                      - generic [ref=e428]: Typewriting Skills Learning 2026
                      - generic [ref=e430]:
                        - generic [ref=e431]:
                          - generic [ref=e433]: Software Development
                          - generic [ref=e435]: Python Basics
                        - separator [ref=e436]
                        - generic [ref=e437]:
                          - generic [ref=e438]: Mandatory
                          - generic [ref=e439]: Assigned by Manager
                  - generic [ref=e442] [cursor=pointer]:
                    - generic [ref=e443]:
                      - generic [ref=e445]:
                        - generic [ref=e446]: Due
                        - generic [ref=e447]: 28-05-2026
                      - generic [ref=e449]:
                        - status "Individual Content" [ref=e450]:
                          - img [ref=e451]:
                            - img [ref=e452]
                          - generic [ref=e454]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e456]:
                          - img "step-forward" [ref=e458]:
                            - img [ref=e459]
                    - generic [ref=e461]:
                      - generic [ref=e463]: Major comedy show 2026
                      - generic [ref=e466]:
                        - generic [ref=e467]: Mandatory
                        - generic [ref=e468]: Assigned by Manager
                  - generic [ref=e471] [cursor=pointer]:
                    - generic [ref=e472]:
                      - generic [ref=e474]:
                        - generic [ref=e475]: Due
                        - generic [ref=e476]: 31-05-2026
                      - generic [ref=e478]:
                        - status "Individual Content" [ref=e479]:
                          - img [ref=e480]:
                            - img [ref=e481]
                          - generic [ref=e483]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e485]:
                          - img "step-forward" [ref=e487]:
                            - img [ref=e488]
                    - generic [ref=e490]:
                      - generic [ref=e492]: "Software Architecture: REST API Design - The Complete Guide | Udemy"
                      - generic [ref=e494]:
                        - generic [ref=e495]:
                          - generic [ref=e497]: System Design & Architecture
                          - generic [ref=e499]: Microservices Architecture Design
                        - separator [ref=e500]
                        - generic [ref=e501]:
                          - generic [ref=e502]: Mandatory
                          - generic [ref=e503]: Assigned by Manager
                  - generic [ref=e506] [cursor=pointer]:
                    - generic [ref=e507]:
                      - generic [ref=e509]:
                        - generic [ref=e510]: Due
                        - generic [ref=e511]: 28-05-2026
                      - generic [ref=e513]:
                        - status "Individual Content" [ref=e514]:
                          - img [ref=e515]:
                            - img [ref=e516]
                          - generic [ref=e518]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e520]:
                          - img "step-forward" [ref=e522]:
                            - img [ref=e523]
                    - generic [ref=e525]:
                      - generic [ref=e527]: Master Control Override Horizon Zero Dawn
                      - generic [ref=e529]:
                        - generic [ref=e530]:
                          - generic [ref=e532]: Crowd Entertainment, System Design & Architecture, Cloud Engineering Core, Software Development Lifecycle (SDLC) Management, Code Review & Quality Assurance, Programming Proficiency
                          - generic [ref=e534]: Vanishing Magic, Microservices Architecture Design, High-Level Design (HLD) & Low-Level Design (LLD), Cloud Architecture & Solution Design, Architecture Best Practices and Frameworks, Automation & IaC, Agile/Scrum Methodologies, Code Review Methodologies and Test-Driven Development (TDD) Practices, Software Development
                        - separator [ref=e535]
                        - generic [ref=e536]:
                          - generic [ref=e537]: Optional
                          - generic [ref=e538]: Assigned by Admin and Manager
                  - generic [ref=e541] [cursor=pointer]:
                    - generic [ref=e542]:
                      - generic [ref=e544]:
                        - generic [ref=e545]: Due
                        - generic [ref=e546]: 23-05-2026
                      - generic [ref=e548]:
                        - status "Assigned learning path" [ref=e549]:
                          - img [ref=e550]:
                            - img [ref=e551]
                          - generic [ref=e553]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e555]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e556]:
                      - generic [ref=e558]: Test sample learning 28723
                      - generic [ref=e561]:
                        - generic [ref=e562]: Optional
                        - generic [ref=e563]: Assigned by Manager
                  - generic [ref=e566] [cursor=pointer]:
                    - generic [ref=e567]:
                      - generic [ref=e569]:
                        - generic [ref=e570]: Due
                        - generic [ref=e571]: 31-05-2026
                      - generic [ref=e573]:
                        - status "Individual Content" [ref=e574]:
                          - img [ref=e575]:
                            - img [ref=e576]
                          - generic [ref=e578]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e580]:
                          - img "step-forward" [ref=e582]:
                            - img [ref=e583]
                    - generic [ref=e585]:
                      - generic [ref=e587]: Global security measures 2026
                      - generic [ref=e589]:
                        - generic [ref=e590]:
                          - generic [ref=e592]: Administration
                          - generic [ref=e594]: Security Management
                        - separator [ref=e595]
                        - generic [ref=e596]:
                          - generic [ref=e597]: Optional
                          - generic [ref=e598]: Assigned by Manager
              - generic [ref=e600]:
                - generic [ref=e604]:
                  - generic [ref=e605]:
                    - generic [ref=e607]:
                      - img "user" [ref=e608]:
                        - img [ref=e609]
                      - text: Assigned By Admin
                    - generic [ref=e612]: 40 Content
                  - generic [ref=e613]:
                    - generic "Sort courses" [ref=e615] [cursor=pointer]:
                      - generic [ref=e616]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e617]
                      - img "down" [ref=e619]:
                        - img [ref=e620]
                    - button "Collapse section" [expanded] [ref=e623] [cursor=pointer]:
                      - img "up" [ref=e625]:
                        - img [ref=e626]
                - generic [ref=e630]:
                  - generic [ref=e633] [cursor=pointer]:
                    - generic [ref=e634]:
                      - generic [ref=e636]:
                        - generic [ref=e637]: Due
                        - generic [ref=e638]: N/A
                      - generic [ref=e640]:
                        - status "Individual Content" [ref=e641]:
                          - img [ref=e642]:
                            - img [ref=e643]
                          - generic [ref=e645]: Individual Content
                        - button "In progress, mark complete" [ref=e647]:
                          - img [ref=e649]:
                            - img [ref=e650]
                    - generic [ref=e653]:
                      - generic [ref=e655]: Generative AI Leader | Google Cloud Skills Boost
                      - generic [ref=e657]:
                        - generic [ref=e658]:
                          - generic [ref=e660]: AI Fluency
                          - generic [ref=e662]: AI Fluency
                        - separator [ref=e663]
                        - generic [ref=e664]:
                          - generic [ref=e665]: Mandatory
                          - generic [ref=e666]: Assigned by Admin
                  - generic [ref=e669] [cursor=pointer]:
                    - generic [ref=e670]:
                      - generic [ref=e672]:
                        - generic [ref=e673]: Due
                        - generic [ref=e674]: N/A
                      - generic [ref=e676]:
                        - status "Individual Content" [ref=e677]:
                          - img [ref=e678]:
                            - img [ref=e679]
                          - generic [ref=e681]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e683]:
                          - img "step-forward" [ref=e685]:
                            - img [ref=e686]
                    - generic [ref=e688]:
                      - generic [ref=e690]: LinkedIn Sales Navigator MASTERCLASS - Tutorial, Tips, Tricks, and Hacks to Find Leads Hands-on demonstration of using the website effectively.
                      - generic [ref=e692]:
                        - generic [ref=e693]:
                          - generic [ref=e695]: Consulting & Business Development Initiatives
                          - generic [ref=e697]: Sales Execution & Deal Closure
                        - separator [ref=e698]
                        - generic [ref=e699]:
                          - generic [ref=e700]: Mandatory
                          - generic [ref=e701]: Assigned by Admin
                  - generic [ref=e704] [cursor=pointer]:
                    - generic [ref=e705]:
                      - generic [ref=e707]:
                        - generic [ref=e708]: Due
                        - generic [ref=e709]: N/A
                      - generic [ref=e711]:
                        - status "Individual Content" [ref=e712]:
                          - img [ref=e713]:
                            - img [ref=e714]
                          - generic [ref=e716]: Individual Content
                        - button "In progress, mark complete" [ref=e718]:
                          - img [ref=e720]:
                            - img [ref=e721]
                    - generic [ref=e724]:
                      - generic [ref=e726]: "122. How To Be More Confident and Calm in Your Communication: Managing the \"ABC’s\" of... [Podcast, Stanford Graduate School of Business]"
                      - generic [ref=e728]:
                        - generic [ref=e729]:
                          - generic [ref=e731]: Stakeholder & Client Partnership
                          - generic [ref=e733]: Effective Communication
                        - separator [ref=e734]
                        - generic [ref=e735]:
                          - generic [ref=e736]: Mandatory
                          - generic [ref=e737]: Assigned by Admin
                  - generic [ref=e740] [cursor=pointer]:
                    - generic [ref=e741]:
                      - generic [ref=e743]:
                        - generic [ref=e744]: Due
                        - generic [ref=e745]: N/A
                      - generic [ref=e747]:
                        - status "Individual Content" [ref=e748]:
                          - img [ref=e749]:
                            - img [ref=e750]
                          - generic [ref=e752]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e754]:
                          - img "step-forward" [ref=e756]:
                            - img [ref=e757]
                    - generic [ref=e759]:
                      - generic [ref=e761]: "Optimize your Email Deliverability: Content | Heinz Marketing"
                      - generic [ref=e763]:
                        - generic [ref=e764]:
                          - generic [ref=e766]: Consulting & Business Development Initiatives
                          - generic [ref=e768]: Sales Execution & Deal Closure
                        - separator [ref=e769]
                        - generic [ref=e770]:
                          - generic [ref=e771]: Mandatory
                          - generic [ref=e772]: Assigned by Admin
                  - generic [ref=e775] [cursor=pointer]:
                    - generic [ref=e776]:
                      - generic [ref=e778]:
                        - generic [ref=e779]: Due
                        - generic [ref=e780]: N/A
                      - generic [ref=e782]:
                        - status "Individual Content" [ref=e783]:
                          - img [ref=e784]:
                            - img [ref=e785]
                          - generic [ref=e787]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e789]:
                          - img "step-forward" [ref=e791]:
                            - img [ref=e792]
                    - generic [ref=e794]:
                      - generic [ref=e796]: "Customer Profiles: How to Build and Use Them - Qualtrics"
                      - generic [ref=e798]:
                        - generic [ref=e799]:
                          - generic [ref=e801]: Consulting & Business Development Initiatives
                          - generic [ref=e803]: Sales Execution & Deal Closure
                        - separator [ref=e804]
                        - generic [ref=e805]:
                          - generic [ref=e806]: Mandatory
                          - generic [ref=e807]: Assigned by Admin
                  - generic [ref=e810] [cursor=pointer]:
                    - generic [ref=e811]:
                      - generic [ref=e813]:
                        - generic [ref=e814]: Due
                        - generic [ref=e815]: N/A
                      - generic [ref=e817]:
                        - status "Individual Content" [ref=e818]:
                          - img [ref=e819]:
                            - img [ref=e820]
                          - generic [ref=e822]: Individual Content
                        - button "In progress, mark complete" [ref=e824]:
                          - img [ref=e826]:
                            - img [ref=e827]
                    - generic [ref=e830]:
                      - generic [ref=e832]: Communicating and Working with Stakeholders | Google Project Management Certificate - YouTube
                      - generic [ref=e834]:
                        - generic [ref=e835]:
                          - generic [ref=e837]: Stakeholder & Client Partnership
                          - generic [ref=e839]: Stakeholder Management, Effective Communication
                        - separator [ref=e840]
                        - generic [ref=e841]:
                          - generic [ref=e842]: Mandatory
                          - generic [ref=e843]: Assigned by Admin
                  - generic [ref=e846] [cursor=pointer]:
                    - generic [ref=e847]:
                      - generic [ref=e849]:
                        - generic [ref=e850]: Due
                        - generic [ref=e851]: N/A
                      - generic [ref=e853]:
                        - status "Individual Content" [ref=e854]:
                          - img [ref=e855]:
                            - img [ref=e856]
                          - generic [ref=e858]: Individual Content
                        - button "In progress, mark complete" [ref=e860]:
                          - img [ref=e862]:
                            - img [ref=e863]
                    - generic [ref=e866]:
                      - generic [ref=e868]: Competitor Analysis and Market Research - Qualtrics
                      - generic [ref=e870]:
                        - generic [ref=e871]:
                          - generic [ref=e873]: Consulting & Business Development Initiatives
                          - generic [ref=e875]: Sales Execution & Deal Closure
                        - separator [ref=e876]
                        - generic [ref=e877]:
                          - generic [ref=e878]: Mandatory
                          - generic [ref=e879]: Assigned by Admin
                  - generic [ref=e882] [cursor=pointer]:
                    - generic [ref=e883]:
                      - generic [ref=e885]:
                        - generic [ref=e886]: Due
                        - generic [ref=e887]: N/A
                      - generic [ref=e889]:
                        - status "Individual Content" [ref=e890]:
                          - img [ref=e891]:
                            - img [ref=e892]
                          - generic [ref=e894]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e896]:
                          - img "step-forward" [ref=e898]:
                            - img [ref=e899]
                    - generic [ref=e901]:
                      - generic [ref=e903]: "AI Boost Bites: Your Edge in the AI-Powered World | Google Cloud Skills Boost"
                      - generic [ref=e905]:
                        - generic [ref=e906]:
                          - generic [ref=e908]: AI Fluency
                          - generic [ref=e910]: AI Fluency
                        - separator [ref=e911]
                        - generic [ref=e912]:
                          - generic [ref=e913]: Mandatory
                          - generic [ref=e914]: Assigned by Admin
                  - generic [ref=e917] [cursor=pointer]:
                    - generic [ref=e918]:
                      - generic [ref=e920]:
                        - generic [ref=e921]: Due
                        - generic [ref=e922]: N/A
                      - generic [ref=e924]:
                        - status "Individual Content" [ref=e925]:
                          - img [ref=e926]:
                            - img [ref=e927]
                          - generic [ref=e929]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e931]:
                          - img "step-forward" [ref=e933]:
                            - img [ref=e934]
                    - generic [ref=e936]:
                      - generic [ref=e938]: "Finance: What Managers Need to Know [HBR]"
                      - generic [ref=e940]:
                        - generic [ref=e941]:
                          - generic [ref=e943]: Financial Acumen
                          - generic [ref=e945]: Financial Acumen
                        - separator [ref=e946]
                        - generic [ref=e947]:
                          - generic [ref=e948]: Mandatory
                          - generic [ref=e949]: Assigned by Admin
                  - generic [ref=e952] [cursor=pointer]:
                    - generic [ref=e953]:
                      - generic [ref=e955]:
                        - generic [ref=e956]: Due
                        - generic [ref=e957]: N/A
                      - generic [ref=e959]:
                        - status "Individual Content" [ref=e960]:
                          - img [ref=e961]:
                            - img [ref=e962]
                          - generic [ref=e964]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e966]:
                          - img "step-forward" [ref=e968]:
                            - img [ref=e969]
                    - generic [ref=e971]:
                      - generic [ref=e973]: What Does Lead Qualification Mean? | How to Qualify Sales Leads Goes over frameworks used to qualify leads, with examples.
                      - generic [ref=e975]:
                        - generic [ref=e976]:
                          - generic [ref=e978]: Consulting & Business Development Initiatives
                          - generic [ref=e980]: Consultative Selling
                        - separator [ref=e981]
                        - generic [ref=e982]:
                          - generic [ref=e983]: Mandatory
                          - generic [ref=e984]: Assigned by Admin
                  - generic [ref=e987] [cursor=pointer]:
                    - generic [ref=e988]:
                      - generic [ref=e990]:
                        - generic [ref=e991]: Due
                        - generic [ref=e992]: N/A
                      - generic [ref=e994]:
                        - status "Individual Content" [ref=e995]:
                          - img [ref=e996]:
                            - img [ref=e997]
                          - generic [ref=e999]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1001]:
                          - img "step-forward" [ref=e1003]:
                            - img [ref=e1004]
                    - generic [ref=e1006]:
                      - generic [ref=e1008]: 5 Rules for Communicating Effectively with Executives
                      - generic [ref=e1010]:
                        - generic [ref=e1011]:
                          - generic [ref=e1013]: Stakeholder & Client Partnership
                          - generic [ref=e1015]: Effective Communication
                        - separator [ref=e1016]
                        - generic [ref=e1017]:
                          - generic [ref=e1018]: Mandatory
                          - generic [ref=e1019]: Assigned by Admin
                  - generic [ref=e1022] [cursor=pointer]:
                    - generic [ref=e1023]:
                      - generic [ref=e1025]:
                        - generic [ref=e1026]: Due
                        - generic [ref=e1027]: N/A
                      - generic [ref=e1029]:
                        - status "Individual Content" [ref=e1030]:
                          - img [ref=e1031]:
                            - img [ref=e1032]
                          - generic [ref=e1034]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1036]:
                          - img "step-forward" [ref=e1038]:
                            - img [ref=e1039]
                    - generic [ref=e1041]:
                      - generic [ref=e1043]: "How to Control Your Emotions During a Difficult Conversation: The Harvard Business Review Guide"
                      - generic [ref=e1045]:
                        - generic [ref=e1046]:
                          - generic [ref=e1048]: Stakeholder & Client Partnership
                          - generic [ref=e1050]: Effective Communication
                        - separator [ref=e1051]
                        - generic [ref=e1052]:
                          - generic [ref=e1053]: Mandatory
                          - generic [ref=e1054]: Assigned by Admin
                  - generic [ref=e1057] [cursor=pointer]:
                    - generic [ref=e1058]:
                      - generic [ref=e1060]:
                        - generic [ref=e1061]: Due
                        - generic [ref=e1062]: N/A
                      - generic [ref=e1064]:
                        - status "Individual Content" [ref=e1065]:
                          - img [ref=e1066]:
                            - img [ref=e1067]
                          - generic [ref=e1069]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1071]:
                          - img "step-forward" [ref=e1073]:
                            - img [ref=e1074]
                    - generic [ref=e1076]:
                      - generic [ref=e1078]: Master the Art of Questions to Unlock Meaningful Conversations - YouTube In an entertaining & interactive way, demonstrates "intentional communication" and the art of asking right questions.
                      - generic [ref=e1080]:
                        - generic [ref=e1081]:
                          - generic [ref=e1083]: Consulting & Business Development Initiatives, Stakeholder & Client Partnership
                          - generic [ref=e1085]: Consultative Selling, Stakeholder Management
                        - separator [ref=e1086]
                        - generic [ref=e1087]:
                          - generic [ref=e1088]: Mandatory
                          - generic [ref=e1089]: Assigned by Admin
                  - generic [ref=e1092] [cursor=pointer]:
                    - generic [ref=e1093]:
                      - generic [ref=e1095]:
                        - generic [ref=e1096]: Due
                        - generic [ref=e1097]: N/A
                      - generic [ref=e1099]:
                        - status "Individual Content" [ref=e1100]:
                          - img [ref=e1101]:
                            - img [ref=e1102]
                          - generic [ref=e1104]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1106]:
                          - img "step-forward" [ref=e1108]:
                            - img [ref=e1109]
                    - generic [ref=e1111]:
                      - generic [ref=e1113]: 23 Elevator Pitch Examples to Inspire Your Own [+Templates & Expert Tips]
                      - generic [ref=e1115]:
                        - generic [ref=e1116]:
                          - generic [ref=e1118]: Consulting & Business Development Initiatives
                          - generic [ref=e1120]: Sales Execution & Deal Closure
                        - separator [ref=e1121]
                        - generic [ref=e1122]:
                          - generic [ref=e1123]: Mandatory
                          - generic [ref=e1124]: Assigned by Admin
                  - generic [ref=e1127] [cursor=pointer]:
                    - generic [ref=e1128]:
                      - generic [ref=e1130]:
                        - generic [ref=e1131]: Due
                        - generic [ref=e1132]: N/A
                      - generic [ref=e1134]:
                        - status "Individual Content" [ref=e1135]:
                          - img [ref=e1136]:
                            - img [ref=e1137]
                          - generic [ref=e1139]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1141]:
                          - img "step-forward" [ref=e1143]:
                            - img [ref=e1144]
                    - generic [ref=e1146]:
                      - generic [ref=e1148]: You Must Understand Your Competition | Wolters Kluwer
                      - generic [ref=e1150]:
                        - generic [ref=e1151]:
                          - generic [ref=e1153]: Consulting & Business Development Initiatives
                          - generic [ref=e1155]: Sales Execution & Deal Closure, Commercial Account Management
                        - separator [ref=e1156]
                        - generic [ref=e1157]:
                          - generic [ref=e1158]: Mandatory
                          - generic [ref=e1159]: Assigned by Admin
                  - generic [ref=e1162] [cursor=pointer]:
                    - generic [ref=e1163]:
                      - generic [ref=e1165]:
                        - generic [ref=e1166]: Due
                        - generic [ref=e1167]: N/A
                      - generic [ref=e1169]:
                        - status "Individual Content" [ref=e1170]:
                          - img [ref=e1171]:
                            - img [ref=e1172]
                          - generic [ref=e1174]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1176]:
                          - img "step-forward" [ref=e1178]:
                            - img [ref=e1179]
                    - generic [ref=e1181]:
                      - generic [ref=e1183]: The science behind dramatically better conversations | Charles Duhigg | TEDxManchester - YouTube Speaks about the role of precise questions to understand the other person's wishes best. "The matching principle".
                      - generic [ref=e1185]:
                        - generic [ref=e1186]:
                          - generic [ref=e1188]: Consulting & Business Development Initiatives, Stakeholder & Client Partnership
                          - generic [ref=e1190]: Consultative Selling, Stakeholder Management
                        - separator [ref=e1191]
                        - generic [ref=e1192]:
                          - generic [ref=e1193]: Mandatory
                          - generic [ref=e1194]: Assigned by Admin
                  - generic [ref=e1197] [cursor=pointer]:
                    - generic [ref=e1198]:
                      - generic [ref=e1200]:
                        - generic [ref=e1201]: Due
                        - generic [ref=e1202]: N/A
                      - generic [ref=e1204]:
                        - status "Individual Content" [ref=e1205]:
                          - img [ref=e1206]:
                            - img [ref=e1207]
                          - generic [ref=e1209]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1211]:
                          - img "step-forward" [ref=e1213]:
                            - img [ref=e1214]
                    - generic [ref=e1216]:
                      - generic [ref=e1218]: Fundamentals of Finance & Economics for Businesses – Crash Course
                      - generic [ref=e1220]:
                        - generic [ref=e1221]:
                          - generic [ref=e1223]: Financial Acumen
                          - generic [ref=e1225]: Financial Acumen
                        - separator [ref=e1226]
                        - generic [ref=e1227]:
                          - generic [ref=e1228]: Mandatory
                          - generic [ref=e1229]: Assigned by Admin
                  - generic [ref=e1232] [cursor=pointer]:
                    - generic [ref=e1233]:
                      - generic [ref=e1235]:
                        - generic [ref=e1236]: Due
                        - generic [ref=e1237]: N/A
                      - generic [ref=e1239]:
                        - status "Individual Content" [ref=e1240]:
                          - img [ref=e1241]:
                            - img [ref=e1242]
                          - generic [ref=e1244]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1246]:
                          - img "step-forward" [ref=e1248]:
                            - img [ref=e1249]
                    - generic [ref=e1251]:
                      - generic [ref=e1253]: "Think Fast, Talk Smart: Communication Techniques - YouTube"
                      - generic [ref=e1255]:
                        - generic [ref=e1256]:
                          - generic [ref=e1258]: Stakeholder & Client Partnership
                          - generic [ref=e1260]: Effective Communication
                        - separator [ref=e1261]
                        - generic [ref=e1262]:
                          - generic [ref=e1263]: Mandatory
                          - generic [ref=e1264]: Assigned by Admin
                  - generic [ref=e1267] [cursor=pointer]:
                    - generic [ref=e1268]:
                      - generic [ref=e1270]:
                        - generic [ref=e1271]: Due
                        - generic [ref=e1272]: N/A
                      - generic [ref=e1274]:
                        - status "Individual Content" [ref=e1275]:
                          - img [ref=e1276]:
                            - img [ref=e1277]
                          - generic [ref=e1279]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1281]:
                          - img "step-forward" [ref=e1283]:
                            - img [ref=e1284]
                    - generic [ref=e1286]:
                      - generic [ref=e1288]: Mastering Sales Qualification for Effective Lead Conversion | Gong
                      - generic [ref=e1290]:
                        - generic [ref=e1291]:
                          - generic [ref=e1293]: Consulting & Business Development Initiatives
                          - generic [ref=e1295]: Sales Execution & Deal Closure
                        - separator [ref=e1296]
                        - generic [ref=e1297]:
                          - generic [ref=e1298]: Mandatory
                          - generic [ref=e1299]: Assigned by Admin
                  - generic [ref=e1302] [cursor=pointer]:
                    - generic [ref=e1303]:
                      - generic [ref=e1305]:
                        - generic [ref=e1306]: Due
                        - generic [ref=e1307]: N/A
                      - generic [ref=e1309]:
                        - status "Individual Content" [ref=e1310]:
                          - img [ref=e1311]:
                            - img [ref=e1312]
                          - generic [ref=e1314]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1316]:
                          - img "step-forward" [ref=e1318]:
                            - img [ref=e1319]
                    - generic [ref=e1321]:
                      - generic [ref=e1323]: Prompt Engineering Guide
                      - generic [ref=e1325]:
                        - generic [ref=e1326]:
                          - generic [ref=e1328]: AI Fluency
                          - generic [ref=e1330]: AI Fluency
                        - separator [ref=e1331]
                        - generic [ref=e1332]:
                          - generic [ref=e1333]: Mandatory
                          - generic [ref=e1334]: Assigned by Admin
                  - generic [ref=e1337] [cursor=pointer]:
                    - generic [ref=e1338]:
                      - generic [ref=e1340]:
                        - generic [ref=e1341]: Due
                        - generic [ref=e1342]: N/A
                      - generic [ref=e1344]:
                        - status "Individual Content" [ref=e1345]:
                          - img [ref=e1346]:
                            - img [ref=e1347]
                          - generic [ref=e1349]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1351]:
                          - img "step-forward" [ref=e1353]:
                            - img [ref=e1354]
                    - generic [ref=e1356]:
                      - generic [ref=e1358]: Challenger Sales Model Summary & Tips | Pipedrive Speaks of pushing the customer to get out of their comfort zone.
                      - generic [ref=e1360]:
                        - generic [ref=e1361]:
                          - generic [ref=e1363]: Consulting & Business Development Initiatives
                          - generic [ref=e1365]: Consultative Selling
                        - separator [ref=e1366]
                        - generic [ref=e1367]:
                          - generic [ref=e1368]: Mandatory
                          - generic [ref=e1369]: Assigned by Admin
                  - generic [ref=e1372] [cursor=pointer]:
                    - generic [ref=e1373]:
                      - generic [ref=e1375]:
                        - generic [ref=e1376]: Due
                        - generic [ref=e1377]: N/A
                      - generic [ref=e1379]:
                        - status "Individual Content" [ref=e1380]:
                          - img [ref=e1381]:
                            - img [ref=e1382]
                          - generic [ref=e1384]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1386]:
                          - img "step-forward" [ref=e1388]:
                            - img [ref=e1389]
                    - generic [ref=e1391]:
                      - generic [ref=e1393]: How to Build Positioning & Messaging (by an ex-Google PMM) - YouTube Gives a concerete, helpful blueprint for making a value proposition and positioning.
                      - generic [ref=e1395]:
                        - generic [ref=e1396]:
                          - generic [ref=e1398]: Consulting & Business Development Initiatives
                          - generic [ref=e1400]: Market Research & Pipeline Generation
                        - separator [ref=e1401]
                        - generic [ref=e1402]:
                          - generic [ref=e1403]: Mandatory
                          - generic [ref=e1404]: Assigned by Admin
                  - generic [ref=e1407] [cursor=pointer]:
                    - generic [ref=e1408]:
                      - generic [ref=e1410]:
                        - generic [ref=e1411]: Due
                        - generic [ref=e1412]: N/A
                      - generic [ref=e1414]:
                        - status "Individual Content" [ref=e1415]:
                          - img [ref=e1416]:
                            - img [ref=e1417]
                          - generic [ref=e1419]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1421]:
                          - img "step-forward" [ref=e1423]:
                            - img [ref=e1424]
                    - generic [ref=e1426]:
                      - generic [ref=e1428]: What Will Happen to Marketing in the Age of AI? | Jessica Apotheker | TED - YouTube Shows how AI tools speed up the marketing process, and help us unlock insights.
                      - generic [ref=e1430]:
                        - generic [ref=e1431]:
                          - generic [ref=e1433]: Consulting & Business Development Initiatives
                          - generic [ref=e1435]: Sales Execution & Deal Closure
                        - separator [ref=e1436]
                        - generic [ref=e1437]:
                          - generic [ref=e1438]: Mandatory
                          - generic [ref=e1439]: Assigned by Admin
                  - generic [ref=e1442] [cursor=pointer]:
                    - generic [ref=e1443]:
                      - generic [ref=e1445]:
                        - generic [ref=e1446]: Due
                        - generic [ref=e1447]: N/A
                      - generic [ref=e1449]:
                        - status "Individual Content" [ref=e1450]:
                          - img [ref=e1451]:
                            - img [ref=e1452]
                          - generic [ref=e1454]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1456]:
                          - img "step-forward" [ref=e1458]:
                            - img [ref=e1459]
                    - generic [ref=e1461]:
                      - generic [ref=e1463]: Building Financial Acumen as a Sales Professional
                      - generic [ref=e1465]:
                        - generic [ref=e1466]:
                          - generic [ref=e1468]: Financial Acumen
                          - generic [ref=e1470]: Financial Acumen
                        - separator [ref=e1471]
                        - generic [ref=e1472]:
                          - generic [ref=e1473]: Mandatory
                          - generic [ref=e1474]: Assigned by Admin
                  - generic [ref=e1477] [cursor=pointer]:
                    - generic [ref=e1478]:
                      - generic [ref=e1480]:
                        - generic [ref=e1481]: Due
                        - generic [ref=e1482]: N/A
                      - generic [ref=e1484]:
                        - status "Individual Content" [ref=e1485]:
                          - img [ref=e1486]:
                            - img [ref=e1487]
                          - generic [ref=e1489]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1491]:
                          - img "step-forward" [ref=e1493]:
                            - img [ref=e1494]
                    - generic [ref=e1496]:
                      - generic [ref=e1498]: 20 Open-Ended Sales Questions That'll Get Prospects Talking to You
                      - generic [ref=e1500]:
                        - generic [ref=e1501]:
                          - generic [ref=e1503]: Consulting & Business Development Initiatives
                          - generic [ref=e1505]: Sales Execution & Deal Closure
                        - separator [ref=e1506]
                        - generic [ref=e1507]:
                          - generic [ref=e1508]: Mandatory
                          - generic [ref=e1509]: Assigned by Admin
                  - generic [ref=e1512] [cursor=pointer]:
                    - generic [ref=e1513]:
                      - generic [ref=e1515]:
                        - generic [ref=e1516]: Due
                        - generic [ref=e1517]: N/A
                      - generic [ref=e1519]:
                        - status "Individual Content" [ref=e1520]:
                          - img [ref=e1521]:
                            - img [ref=e1522]
                          - generic [ref=e1524]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1526]:
                          - img "step-forward" [ref=e1528]:
                            - img [ref=e1529]
                    - generic [ref=e1531]:
                      - generic [ref=e1533]: "Effective Communication Skills: Stakeholder Analysis"
                      - generic [ref=e1535]:
                        - generic [ref=e1536]:
                          - generic [ref=e1538]: Stakeholder & Client Partnership
                          - generic [ref=e1540]: Effective Communication
                        - separator [ref=e1541]
                        - generic [ref=e1542]:
                          - generic [ref=e1543]: Mandatory
                          - generic [ref=e1544]: Assigned by Admin
                  - generic [ref=e1547] [cursor=pointer]:
                    - generic [ref=e1548]:
                      - generic [ref=e1550]:
                        - generic [ref=e1551]: Due
                        - generic [ref=e1552]: N/A
                      - generic [ref=e1554]:
                        - status "Individual Content" [ref=e1555]:
                          - img [ref=e1556]:
                            - img [ref=e1557]
                          - generic [ref=e1559]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1561]:
                          - img "step-forward" [ref=e1563]:
                            - img [ref=e1564]
                    - generic [ref=e1566]:
                      - generic [ref=e1568]: "Cold Calling: How To Turn Prospects Into Customers | Salesforce"
                      - generic [ref=e1570]:
                        - generic [ref=e1571]:
                          - generic [ref=e1573]: Consulting & Business Development Initiatives
                          - generic [ref=e1575]: Sales Execution & Deal Closure
                        - separator [ref=e1576]
                        - generic [ref=e1577]:
                          - generic [ref=e1578]: Mandatory
                          - generic [ref=e1579]: Assigned by Admin
                  - generic [ref=e1582] [cursor=pointer]:
                    - generic [ref=e1583]:
                      - generic [ref=e1585]:
                        - generic [ref=e1586]: Due
                        - generic [ref=e1587]: N/A
                      - generic [ref=e1589]:
                        - status "Individual Content" [ref=e1590]:
                          - img [ref=e1591]:
                            - img [ref=e1592]
                          - generic [ref=e1594]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1596]:
                          - img "step-forward" [ref=e1598]:
                            - img [ref=e1599]
                    - generic [ref=e1601]:
                      - generic [ref=e1603]: Use Body Language to Rock Your Next Presentation [Stanford GSB]
                      - generic [ref=e1605]:
                        - generic [ref=e1606]:
                          - generic [ref=e1608]: Stakeholder & Client Partnership
                          - generic [ref=e1610]: Effective Communication
                        - separator [ref=e1611]
                        - generic [ref=e1612]:
                          - generic [ref=e1613]: Mandatory
                          - generic [ref=e1614]: Assigned by Admin
                  - generic [ref=e1617] [cursor=pointer]:
                    - generic [ref=e1618]:
                      - generic [ref=e1620]:
                        - generic [ref=e1621]: Due
                        - generic [ref=e1622]: N/A
                      - generic [ref=e1624]:
                        - status "Individual Content" [ref=e1625]:
                          - img [ref=e1626]:
                            - img [ref=e1627]
                          - generic [ref=e1629]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1631]:
                          - img "step-forward" [ref=e1633]:
                            - img [ref=e1634]
                    - generic [ref=e1636]:
                      - generic [ref=e1638]: Gemini for Google Workspace | Google Cloud Skills Boost
                      - generic [ref=e1640]:
                        - generic [ref=e1641]:
                          - generic [ref=e1643]: AI Fluency
                          - generic [ref=e1645]: AI Fluency
                        - separator [ref=e1646]
                        - generic [ref=e1647]:
                          - generic [ref=e1648]: Mandatory
                          - generic [ref=e1649]: Assigned by Admin
                  - generic [ref=e1652] [cursor=pointer]:
                    - generic [ref=e1653]:
                      - generic [ref=e1655]:
                        - generic [ref=e1656]: Due
                        - generic [ref=e1657]: N/A
                      - generic [ref=e1659]:
                        - status "Individual Content" [ref=e1660]:
                          - img [ref=e1661]:
                            - img [ref=e1662]
                          - generic [ref=e1664]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1666]:
                          - img "step-forward" [ref=e1668]:
                            - img [ref=e1669]
                    - generic [ref=e1671]:
                      - generic [ref=e1673]: "Daniel Goleman: The 4 domains of emotional intelligence | Daniel Goleman for Big Think+"
                      - generic [ref=e1675]:
                        - generic [ref=e1676]:
                          - generic [ref=e1678]: Stakeholder & Client Partnership
                          - generic [ref=e1680]: Effective Communication
                        - separator [ref=e1681]
                        - generic [ref=e1682]:
                          - generic [ref=e1683]: Mandatory
                          - generic [ref=e1684]: Assigned by Admin
                  - generic [ref=e1687] [cursor=pointer]:
                    - generic [ref=e1688]:
                      - generic [ref=e1690]:
                        - generic [ref=e1691]: Due
                        - generic [ref=e1692]: N/A
                      - generic [ref=e1694]:
                        - status "Individual Content" [ref=e1695]:
                          - img [ref=e1696]:
                            - img [ref=e1697]
                          - generic [ref=e1699]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1701]:
                          - img "step-forward" [ref=e1703]:
                            - img [ref=e1704]
                    - generic [ref=e1706]:
                      - generic [ref=e1708]: Her Cold Email Strategy Has a 43% OPEN RATE! - YouTube Simple tips to make your email stand out from a sea of emails lying around in the inbox.
                      - generic [ref=e1710]:
                        - generic [ref=e1711]:
                          - generic [ref=e1713]: Consulting & Business Development Initiatives
                          - generic [ref=e1715]: Sales Execution & Deal Closure
                        - separator [ref=e1716]
                        - generic [ref=e1717]:
                          - generic [ref=e1718]: Mandatory
                          - generic [ref=e1719]: Assigned by Admin
                  - generic [ref=e1722] [cursor=pointer]:
                    - generic [ref=e1723]:
                      - generic [ref=e1725]:
                        - generic [ref=e1726]: Due
                        - generic [ref=e1727]: N/A
                      - generic [ref=e1729]:
                        - status "Individual Content" [ref=e1730]:
                          - img [ref=e1731]:
                            - img [ref=e1732]
                          - generic [ref=e1734]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1736]:
                          - img "step-forward" [ref=e1738]:
                            - img [ref=e1739]
                    - generic [ref=e1741]:
                      - generic [ref=e1743]: How to Write a Great Value Proposition [7 Top Examples + Template]
                      - generic [ref=e1745]:
                        - generic [ref=e1746]:
                          - generic [ref=e1748]: Consulting & Business Development Initiatives
                          - generic [ref=e1750]: Sales Execution & Deal Closure
                        - separator [ref=e1751]
                        - generic [ref=e1752]:
                          - generic [ref=e1753]: Mandatory
                          - generic [ref=e1754]: Assigned by Admin
                  - generic [ref=e1757] [cursor=pointer]:
                    - generic [ref=e1758]:
                      - generic [ref=e1760]:
                        - generic [ref=e1761]: Due
                        - generic [ref=e1762]: N/A
                      - generic [ref=e1764]:
                        - status "Individual Content" [ref=e1765]:
                          - img [ref=e1766]:
                            - img [ref=e1767]
                          - generic [ref=e1769]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1771]:
                          - img "step-forward" [ref=e1773]:
                            - img [ref=e1774]
                    - generic [ref=e1776]:
                      - generic [ref=e1778]: LinkedIn Sales Navigator for Beginners (Full Course) Goes over a number of features & tools in the program to get what's desired.
                      - generic [ref=e1780]:
                        - generic [ref=e1781]:
                          - generic [ref=e1783]: Consulting & Business Development Initiatives
                          - generic [ref=e1785]: Sales Execution & Deal Closure
                        - separator [ref=e1786]
                        - generic [ref=e1787]:
                          - generic [ref=e1788]: Mandatory
                          - generic [ref=e1789]: Assigned by Admin
                  - generic [ref=e1792] [cursor=pointer]:
                    - generic [ref=e1793]:
                      - generic [ref=e1795]:
                        - generic [ref=e1796]: Due
                        - generic [ref=e1797]: N/A
                      - generic [ref=e1799]:
                        - status "Individual Content" [ref=e1800]:
                          - img [ref=e1801]:
                            - img [ref=e1802]
                          - generic [ref=e1804]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1806]:
                          - img "step-forward" [ref=e1808]:
                            - img [ref=e1809]
                    - generic [ref=e1811]:
                      - generic [ref=e1813]: How to Get B2B Customer Segmentation Right [+Tips]
                      - generic [ref=e1815]:
                        - generic [ref=e1816]:
                          - generic [ref=e1818]: Consulting & Business Development Initiatives
                          - generic [ref=e1820]: Sales Execution & Deal Closure
                        - separator [ref=e1821]
                        - generic [ref=e1822]:
                          - generic [ref=e1823]: Mandatory
                          - generic [ref=e1824]: Assigned by Admin
                  - generic [ref=e1827] [cursor=pointer]:
                    - generic [ref=e1828]:
                      - generic [ref=e1830]:
                        - generic [ref=e1831]: Due
                        - generic [ref=e1832]: N/A
                      - generic [ref=e1834]:
                        - status "Individual Content" [ref=e1835]:
                          - img [ref=e1836]:
                            - img [ref=e1837]
                          - generic [ref=e1839]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1841]:
                          - img "step-forward" [ref=e1843]:
                            - img [ref=e1844]
                    - generic [ref=e1846]:
                      - generic [ref=e1848]: "30 Sales Call Tips: How to Start Conversations so Prospects Don't Hang Up On You"
                      - generic [ref=e1850]:
                        - generic [ref=e1851]:
                          - generic [ref=e1853]: Consulting & Business Development Initiatives
                          - generic [ref=e1855]: Sales Execution & Deal Closure
                        - separator [ref=e1856]
                        - generic [ref=e1857]:
                          - generic [ref=e1858]: Mandatory
                          - generic [ref=e1859]: Assigned by Admin
                  - generic [ref=e1862] [cursor=pointer]:
                    - generic [ref=e1863]:
                      - generic [ref=e1865]:
                        - generic [ref=e1866]: Due
                        - generic [ref=e1867]: N/A
                      - generic [ref=e1869]:
                        - status "Individual Content" [ref=e1870]:
                          - img [ref=e1871]:
                            - img [ref=e1872]
                          - generic [ref=e1874]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1876]:
                          - img "step-forward" [ref=e1878]:
                            - img [ref=e1879]
                    - generic [ref=e1881]:
                      - generic [ref=e1883]: "The art of negotiation: Six must-have strategies | LBS - YouTube"
                      - generic [ref=e1885]:
                        - generic [ref=e1886]:
                          - generic [ref=e1888]: Consulting & Business Development Initiatives
                          - generic [ref=e1890]: Sales Execution & Deal Closure
                        - separator [ref=e1891]
                        - generic [ref=e1892]:
                          - generic [ref=e1893]: Mandatory
                          - generic [ref=e1894]: Assigned by Admin
                  - generic [ref=e1897] [cursor=pointer]:
                    - generic [ref=e1898]:
                      - generic [ref=e1900]:
                        - generic [ref=e1901]: Due
                        - generic [ref=e1902]: 25-06-2026
                      - generic [ref=e1904]:
                        - status "Assigned learning path" [ref=e1905]:
                          - img [ref=e1906]:
                            - img [ref=e1907]
                          - generic [ref=e1909]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e1911]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e1912]:
                      - generic [ref=e1914]: Test sample Learning path Magic 2026
                      - generic [ref=e1916]:
                        - generic [ref=e1917]:
                          - generic [ref=e1919]: Crowd Entertainment
                          - generic [ref=e1921]: Confusion Magic, Vanishing Magic
                        - separator [ref=e1922]
                        - generic [ref=e1923]:
                          - generic [ref=e1924]: Mandatory
                          - generic [ref=e1925]: Assigned by Admin
                  - generic [ref=e1928] [cursor=pointer]:
                    - generic [ref=e1929]:
                      - generic [ref=e1931]:
                        - generic [ref=e1932]: Due
                        - generic [ref=e1933]: 29-05-2026
                      - generic [ref=e1935]:
                        - status "Individual Content" [ref=e1936]:
                          - img [ref=e1937]:
                            - img [ref=e1938]
                          - generic [ref=e1940]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1942]:
                          - img "step-forward" [ref=e1944]:
                            - img [ref=e1945]
                    - generic [ref=e1947]:
                      - generic [ref=e1949]: Introduction to Generative AI [Learning Path]
                      - generic [ref=e1952]:
                        - generic [ref=e1953]: Mandatory
                        - generic [ref=e1954]: Assigned by Admin
                  - generic [ref=e1957] [cursor=pointer]:
                    - generic [ref=e1958]:
                      - generic [ref=e1960]:
                        - generic [ref=e1961]: Due
                        - generic [ref=e1962]: 29-05-2026
                      - generic [ref=e1964]:
                        - status "Individual Content" [ref=e1965]:
                          - img [ref=e1966]:
                            - img [ref=e1967]
                          - generic [ref=e1969]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1971]:
                          - img "step-forward" [ref=e1973]:
                            - img [ref=e1974]
                    - generic [ref=e1976]:
                      - generic [ref=e1978]: Introduction to Generative AI [Learning Path]
                      - generic [ref=e1981]:
                        - generic [ref=e1982]: Mandatory
                        - generic [ref=e1983]: Assigned by Admin
                  - generic [ref=e1986] [cursor=pointer]:
                    - generic [ref=e1987]:
                      - generic [ref=e1989]:
                        - generic [ref=e1990]: Due
                        - generic [ref=e1991]: N/A
                      - generic [ref=e1993]:
                        - status "Individual Content" [ref=e1994]:
                          - img [ref=e1995]:
                            - img [ref=e1996]
                          - generic [ref=e1998]: Individual Content
                        - button "In progress, mark complete" [ref=e2000]:
                          - img [ref=e2002]:
                            - img [ref=e2003]
                    - generic [ref=e2006]:
                      - generic [ref=e2008]: Test sample 2026 001
                      - generic [ref=e2010]:
                        - generic [ref=e2011]:
                          - generic [ref=e2013]: Software Development Lifecycle (SDLC) Management
                          - generic [ref=e2015]: Agile/Scrum Methodologies
                        - separator [ref=e2016]
                        - generic [ref=e2018]: Assigned by Admin
  - generic [ref=e2022]:
    - generic [ref=e2024]:
      - generic [ref=e2025]:
        - button "Last year (Control + left)" [ref=e2026] [cursor=pointer]
        - button "Previous month (PageUp)" [ref=e2028] [cursor=pointer]
        - generic [ref=e2030]:
          - button "Choose a month" [ref=e2031] [cursor=pointer]: May
          - button "Choose a year" [ref=e2032] [cursor=pointer]: "2026"
      - table [ref=e2034]:
        - rowgroup [ref=e2035]:
          - row "Su Mo Tu We Th Fr Sa" [ref=e2036]:
            - columnheader "Su" [ref=e2037]
            - columnheader "Mo" [ref=e2038]
            - columnheader "Tu" [ref=e2039]
            - columnheader "We" [ref=e2040]
            - columnheader "Th" [ref=e2041]
            - columnheader "Fr" [ref=e2042]
            - columnheader "Sa" [ref=e2043]
        - rowgroup [ref=e2044]:
          - row "26 27 28 29 30 1 2" [ref=e2045]:
            - cell "26" [ref=e2046] [cursor=pointer]:
              - generic [ref=e2047]: "26"
            - cell "27" [ref=e2048] [cursor=pointer]:
              - generic [ref=e2049]: "27"
            - cell "28" [ref=e2050] [cursor=pointer]:
              - generic [ref=e2051]: "28"
            - cell "29" [ref=e2052] [cursor=pointer]:
              - generic [ref=e2053]: "29"
            - cell "30" [ref=e2054] [cursor=pointer]:
              - generic [ref=e2055]: "30"
            - cell "1" [ref=e2056] [cursor=pointer]:
              - generic [ref=e2057]: "1"
            - cell "2" [ref=e2058] [cursor=pointer]:
              - generic [ref=e2059]: "2"
          - row "3 4 5 6 7 8 9" [ref=e2060]:
            - cell "3" [ref=e2061] [cursor=pointer]:
              - generic [ref=e2062]: "3"
            - cell "4" [ref=e2063] [cursor=pointer]:
              - generic [ref=e2064]: "4"
            - cell "5" [ref=e2065] [cursor=pointer]:
              - generic [ref=e2066]: "5"
            - cell "6" [ref=e2067] [cursor=pointer]:
              - generic [ref=e2068]: "6"
            - cell "7" [ref=e2069] [cursor=pointer]:
              - generic [ref=e2070]: "7"
            - cell "8" [ref=e2071] [cursor=pointer]:
              - generic [ref=e2072]: "8"
            - cell "9" [ref=e2073] [cursor=pointer]:
              - generic [ref=e2074]: "9"
          - row "10 11 12 13 14 15 16" [ref=e2075]:
            - cell "10" [ref=e2076] [cursor=pointer]:
              - generic [ref=e2077]: "10"
            - cell "11" [ref=e2078] [cursor=pointer]:
              - generic [ref=e2079]: "11"
            - cell "12" [ref=e2080] [cursor=pointer]:
              - generic [ref=e2081]: "12"
            - cell "13" [ref=e2082] [cursor=pointer]:
              - generic [ref=e2083]: "13"
            - cell "14" [ref=e2084] [cursor=pointer]:
              - generic [ref=e2085]: "14"
            - cell "15" [ref=e2086] [cursor=pointer]:
              - generic [ref=e2087]: "15"
            - cell "16" [ref=e2088] [cursor=pointer]:
              - generic [ref=e2089]: "16"
          - row "17 18 19 20 21 22 23" [ref=e2090]:
            - cell "17" [ref=e2091] [cursor=pointer]:
              - generic [ref=e2092]: "17"
            - cell "18" [ref=e2093] [cursor=pointer]:
              - generic [ref=e2094]: "18"
            - cell "19" [ref=e2095] [cursor=pointer]:
              - generic [ref=e2096]: "19"
            - cell "20" [ref=e2097] [cursor=pointer]:
              - generic [ref=e2098]: "20"
            - cell "21" [ref=e2099] [cursor=pointer]:
              - generic [ref=e2100]: "21"
            - cell "22" [ref=e2101] [cursor=pointer]:
              - generic [ref=e2102]: "22"
            - cell "23" [ref=e2103] [cursor=pointer]:
              - generic [ref=e2104]: "23"
          - row "24 25 26 27 28 29 30" [ref=e2105]:
            - cell "24" [ref=e2106] [cursor=pointer]:
              - generic [ref=e2107]: "24"
            - cell "25" [ref=e2108] [cursor=pointer]:
              - generic [ref=e2109]: "25"
            - cell "26" [ref=e2110] [cursor=pointer]:
              - generic [ref=e2111]: "26"
            - cell "27" [ref=e2112] [cursor=pointer]:
              - generic [ref=e2113]: "27"
            - cell "28" [ref=e2114] [cursor=pointer]:
              - generic [ref=e2115]: "28"
            - cell "29" [ref=e2116] [cursor=pointer]:
              - generic [ref=e2117]: "29"
            - cell "30" [ref=e2118] [cursor=pointer]:
              - generic [ref=e2119]: "30"
          - row "31 1 2 3 4 5 6" [ref=e2120]:
            - cell "31" [ref=e2121] [cursor=pointer]:
              - generic [ref=e2122]: "31"
            - cell "1" [ref=e2123] [cursor=pointer]:
              - generic [ref=e2124]: "1"
            - cell "2" [ref=e2125] [cursor=pointer]:
              - generic [ref=e2126]: "2"
            - cell "3" [ref=e2127] [cursor=pointer]:
              - generic [ref=e2128]: "3"
            - cell "4" [ref=e2129] [cursor=pointer]:
              - generic [ref=e2130]: "4"
            - cell "5" [ref=e2131] [cursor=pointer]:
              - generic [ref=e2132]: "5"
            - cell "6" [ref=e2133] [cursor=pointer]:
              - generic [ref=e2134]: "6"
    - generic [ref=e2136]:
      - generic [ref=e2137]:
        - generic [ref=e2138]:
          - button "Choose a month" [ref=e2139] [cursor=pointer]: Jun
          - button "Choose a year" [ref=e2140] [cursor=pointer]: "2026"
        - button "Next month (PageDown)" [ref=e2141] [cursor=pointer]
        - button "Next year (Control + right)" [ref=e2143] [cursor=pointer]
      - table [ref=e2146]:
        - rowgroup [ref=e2147]:
          - row "Su Mo Tu We Th Fr Sa" [ref=e2148]:
            - columnheader "Su" [ref=e2149]
            - columnheader "Mo" [ref=e2150]
            - columnheader "Tu" [ref=e2151]
            - columnheader "We" [ref=e2152]
            - columnheader "Th" [ref=e2153]
            - columnheader "Fr" [ref=e2154]
            - columnheader "Sa" [ref=e2155]
        - rowgroup [ref=e2156]:
          - row "31 1 2 3 4 5 6" [ref=e2157]:
            - cell "31" [ref=e2158] [cursor=pointer]:
              - generic [ref=e2159]: "31"
            - cell "1" [ref=e2160] [cursor=pointer]:
              - generic [ref=e2161]: "1"
            - cell "2" [ref=e2162] [cursor=pointer]:
              - generic [ref=e2163]: "2"
            - cell "3" [ref=e2164] [cursor=pointer]:
              - generic [ref=e2165]: "3"
            - cell "4" [ref=e2166] [cursor=pointer]:
              - generic [ref=e2167]: "4"
            - cell "5" [ref=e2168] [cursor=pointer]:
              - generic [ref=e2169]: "5"
            - cell "6" [ref=e2170] [cursor=pointer]:
              - generic [ref=e2171]: "6"
          - row "7 8 9 10 11 12 13" [ref=e2172]:
            - cell "7" [ref=e2173] [cursor=pointer]:
              - generic [ref=e2174]: "7"
            - cell "8" [ref=e2175] [cursor=pointer]:
              - generic [ref=e2176]: "8"
            - cell "9" [ref=e2177] [cursor=pointer]:
              - generic [ref=e2178]: "9"
            - cell "10" [ref=e2179] [cursor=pointer]:
              - generic [ref=e2180]: "10"
            - cell "11" [ref=e2181] [cursor=pointer]:
              - generic [ref=e2182]: "11"
            - cell "12" [ref=e2183] [cursor=pointer]:
              - generic [ref=e2184]: "12"
            - cell "13" [ref=e2185] [cursor=pointer]:
              - generic [ref=e2186]: "13"
          - row "14 15 16 17 18 19 20" [ref=e2187]:
            - cell "14" [ref=e2188] [cursor=pointer]:
              - generic [ref=e2189]: "14"
            - cell "15" [ref=e2190] [cursor=pointer]:
              - generic [ref=e2191]: "15"
            - cell "16" [ref=e2192] [cursor=pointer]:
              - generic [ref=e2193]: "16"
            - cell "17" [ref=e2194] [cursor=pointer]:
              - generic [ref=e2195]: "17"
            - cell "18" [ref=e2196] [cursor=pointer]:
              - generic [ref=e2197]: "18"
            - cell "19" [ref=e2198] [cursor=pointer]:
              - generic [ref=e2199]: "19"
            - cell "20" [ref=e2200] [cursor=pointer]:
              - generic [ref=e2201]: "20"
          - row "21 22 23 24 25 26 27" [ref=e2202]:
            - cell "21" [ref=e2203] [cursor=pointer]:
              - generic [ref=e2204]: "21"
            - cell "22" [ref=e2205] [cursor=pointer]:
              - generic [ref=e2206]: "22"
            - cell "23" [ref=e2207] [cursor=pointer]:
              - generic [ref=e2208]: "23"
            - cell "24" [ref=e2209] [cursor=pointer]:
              - generic [ref=e2210]: "24"
            - cell "25" [ref=e2211] [cursor=pointer]:
              - generic [ref=e2212]: "25"
            - cell "26" [ref=e2213] [cursor=pointer]:
              - generic [ref=e2214]: "26"
            - cell "27" [ref=e2215] [cursor=pointer]:
              - generic [ref=e2216]: "27"
          - row "28 29 30 1 2 3 4" [ref=e2217]:
            - cell "28" [ref=e2218] [cursor=pointer]:
              - generic [ref=e2219]: "28"
            - cell "29" [ref=e2220] [cursor=pointer]:
              - generic [ref=e2221]: "29"
            - cell "30" [ref=e2222] [cursor=pointer]:
              - generic [ref=e2223]: "30"
            - cell "1" [ref=e2224] [cursor=pointer]:
              - generic [ref=e2225]: "1"
            - cell "2" [ref=e2226] [cursor=pointer]:
              - generic [ref=e2227]: "2"
            - cell "3" [ref=e2228] [cursor=pointer]:
              - generic [ref=e2229]: "3"
            - cell "4" [ref=e2230] [cursor=pointer]:
              - generic [ref=e2231]: "4"
          - row "5 6 7 8 9 10 11" [ref=e2232]:
            - cell "5" [ref=e2233] [cursor=pointer]:
              - generic [ref=e2234]: "5"
            - cell "6" [ref=e2235] [cursor=pointer]:
              - generic [ref=e2236]: "6"
            - cell "7" [ref=e2237] [cursor=pointer]:
              - generic [ref=e2238]: "7"
            - cell "8" [ref=e2239] [cursor=pointer]:
              - generic [ref=e2240]: "8"
            - cell "9" [ref=e2241] [cursor=pointer]:
              - generic [ref=e2242]: "9"
            - cell "10" [ref=e2243] [cursor=pointer]:
              - generic [ref=e2244]: "10"
            - cell "11" [ref=e2245] [cursor=pointer]:
              - generic [ref=e2246]: "11"
  - generic [ref=e2247]: "0"
```

# Test source

```ts
  86  |     await content.scrollIntoViewIfNeeded();
  87  |     await expect(content).toBeVisible();
  88  |   }
  89  | 
  90  | 
  91  |   async verifyLearningPathDetailsScreen(learningPathName)
  92  |   {
  93  |     await expect(this.page.getByRole('heading', { name: `${learningPathName}` })).toBeVisible();
  94  |     await expect(this.page.locator('.ant-progress-rail')).toBeVisible();
  95  |   }
  96  | 
  97  |   async verifyFiltersOnLearningPathDetailsScreen(){
  98  |     await expect(this.page.getByRole('heading', { name: 'Learning Path Content' })).toBeVisible();
  99  |     await expect(this.page.getByText('Quick Filters')).toBeVisible();
  100 |     await expect(this.page.getByText('Priority')).toBeVisible();
  101 |     await expect(this.page.locator('span').filter({ hasText: 'Optional' }).first()).toBeVisible();
  102 |     await expect(this.page.getByLabel('Filter by priority').getByText('Mandatory')).toBeVisible();
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
  184 |     await this.dueDateStart.nth(0).press('Enter');
  185 |     await this.dueDateInputs.nth(1).fill(dueDateEnd)
> 186 |     await this.dueDateStart.nth(1).press('Enter');
      |                                    ^ TimeoutError: locator.press: Timeout 15000ms exceeded.
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
  203 |       throw new Error(`Due date "${raw}" is not within ${startDate} – ${endDate}`);
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
```