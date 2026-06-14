import { expect } from "@playwright/test";

export class HomePage {
  constructor(page) {
    this.page = page;

    this.homepageTitle = page.getByRole("heading", { name: "Homepage" });
    this.assignedCoursesTab = page.getByRole("tab", {
      name: "Assigned Courses",
    });
    this.aiRecommendationsTab = page.getByRole("tab", {
      name: "AI Recommendations",
    });

    this.searchTextbox = page.getByPlaceholder("Search");
    this.skillCatgeoryDropdown = page.locator(".ant-select-content", {
      hasText: "Skill category",
    });
    this.skillCatgeoryDropdown2 = page.locator(".ant-select-content", {
      hasText: "Skill Name",
    });
    this.skillNameDropdown = page.locator(
      `//div[text()='Skill Name']/following-sibling::input`,
    );
    this.dueDateInputs = page.locator(".ant-picker-input input");
    this.dueDateStart = page
      .getByPlaceholder("Due Date")
      .and(page.locator('[date-range="start"]'));
    this.dueDateEnd = page
      .getByPlaceholder("Due Date")
      .and(page.locator('[date-range="end"]'));

    this.statusAssignedButton = page.getByText("Assigned", { exact: true });
    this.statusInProgressButton = page.getByText("In Progress", {
      exact: true,
    });

    this.assignedByManagerSection = page.getByText("Assigned By Manager", {
      exact: true,
    });
    this.managerSortByDropdown = page
      .getByRole("combobox", { name: "Sort courses" })
      .first();
    this.assignedByAdminSection = page.getByText("Assigned By Admin", {
      exact: true,
    });
    this.adminSortByDropdown = page
      .getByRole("combobox", { name: "Sort courses" })
      .nth(1);

    this.managerAssignedContentCards = page.locator(
      `//span[normalize-space()='Assigned By Manager']/ancestor::div[contains(@class,'ant-card')][1]/following-sibling::div[contains(@class,'ant-card-body')]`,
    );
    this.adminAssignedContentCards = page.locator(
      `//span[normalize-space()='Assigned By Admin']/ancestor::div[contains(@class,'ant-card')][1]/following-sibling::div[contains(@class,'ant-card-body')]`,
    );
    this.contentCard = page.locator(
      '[class*="_listColumn_"] [class*="_listTop_"] [class*="_listHeadingWrap_"]',
    );

    this.managerAssignedContentTitles = page.locator(
      `//span[normalize-space()='Assigned By Manager']/ancestor::div[contains(@class,'ant-card-bordered')][1]/div[contains(@class,'ant-card-body')]//div[contains(@class,'_listHeadingWrap_')]`,
    );
    this.adminAssignedContentTitles = page.locator(
      `//span[normalize-space()='Assigned By Admin']/ancestor::div[contains(@class,'ant-card-bordered')][1]/div[contains(@class,'ant-card-body')]//div[contains(@class,'_listHeadingWrap_')]`,
    );

    this.assignedTooltip = page.getByRole("tooltip", {
      name: "Mark as in progress",
    });
    this.inProgressTooltip = page.getByRole("tooltip", {
      name: "Mark complete",
    });
    this.learningPathTooltip = page.getByRole("tooltip", {
      name: "Click the card to open the learning path",
    });

    this.inProgressToast = page.getByText("Marked as in progress");
    this.markCompleteToast = page
      .locator("div")
      .filter({ hasText: "Marked as completed" })
      .first();

    this.confirmCompleteCancelButton = page.getByRole("button", {
      name: "Cancel",
    });
    this.yesMarkCompleteButton = page.getByRole("button", {
      name: "Yes, mark complete",
    });
    this.learningPathProgressLocator = this.page.locator(
      '[class*="_pathProgressPercent_"]',
    );
  }

  async verifyHomepageLoaded() {
    await this.homepageTitle.waitFor({ state: "visible" });
    await expect(this.assignedCoursesTab).toBeVisible();
    await expect(this.aiRecommendationsTab).toBeVisible();
  }

  async verifyManagerAndAdminSections() {
    await expect(this.assignedByManagerSection).toBeVisible();
    await expect(this.assignedByAdminSection).toBeVisible();
  }

  async verifyAssignedTooltip() {
    await expect(this.assignedTooltip).toBeVisible();
  }
  async verifyInProgressTooltip() {
    await expect(this.inProgressTooltip).toBeVisible();
  }
  async verifyLearningPathTooltip() {
    await expect(this.learningPathTooltip).toBeVisible();
  }

