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
  readonly tabsLocator: Locator;
  readonly paragraphLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.widgetsButton = this.page.locator('text=Widgets');
    this.autoCompleteButton = this.page.locator('text=Auto Complete');
    this.locateContainer = page.locator('.auto-complete__value-container');
    //this.fillContainer = this.page.locator('#autoCompleteMultipleInput');
    this.fillSingleContainer = this.page.locator('#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container');
    this.fillSingleInput = this.page.locator('#autoCompleteSingleInput');
    
    this.tabsLocator = page.locator('li').filter({ hasText: 'Tabs' });
    this.paragraphLocator = page.getByRole('paragraph');
    
  

  }

  async navigateToForm() {
    await this.page.goto('https://demoqa.com/');
    await this.page.locator('svg').first().click();
    await this.widgetsButton.click();
    
  }
  async navigateToAutoComplete(){
    await this.tabsLocator.click();
    await expect(this.page.getByRole('paragraph')).toContainText('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');
    await this.page.getByRole('tab', { name: 'Use' }).click();
    await expect(this.page.getByRole('paragraph')).toContainText('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).');
  
  }

async navigateToAutoTabs(){
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