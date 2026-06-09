# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-filters-validation.spec.js >> Home Page filters validation >> Skill category filter validation
- Location: tests/specs/homepage/homepage-filters-validation.spec.js:17:10

# Error details

```
Error: Master the Art of Questions to Unlock Meaningful Conversations - YouTube
In an entertaining & interactive way, demonstrates "intentional communication" and the art of asking right questions. does not have Consulting & Business Development Initiatives as skill category
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
                      - generic: "24"
                      - generic: Total Assigned
                  - generic [ref=e105]:
                    - generic [ref=e108]: 20 Assigned
                    - generic [ref=e111]: 1 In Progress
                    - generic [ref=e114]: 3 Completed
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
              - generic: Consulting & Business Development Initiatives
              - generic [ref=e208]:
                - generic [ref=e209]:
                  - generic "Consulting & Business Development Initiatives" [ref=e210]
                  - combobox [active] [ref=e211]
                - img "down" [ref=e213]:
                  - img [ref=e214]
                - img "close-circle" [ref=e217] [cursor=pointer]:
                  - img [ref=e218]
              - generic [ref=e220]:
                - generic [ref=e221]:
                  - generic: Skill Name
                  - combobox [ref=e222]
                - img "down" [ref=e224]:
                  - img [ref=e225]
              - generic [ref=e227]:
                - textbox "Due Date" [ref=e229]
                - generic "to" [ref=e231]:
                  - img "swap-right" [ref=e232]:
                    - img [ref=e233]
                - textbox "Due Date" [ref=e236]
                - generic:
                  - img "calendar":
                    - img
            - generic [ref=e239]:
              - strong [ref=e241]: Quick Filters
              - generic [ref=e242]:
                - generic [ref=e243]:
                  - generic [ref=e244]: Priority
                  - generic "Filter by priority" [ref=e245]:
                    - generic [ref=e246] [cursor=pointer]: Optional
                    - generic [ref=e247] [cursor=pointer]: Mandatory
                - generic [ref=e248]:
                  - generic [ref=e249]: Status
                  - generic "Filter by status" [ref=e250]:
                    - generic [ref=e251] [cursor=pointer]: Assigned
                    - generic [ref=e252] [cursor=pointer]: In Progress
            - generic [ref=e253]:
              - generic [ref=e255]:
                - generic [ref=e259]:
                  - generic [ref=e260]:
                    - generic [ref=e262]:
                      - img "crown" [ref=e263]:
                        - img [ref=e264]
                      - text: Assigned By Manager
                    - generic [ref=e267]: 0 Content
                  - generic [ref=e268]:
                    - generic "Sort courses" [ref=e270] [cursor=pointer]:
                      - generic [ref=e271]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e272]
                      - img "down" [ref=e274]:
                        - img [ref=e275]
                    - button "Collapse section" [expanded] [ref=e278] [cursor=pointer]:
                      - img "up" [ref=e280]:
                        - img [ref=e281]
                - generic [ref=e284]:
                  - img "No data" [ref=e286]
                  - generic [ref=e298]: No courses assigned by manager
              - generic [ref=e300]:
                - generic [ref=e304]:
                  - generic [ref=e305]:
                    - generic [ref=e307]:
                      - img "user" [ref=e308]:
                        - img [ref=e309]
                      - text: Assigned By Admin
                    - generic [ref=e312]: 21 Content
                  - generic [ref=e313]:
                    - generic "Sort courses" [ref=e315] [cursor=pointer]:
                      - generic [ref=e316]:
                        - generic: Sort by
                        - combobox "Sort courses" [ref=e317]
                      - img "down" [ref=e319]:
                        - img [ref=e320]
                    - button "Collapse section" [expanded] [ref=e323] [cursor=pointer]:
                      - img "up" [ref=e325]:
                        - img [ref=e326]
                - generic [ref=e330]:
                  - generic [ref=e333] [cursor=pointer]:
                    - generic [ref=e334]:
                      - generic [ref=e336]:
                        - generic [ref=e337]: Due
                        - generic [ref=e338]: N/A
                      - generic [ref=e340]:
                        - status "Individual Content" [ref=e341]:
                          - img [ref=e342]:
                            - img [ref=e343]
                          - generic [ref=e345]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e347]:
                          - img "step-forward" [ref=e349]:
                            - img [ref=e350]
                    - generic [ref=e352]:
                      - generic [ref=e354]: LinkedIn Sales Navigator MASTERCLASS - Tutorial, Tips, Tricks, and Hacks to Find Leads Hands-on demonstration of using the website effectively.
                      - generic [ref=e356]:
                        - generic [ref=e357]:
                          - generic [ref=e359]: Consulting & Business Development Initiatives
                          - generic [ref=e361]: Sales Execution & Deal Closure
                        - separator [ref=e362]
                        - generic [ref=e363]:
                          - generic [ref=e364]: Mandatory
                          - generic [ref=e365]: Assigned by Admin
                  - generic [ref=e368] [cursor=pointer]:
                    - generic [ref=e369]:
                      - generic [ref=e371]:
                        - generic [ref=e372]: Due
                        - generic [ref=e373]: N/A
                      - generic [ref=e375]:
                        - status "Individual Content" [ref=e376]:
                          - img [ref=e377]:
                            - img [ref=e378]
                          - generic [ref=e380]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e382]:
                          - img "step-forward" [ref=e384]:
                            - img [ref=e385]
                    - generic [ref=e387]:
                      - generic [ref=e389]: "Optimize your Email Deliverability: Content | Heinz Marketing"
                      - generic [ref=e391]:
                        - generic [ref=e392]:
                          - generic [ref=e394]: Consulting & Business Development Initiatives
                          - generic [ref=e396]: Sales Execution & Deal Closure
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
                      - generic [ref=e424]: "Customer Profiles: How to Build and Use Them - Qualtrics"
                      - generic [ref=e426]:
                        - generic [ref=e427]:
                          - generic [ref=e429]: Consulting & Business Development Initiatives
                          - generic [ref=e431]: Sales Execution & Deal Closure
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
                        - button "In progress, mark complete" [ref=e452]:
                          - img [ref=e454]:
                            - img [ref=e455]
                    - generic [ref=e458]:
                      - generic [ref=e460]: Competitor Analysis and Market Research - Qualtrics
                      - generic [ref=e462]:
                        - generic [ref=e463]:
                          - generic [ref=e465]: Consulting & Business Development Initiatives
                          - generic [ref=e467]: Sales Execution & Deal Closure
                        - separator [ref=e468]
                        - generic [ref=e469]:
                          - generic [ref=e470]: Mandatory
                          - generic [ref=e471]: Assigned by Admin
                  - generic [ref=e474] [cursor=pointer]:
                    - generic [ref=e475]:
                      - generic [ref=e477]:
                        - generic [ref=e478]: Due
                        - generic [ref=e479]: N/A
                      - generic [ref=e481]:
                        - status "Individual Content" [ref=e482]:
                          - img [ref=e483]:
                            - img [ref=e484]
                          - generic [ref=e486]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e488]:
                          - img "step-forward" [ref=e490]:
                            - img [ref=e491]
                    - generic [ref=e493]:
                      - generic [ref=e495]: What Does Lead Qualification Mean? | How to Qualify Sales Leads Goes over frameworks used to qualify leads, with examples.
                      - generic [ref=e497]:
                        - generic [ref=e498]:
                          - generic [ref=e500]: Consulting & Business Development Initiatives
                          - generic [ref=e502]: Consultative Selling
                        - separator [ref=e503]
                        - generic [ref=e504]:
                          - generic [ref=e505]: Mandatory
                          - generic [ref=e506]: Assigned by Admin
                  - generic [ref=e509] [cursor=pointer]:
                    - generic [ref=e510]:
                      - generic [ref=e512]:
                        - generic [ref=e513]: Due
                        - generic [ref=e514]: N/A
                      - generic [ref=e516]:
                        - status "Individual Content" [ref=e517]:
                          - img [ref=e518]:
                            - img [ref=e519]
                          - generic [ref=e521]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e523]:
                          - img "step-forward" [ref=e525]:
                            - img [ref=e526]
                    - generic [ref=e528]:
                      - generic [ref=e530]: Master the Art of Questions to Unlock Meaningful Conversations - YouTube In an entertaining & interactive way, demonstrates "intentional communication" and the art of asking right questions.
                      - generic [ref=e532]:
                        - generic [ref=e533]:
                          - generic [ref=e535]: Consulting & Business Development Initiatives, Stakeholder & Client Partnership
                          - generic [ref=e537]: Consultative Selling, Stakeholder Management
                        - separator [ref=e538]
                        - generic [ref=e539]:
                          - generic [ref=e540]: Mandatory
                          - generic [ref=e541]: Assigned by Admin
                  - generic [ref=e544] [cursor=pointer]:
                    - generic [ref=e545]:
                      - generic [ref=e547]:
                        - generic [ref=e548]: Due
                        - generic [ref=e549]: N/A
                      - generic [ref=e551]:
                        - status "Individual Content" [ref=e552]:
                          - img [ref=e553]:
                            - img [ref=e554]
                          - generic [ref=e556]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e558]:
                          - img "step-forward" [ref=e560]:
                            - img [ref=e561]
                    - generic [ref=e563]:
                      - generic [ref=e565]: 23 Elevator Pitch Examples to Inspire Your Own [+Templates & Expert Tips]
                      - generic [ref=e567]:
                        - generic [ref=e568]:
                          - generic [ref=e570]: Consulting & Business Development Initiatives
                          - generic [ref=e572]: Sales Execution & Deal Closure
                        - separator [ref=e573]
                        - generic [ref=e574]:
                          - generic [ref=e575]: Mandatory
                          - generic [ref=e576]: Assigned by Admin
                  - generic [ref=e579] [cursor=pointer]:
                    - generic [ref=e580]:
                      - generic [ref=e582]:
                        - generic [ref=e583]: Due
                        - generic [ref=e584]: N/A
                      - generic [ref=e586]:
                        - status "Individual Content" [ref=e587]:
                          - img [ref=e588]:
                            - img [ref=e589]
                          - generic [ref=e591]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e593]:
                          - img "step-forward" [ref=e595]:
                            - img [ref=e596]
                    - generic [ref=e598]:
                      - generic [ref=e600]: You Must Understand Your Competition | Wolters Kluwer
                      - generic [ref=e602]:
                        - generic [ref=e603]:
                          - generic [ref=e605]: Consulting & Business Development Initiatives
                          - generic [ref=e607]: Sales Execution & Deal Closure, Commercial Account Management
                        - separator [ref=e608]
                        - generic [ref=e609]:
                          - generic [ref=e610]: Mandatory
                          - generic [ref=e611]: Assigned by Admin
                  - generic [ref=e614] [cursor=pointer]:
                    - generic [ref=e615]:
                      - generic [ref=e617]:
                        - generic [ref=e618]: Due
                        - generic [ref=e619]: N/A
                      - generic [ref=e621]:
                        - status "Individual Content" [ref=e622]:
                          - img [ref=e623]:
                            - img [ref=e624]
                          - generic [ref=e626]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e628]:
                          - img "step-forward" [ref=e630]:
                            - img [ref=e631]
                    - generic [ref=e633]:
                      - generic [ref=e635]: The science behind dramatically better conversations | Charles Duhigg | TEDxManchester - YouTube Speaks about the role of precise questions to understand the other person's wishes best. "The matching principle".
                      - generic [ref=e637]:
                        - generic [ref=e638]:
                          - generic [ref=e640]: Consulting & Business Development Initiatives, Stakeholder & Client Partnership
                          - generic [ref=e642]: Consultative Selling, Stakeholder Management
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
                      - generic [ref=e670]: Mastering Sales Qualification for Effective Lead Conversion | Gong
                      - generic [ref=e672]:
                        - generic [ref=e673]:
                          - generic [ref=e675]: Consulting & Business Development Initiatives
                          - generic [ref=e677]: Sales Execution & Deal Closure
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
                      - generic [ref=e705]: Challenger Sales Model Summary & Tips | Pipedrive Speaks of pushing the customer to get out of their comfort zone.
                      - generic [ref=e707]:
                        - generic [ref=e708]:
                          - generic [ref=e710]: Consulting & Business Development Initiatives
                          - generic [ref=e712]: Consultative Selling
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
                      - generic [ref=e740]: How to Build Positioning & Messaging (by an ex-Google PMM) - YouTube Gives a concerete, helpful blueprint for making a value proposition and positioning.
                      - generic [ref=e742]:
                        - generic [ref=e743]:
                          - generic [ref=e745]: Consulting & Business Development Initiatives
                          - generic [ref=e747]: Market Research & Pipeline Generation
                        - separator [ref=e748]
                        - generic [ref=e749]:
                          - generic [ref=e750]: Mandatory
                          - generic [ref=e751]: Assigned by Admin
                  - generic [ref=e754] [cursor=pointer]:
                    - generic [ref=e755]:
                      - generic [ref=e757]:
                        - generic [ref=e758]: Due
                        - generic [ref=e759]: N/A
                      - generic [ref=e761]:
                        - status "Individual Content" [ref=e762]:
                          - img [ref=e763]:
                            - img [ref=e764]
                          - generic [ref=e766]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e768]:
                          - img "step-forward" [ref=e770]:
                            - img [ref=e771]
                    - generic [ref=e773]:
                      - generic [ref=e775]: What Will Happen to Marketing in the Age of AI? | Jessica Apotheker | TED - YouTube Shows how AI tools speed up the marketing process, and help us unlock insights.
                      - generic [ref=e777]:
                        - generic [ref=e778]:
                          - generic [ref=e780]: Consulting & Business Development Initiatives
                          - generic [ref=e782]: Sales Execution & Deal Closure
                        - separator [ref=e783]
                        - generic [ref=e784]:
                          - generic [ref=e785]: Mandatory
                          - generic [ref=e786]: Assigned by Admin
                  - generic [ref=e789] [cursor=pointer]:
                    - generic [ref=e790]:
                      - generic [ref=e792]:
                        - generic [ref=e793]: Due
                        - generic [ref=e794]: N/A
                      - generic [ref=e796]:
                        - status "Individual Content" [ref=e797]:
                          - img [ref=e798]:
                            - img [ref=e799]
                          - generic [ref=e801]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e803]:
                          - img "step-forward" [ref=e805]:
                            - img [ref=e806]
                    - generic [ref=e808]:
                      - generic [ref=e810]: 20 Open-Ended Sales Questions That'll Get Prospects Talking to You
                      - generic [ref=e812]:
                        - generic [ref=e813]:
                          - generic [ref=e815]: Consulting & Business Development Initiatives
                          - generic [ref=e817]: Sales Execution & Deal Closure
                        - separator [ref=e818]
                        - generic [ref=e819]:
                          - generic [ref=e820]: Mandatory
                          - generic [ref=e821]: Assigned by Admin
                  - generic [ref=e824] [cursor=pointer]:
                    - generic [ref=e825]:
                      - generic [ref=e827]:
                        - generic [ref=e828]: Due
                        - generic [ref=e829]: N/A
                      - generic [ref=e831]:
                        - status "Individual Content" [ref=e832]:
                          - img [ref=e833]:
                            - img [ref=e834]
                          - generic [ref=e836]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e838]:
                          - img "step-forward" [ref=e840]:
                            - img [ref=e841]
                    - generic [ref=e843]:
                      - generic [ref=e845]: "Cold Calling: How To Turn Prospects Into Customers | Salesforce"
                      - generic [ref=e847]:
                        - generic [ref=e848]:
                          - generic [ref=e850]: Consulting & Business Development Initiatives
                          - generic [ref=e852]: Sales Execution & Deal Closure
                        - separator [ref=e853]
                        - generic [ref=e854]:
                          - generic [ref=e855]: Mandatory
                          - generic [ref=e856]: Assigned by Admin
                  - generic [ref=e859] [cursor=pointer]:
                    - generic [ref=e860]:
                      - generic [ref=e862]:
                        - generic [ref=e863]: Due
                        - generic [ref=e864]: N/A
                      - generic [ref=e866]:
                        - status "Individual Content" [ref=e867]:
                          - img [ref=e868]:
                            - img [ref=e869]
                          - generic [ref=e871]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e873]:
                          - img "step-forward" [ref=e875]:
                            - img [ref=e876]
                    - generic [ref=e878]:
                      - generic [ref=e880]: Her Cold Email Strategy Has a 43% OPEN RATE! - YouTube Simple tips to make your email stand out from a sea of emails lying around in the inbox.
                      - generic [ref=e882]:
                        - generic [ref=e883]:
                          - generic [ref=e885]: Consulting & Business Development Initiatives
                          - generic [ref=e887]: Sales Execution & Deal Closure
                        - separator [ref=e888]
                        - generic [ref=e889]:
                          - generic [ref=e890]: Mandatory
                          - generic [ref=e891]: Assigned by Admin
                  - generic [ref=e894] [cursor=pointer]:
                    - generic [ref=e895]:
                      - generic [ref=e897]:
                        - generic [ref=e898]: Due
                        - generic [ref=e899]: N/A
                      - generic [ref=e901]:
                        - status "Individual Content" [ref=e902]:
                          - img [ref=e903]:
                            - img [ref=e904]
                          - generic [ref=e906]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e908]:
                          - img "step-forward" [ref=e910]:
                            - img [ref=e911]
                    - generic [ref=e913]:
                      - generic [ref=e915]: How to Write a Great Value Proposition [7 Top Examples + Template]
                      - generic [ref=e917]:
                        - generic [ref=e918]:
                          - generic [ref=e920]: Consulting & Business Development Initiatives
                          - generic [ref=e922]: Sales Execution & Deal Closure
                        - separator [ref=e923]
                        - generic [ref=e924]:
                          - generic [ref=e925]: Mandatory
                          - generic [ref=e926]: Assigned by Admin
                  - generic [ref=e929] [cursor=pointer]:
                    - generic [ref=e930]:
                      - generic [ref=e932]:
                        - generic [ref=e933]: Due
                        - generic [ref=e934]: N/A
                      - generic [ref=e936]:
                        - status "Individual Content" [ref=e937]:
                          - img [ref=e938]:
                            - img [ref=e939]
                          - generic [ref=e941]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e943]:
                          - img "step-forward" [ref=e945]:
                            - img [ref=e946]
                    - generic [ref=e948]:
                      - generic [ref=e950]: LinkedIn Sales Navigator for Beginners (Full Course) Goes over a number of features & tools in the program to get what's desired.
                      - generic [ref=e952]:
                        - generic [ref=e953]:
                          - generic [ref=e955]: Consulting & Business Development Initiatives
                          - generic [ref=e957]: Sales Execution & Deal Closure
                        - separator [ref=e958]
                        - generic [ref=e959]:
                          - generic [ref=e960]: Mandatory
                          - generic [ref=e961]: Assigned by Admin
                  - generic [ref=e964] [cursor=pointer]:
                    - generic [ref=e965]:
                      - generic [ref=e967]:
                        - generic [ref=e968]: Due
                        - generic [ref=e969]: N/A
                      - generic [ref=e971]:
                        - status "Individual Content" [ref=e972]:
                          - img [ref=e973]:
                            - img [ref=e974]
                          - generic [ref=e976]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e978]:
                          - img "step-forward" [ref=e980]:
                            - img [ref=e981]
                    - generic [ref=e983]:
                      - generic [ref=e985]: How to Get B2B Customer Segmentation Right [+Tips]
                      - generic [ref=e987]:
                        - generic [ref=e988]:
                          - generic [ref=e990]: Consulting & Business Development Initiatives
                          - generic [ref=e992]: Sales Execution & Deal Closure
                        - separator [ref=e993]
                        - generic [ref=e994]:
                          - generic [ref=e995]: Mandatory
                          - generic [ref=e996]: Assigned by Admin
                  - generic [ref=e999] [cursor=pointer]:
                    - generic [ref=e1000]:
                      - generic [ref=e1002]:
                        - generic [ref=e1003]: Due
                        - generic [ref=e1004]: N/A
                      - generic [ref=e1006]:
                        - status "Individual Content" [ref=e1007]:
                          - img [ref=e1008]:
                            - img [ref=e1009]
                          - generic [ref=e1011]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1013]:
                          - img "step-forward" [ref=e1015]:
                            - img [ref=e1016]
                    - generic [ref=e1018]:
                      - generic [ref=e1020]: "30 Sales Call Tips: How to Start Conversations so Prospects Don't Hang Up On You"
                      - generic [ref=e1022]:
                        - generic [ref=e1023]:
                          - generic [ref=e1025]: Consulting & Business Development Initiatives
                          - generic [ref=e1027]: Sales Execution & Deal Closure
                        - separator [ref=e1028]
                        - generic [ref=e1029]:
                          - generic [ref=e1030]: Mandatory
                          - generic [ref=e1031]: Assigned by Admin
                  - generic [ref=e1034] [cursor=pointer]:
                    - generic [ref=e1035]:
                      - generic [ref=e1037]:
                        - generic [ref=e1038]: Due
                        - generic [ref=e1039]: N/A
                      - generic [ref=e1041]:
                        - status "Individual Content" [ref=e1042]:
                          - img [ref=e1043]:
                            - img [ref=e1044]
                          - generic [ref=e1046]: Individual Content
                        - button "Assigned, mark as in progress" [ref=e1048]:
                          - img "step-forward" [ref=e1050]:
                            - img [ref=e1051]
                    - generic [ref=e1053]:
                      - generic [ref=e1055]: "The art of negotiation: Six must-have strategies | LBS - YouTube"
                      - generic [ref=e1057]:
                        - generic [ref=e1058]:
                          - generic [ref=e1060]: Consulting & Business Development Initiatives
                          - generic [ref=e1062]: Sales Execution & Deal Closure
                        - separator [ref=e1063]
                        - generic [ref=e1064]:
                          - generic [ref=e1065]: Mandatory
                          - generic [ref=e1066]: Assigned by Admin
  - generic [ref=e1067]: "0"
```

