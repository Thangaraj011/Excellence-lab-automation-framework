# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixture_based_tests/homepage-learning-path-customized.spec.js >> Homepage Learning path status update validation >> Entire Learning path status update to Completed validation
- Location: tests/specs/fixture_based_tests/homepage-learning-path-customized.spec.js:60:3

# Error details

```
TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 15000ms exceeded.
Call log:
  - waiting for getByText('New Magic Learning path 2026 99', { exact: true })

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
                    - application [ref=e92]
                    - generic:
                      - generic: "59"
                      - generic: Total Assigned
                  - generic [ref=e105]:
                    - generic [ref=e108]: 41 Assigned
                    - generic [ref=e111]: 9 In Progress
                    - generic [ref=e114]: 9 Completed
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
                        - combobox "Sort courses" [ref=e267]
                      - img "down" [ref=e269]:
                        - img [ref=e270]
                    - button "Collapse section" [expanded] [ref=e273] [cursor=pointer]:
                      - img "up" [ref=e275]:
                        - img [ref=e276]
                - generic [ref=e280]:
                  - generic [ref=e283] [cursor=pointer]:
                    - generic [ref=e284]:
                      - generic [ref=e286]:
                        - generic [ref=e287]: Due
                        - generic [ref=e288]: 30-06-2026
                      - generic [ref=e290]:
                        - status "Assigned learning path" [ref=e291]:
                          - img [ref=e292]:
                            - img [ref=e293]
                          - generic [ref=e295]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e297]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e298]:
                      - generic [ref=e300]: AI Engineering | Technical Expert Badges
                      - generic [ref=e302]:
                        - generic [ref=e303]:
                          - generic [ref=e305]: GenAI, Data Science, Cloud Engineering Core
                          - generic [ref=e307]: Secure API Service, AI, Automation & IaC
                        - separator [ref=e308]
                        - generic [ref=e309]:
                          - generic [ref=e310]: Mandatory
                          - generic [ref=e311]: Assigned by Manager
                  - generic [ref=e314] [cursor=pointer]:
                    - generic [ref=e315]:
                      - generic [ref=e317]:
                        - generic [ref=e318]: Due
                        - generic [ref=e319]: 30-05-2026
                      - generic [ref=e321]:
                        - status "Assigned learning path" [ref=e322]:
                          - img [ref=e323]:
                            - img [ref=e324]
                          - generic [ref=e326]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e328]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e329]:
                      - generic [ref=e331]: Thangaraj Testing sample 1
                      - generic [ref=e333]:
                        - generic [ref=e334]:
                          - generic [ref=e336]: GenAI, Data Science, Cloud Engineering Core
                          - generic [ref=e338]: Secure API Service, AI, Automation & IaC
                        - separator [ref=e339]
                        - generic [ref=e340]:
                          - generic [ref=e341]: Mandatory
                          - generic [ref=e342]: Assigned by Manager
                  - generic [ref=e345] [cursor=pointer]:
                    - generic [ref=e346]:
                      - generic [ref=e348]:
                        - generic [ref=e349]: Due
                        - generic [ref=e350]: 28-05-2026
                      - generic [ref=e352]:
                        - status "Assigned learning path" [ref=e353]:
                          - img [ref=e354]:
                            - img [ref=e355]
                          - generic [ref=e357]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e359]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e360]:
                      - generic [ref=e362]: Learning path new case
                      - generic [ref=e364]:
                        - generic [ref=e365]:
                          - generic [ref=e367]: Software Development Lifecycle (SDLC) Management
                          - generic [ref=e369]: Agile/Scrum Methodologies
                        - separator [ref=e370]
                        - generic [ref=e371]:
                          - generic [ref=e372]: Mandatory
                          - generic [ref=e373]: Assigned by Manager
                  - generic [ref=e376] [cursor=pointer]:
                    - generic [ref=e377]:
                      - generic [ref=e379]:
                        - generic [ref=e380]: Due
                        - generic [ref=e381]: 31-05-2026
                      - generic [ref=e383]:
                        - status "Assigned learning path" [ref=e384]:
                          - img [ref=e385]:
                            - img [ref=e386]
                          - generic [ref=e388]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e390]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e391]:
                      - generic [ref=e393]: Typewriting Skills Learning 2026
                      - generic [ref=e395]:
                        - generic [ref=e396]:
                          - generic [ref=e398]: Software Development
                          - generic [ref=e400]: Python Basics
                        - separator [ref=e401]
                        - generic [ref=e402]:
                          - generic [ref=e403]: Mandatory
                          - generic [ref=e404]: Assigned by Manager
                  - generic [ref=e407] [cursor=pointer]:
                    - generic [ref=e408]:
                      - generic [ref=e410]:
                        - generic [ref=e411]: Due
                        - generic [ref=e412]: 28-05-2026
                      - generic [ref=e414]:
                        - status "Individual Content" [ref=e415]:
                          - img [ref=e416]:
                            - img [ref=e417]
                          - generic [ref=e419]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e421]:
                          - img "step-forward" [ref=e423]:
                            - img [ref=e424]
                    - generic [ref=e426]:
                      - generic [ref=e428]: Major comedy show 2026
                      - generic [ref=e431]:
                        - generic [ref=e432]: Mandatory
                        - generic [ref=e433]: Assigned by Manager
                  - generic [ref=e436] [cursor=pointer]:
                    - generic [ref=e437]:
                      - generic [ref=e439]:
                        - generic [ref=e440]: Due
                        - generic [ref=e441]: 25-06-2026
                      - generic [ref=e443]:
                        - status "Individual Content" [ref=e444]:
                          - img [ref=e445]:
                            - img [ref=e446]
                          - generic [ref=e448]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e450]:
                          - img "step-forward" [ref=e452]:
                            - img [ref=e453]
                    - generic [ref=e455]:
                      - generic [ref=e457]: Partners use Gemini Enterpirse
                      - generic [ref=e459]:
                        - generic [ref=e460]:
                          - generic [ref=e462]: AI Fluency
                          - generic [ref=e464]: AI Fluency
                        - separator [ref=e465]
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
  - generic [ref=e2019]: "0"
```

