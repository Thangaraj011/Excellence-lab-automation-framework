# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixture_based_tests/custom-fixture-sample-test2.spec.js >> Homepage Individual Content status update validation with custom fixture sample >> Individual Content update status to Inprogress with custom fixture sample
- Location: tests/specs/fixture_based_tests/custom-fixture-sample-test2.spec.js:5:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('tooltip', { name: 'Mark as in progress' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('tooltip', { name: 'Mark as in progress' })

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
    - text: 66 Total Assigned 41 Assigned 13 In Progress 12 Completed Learning Trend
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
    - text: Assigned By Manager 14 Content Sort by
    - combobox "Sort courses"
    - img "down"
    - button "Collapse section" [expanded]:
      - img "up"
    - text: Due 30-06-2026
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]:
      - img "step-forward"
    - text: CSRE | Skill Badges & Trainings Mandatory Assigned by Manager Due 30-06-2026
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]:
      - img "step-forward"
    - text: Data Engineer | Skill Badges++ Data Science, Reporting, User-defined, Cloud Engineering Core, Continuous Integration & Continuous Deployment (CI/CD), AI Fluency, Data Engineering, Cloud Platforms Cloud ML (GCP Focus), Looker, AI, Vertex AI, GCP, Automation & Infrastructure as Code (IaC), Cloud Architecture & Solution Design, Continuous Integration & Continuous Deployment (CI/CD), AI Fluency, Google Cloud, Cloud Storage, Cloud BigQuery, Cloud Dataproc, Cloud Dataflow, Cloud Infrastructure Management, GCP, cloud migration Mandatory Assigned by Manager Due 30-06-2026
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]:
      - img "step-forward"
    - text: Role Based Learning sample 2211 Programming Proficiency, Cloud Engineering Core, User-defined, Code Review & Quality Assurance, Software Development Lifecycle (SDLC) Management, Consulting & Business Development Initiatives, GenAI, MLOps, Google Workspace Tools, Reporting, Data Engineering, Data Science, Cloud Resilience & Security, Cloud Platforms, Market Intelligence, Sales Cycle, Sales Performance Steering, Continuous Integration & Continuous Deployment (CI/CD), System Design & Architecture, Revenue & Lifecycle Management, Treasury, Accounts Payables, Tax & Compliance, Corporate Governance, Tech Governance, Commercial Governance and FinOps, Financial Strategic Enablement, Workforce Planning, Talent Acquisition, Employee Experience & Lifecycle Management, HR Software, Strategic Business Partnering & Governance, Learning Enablement, Crowd Entertainment, AI Fluency, Magician Beginner Software Development, Automation & Infrastructure as Code (IaC), Next.js, React.js, Javascript, GCP, Google Cloud Run Serverless Workshop, Develop Serverless Applications on Cloud Run, Develop Serverless Apps with Firebase, terraform, Cloud Networking, Cloud Build, Platform Engineering, networking, cloud migration, Postman API, CSS, Tailwind CSS, Cloud Spanner, Cloud Datastream, cloud dataform, dbt, airbyte, ELT Tools, Biguery, SQL, tableau, Genrative AI, Langgraph, Agentic frameworks, Code Review Methodologies and Test-Driven Development (TDD) Practices, Agile/Scrum Methodologies, Sales Execution & Deal Closure, Single-Agent Prototype, Google Cloud, MLOps (OS), MCP Server, Inventory Forecasting System, Google ADK, Windows, MySQL DBA, MSSQL, Azure, Postgres, SQL SERVER, mysql, Druva Phoenix, Amazon Aurora, Observability & AIOps, Team Building, Presentation Skills, Coaching, Golang, Automated Testing Frameworks, Commercial Account Management, Google Workspace Tools, Looker, Cloud BigQuery, Cloud Functions, Cloud Composer (Airflow), Data Fusion, ML Algorithms (Core), AI, Vertex AI, Power BI, Cloud Infrastructure Management, Disaster Recovery & Business Continuity, GCP, Understanding Cloud and Searce' Value Proposition, Segment Understanding, Brand Tracking & Competitor Analysis, ICP (Ideal Customer Profile), Persona Identification and Mapping, Persuasive Outreach Copywriting, Prospecting Tool Proficiency, Consultative Questioning, Productivity Analysis, Continuous Integration & Continuous Deployment (CI/CD), Cloud-Agnostic System Design, Automation & IaC, Effective Communication & Active Listening, Order-to-Cash (O2C), Dispute Resolution with Client & OEMs, Working Capital Optimization, Revenue Leakage Identification, Tracking & Documentation, Contractual Compliance, Treasury, Supplier Alignment, Tax Operations, Transfer Pricing (TP) Mastery, Tax Advocacy & Litigation, Regulatory Intelligence, Statutory Filings & Company Law, Policy & Ethics Framework, Data Handling, Console, Programming, Revenue Forecasting, Sales Dashboarding & Reporting, Sales Incentive Management (SIP), Deal Desk & Proposal Auditing, Sales Process Compliance, Strategy Support & Knowledge Management, Account Planning Assurance, Reviews, Workforce Planning, JD Creation, Market Research, Headhunting, Candidate Screening, Interview Coordination & Stakeholder Management, Candidate Negotiation, Pre-boarding Engagement, Onboarding, Policies & SOPs, Offboarding, AppsScript, Culture & Community (HAPPIER), Grievance & Query Resolution, People Connects & Pulse Sensing, Organizational Design (OD), HR Analytics, Policy Architecture, Succession Planning, Performance Tracking, Organizational Gap Mapping, Role-wise Learning, Certification Tracking & Reporting, Leadership Advisory, Voucher & Resource Management, Selenium Grid, Rest Assured, Vanishing Magic, Shape Shifting Magic, Confusion Magic, Test Category Delete, test tategory Delete, Test, Pupeteer, Ant Design, regression testing, Ground Magician, Apigee, Selenium Interface, Puppeteer, Cloud Architecture & Solution Design, Release Management, Devops Mandatory Assigned by Manager Due 30-06-2026
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]
    - text: Learning path collaboration 328748273 Crowd Entertainment Vanishing Magic Mandatory Assigned by Manager Due 30-06-2026
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]
    - text: AI Engineering | Technical Expert Badges GenAI, Data Science, Cloud Engineering Core Secure API Service, AI, Automation & IaC Mandatory Assigned by Manager Due 30-05-2026
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]
    - text: Thangaraj Testing sample 1 GenAI, Data Science, Cloud Engineering Core Secure API Service, AI, Automation & IaC Mandatory Assigned by Manager Due 28-05-2026
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]
    - text: Learning path new case Software Development Lifecycle (SDLC) Management Agile/Scrum Methodologies Mandatory Assigned by Manager Due 28-05-2026
    - status "Individual Content"
    - button "In progress, mark complete"
    - text: Major comedy show 2026 Mandatory Assigned by Manager Due 25-06-2026
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Partners use Gemini Enterpirse AI Fluency AI Fluency Mandatory Assigned by Manager Due 31-05-2026
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: "Software Architecture: REST API Design - The Complete Guide | Udemy System Design & Architecture Microservices Architecture Design Mandatory Assigned by Manager Due 30-06-2026"
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: "Next.js App Router: Routing, Data Fetching, Caching Programming Proficiency, Cloud Engineering Core, User-defined, Code Review & Quality Assurance, Software Development Lifecycle (SDLC) Management, Consulting & Business Development Initiatives, GenAI, MLOps, Google Workspace Tools, Reporting, Data Engineering, Data Science, Cloud Resilience & Security, Cloud Platforms, Market Intelligence, Sales Cycle, Sales Performance Steering, Continuous Integration & Continuous Deployment (CI/CD), System Design & Architecture, Revenue & Lifecycle Management, Treasury, Accounts Payables, Tax & Compliance, Corporate Governance, Tech Governance, Commercial Governance and FinOps, Financial Strategic Enablement, Workforce Planning, Talent Acquisition, Employee Experience & Lifecycle Management, HR Software, Strategic Business Partnering & Governance, Learning Enablement, Crowd Entertainment, AI Fluency, Magician Beginner Software Development, Automation & Infrastructure as Code (IaC), Next.js, React.js, Javascript, GCP, Google Cloud Run Serverless Workshop, Develop Serverless Applications on Cloud Run, Develop Serverless Apps with Firebase, terraform, Cloud Networking, Cloud Build, Platform Engineering, networking, cloud migration, Postman API, CSS, Tailwind CSS, Cloud Spanner, Cloud Datastream, cloud dataform, dbt, airbyte, ELT Tools, Biguery, SQL, tableau, Genrative AI, Langgraph, Agentic frameworks, Code Review Methodologies and Test-Driven Development (TDD) Practices, Agile/Scrum Methodologies, Sales Execution & Deal Closure, Single-Agent Prototype, Google Cloud, MLOps (OS), MCP Server, Inventory Forecasting System, Google ADK, Windows, MySQL DBA, MSSQL, Azure, Postgres, SQL SERVER, mysql, Druva Phoenix, Amazon Aurora, Observability & AIOps, Team Building, Presentation Skills, Coaching, Golang, Automated Testing Frameworks, Commercial Account Management, Google Workspace Tools, Looker, Cloud BigQuery, Cloud Functions, Cloud Composer (Airflow), Data Fusion, ML Algorithms (Core), AI, Vertex AI, Power BI, Cloud Infrastructure Management, Disaster Recovery & Business Continuity, GCP, Understanding Cloud and Searce' Value Proposition, Segment Understanding, Brand Tracking & Competitor Analysis, ICP (Ideal Customer Profile), Persona Identification and Mapping, Persuasive Outreach Copywriting, Prospecting Tool Proficiency, Consultative Questioning, Productivity Analysis, Continuous Integration & Continuous Deployment (CI/CD), Cloud-Agnostic System Design, Automation & IaC, Effective Communication & Active Listening, Order-to-Cash (O2C), Dispute Resolution with Client & OEMs, Working Capital Optimization, Revenue Leakage Identification, Tracking & Documentation, Contractual Compliance, Treasury, Supplier Alignment, Tax Operations, Transfer Pricing (TP) Mastery, Tax Advocacy & Litigation, Regulatory Intelligence, Statutory Filings & Company Law, Policy & Ethics Framework, Data Handling, Console, Programming, Revenue Forecasting, Sales Dashboarding & Reporting, Sales Incentive Management (SIP), Deal Desk & Proposal Auditing, Sales Process Compliance, Strategy Support & Knowledge Management, Account Planning Assurance, Reviews, Workforce Planning, JD Creation, Market Research, Headhunting, Candidate Screening, Interview Coordination & Stakeholder Management, Candidate Negotiation, Pre-boarding Engagement, Onboarding, Policies & SOPs, Offboarding, AppsScript, Culture & Community (HAPPIER), Grievance & Query Resolution, People Connects & Pulse Sensing, Organizational Design (OD), HR Analytics, Policy Architecture, Succession Planning, Performance Tracking, Organizational Gap Mapping, Role-wise Learning, Certification Tracking & Reporting, Leadership Advisory, Voucher & Resource Management, Selenium Grid, Rest Assured, Vanishing Magic, Shape Shifting Magic, Confusion Magic, Test Category Delete, test tategory Delete, Test, Pupeteer, Ant Design, regression testing, Ground Magician, Apigee, Selenium Interface, Puppeteer Mandatory Assigned by Manager Due 30-06-2026"
    - status "Individual Content"
    - button "In progress, mark complete"
    - text: Simon Sinek's Top 3 Leadership Traits Leadership & Mentoring Leadership & Mentoring Mandatory Assigned by Manager Due 28-05-2026
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Master Control Override Horizon Zero Dawn Crowd Entertainment, System Design & Architecture, Cloud Engineering Core, Software Development Lifecycle (SDLC) Management, Code Review & Quality Assurance, Programming Proficiency Vanishing Magic, Microservices Architecture Design, High-Level Design (HLD) & Low-Level Design (LLD), Cloud Architecture & Solution Design, Architecture Best Practices and Frameworks, Automation & IaC, Agile/Scrum Methodologies, Code Review Methodologies and Test-Driven Development (TDD) Practices, Software Development Optional Assigned by Admin and Manager Due 23-05-2026
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]:
      - img "step-forward"
    - text: Test sample learning 28723 Optional Assigned by Manager
    - img "user"
    - text: Assigned By Admin 40 Content Sort by
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
    - button "In progress, mark complete"
    - text: "Optimize your Email Deliverability: Content | Heinz Marketing Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A"
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: "Customer Profiles: How to Build and Use Them - Qualtrics Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due N/A"
    - status "Individual Content"
    - button "In progress, mark complete"
    - text: Communicating and Working with Stakeholders | Google Project Management Certificate - YouTube Stakeholder & Client Partnership Stakeholder Management, Effective Communication Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "In progress, mark complete"
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
    - text: "The art of negotiation: Six must-have strategies | LBS - YouTube Consulting & Business Development Initiatives Sales Execution & Deal Closure Mandatory Assigned by Admin Due 25-06-2026"
    - status "Assigned learning path": Learning Path
    - button "Click the card to open the learning path" [disabled]
    - text: Test sample Learning path Magic 2026 Crowd Entertainment Confusion Magic, Vanishing Magic Mandatory Assigned by Admin Due 29-05-2026
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Introduction to Generative AI [Learning Path] Mandatory Assigned by Admin Due 29-05-2026
    - status "Individual Content"
    - button "Assigned, mark as in progress":
      - img "step-forward"
    - text: Introduction to Generative AI [Learning Path] Mandatory Assigned by Admin Due N/A
    - status "Individual Content"
    - button "In progress, mark complete"
    - text: Test sample 2026 001 Software Development Lifecycle (SDLC) Management Agile/Scrum Methodologies Assigned by Admin
