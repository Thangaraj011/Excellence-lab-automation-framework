# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage_LP/homepage-learning-path.spec.js >> Homepage Learning path status update validation >> Learning path specific individual content status update to Inprogress validation
- Location: tests/specs/homepage_LP/homepage-learning-path.spec.js:5:3

# Error details

```
ReferenceError: contentName is not defined
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
                      - generic: "58"
                      - generic: Total Assigned
                  - generic [ref=e105]:
                    - generic [ref=e108]: 44 Assigned
                    - generic [ref=e111]: 7 In Progress
                    - generic [ref=e114]: 7 Completed
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
                        - generic [ref=e288]: 29-06-2026
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
                      - generic [ref=e300]: learning path sample 2026
                      - generic [ref=e303]:
                        - generic [ref=e304]: Mandatory
                        - generic [ref=e305]: Assigned by Manager
                  - generic [ref=e308] [cursor=pointer]:
                    - generic [ref=e309]:
                      - generic [ref=e311]:
                        - generic [ref=e312]: Due
                        - generic [ref=e313]: 30-06-2026
                      - generic [ref=e315]:
                        - status "Assigned learning path" [ref=e316]:
                          - img [ref=e317]:
                            - img [ref=e318]
                          - generic [ref=e320]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e322]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e323]:
                      - generic [ref=e325]: AI Engineering | Technical Expert Badges
                      - generic [ref=e327]:
                        - generic [ref=e328]:
                          - generic [ref=e330]: GenAI, Data Science, Cloud Engineering Core
                          - generic [ref=e332]: Secure API Service, AI, Automation & IaC
                        - separator [ref=e333]
                        - generic [ref=e334]:
                          - generic [ref=e335]: Mandatory
                          - generic [ref=e336]: Assigned by Manager
                  - generic [ref=e339] [cursor=pointer]:
                    - generic [ref=e340]:
                      - generic [ref=e342]:
                        - generic [ref=e343]: Due
                        - generic [ref=e344]: 30-05-2026
                      - generic [ref=e346]:
                        - status "Assigned learning path" [ref=e347]:
                          - img [ref=e348]:
                            - img [ref=e349]
                          - generic [ref=e351]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e353]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e354]:
                      - generic [ref=e356]: Thangaraj Testing sample 1
                      - generic [ref=e358]:
                        - generic [ref=e359]:
                          - generic [ref=e361]: GenAI, Data Science, Cloud Engineering Core
                          - generic [ref=e363]: Secure API Service, AI, Automation & IaC
                        - separator [ref=e364]
                        - generic [ref=e365]:
                          - generic [ref=e366]: Mandatory
                          - generic [ref=e367]: Assigned by Manager
                  - generic [ref=e370] [cursor=pointer]:
                    - generic [ref=e371]:
                      - generic [ref=e373]:
                        - generic [ref=e374]: Due
                        - generic [ref=e375]: 28-05-2026
                      - generic [ref=e377]:
                        - status "Assigned learning path" [ref=e378]:
                          - img [ref=e379]:
                            - img [ref=e380]
                          - generic [ref=e382]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e384]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e385]:
                      - generic [ref=e387]: Learning path new case
                      - generic [ref=e389]:
                        - generic [ref=e390]:
                          - generic [ref=e392]: Software Development Lifecycle (SDLC) Management
                          - generic [ref=e394]: Agile/Scrum Methodologies
                        - separator [ref=e395]
                        - generic [ref=e396]:
                          - generic [ref=e397]: Mandatory
                          - generic [ref=e398]: Assigned by Manager
                  - generic [ref=e401] [cursor=pointer]:
                    - generic [ref=e402]:
                      - generic [ref=e404]:
                        - generic [ref=e405]: Due
                        - generic [ref=e406]: 31-05-2026
                      - generic [ref=e408]:
                        - status "Assigned learning path" [ref=e409]:
                          - img [ref=e410]:
                            - img [ref=e411]
                          - generic [ref=e413]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e415]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e416]:
                      - generic [ref=e418]: New Magic Learning path 2026 99
                      - generic [ref=e420]:
                        - generic [ref=e421]:
                          - generic [ref=e423]: Crowd Entertainment
                          - generic [ref=e425]: Shape Shifting Magic
                        - separator [ref=e426]
                        - generic [ref=e427]:
                          - generic [ref=e428]: Mandatory
                          - generic [ref=e429]: Assigned by Manager
                  - generic [ref=e432] [cursor=pointer]:
                    - generic [ref=e433]:
                      - generic [ref=e435]:
                        - generic [ref=e436]: Due
                        - generic [ref=e437]: 31-05-2026
                      - generic [ref=e439]:
                        - status "Assigned learning path" [ref=e440]:
                          - img [ref=e441]:
                            - img [ref=e442]
                          - generic [ref=e444]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e446]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e447]:
                      - generic [ref=e449]: Typewriting Skills Learning 2026
                      - generic [ref=e451]:
                        - generic [ref=e452]:
                          - generic [ref=e454]: Software Development
                          - generic [ref=e456]: Python Basics
                        - separator [ref=e457]
                        - generic [ref=e458]:
                          - generic [ref=e459]: Mandatory
                          - generic [ref=e460]: Assigned by Manager
                  - generic [ref=e463] [cursor=pointer]:
                    - generic [ref=e464]:
                      - generic [ref=e466]:
                        - generic [ref=e467]: Due
                        - generic [ref=e468]: 28-05-2026
                      - generic [ref=e470]:
                        - status "Individual Content" [ref=e471]:
                          - img [ref=e472]:
                            - img [ref=e473]
                          - generic [ref=e475]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e477]:
                          - img "step-forward" [ref=e479]:
                            - img [ref=e480]
                    - generic [ref=e482]:
                      - generic [ref=e484]: Major comedy show 2026
                      - generic [ref=e487]:
                        - generic [ref=e488]: Mandatory
                        - generic [ref=e489]: Assigned by Manager
                  - generic [ref=e492] [cursor=pointer]:
                    - generic [ref=e493]:
                      - generic [ref=e495]:
                        - generic [ref=e496]: Due
                        - generic [ref=e497]: 31-05-2026
                      - generic [ref=e499]:
                        - status "Individual Content" [ref=e500]:
                          - img [ref=e501]:
                            - img [ref=e502]
                          - generic [ref=e504]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e506]:
                          - img "step-forward" [ref=e508]:
                            - img [ref=e509]
                    - generic [ref=e511]:
                      - generic [ref=e513]: "Software Architecture: REST API Design - The Complete Guide | Udemy"
                      - generic [ref=e515]:
                        - generic [ref=e516]:
                          - generic [ref=e518]: System Design & Architecture
                          - generic [ref=e520]: Microservices Architecture Design
                        - separator [ref=e521]
                        - generic [ref=e522]:
                          - generic [ref=e523]: Mandatory
                          - generic [ref=e524]: Assigned by Manager
                  - generic [ref=e527] [cursor=pointer]:
                    - generic [ref=e528]:
                      - generic [ref=e530]:
                        - generic [ref=e531]: Due
                        - generic [ref=e532]: 28-05-2026
                      - generic [ref=e534]:
                        - status "Individual Content" [ref=e535]:
                          - img [ref=e536]:
                            - img [ref=e537]
                          - generic [ref=e539]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e541]:
                          - img "step-forward" [ref=e543]:
                            - img [ref=e544]
                    - generic [ref=e546]:
                      - generic [ref=e548]: Master Control Override Horizon Zero Dawn
                      - generic [ref=e550]:
                        - generic [ref=e551]:
                          - generic [ref=e553]: Crowd Entertainment, System Design & Architecture, Cloud Engineering Core, Software Development Lifecycle (SDLC) Management, Code Review & Quality Assurance, Programming Proficiency
                          - generic [ref=e555]: Vanishing Magic, Microservices Architecture Design, High-Level Design (HLD) & Low-Level Design (LLD), Cloud Architecture & Solution Design, Architecture Best Practices and Frameworks, Automation & IaC, Agile/Scrum Methodologies, Code Review Methodologies and Test-Driven Development (TDD) Practices, Software Development
                        - separator [ref=e556]
                        - generic [ref=e557]:
                          - generic [ref=e558]: Optional
                          - generic [ref=e559]: Assigned by Admin and Manager
                  - generic [ref=e562] [cursor=pointer]:
                    - generic [ref=e563]:
                      - generic [ref=e565]:
                        - generic [ref=e566]: Due
                        - generic [ref=e567]: 23-05-2026
                      - generic [ref=e569]:
                        - status "Assigned learning path" [ref=e570]:
                          - img [ref=e571]:
                            - img [ref=e572]
                          - generic [ref=e574]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e576]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e577]:
                      - generic [ref=e579]: Test sample learning 28723
                      - generic [ref=e582]:
                        - generic [ref=e583]: Optional
                        - generic [ref=e584]: Assigned by Manager
                  - generic [ref=e587] [cursor=pointer]:
                    - generic [ref=e588]:
                      - generic [ref=e590]:
                        - generic [ref=e591]: Due
                        - generic [ref=e592]: 31-05-2026
                      - generic [ref=e594]:
                        - status "Individual Content" [ref=e595]:
                          - img [ref=e596]:
                            - img [ref=e597]
                          - generic [ref=e599]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e601]:
                          - img "step-forward" [ref=e603]:
                            - img [ref=e604]
                    - generic [ref=e606]:
                      - generic [ref=e608]: Global security measures 2026
                      - generic [ref=e610]:
                        - generic [ref=e611]:
                          - generic [ref=e613]: Administration
                          - generic [ref=e615]: Security Management
                        - separator [ref=e616]
                        - generic [ref=e617]:
                          - generic [ref=e618]: Optional
                          - generic [ref=e619]: Assigned by Manager
              - generic [ref=e621]:
                - generic [ref=e625]:
                  - generic [ref=e626]:
                    - generic [ref=e628]:
                      - img "user" [ref=e629]:
                        - img [ref=e630]
                      - text: Assigned By Admin
                    - generic [ref=e633]: 40 Content
                  - generic [ref=e634]:
                    - generic "Sort courses" [ref=e636] [cursor=pointer]:
                      - generic [ref=e637]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e638]
                      - img "down" [ref=e640]:
                        - img [ref=e641]
                    - button "Collapse section" [expanded] [ref=e644] [cursor=pointer]:
                      - img "up" [ref=e646]:
                        - img [ref=e647]
                - generic [ref=e651]:
                  - generic [ref=e654] [cursor=pointer]:
                    - generic [ref=e655]:
                      - generic [ref=e657]:
                        - generic [ref=e658]: Due
                        - generic [ref=e659]: N/A
                      - generic [ref=e661]:
                        - status "Individual Content" [ref=e662]:
                          - img [ref=e663]:
                            - img [ref=e664]
                          - generic [ref=e666]: Individual Content
                        - button "In progress, mark complete" [ref=e668]:
                          - img [ref=e670]:
                            - img [ref=e671]
                    - generic [ref=e674]:
                      - generic [ref=e676]: Generative AI Leader | Google Cloud Skills Boost
                      - generic [ref=e678]:
                        - generic [ref=e679]:
                          - generic [ref=e681]: AI Fluency
                          - generic [ref=e683]: AI Fluency
                        - separator [ref=e684]
                        - generic [ref=e685]:
                          - generic [ref=e686]: Mandatory
                          - generic [ref=e687]: Assigned by Admin
                  - generic [ref=e690] [cursor=pointer]:
                    - generic [ref=e691]:
                      - generic [ref=e693]:
                        - generic [ref=e694]: Due
                        - generic [ref=e695]: N/A
                      - generic [ref=e697]:
                        - status "Individual Content" [ref=e698]:
                          - img [ref=e699]:
                            - img [ref=e700]
                          - generic [ref=e702]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e704]:
                          - img "step-forward" [ref=e706]:
                            - img [ref=e707]
                    - generic [ref=e709]:
                      - generic [ref=e711]: LinkedIn Sales Navigator MASTERCLASS - Tutorial, Tips, Tricks, and Hacks to Find Leads Hands-on demonstration of using the website effectively.
                      - generic [ref=e713]:
                        - generic [ref=e714]:
                          - generic [ref=e716]: Consulting & Business Development Initiatives
                          - generic [ref=e718]: Sales Execution & Deal Closure
                        - separator [ref=e719]
                        - generic [ref=e720]:
                          - generic [ref=e721]: Mandatory
                          - generic [ref=e722]: Assigned by Admin
                  - generic [ref=e725] [cursor=pointer]:
                    - generic [ref=e726]:
                      - generic [ref=e728]:
                        - generic [ref=e729]: Due
                        - generic [ref=e730]: N/A
                      - generic [ref=e732]:
                        - status "Individual Content" [ref=e733]:
                          - img [ref=e734]:
                            - img [ref=e735]
                          - generic [ref=e737]: Individual Content
                        - button "In progress, mark complete" [ref=e739]:
                          - img [ref=e741]:
                            - img [ref=e742]
                    - generic [ref=e745]:
                      - generic [ref=e747]: "122. How To Be More Confident and Calm in Your Communication: Managing the \"ABC’s\" of... [Podcast, Stanford Graduate School of Business]"
                      - generic [ref=e749]:
                        - generic [ref=e750]:
                          - generic [ref=e752]: Stakeholder & Client Partnership
                          - generic [ref=e754]: Effective Communication
                        - separator [ref=e755]
                        - generic [ref=e756]:
                          - generic [ref=e757]: Mandatory
                          - generic [ref=e758]: Assigned by Admin
                  - generic [ref=e761] [cursor=pointer]:
                    - generic [ref=e762]:
                      - generic [ref=e764]:
                        - generic [ref=e765]: Due
                        - generic [ref=e766]: N/A
                      - generic [ref=e768]:
                        - status "Individual Content" [ref=e769]:
                          - img [ref=e770]:
                            - img [ref=e771]
                          - generic [ref=e773]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e775]:
                          - img "step-forward" [ref=e777]:
                            - img [ref=e778]
                    - generic [ref=e780]:
                      - generic [ref=e782]: "Optimize your Email Deliverability: Content | Heinz Marketing"
                      - generic [ref=e784]:
                        - generic [ref=e785]:
                          - generic [ref=e787]: Consulting & Business Development Initiatives
                          - generic [ref=e789]: Sales Execution & Deal Closure
                        - separator [ref=e790]
                        - generic [ref=e791]:
                          - generic [ref=e792]: Mandatory
                          - generic [ref=e793]: Assigned by Admin
                  - generic [ref=e796] [cursor=pointer]:
                    - generic [ref=e797]:
                      - generic [ref=e799]:
                        - generic [ref=e800]: Due
                        - generic [ref=e801]: N/A
                      - generic [ref=e803]:
                        - status "Individual Content" [ref=e804]:
                          - img [ref=e805]:
                            - img [ref=e806]
                          - generic [ref=e808]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e810]:
                          - img "step-forward" [ref=e812]:
                            - img [ref=e813]
                    - generic [ref=e815]:
                      - generic [ref=e817]: "Customer Profiles: How to Build and Use Them - Qualtrics"
                      - generic [ref=e819]:
                        - generic [ref=e820]:
                          - generic [ref=e822]: Consulting & Business Development Initiatives
                          - generic [ref=e824]: Sales Execution & Deal Closure
                        - separator [ref=e825]
                        - generic [ref=e826]:
                          - generic [ref=e827]: Mandatory
                          - generic [ref=e828]: Assigned by Admin
                  - generic [ref=e831] [cursor=pointer]:
                    - generic [ref=e832]:
                      - generic [ref=e834]:
                        - generic [ref=e835]: Due
                        - generic [ref=e836]: N/A
                      - generic [ref=e838]:
                        - status "Individual Content" [ref=e839]:
                          - img [ref=e840]:
                            - img [ref=e841]
                          - generic [ref=e843]: Individual Content
                        - button "In progress, mark complete" [ref=e845]:
                          - img [ref=e847]:
                            - img [ref=e848]
                    - generic [ref=e851]:
                      - generic [ref=e853]: Communicating and Working with Stakeholders | Google Project Management Certificate - YouTube
                      - generic [ref=e855]:
                        - generic [ref=e856]:
                          - generic [ref=e858]: Stakeholder & Client Partnership
                          - generic [ref=e860]: Stakeholder Management, Effective Communication
                        - separator [ref=e861]
                        - generic [ref=e862]:
                          - generic [ref=e863]: Mandatory
                          - generic [ref=e864]: Assigned by Admin
                  - generic [ref=e867] [cursor=pointer]:
                    - generic [ref=e868]:
                      - generic [ref=e870]:
                        - generic [ref=e871]: Due
                        - generic [ref=e872]: N/A
                      - generic [ref=e874]:
                        - status "Individual Content" [ref=e875]:
                          - img [ref=e876]:
                            - img [ref=e877]
                          - generic [ref=e879]: Individual Content
                        - button "In progress, mark complete" [ref=e881]:
                          - img [ref=e883]:
                            - img [ref=e884]
                    - generic [ref=e887]:
                      - generic [ref=e889]: Competitor Analysis and Market Research - Qualtrics
                      - generic [ref=e891]:
                        - generic [ref=e892]:
                          - generic [ref=e894]: Consulting & Business Development Initiatives
                          - generic [ref=e896]: Sales Execution & Deal Closure
                        - separator [ref=e897]
                        - generic [ref=e898]:
                          - generic [ref=e899]: Mandatory
                          - generic [ref=e900]: Assigned by Admin
                  - generic [ref=e903] [cursor=pointer]:
                    - generic [ref=e904]:
                      - generic [ref=e906]:
                        - generic [ref=e907]: Due
                        - generic [ref=e908]: N/A
                      - generic [ref=e910]:
                        - status "Individual Content" [ref=e911]:
                          - img [ref=e912]:
                            - img [ref=e913]
                          - generic [ref=e915]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e917]:
                          - img "step-forward" [ref=e919]:
                            - img [ref=e920]
                    - generic [ref=e922]:
                      - generic [ref=e924]: "AI Boost Bites: Your Edge in the AI-Powered World | Google Cloud Skills Boost"
                      - generic [ref=e926]:
                        - generic [ref=e927]:
                          - generic [ref=e929]: AI Fluency
                          - generic [ref=e931]: AI Fluency
                        - separator [ref=e932]
                        - generic [ref=e933]:
                          - generic [ref=e934]: Mandatory
                          - generic [ref=e935]: Assigned by Admin
                  - generic [ref=e938] [cursor=pointer]:
                    - generic [ref=e939]:
                      - generic [ref=e941]:
                        - generic [ref=e942]: Due
                        - generic [ref=e943]: N/A
                      - generic [ref=e945]:
                        - status "Individual Content" [ref=e946]:
                          - img [ref=e947]:
                            - img [ref=e948]
                          - generic [ref=e950]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e952]:
                          - img "step-forward" [ref=e954]:
                            - img [ref=e955]
                    - generic [ref=e957]:
                      - generic [ref=e959]: "Finance: What Managers Need to Know [HBR]"
                      - generic [ref=e961]:
                        - generic [ref=e962]:
                          - generic [ref=e964]: Financial Acumen
                          - generic [ref=e966]: Financial Acumen
                        - separator [ref=e967]
                        - generic [ref=e968]:
                          - generic [ref=e969]: Mandatory
                          - generic [ref=e970]: Assigned by Admin
                  - generic [ref=e973] [cursor=pointer]:
                    - generic [ref=e974]:
                      - generic [ref=e976]:
                        - generic [ref=e977]: Due
                        - generic [ref=e978]: N/A
                      - generic [ref=e980]:
                        - status "Individual Content" [ref=e981]:
                          - img [ref=e982]:
                            - img [ref=e983]
                          - generic [ref=e985]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e987]:
                          - img "step-forward" [ref=e989]:
                            - img [ref=e990]
                    - generic [ref=e992]:
                      - generic [ref=e994]: What Does Lead Qualification Mean? | How to Qualify Sales Leads Goes over frameworks used to qualify leads, with examples.
                      - generic [ref=e996]:
                        - generic [ref=e997]:
                          - generic [ref=e999]: Consulting & Business Development Initiatives
                          - generic [ref=e1001]: Consultative Selling
                        - separator [ref=e1002]
                        - generic [ref=e1003]:
                          - generic [ref=e1004]: Mandatory
                          - generic [ref=e1005]: Assigned by Admin
                  - generic [ref=e1008] [cursor=pointer]:
                    - generic [ref=e1009]:
                      - generic [ref=e1011]:
                        - generic [ref=e1012]: Due
                        - generic [ref=e1013]: N/A
                      - generic [ref=e1015]:
                        - status "Individual Content" [ref=e1016]:
                          - img [ref=e1017]:
                            - img [ref=e1018]
                          - generic [ref=e1020]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1022]:
                          - img "step-forward" [ref=e1024]:
                            - img [ref=e1025]
                    - generic [ref=e1027]:
                      - generic [ref=e1029]: 5 Rules for Communicating Effectively with Executives
                      - generic [ref=e1031]:
                        - generic [ref=e1032]:
                          - generic [ref=e1034]: Stakeholder & Client Partnership
                          - generic [ref=e1036]: Effective Communication
                        - separator [ref=e1037]
                        - generic [ref=e1038]:
                          - generic [ref=e1039]: Mandatory
                          - generic [ref=e1040]: Assigned by Admin
                  - generic [ref=e1043] [cursor=pointer]:
                    - generic [ref=e1044]:
                      - generic [ref=e1046]:
                        - generic [ref=e1047]: Due
                        - generic [ref=e1048]: N/A
                      - generic [ref=e1050]:
                        - status "Individual Content" [ref=e1051]:
                          - img [ref=e1052]:
                            - img [ref=e1053]
                          - generic [ref=e1055]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1057]:
                          - img "step-forward" [ref=e1059]:
                            - img [ref=e1060]
                    - generic [ref=e1062]:
                      - generic [ref=e1064]: "How to Control Your Emotions During a Difficult Conversation: The Harvard Business Review Guide"
                      - generic [ref=e1066]:
                        - generic [ref=e1067]:
                          - generic [ref=e1069]: Stakeholder & Client Partnership
                          - generic [ref=e1071]: Effective Communication
                        - separator [ref=e1072]
                        - generic [ref=e1073]:
                          - generic [ref=e1074]: Mandatory
                          - generic [ref=e1075]: Assigned by Admin
                  - generic [ref=e1078] [cursor=pointer]:
                    - generic [ref=e1079]:
                      - generic [ref=e1081]:
                        - generic [ref=e1082]: Due
                        - generic [ref=e1083]: N/A
                      - generic [ref=e1085]:
                        - status "Individual Content" [ref=e1086]:
                          - img [ref=e1087]:
                            - img [ref=e1088]
                          - generic [ref=e1090]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1092]:
                          - img "step-forward" [ref=e1094]:
                            - img [ref=e1095]
                    - generic [ref=e1097]:
                      - generic [ref=e1099]: Master the Art of Questions to Unlock Meaningful Conversations - YouTube In an entertaining & interactive way, demonstrates "intentional communication" and the art of asking right questions.
                      - generic [ref=e1101]:
                        - generic [ref=e1102]:
                          - generic [ref=e1104]: Consulting & Business Development Initiatives, Stakeholder & Client Partnership
                          - generic [ref=e1106]: Consultative Selling, Stakeholder Management
                        - separator [ref=e1107]
                        - generic [ref=e1108]:
                          - generic [ref=e1109]: Mandatory
                          - generic [ref=e1110]: Assigned by Admin
                  - generic [ref=e1113] [cursor=pointer]:
                    - generic [ref=e1114]:
                      - generic [ref=e1116]:
                        - generic [ref=e1117]: Due
                        - generic [ref=e1118]: N/A
                      - generic [ref=e1120]:
                        - status "Individual Content" [ref=e1121]:
                          - img [ref=e1122]:
                            - img [ref=e1123]
                          - generic [ref=e1125]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1127]:
                          - img "step-forward" [ref=e1129]:
                            - img [ref=e1130]
                    - generic [ref=e1132]:
                      - generic [ref=e1134]: 23 Elevator Pitch Examples to Inspire Your Own [+Templates & Expert Tips]
                      - generic [ref=e1136]:
                        - generic [ref=e1137]:
                          - generic [ref=e1139]: Consulting & Business Development Initiatives
                          - generic [ref=e1141]: Sales Execution & Deal Closure
                        - separator [ref=e1142]
                        - generic [ref=e1143]:
                          - generic [ref=e1144]: Mandatory
                          - generic [ref=e1145]: Assigned by Admin
                  - generic [ref=e1148] [cursor=pointer]:
                    - generic [ref=e1149]:
                      - generic [ref=e1151]:
                        - generic [ref=e1152]: Due
                        - generic [ref=e1153]: N/A
                      - generic [ref=e1155]:
                        - status "Individual Content" [ref=e1156]:
                          - img [ref=e1157]:
                            - img [ref=e1158]
                          - generic [ref=e1160]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1162]:
                          - img "step-forward" [ref=e1164]:
                            - img [ref=e1165]
                    - generic [ref=e1167]:
                      - generic [ref=e1169]: You Must Understand Your Competition | Wolters Kluwer
                      - generic [ref=e1171]:
                        - generic [ref=e1172]:
                          - generic [ref=e1174]: Consulting & Business Development Initiatives
                          - generic [ref=e1176]: Sales Execution & Deal Closure, Commercial Account Management
                        - separator [ref=e1177]
                        - generic [ref=e1178]:
                          - generic [ref=e1179]: Mandatory
                          - generic [ref=e1180]: Assigned by Admin
                  - generic [ref=e1183] [cursor=pointer]:
                    - generic [ref=e1184]:
                      - generic [ref=e1186]:
                        - generic [ref=e1187]: Due
                        - generic [ref=e1188]: N/A
                      - generic [ref=e1190]:
                        - status "Individual Content" [ref=e1191]:
                          - img [ref=e1192]:
                            - img [ref=e1193]
                          - generic [ref=e1195]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1197]:
                          - img "step-forward" [ref=e1199]:
                            - img [ref=e1200]
                    - generic [ref=e1202]:
                      - generic [ref=e1204]: The science behind dramatically better conversations | Charles Duhigg | TEDxManchester - YouTube Speaks about the role of precise questions to understand the other person's wishes best. "The matching principle".
                      - generic [ref=e1206]:
                        - generic [ref=e1207]:
                          - generic [ref=e1209]: Consulting & Business Development Initiatives, Stakeholder & Client Partnership
                          - generic [ref=e1211]: Consultative Selling, Stakeholder Management
                        - separator [ref=e1212]
                        - generic [ref=e1213]:
                          - generic [ref=e1214]: Mandatory
                          - generic [ref=e1215]: Assigned by Admin
                  - generic [ref=e1218] [cursor=pointer]:
                    - generic [ref=e1219]:
                      - generic [ref=e1221]:
                        - generic [ref=e1222]: Due
                        - generic [ref=e1223]: N/A
                      - generic [ref=e1225]:
                        - status "Individual Content" [ref=e1226]:
                          - img [ref=e1227]:
                            - img [ref=e1228]
                          - generic [ref=e1230]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1232]:
                          - img "step-forward" [ref=e1234]:
                            - img [ref=e1235]
                    - generic [ref=e1237]:
                      - generic [ref=e1239]: Fundamentals of Finance & Economics for Businesses – Crash Course
                      - generic [ref=e1241]:
                        - generic [ref=e1242]:
                          - generic [ref=e1244]: Financial Acumen
                          - generic [ref=e1246]: Financial Acumen
                        - separator [ref=e1247]
                        - generic [ref=e1248]:
                          - generic [ref=e1249]: Mandatory
                          - generic [ref=e1250]: Assigned by Admin
                  - generic [ref=e1253] [cursor=pointer]:
                    - generic [ref=e1254]:
                      - generic [ref=e1256]:
                        - generic [ref=e1257]: Due
                        - generic [ref=e1258]: N/A
                      - generic [ref=e1260]:
                        - status "Individual Content" [ref=e1261]:
                          - img [ref=e1262]:
                            - img [ref=e1263]
                          - generic [ref=e1265]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1267]:
                          - img "step-forward" [ref=e1269]:
                            - img [ref=e1270]
                    - generic [ref=e1272]:
                      - generic [ref=e1274]: "Think Fast, Talk Smart: Communication Techniques - YouTube"
                      - generic [ref=e1276]:
                        - generic [ref=e1277]:
                          - generic [ref=e1279]: Stakeholder & Client Partnership
                          - generic [ref=e1281]: Effective Communication
                        - separator [ref=e1282]
                        - generic [ref=e1283]:
                          - generic [ref=e1284]: Mandatory
                          - generic [ref=e1285]: Assigned by Admin
                  - generic [ref=e1288] [cursor=pointer]:
                    - generic [ref=e1289]:
                      - generic [ref=e1291]:
                        - generic [ref=e1292]: Due
                        - generic [ref=e1293]: N/A
                      - generic [ref=e1295]:
                        - status "Individual Content" [ref=e1296]:
                          - img [ref=e1297]:
                            - img [ref=e1298]
                          - generic [ref=e1300]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1302]:
                          - img "step-forward" [ref=e1304]:
                            - img [ref=e1305]
                    - generic [ref=e1307]:
                      - generic [ref=e1309]: Mastering Sales Qualification for Effective Lead Conversion | Gong
                      - generic [ref=e1311]:
                        - generic [ref=e1312]:
                          - generic [ref=e1314]: Consulting & Business Development Initiatives
                          - generic [ref=e1316]: Sales Execution & Deal Closure
                        - separator [ref=e1317]
                        - generic [ref=e1318]:
                          - generic [ref=e1319]: Mandatory
                          - generic [ref=e1320]: Assigned by Admin
                  - generic [ref=e1323] [cursor=pointer]:
                    - generic [ref=e1324]:
                      - generic [ref=e1326]:
                        - generic [ref=e1327]: Due
                        - generic [ref=e1328]: N/A
                      - generic [ref=e1330]:
                        - status "Individual Content" [ref=e1331]:
                          - img [ref=e1332]:
                            - img [ref=e1333]
                          - generic [ref=e1335]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1337]:
                          - img "step-forward" [ref=e1339]:
                            - img [ref=e1340]
                    - generic [ref=e1342]:
                      - generic [ref=e1344]: Prompt Engineering Guide
                      - generic [ref=e1346]:
                        - generic [ref=e1347]:
                          - generic [ref=e1349]: AI Fluency
                          - generic [ref=e1351]: AI Fluency
                        - separator [ref=e1352]
                        - generic [ref=e1353]:
                          - generic [ref=e1354]: Mandatory
                          - generic [ref=e1355]: Assigned by Admin
                  - generic [ref=e1358] [cursor=pointer]:
                    - generic [ref=e1359]:
                      - generic [ref=e1361]:
                        - generic [ref=e1362]: Due
                        - generic [ref=e1363]: N/A
                      - generic [ref=e1365]:
                        - status "Individual Content" [ref=e1366]:
                          - img [ref=e1367]:
                            - img [ref=e1368]
                          - generic [ref=e1370]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1372]:
                          - img "step-forward" [ref=e1374]:
                            - img [ref=e1375]
                    - generic [ref=e1377]:
                      - generic [ref=e1379]: Challenger Sales Model Summary & Tips | Pipedrive Speaks of pushing the customer to get out of their comfort zone.
                      - generic [ref=e1381]:
                        - generic [ref=e1382]:
                          - generic [ref=e1384]: Consulting & Business Development Initiatives
                          - generic [ref=e1386]: Consultative Selling
                        - separator [ref=e1387]
                        - generic [ref=e1388]:
                          - generic [ref=e1389]: Mandatory
                          - generic [ref=e1390]: Assigned by Admin
                  - generic [ref=e1393] [cursor=pointer]:
                    - generic [ref=e1394]:
                      - generic [ref=e1396]:
                        - generic [ref=e1397]: Due
                        - generic [ref=e1398]: N/A
                      - generic [ref=e1400]:
                        - status "Individual Content" [ref=e1401]:
                          - img [ref=e1402]:
                            - img [ref=e1403]
                          - generic [ref=e1405]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1407]:
                          - img "step-forward" [ref=e1409]:
                            - img [ref=e1410]
                    - generic [ref=e1412]:
                      - generic [ref=e1414]: How to Build Positioning & Messaging (by an ex-Google PMM) - YouTube Gives a concerete, helpful blueprint for making a value proposition and positioning.
                      - generic [ref=e1416]:
                        - generic [ref=e1417]:
                          - generic [ref=e1419]: Consulting & Business Development Initiatives
                          - generic [ref=e1421]: Market Research & Pipeline Generation
                        - separator [ref=e1422]
                        - generic [ref=e1423]:
                          - generic [ref=e1424]: Mandatory
                          - generic [ref=e1425]: Assigned by Admin
                  - generic [ref=e1428] [cursor=pointer]:
                    - generic [ref=e1429]:
                      - generic [ref=e1431]:
                        - generic [ref=e1432]: Due
                        - generic [ref=e1433]: N/A
                      - generic [ref=e1435]:
                        - status "Individual Content" [ref=e1436]:
                          - img [ref=e1437]:
                            - img [ref=e1438]
                          - generic [ref=e1440]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1442]:
                          - img "step-forward" [ref=e1444]:
                            - img [ref=e1445]
                    - generic [ref=e1447]:
                      - generic [ref=e1449]: What Will Happen to Marketing in the Age of AI? | Jessica Apotheker | TED - YouTube Shows how AI tools speed up the marketing process, and help us unlock insights.
                      - generic [ref=e1451]:
                        - generic [ref=e1452]:
                          - generic [ref=e1454]: Consulting & Business Development Initiatives
                          - generic [ref=e1456]: Sales Execution & Deal Closure
                        - separator [ref=e1457]
                        - generic [ref=e1458]:
                          - generic [ref=e1459]: Mandatory
                          - generic [ref=e1460]: Assigned by Admin
                  - generic [ref=e1463] [cursor=pointer]:
                    - generic [ref=e1464]:
                      - generic [ref=e1466]:
                        - generic [ref=e1467]: Due
                        - generic [ref=e1468]: N/A
                      - generic [ref=e1470]:
                        - status "Individual Content" [ref=e1471]:
                          - img [ref=e1472]:
                            - img [ref=e1473]
                          - generic [ref=e1475]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1477]:
                          - img "step-forward" [ref=e1479]:
                            - img [ref=e1480]
                    - generic [ref=e1482]:
                      - generic [ref=e1484]: Building Financial Acumen as a Sales Professional
                      - generic [ref=e1486]:
                        - generic [ref=e1487]:
                          - generic [ref=e1489]: Financial Acumen
                          - generic [ref=e1491]: Financial Acumen
                        - separator [ref=e1492]
                        - generic [ref=e1493]:
                          - generic [ref=e1494]: Mandatory
                          - generic [ref=e1495]: Assigned by Admin
                  - generic [ref=e1498] [cursor=pointer]:
                    - generic [ref=e1499]:
                      - generic [ref=e1501]:
                        - generic [ref=e1502]: Due
                        - generic [ref=e1503]: N/A
                      - generic [ref=e1505]:
                        - status "Individual Content" [ref=e1506]:
                          - img [ref=e1507]:
                            - img [ref=e1508]
                          - generic [ref=e1510]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1512]:
                          - img "step-forward" [ref=e1514]:
                            - img [ref=e1515]
                    - generic [ref=e1517]:
                      - generic [ref=e1519]: 20 Open-Ended Sales Questions That'll Get Prospects Talking to You
                      - generic [ref=e1521]:
                        - generic [ref=e1522]:
                          - generic [ref=e1524]: Consulting & Business Development Initiatives
                          - generic [ref=e1526]: Sales Execution & Deal Closure
                        - separator [ref=e1527]
                        - generic [ref=e1528]:
                          - generic [ref=e1529]: Mandatory
                          - generic [ref=e1530]: Assigned by Admin
                  - generic [ref=e1533] [cursor=pointer]:
                    - generic [ref=e1534]:
                      - generic [ref=e1536]:
                        - generic [ref=e1537]: Due
                        - generic [ref=e1538]: N/A
                      - generic [ref=e1540]:
                        - status "Individual Content" [ref=e1541]:
                          - img [ref=e1542]:
                            - img [ref=e1543]
                          - generic [ref=e1545]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1547]:
                          - img "step-forward" [ref=e1549]:
                            - img [ref=e1550]
                    - generic [ref=e1552]:
                      - generic [ref=e1554]: "Effective Communication Skills: Stakeholder Analysis"
                      - generic [ref=e1556]:
                        - generic [ref=e1557]:
                          - generic [ref=e1559]: Stakeholder & Client Partnership
                          - generic [ref=e1561]: Effective Communication
                        - separator [ref=e1562]
                        - generic [ref=e1563]:
                          - generic [ref=e1564]: Mandatory
                          - generic [ref=e1565]: Assigned by Admin
                  - generic [ref=e1568] [cursor=pointer]:
                    - generic [ref=e1569]:
                      - generic [ref=e1571]:
                        - generic [ref=e1572]: Due
                        - generic [ref=e1573]: N/A
                      - generic [ref=e1575]:
                        - status "Individual Content" [ref=e1576]:
                          - img [ref=e1577]:
                            - img [ref=e1578]
                          - generic [ref=e1580]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1582]:
                          - img "step-forward" [ref=e1584]:
                            - img [ref=e1585]
                    - generic [ref=e1587]:
                      - generic [ref=e1589]: "Cold Calling: How To Turn Prospects Into Customers | Salesforce"
                      - generic [ref=e1591]:
                        - generic [ref=e1592]:
                          - generic [ref=e1594]: Consulting & Business Development Initiatives
                          - generic [ref=e1596]: Sales Execution & Deal Closure
                        - separator [ref=e1597]
                        - generic [ref=e1598]:
                          - generic [ref=e1599]: Mandatory
                          - generic [ref=e1600]: Assigned by Admin
                  - generic [ref=e1603] [cursor=pointer]:
                    - generic [ref=e1604]:
                      - generic [ref=e1606]:
                        - generic [ref=e1607]: Due
                        - generic [ref=e1608]: N/A
                      - generic [ref=e1610]:
                        - status "Individual Content" [ref=e1611]:
                          - img [ref=e1612]:
                            - img [ref=e1613]
                          - generic [ref=e1615]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1617]:
                          - img "step-forward" [ref=e1619]:
                            - img [ref=e1620]
                    - generic [ref=e1622]:
                      - generic [ref=e1624]: Use Body Language to Rock Your Next Presentation [Stanford GSB]
                      - generic [ref=e1626]:
                        - generic [ref=e1627]:
                          - generic [ref=e1629]: Stakeholder & Client Partnership
                          - generic [ref=e1631]: Effective Communication
                        - separator [ref=e1632]
                        - generic [ref=e1633]:
                          - generic [ref=e1634]: Mandatory
                          - generic [ref=e1635]: Assigned by Admin
                  - generic [ref=e1638] [cursor=pointer]:
                    - generic [ref=e1639]:
                      - generic [ref=e1641]:
                        - generic [ref=e1642]: Due
                        - generic [ref=e1643]: N/A
                      - generic [ref=e1645]:
                        - status "Individual Content" [ref=e1646]:
                          - img [ref=e1647]:
                            - img [ref=e1648]
                          - generic [ref=e1650]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1652]:
                          - img "step-forward" [ref=e1654]:
                            - img [ref=e1655]
                    - generic [ref=e1657]:
                      - generic [ref=e1659]: Gemini for Google Workspace | Google Cloud Skills Boost
                      - generic [ref=e1661]:
                        - generic [ref=e1662]:
                          - generic [ref=e1664]: AI Fluency
                          - generic [ref=e1666]: AI Fluency
                        - separator [ref=e1667]
                        - generic [ref=e1668]:
                          - generic [ref=e1669]: Mandatory
                          - generic [ref=e1670]: Assigned by Admin
                  - generic [ref=e1673] [cursor=pointer]:
                    - generic [ref=e1674]:
                      - generic [ref=e1676]:
                        - generic [ref=e1677]: Due
                        - generic [ref=e1678]: N/A
                      - generic [ref=e1680]:
                        - status "Individual Content" [ref=e1681]:
                          - img [ref=e1682]:
                            - img [ref=e1683]
                          - generic [ref=e1685]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1687]:
                          - img "step-forward" [ref=e1689]:
                            - img [ref=e1690]
                    - generic [ref=e1692]:
                      - generic [ref=e1694]: "Daniel Goleman: The 4 domains of emotional intelligence | Daniel Goleman for Big Think+"
                      - generic [ref=e1696]:
                        - generic [ref=e1697]:
                          - generic [ref=e1699]: Stakeholder & Client Partnership
                          - generic [ref=e1701]: Effective Communication
                        - separator [ref=e1702]
                        - generic [ref=e1703]:
                          - generic [ref=e1704]: Mandatory
                          - generic [ref=e1705]: Assigned by Admin
                  - generic [ref=e1708] [cursor=pointer]:
                    - generic [ref=e1709]:
                      - generic [ref=e1711]:
                        - generic [ref=e1712]: Due
                        - generic [ref=e1713]: N/A
                      - generic [ref=e1715]:
                        - status "Individual Content" [ref=e1716]:
                          - img [ref=e1717]:
                            - img [ref=e1718]
                          - generic [ref=e1720]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1722]:
                          - img "step-forward" [ref=e1724]:
                            - img [ref=e1725]
                    - generic [ref=e1727]:
                      - generic [ref=e1729]: Her Cold Email Strategy Has a 43% OPEN RATE! - YouTube Simple tips to make your email stand out from a sea of emails lying around in the inbox.
                      - generic [ref=e1731]:
                        - generic [ref=e1732]:
                          - generic [ref=e1734]: Consulting & Business Development Initiatives
                          - generic [ref=e1736]: Sales Execution & Deal Closure
                        - separator [ref=e1737]
                        - generic [ref=e1738]:
                          - generic [ref=e1739]: Mandatory
                          - generic [ref=e1740]: Assigned by Admin
                  - generic [ref=e1743] [cursor=pointer]:
                    - generic [ref=e1744]:
                      - generic [ref=e1746]:
                        - generic [ref=e1747]: Due
                        - generic [ref=e1748]: N/A
                      - generic [ref=e1750]:
                        - status "Individual Content" [ref=e1751]:
                          - img [ref=e1752]:
                            - img [ref=e1753]
                          - generic [ref=e1755]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1757]:
                          - img "step-forward" [ref=e1759]:
                            - img [ref=e1760]
                    - generic [ref=e1762]:
                      - generic [ref=e1764]: How to Write a Great Value Proposition [7 Top Examples + Template]
                      - generic [ref=e1766]:
                        - generic [ref=e1767]:
                          - generic [ref=e1769]: Consulting & Business Development Initiatives
                          - generic [ref=e1771]: Sales Execution & Deal Closure
                        - separator [ref=e1772]
                        - generic [ref=e1773]:
                          - generic [ref=e1774]: Mandatory
                          - generic [ref=e1775]: Assigned by Admin
                  - generic [ref=e1778] [cursor=pointer]:
                    - generic [ref=e1779]:
                      - generic [ref=e1781]:
                        - generic [ref=e1782]: Due
                        - generic [ref=e1783]: N/A
                      - generic [ref=e1785]:
                        - status "Individual Content" [ref=e1786]:
                          - img [ref=e1787]:
                            - img [ref=e1788]
                          - generic [ref=e1790]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1792]:
                          - img "step-forward" [ref=e1794]:
                            - img [ref=e1795]
                    - generic [ref=e1797]:
                      - generic [ref=e1799]: LinkedIn Sales Navigator for Beginners (Full Course) Goes over a number of features & tools in the program to get what's desired.
                      - generic [ref=e1801]:
                        - generic [ref=e1802]:
                          - generic [ref=e1804]: Consulting & Business Development Initiatives
                          - generic [ref=e1806]: Sales Execution & Deal Closure
                        - separator [ref=e1807]
                        - generic [ref=e1808]:
                          - generic [ref=e1809]: Mandatory
                          - generic [ref=e1810]: Assigned by Admin
                  - generic [ref=e1813] [cursor=pointer]:
                    - generic [ref=e1814]:
                      - generic [ref=e1816]:
                        - generic [ref=e1817]: Due
                        - generic [ref=e1818]: N/A
                      - generic [ref=e1820]:
                        - status "Individual Content" [ref=e1821]:
                          - img [ref=e1822]:
                            - img [ref=e1823]
                          - generic [ref=e1825]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1827]:
                          - img "step-forward" [ref=e1829]:
                            - img [ref=e1830]
                    - generic [ref=e1832]:
                      - generic [ref=e1834]: How to Get B2B Customer Segmentation Right [+Tips]
                      - generic [ref=e1836]:
                        - generic [ref=e1837]:
                          - generic [ref=e1839]: Consulting & Business Development Initiatives
                          - generic [ref=e1841]: Sales Execution & Deal Closure
                        - separator [ref=e1842]
                        - generic [ref=e1843]:
                          - generic [ref=e1844]: Mandatory
                          - generic [ref=e1845]: Assigned by Admin
                  - generic [ref=e1848] [cursor=pointer]:
                    - generic [ref=e1849]:
                      - generic [ref=e1851]:
                        - generic [ref=e1852]: Due
                        - generic [ref=e1853]: N/A
                      - generic [ref=e1855]:
                        - status "Individual Content" [ref=e1856]:
                          - img [ref=e1857]:
                            - img [ref=e1858]
                          - generic [ref=e1860]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1862]:
                          - img "step-forward" [ref=e1864]:
                            - img [ref=e1865]
                    - generic [ref=e1867]:
                      - generic [ref=e1869]: "30 Sales Call Tips: How to Start Conversations so Prospects Don't Hang Up On You"
                      - generic [ref=e1871]:
                        - generic [ref=e1872]:
                          - generic [ref=e1874]: Consulting & Business Development Initiatives
                          - generic [ref=e1876]: Sales Execution & Deal Closure
                        - separator [ref=e1877]
                        - generic [ref=e1878]:
                          - generic [ref=e1879]: Mandatory
                          - generic [ref=e1880]: Assigned by Admin
                  - generic [ref=e1883] [cursor=pointer]:
                    - generic [ref=e1884]:
                      - generic [ref=e1886]:
                        - generic [ref=e1887]: Due
                        - generic [ref=e1888]: N/A
                      - generic [ref=e1890]:
                        - status "Individual Content" [ref=e1891]:
                          - img [ref=e1892]:
                            - img [ref=e1893]
                          - generic [ref=e1895]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1897]:
                          - img "step-forward" [ref=e1899]:
                            - img [ref=e1900]
                    - generic [ref=e1902]:
                      - generic [ref=e1904]: "The art of negotiation: Six must-have strategies | LBS - YouTube"
                      - generic [ref=e1906]:
                        - generic [ref=e1907]:
                          - generic [ref=e1909]: Consulting & Business Development Initiatives
                          - generic [ref=e1911]: Sales Execution & Deal Closure
                        - separator [ref=e1912]
                        - generic [ref=e1913]:
                          - generic [ref=e1914]: Mandatory
                          - generic [ref=e1915]: Assigned by Admin
                  - generic [ref=e1918] [cursor=pointer]:
                    - generic [ref=e1919]:
                      - generic [ref=e1921]:
                        - generic [ref=e1922]: Due
                        - generic [ref=e1923]: 25-06-2026
                      - generic [ref=e1925]:
                        - status "Assigned learning path" [ref=e1926]:
                          - img [ref=e1927]:
                            - img [ref=e1928]
                          - generic [ref=e1930]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e1932]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e1933]:
                      - generic [ref=e1935]: Test sample Learning path Magic 2026
                      - generic [ref=e1937]:
                        - generic [ref=e1938]:
                          - generic [ref=e1940]: Crowd Entertainment
                          - generic [ref=e1942]: Confusion Magic, Vanishing Magic
                        - separator [ref=e1943]
                        - generic [ref=e1944]:
                          - generic [ref=e1945]: Mandatory
                          - generic [ref=e1946]: Assigned by Admin
                  - generic [ref=e1949] [cursor=pointer]:
                    - generic [ref=e1950]:
                      - generic [ref=e1952]:
                        - generic [ref=e1953]: Due
                        - generic [ref=e1954]: 29-05-2026
                      - generic [ref=e1956]:
                        - status "Individual Content" [ref=e1957]:
                          - img [ref=e1958]:
                            - img [ref=e1959]
                          - generic [ref=e1961]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1963]:
                          - img "step-forward" [ref=e1965]:
                            - img [ref=e1966]
                    - generic [ref=e1968]:
                      - generic [ref=e1970]: Introduction to Generative AI [Learning Path]
                      - generic [ref=e1973]:
                        - generic [ref=e1974]: Mandatory
                        - generic [ref=e1975]: Assigned by Admin
                  - generic [ref=e1978] [cursor=pointer]:
                    - generic [ref=e1979]:
                      - generic [ref=e1981]:
                        - generic [ref=e1982]: Due
                        - generic [ref=e1983]: 29-05-2026
                      - generic [ref=e1985]:
                        - status "Individual Content" [ref=e1986]:
                          - img [ref=e1987]:
                            - img [ref=e1988]
                          - generic [ref=e1990]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1992]:
                          - img "step-forward" [ref=e1994]:
                            - img [ref=e1995]
                    - generic [ref=e1997]:
                      - generic [ref=e1999]: Introduction to Generative AI [Learning Path]
                      - generic [ref=e2002]:
                        - generic [ref=e2003]: Mandatory
                        - generic [ref=e2004]: Assigned by Admin
                  - generic [ref=e2007] [cursor=pointer]:
                    - generic [ref=e2008]:
                      - generic [ref=e2010]:
                        - generic [ref=e2011]: Due
                        - generic [ref=e2012]: N/A
                      - generic [ref=e2014]:
                        - status "Individual Content" [ref=e2015]:
                          - img [ref=e2016]:
                            - img [ref=e2017]
                          - generic [ref=e2019]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e2021]:
                          - img "step-forward" [ref=e2023]:
                            - img [ref=e2024]
                    - generic [ref=e2026]:
                      - generic [ref=e2028]: Test sample 2026 001
                      - generic [ref=e2030]:
                        - generic [ref=e2031]:
                          - generic [ref=e2033]: Software Development Lifecycle (SDLC) Management
                          - generic [ref=e2035]: Agile/Scrum Methodologies
                        - separator [ref=e2036]
                        - generic [ref=e2038]: Assigned by Admin
  - generic [ref=e2039]: "0"
```

