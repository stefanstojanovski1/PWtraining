import { expect, type Locator, type Page } from '@playwright/test';

export class alertsPage {
  readonly page: Page;
  readonly buttonClick: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.buttonClick =  page.getByRole('button', { name: 'New Tab' });

    
  }

  async navigateToForm() {
    await this.page.goto('https://demoqa.com/');
    await this.page.locator('div:nth-child(3) > div > .avatar').click();
    await this.page.getByText('Browser Windows').click();
  }
  async waitForPopUp() {
  const page1Promise = this.page.waitForEvent('popup');
  await this.buttonClick.click();
  return await page1Promise;
  
  }

  async verifyPopupText() {
    const page1 = await this.waitForPopUp();
    await expect(page1.locator('#sampleHeading')).toContainText('This is a sample page');
    return page1;
  }
 
}

