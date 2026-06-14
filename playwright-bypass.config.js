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
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'auth/user.json',
      },
      dependencies: ['setup'],
    },
    
    {
      name: 'manager-indirect',
      testMatch: /.*\.managerindirect\.spec\.js/,
      use: { ...devices['Desktop Chrome'], storageState: 'auth/managerindirect.json' },
      dependencies: ['setup'],
    },

    {
      name: 'manager-direct',
      testMatch: /.*\.managerdirect\.spec\.js/,
      use: { ...devices['Desktop Chrome'], storageState: 'auth/managerdirect.json' },
      dependencies: ['setup'],
    },

    {
      name: 'admin',
      testMatch: /.*\.admin\.spec\.js/,
      use: { ...devices['Desktop Chrome'], storageState: 'auth/admin.json' },
      dependencies: ['setup'],
    },
    
    {
      name: 'admin-manager',
      testMatch: /.*\.adminmanager\.spec\.js/,
      use: { ...devices['Desktop Chrome'], storageState: 'auth/adminmanager.json' },
      dependencies: ['setup'],
    },
  ],

});

