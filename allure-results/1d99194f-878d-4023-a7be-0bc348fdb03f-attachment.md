# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage-Individual-content-withfixtures.spec.js >> Homepage Individual Content status update validation with custom Fixtures >> Individual Content update status to Complete with custom fixtures
- Location: tests/specs/homepage-Individual-content-withfixtures.spec.js:40:8

# Error details

```
ReferenceError: __dirname is not defined
```

# Test source

```ts
  1   | import { createRequire } from 'module';
  2   | const require = createRequire(import.meta.url);
  3   | const users   = require('../data/users.json');
  4   | import crypto from 'crypto';
  5   | const fs = require("fs");
  6   | const path = require("path");
  7   | 
  8   | const SECRET = "j4dFtlJH68pdc9A4";
  9   | const FRONTEND_BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
  10  | 
  11  | export class GenericUtils {
  12  |     constructor(context, testInfo) {
  13  |         this.context = context;
  14  |         this.testInfo = testInfo;
  15  |         this.jsonObject = null;
  16  |         this.map = null;
  17  |     }
  18  | 
  19  |     async base64Url(buf) {
  20  |         return Buffer.from(buf)
  21  |             .toString("base64")
  22  |             .replace(/\+/g, "-")
  23  |             .replace(/\//g, "_")
  24  |             .replace(/=/g, "");
  25  |     }
  26  | 
  27  |     async generateJWT(userRole) {
  28  |         const role = userRole;
  29  |         if (!role) throw new Error('USER_ROLE is not defined in .env');
  30  |         const user = users[role];
  31  |         if (!user) {
  32  |             throw new Error(`Invalid user role provided: ${role}. Please check users.json keys.`);
  33  |         }
  34  |         const payload = { ...user, exp: Math.floor(Date.now() / 1000) + 86400 * 7 };
  35  |         const header  = await this.base64Url(Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })));
  36  |         const body    = await this.base64Url(Buffer.from(JSON.stringify(payload)));
  37  |         const signingInput = `${header}.${body}`;
  38  |     
  39  |         const sig = crypto
  40  |             .createHmac("sha256", SECRET)
  41  |             .update(signingInput)
  42  |             .digest();
  43  | 
  44  |         return `${signingInput}.${await this.base64Url(sig)}`;
  45  |     }
  46  | 
  47  |     async setupAuthCookie(token) {
  48  |         const context = this.context;
  49  |         if (!context) {
  50  |             throw new Error('Browser context is not initialized. Call init() before setupAuthCookie().');
  51  |         }
  52  | 
  53  |         await context.addCookies([
  54  |         {
  55  |             name:     "token",
  56  |             value:    token,
  57  |             domain:   "learning-buddy-dev-backend-service-346514237201.us-central1.run.app",
  58  |             path:     "/",
  59  |             httpOnly: false,
  60  |             secure:   true,
  61  |             sameSite: "None",
  62  |             expires:  Math.floor(Date.now() / 1000) + 604800, // 7 days
  63  |         },
  64  |         ]);
  65  |     }
  66  | 
  67  |     async setJsonData() {
  68  |         const fileName = `${this.testInfo.title}.json`;
> 69  |         const filePath = path.resolve(__dirname, "../data", fileName);
      |                                       ^ ReferenceError: __dirname is not defined
  70  |         console.log(`filePath: ${filePath}`);
  71  |         try {
  72  |             const raw = fs.readFileSync(filePath, "utf-8");
  73  |             this.jsonObject = JSON.parse(raw);
  74  |             return this.jsonObject;
  75  |         } catch (err) {
  76  |             throw new Error(`Failed to load test data from "${filePath}": ${err.message}`);
  77  |         }
  78  |     }
  79  | 
  80  |     async jsonToMap() {
  81  |     if (!this.jsonObject) {
  82  |         await this.setJsonData();
  83  |     }
  84  |     this.map = new Map();
  85  |     const convert = (obj, currentMap) => {
  86  |         for (const [key, value] of Object.entries(obj)) {
  87  |             if (value !== null && typeof value === "object" && !Array.isArray(value)) {
  88  |                 // 1. Create a nested sub-map for structural integrity
  89  |                 const subMap = new Map();
  90  |                 currentMap.set(key, subMap);
  91  |                 if (currentMap !== this.map) {
  92  |                     this.map.set(key, subMap);
  93  |                 }
  94  |                 convert(value, subMap);
  95  |             } else {
  96  |                 currentMap.set(key, value);
  97  |                 this.map.set(key, value);
  98  |             }
  99  |         }
  100 |     };
  101 | 
  102 |     convert(this.jsonObject, this.map);
  103 |     return this.map;
  104 | }
  105 | 
  106 |     async getValueByKey(key) {
  107 |         if (!this.jsonObject) {
  108 |             await this.setJsonData();
  109 |         }
  110 |         const search = (obj) => {
  111 |             if (obj === null || typeof obj !== "object") return undefined;
  112 |             if (Object.prototype.hasOwnProperty.call(obj, key)) {
  113 |                 return obj[key];
  114 |              }
  115 |         for (const value of Object.values(obj)) {
  116 |             if (value !== null && typeof value === "object") {
  117 |                 const found = search(value);
  118 |                 if (found !== undefined) return found;
  119 |             }
  120 |         }
  121 |         return undefined;
  122 |         };
  123 |     return search(this.jsonObject);
  124 |     }
  125 | 
  126 | 
  127 | 
  128 | 
  129 | }
```