  async verifyInProgressToast() {
    await this.inProgressToast.waitFor({ state: "visible", timeout: 8000 });
  }

  async verifyMarkCompleteToast() {
    await this.markCompleteToast.waitFor({ state: "visible", timeout: 8000 });
  }

  async verifyConfirmCompletionDialog(contentName) {
    await expect(this.page.getByText("Confirm completion")).toBeVisible();
    await expect(
      this.page.getByLabel("Confirm completion").getByText(contentName),
    ).toBeVisible();
  }

  async verifyContentVisible(contentName) {
    const content = this.page.getByText(contentName, { exact: true });
    await content.scrollIntoViewIfNeeded();
    await expect(content).toBeVisible();
  }

  async verifyLearningPathDetailsScreen(learningPathName) {
    await expect(
      this.page.getByRole("heading", { name: `${learningPathName}` }),
    ).toBeVisible();
    await expect(this.page.locator(".ant-progress-rail")).toBeVisible();
  }

  async verifyFiltersOnLearningPathDetailsScreen() {
    await expect(
      this.page.getByRole("heading", { name: "Learning Path Content" }),
    ).toBeVisible();
    await expect(this.page.getByText("Quick Filters")).toBeVisible();
    await expect(this.page.getByText("Priority")).toBeVisible();
    await expect(
      this.page.locator("span").filter({ hasText: "Optional" }).first(),
    ).toBeVisible();
    await expect(
      this.page.getByLabel("Filter by priority").getByText("Mandatory"),
    ).toBeVisible();
    await expect(this.page.getByText("Status")).toBeVisible();
    await expect(
      this.page.locator("span").filter({ hasText: "Assigned" }).nth(1),
    ).toBeVisible();
    await expect(
      this.page.locator("span").filter({ hasText: "In Progress" }).first(),
    ).toBeVisible();
    await expect(
      this.page.locator("span").filter({ hasText: "Completed" }).first(),
    ).toBeVisible();
  }

  async openIndividualContent(contentName) {
    await this.page.getByText(contentName).click();
  }

  async openLearningPath(learningPathName) {
    const content = this.page.getByText(learningPathName, { exact: true });
    await content.scrollIntoViewIfNeeded();
    await expect(content).toBeVisible();
    await this.page.getByText(learningPathName).click();
  }

  async verifySearchContentVisible(courseName, contentName) {
    await this.searchTextbox.waitFor({ state: "visible" });
    await this.searchTextbox.fill(courseName);
    await this.page.waitForLoadState("domcontentloaded");
    await this.verifyContentVisible(contentName);
  }

  async verifyOnlySelectedSkillCategoryContentsVisible(skillCategoryValue) {
    const pills = this.page.locator("._listPillSkillCategory_p5zy6_654");
    const count = await pills.count();
    for (let i = 0; i < count; i++) {
      const pill = pills.nth(i);
      const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
      console.log(`Pill[${i}] text = "${text}"`);
      const contentName = (
        await pill
          .locator(
            "xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]",
          )
          .textContent()
      )
        ?.replace(/\s+/g, " ")
        .trim();
      if (!text.includes(skillCategoryValue)) {
        throw new Error(
          `${contentName} does not have ${skillCategoryValue} as skill category`,
        );
      }
      console.log(
        `${contentName} has skill category ${skillCategoryValue} as skill category`,
      );
    }
  }

  async verifyOnlySelectedSkillNameContentsVisible(skillNameValue) {
    const pills = this.page.locator("._listPillSkillName_p5zy6_670");
    const count = await pills.count();
    for (let i = 0; i < count; i++) {
      const pill = pills.nth(i);
      const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
      const contentName = (
        await pill
          .locator(
            "xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]",
          )
          .textContent()
      )
        ?.replace(/\s+/g, " ")
        .trim();
      if (!text.includes(skillNameValue)) {
        throw new Error(
          `${contentName} does not have ${skillNameValue} as skill name`,
        );
      }
      console.log(
        `${contentName} has skill category ${skillNameValue} as skill name`,
      );
    }
  }

