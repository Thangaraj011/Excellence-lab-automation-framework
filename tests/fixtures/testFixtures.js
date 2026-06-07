import { test as base, expect } from '@playwright/test';
import { TestContextSetup } from '../context/TestContextSetup';

export const test = base.extend({
  browserType: ['chromium', { option: true }],

  testContext: async ({}, use, testInfo) => {
    const testContext = new TestContextSetup(testInfo);
    await testContext.init(
      process.env.BASE_URL,    
      process.env.BROWSER_TYPE
    );
    await use(testContext);

    if (testContext.context) {
      await testContext.context.close();
    }

    await testContext.teardown();
  },

});

export { expect };