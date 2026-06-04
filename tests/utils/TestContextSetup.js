import { BaseTest } from './BaseTest';
import { POManager } from '../../page_objects/POManager';
import { GenericUtils } from './GenericUtils';

export class TestContextSetup {

    constructor(testInfo) {
        this.baseTest = new BaseTest();
        this.context = null;
        this.page = null;
        this.poManager = null;
        this.testInfo = testInfo;
    }
    async init(url, browserType) {
        const {context, page} = await this.baseTest.launchBroswer(url, browserType);
        this.context = context;
        this.page = page;
        this.poManager = new POManager(this.page);
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
}