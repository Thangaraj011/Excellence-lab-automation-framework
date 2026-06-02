import { test } from '@playwright/test';

export async function visualStep(page, stepName, action) {
  await test.step(stepName, async () => {
    try {
      // Execute the actual test code for this step
      await action();
    } finally {
      // This runs whether the step passes or fails
      const screenshot = await page.screenshot({ fullPage: false });
      
      // Attach the screenshot specifically to this step
      await test.info().attach(`${stepName} - Screenshot`, {
        body: screenshot,
        contentType: 'image/png',
      });
    }
  });
}