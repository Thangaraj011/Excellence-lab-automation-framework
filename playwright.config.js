const { defineConfig, devices } = require('@playwright/test');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '.env') });
const environment = process.env.ENV || 'dev';
console.log(`Loading environment variables from ${path.resolve(__dirname, 'tests/configs/', '.env.${environment}')}`);

dotenv.config({ 
  path: path.resolve(__dirname, `tests/configs/.env.${environment}`),
  override: true
});

export default defineConfig({
  testDir: './tests/specs',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'],['allure-playwright', { outputFolder: 'allure-results' }]],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    //headless: process.env.CI ? true : true,
    headless: false,
  },

  // /* Configure projects for major browsers */
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },

  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },

  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },

  // ],

});

