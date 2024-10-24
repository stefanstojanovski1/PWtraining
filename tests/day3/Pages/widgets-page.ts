import { expect, type Locator, type Page } from '@playwright/test';

export class WidgetsPage {
  readonly page: Page;
  readonly widgetsButton: Locator;
  readonly autoCompleteButton: Locator;
  readonly locateContainer: Locator;
  //readonly fillContainer: Locator;
  readonly fillSingleContainer: Locator;
  readonly fillSingleInput: Locator;
  readonly colorOptionRed: Locator;

  constructor(page: Page) {
    this.page = page;
    this.widgetsButton = this.page.locator('text=Widgets');
    this.autoCompleteButton = this.page.locator('text=Auto Complete');
    this.locateContainer = page.locator('.auto-complete__value-container');
    //this.fillContainer = this.page.locator('#autoCompleteMultipleInput');
    this.fillSingleContainer = this.page.locator('#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container');
    this.fillSingleInput = this.page.locator('#autoCompleteSingleInput');
    this.colorOptionRed = this.page.getByText('Red', { exact: true });

  }

  async navigateToForm() {
    await this.page.goto('https://demoqa.com/');
    await this.page.locator('svg').first().click();
    await this.widgetsButton.click();
    await this.autoCompleteButton.click();
  }
  async fillMultipleColrs(color: string){ //async fillMultipleColrs(color: string){
  await this.locateContainer.first().click();
  await this.page.locator('#autoCompleteMultipleInput').fill(color);  
 

  await this.page.getByText(color, { exact: true }).press;
  await this.page.locator('#autoCompleteMultipleInput').fill('green');
  await this.page.getByText('Green', { exact: true }).click();
  }
  async fillSingleColor() {
    await this.fillSingleContainer.click();
    await this.fillSingleInput.fill('red');
  }

  async checkIfColorCorrect() {
    await this.colorOptionRed.click();
  }
}

 //await this.fillContainer.fill(color); 
   //const clickOnColor = this.page.getByText(color, { exact: true });
  //await clickOnColor.first().click();