  async verifyDisplayedContentsPriority(priorityLevel) {
    const pills = this.page.locator('[class*="_listPillPriority"]');
    const count = await pills.count();
    for (let i = 0; i < count; i++) {
      const pill = pills.nth(i);
      const text = (await pill.textContent())?.replace(/\s+/g, " ").trim();
      const contentName = (
        await pill
          .locator(
            "xpath=preceding::div[@class='_listHeadingWrap_p5zy6_516'][1]",
          )
          .textContent()
      )
        ?.replace(/\s+/g, " ")
        .trim();
      if (!text.includes(priorityLevel)) {
        throw new Error(
          `${contentName} does not have ${priorityLevel} as priority Level`,
        );
      }
      console.log(`${contentName} has priority Level as ${priorityLevel}`);
    }
  }

  async selectSkillCategory(skillCategory) {
    await this.skillCatgeoryDropdown.click();
    await this.page.getByText(skillCategory).click();
    await this.page
      .locator('[class*="_listPillSkillCategory_"]')
      .first()
      .waitFor({ state: "visible" });
  }

  async selectSkillName(skillName) {
    await this.skillNameDropdown.fill(skillName);
    await this.page.locator(".ant-select-item-option").first().click();
    await this.page
      .locator('[class*="_listPillSkillName_"]')
      .first()
      .waitFor({ state: "visible" });
  }

  async selectDueDates(dueDateStart, dueDateEnd) {
    await this.dueDateInputs.first().click();
    await this.dueDateInputs.nth(0).fill(dueDateStart);
    await this.dueDateInputs.nth(0).press("Enter");
    await this.dueDateInputs.nth(1).fill(dueDateEnd);
    await this.dueDateInputs.nth(1).press("Enter");
    await this.page
      .locator('[class*="_listDueDate_"]')
      .first()
      .waitFor({ state: "visible" });
  }

  async selectPriority(priorityLevel) {
    this.page.getByText(priorityLevel, { exact: true }).click();
    await this.page
      .locator('[class*="_listPillPriority"]')
      .first()
      .waitFor({ state: "visible" });
  }

  async selectStatusAndReturnResponses(status, api_status) {
    const statusFragment = `status=${api_status.toLowerCase()}`;

    const makeMatcher = (source) => (resp) =>
      resp.url().includes(`source=${source}`) &&
      resp.url().toLowerCase().includes(statusFragment) &&
      resp.request().method() === "GET" &&
      resp.status() === 200;

    const managerPromise = this.page
      .waitForResponse(makeMatcher("MANAGER"), { timeout: 5000 })
      .catch(() => null);
    const adminPromise = this.page
      .waitForResponse(makeMatcher("ADMIN"), { timeout: 5000 })
      .catch(() => null);

    await this.page.getByText(status, { exact: true }).click();
    await this.page
      .locator('[class*="_cardListOnly_"]')
      .first()
      .waitFor({ state: "visible" });

    const [managerResp, adminResp] = await Promise.all([
      managerPromise,
      adminPromise,
    ]);
    return [managerResp, adminResp];
  }

  async selectManagerSortByOption(optionText) {
    await this.managerSortByDropdown.click();
    await this.page
      .locator(".ant-select-item-option")
      .filter({ hasText: optionText })
      .click();
    await this.contentCard.first().waitFor({ state: "visible" });
  }

  async selectAdminSortByOption(optionText) {
    await this.adminSortByDropdown.click();
    await this.page
      .locator(".ant-select-item-option")
      .filter({ hasText: optionText })
      .click();
    await this.contentCard.first().waitFor({ state: "visible" });
  }

  async getAllTitlesFromResponses(managerResp, adminResp) {
    const extractTitles = async (resp) => {
      if (!resp) return [];
      const body = await resp.json().catch(() => null);
      const courses = body?.data?.courses;
      if (!Array.isArray(courses)) return [];
      return courses.map((c) => c.title.replace(/\s+/g, " ").trim());
    };

    const managerTitles = await extractTitles(managerResp);
    const adminTitles = await extractTitles(adminResp);
    const allTitles = [...managerTitles, ...adminTitles];

    return allTitles;
  }

