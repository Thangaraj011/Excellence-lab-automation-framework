import { test, expect } from "../../fixtures/index.js";
import { filtersTestData } from "../../data/homepage-filters-validation.data.js";
import { learningRecordsData } from "../../data/learningrecordspage.data.js";


test.describe.serial('Learning records Individual contents details verification', ()=>{
    const data = learningRecordsData.multipleContents;
    test.beforeEach(async({authPage, homePage, learningRecordsPage}) =>{
        await homePage.verifyHomepageLoaded();
        await learningRecordsPage.getLearningRecordsButton().click();
        await authPage.waitForLoadState("domcontentloaded");
        await learningRecordsPage.screenTitleCheck();
    })

    test('Multiple Individual contents learning recods details validation', {tag: ["@learningRecords", "@demo2"]}, async({authPage, homePage, learningRecordsPage, genericUtils}) =>{
        await learningRecordsPage.setTenContentperPage();
        await learningRecordsPage.findTitlesAcrossPages(data.contentTitles);
    });

    test('Single Individual contents learning records details validation', {tag: ["@learningRecords", "@demo2"]}, async({authPage, homePage, learningRecordsPage, genericUtils}) =>{
        const data = learningRecordsData.singleContent;
        const expectedData = {
        source: data.contentSource,
        type: data.contentType,
        date: data.contentDate,
        status: data.contentStatus
    };
        await learningRecordsPage.setTenContentperPage();
        await learningRecordsPage.findTitlesAcrossPages(data.contentTitle, expectedData);
    });

    test.only('AI Recommended contents learning recods Edit details validation', {tag: ["@learningRecords", "@demo2"]}, async({authPage, homePage, learningRecordsPage, genericUtils}) =>{
        const data = learningRecordsData.singleContent;
        await learningRecordsPage.setTenContentperPage();
        const rowElement = await learningRecordsPage.findContentAndInitiateActions(data.contentTitle, data.contentSource);
        await rowElement.locator('button.ant-dropdown-trigger').click()
        await learningRecordsPage.editOption.click();
        await expect(learningRecordsPage.editSubTabHeaderTitle).toBeVisible();
        const title = await learningRecordsPage.editSubTabContentTitle;
        expect(title).toHaveText(data.contentTitle);
        const provider = await learningRecordsPage.editSubTabProvider;
        expect(provider).toHaveText(data.data.contentSource);
        

    });


})