# Test source

```ts
  33  |     this.statusAssignedButton = page.getByText("Assigned", { exact: true });
  34  |     this.statusInProgressButton = page.getByText("In Progress", {
  35  |       exact: true,
  36  |     });
  37  | 
  38  |     this.assignedByManagerSection = page.getByText("Assigned By Manager", {
  39  |       exact: true,
  40  |     });
  41  |     this.managerSortByDropdown = page
  42  |       .getByRole("combobox", { name: "Sort courses" })
  43  |       .first();
  44  |     this.assignedByAdminSection = page.getByText("Assigned By Admin", {
  45  |       exact: true,
  46  |     });
  47  |     this.adminSortByDropdown = page
  48  |       .getByRole("combobox", { name: "Sort courses" })
  49  |       .nth(1);
  50  | 
  51  |     this.managerAssignedContentCards = page.locator(
  52  |       `//span[normalize-space()='Assigned By Manager']/ancestor::div[contains(@class,'ant-card')][1]/following-sibling::div[contains(@class,'ant-card-body')]`,
  53  |     );
  54  |     this.adminAssignedContentCards = page.locator(
  55  |       `//span[normalize-space()='Assigned By Admin']/ancestor::div[contains(@class,'ant-card')][1]/following-sibling::div[contains(@class,'ant-card-body')]`,
  56  |     );
  57  |     this.contentCard = page.locator(
  58  |       '[class*="_listColumn_"] [class*="_listTop_"] [class*="_listHeadingWrap_"]',
  59  |     );
  60  | 
  61  |     this.managerAssignedContentTitles = page.locator(
  62  |       `//span[normalize-space()='Assigned By Manager']/ancestor::div[contains(@class,'ant-card-bordered')][1]/div[contains(@class,'ant-card-body')]//div[contains(@class,'_listHeadingWrap_')]`,
  63  |     );
  64  |     this.adminAssignedContentTitles = page.locator(
  65  |       `//span[normalize-space()='Assigned By Admin']/ancestor::div[contains(@class,'ant-card-bordered')][1]/div[contains(@class,'ant-card-body')]//div[contains(@class,'_listHeadingWrap_')]`,
  66  |     );
  67  | 
  68  |     this.assignedTooltip = page.getByRole("tooltip", {
  69  |       name: "Mark as in progress",
  70  |     });
  71  |     this.inProgressTooltip = page.getByRole("tooltip", {
  72  |       name: "Mark complete",
  73  |     });
  74  |     this.learningPathTooltip = page.getByRole("tooltip", {
  75  |       name: "Click the card to open the learning path",
  76  |     });
  77  | 
  78  |     this.inProgressToast = page.getByText("Marked as in progress");
  79  |     this.markCompleteToast = page
  80  |       .locator("div")
  81  |       .filter({ hasText: "Marked as completed" })
  82  |       .first();
  83  | 
  84  |     this.confirmCompleteCancelButton = page.getByRole("button", {
  85  |       name: "Cancel",
  86  |     });
  87  |     this.yesMarkCompleteButton = page.getByRole("button", {
  88  |       name: "Yes, mark complete",
  89  |     });
  90  |     this.learningPathProgressLocator = this.page.locator(
  91  |       '[class*="_pathProgressPercent_"]',
  92  |     );
  93  |   }
  94  | 
  95  |   async verifyHomepageLoaded() {
  96  |     await this.homepageTitle.waitFor({ state: "visible" });
  97  |     await expect(this.assignedCoursesTab).toBeVisible();
  98  |     await expect(this.aiRecommendationsTab).toBeVisible();
  99  |   }
  100 | 
  101 |   async verifyManagerAndAdminSections() {
  102 |     await expect(this.assignedByManagerSection).toBeVisible();
  103 |     await expect(this.assignedByAdminSection).toBeVisible();
  104 |   }
  105 | 
  106 |   async verifyAssignedTooltip() {
  107 |     await expect(this.assignedTooltip).toBeVisible();
  108 |   }
  109 |   async verifyInProgressTooltip() {
  110 |     await expect(this.inProgressTooltip).toBeVisible();
  111 |   }
  112 |   async verifyLearningPathTooltip() {
  113 |     await expect(this.learningPathTooltip).toBeVisible();
  114 |   }
  115 | 
  116 |   async verifyInProgressToast() {
  117 |     await this.inProgressToast.waitFor({ state: "visible", timeout: 8000 });
  118 |   }
  119 | 
  120 |   async verifyMarkCompleteToast() {
  121 |     await this.markCompleteToast.waitFor({ state: "visible", timeout: 8000 });
  122 |   }
  123 | 
  124 |   async verifyConfirmCompletionDialog(contentName) {
  125 |     await expect(this.page.getByText("Confirm completion")).toBeVisible();
  126 |     await expect(
  127 |       this.page.getByLabel("Confirm completion").getByText(contentName),
  128 |     ).toBeVisible();
  129 |   }
  130 | 
  131 |   async verifyContentVisible(contentName) {
  132 |     const content = this.page.getByText(contentName, { exact: true });
> 133 |     await content.scrollIntoViewIfNeeded();
      |                   ^ TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 15000ms exceeded.
  134 |     await expect(content).toBeVisible();
  135 |   }
  136 | 
  137 |   async verifyLearningPathDetailsScreen(learningPathName) {
  138 |     await expect(
  139 |       this.page.getByRole("heading", { name: `${learningPathName}` }),
  140 |     ).toBeVisible();
  141 |     await expect(this.page.locator(".ant-progress-rail")).toBeVisible();
  142 |   }
  143 | 
  144 |   async verifyFiltersOnLearningPathDetailsScreen() {
  145 |     await expect(
  146 |       this.page.getByRole("heading", { name: "Learning Path Content" }),
  147 |     ).toBeVisible();
  148 |     await expect(this.page.getByText("Quick Filters")).toBeVisible();
  149 |     await expect(this.page.getByText("Priority")).toBeVisible();
  150 |     await expect(
  151 |       this.page.locator("span").filter({ hasText: "Optional" }).first(),
  152 |     ).toBeVisible();
  153 |     await expect(
  154 |       this.page.getByLabel("Filter by priority").getByText("Mandatory"),
  155 |     ).toBeVisible();
  156 |     await expect(this.page.getByText("Status")).toBeVisible();
  157 |     await expect(
  158 |       this.page.locator("span").filter({ hasText: "Assigned" }).nth(1),
  159 |     ).toBeVisible();
  160 |     await expect(
  161 |       this.page.locator("span").filter({ hasText: "In Progress" }).first(),
  162 |     ).toBeVisible();
  163 |     await expect(
  164 |       this.page.locator("span").filter({ hasText: "Completed" }).first(),
  165 |     ).toBeVisible();
  166 |   }
  167 | 
  168 |   async openIndividualContent(contentName) {
  169 |     await this.page.getByText(contentName).click();
  170 |   }
  171 | 
  172 |   async openLearningPath(learningPathName) {
  173 |     const content = this.page.getByText(learningPathName, { exact: true });
  174 |     await content.scrollIntoViewIfNeeded();
  175 |     await expect(content).toBeVisible();
  176 |     await this.page.getByText(learningPathName).click();
  177 |   }
  178 | 
  179 |   async verifySearchContentVisible(courseName, contentName) {
  180 |     await this.searchTextbox.waitFor({ state: "visible" });
  181 |     await this.searchTextbox.fill(courseName);
  182 |     await this.page.waitForLoadState("domcontentloaded");
  183 |     await this.verifyContentVisible(contentName);
  184 |   }
  185 | 
  186 |   async verifyOnlySelectedSkillCategoryContentsVisible(skillCategoryValue) {
  187 |     const pills = this.page.locator("._listPillSkillCategory_p5zy6_654");
  188 |     const count = await pills.count();
  189 |     for (let i = 0; i < count; i++) {
  190 |       const pill = pills.nth(i);
  191 |       const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
  192 |       console.log(`Pill[${i}] text = "${text}"`);
  193 |       const contentName = (
  194 |         await pill
  195 |           .locator(
  196 |             "xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]",
  197 |           )
  198 |           .textContent()
  199 |       )
  200 |         ?.replace(/\s+/g, " ")
  201 |         .trim();
  202 |       if (!text.includes(skillCategoryValue)) {
  203 |         throw new Error(
  204 |           `${contentName} does not have ${skillCategoryValue} as skill category`,
  205 |         );
  206 |       }
  207 |       console.log(
  208 |         `${contentName} has skill category ${skillCategoryValue} as skill category`,
  209 |       );
  210 |     }
  211 |   }
  212 | 
  213 |   async verifyOnlySelectedSkillNameContentsVisible(skillNameValue) {
  214 |     const pills = this.page.locator("._listPillSkillName_p5zy6_670");
  215 |     const count = await pills.count();
  216 |     for (let i = 0; i < count; i++) {
  217 |       const pill = pills.nth(i);
  218 |       const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
  219 |       const contentName = (
  220 |         await pill
  221 |           .locator(
  222 |             "xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]",
  223 |           )
  224 |           .textContent()
  225 |       )
  226 |         ?.replace(/\s+/g, " ")
  227 |         .trim();
  228 |       if (!text.includes(skillNameValue)) {
  229 |         throw new Error(
  230 |           `${contentName} does not have ${skillNameValue} as skill name`,
  231 |         );
  232 |       }
  233 |       console.log(
```