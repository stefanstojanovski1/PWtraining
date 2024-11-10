import { test, expect } from '@playwright/test';
import { alertsPage } from '../Pages/alerts-page';

test('New tab test', async ({ page }) => {

const form = new alertsPage(page);

  await form.navigateToForm();
  await form.verifyPopupText();
  
  
});

test('Test alert with click button', async ({ page }) => {
  const form = new alertsPage(page);
  await form.navigateToAlertWindows();
  await form.alertsClick();
  await form.alertButtonClick();

  

});
