import { test, expect } from '@playwright/test';
import { DialogPage } from '../Pages/dialog-page';

test('Accept dialog in Modal Dialog', async ({ page }) => {
  const dialogPage = new DialogPage(page);
  
  await dialogPage.navigateToModalDialogs();
  await dialogPage.openSmallModal();
  await expect(dialogPage.smallModalTitle).toContainText('Small Modal');
  await dialogPage.acceptDialog();
  await dialogPage.closeSmallModal();
});

test('Dismiss dialog in Modal Dialog', async ({ page }) => {
    const dialogPage = new DialogPage(page);
    
    await dialogPage.navigateToModalDialogs();
    await dialogPage.openSmallModal();
    await expect(dialogPage.smallModalTitle).toContainText('Small Modal');
    await dialogPage.dismissDialog();
    await dialogPage.closeSmallModal();
  });