# Test source

```ts
  1   | import {expect} from '@playwright/test';
  2   | 
  3   | export class HomePage {
  4   |   constructor(page) {
  5   |     this.page = page;
  6   | 
  7   |     this.homepageTitle = page.getByRole('heading', { name: 'Homepage' });
  8   |     this.assignedCoursesTab =  page.getByRole('tab', { name: 'Assigned Courses' });
  9   |     this.aiRecommendationsTab =  page.getByRole('tab', { name: 'AI Recommendations' });
  10  | 
  11  |     this.searchTextbox = page.getByPlaceholder('Search');
  12  |     this.skillCatgeoryDropdown = page.getByRole('combobox', { name: 'Skill category' });
  13  |     this.skillNameDropdown = page.getByRole('combobox', { name: 'Skill Name' });
  14  |     this.dueDateStart = page.getByPlaceholder('Due Date').and(page.locator('[date-range="start"]'));
  15  |     this.dueDateEnd = page.getByPlaceholder('Due Date').and(page.locator('[date-range="end"]'));
  16  | 
  17  | 
  18  |     this.priorityOptionalButton = page.getByText('Optional', { exact: true });
  19  |     this.priorityMandatoryButton = page.getByText('Mandatory', { exact: true });
  20  |     this.statusAssignedButton = page.getByText('Assigned', { exact: true });
  21  |     this.statusInProgressButton = page.getByText('In Progress', { exact: true });
  22  | 
  23  | 
  24  |     this.assignedByManagerSection = page.getByText('Assigned By Manager', { exact: true });
  25  |     this.assignedByAdminSection = page.getByText('Assigned By Admin', { exact: true });
  26  | 
  27  | 
  28  |     this.managerAssignedContentCards = page.locator(`//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']`);
  29  |     this.adminAssignedContentCards = page.locator(`//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']`);
  30  |     this.contentCard = page.locator('._listColumn_p5zy6_346 ._listTop_p5zy6_354 ._listHeadingWrap_p5zy6_516');
  31  |     
  32  |     this.assignedTooltip = page.getByRole('tooltip', { name: 'Mark as in progress' });
  33  |     this.inProgressTooltip = page.getByRole('tooltip', { name: 'Mark complete' });
  34  |     this.learningPathTooltip = page.getByRole('tooltip', { name: 'Click the card to open the learning path' });
  35  |     
  36  |     this.inProgressToast = page.getByText('Marked as in progress');
  37  |     this.markCompleteToast = page.locator('div').filter({ hasText: 'Marked as completed' }).first();
  38  |     
  39  |     this.confirmCompleteCancelButton = page.getByRole('button', { name: 'Cancel'});
  40  |     this.yesMarkCompleteButton = page.getByRole('button', { name: 'Yes, mark complete'});
  41  | 
  42  |   }
  43  | 
  44  |   async verifyHomepageLoaded() {
  45  |       await this.homepageTitle.waitFor({ state: 'visible' });
  46  |       await expect(this.assignedCoursesTab).toBeVisible();
  47  |       await expect(this.aiRecommendationsTab).toBeVisible();
  48  |   }
  49  | 
  50  |   async verifyManagerAndAdminSections() {
  51  |     await expect(this.assignedByManagerSection).toBeVisible();
  52  |     await expect(this.assignedByAdminSection).toBeVisible();
  53  |   }
  54  | 
  55  |   async verifyAssignedTooltip()     { await expect(this.assignedTooltip).toBeVisible(); }
  56  |   async verifyInProgressTooltip()   { await expect(this.inProgressTooltip).toBeVisible(); }
  57  |   async verifyLearningPathTooltip() { await expect(this.learningPathTooltip).toBeVisible(); }
  58  | 
  59  |   async verifyInProgressToast() {
  60  |     await this.inProgressToast.waitFor({ state: 'visible', timeout: 8000 });
  61  |   }
  62  | 
  63  |   async verifyMarkCompleteToast() {
  64  |     await this.markCompleteToast.waitFor({ state: 'visible', timeout: 8000 });
  65  |   }
  66  | 
  67  |   async verifyConfirmCompletionDialog(contentName) {
  68  |     await expect(this.page.getByText('Confirm completion')).toBeVisible();
  69  |     await expect(
  70  |       this.page.getByLabel('Confirm completion').getByText(contentName)
  71  |     ).toBeVisible();
  72  |   }
  73  | 
  74  |   async verifyContentVisible(contentName) {
  75  |     const content = this.page.getByText(contentName, { exact: true });
  76  |     await content.scrollIntoViewIfNeeded();
  77  |     await expect(content).toBeVisible();
  78  |   }
  79  | 
  80  |   async openIndividualContent(contentName){
  81  |     await this.page.getByText(`${contentName}`).click();
  82  | 
  83  |   }
  84  | 
  85  |   async openLearningPath(learningPathName){
> 86  |     const content = this.page.getByText(contentName, { exact: true });
      |                                         ^ ReferenceError: contentName is not defined
  87  |     await content.scrollIntoViewIfNeeded();
  88  |     await expect(content).toBeVisible();
  89  |     await this.page.getByText(`${learningPathName}`).click();
  90  |   }
  91  | 
  92  |   async verifyLearningPathDetailsScreen(learningPathName)
  93  |   {
  94  |     await expect(this.page.getByRole('heading', { name: `${learningPathName}` })).toBeVisible();
  95  |     await expect(this.page.locator('.ant-progress-rail')).toBeVisible();
  96  |     const currentProgress = await this.page.locator('._pathProgressPercent_hvo3t_91').textContent();
  97  |     return currentProgress;
  98  |   }
  99  | 
  100 |   async verifyFiltersOnLearningPathDetailsScreen(){
  101 |     await expect(page.getByRole('heading', { name: 'Learning Path Content' })).toBeVisible();
  102 |     await expect(page.getByText('Quick Filters')).toBeVisible();
  103 |     await expect(page.getByText('Priority')).toBeVisible();
  104 |     await expect(page.locator('span').filter({ hasText: 'Optional' }).first()).toBeVisible();
  105 |     await expect(page.getByLabel('Filter by priority').getByText('Mandatory')).toBeVisible();
  106 |     await expect(page.getByText('Status')).toBeVisible();
  107 |     await expect(page.locator('span').filter({ hasText: 'Assigned' }).nth(1)).toBeVisible();
  108 |     await expect(page.locator('span').filter({ hasText: 'In Progress' }).first()).toBeVisible();
  109 |     await expect(page.locator('span').filter({ hasText: 'Completed' }).first()).toBeVisible();
  110 |   }
  111 | 
  112 |   async getListItems(){
  113 |     const items = await this.page.getByRole('listitem').locator('._listHeading_p5zy6_516').allTextContents();
  114 |     console.log(items);
  115 |   }
  116 | 
  117 | 
  118 |   async searchCourse(courseName) {
  119 |     await this.searchTextbox.waitFor({ state: 'visible' });
  120 |     await this.searchTextbox.fill(courseName);
  121 |   }
  122 | 
  123 |   async selectSkillCategory(category) {
  124 |     await this.skillCatgeoryDropdown.waitFor({ state: 'visible' });
  125 |     await this.skillCatgeoryDropdown.selectOption({ label: category });
  126 |   }
  127 | 
  128 |   async selectSkillName(skillName) {
  129 |     await this.skillNameDropdown.waitFor({ state: 'visible' });
  130 |     await this.skillNameDropdown.selectOption({ label: skillName });
  131 |   }
  132 | 
  133 |   async getContentNames(){
  134 |     const cards = this.page.locator('[class*="_listHeadingWrap_"]');
  135 |     await cards.first().waitFor({ state: 'visible' });
  136 |     const names = await cards.allTextContents();
  137 |     return names.map(n => n.trim()).filter(Boolean);
  138 |   }
  139 | 
  140 |   async getManagerAssignedCardNames() {
  141 |     await this.assignedByManagerSection.waitFor({ state: 'visible' });
  142 |     const cards = this.page.locator(
  143 |       `//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  144 |     );
  145 |     await cards.first().waitFor({ state: 'visible' });
  146 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  147 |   }
  148 | 
  149 |     async getAdminAssignedCardNames() {
  150 |     await this.assignedByAdminSection.waitFor({ state: 'visible' });
  151 |     const cards = this.page.locator(
  152 |       `//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  153 |     );
  154 |     await cards.first().waitFor({ state: 'visible' });
  155 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  156 |   }
  157 | 
  158 | 
  159 |   async getContentProgressButton(contentName) {
  160 |     const btn = this.page.locator(
  161 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  162 |     );
  163 |     await btn.scrollIntoViewIfNeeded();
  164 |     await btn.waitFor({ state: 'visible' });
  165 |     return btn;
  166 |   }
  167 | 
  168 | 
  169 | }
```