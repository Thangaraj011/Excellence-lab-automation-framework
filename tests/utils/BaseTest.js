import { chromium, firefox, webkit } from 'playwright';
export class BaseTest {


  async launchBroswer(url, broswerType) {
    const browser = await this.getBrowser(broswerType);
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
    return {context, page};
  }


  async getBrowser(broswerType) {
    switch (broswerType) {
      case 'chromium':
        return await chromium.launch({ headless: false });
      case 'firefox':
        return await firefox.launch({ headless: false });
      case 'webkit':
        return await webkit.launch({ headless: false });
      default:
        throw new Error(`Unsupported browser type: ${broswerType}`);
    }
  }

}