# Test source

```ts
  36  |     this.learningPathTooltip = page.getByRole('tooltip', { name: 'Click the card to open the learning path' });
  37  |     
  38  |     this.inProgressToast = page.getByText('Marked as in progress');
  39  |     this.markCompleteToast = page.locator('div').filter({ hasText: 'Marked as completed' }).first();
  40  |     
  41  |     this.confirmCompleteCancelButton = page.getByRole('button', { name: 'Cancel'});
  42  |     this.yesMarkCompleteButton = page.getByRole('button', { name: 'Yes, mark complete'});
  43  |     this.learningPathProgressLocator = this.page.locator('[class*="_pathProgressPercent_"]');
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
  123 |   async verifyOnlySelectedSkillCategoryContentsVisible(skillCategoryValue) {
  124 |     const pills =  this.page.locator('._listPillSkillCategory_p5zy6_654');
  125 |     const count = await pills.count();
  126 |     for(let i=0;i<count;i++){
  127 |       const pill = pills.nth(i);
  128 |       const text = (await pill.textContent())?.trim();
  129 |       console.log(`Pill[${i}] text = "${text}"`);
  130 |       const contentName = (
  131 |         await pill
  132 |         .locator("xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]")
  133 |         .textContent()
  134 |       )?.trim();
  135 |       if(text !== skillCategoryValue){
> 136 |         throw new Error(`${contentName} does not have ${skillCategoryValue} as skill category`);
      |               ^ Error: Master the Art of Questions to Unlock Meaningful Conversations - YouTube
  137 |       }
  138 |       console.log(`${contentName} has skill category ${skillCategoryValue} as skill category`);
  139 |     }
  140 |   }
  141 | 
  142 |   async selectSkillCategory(skillCategory) {
  143 |     await this.skillCatgeoryDropdown.click();
  144 |     await this.page.getByText(skillCategory).click();
  145 |     await this.page.locator('[class*="_listPillSkillCategory_"]').first().waitFor({ state: 'visible' });
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
```