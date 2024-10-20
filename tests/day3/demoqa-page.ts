// TextBoxPage.ts
import { Page } from '@playwright/test';

const locators = require('./locators.json');


export class TextBoxPage {
    readonly page: Page;
    readonly locators: any;
    readonly checkBoxLocators: any;
    readonly toggleClicks: any;
    readonly documentToggle: any;
    // readonly locators = locators.textBoxPage; // Locators for text box page
    // readonly checkBoxLocators = locators.checkBoxPage; // Locators for checkbox page
    // readonly toggleClicks = locators.toggleClicks;
    // readonly workspaceToggle = locators.workspaceToggle;
    // //readonly documentToggle = locators.toggleClicks.documentToggle;
  
    constructor(page: Page) {
      this.page = page;
      this.locators = locators.textBoxPage;
      this.checkBoxLocators = locators.checkBoxPage;
      this.toggleClicks = locators.toggleClicks;
      this.documentToggle = locators.toggleClicks.documentToggle;
    }

  async navigateToTextBox() {
    await this.page.goto('https://demoqa.com/');
    await this.page.locator('svg').first().click();
    await this.page.getByText('Text Box').click();
  }
  async navigateToCheckBox() {
  await this.page.goto('https://demoqa.com/');
  await this.page.locator('svg').first().click();
  await this.page.getByText('Check Box').click();
}
  async fillForm(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
    await this.page.getByPlaceholder(this.locators.fullName.placeholder).click();
    await this.page.getByPlaceholder(this.locators.fullName.placeholder).fill(fullName);
    await this.page.getByPlaceholder(this.locators.fullName.placeholder).press('Tab');
    
    await this.page.getByPlaceholder(this.locators.email.placeholder).fill(email);
    await this.page.getByPlaceholder(this.locators.email.placeholder).press('Tab');
    
    await this.page.getByPlaceholder(this.locators.currentAddress.placeholder).fill(currentAddress);
    await this.page.locator(this.locators.permanentAddress.selector).click();
    await this.page.locator(this.locators.permanentAddress.selector).fill(permanentAddress);
  }

  async submit() {
    await this.page.getByRole(this.locators.submitButton.role, { name: this.locators.submitButton.name }).click();
  }
  async togglesClicks (){
  //   await this.page.getByLabel(this.checkBoxLocators.toggleButton.label).click();
  //  // await this.page.locator('li').filter({ hasText: this.toggleClicks.documentToggle.text }).getByLabel(this.toggleClicks.documentToggle.label).first().click();
  //   await this.page.locator('li').filter({ hasText: /^WorkSpace$/ }).getByLabel('Toggle').click();
  //   await this.page.locator('label').filter({ hasText: 'WorkSpace' }).getByRole('img').first().click();
  //   await this.page.locator('li').filter({ hasText: /^WorkSpace$/ }).getByLabel('Toggle').click();
    
    await this.page.getByLabel('Toggle').click();
    await this.page.locator('li').filter({ hasText: /^Documents$/ }).getByLabel('Toggle').click();
    await this.page.locator('label').filter({ hasText: 'WorkSpace' }).getByRole('img').first().click();
    await this.page.locator('li').filter({ hasText: /^WorkSpace$/ }).getByLabel('Toggle').click();
        
  }
}