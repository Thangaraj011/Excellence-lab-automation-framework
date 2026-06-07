import { test, expect } from '../fixtures/testFixtures';

test.describe('Login Feature', () => {

  test('Valid login navigates to dashboard', async ({ testContext }) => {

    const loginPage = testContext.poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.login('user@test.com', 'pass123');
    await expect(testContext.page).toHaveURL('/dashboard');
  });

  test('Invalid login shows error', async ({ testContext }) => {
    const loginPage = testContext.poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.login('wrong@test.com', 'wrongpass');
    await loginPage.verifyErrorMessage('Invalid credentials');
  });


  test('Open new tab and navigate', async ({ testContext }) => {
    const newTab = await testContext.openNewTab();
    await newTab.goto(process.env.BASE_URL + '/help');
    await expect(newTab).toHaveTitle('Help Center');
    await newTab.close();
  });

});