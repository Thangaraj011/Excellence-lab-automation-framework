# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-filters-validation.spec.js >> Home Page filters validation >> Skill category filter validation
- Location: tests/specs/homepage/homepage-filters-validation.spec.js:17:10

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('option', { name: 'Consulting & Business Development Initiatives' })
    - locator resolved to <div role="option" id="_r_2__list_9" aria-selected="false" aria-label="Consulting & Business Development Initiatives">f9aabff3-4318-40ba-ac94-e220939817b9</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

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
                  - combobox [expanded] [active] [ref=e210]:
                    - listbox:
                      - option "Continuous Integration & Continuous Deployment (CI/CD)": 8b1af3cc-1e4d-4737-87f0-818335759008
                      - option "Corporate Governance": 97c3dfaf-505a-4f4c-a713-8418858cb6d9
                      - option "Crowd Entertainment": 208ca396-2676-4e5c-a9e0-bd7482371777
                - img "search" [ref=e212]:
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
                      - generic [ref=e393]: New Magic Learning path 2026 99
                      - generic [ref=e395]:
                        - generic [ref=e396]:
                          - generic [ref=e398]: Crowd Entertainment
                          - generic [ref=e400]: Shape Shifting Magic
                        - separator [ref=e401]
                        - generic [ref=e402]:
                          - generic [ref=e403]: Mandatory
                          - generic [ref=e404]: Assigned by Manager
                  - generic [ref=e407] [cursor=pointer]:
                    - generic [ref=e408]:
                      - generic [ref=e410]:
                        - generic [ref=e411]: Due
                        - generic [ref=e412]: 31-05-2026
                      - generic [ref=e414]:
                        - status "Assigned learning path" [ref=e415]:
                          - img [ref=e416]:
                            - img [ref=e417]
                          - generic [ref=e419]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e421]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e422]:
                      - generic [ref=e424]: Typewriting Skills Learning 2026
                      - generic [ref=e426]:
                        - generic [ref=e427]:
                          - generic [ref=e429]: Software Development
                          - generic [ref=e431]: Python Basics
                        - separator [ref=e432]
                        - generic [ref=e433]:
                          - generic [ref=e434]: Mandatory
                          - generic [ref=e435]: Assigned by Manager
                  - generic [ref=e438] [cursor=pointer]:
                    - generic [ref=e439]:
                      - generic [ref=e441]:
                        - generic [ref=e442]: Due
                        - generic [ref=e443]: 28-05-2026
                      - generic [ref=e445]:
                        - status "Individual Content" [ref=e446]:
                          - img [ref=e447]:
                            - img [ref=e448]
                          - generic [ref=e450]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e452]:
                          - img "step-forward" [ref=e454]:
                            - img [ref=e455]
                    - generic [ref=e457]:
                      - generic [ref=e459]: Major comedy show 2026
                      - generic [ref=e462]:
                        - generic [ref=e463]: Mandatory
                        - generic [ref=e464]: Assigned by Manager
                  - generic [ref=e467] [cursor=pointer]:
                    - generic [ref=e468]:
                      - generic [ref=e470]:
                        - generic [ref=e471]: Due
                        - generic [ref=e472]: 31-05-2026
                      - generic [ref=e474]:
                        - status "Individual Content" [ref=e475]:
                          - img [ref=e476]:
                            - img [ref=e477]
                          - generic [ref=e479]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e481]:
                          - img "step-forward" [ref=e483]:
                            - img [ref=e484]
                    - generic [ref=e486]:
                      - generic [ref=e488]: "Software Architecture: REST API Design - The Complete Guide | Udemy"
                      - generic [ref=e490]:
                        - generic [ref=e491]:
                          - generic [ref=e493]: System Design & Architecture
                          - generic [ref=e495]: Microservices Architecture Design
                        - separator [ref=e496]
                        - generic [ref=e497]:
                          - generic [ref=e498]: Mandatory
                          - generic [ref=e499]: Assigned by Manager
                  - generic [ref=e502] [cursor=pointer]:
                    - generic [ref=e503]:
                      - generic [ref=e505]:
                        - generic [ref=e506]: Due
                        - generic [ref=e507]: 28-05-2026
                      - generic [ref=e509]:
                        - status "Individual Content" [ref=e510]:
                          - img [ref=e511]:
                            - img [ref=e512]
                          - generic [ref=e514]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e516]:
                          - img "step-forward" [ref=e518]:
                            - img [ref=e519]
                    - generic [ref=e521]:
                      - generic [ref=e523]: Master Control Override Horizon Zero Dawn
                      - generic [ref=e525]:
                        - generic [ref=e526]:
                          - generic [ref=e528]: Crowd Entertainment, System Design & Architecture, Cloud Engineering Core, Software Development Lifecycle (SDLC) Management, Code Review & Quality Assurance, Programming Proficiency
                          - generic [ref=e530]: Vanishing Magic, Microservices Architecture Design, High-Level Design (HLD) & Low-Level Design (LLD), Cloud Architecture & Solution Design, Architecture Best Practices and Frameworks, Automation & IaC, Agile/Scrum Methodologies, Code Review Methodologies and Test-Driven Development (TDD) Practices, Software Development
                        - separator [ref=e531]
                        - generic [ref=e532]:
                          - generic [ref=e533]: Optional
                          - generic [ref=e534]: Assigned by Admin and Manager
                  - generic [ref=e537] [cursor=pointer]:
                    - generic [ref=e538]:
                      - generic [ref=e540]:
                        - generic [ref=e541]: Due
                        - generic [ref=e542]: 23-05-2026
                      - generic [ref=e544]:
                        - status "Assigned learning path" [ref=e545]:
                          - img [ref=e546]:
                            - img [ref=e547]
                          - generic [ref=e549]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e551]:
                          - generic:
                            - img "step-forward":
                              - img
                    - generic [ref=e552]:
                      - generic [ref=e554]: Test sample learning 28723
                      - generic [ref=e557]:
                        - generic [ref=e558]: Optional
                        - generic [ref=e559]: Assigned by Manager
                  - generic [ref=e562] [cursor=pointer]:
                    - generic [ref=e563]:
                      - generic [ref=e565]:
                        - generic [ref=e566]: Due
                        - generic [ref=e567]: 31-05-2026
                      - generic [ref=e569]:
                        - status "Individual Content" [ref=e570]:
                          - img [ref=e571]:
                            - img [ref=e572]
                          - generic [ref=e574]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e576]:
                          - img "step-forward" [ref=e578]:
                            - img [ref=e579]
                    - generic [ref=e581]:
                      - generic [ref=e583]: Global security measures 2026
                      - generic [ref=e585]:
                        - generic [ref=e586]:
                          - generic [ref=e588]: Administration
                          - generic [ref=e590]: Security Management
                        - separator [ref=e591]
                        - generic [ref=e592]:
                          - generic [ref=e593]: Optional
                          - generic [ref=e594]: Assigned by Manager
              - generic [ref=e596]:
                - generic [ref=e600]:
                  - generic [ref=e601]:
                    - generic [ref=e603]:
                      - img "user" [ref=e604]:
                        - img [ref=e605]
                      - text: Assigned By Admin
                    - generic [ref=e608]: 40 Content
                  - generic [ref=e609]:
                    - generic "Sort courses" [ref=e611] [cursor=pointer]:
                      - generic [ref=e612]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e613]
                      - img "down" [ref=e615]:
                        - img [ref=e616]
                    - button "Collapse section" [expanded] [ref=e619] [cursor=pointer]:
                      - img "up" [ref=e621]:
                        - img [ref=e622]
                - generic [ref=e626]:
                  - generic [ref=e629] [cursor=pointer]:
                    - generic [ref=e630]:
                      - generic [ref=e632]:
                        - generic [ref=e633]: Due
                        - generic [ref=e634]: N/A
                      - generic [ref=e636]:
                        - status "Individual Content" [ref=e637]:
                          - img [ref=e638]:
                            - img [ref=e639]
                          - generic [ref=e641]: Individual Content
                        - button "In progress, mark complete" [ref=e643]:
                          - img [ref=e645]:
                            - img [ref=e646]
                    - generic [ref=e649]:
                      - generic [ref=e651]: Generative AI Leader | Google Cloud Skills Boost
                      - generic [ref=e653]:
                        - generic [ref=e654]:
                          - generic [ref=e656]: AI Fluency
                          - generic [ref=e658]: AI Fluency
                        - separator [ref=e659]
                        - generic [ref=e660]:
                          - generic [ref=e661]: Mandatory
                          - generic [ref=e662]: Assigned by Admin
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
                        - button "Assigned, mark as in progress" [ref=e679]:
                          - img "step-forward" [ref=e681]:
                            - img [ref=e682]
                    - generic [ref=e684]:
                      - generic [ref=e686]: LinkedIn Sales Navigator MASTERCLASS - Tutorial, Tips, Tricks, and Hacks to Find Leads Hands-on demonstration of using the website effectively.
                      - generic [ref=e688]:
                        - generic [ref=e689]:
                          - generic [ref=e691]: Consulting & Business Development Initiatives
                          - generic [ref=e693]: Sales Execution & Deal Closure
                        - separator [ref=e694]
                        - generic [ref=e695]:
                          - generic [ref=e696]: Mandatory
                          - generic [ref=e697]: Assigned by Admin
                  - generic [ref=e700] [cursor=pointer]:
                    - generic [ref=e701]:
                      - generic [ref=e703]:
                        - generic [ref=e704]: Due
                        - generic [ref=e705]: N/A
                      - generic [ref=e707]:
                        - status "Individual Content" [ref=e708]:
                          - img [ref=e709]:
                            - img [ref=e710]
                          - generic [ref=e712]: Individual Content
                        - button "In progress, mark complete" [ref=e714]:
                          - img [ref=e716]:
                            - img [ref=e717]
                    - generic [ref=e720]:
                      - generic [ref=e722]: "122. How To Be More Confident and Calm in Your Communication: Managing the \"ABC’s\" of... [Podcast, Stanford Graduate School of Business]"
                      - generic [ref=e724]:
                        - generic [ref=e725]:
                          - generic [ref=e727]: Stakeholder & Client Partnership
                          - generic [ref=e729]: Effective Communication
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
                        - button "Assigned, mark as in progress" [ref=e750]:
                          - img "step-forward" [ref=e752]:
                            - img [ref=e753]
                    - generic [ref=e755]:
                      - generic [ref=e757]: "Optimize your Email Deliverability: Content | Heinz Marketing"
                      - generic [ref=e759]:
                        - generic [ref=e760]:
                          - generic [ref=e762]: Consulting & Business Development Initiatives
                          - generic [ref=e764]: Sales Execution & Deal Closure
                        - separator [ref=e765]
                        - generic [ref=e766]:
                          - generic [ref=e767]: Mandatory
                          - generic [ref=e768]: Assigned by Admin
                  - generic [ref=e771] [cursor=pointer]:
                    - generic [ref=e772]:
                      - generic [ref=e774]:
                        - generic [ref=e775]: Due
                        - generic [ref=e776]: N/A
                      - generic [ref=e778]:
                        - status "Individual Content" [ref=e779]:
                          - img [ref=e780]:
                            - img [ref=e781]
                          - generic [ref=e783]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e785]:
                          - img "step-forward" [ref=e787]:
                            - img [ref=e788]
                    - generic [ref=e790]:
                      - generic [ref=e792]: "Customer Profiles: How to Build and Use Them - Qualtrics"
                      - generic [ref=e794]:
                        - generic [ref=e795]:
                          - generic [ref=e797]: Consulting & Business Development Initiatives
                          - generic [ref=e799]: Sales Execution & Deal Closure
                        - separator [ref=e800]
                        - generic [ref=e801]:
                          - generic [ref=e802]: Mandatory
                          - generic [ref=e803]: Assigned by Admin
                  - generic [ref=e806] [cursor=pointer]:
                    - generic [ref=e807]:
                      - generic [ref=e809]:
                        - generic [ref=e810]: Due
                        - generic [ref=e811]: N/A
                      - generic [ref=e813]:
                        - status "Individual Content" [ref=e814]:
                          - img [ref=e815]:
                            - img [ref=e816]
                          - generic [ref=e818]: Individual Content
                        - button "In progress, mark complete" [ref=e820]:
                          - img [ref=e822]:
                            - img [ref=e823]
                    - generic [ref=e826]:
                      - generic [ref=e828]: Communicating and Working with Stakeholders | Google Project Management Certificate - YouTube
                      - generic [ref=e830]:
                        - generic [ref=e831]:
                          - generic [ref=e833]: Stakeholder & Client Partnership
                          - generic [ref=e835]: Stakeholder Management, Effective Communication
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
                      - generic [ref=e864]: Competitor Analysis and Market Research - Qualtrics
                      - generic [ref=e866]:
                        - generic [ref=e867]:
                          - generic [ref=e869]: Consulting & Business Development Initiatives
                          - generic [ref=e871]: Sales Execution & Deal Closure
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
                        - button "Assigned, mark as in progress" [ref=e892]:
                          - img "step-forward" [ref=e894]:
                            - img [ref=e895]
                    - generic [ref=e897]:
                      - generic [ref=e899]: "AI Boost Bites: Your Edge in the AI-Powered World | Google Cloud Skills Boost"
                      - generic [ref=e901]:
                        - generic [ref=e902]:
                          - generic [ref=e904]: AI Fluency
                          - generic [ref=e906]: AI Fluency
                        - separator [ref=e907]
                        - generic [ref=e908]:
                          - generic [ref=e909]: Mandatory
                          - generic [ref=e910]: Assigned by Admin
                  - generic [ref=e913] [cursor=pointer]:
                    - generic [ref=e914]:
                      - generic [ref=e916]:
                        - generic [ref=e917]: Due
                        - generic [ref=e918]: N/A
                      - generic [ref=e920]:
                        - status "Individual Content" [ref=e921]:
                          - img [ref=e922]:
                            - img [ref=e923]
                          - generic [ref=e925]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e927]:
                          - img "step-forward" [ref=e929]:
                            - img [ref=e930]
                    - generic [ref=e932]:
                      - generic [ref=e934]: "Finance: What Managers Need to Know [HBR]"
                      - generic [ref=e936]:
                        - generic [ref=e937]:
                          - generic [ref=e939]: Financial Acumen
                          - generic [ref=e941]: Financial Acumen
                        - separator [ref=e942]
                        - generic [ref=e943]:
                          - generic [ref=e944]: Mandatory
                          - generic [ref=e945]: Assigned by Admin
                  - generic [ref=e948] [cursor=pointer]:
                    - generic [ref=e949]:
                      - generic [ref=e951]:
                        - generic [ref=e952]: Due
                        - generic [ref=e953]: N/A
                      - generic [ref=e955]:
                        - status "Individual Content" [ref=e956]:
                          - img [ref=e957]:
                            - img [ref=e958]
                          - generic [ref=e960]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e962]:
                          - img "step-forward" [ref=e964]:
                            - img [ref=e965]
                    - generic [ref=e967]:
                      - generic [ref=e969]: What Does Lead Qualification Mean? | How to Qualify Sales Leads Goes over frameworks used to qualify leads, with examples.
                      - generic [ref=e971]:
                        - generic [ref=e972]:
                          - generic [ref=e974]: Consulting & Business Development Initiatives
                          - generic [ref=e976]: Consultative Selling
                        - separator [ref=e977]
                        - generic [ref=e978]:
                          - generic [ref=e979]: Mandatory
                          - generic [ref=e980]: Assigned by Admin
                  - generic [ref=e983] [cursor=pointer]:
                    - generic [ref=e984]:
                      - generic [ref=e986]:
                        - generic [ref=e987]: Due
                        - generic [ref=e988]: N/A
                      - generic [ref=e990]:
                        - status "Individual Content" [ref=e991]:
                          - img [ref=e992]:
                            - img [ref=e993]
                          - generic [ref=e995]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e997]:
                          - img "step-forward" [ref=e999]:
                            - img [ref=e1000]
                    - generic [ref=e1002]:
                      - generic [ref=e1004]: 5 Rules for Communicating Effectively with Executives
                      - generic [ref=e1006]:
                        - generic [ref=e1007]:
                          - generic [ref=e1009]: Stakeholder & Client Partnership
                          - generic [ref=e1011]: Effective Communication
                        - separator [ref=e1012]
                        - generic [ref=e1013]:
                          - generic [ref=e1014]: Mandatory
                          - generic [ref=e1015]: Assigned by Admin
                  - generic [ref=e1018] [cursor=pointer]:
                    - generic [ref=e1019]:
                      - generic [ref=e1021]:
                        - generic [ref=e1022]: Due
                        - generic [ref=e1023]: N/A
                      - generic [ref=e1025]:
                        - status "Individual Content" [ref=e1026]:
                          - img [ref=e1027]:
                            - img [ref=e1028]
                          - generic [ref=e1030]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1032]:
                          - img "step-forward" [ref=e1034]:
                            - img [ref=e1035]
                    - generic [ref=e1037]:
                      - generic [ref=e1039]: "How to Control Your Emotions During a Difficult Conversation: The Harvard Business Review Guide"
                      - generic [ref=e1041]:
                        - generic [ref=e1042]:
                          - generic [ref=e1044]: Stakeholder & Client Partnership
                          - generic [ref=e1046]: Effective Communication
                        - separator [ref=e1047]
                        - generic [ref=e1048]:
                          - generic [ref=e1049]: Mandatory
                          - generic [ref=e1050]: Assigned by Admin
                  - generic [ref=e1053] [cursor=pointer]:
                    - generic [ref=e1054]:
                      - generic [ref=e1056]:
                        - generic [ref=e1057]: Due
                        - generic [ref=e1058]: N/A
                      - generic [ref=e1060]:
                        - status "Individual Content" [ref=e1061]:
                          - img [ref=e1062]:
                            - img [ref=e1063]
                          - generic [ref=e1065]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1067]:
                          - img "step-forward" [ref=e1069]:
                            - img [ref=e1070]
                    - generic [ref=e1072]:
                      - generic [ref=e1074]: Master the Art of Questions to Unlock Meaningful Conversations - YouTube In an entertaining & interactive way, demonstrates "intentional communication" and the art of asking right questions.
                      - generic [ref=e1076]:
                        - generic [ref=e1077]:
                          - generic [ref=e1079]: Consulting & Business Development Initiatives, Stakeholder & Client Partnership
                          - generic [ref=e1081]: Consultative Selling, Stakeholder Management
                        - separator [ref=e1082]
                        - generic [ref=e1083]:
                          - generic [ref=e1084]: Mandatory
                          - generic [ref=e1085]: Assigned by Admin
                  - generic [ref=e1088] [cursor=pointer]:
                    - generic [ref=e1089]:
                      - generic [ref=e1091]:
                        - generic [ref=e1092]: Due
                        - generic [ref=e1093]: N/A
                      - generic [ref=e1095]:
                        - status "Individual Content" [ref=e1096]:
                          - img [ref=e1097]:
                            - img [ref=e1098]
                          - generic [ref=e1100]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1102]:
                          - img "step-forward" [ref=e1104]:
                            - img [ref=e1105]
                    - generic [ref=e1107]:
                      - generic [ref=e1109]: 23 Elevator Pitch Examples to Inspire Your Own [+Templates & Expert Tips]
                      - generic [ref=e1111]:
                        - generic [ref=e1112]:
                          - generic [ref=e1114]: Consulting & Business Development Initiatives
                          - generic [ref=e1116]: Sales Execution & Deal Closure
                        - separator [ref=e1117]
                        - generic [ref=e1118]:
                          - generic [ref=e1119]: Mandatory
                          - generic [ref=e1120]: Assigned by Admin
                  - generic [ref=e1123] [cursor=pointer]:
                    - generic [ref=e1124]:
                      - generic [ref=e1126]:
                        - generic [ref=e1127]: Due
                        - generic [ref=e1128]: N/A
                      - generic [ref=e1130]:
                        - status "Individual Content" [ref=e1131]:
                          - img [ref=e1132]:
                            - img [ref=e1133]
                          - generic [ref=e1135]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1137]:
                          - img "step-forward" [ref=e1139]:
                            - img [ref=e1140]
                    - generic [ref=e1142]:
                      - generic [ref=e1144]: You Must Understand Your Competition | Wolters Kluwer
                      - generic [ref=e1146]:
                        - generic [ref=e1147]:
                          - generic [ref=e1149]: Consulting & Business Development Initiatives
                          - generic [ref=e1151]: Sales Execution & Deal Closure, Commercial Account Management
                        - separator [ref=e1152]
                        - generic [ref=e1153]:
                          - generic [ref=e1154]: Mandatory
                          - generic [ref=e1155]: Assigned by Admin
                  - generic [ref=e1158] [cursor=pointer]:
                    - generic [ref=e1159]:
                      - generic [ref=e1161]:
                        - generic [ref=e1162]: Due
                        - generic [ref=e1163]: N/A
                      - generic [ref=e1165]:
                        - status "Individual Content" [ref=e1166]:
                          - img [ref=e1167]:
                            - img [ref=e1168]
                          - generic [ref=e1170]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1172]:
                          - img "step-forward" [ref=e1174]:
                            - img [ref=e1175]
                    - generic [ref=e1177]:
                      - generic [ref=e1179]: The science behind dramatically better conversations | Charles Duhigg | TEDxManchester - YouTube Speaks about the role of precise questions to understand the other person's wishes best. "The matching principle".
                      - generic [ref=e1181]:
                        - generic [ref=e1182]:
                          - generic [ref=e1184]: Consulting & Business Development Initiatives, Stakeholder & Client Partnership
                          - generic [ref=e1186]: Consultative Selling, Stakeholder Management
                        - separator [ref=e1187]
                        - generic [ref=e1188]:
                          - generic [ref=e1189]: Mandatory
                          - generic [ref=e1190]: Assigned by Admin
                  - generic [ref=e1193] [cursor=pointer]:
                    - generic [ref=e1194]:
                      - generic [ref=e1196]:
                        - generic [ref=e1197]: Due
                        - generic [ref=e1198]: N/A
                      - generic [ref=e1200]:
                        - status "Individual Content" [ref=e1201]:
                          - img [ref=e1202]:
                            - img [ref=e1203]
                          - generic [ref=e1205]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1207]:
                          - img "step-forward" [ref=e1209]:
                            - img [ref=e1210]
                    - generic [ref=e1212]:
                      - generic [ref=e1214]: Fundamentals of Finance & Economics for Businesses – Crash Course
                      - generic [ref=e1216]:
                        - generic [ref=e1217]:
                          - generic [ref=e1219]: Financial Acumen
                          - generic [ref=e1221]: Financial Acumen
                        - separator [ref=e1222]
                        - generic [ref=e1223]:
                          - generic [ref=e1224]: Mandatory
                          - generic [ref=e1225]: Assigned by Admin
                  - generic [ref=e1228] [cursor=pointer]:
                    - generic [ref=e1229]:
                      - generic [ref=e1231]:
                        - generic [ref=e1232]: Due
                        - generic [ref=e1233]: N/A
                      - generic [ref=e1235]:
                        - status "Individual Content" [ref=e1236]:
                          - img [ref=e1237]:
                            - img [ref=e1238]
                          - generic [ref=e1240]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1242]:
                          - img "step-forward" [ref=e1244]:
                            - img [ref=e1245]
                    - generic [ref=e1247]:
                      - generic [ref=e1249]: "Think Fast, Talk Smart: Communication Techniques - YouTube"
                      - generic [ref=e1251]:
                        - generic [ref=e1252]:
                          - generic [ref=e1254]: Stakeholder & Client Partnership
                          - generic [ref=e1256]: Effective Communication
                        - separator [ref=e1257]
                        - generic [ref=e1258]:
                          - generic [ref=e1259]: Mandatory
                          - generic [ref=e1260]: Assigned by Admin
                  - generic [ref=e1263] [cursor=pointer]:
                    - generic [ref=e1264]:
                      - generic [ref=e1266]:
                        - generic [ref=e1267]: Due
                        - generic [ref=e1268]: N/A
                      - generic [ref=e1270]:
                        - status "Individual Content" [ref=e1271]:
                          - img [ref=e1272]:
                            - img [ref=e1273]
                          - generic [ref=e1275]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1277]:
                          - img "step-forward" [ref=e1279]:
                            - img [ref=e1280]
                    - generic [ref=e1282]:
                      - generic [ref=e1284]: Mastering Sales Qualification for Effective Lead Conversion | Gong
                      - generic [ref=e1286]:
                        - generic [ref=e1287]:
                          - generic [ref=e1289]: Consulting & Business Development Initiatives
                          - generic [ref=e1291]: Sales Execution & Deal Closure
                        - separator [ref=e1292]
                        - generic [ref=e1293]:
                          - generic [ref=e1294]: Mandatory
                          - generic [ref=e1295]: Assigned by Admin
                  - generic [ref=e1298] [cursor=pointer]:
                    - generic [ref=e1299]:
                      - generic [ref=e1301]:
                        - generic [ref=e1302]: Due
                        - generic [ref=e1303]: N/A
                      - generic [ref=e1305]:
                        - status "Individual Content" [ref=e1306]:
                          - img [ref=e1307]:
                            - img [ref=e1308]
                          - generic [ref=e1310]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1312]:
                          - img "step-forward" [ref=e1314]:
                            - img [ref=e1315]
                    - generic [ref=e1317]:
                      - generic [ref=e1319]: Prompt Engineering Guide
                      - generic [ref=e1321]:
                        - generic [ref=e1322]:
                          - generic [ref=e1324]: AI Fluency
                          - generic [ref=e1326]: AI Fluency
                        - separator [ref=e1327]
                        - generic [ref=e1328]:
                          - generic [ref=e1329]: Mandatory
                          - generic [ref=e1330]: Assigned by Admin
                  - generic [ref=e1333] [cursor=pointer]:
                    - generic [ref=e1334]:
                      - generic [ref=e1336]:
                        - generic [ref=e1337]: Due
                        - generic [ref=e1338]: N/A
                      - generic [ref=e1340]:
                        - status "Individual Content" [ref=e1341]:
                          - img [ref=e1342]:
                            - img [ref=e1343]
                          - generic [ref=e1345]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1347]:
                          - img "step-forward" [ref=e1349]:
                            - img [ref=e1350]
                    - generic [ref=e1352]:
                      - generic [ref=e1354]: Challenger Sales Model Summary & Tips | Pipedrive Speaks of pushing the customer to get out of their comfort zone.
                      - generic [ref=e1356]:
                        - generic [ref=e1357]:
                          - generic [ref=e1359]: Consulting & Business Development Initiatives
                          - generic [ref=e1361]: Consultative Selling
                        - separator [ref=e1362]
                        - generic [ref=e1363]:
                          - generic [ref=e1364]: Mandatory
                          - generic [ref=e1365]: Assigned by Admin
                  - generic [ref=e1368] [cursor=pointer]:
                    - generic [ref=e1369]:
                      - generic [ref=e1371]:
                        - generic [ref=e1372]: Due
                        - generic [ref=e1373]: N/A
                      - generic [ref=e1375]:
                        - status "Individual Content" [ref=e1376]:
                          - img [ref=e1377]:
                            - img [ref=e1378]
                          - generic [ref=e1380]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1382]:
                          - img "step-forward" [ref=e1384]:
                            - img [ref=e1385]
                    - generic [ref=e1387]:
                      - generic [ref=e1389]: How to Build Positioning & Messaging (by an ex-Google PMM) - YouTube Gives a concerete, helpful blueprint for making a value proposition and positioning.
                      - generic [ref=e1391]:
                        - generic [ref=e1392]:
                          - generic [ref=e1394]: Consulting & Business Development Initiatives
                          - generic [ref=e1396]: Market Research & Pipeline Generation
                        - separator [ref=e1397]
                        - generic [ref=e1398]:
                          - generic [ref=e1399]: Mandatory
                          - generic [ref=e1400]: Assigned by Admin
                  - generic [ref=e1403] [cursor=pointer]:
                    - generic [ref=e1404]:
                      - generic [ref=e1406]:
                        - generic [ref=e1407]: Due
                        - generic [ref=e1408]: N/A
                      - generic [ref=e1410]:
                        - status "Individual Content" [ref=e1411]:
                          - img [ref=e1412]:
                            - img [ref=e1413]
                          - generic [ref=e1415]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1417]:
                          - img "step-forward" [ref=e1419]:
                            - img [ref=e1420]
                    - generic [ref=e1422]:
                      - generic [ref=e1424]: What Will Happen to Marketing in the Age of AI? | Jessica Apotheker | TED - YouTube Shows how AI tools speed up the marketing process, and help us unlock insights.
                      - generic [ref=e1426]:
                        - generic [ref=e1427]:
                          - generic [ref=e1429]: Consulting & Business Development Initiatives
                          - generic [ref=e1431]: Sales Execution & Deal Closure
                        - separator [ref=e1432]
                        - generic [ref=e1433]:
                          - generic [ref=e1434]: Mandatory
                          - generic [ref=e1435]: Assigned by Admin
                  - generic [ref=e1438] [cursor=pointer]:
                    - generic [ref=e1439]:
                      - generic [ref=e1441]:
                        - generic [ref=e1442]: Due
                        - generic [ref=e1443]: N/A
                      - generic [ref=e1445]:
                        - status "Individual Content" [ref=e1446]:
                          - img [ref=e1447]:
                            - img [ref=e1448]
                          - generic [ref=e1450]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1452]:
                          - img "step-forward" [ref=e1454]:
                            - img [ref=e1455]
                    - generic [ref=e1457]:
                      - generic [ref=e1459]: Building Financial Acumen as a Sales Professional
                      - generic [ref=e1461]:
                        - generic [ref=e1462]:
                          - generic [ref=e1464]: Financial Acumen
                          - generic [ref=e1466]: Financial Acumen
                        - separator [ref=e1467]
                        - generic [ref=e1468]:
                          - generic [ref=e1469]: Mandatory
                          - generic [ref=e1470]: Assigned by Admin
                  - generic [ref=e1473] [cursor=pointer]:
                    - generic [ref=e1474]:
                      - generic [ref=e1476]:
                        - generic [ref=e1477]: Due
                        - generic [ref=e1478]: N/A
                      - generic [ref=e1480]:
                        - status "Individual Content" [ref=e1481]:
                          - img [ref=e1482]:
                            - img [ref=e1483]
                          - generic [ref=e1485]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1487]:
                          - img "step-forward" [ref=e1489]:
                            - img [ref=e1490]
                    - generic [ref=e1492]:
                      - generic [ref=e1494]: 20 Open-Ended Sales Questions That'll Get Prospects Talking to You
                      - generic [ref=e1496]:
                        - generic [ref=e1497]:
                          - generic [ref=e1499]: Consulting & Business Development Initiatives
                          - generic [ref=e1501]: Sales Execution & Deal Closure
                        - separator [ref=e1502]
                        - generic [ref=e1503]:
                          - generic [ref=e1504]: Mandatory
                          - generic [ref=e1505]: Assigned by Admin
                  - generic [ref=e1508] [cursor=pointer]:
                    - generic [ref=e1509]:
                      - generic [ref=e1511]:
                        - generic [ref=e1512]: Due
                        - generic [ref=e1513]: N/A
                      - generic [ref=e1515]:
                        - status "Individual Content" [ref=e1516]:
                          - img [ref=e1517]:
                            - img [ref=e1518]
                          - generic [ref=e1520]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1522]:
                          - img "step-forward" [ref=e1524]:
                            - img [ref=e1525]
                    - generic [ref=e1527]:
                      - generic [ref=e1529]: "Effective Communication Skills: Stakeholder Analysis"
                      - generic [ref=e1531]:
                        - generic [ref=e1532]:
                          - generic [ref=e1534]: Stakeholder & Client Partnership
                          - generic [ref=e1536]: Effective Communication
                        - separator [ref=e1537]
                        - generic [ref=e1538]:
                          - generic [ref=e1539]: Mandatory
                          - generic [ref=e1540]: Assigned by Admin
                  - generic [ref=e1543] [cursor=pointer]:
                    - generic [ref=e1544]:
                      - generic [ref=e1546]:
                        - generic [ref=e1547]: Due
                        - generic [ref=e1548]: N/A
                      - generic [ref=e1550]:
                        - status "Individual Content" [ref=e1551]:
                          - img [ref=e1552]:
                            - img [ref=e1553]
                          - generic [ref=e1555]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1557]:
                          - img "step-forward" [ref=e1559]:
                            - img [ref=e1560]
                    - generic [ref=e1562]:
                      - generic [ref=e1564]: "Cold Calling: How To Turn Prospects Into Customers | Salesforce"
                      - generic [ref=e1566]:
                        - generic [ref=e1567]:
                          - generic [ref=e1569]: Consulting & Business Development Initiatives
                          - generic [ref=e1571]: Sales Execution & Deal Closure
                        - separator [ref=e1572]
                        - generic [ref=e1573]:
                          - generic [ref=e1574]: Mandatory
                          - generic [ref=e1575]: Assigned by Admin
                  - generic [ref=e1578] [cursor=pointer]:
                    - generic [ref=e1579]:
                      - generic [ref=e1581]:
                        - generic [ref=e1582]: Due
                        - generic [ref=e1583]: N/A
                      - generic [ref=e1585]:
                        - status "Individual Content" [ref=e1586]:
                          - img [ref=e1587]:
                            - img [ref=e1588]
                          - generic [ref=e1590]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1592]:
                          - img "step-forward" [ref=e1594]:
                            - img [ref=e1595]
                    - generic [ref=e1597]:
                      - generic [ref=e1599]: Use Body Language to Rock Your Next Presentation [Stanford GSB]
                      - generic [ref=e1601]:
                        - generic [ref=e1602]:
                          - generic [ref=e1604]: Stakeholder & Client Partnership
                          - generic [ref=e1606]: Effective Communication
                        - separator [ref=e1607]
                        - generic [ref=e1608]:
                          - generic [ref=e1609]: Mandatory
                          - generic [ref=e1610]: Assigned by Admin
                  - generic [ref=e1613] [cursor=pointer]:
                    - generic [ref=e1614]:
                      - generic [ref=e1616]:
                        - generic [ref=e1617]: Due
                        - generic [ref=e1618]: N/A
                      - generic [ref=e1620]:
                        - status "Individual Content" [ref=e1621]:
                          - img [ref=e1622]:
                            - img [ref=e1623]
                          - generic [ref=e1625]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1627]:
                          - img "step-forward" [ref=e1629]:
                            - img [ref=e1630]
                    - generic [ref=e1632]:
                      - generic [ref=e1634]: Gemini for Google Workspace | Google Cloud Skills Boost
                      - generic [ref=e1636]:
                        - generic [ref=e1637]:
                          - generic [ref=e1639]: AI Fluency
                          - generic [ref=e1641]: AI Fluency
                        - separator [ref=e1642]
                        - generic [ref=e1643]:
                          - generic [ref=e1644]: Mandatory
                          - generic [ref=e1645]: Assigned by Admin
                  - generic [ref=e1648] [cursor=pointer]:
                    - generic [ref=e1649]:
                      - generic [ref=e1651]:
                        - generic [ref=e1652]: Due
                        - generic [ref=e1653]: N/A
                      - generic [ref=e1655]:
                        - status "Individual Content" [ref=e1656]:
                          - img [ref=e1657]:
                            - img [ref=e1658]
                          - generic [ref=e1660]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1662]:
                          - img "step-forward" [ref=e1664]:
                            - img [ref=e1665]
                    - generic [ref=e1667]:
                      - generic [ref=e1669]: "Daniel Goleman: The 4 domains of emotional intelligence | Daniel Goleman for Big Think+"
                      - generic [ref=e1671]:
                        - generic [ref=e1672]:
                          - generic [ref=e1674]: Stakeholder & Client Partnership
                          - generic [ref=e1676]: Effective Communication
                        - separator [ref=e1677]
                        - generic [ref=e1678]:
                          - generic [ref=e1679]: Mandatory
                          - generic [ref=e1680]: Assigned by Admin
                  - generic [ref=e1683] [cursor=pointer]:
                    - generic [ref=e1684]:
                      - generic [ref=e1686]:
                        - generic [ref=e1687]: Due
                        - generic [ref=e1688]: N/A
                      - generic [ref=e1690]:
                        - status "Individual Content" [ref=e1691]:
                          - img [ref=e1692]:
                            - img [ref=e1693]
                          - generic [ref=e1695]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1697]:
                          - img "step-forward" [ref=e1699]:
                            - img [ref=e1700]
                    - generic [ref=e1702]:
                      - generic [ref=e1704]: Her Cold Email Strategy Has a 43% OPEN RATE! - YouTube Simple tips to make your email stand out from a sea of emails lying around in the inbox.
                      - generic [ref=e1706]:
                        - generic [ref=e1707]:
                          - generic [ref=e1709]: Consulting & Business Development Initiatives
                          - generic [ref=e1711]: Sales Execution & Deal Closure
                        - separator [ref=e1712]
                        - generic [ref=e1713]:
                          - generic [ref=e1714]: Mandatory
                          - generic [ref=e1715]: Assigned by Admin
                  - generic [ref=e1718] [cursor=pointer]:
                    - generic [ref=e1719]:
                      - generic [ref=e1721]:
                        - generic [ref=e1722]: Due
                        - generic [ref=e1723]: N/A
                      - generic [ref=e1725]:
                        - status "Individual Content" [ref=e1726]:
                          - img [ref=e1727]:
                            - img [ref=e1728]
                          - generic [ref=e1730]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1732]:
                          - img "step-forward" [ref=e1734]:
                            - img [ref=e1735]
                    - generic [ref=e1737]:
                      - generic [ref=e1739]: How to Write a Great Value Proposition [7 Top Examples + Template]
                      - generic [ref=e1741]:
                        - generic [ref=e1742]:
                          - generic [ref=e1744]: Consulting & Business Development Initiatives
                          - generic [ref=e1746]: Sales Execution & Deal Closure
                        - separator [ref=e1747]
                        - generic [ref=e1748]:
                          - generic [ref=e1749]: Mandatory
                          - generic [ref=e1750]: Assigned by Admin
                  - generic [ref=e1753] [cursor=pointer]:
                    - generic [ref=e1754]:
                      - generic [ref=e1756]:
                        - generic [ref=e1757]: Due
                        - generic [ref=e1758]: N/A
                      - generic [ref=e1760]:
                        - status "Individual Content" [ref=e1761]:
                          - img [ref=e1762]:
                            - img [ref=e1763]
                          - generic [ref=e1765]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1767]:
                          - img "step-forward" [ref=e1769]:
                            - img [ref=e1770]
                    - generic [ref=e1772]:
                      - generic [ref=e1774]: LinkedIn Sales Navigator for Beginners (Full Course) Goes over a number of features & tools in the program to get what's desired.
                      - generic [ref=e1776]:
                        - generic [ref=e1777]:
                          - generic [ref=e1779]: Consulting & Business Development Initiatives
                          - generic [ref=e1781]: Sales Execution & Deal Closure
                        - separator [ref=e1782]
                        - generic [ref=e1783]:
                          - generic [ref=e1784]: Mandatory
                          - generic [ref=e1785]: Assigned by Admin
                  - generic [ref=e1788] [cursor=pointer]:
                    - generic [ref=e1789]:
                      - generic [ref=e1791]:
                        - generic [ref=e1792]: Due
                        - generic [ref=e1793]: N/A
                      - generic [ref=e1795]:
                        - status "Individual Content" [ref=e1796]:
                          - img [ref=e1797]:
                            - img [ref=e1798]
                          - generic [ref=e1800]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1802]:
                          - img "step-forward" [ref=e1804]:
                            - img [ref=e1805]
                    - generic [ref=e1807]:
                      - generic [ref=e1809]: How to Get B2B Customer Segmentation Right [+Tips]
                      - generic [ref=e1811]:
                        - generic [ref=e1812]:
                          - generic [ref=e1814]: Consulting & Business Development Initiatives
                          - generic [ref=e1816]: Sales Execution & Deal Closure
                        - separator [ref=e1817]
                        - generic [ref=e1818]:
                          - generic [ref=e1819]: Mandatory
                          - generic [ref=e1820]: Assigned by Admin
                  - generic [ref=e1823] [cursor=pointer]:
                    - generic [ref=e1824]:
                      - generic [ref=e1826]:
                        - generic [ref=e1827]: Due
                        - generic [ref=e1828]: N/A
                      - generic [ref=e1830]:
                        - status "Individual Content" [ref=e1831]:
                          - img [ref=e1832]:
                            - img [ref=e1833]
                          - generic [ref=e1835]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1837]:
                          - img "step-forward" [ref=e1839]:
                            - img [ref=e1840]
                    - generic [ref=e1842]:
                      - generic [ref=e1844]: "30 Sales Call Tips: How to Start Conversations so Prospects Don't Hang Up On You"
                      - generic [ref=e1846]:
                        - generic [ref=e1847]:
                          - generic [ref=e1849]: Consulting & Business Development Initiatives
                          - generic [ref=e1851]: Sales Execution & Deal Closure
                        - separator [ref=e1852]
                        - generic [ref=e1853]:
                          - generic [ref=e1854]: Mandatory
                          - generic [ref=e1855]: Assigned by Admin
                  - generic [ref=e1858] [cursor=pointer]:
                    - generic [ref=e1859]:
                      - generic [ref=e1861]:
                        - generic [ref=e1862]: Due
                        - generic [ref=e1863]: N/A
                      - generic [ref=e1865]:
                        - status "Individual Content" [ref=e1866]:
                          - img [ref=e1867]:
                            - img [ref=e1868]
                          - generic [ref=e1870]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1872]:
                          - img "step-forward" [ref=e1874]:
                            - img [ref=e1875]
                    - generic [ref=e1877]:
                      - generic [ref=e1879]: "The art of negotiation: Six must-have strategies | LBS - YouTube"
                      - generic [ref=e1881]:
                        - generic [ref=e1882]:
                          - generic [ref=e1884]: Consulting & Business Development Initiatives
                          - generic [ref=e1886]: Sales Execution & Deal Closure
                        - separator [ref=e1887]
                        - generic [ref=e1888]:
                          - generic [ref=e1889]: Mandatory
                          - generic [ref=e1890]: Assigned by Admin
                  - generic [ref=e1893] [cursor=pointer]:
                    - generic [ref=e1894]:
                      - generic [ref=e1896]:
                        - generic [ref=e1897]: Due
                        - generic [ref=e1898]: 25-06-2026
                      - generic [ref=e1900]:
                        - status "Assigned learning path" [ref=e1901]:
                          - img [ref=e1902]:
                            - img [ref=e1903]
                          - generic [ref=e1905]: Learning Path
                        - button "Click the card to open the learning path" [disabled] [ref=e1907]:
                          - generic:
                            - img:
                              - img
                    - generic [ref=e1908]:
                      - generic [ref=e1910]: Test sample Learning path Magic 2026
                      - generic [ref=e1912]:
                        - generic [ref=e1913]:
                          - generic [ref=e1915]: Crowd Entertainment
                          - generic [ref=e1917]: Confusion Magic, Vanishing Magic
                        - separator [ref=e1918]
                        - generic [ref=e1919]:
                          - generic [ref=e1920]: Mandatory
                          - generic [ref=e1921]: Assigned by Admin
                  - generic [ref=e1924] [cursor=pointer]:
                    - generic [ref=e1925]:
                      - generic [ref=e1927]:
                        - generic [ref=e1928]: Due
                        - generic [ref=e1929]: 29-05-2026
                      - generic [ref=e1931]:
                        - status "Individual Content" [ref=e1932]:
                          - img [ref=e1933]:
                            - img [ref=e1934]
                          - generic [ref=e1936]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1938]:
                          - img "step-forward" [ref=e1940]:
                            - img [ref=e1941]
                    - generic [ref=e1943]:
                      - generic [ref=e1945]: Introduction to Generative AI [Learning Path]
                      - generic [ref=e1948]:
                        - generic [ref=e1949]: Mandatory
                        - generic [ref=e1950]: Assigned by Admin
                  - generic [ref=e1953] [cursor=pointer]:
                    - generic [ref=e1954]:
                      - generic [ref=e1956]:
                        - generic [ref=e1957]: Due
                        - generic [ref=e1958]: 29-05-2026
                      - generic [ref=e1960]:
                        - status "Individual Content" [ref=e1961]:
                          - img [ref=e1962]:
                            - img [ref=e1963]
                          - generic [ref=e1965]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1967]:
                          - img "step-forward" [ref=e1969]:
                            - img [ref=e1970]
                    - generic [ref=e1972]:
                      - generic [ref=e1974]: Introduction to Generative AI [Learning Path]
                      - generic [ref=e1977]:
                        - generic [ref=e1978]: Mandatory
                        - generic [ref=e1979]: Assigned by Admin
                  - generic [ref=e1982] [cursor=pointer]:
                    - generic [ref=e1983]:
                      - generic [ref=e1985]:
                        - generic [ref=e1986]: Due
                        - generic [ref=e1987]: N/A
                      - generic [ref=e1989]:
                        - status "Individual Content" [ref=e1990]:
                          - img [ref=e1991]:
                            - img [ref=e1992]
                          - generic [ref=e1994]: Individual Content
                        - button "In progress, mark complete" [ref=e1996]:
                          - img [ref=e1998]:
                            - img [ref=e1999]
                    - generic [ref=e2002]:
                      - generic [ref=e2004]: Test sample 2026 001
                      - generic [ref=e2006]:
                        - generic [ref=e2007]:
                          - generic [ref=e2009]: Software Development Lifecycle (SDLC) Management
                          - generic [ref=e2011]: Agile/Scrum Methodologies
                        - separator [ref=e2012]
                        - generic [ref=e2014]: Assigned by Admin
  - generic [ref=e2020]:
    - generic "Cloud Resilience & Security" [ref=e2021] [cursor=pointer]:
      - generic [ref=e2022]: Cloud Resilience & Security
    - generic "Code Review & Quality Assurance" [ref=e2023] [cursor=pointer]:
      - generic [ref=e2024]: Code Review & Quality Assurance
    - generic "Commercial Governance and FinOps" [ref=e2025] [cursor=pointer]:
      - generic [ref=e2026]: Commercial Governance and FinOps
    - generic "Consulting & Business Development Initiatives" [ref=e2027] [cursor=pointer]:
      - generic [ref=e2028]: Consulting & Business Development Initiatives
    - generic "Continuous Integration & Continuous Deployment (CI/CD)" [ref=e2029] [cursor=pointer]:
      - generic [ref=e2030]: Continuous Integration & Continuous Deployment (CI/CD)
    - generic "Corporate Governance" [ref=e2031] [cursor=pointer]:
      - generic [ref=e2032]: Corporate Governance
    - generic "Crowd Entertainment" [ref=e2033] [cursor=pointer]:
      - generic [ref=e2034]: Crowd Entertainment
    - generic "Data Engineering" [ref=e2035] [cursor=pointer]:
      - generic [ref=e2036]: Data Engineering
    - generic "Data Engineering Core" [ref=e2037] [cursor=pointer]:
      - generic [ref=e2038]: Data Engineering Core
    - generic "Data Science" [ref=e2039] [cursor=pointer]:
      - generic [ref=e2040]: Data Science
  - generic [ref=e2041]: "0"
