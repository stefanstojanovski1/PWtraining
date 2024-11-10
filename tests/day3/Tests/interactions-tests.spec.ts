import { test, expect } from '@playwright/test';
import { InteractionsPage } from '../Pages/interactions-page';

test('Sortable list items test', async ({ page }) => {
  const interactionsPage = new InteractionsPage(page);
  
  await interactionsPage.navigateToInteractions();
  await interactionsPage.verifySortableListContents();
});


test('Resize box test', async ({ page }) => {
    const interactionsPage = new InteractionsPage(page);
  
    await interactionsPage.navigateToResizableBox();
    await interactionsPage.resizeBox(50, 30);

});

test('Selecttable test', async ({ page }) => {
    const interactionsPage = new InteractionsPage(page);
  
    await interactionsPage.navigateToSelectable();
    await interactionsPage.selectListItems();
    await interactionsPage.selectGridItems();
});