  async verifyAllDueDatesInRange(startDate, endDate) {
    const dueDates = this.page.locator('[class*="_listDueDate_"]');
    const count = await dueDates.count();
    for (let i = 0; i < count; i++) {
      const raw = (await dueDates.nth(i).textContent())
        ?.replace(/\s+/g, " ")
        .trim();
      const match = raw.match(/(\d{2})-(\d{2})-(\d{4})/);
      const date = match ? `${match[3]}-${match[2]}-${match[1]}` : undefined;
      const contentName = (
        await dueDates
          .nth(i)
          .locator(
            "xpath=following::div[@class='_listHeadingWrap_p5zy6_516'][1]",
          )
          .textContent()
      )
        ?.replace(/\s+/g, " ")
        .trim();
      if (!date || !(date >= startDate && date <= endDate)) {
        throw new Error(
          `Due date "${raw}" is not within ${startDate} – ${endDate}`,
        );
      }
      console.log(
        ` "${contentName}" due date is within the given start date "${startDate}" and End date "${endDate}" range `,
      );
    }
  }

  verifyNamesSorted(names, order = "asc") {
    const cleaned = names.map((n) => n.replace(/\s+/g, " ").trim());
    const compare = (a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base", numeric: true });

    const isSorted = cleaned.every(
      (val, i) =>
        i === 0 ||
        (order === "asc"
          ? compare(cleaned[i - 1], val) <= 0
          : compare(cleaned[i - 1], val) >= 0),
    );

    expect(
      isSorted,
      `Names not in ${order} order:\n${cleaned.join("\n")}`,
    ).toBe(true);
  }

  async getContentNames() {
    const cards = this.page.locator('[class*="_listHeadingWrap_"]');
    await cards.first().waitFor({ state: "visible" });
    const names = await cards.allTextContents();
    return names.map((n) => n.replace(/\s+/g, " ").trim()).filter(Boolean);
  }

  async getManagerAssignedCardNames() {
    await this.assignedByManagerSection.waitFor({ state: "visible" });
    const cards = this.managerAssignedContentTitles;
    await cards.first().waitFor({ state: "visible" });
    return (await cards.allTextContents()).map((n) => n.trim()).filter(Boolean);
  }

  async getAdminAssignedCardNames() {
    await this.assignedByAdminSection.waitFor({ state: "visible" });
    const cards = this.adminAssignedContentTitles;
    await cards.first().waitFor({ state: "visible" });
    return (await cards.allTextContents()).map((n) => n.trim()).filter(Boolean);
  }

  async getContentProgressButton(contentName) {
    const btn = this.page.locator(
      `//span[text()='${contentName}']/following::button[1]`,
    );
    await btn.scrollIntoViewIfNeeded();
    await btn.waitFor({ state: "visible" });
    return btn;
  }

  async getLearningPathProgressPercentage() {
    const progressLocator = this.learningPathProgressLocator;
    await progressLocator.waitFor({ state: "visible" });
    const currentProgress = (await progressLocator.textContent())?.trim() ?? "";
    return currentProgress;
  }

  async getListedIndividualContentNames() {
    const contentNames = await this.page
      .locator(
        `//div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`,
      )
      .allTextContents();
    return contentNames;
  }

  async markAllIndividualContentsToCompleteStatus(contentNames) {
    for (const contentName of contentNames) {
      const progressButton = this.page.locator(
        `//span[text()='${contentName}']/following::button[1]`,
      );

      if ((await progressButton.count()) === 0) {
        console.log(`"${contentName}" already complete (no button) — skipping`);
        continue;
      }

      await progressButton.scrollIntoViewIfNeeded();
      await progressButton.hover();

      const tooltip = this.page.getByRole("tooltip");
      await tooltip.waitFor({ state: "visible" });
      const message = (
        (await tooltip.textContent())?.trim() ?? ""
      ).toLowerCase();

      if (message.includes("in progress")) {
        await progressButton.click();
        await this.verifyInProgressToast();
        await this.inProgressToast.waitFor({ state: "hidden" });

        await progressButton.hover();
        await this.verifyInProgressTooltip();
        await progressButton.click();
        await this.confirmCompletion(contentName);
      } else if (message.includes("mark complete")) {
        await progressButton.click();
        await this.confirmCompletion(contentName);
      }
    }
    const finalProgressPercentage =
      await this.getLearningPathProgressPercentage();
    expect(finalProgressPercentage).toBe("100%");
  }

  async confirmCompletion(contentName) {
    await this.verifyConfirmCompletionDialog(contentName);
    await this.yesMarkCompleteButton.click();
    await this.verifyMarkCompleteToast();
    await this.markCompleteToast.waitFor({ state: "hidden" });
  }

  async expectProgressChanged(previousProgress) {
    await expect(this.learningPathProgressLocator).not.toHaveText(
      previousProgress,
    );
  }
}
