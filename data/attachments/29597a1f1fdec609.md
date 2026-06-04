# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: excellencelabtest1.spec.js >> Authentication Tests >> Employee Homepage validation
- Location: tests/specs/excellencelabtest1.spec.js:6:7

# Error details

```
ReferenceError: getTestTitle is not defined
```

# Page snapshot

```yaml
- generic [ref=e2]: "{\"message\":\"Learning Buddy API\",\"version\":\"v1\",\"status\":\"running\",\"timestamp\":\"2026-06-03T11:51:43.689Z\",\"endpoints\":{\"health\":\"/health\",\"metrics\":\"/metrics\",\"auth\":\"/auth\",\"users\":\"/api/v1/users\",\"learningHistory\":\"/api/v1/learning-history\",\"learningResources\":\"/api/v1/learning-resources\",\"recommendedCourses\":\"/api/v1/recommended-courses\",\"jobRoles\":\"/api/v1/job-roles\",\"businessUnits\":\"/api/v1/business-units\",\"jobCategories\":\"/api/v1/job-categories\",\"skills\":\"/api/v1/skills\",\"skillCategories\":\"/api/v1/skill-categories\",\"contentCatalogue\":\"/api/v1/content-catalogue\",\"contentCatalogueAssignments\":\"/api/v1/content-catalogue/assignments\",\"jobCategorySkills\":\"/api/v1/job-category-skills\",\"jobCategoryLearningPlans\":\"/api/v1/job-category-learning-plans\",\"jobCategoryLearningPaths\":\"/api/v1/job-category-learning-paths\",\"bulkAssignment\":\"/api/v1/bulk-assignment\",\"assignmentHistory\":\"/api/v1/assignment-history\",\"courses\":\"/api/v1/courses\",\"team\":\"/api/v1/team\",\"specificAssignments\":\"/api/v1/specific-assignments\",\"learningPaths\":\"/api/v1/learning-paths\",\"exportExcel\":\"/api/v1/export-excel\",\"contentMetadata\":\"/api/v1/content-metadata\",\"aiRecommendations\":\"/api/v1/ai-recommendations\",\"feedback\":\"/api/v1/feedback\",\"profile\":\"/api/v1/profile\",\"dataSync\":\"/api/v1/data-sync\",\"dataSyncAdmin\":\"/api/v1/data-sync/admin\",\"assignmentReminders\":\"/api/v1/assignment-reminders\",\"adminDirectoryPolicy\":\"/api/v1/admin/directory-policy\",\"adminAuditLogs\":\"/api/v1/admin/audit-logs\",\"adminAuditLogsExport\":\"/api/v1/admin/audit-logs/export\",\"adminAnalytics\":\"/api/v1/admin/analytics/daily-active-users\"}}"
```

# Test source

```ts
  1  | import users from '../data/users.json';
  2  | import crypto from 'crypto';
  3  | const fs = require("fs");
  4  | const path = require("path");
  5  | 
  6  | const SECRET = "j4dFtlJH68pdc9A4";
  7  | const FRONTEND_BASE_URL = process.env.BASE_FE_URL || 'http://localhost:3000';
  8  | 
  9  | export class GenericUtils {
  10 |     constructor(context, testInfo) {
  11 |         this.context = context;
  12 |         this.testInfo = testInfo;
  13 |     }
  14 | 
  15 |     async base64Url(buf) {
  16 |         return Buffer.from(buf)
  17 |             .toString("base64")
  18 |             .replace(/\+/g, "-")
  19 |             .replace(/\//g, "_")
  20 |             .replace(/=/g, "");
  21 |     }
  22 | 
  23 |     async generateJWT(userRole) {
  24 |         const role = userRole;
  25 |         if (!role) throw new Error('USER_ROLE is not defined in .env');
  26 |         const user = users[role];
  27 |         if (!user) {
  28 |             throw new Error(`Invalid user role provided: ${role}. Please check users.json keys.`);
  29 |         }
  30 |         const payload = { ...user, exp: Math.floor(Date.now() / 1000) + 86400 * 7 };
  31 |         const header  = await this.base64Url(Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })));
  32 |         const body    = await this.base64Url(Buffer.from(JSON.stringify(payload)));
  33 |         const signingInput = `${header}.${body}`;
  34 |     
  35 |         const sig = crypto
  36 |             .createHmac("sha256", SECRET)
  37 |             .update(signingInput)
  38 |             .digest();
  39 | 
  40 |         return `${signingInput}.${await this.base64Url(sig)}`;
  41 |     }
  42 | 
  43 |     async setupAuthCookie(token) {
  44 |         const context = this.context;
  45 |         if (!context) {
  46 |             throw new Error('Browser context is not initialized. Call init() before setupAuthCookie().');
  47 |         }
  48 | 
  49 |         await context.addCookies([
  50 |         {
  51 |             name:     "token",
  52 |             value:    token,
  53 |             domain:   "learning-buddy-dev-backend-service-346514237201.us-central1.run.app",
  54 |             path:     "/",
  55 |             httpOnly: false,
  56 |             secure:   true,
  57 |             sameSite: "None",
  58 |             expires:  Math.floor(Date.now() / 1000) + 604800, // 7 days
  59 |         },
  60 |         ]);
  61 |     }
  62 | 
  63 |     async loadTestData() {
> 64 |         const fileName = `${getTestTitle(this.testInfo)}.json`;
     |                          ^ ReferenceError: getTestTitle is not defined
  65 |         const filePath = path.resolve(__dirname, "../data", fileName);
  66 |         console.log(`filePath: ${filePath}`);
  67 |         try {
  68 |             const raw = fs.readFileSync(filePath, "utf-8");
  69 |             const data = JSON.parse(raw);
  70 |             return data;
  71 |         } catch (err) {
  72 |             throw new Error(`Failed to load test data from "${filePath}": ${err.message}`);
  73 |         }
  74 |     }
  75 | 
  76 |     async getSection(section, fileName) {
  77 |     const data = await this.loadTestData(fileName);
  78 |     if (!data[section]) {
  79 |         throw new Error(`Section "${section}" not found in ${fileName}`);
  80 |     }
  81 |     return data[section];
  82 | }
  83 | 
  84 |     async loadDataForSpec() {
  85 |     const specBase = path.basename(this.testInfo.file);          
  86 |     const jsonName = specBase.replace(/\.spec\.(js|ts)$/, ".json"); 
  87 |     return await this.loadTestData(jsonName);
  88 | }
  89 | 
  90 | 
  91 | 
  92 | 
  93 | }
```