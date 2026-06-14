# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: token-generator.js >> Generate and set token for local storage >> Generate token for Employee
- Location: tests/specs/token-generator.js:27:9

# Error details

```
Error: Missing env var EMP_USER

expect(received).toBeTruthy()

Received: undefined
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { isStateValid, describeState } from '../utils/tokenCheck.js';
  3  | import { GenericUtils } from '../utils/GenericUtils.js';
  4  | import fs from 'fs';
  5  | import path from 'path';
  6  | 
  7  | const checkOpts = { cookieName: 'token' };
  8  | const BACKEND = process.env.BASE_BE_URL || 'http://localhost:3001';
  9  | 
  10 | const ALL_PROFILES = [
  11 |     { name: 'Employee',         envUser: 'EMP_USER',           file: 'auth/user.json',            key: 'employee' },
  12 |     { name: 'Manager Indirect', envUser: 'MANAGER_IND_USER',   file: 'auth/managerindirect.json', key: 'managerindirect' },
  13 |     { name: 'Manager Direct',   envUser: 'MANAGER_DIR_USER',   file: 'auth/managerdirect.json',   key: 'managerdirect' },
  14 |     { name: 'Admin',            envUser: 'ADMIN_USER',         file: 'auth/admin.json',           key: 'admin' },
  15 |     { name: 'Manager-Admin',    envUser: 'ADMIN_MANAGER_USER', file: 'auth/adminmanager.json',    key: 'adminmanager' },
  16 | ];
  17 | 
  18 | const wanted = (process.env.AUTH_PROFILES || '')
  19 |   .split(',').map(s => s.trim()).filter(Boolean);
  20 | 
  21 | const profiles = wanted.length
  22 |   ? ALL_PROFILES.filter(p => wanted.includes(p.key))
  23 |   : ALL_PROFILES;
  24 | 
  25 | test.describe('Generate and set token for local storage', ()=>{
  26 |     for(const profile of profiles){
  27 |         test(`Generate token for ${profile.name}`, async({}, testInfo)=>{
  28 |             console.log(describeState(profile.file, checkOpts));
  29 | 
  30 |             if(isStateValid(profile.file, checkOpts)){
  31 |                 test.skip(true, `${profile.name} token still valid — reusing ${profile.file}`);
  32 |                 return;
  33 |             }
  34 | 
  35 |             const user = process.env[profile.envUser];
> 36 |             expect(user, `Missing env var ${profile.envUser}`).toBeTruthy();
     |                                                                ^ Error: Missing env var EMP_USER
  37 |             
  38 |             const utils = new GenericUtils(null, testInfo);
  39 |             const token = await utils.generateJWT(user);
  40 | 
  41 |             const state = {
  42 |             cookies: [{
  43 |             name: 'token',
  44 |             value: token,
  45 |             domain: new URL(BACKEND).hostname,
  46 |             path: '/',
  47 |             httpOnly: false,
  48 |             secure: true,
  49 |             sameSite: 'None',
  50 |             expires: Math.floor(Date.now() / 1000) + 86400 * 7,
  51 |             }],
  52 |             origins: [],
  53 |         };
  54 |             fs.mkdirSync(path.dirname(profile.file), { recursive: true });
  55 |             fs.writeFileSync(profile.file, JSON.stringify(state, null, 2));
  56 |         });
  57 | 
  58 |     }
  59 | });
```