import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const environment = process.env.ENV || 'dev';
const match = `/token-generator\.js/`;

dotenv.config({
  path: path.resolve(__dirname, `tests/configs/.env.${environment}`),
  override: true
});


const PROFILE_REGISTRY = {
  'employee':        'auth/user.json',
  'managerindirect': 'auth/managerindirect.json',
  'managerdirect':   'auth/managerdirect.json',
  'admin':           'auth/admin.json',
  'adminmanager':    'auth/adminmanager.json',
};

const activeProfileKey = (process.env.AUTH_PROFILES || 'employee').trim().toLowerCase();
const selectedStorageState = PROFILE_REGISTRY[activeProfileKey] || PROFILE_REGISTRY['employee'];

console.log(` Playwright Runtime: [Profile: ${activeProfileKey}] -> [Using State: ${selectedStorageState}]`);


export default defineConfig({
  testDir: './tests/specs',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 1,
  timeout: 30000,
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }], 
    ['list'],
  ],
  use: {
    baseURL:             process.env.BASE_URL,
    trace:               'on-first-retry',
    screenshot:          'only-on-failure',
    video:               'retain-on-failure',
    headless:            process.env.CI ? true : false,
    actionTimeout:       15000,
    navigationTimeout:   30000,
  },

  projects: [
    {
      name: 'setup',
      testMatch: /token-generator\.js/,
    },
    {
      name: 'e2e-dynamic-runtime',
      testMatch: /.*\.spec\.js/, // Now matches ALL your spec files cleanly
      use: {
        ...devices['Desktop Chrome'],
        storageState: selectedStorageState, // Dynamically set by your .env file
      },
      dependencies: ['setup'],
    },
  ],

});

