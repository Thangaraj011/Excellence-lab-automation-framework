import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const environment = process.env.ENV || 'dev';

dotenv.config({
  path: path.resolve(__dirname, `tests/configs/.env.${environment}`),
  override: true
});

export default defineConfig({
  testDir: './tests/specs',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 4,
  timeout: 30000,
  reporter: [['html', { open: 'never' }],['allure-playwright', { outputFolder: 'allure-results' }], ['list'],],
  use: {
    baseURL:             process.env.BASE_URL,
    trace:               'on-first-retry',
    screenshot:          'only-on-failure',
    video:               'retain-on-failure',
    headless:            process.env.CI ? true : false, // ← headed locally
    actionTimeout:       15000,
    navigationTimeout:   30000,
  },

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

