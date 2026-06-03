# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: excellencelabtest1.spec.js >> Authentication Tests >> Employee Homepage validation
- Location: tests/specs/excellencelabtest1.spec.js:6:7

# Error details

```
TypeError: Cannot read properties of undefined (reading 'jsonToMap')
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { TestContextSetup } from '../utils/TestContextSetup';
  3  | 
  4  | test.describe('Authentication Tests', () => {
  5  |   
  6  |   test('Employee Homepage validation', {tag: '@smoke'}, async ({},testInfo) => {
  7  |     const contextSetup = new TestContextSetup(testInfo);
> 8  |     const currentMap = await contextSetup.genericUtils.jsonToMap();
     |                                                        ^ TypeError: Cannot read properties of undefined (reading 'jsonToMap')
  9  |     console.log(await currentMap.get('IP_Title'));
  10 |     const page = await contextSetup.init(`${process.env.BASE_BE_URL}`, 'chromium');
  11 |     const token = await contextSetup.genericUtils.generateJWT(process.env.EMP_USERNAME);
  12 |     const page2 = await contextSetup.openNewTab();
  13 |     await page2.goto(`${process.env.BASE_FE_URL}`);
  14 |     await contextSetup.genericUtils.setupAuthCookie(token);
  15 |     await page2.reload();
  16 |     await page2.waitForLoadState('networkidle');
  17 | 
  18 |   });
  19 | 
  20 | });
```