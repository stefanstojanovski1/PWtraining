// textBoxTest.spec.ts
import { test, expect } from '@playwright/test';
import { elemepntsPage } from './demoqa-page';

test.describe("Elements Tests", () => {
  test('Test Text Box', async ({ page }) => {
    const elements = new elemepntsPage(page);
    
    await elements.navigateToTextBox();
    await elements.fillForm('Stefan Stojanovski', 'stefan.nb@hotmail.com', 'Niko Fundali', 'Niko Bitola');
    await elements.submit();
  });


test('Test Check box', async ({ page }) => {
  const elements = new elemepntsPage(page);
  await elements.navigateToCheckBox();
  await elements.togglesClicks();
});

test('Test Radio button', async ({ page }) => {
  const elements = new elemepntsPage(page);
  await elements.navigateToRadioButton();
  await elements.impressiveClick();
});

test('Test Buttons', async ({ page }) => {
  const elements = new elemepntsPage(page);
  await elements.navigateToButtons();
  await elements.buttonsElements();
  await expect(page.locator('#doubleClickMessage')).toContainText('You have done a double click');

});

});
