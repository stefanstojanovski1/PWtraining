// TextBoxPage.ts
import { Page } from '@playwright/test';

const locators = require('./locators.json');


export class elemepntsPage {
    readonly page: Page;
    readonly locators: any;
    readonly checkBoxLocators: any;
    readonly toggleClicks: any;
    readonly documentToggle: any;
    readonly impressive: any;
    readonly doubleClickButton: any;
    readonly webTableNavigate: any;
    readonly salaryClick: any;
    readonly salaryButton: any;
    readonly salaryGrid: any;
  
  
    constructor(page: Page) {
      this.page = page;
      this.locators = locators.textBoxPage;
      this.checkBoxLocators = locators.checkBoxPage;
      this.toggleClicks = locators.toggleClicks;
      this.documentToggle = locators.toggleClicks.documentToggle;
      this.impressive = page.getByText('Impressive');
      this.doubleClickButton = page.getByRole('button', { name: 'Double Click Me' });
      this.webTableNavigate = page.locator('#edit-record-1 path');
      this.salaryClick = page.getByPlaceholder('Salary');
      this.salaryButton = page.getByRole('button', { name: 'Submit' });
    
      
      
    }

    private async navigateToSection(sectionName: string) {
      await this.page.goto('https://demoqa.com/');
      await this.page.locator('svg').first().click();
      await this.page.getByText(sectionName).click();
  }

  async navigateToTextBox() {
      await this.navigateToSection('Text Box');
  }

  async navigateToCheckBox() {
      await this.navigateToSection('Check Box');
  }

  async navigateToRadioButton() {
      await this.navigateToSection('Radio Button');
  }
  
  async navigateToRadioWebTables() {
    await this.navigateToSection('Web Tables');
}

  async navigateToButtons() {
      await this.page.goto('https://demoqa.com/');
      await this.page.locator('path').first().click();
      await this.page.locator('li').filter({ hasText: 'Buttons' }).click();
  }

  async getImpressiveText() {
      return this.page.getByText('Impressive');
  }

  async getDoubleClickButton() {
      return this.page.getByRole('button', { name: 'Double Click Me' });
  }

  // // async navigateToLinks(){
  // //   await this.page.goto('https://demoqa.com/');
  // //   await this.page.locator('svg').first().click();
  // //   await this.page.getByText('Links', { exact: true }).click();
    
  // }
  async navUrl() {
    await this.page.goto('https://demoqa.com/');
}

async clickSvg() {
    await this.page.locator('svg').first().click();
}

async clickLinks() {
    await this.page.getByText('Links', { exact: true }).click();
}
  async clickHomeAndWaitForPopup(){
    const page1Promise = this.page.waitForEvent('popup');
  await this.page.getByRole('link', { name: 'Home', exact: true }).click();
  const page1 = await page1Promise;
  return page1;
  
  }
//   async navigateToTextBox() {
//     await this.page.goto('https://demoqa.com/');
//     await this.page.locator('svg').first().click();
//     await this.page.getByText('Text Box').click();
//   }
//   async navigateToCheckBox() {
//   await this.page.goto('https://demoqa.com/');
//   await this.page.locator('svg').first().click();
//   await this.page.getByText('Check Box').click();
// }
// async navigateToRadioButton() {
//   await this.page.goto('https://demoqa.com/');
//   await this.page.locator('svg').first().click();
//   await this.page.getByText('Radio Button').click();
// }
//   async navigateToButtons(){
//     await this.page.goto('https://demoqa.com/');
//     await this.page.locator('path').first().click();
//     await this.page.locator('li').filter({ hasText: 'Buttons' }).click();
   

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
  // await this.page.locator('li').filter({ hasText: this.toggleClicks.documentToggle.text }).getByLabel(this.toggleClicks.documentToggle.label).first().click();
  // //   await this.page.locator('li').filter({ hasText: /^WorkSpace$/ }).getByLabel('Toggle').click();
  // //   await this.page.locator('label').filter({ hasText: 'WorkSpace' }).getByRole('img').first().click();
  // //   await this.page.locator('li').filter({ hasText: /^WorkSpace$/ }).getByLabel('Toggle').click();
    
    await this.page.getByLabel('Toggle').click();
    await this.page.locator('li').filter({ hasText: /^Documents$/ }).getByLabel('Toggle').click();
    await this.page.locator('label').filter({ hasText: 'WorkSpace' }).getByRole('img').first().click();
    await this.page.locator('li').filter({ hasText: /^WorkSpace$/ }).getByLabel('Toggle').click();
        
  }
 async impressiveClick(){
   await this.impressive.click();
 }
 async buttonsElements(){
  await this.doubleClickButton.dblclick();
} 
private getSalaryGrid(salary: string) {
  return this.page.getByRole('gridcell', { name: salary });
}
async webTablesFill(salary: string){
await this.webTableNavigate.click();
await this.salaryClick.click();
await this.salaryClick.fill(salary);
await this.salaryButton.click();
const salaryGrid = this.getSalaryGrid(salary);
await salaryGrid.click();

}
}