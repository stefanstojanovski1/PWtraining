import { test, expect } from '@playwright/test';

test.describe("Test suite for login the user", ()=>{

test.beforeEach(async ({page}) => {
await page.goto('/');
});

test.describe("Username tests", ()=>{

test('Login with valid username', async ({ page }) => {
    
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    
});
test('Login with invalid username', async ({ page }) => {
    
    await page.locator('[data-test="username"]').fill('standa1fafer');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
   
});
test('Login with empty username', async ({ page }) => {
    
    await page.locator('[data-test="username"]').fill('');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
   
});
});

test.describe("Password tests", ()=>{

test('Correct password', async ({ page }) => {
    
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
  
});
test('Invalid password ', async ({ page }) => {
    
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_saugegeece');
    await page.locator('[data-test="login-button"]').click();
    
});
    

  });
  test.afterEach(async ({ page }) => {
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
});
  

//await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');