import { BaseTest } from '../utils/BaseTest';
import { POManager } from '../../page_objects/POManager';
import { GenericUtils } from '../utils/GenericUtils';

export class TestContextSetup {

    constructor(testInfo) {
        this.baseTest     = new BaseTest();
        this.browser      = null;
        this.context      = null;
        this.page         = null;
        this.poManager    = null;
        this.genericUtils = null;
        this.testInfo     = testInfo;
    }
    async init(url, browserType) {
        const { browser, context, page } = await this.baseTest.launchBrowser(url, browserType);
        this.browser      = browser;
        this.context      = context;
        this.page         = page;
        this.poManager    = new POManager(this.page);
        this.genericUtils = new GenericUtils(this.context, this.testInfo);
        return this.page; 
    }

    async openNewTab(){
        if (!this.context) {
            throw new Error('Browser context has not been initialized. Call init() first.');
        }
        const newTab = await this.context.newPage();
        return newTab;
    }

    async teardown() {
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}