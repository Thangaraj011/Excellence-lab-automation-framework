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


const PROFILE_REGISTRY = {
  'employee':        'auth/user.json',
  'managerindirect': 'auth/managerindirect.json',
  'managerdirect':   'auth/managerdirect.json',
  'admin':           'auth/admin.json',
  'adminmanager':    'auth/adminmanager.json',
};

const rawProfiles = process.env.AUTH_PROFILES || 'employee';
const enabledProfileKeys = rawProfiles.split(',').map(p => p.trim().toLowerCase());

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
    ...Object.entries(PROFILE_REGISTRY)
    .filter(([roleName]) => enabledProfileKeys.includes(roleName))
    .map(([roleName, storagePath]) => ({
    name: `e2e-${roleName}`,
    testMatch: /.*\.spec\.js/,
    use: {
      ...devices['Desktop Chrome'],
      storageState: storagePath, 
    },
    dependencies: ['setup'],
  })),
  ],

});

