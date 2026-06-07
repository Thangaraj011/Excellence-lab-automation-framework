import { chromium, firefox, webkit } from 'playwright';
export class BaseTest {

  async launchBrowser(url, browserType) {
    const browser = await this.getBrowser(browserType);
    const context = await browser.newContext({
      baseURL:    process.env.BASE_FE_URL,
      locale:     'en-US',
      timezoneId: 'America/New_York',
    });
    const page = await context.newPage();
    await page.goto(url);
    return {browser, context, page};
  }


  async getBrowser(browserType) {
    const options = {
      headless: process.env.CI ? true : false,
      slowMo:   process.env.SLOW_MO ? parseInt(process.env.SLOW_MO) : 0,
    };
    switch (browserType) {
      case 'chromium': return chromium.launch(options);
      case 'firefox': return firefox.launch(options);
      case 'webkit': return webkit.launch(options);
      default: throw new Error(`Unsupported browser type: ${browserType}`);
    }
  }

}
