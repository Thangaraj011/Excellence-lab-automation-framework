import { test, expect } from '@playwright/test';
import { visualStep } from '../utils/visualSteps';

test('test', async ({ page }) => {
  await visualStep(page, 'Navigate to Login Page', async () => {
    await page.goto('https://rahulshettyacademy.com/practice');
  });
  await visualStep(page, 'Verify Page Title', async () => {
    await expect(page.getByText('Practice Makes Perfect')).toBeVisible();
  });
  await visualStep(page, 'Verify Header Text', async () => {
    await expect(page.locator('h1')).toContainText('QA Testing');
  });
});