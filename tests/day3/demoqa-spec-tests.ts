import { test, expect } from '@playwright/test';
test.describe("Demo QA test", ()=>{

test('Test new page', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('svg').first().click();
  await page.getByText('Text Box').click();
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('Stefan Stojanovski');
  await page.getByPlaceholder('Full Name').press('Tab');
  await page.getByPlaceholder('name@example.com').fill('stefan.nb@hotmail.com');
  await page.getByPlaceholder('name@example.com').press('Tab');
  await page.getByPlaceholder('Current Address').fill('Niko Fundali');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('Niko Bitola');
  await page.getByRole('button', { name: 'Submit' }).click();
});
});