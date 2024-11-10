import { Page, Locator } from '@playwright/test';

export class DialogPage {
  readonly page: Page;
  readonly alertsAndWindowsLink: Locator;
  readonly modalDialogsLink: Locator;
  readonly smallModalButton: Locator;
  readonly smallModalTitle: Locator;
  readonly closeSmallModalButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.alertsAndWindowsLink = page.getByText('Alerts, Frame & Windows');
    this.modalDialogsLink = page.getByText('Modal Dialogs');
    this.smallModalButton = page.getByRole('button', { name: 'Small modal' });
    this.smallModalTitle = page.locator('#example-modal-sizes-title-sm');
    this.closeSmallModalButton = page.locator('#closeSmallModal');
  }

  async navigateToModalDialogs() {
    await this.page.goto('https://demoqa.com/');
    await this.alertsAndWindowsLink.click();
    await this.modalDialogsLink.click();
  }
  async openSmallModal() {
    await this.smallModalButton.click();
  }


  async closeSmallModal() {
    await this.closeSmallModalButton.click();
  }

  async acceptDialog() {
    this.page.on('dialog', async (dialog) => {
      await dialog.accept();
    });
  }

  async dismissDialog() {
    this.page.on('dialog', async (dialog) => {
      await dialog.dismiss();
    });
  }
}
