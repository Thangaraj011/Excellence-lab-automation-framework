import { test, expect } from '../../fixtures/index.js';
import { filtersTestData } from '../../data/homepage-filters-validation.data.js';

test.describe.serial('Home Page filters validation', () =>{

    const data = filtersTestData.searchFilters;
    test.beforeEach(async ({homePage, genericUtils}) => {
        await homePage.verifyHomepageLoaded();
        await homePage.verifyManagerAndAdminSections();
    })

    test('Search textbox filter validation', {  tag: ['@homepageFilters']}, async({authPage, homePage, genericUtils}) =>{
        
        await homePage.verifySearchContentVisible(data.searchContentText);
    })

    test('Skill category filter validation', {  tag: ['@homepageFilters']}, async({authPage, homePage, genericUtils}) =>{
        await homePage.selectSkillCategory(data.skillCategoryValue);
        await homePage.verifyOnlySelectedSkillCategoryContentsVisible(data.skillCategoryValue);

    })

    test('Skill Name filter validation', {  tag: ['@homepageFilters']}, async({authPage, homePage, genericUtils}) =>{
        
        await homePage.selectSkillName(data.skillNameValue);
        await homePage.verifyOnlySelectedSkillNameContentsVisible(data.skillNameValue);
    })

    test.only('Due Date filter validation', {  tag: ['@homepageFilters']}, async({authPage, homePage, genericUtils}) =>{
        
        await homePage.selectDueDates(data.dueDateStart, data.dueDateEnd);
        await authPage.pause();
    })

    test('Multiple filter validation', {  tag: ['@homepageFilters']}, async({authPage, homePage, genericUtils}) =>{
        
        const data = filtersTestData.searchFilters;
        await homePage.verifySearchContentVisible(data.searchContentText);
    })


})
