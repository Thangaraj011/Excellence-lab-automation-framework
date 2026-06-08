import { test, expect } from '../../fixtures/index.js';

test.describe.serial('Homepage Individual Content status update validation with custom fixture sample', () => {

  test('Individual Content update status to Inprogress with custom fixture sample', { tag: '@fixture2' },
    async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {

      const contentName = await genericUtils.getValueByKey('IP_ContentName');

      await homePage.verifyHomepageLoaded();
      await homePage.verifyManagerAndAdminSections();
      await homePage.verifyContentVisible(contentName);

      const progressBtn = await homePage.getContentProgressButton(contentName);
      await progressBtn.hover();
      await homePage.verifyAssignedTooltip();
      await progressBtn.click();
      await homePage.verifyInProgressTooltip();

      await learningRecordsPage.getLearningRecordsButton().click();
      await authPage.waitForLoadState('domcontentloaded');
      await learningRecordsPage.screenTitleCheck();

      const contentTitle = await learningRecordsPage.getFirstContentTitle();
      await expect(contentTitle).toHaveText(contentName);
      await expect(learningRecordsPage.getContentSource(contentName))
        .toHaveText(await genericUtils.getValueByKey('IP_ContentSource'));
    //   await expect(learningRecordsPage.getContentType(contentName))
    //     .toHaveText(await genericUtils.getValueByKey('IP_ContentType'));
    //   await expect(learningRecordsPage.getContentDate(contentName))
    //     .toHaveText(await genericUtils.getValueByKey('IP_ContentDate'));
      await expect(learningRecordsPage.getContentStatus(contentName))
        .toHaveText(await genericUtils.getValueByKey('IP_ContentStatus'));
    }
  );

  test('Individual Content update status to Complete with custom fixture sample', { tag: '@fixture2' },
    async ({ authPage, homePage, learningRecordsPage, genericUtils }) => {

      const contentName = await genericUtils.getValueByKey('IP_ContentName');

      await homePage.verifyHomepageLoaded();
      await homePage.verifyManagerAndAdminSections();
      await homePage.verifyContentVisible(contentName);

      const progressBtn = await homePage.getContentProgressButton(contentName);
      await progressBtn.hover();
      await homePage.verifyInProgressTooltip();
      await progressBtn.click();

      await homePage.verifyConfirmCompletionDialog(contentName);
      await homePage.yesMarkCompleteButton.click();
      await homePage.verifyMarkCompleteToast();

      await learningRecordsPage.getLearningRecordsButton().click();
      await authPage.waitForLoadState('domcontentloaded');
      await learningRecordsPage.screenTitleCheck();

      const contentTitle = await learningRecordsPage.getFirstContentTitle();
      await expect(contentTitle).toHaveText(contentName);
      await expect(learningRecordsPage.getContentSource(contentName))
        .toHaveText(await genericUtils.getValueByKey('IP_ContentSource'));
    //   await expect(learningRecordsPage.getContentType(contentName))
    //     .toHaveText(await genericUtils.getValueByKey('IP_ContentType'));
    //   await expect(learningRecordsPage.getContentDate(contentName))
    //     .toHaveText(await genericUtils.getValueByKey('IP_ContentDate'));
      await expect(learningRecordsPage.getContentStatus(contentName))
        .toHaveText(await genericUtils.getValueByKey('IP_ContentStatus'));
    }
  );

});