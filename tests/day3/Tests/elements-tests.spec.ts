// textBoxTest.spec.ts
import { test, expect } from '@playwright/test';
import { elemepntsPage } from '../Pages/elements-page';

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

test('Test Buttons @smoke', async ({ page }) => {
  const elements = new elemepntsPage(page);
  await elements.navigateToButtons();
  await elements.buttonsElements();
  await expect(page.locator('#doubleClickMessage')).toContainText('You have done a double click');

});


test('Test Web tables', async ({ page }) => {
  const elements = new elemepntsPage(page);
  await elements.navigateToRadioWebTables();
  await elements.webTablesFill('100000');
  await expect(page.getByRole('grid')).toContainText('100000')

});


test('Test new tab', async ({ page }) => {
 const elements = new elemepntsPage(page);
 await elements.navUrl();
 await elements.clickSvg();
 await elements.clickLinks();
  await elements.clickHomeAndWaitForPopup();
  const page1 = await elements.clickHomeAndWaitForPopup(); 
  await expect(page1).toHaveURL('https://demoqa.com/');



});
});