```

# Test source

```ts
  44  | 
  45  |   }
  46  | 
  47  |   async verifyHomepageLoaded() {
  48  |       await this.homepageTitle.waitFor({ state: 'visible' });
  49  |       await expect(this.assignedCoursesTab).toBeVisible();
  50  |       await expect(this.aiRecommendationsTab).toBeVisible();
  51  |   }
  52  | 
  53  |   async verifyManagerAndAdminSections() {
  54  |     await expect(this.assignedByManagerSection).toBeVisible();
  55  |     await expect(this.assignedByAdminSection).toBeVisible();
  56  |   }
  57  | 
  58  |   async verifyAssignedTooltip()     { await expect(this.assignedTooltip).toBeVisible(); }
  59  |   async verifyInProgressTooltip()   { await expect(this.inProgressTooltip).toBeVisible(); }
  60  |   async verifyLearningPathTooltip() { await expect(this.learningPathTooltip).toBeVisible(); }
  61  | 
  62  |   async verifyInProgressToast() {
  63  |     await this.inProgressToast.waitFor({ state: 'visible', timeout: 8000 });
  64  |   }
  65  | 
  66  |   async verifyMarkCompleteToast() {
  67  |     await this.markCompleteToast.waitFor({ state: 'visible', timeout: 8000 });
  68  |   }
  69  | 
  70  |   async verifyConfirmCompletionDialog(contentName) {
  71  |     await expect(this.page.getByText('Confirm completion')).toBeVisible();
  72  |     await expect(
  73  |       this.page.getByLabel('Confirm completion').getByText(contentName)
  74  |     ).toBeVisible();
  75  |   }
  76  | 
  77  |   async verifyContentVisible(contentName) {
  78  |     const content = this.page.getByText(contentName, { exact: true });
  79  |     await content.scrollIntoViewIfNeeded();
  80  |     await expect(content).toBeVisible();
  81  |   }
  82  | 
  83  | 
  84  |   async verifyLearningPathDetailsScreen(learningPathName)
  85  |   {
  86  |     await expect(this.page.getByRole('heading', { name: `${learningPathName}` })).toBeVisible();
  87  |     await expect(this.page.locator('.ant-progress-rail')).toBeVisible();
  88  |   }
  89  | 
  90  |   async verifyFiltersOnLearningPathDetailsScreen(){
  91  |     await expect(this.page.getByRole('heading', { name: 'Learning Path Content' })).toBeVisible();
  92  |     await expect(this.page.getByText('Quick Filters')).toBeVisible();
  93  |     await expect(this.page.getByText('Priority')).toBeVisible();
  94  |     await expect(this.page.locator('span').filter({ hasText: 'Optional' }).first()).toBeVisible();
  95  |     await expect(this.page.getByLabel('Filter by priority').getByText('Mandatory')).toBeVisible();
  96  |     await expect(this.page.getByText('Status')).toBeVisible();
  97  |     await expect(this.page.locator('span').filter({ hasText: 'Assigned' }).nth(1)).toBeVisible();
  98  |     await expect(this.page.locator('span').filter({ hasText: 'In Progress' }).first()).toBeVisible();
  99  |     await expect(this.page.locator('span').filter({ hasText: 'Completed' }).first()).toBeVisible();
  100 |   }
  101 | 
  102 |   async openIndividualContent(contentName){
  103 |     await this.page.getByText(contentName).click();
  104 | 
  105 |   }
  106 | 
  107 |   async openLearningPath(learningPathName){
  108 |     const content = this.page.getByText(learningPathName, { exact: true });
  109 |     await content.scrollIntoViewIfNeeded();
  110 |     await expect(content).toBeVisible();
  111 |     await this.page.getByText(learningPathName).click();
  112 |   }
  113 | 
  114 | 
  115 | 
  116 |   async verifySearchContentVisible(courseName, contentName) {
  117 |     await this.searchTextbox.waitFor({ state: 'visible' });
  118 |     await this.searchTextbox.fill(courseName);
  119 |     await this.page.waitForLoadState('domcontentloaded');
  120 |     await this.verifyContentVisible(contentName);
  121 |   }
  122 | 
  123 |   async verifyOnlySelectedSkillCategoryContentsVisible(skillcategoryValue) {
  124 |     const pills =  this.page.locator('._listPillSkillCategory_p5zy6_654');
  125 |     const count = await pills.count();
  126 |     for(let i=0;i<count;i++){
  127 |       const pill = pills.nth(i);
  128 |       const text = (await pill.textContent())?.trim();
  129 |       const contentName = (
  130 |         await pill
  131 |         .locator("xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516']")
  132 |         .textContent()
  133 |       )?.trim();
  134 |       if(text !== skillCategoryValue){
  135 |         throw new Error(`${contentName} does not have ${skillCategoryValue}`);
  136 |       }
  137 |       console.log(`${contentName} has skill category ${skillCategoryValue}`);
  138 |     }
  139 |   }
  140 | 
  141 |   async selectSkillCategory(skillCategory) {
  142 |     await this.skillCatgeoryDropdown.waitFor({ state: 'visible' });
  143 |     await this.skillCatgeoryDropdown.click();
> 144 |     await this.page.getByRole('option', { name: skillCategory }).click();
      |                                                                  ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  145 |     await this.page.waitForLoadState('domcontentloaded');
  146 |   }
  147 | 
  148 |   async selectSkillName(skillName) {
  149 |     await this.skillNameDropdown.waitFor({ state: 'visible' });
  150 |     await this.skillNameDropdown.click();
  151 |     await page.getByRole('option', { name: skillName }).click();
  152 |   }
  153 | 
  154 |   async getContentNames(){
  155 |     const cards = this.page.locator('[class*="_listHeadingWrap_"]');
  156 |     await cards.first().waitFor({ state: 'visible' });
  157 |     const names = await cards.allTextContents();
  158 |     return names.map(n => n.trim()).filter(Boolean);
  159 |   }
  160 | 
  161 |   async getManagerAssignedCardNames() {
  162 |     await this.assignedByManagerSection.waitFor({ state: 'visible' });
  163 |     const cards = this.page.locator(
  164 |       `//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  165 |     );
  166 |     await cards.first().waitFor({ state: 'visible' });
  167 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  168 |   }
  169 | 
  170 |     async getAdminAssignedCardNames() {
  171 |     await this.assignedByAdminSection.waitFor({ state: 'visible' });
  172 |     const cards = this.page.locator(
  173 |       `//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  174 |     );
  175 |     await cards.first().waitFor({ state: 'visible' });
  176 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  177 |   }
  178 | 
  179 | 
  180 |   async getContentProgressButton(contentName) {
  181 |     const btn = this.page.locator(
  182 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  183 |     );
  184 |     await btn.scrollIntoViewIfNeeded();
  185 |     await btn.waitFor({ state: 'visible' });
  186 |     return btn;
  187 |   }
  188 | 
  189 |   async getLearningPathProgressPercentage()
  190 |   {
  191 |     const progressLocator = this.learningPathProgressLocator;
  192 |     await progressLocator.waitFor({ state: 'visible' });
  193 |     const currentProgress = (await progressLocator.textContent())?.trim() ?? '';
  194 |     return currentProgress;
  195 |   }
  196 | 
  197 | 
  198 |   async getListedIndividualContentNames(){
  199 |     const contentNames = await this.page.locator(`//div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`).allTextContents();
  200 |     return contentNames;
  201 |   }
  202 | 
  203 | 
  204 |   async markAllIndividualContentsToCompleteStatus(contentNames)
  205 |   {
  206 |     for (const contentName of contentNames) {
  207 |       const progressButton = this.page.locator(
  208 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  209 |     );
  210 | 
  211 |       if ((await progressButton.count()) === 0) {
  212 |         console.log(`"${contentName}" already complete (no button) — skipping`);
  213 |         continue;
  214 |       }
  215 | 
  216 |       await progressButton.scrollIntoViewIfNeeded();
  217 |       await progressButton.hover();
  218 | 
  219 |       const tooltip = this.page.getByRole('tooltip');
  220 |       await tooltip.waitFor({ state: 'visible' });
  221 |       const message = ((await tooltip.textContent())?.trim() ?? '').toLowerCase();
  222 | 
  223 |       if(message.includes('in progress')){
  224 |         await progressButton.click();
  225 |         await this.verifyInProgressToast()
  226 |         await this.inProgressToast.waitFor({ state: 'hidden' });
  227 | 
  228 |         await progressButton.hover();
  229 |         await this.verifyInProgressTooltip();
  230 |         await progressButton.click();
  231 |         await this.confirmCompletion(contentName);
  232 | 
  233 |       } else if (message.includes('mark complete')){
  234 |         await progressButton.click();
  235 |         await this.confirmCompletion(contentName);
  236 |       }
  237 |   }
  238 |     const finalProgressPercentage = await this.getLearningPathProgressPercentage();
  239 |     expect(finalProgressPercentage).toBe('100%');
  240 |   }
  241 | 
  242 | 
  243 |   async confirmCompletion(contentName) {
  244 |     await this.verifyConfirmCompletionDialog(contentName);
```