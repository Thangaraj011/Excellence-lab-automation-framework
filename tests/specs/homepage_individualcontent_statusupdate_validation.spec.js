import { test, expect } from '@playwright/test';
import { TestContextSetup } from '../utils/TestContextSetup';

test.describe('Authentication Tests', () => {
  
  test('User should be able to log in with valid credentials', {tag: '@smoke'}, async () => {
    const contextSetup = new TestContextSetup();
    const page = await contextSetup.init(`https://opensource-demo.orangehrmlive.com/`, 'chromium');
    await page.pause();

  });

  test('log in with valid credentials firefox', {tag: '@smoke'}, async () => {
    const contextSetup = new TestContextSetup();
    const page = await contextSetup.init(`https://rahulshettyacademy.com/practice`, 'firefox');
    await page.pause();
  });

  test('log in with valid credentials webkit', async () => {
    const contextSetup = new TestContextSetup();
    const page = await contextSetup.init(`https://eventhub.rahulshettyacademy.com/login`, 'webkit');
    await page.pause();

  });

});