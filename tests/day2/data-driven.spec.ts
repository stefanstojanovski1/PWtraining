import { test, expect } from '@playwright/test';
import * as fs from 'fs';
const login = JSON.parse(fs.readFileSync('tests/fixtures/locators/login.json',"utf-8")).login;
const data1 = JSON.parse(fs.readFileSync('tests/fixtures/usersall.json',"utf-8"));
import { SaucedemoPage } from './saucedemo-page';



test.beforeEach(async ({page}) => {
await page.goto('/');
});

data1.forEach((user) => {

test(`Test data driven ${user.username} ${user.password}`, async ({ page }) => {

    await page.locator('[data-test="username"]').fill(user.username);
    await page.locator('[data-test="password"]').fill(user.password);
    await page.locator('[data-test="login-button"]').click();
    
});

test(`Test page object ${user.username} ${user.password}`, async ({ page }) => {
    const saucedemopageone = new SaucedemoPage(page);
    await saucedemopageone.typeUsername(data1.username)
    await saucedemopageone.typePassword(data1.password)
    await saucedemopageone.clickLogin();

});
});
test.afterEach(async ({ page }) => {
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
