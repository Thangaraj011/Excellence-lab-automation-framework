# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage-Individual-content-withfixtures.spec.js >> Homepage Individual Content status update validation with custom Fixtures >> Individual Content update status to Complete with custom fixtures
- Location: tests/specs/homepage-Individual-content-withfixtures.spec.js:40:8

# Error details

```
Error: Failed to load test data from "/Users/thangaraj.r/Documents/playwright-pom-framework/tests/data/Individual Content update status to Complete with custom fixtures.json": ENOENT: no such file or directory, open '/Users/thangaraj.r/Documents/playwright-pom-framework/tests/data/Individual Content update status to Complete with custom fixtures.json'
```

# Test source

```ts
  1   | import { fileURLToPath } from 'url';
  2   | import path from'path';
  3   | import fs from 'fs';
  4   | import crypto from 'crypto';
  5   | import { createRequire } from 'module';
  6   | 
  7   | const __filename = fileURLToPath(import.meta.url);
  8   | const __dirname  = path.dirname(__filename);
  9   | 
  10  | const require = createRequire(import.meta.url);
  11  | const users   = require('../data/users.json');
  12  | 
  13  | const SECRET = "j4dFtlJH68pdc9A4";
  14  | const FRONTEND_BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
  15  | 
  16  | export class GenericUtils {
  17  |     constructor(context, testInfo) {
  18  |         this.context = context;
  19  |         this.testInfo = testInfo;
  20  |         this.jsonObject = null;
  21  |         this.map = null;
  22  |     }
  23  | 
  24  |     async base64Url(buf) {
  25  |         return Buffer.from(buf)
  26  |             .toString("base64")
  27  |             .replace(/\+/g, "-")
  28  |             .replace(/\//g, "_")
  29  |             .replace(/=/g, "");
  30  |     }
  31  | 
  32  |     async generateJWT(userRole) {
  33  |         const role = userRole;
  34  |         if (!role) throw new Error('USER_ROLE is not defined in .env');
  35  |         const user = users[role];
  36  |         if (!user) {
  37  |             throw new Error(`Invalid user role provided: ${role}. Please check users.json keys.`);
  38  |         }
  39  |         const payload = { ...user, exp: Math.floor(Date.now() / 1000) + 86400 * 7 };
  40  |         const header  = await this.base64Url(Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })));
  41  |         const body    = await this.base64Url(Buffer.from(JSON.stringify(payload)));
  42  |         const signingInput = `${header}.${body}`;
  43  |     
  44  |         const sig = crypto
  45  |             .createHmac("sha256", SECRET)
  46  |             .update(signingInput)
  47  |             .digest();
  48  | 
  49  |         return `${signingInput}.${await this.base64Url(sig)}`;
  50  |     }
  51  | 
  52  |     async setupAuthCookie(token) {
  53  |         const context = this.context;
  54  |         if (!context) {
  55  |             throw new Error('Browser context is not initialized. Call init() before setupAuthCookie().');
  56  |         }
  57  | 
  58  |         await context.addCookies([
  59  |         {
  60  |             name:     "token",
  61  |             value:    token,
  62  |             domain:   "learning-buddy-dev-backend-service-346514237201.us-central1.run.app",
  63  |             path:     "/",
  64  |             httpOnly: false,
  65  |             secure:   true,
  66  |             sameSite: "None",
  67  |             expires:  Math.floor(Date.now() / 1000) + 604800, // 7 days
  68  |         },
  69  |         ]);
  70  |     }
  71  | 
  72  |     async setJsonData() {
  73  |         const fileName = `${this.testInfo.title}.json`;
  74  |         const filePath = path.resolve(__dirname, "../data", fileName);
  75  |         console.log(`filePath: ${filePath}`);
  76  |         try {
  77  |             const raw = fs.readFileSync(filePath, "utf-8");
  78  |             this.jsonObject = JSON.parse(raw);
  79  |             return this.jsonObject;
  80  |         } catch (err) {
> 81  |             throw new Error(`Failed to load test data from "${filePath}": ${err.message}`);
      |                   ^ Error: Failed to load test data from "/Users/thangaraj.r/Documents/playwright-pom-framework/tests/data/Individual Content update status to Complete with custom fixtures.json": ENOENT: no such file or directory, open '/Users/thangaraj.r/Documents/playwright-pom-framework/tests/data/Individual Content update status to Complete with custom fixtures.json'
  82  |         }
  83  |     }
  84  | 
  85  |     async jsonToMap() {
  86  |     if (!this.jsonObject) {
  87  |         await this.setJsonData();
  88  |     }
  89  |     this.map = new Map();
  90  |     const convert = (obj, currentMap) => {
  91  |         for (const [key, value] of Object.entries(obj)) {
  92  |             if (value !== null && typeof value === "object" && !Array.isArray(value)) {
  93  |                 // 1. Create a nested sub-map for structural integrity
  94  |                 const subMap = new Map();
  95  |                 currentMap.set(key, subMap);
  96  |                 if (currentMap !== this.map) {
  97  |                     this.map.set(key, subMap);
  98  |                 }
  99  |                 convert(value, subMap);
  100 |             } else {
  101 |                 currentMap.set(key, value);
  102 |                 this.map.set(key, value);
  103 |             }
  104 |         }
  105 |     };
  106 | 
  107 |     convert(this.jsonObject, this.map);
  108 |     return this.map;
  109 | }
  110 | 
  111 |     async getValueByKey(key) {
  112 |         if (!this.jsonObject) {
  113 |             await this.setJsonData();
  114 |         }
  115 |         const search = (obj) => {
  116 |             if (obj === null || typeof obj !== "object") return undefined;
  117 |             if (Object.prototype.hasOwnProperty.call(obj, key)) {
  118 |                 return obj[key];
  119 |              }
  120 |         for (const value of Object.values(obj)) {
  121 |             if (value !== null && typeof value === "object") {
  122 |                 const found = search(value);
  123 |                 if (found !== undefined) return found;
  124 |             }
  125 |         }
  126 |         return undefined;
  127 |         };
  128 |     return search(this.jsonObject);
  129 |     }
  130 | 
  131 | 
  132 | 
  133 | 
  134 | }
```