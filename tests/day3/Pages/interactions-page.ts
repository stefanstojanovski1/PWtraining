import { expect, Locator, Page } from '@playwright/test';

export class InteractionsPage {
  readonly page: Page;
  readonly interactionsButton: Locator;
  readonly sortableList: Locator;
  readonly resizableLink: Locator;
  readonly resizeHandle: Locator;
  readonly resizableBox: Locator;
  readonly selectableLink: Locator;
  readonly listItem1: Locator;
  readonly listItem2: Locator;
  readonly gridTab: Locator;
  readonly gridItem5: Locator;
  readonly gridItem8: Locator;

  constructor(page: Page) {
    this.page = page;
    this.interactionsButton = page.getByText('Interactions');
    this.sortableList = page.getByLabel('List');
    this.resizableLink = page.getByText('Resizable');
    this.resizeHandle = page.locator('#resizableBoxWithRestriction span');
    this.resizableBox = page.locator('#resizableBoxWithRestriction');
    this.selectableLink = page.locator('li').filter({ hasText: 'Selectable' });
    this.listItem1 = page.getByText('Cras justo odio');
    this.listItem2 = page.getByText('Dapibus ac facilisis in');
    this.gridTab = page.getByRole('tab', { name: 'Grid' });
    this.gridItem5 = page.getByText('Five');
    this.gridItem8 = page.getByText('Eight');
  }

  async navigateToInteractions() {
    await this.page.goto('https://demoqa.com/');
    await this.page.locator('svg').first().click();
    await this.interactionsButton.click();
    await this.page.locator('li').filter({ hasText: 'Sortable' }).click();
  }

  async verifySortableListContents() {
    const expectedItems = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
    for (const item of expectedItems) {
      await expect(this.sortableList).toContainText(item);
    }
  }
  async navigateToResizableBox() {
    await this.page.goto('https://demoqa.com/');
    await this.interactionsButton.click();
    await this.resizableLink.click();
  }

  async resizeBox(offsetX: number, offsetY: number) {
    const initialBoxSize = await this.resizableBox.boundingBox();

    if (initialBoxSize) {
      await this.page.mouse.move(
        initialBoxSize.x + initialBoxSize.width,
        initialBoxSize.y + initialBoxSize.height
      );
      await this.page.mouse.down();

      await this.page.mouse.move(
        initialBoxSize.x + initialBoxSize.width + offsetX,
        initialBoxSize.y + initialBoxSize.height + offsetY
      );

      await this.page.mouse.up();
    }
    
  }
  async navigateToSelectable() {
    await this.page.goto('https://demoqa.com/');
    await this.interactionsButton.click();
    await this.selectableLink.click();
  }

  async selectListItems() {
    await this.listItem1.click();
    await this.listItem2.click();
  }

  async selectGridItems() {
    await this.gridTab.click();
    await this.gridItem5.click();
    await this.gridItem8.click();
  }
 
  
}
