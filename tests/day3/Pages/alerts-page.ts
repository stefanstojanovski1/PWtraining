import { expect, type Locator, type Page } from '@playwright/test';

export class alertsPage {
  readonly page: Page;
  readonly buttonClick: Locator;
  readonly goToUrl: any;
  readonly alertsLoc: any;
  readonly formLoc: any;
 

  constructor(page: Page) {
    this.page = page;
    this.buttonClick =  page.getByRole('button', { name: 'New Tab' });
    this.goToUrl = page.goto('https://demoqa.com/');
    this.alertsLoc = page.locator('svg').first();
    this.formLoc = page.locator('div:nth-child(3) > div > .avatar');

    
  }
  private async navigateToAlerts(sectionName: string) {
    await this.goToUrl;
    await this.alertsLoc.click();
    await this.page.getByText(sectionName).click();
}
async alertsClick(){
  await this.page.getByText('Alerts', { exact: true }).click();
}
async alertButtonClick(){
  this.page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    expect(dialog.message()).toBe('You clicked a button');
    await dialog.dismiss(); 
  });
  await this.page.locator('#alertButton').click();
  await this.page.waitForTimeout(1000);
}

  async navigateToForm() {
   
    await this.goToUrl;
    await this.formLoc.click();
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
  async navigateToAlertWindows(){
  await this.navigateToAlerts('Alerts, Frame & Windows');
  // await this.page.getByText('Alerts, Frame & Windows').click();
}
}

