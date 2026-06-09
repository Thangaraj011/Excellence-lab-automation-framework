# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: excellence-lab-homepage-Individual-content.spec.js >> Excellence Lab Homepage Individual Content Status Update Validation >> Individual Content update status to Complete
- Location: tests/specs/excellence-lab-homepage-Individual-content.spec.js:39:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('tooltip', { name: 'Mark complete' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('tooltip', { name: 'Mark complete' })

```

```yaml
- complementary:
  - link "EL Logo Excellence Lab":
    - /url: /homepage
    - img "EL Logo"
    - heading "Excellence Lab" [level=4]
  - link "home Homepage":
    - /url: /homepage
    - button "home Homepage":
      - img "home"
      - text: Homepage
  - link "clock-circle Learning Records":
    - /url: /history
    - button "clock-circle Learning Records":
      - img "clock-circle"
      - text: Learning Records
  - link "file-text Content Catalogue":
    - /url: /content-catalogue
    - button "file-text Content Catalogue":
      - img "file-text"
      - text: Content Catalogue
  - link "My profile":
    - /url: /my-profile
    - img
    - text: Thangaraj R
  - link "form Feedback":
    - /url: /user-feedback
    - button "form Feedback":
      - img "form"
      - text: Feedback
  - button "menu-fold Minimize":
    - img "menu-fold"
    - text: Minimize
  - button "logout Logout":
    - img "logout"
    - text: Logout
- main:
  - heading "Homepage" [level=4]
  - tablist:
    - tab "Assigned Courses" [selected]
    - tab "AI Recommendations"
  - tabpanel "Assigned Courses":
    - text: Learning Progress
    - application
    - text: 58 Total Assigned 48 Assigned 6 In Progress 4 Completed Learning Trend
    - button "Expand chart":
      - img "fullscreen"
    - application: Dec Jan Feb Mar Apr May Jun 0 5 10 18
    - textbox "Search"
    - img "search"
    - text: Skill category
    - combobox
    - img "down"
    - text: Skill Name
    - combobox
    - img "down"
    - textbox "Due Date"
    - img "swap-right"
    - textbox "Due Date"
    - img "calendar"
    - strong: Quick Filters
    - text: Priority Optional Mandatory Status Assigned In Progress
    - img "crown"
    - text: Assigned By Manager 11 Content Sort by
    - combobox "Sort courses"
    - img "down"
    - button "Collapse section" [expanded]:
      - img "up"
    - text: Due 31-05-2026
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]
    - text: "Learning path Practice Program 2026 Administration, Code Review & Quality Assurance, Consulting & Business Development Initiatives, Stakeholder & Client Partnership, Cloud Engineering Core, User-defined, System Design & Architecture, Sales Cycle, Revenue & Lifecycle Management, Treasury, Accounts Payables, Tax & Compliance, Corporate Governance, Audit, Risk & Assurance, Tech Governance, Sales Performance Steering, Commercial Governance and FinOps, Software Development Lifecycle (SDLC) Management, Continuous Integration & Continuous Deployment (CI/CD), Financial Strategic Enablement, Workforce Planning, Talent Acquisition, Employee Experience & Lifecycle Management, HR Software, Strategic Business Partnering & Governance, Learning Enablement, Crowd Entertainment, AI Fluency, Magician Beginner Mobility Management, Code Review Methodologies and Test-Driven Development (TDD) Practices, Consultative Selling, Effective Communication, Emotional Management, Stakeholder Management, Automation & Infrastructure as Code (IaC), Cloud Architecture & Solution Design, Selenium Webdriver, Playwright Automation, QC best Strandards, Software Quality, Google Cloud Run Serverless Workshop, Develop Serverless Applications on Cloud Run, Develop Serverless Apps with Firebase, Postman API, terraform, Design Systems Management: Building, documenting, and maintaining scalable component libraries that align with development, Information Architecture (IA): Crafting complex sitemaps, user flows, and taxonomy for large scale enterprise or SaaS products., AI-Driven UX (GenAI): Learning how to design for AI agents, prompt engineering for interfaces, and handling \"uncertainty\" in AI outputs., Motion Design for UX: Using motion to guide user behavior and provide feedback, rather than just for delightt, CSS, Tailwind CSS, Cloud Spanner, Cloud Datastream, cloud dataform, dbt, airbyte, ELT Tools, Biguery, Cloud Storage, Storage transfer service and bigquery data transfer service, SQL, tableau, Genrative AI, Langgraph, Agentic frameworks, Cloud-Agnostic System Design, Automation & IaC, Effective Communication & Active Listening, Order-to-Cash (O2C), Dispute Resolution with Client & OEMs, Working Capital Optimization, Revenue Leakage Identification, Tracking & Documentation, Contractual Compliance, Treasury, Supplier Alignment, Tax Operations, Transfer Pricing (TP) Mastery, Tax Advocacy & Litigation, Regulatory Intelligence, Statutory Filings & Company Law, Policy & Ethics Framework, Audit Execution, Risk Architecture, Evidence Evaluation & Analytical Review, Data Handling, Console, Programming, Revenue Forecasting, Sales Dashboarding & Reporting, Sales Incentive Management (SIP), Agile/Scrum Methodologies, Devops, Responsive & Multimodal Design: Designing seamless experiences across mobile, desktop, Continuous Integration & Continuous Deployment (CI/CD), Sales Process Compliance, Strategy Support & Knowledge Management, Account Planning Assurance, Reviews, Workforce Planning, JD Creation, Market Research, Headhunting, Candidate Screening, Interview Coordination & Stakeholder Management, Candidate Negotiation, Pre-boarding Engagement, Onboarding, Policies & SOPs, Offboarding, AppsScript, Culture & Community (HAPPIER), Grievance & Query Resolution, People Connects & Pulse Sensing, Organizational Design (OD), HR Analytics, Policy Architecture, Succession Planning, Performance Tracking, Organizational Gap Mapping, Role-wise Learning, Certification Tracking & Reporting, Leadership Advisory, Voucher & Resource Management, Selenium Grid, Selenium Interface, Rest Assured, seleium interface, Vanishing Magic, Shape Shifting Magic, Confusion Magic, Test Category Delete, test tategory Delete, Test, Deal Desk & Proposal Auditing, pupeteer, Ant Design, regression testing, Ground Magician, Puppeteer Mandatory Assigned by Manager Due 30-06-2026"
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]
    - text: AI Engineering | Technical Expert Badges GenAI, Data Science, Cloud Engineering Core Secure API Service, AI, Automation & IaC Mandatory Assigned by Manager Due 30-05-2026
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]
    - text: Thangaraj Testing sample 1 GenAI, Data Science, Cloud Engineering Core Secure API Service, AI, Automation & IaC Mandatory Assigned by Manager Due 28-05-2026
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]:
      - img "step-forward"
    - text: Learning path new case Software Development Lifecycle (SDLC) Management Agile/Scrum Methodologies Mandatory Assigned by Manager Due 31-05-2026
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]:
      - img "step-forward"
    - text: New Magic Learning path 2026 99 Crowd Entertainment Shape Shifting Magic Mandatory Assigned by Manager Due 31-05-2026
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]:
      - img "step-forward"
    - text: Typewriting Skills Learning 2026 Software Development Python Basics Mandatory Assigned by Manager Due 28-05-2026
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Major comedy show 2026 Mandatory Assigned by Manager Due 31-05-2026
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: "Software Architecture: REST API Design - The Complete Guide | Udemy System Design & Architecture Microservices Architecture Design Mandatory Assigned by Manager Due 28-05-2026"
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Master Control Override Horizon Zero Dawn Crowd Entertainment, System Design & Architecture, Cloud Engineering Core, Software Development Lifecycle (SDLC) Management, Code Review & Quality Assurance, Programming Proficiency Vanishing Magic, Microservices Architecture Design, High-Level Design (HLD) & Low-Level Design (LLD), Cloud Architecture & Solution Design, Architecture Best Practices and Frameworks, Automation & IaC, Agile/Scrum Methodologies, Code Review Methodologies and Test-Driven Development (TDD) Practices, Software Development Optional Assigned by Admin and Manager Due 23-05-2026
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]:
      - img "step-forward"
    - text: Test sample learning 28723 Optional Assigned by Manager Due 31-05-2026
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Global security measures 2026 Administration Security Management Optional Assigned by Manager
    - img "user"
    - text: Assigned By Admin 43 Content Sort by
    - combobox "Sort courses"
    - img "down"
    - button "Collapse section" [expanded]:
      - img "up"
    - text: Due N/A
    - status "Individual Content"
    - button "In progress, mark complete"
    - text: Generative AI Leader | Google Cloud Skills Boost AI Fluency AI Fluency Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: LinkedIn Sales Navigator MASTERCLASS - Tutorial, Tips, Tricks, and Hacks to Find Leads Hands-on demonstration of using the website effectively. Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "In progress, mark complete"
    - text: "122. How To Be More Confident and Calm in Your Communication: Managing the \"ABC’s\" of... [Podcast, Stanford Graduate School of Business] Stakeholder & Client Partnership Effective Communication Mandatory Assigned by Admin Due N/A"
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Negotiation Skills Masterclass - Business, Contract, Salary [Udemy] Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: "Optimize your Email Deliverability: Content | Heinz Marketing Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A"
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: The Art of Active Listening | The Harvard Business Review Guide Stakeholder & Client Partnership Effective Communication Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: "Customer Profiles: How to Build and Use Them - Qualtrics Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A"
    - status "Individual Content"
    - button "In progress, mark complete"
    - text: Communicating and Working with Stakeholders | Google Project Management Certificate - YouTube Stakeholder & Client Partnership Stakeholder Management, Effective Communication Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Competitor Analysis and Market Research - Qualtrics Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: "AI Boost Bites: Your Edge in the AI-Powered World | Google Cloud Skills Boost AI Fluency AI Fluency Mandatory Assigned by Admin Due N/A"
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: "Finance: What Managers Need to Know [HBR] Financial Acumen Financial Acumen Mandatory Assigned by Admin Due N/A"
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: What Does Lead Qualification Mean? | How to Qualify Sales Leads Goes over frameworks used to qualify leads, with examples. Consulting & Business Development Initiatives Consultative Selling Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: 5 Rules for Communicating Effectively with Executives Stakeholder & Client Partnership Effective Communication Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: "How to Control Your Emotions During a Difficult Conversation: The Harvard Business Review Guide Stakeholder & Client Partnership Effective Communication Mandatory Assigned by Admin Due N/A"
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Master the Art of Questions to Unlock Meaningful Conversations - YouTube In an entertaining & interactive way, demonstrates "intentional communication" and the art of asking right questions. Consulting & Business Development Initiatives, Stakeholder & Client Partnership Consultative Selling, Stakeholder Management Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: 23 Elevator Pitch Examples to Inspire Your Own [+Templates & Expert Tips] Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: You Must Understand Your Competition | Wolters Kluwer Consulting & Business Development Initiatives Sales Execution & Deal Closure, Commercial Account Management Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: The science behind dramatically better conversations | Charles Duhigg | TEDxManchester - YouTube Speaks about the role of precise questions to understand the other person's wishes best. "The matching principle". Consulting & Business Development Initiatives, Stakeholder & Client Partnership Consultative Selling, Stakeholder Management Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Fundamentals of Finance & Economics for Businesses – Crash Course Financial Acumen Financial Acumen Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: "Think Fast, Talk Smart: Communication Techniques - YouTube Stakeholder & Client Partnership Effective Communication Mandatory Assigned by Admin Due N/A"
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Mastering Sales Qualification for Effective Lead Conversion | Gong Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Prompt Engineering Guide AI Fluency AI Fluency Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Challenger Sales Model Summary & Tips | Pipedrive Speaks of pushing the customer to get out of their comfort zone. Consulting & Business Development Initiatives Consultative Selling Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: How to Build Positioning & Messaging (by an ex-Google PMM) - YouTube Gives a concerete, helpful blueprint for making a value proposition and positioning. Consulting & Business Development Initiatives Market Research & Pipeline Generation Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: What Will Happen to Marketing in the Age of AI? | Jessica Apotheker | TED - YouTube Shows how AI tools speed up the marketing process, and help us unlock insights. Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Building Financial Acumen as a Sales Professional Financial Acumen Financial Acumen Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: 20 Open-Ended Sales Questions That'll Get Prospects Talking to You Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: "Effective Communication Skills: Stakeholder Analysis Stakeholder & Client Partnership Effective Communication Mandatory Assigned by Admin Due N/A"
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: "Cold Calling: How To Turn Prospects Into Customers | Salesforce Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A"
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Use Body Language to Rock Your Next Presentation [Stanford GSB] Stakeholder & Client Partnership Effective Communication Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Gemini for Google Workspace | Google Cloud Skills Boost AI Fluency AI Fluency Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: "Daniel Goleman: The 4 domains of emotional intelligence | Daniel Goleman for Big Think+ Stakeholder & Client Partnership Effective Communication Mandatory Assigned by Admin Due N/A"
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Her Cold Email Strategy Has a 43% OPEN RATE! - YouTube Simple tips to make your email stand out from a sea of emails lying around in the inbox. Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: How to Write a Great Value Proposition [7 Top Examples + Template] Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: LinkedIn Sales Navigator for Beginners (Full Course) Goes over a number of features & tools in the program to get what's desired. Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: How to Get B2B Customer Segmentation Right [+Tips] Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: "30 Sales Call Tips: How to Start Conversations so Prospects Don't Hang Up On You Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A"
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: "The art of negotiation: Six must-have strategies | LBS - YouTube Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due 31-05-2026"
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]:
      - img "step-forward"
    - text: Test sample Learning path Magic 2026 Crowd Entertainment Confusion Magic, Vanishing Magic Mandatory Assigned by Admin Due N/A
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]:
      - img "step-forward"
    - text: learning path sample 2026 Mandatory Assigned by Admin Due 29-05-2026
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Introduction to Generative AI [Learning Path] Mandatory Assigned by Admin Due 29-05-2026
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Introduction to Generative AI [Learning Path] Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Test sample 2026 001 Software Development Lifecycle (SDLC) Management Agile/Scrum Methodologies Assigned by Admin
- tooltip "Mark as in progress"
```

# Test source

```ts
  7   |     this.assignedCoursesTitle =  page.getByRole('tab', { name: 'Assigned Courses' });
  8   |     this.aiReccomendationsTitle =  page.getByRole('tab', { name: 'AI Recommendations' });
  9   |     this.searchTextbox = page.getByPlaceholder('Search');
  10  |     this.skillCatgeoryDropdown = page.getByRole('combobox', { name: 'Skill category' });
  11  |     this.skillNameDropdown = page.getByRole('combobox', { name: 'Skill Name' });
  12  |     this.duaDateStart = page.getByPlaceholder('Due Date').and(page.locator('[date-range="start"]'));
  13  |     this.dueDateEnd = page.getByPlaceholder('Due Date').and(page.locator('[date-range="end"]'));
  14  |     this.priorityOptionalButton = page.getByText('Optional', { exact: true });
  15  |     this.priorityMandatoryButton = page.getByText('Mandatory', { exact: true });
  16  |     this.statusAssignedButton = page.getByText('Assigned', { exact: true });
  17  |     this.statusInProgressButton = page.getByText('In Progress', { exact: true });
  18  |     this.assignedByManagerSection = page.getByText('Assigned By Manager', { exact: true });
  19  |     this.assignedByAdminSection = page.getByText('Assigned By Admin', { exact: true });
  20  |     this.managerAssignedContentCards = page.locator(`//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']`);
  21  |     this.adminAssignedContentCards = page.locator(`//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']`);
  22  |     this.contentCard = page.locator('._listColumn_p5zy6_346 ._listTop_p5zy6_354 ._listHeadingWrap_p5zy6_516');
  23  |     this.assignedTooltip = page.getByRole('tooltip', { name: 'Mark as in progress' });
  24  |     this.inProgressTooltip = page.getByRole('tooltip', { name: 'Mark complete' });
  25  |     this.learningPathTooltip = page.getByRole('tooltip', { name: 'Click the card to open the learning path' });
  26  |     this.inprogressToast = page.getByText('Marked as in progress');
  27  |     this.markCompleteToast = page.locator('div').filter({ hasText: 'Marked as completed' }).first();
  28  |     this.confirmCompleteCancelButton = page.getByRole('button', { name: 'Cancel'});
  29  |     this.yesMarkCompleteButton = page.getByRole('button', { name: 'Yes, mark complete'});
  30  | 
  31  |   }
  32  | 
  33  |   async homepageTitleCheck() {
  34  |       await this.homepageTitle.waitFor({ state: 'visible' });
  35  |       await expect(this.assignedCoursesTitle).toBeVisible();
  36  |       await expect(this.aiReccomendationsTitle).toBeVisible();
  37  |   }
  38  | 
  39  |   async searchCourse(courseName) {
  40  |     await this.searchTextbox.waitFor({ state: 'visible' });
  41  |     await this.searchTextbox.fill(courseName);
  42  |   }
  43  | 
  44  |   async selectSkillCategory(category) {
  45  |     await this.skillCatgeoryDropdown.waitFor({ state: 'visible' });
  46  |     await this.skillCatgeoryDropdown.selectOption({ label: category });
  47  |   }
  48  | 
  49  |   async selectSkillName(skillName) {
  50  |     await this.skillNameDropdown.waitFor({ state: 'visible' });
  51  |     await this.skillNameDropdown.selectOption({ label: skillName });
  52  |   }
  53  | 
  54  |   async getContentName(){
  55  |     await this.contentCard.first().waitFor({ state: 'visible' });
  56  |     const names = await this.contentCard.allTextContents();
  57  |     return names.map(n => n.trim()).filter(Boolean);
  58  |   }
  59  | 
  60  |   async getManagerAssignedCardNames() {
  61  |     await this.assignedByManagerSection.waitFor({ state: 'visible' });
  62  |     const contentsElement = this.page.locator(`//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_p5zy6_516')]`);
  63  |     await contentsElement.first().waitFor({ state: 'visible' });
  64  |     console.log("********************* Manager Assigned Contents ************************");
  65  |     const managerAssignedContentNames = await contentsElement.allTextContents();
  66  |     return managerAssignedContentNames;
  67  |   }
  68  | 
  69  |     async getAdminAssignedCardNames() {
  70  |     await this.assignedByAdminSection.waitFor({ state: 'visible' });
  71  |     const contentsElement = this.page.locator(`//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_p5zy6_516')]`);
  72  |     await contentsElement.first().waitFor({ state: 'visible' });
  73  |     console.log("********************* Admin Assigned Contents ************************");
  74  |     const adminAssignedContentNames = await contentsElement.allTextContents();
  75  |     return adminAssignedContentNames;
  76  |   }
  77  | 
  78  |   async checkManagerAdminsections(){
  79  |     await this.assignedByManagerSection.waitFor({ state: 'visible' });
  80  |     await expect(this.adminAssignedContentCards).toBeVisible();
  81  |     await expect(this.assignedByAdminSection).toBeVisible();
  82  |     await expect(this.adminAssignedContentCards).toBeVisible();
  83  |   }
  84  | 
  85  | 
  86  |   async specificContentDisplayCheck(contentName) {
  87  |     const btn = this.page.locator(`//span[text()='${contentName}']`);
  88  |     await btn.scrollIntoViewIfNeeded();
  89  |     await btn.first().highlight()
  90  |     await btn.waitFor({ state: 'visible' });
  91  |   }
  92  | 
  93  |   async specificContentProgressButton(contentName) {
  94  |     const btn = this.page.locator(`//span[text()='${contentName}']/../../../div/div/div/div/button`);
  95  |     await btn.scrollIntoViewIfNeeded();
  96  |     await btn.waitFor({ state: 'visible' });
  97  |     return btn;
  98  |   }
  99  | 
  100 |   async assignedTooltipMessageCheck(){
  101 |     const toolTipMessage = await this.assignedTooltip;
  102 |     await expect(toolTipMessage).toBeVisible();
  103 |   }
  104 | 
  105 |   async inProgressTooltipMessageCheck(){
  106 |     const toolTipMessage = await this.inProgressTooltip;
> 107 |     await expect(toolTipMessage).toBeVisible();
      |                                  ^ Error: expect(locator).toBeVisible() failed
  108 |   }
  109 | 
  110 |   async learningPathTooltipMessageCheck(){
  111 |     const toolTipMessage = await this.learningPathTooltip;
  112 |     await expect(toolTipMessage).toBeVisible();
  113 |   }
  114 | 
  115 |   async inProgressToastMessageCheck(){
  116 |     const toast = await this.inProgressToast;
  117 |     await toast.waitFor({ state: 'visible', timeout: 8000 });
  118 |   }
  119 | 
  120 |   async markCompleteToastMessageCheck(){
  121 |     const toast = await this.markCompleteToast;
  122 |     await toast.waitFor({ state: 'visible', timeout: 8000 });
  123 |   }
  124 | 
  125 |   async confirmCompletionWarningMessageCheck(contentName)
  126 |   {
  127 |     await expect(this.page.getByText('Confirm completion')).toBeVisible();
  128 |     await expect(this.page.getByLabel('Confirm completion').getByText(`${contentName}`)).toBeVisible();
  129 |   }
  130 | 
  131 | 
  132 | }
```