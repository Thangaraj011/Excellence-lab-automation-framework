# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/homepage-learning-path-sample.spec.js >> Homepage Learning path status update validation >> Learning path specific individual content status update to Inprogress validation
- Location: tests/specs/homepage/homepage-learning-path-sample.spec.js:20:3

# Error details

```
Error: expect(locator).not.toHaveText(expected) failed

Locator:  locator('[class*="_pathProgressPercent_"]')
Expected: not "0%"
Received: "0%"
Timeout:  5000ms

Call log:
  - Expect "not toHaveText" with timeout 5000ms
  - waiting for locator('[class*="_pathProgressPercent_"]')
    14 × locator resolved to <span class="ant-typography _pathProgressPercent_hvo3t_91 css-xbngoj css-var-_r_0_">…</span>
       - unexpected value "0%"

```

```yaml
- strong: 0%
```

# Test source

```ts
  128 |     await this.skillNameDropdown.selectOption({ label: skillName });
  129 |   }
  130 | 
  131 |   async getContentNames(){
  132 |     const cards = this.page.locator('[class*="_listHeadingWrap_"]');
  133 |     await cards.first().waitFor({ state: 'visible' });
  134 |     const names = await cards.allTextContents();
  135 |     return names.map(n => n.trim()).filter(Boolean);
  136 |   }
  137 | 
  138 |   async getManagerAssignedCardNames() {
  139 |     await this.assignedByManagerSection.waitFor({ state: 'visible' });
  140 |     const cards = this.page.locator(
  141 |       `//span[text()='Assigned By Manager']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  142 |     );
  143 |     await cards.first().waitFor({ state: 'visible' });
  144 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  145 |   }
  146 | 
  147 |     async getAdminAssignedCardNames() {
  148 |     await this.assignedByAdminSection.waitFor({ state: 'visible' });
  149 |     const cards = this.page.locator(
  150 |       `//span[text()='Assigned By Admin']/../../../../../../../following-sibling::div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`
  151 |     );
  152 |     await cards.first().waitFor({ state: 'visible' });
  153 |     return (await cards.allTextContents()).map(n => n.trim()).filter(Boolean);
  154 |   }
  155 | 
  156 | 
  157 |   async getContentProgressButton(contentName) {
  158 |     const btn = this.page.locator(
  159 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  160 |     );
  161 |     await btn.scrollIntoViewIfNeeded();
  162 |     await btn.waitFor({ state: 'visible' });
  163 |     return btn;
  164 |   }
  165 | 
  166 |   async getLearningPathProgressPercentage()
  167 |   {
  168 |     const progressLocator = this.learningPathProgressLocator;
  169 |     await progressLocator.waitFor({ state: 'visible' });
  170 |     const currentProgress = (await progressLocator.textContent())?.trim() ?? '';
  171 |     return currentProgress;
  172 |   }
  173 | 
  174 | 
  175 |   async getListedIndividualContentNames(){
  176 |     const contentNames = await this.page.locator(`//div[@class='ant-card-body']//div[contains(@class,'_listHeadingWrap_')]`).allTextContents();
  177 |     return contentNames;
  178 |   }
  179 | 
  180 | 
  181 |   async markAllIndividualContentsToCompleteStatus(contentNames)
  182 |   {
  183 |     for (const contentName of contentNames) {
  184 |       const progressButton = this.page.locator(
  185 |       `//span[text()='${contentName}']/../../../div/div/div/div/button`
  186 |     );
  187 | 
  188 |       if ((await progressButton.count()) === 0) {
  189 |         console.log(`"${contentName}" already complete (no button) — skipping`);
  190 |         continue;
  191 |       }
  192 | 
  193 |       await progressButton.scrollIntoViewIfNeeded();
  194 |       await progressButton.hover();
  195 | 
  196 |       const tooltip = this.page.getByRole('tooltip');
  197 |       await tooltip.waitFor({ state: 'visible' });
  198 |       const message = ((await tooltip.textContent())?.trim() ?? '').toLowerCase();
  199 | 
  200 |       if(message.includes('in progress')){
  201 |         await progressButton.click();
  202 |         await this.verifyInProgressToast()
  203 |         await this.inProgressToast.waitFor({ state: 'hidden' });
  204 | 
  205 |         await progressButton.hover();
  206 |         await this.verifyInProgressTooltip();
  207 |         await progressButton.click();
  208 |         await this.confirmCompletion(contentName);
  209 | 
  210 |       } else if (message.includes('mark complete')){
  211 |         await progressButton.click();
  212 |         await this.confirmCompletion(contentName);
  213 |       }
  214 |   }
  215 |     const finalProgressPercentage = await this.getLearningPathProgressPercentage();
  216 |     expect(finalProgressPercentage).toBe('100%');
  217 |   }
  218 | 
  219 | 
  220 |   async confirmCompletion(contentName) {
  221 |     await this.verifyConfirmCompletionDialog(contentName);
  222 |     await this.yesMarkCompleteButton.click();
  223 |     await this.verifyMarkCompleteToast();
  224 |     await this.markCompleteToast.waitFor({ state: 'hidden' });
  225 | }
  226 | 
  227 |   async expectProgressChanged( previousProgress) {
> 228 |   await expect(this.learningPathProgressLocator).not.toHaveText(previousProgress);
      |                                                      ^ Error: expect(locator).not.toHaveText(expected) failed
  229 | }
  230 | 
  231 | }
```