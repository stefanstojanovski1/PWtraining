import { test, expect } from '@playwright/test';
import { WidgetsPage } from '../Pages/widgets-page';

test('Widget test', async ({ page }) => {

const form = new WidgetsPage(page);

  await form.navigateToForm();
  await form.navigateToAutoComplete();
  await form.fillMultipleColrs('Black');
  await form.fillSingleColor();
 // await form.fillMultipleColrs();
  await form.fillSingleColor();
  await form.checkIfColorCorrect();
  await expect(page.locator('#autoCompleteSingleContainer')).toContainText('Red');
});

test('Tabs test', async ({ page }) => {

  const form = new WidgetsPage(page);
  
    await form.navigateToForm();
    await form.navigateToAutoTabs();
  
  });

  test('Select menu test', async ({ page }) => {

    const form = new WidgetsPage(page);
    await form.navigateToForm();
 
    await form.navigateToSelectMenu();
    await form.selectOptionFromOptGroup();
    await form.selectOptionFromSelectOne();
    await form.selectMultipleOptions();
    
});
  


     
