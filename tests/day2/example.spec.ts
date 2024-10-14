// import { test, expect } from '@playwright/test';

// test.describe("Sucesfull login", ()=>{
// test('test', async ({ page }) => {

//   await page.goto('/');
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
  
//   await expect(page.locator('[data-test="title"]')).toBeVisible();
//   await expect(page.locator('[data-test="title"]')).toContainText('Products');
// });
// });

// test.describe("Invalid credentials", ()=>{
//   test('test', async ({ page }) => {
  
//     await page.goto('/');
//     await page.locator('[data-test="username"]').fill('standard_ussser');
//     await page.locator('[data-test="password"]').fill('secret_sauce');
//     await page.locator('[data-test="login-button"]').click();

//     test('Incorect password', async ({ page }) => {
//       // Implement test for invalid password here
//     });

//   });
//   });
