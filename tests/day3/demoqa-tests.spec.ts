// textBoxTest.spec.ts
import { test, expect } from '@playwright/test';
import { TextBoxPage } from './demoqa-page';

test.describe("Demo QA test", () => {
  test('Test Text Box', async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    
    await textBoxPage.navigateToTextBox();
    await textBoxPage.fillForm('Stefan Stojanovski', 'stefan.nb@hotmail.com', 'Niko Fundali', 'Niko Bitola');
    await textBoxPage.submit();
  });


test('Test Check box', async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);
  await textBoxPage.navigateToCheckBox();
  await textBoxPage.togglesClicks();


test('test radio button', async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);
  await textBoxPage.navigateToTextBox();
  await page.getByText('Radio Button').click();
  await page.getByText('Impressive').click();
});

});
});