- tooltip "Mark complete"
```

# Test source

```ts
  10  |     });
  11  |     this.aiRecommendationsTab = page.getByRole("tab", {
  12  |       name: "AI Recommendations",
  13  |     });
  14  | 
  15  |     this.searchTextbox = page.getByPlaceholder("Search");
  16  |     this.skillCatgeoryDropdown = page.locator(".ant-select-content", {
  17  |       hasText: "Skill category",
  18  |     });
  19  |     this.skillCatgeoryDropdown2 = page.locator(".ant-select-content", {
  20  |       hasText: "Skill Name",
  21  |     });
  22  |     this.skillNameDropdown = page.locator(
  23  |       `//div[text()='Skill Name']/following-sibling::input`,
  24  |     );
  25  |     this.dueDateInputs = page.locator(".ant-picker-input input");
  26  |     this.dueDateStart = page
  27  |       .getByPlaceholder("Due Date")
  28  |       .and(page.locator('[date-range="start"]'));
  29  |     this.dueDateEnd = page
  30  |       .getByPlaceholder("Due Date")
  31  |       .and(page.locator('[date-range="end"]'));
  32  | 
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
  93  | 
  94  |     this.profileName = page.locator(`//span[contains(@class,'_userName_')]`);
  95  | 
  96  |   }
  97  | 
  98  |   async verifyHomepageLoaded() {
  99  |     await this.homepageTitle.waitFor({ state: "visible" });
  100 |     await expect(this.assignedCoursesTab).toBeVisible();
  101 |     await expect(this.aiRecommendationsTab).toBeVisible();
  102 |   }
  103 | 
  104 |   async verifyManagerAndAdminSections() {
  105 |     await expect(this.assignedByManagerSection).toBeVisible();
  106 |     await expect(this.assignedByAdminSection).toBeVisible();
  107 |   }
  108 | 
  109 |   async verifyAssignedTooltip() {
> 110 |     await expect(this.assignedTooltip).toBeVisible();
      |                                        ^ Error: expect(locator).toBeVisible() failed
  111 |   }
  112 |   async verifyInProgressTooltip() {
  113 |     await expect(this.inProgressTooltip).toBeVisible();
  114 |   }
  115 |   async verifyLearningPathTooltip() {
  116 |     await expect(this.learningPathTooltip).toBeVisible();
  117 |   }
  118 | 
  119 |   async verifyInProgressToast() {
  120 |     await this.inProgressToast.waitFor({ state: "visible", timeout: 8000 });
  121 |   }
  122 | 
  123 |   async verifyMarkCompleteToast() {
  124 |     await this.markCompleteToast.waitFor({ state: "visible", timeout: 8000 });
  125 |   }
  126 | 
  127 |   async verifyConfirmCompletionDialog(contentName) {
  128 |     await expect(this.page.getByText("Confirm completion").last()).toBeVisible();
  129 |     await expect(
  130 |       this.page.getByLabel("Confirm completion").getByText(contentName),
  131 |     ).toBeVisible();
  132 |   }
  133 | 
  134 |   async verifyContentVisible(contentName) {
  135 |     const content = this.page.getByText(contentName);
  136 |     await content.scrollIntoViewIfNeeded();
  137 |     await expect(content).toBeVisible();
  138 |   }
  139 | 
  140 |   async verifyLearningPathDetailsScreen(learningPathName) {
  141 |     await expect(
  142 |       this.page.getByRole("heading", { name: `${learningPathName}` }),
  143 |     ).toBeVisible();
  144 |     await expect(this.page.locator(".ant-progress-rail")).toBeVisible();
  145 |   }
  146 | 
  147 |   async verifyFiltersOnLearningPathDetailsScreen() {
  148 |     await expect(
  149 |       this.page.getByRole("heading", { name: "Learning Path Content" }),
  150 |     ).toBeVisible();
  151 |     await expect(this.page.getByText("Quick Filters")).toBeVisible();
  152 |     await expect(this.page.getByText("Priority")).toBeVisible();
  153 |     await expect(
  154 |       this.page.locator("span").filter({ hasText: "Optional" }).first(),
  155 |     ).toBeVisible();
  156 |     await expect(
  157 |       this.page.getByLabel("Filter by priority").getByText("Mandatory"),
  158 |     ).toBeVisible();
  159 |     await expect(this.page.getByText("Status")).toBeVisible();
  160 |     await expect(
  161 |       this.page.locator("span").filter({ hasText: "Assigned" }).nth(1),
  162 |     ).toBeVisible();
  163 |     await expect(
  164 |       this.page.locator("span").filter({ hasText: "In Progress" }).first(),
  165 |     ).toBeVisible();
  166 |     await expect(
  167 |       this.page.locator("span").filter({ hasText: "Completed" }).first(),
  168 |     ).toBeVisible();
  169 |   }
  170 | 
  171 |   async openIndividualContent(contentName) {
  172 |     await this.page.getByText(contentName).click();
  173 |   }
  174 | 
  175 |   async openLearningPath(learningPathName) {
  176 |     const content = this.page.getByText(learningPathName, { exact: true });
  177 |     await content.scrollIntoViewIfNeeded();
  178 |     await expect(content).toBeVisible();
  179 |     await this.page.getByText(learningPathName).click();
  180 |   }
  181 | 
  182 |   async verifySearchContentVisible(courseName, contentName) {
  183 |     await this.searchTextbox.waitFor({ state: "visible" });
  184 |     await this.searchTextbox.fill(courseName);
  185 |     await this.page.waitForLoadState("domcontentloaded");
  186 |     await this.verifyContentVisible(contentName);
  187 |   }
  188 | 
  189 |   async verifyOnlySelectedSkillCategoryContentsVisible(skillCategoryValue) {
  190 |     const pills = this.page.locator("._listPillSkillCategory_p5zy6_654");
  191 |     const count = await pills.count();
  192 |     for (let i = 0; i < count; i++) {
  193 |       const pill = pills.nth(i);
  194 |       const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
  195 |       console.log(`Pill[${i}] text = "${text}"`);
  196 |       const contentName = (
  197 |         await pill
  198 |           .locator(
  199 |             "xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]",
  200 |           )
  201 |           .textContent()
  202 |       )
  203 |         ?.replace(/\s+/g, " ")
  204 |         .trim();
  205 |       if (!text.includes(skillCategoryValue)) {
  206 |         throw new Error(
  207 |           `${contentName} does not have ${skillCategoryValue} as skill category`,
  208 |         );
  209 |       }
  210 |       console.log(
```