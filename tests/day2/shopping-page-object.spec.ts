import { test, expect } from '@playwright/test';
import * as fs from 'fs';
const data1 = JSON.parse(fs.readFileSync('tests/fixtures/user.json',"utf-8"));
//const login = JSON.parse(fs.readFileSync('tests/fixtures/locators/login.json',"utf-8")).login;
import { SaucedemoPage } from './saucedemo-page';

  test('test with page object', async ({ page }) => {
    const saucedemoaucedemoPage = new SaucedemoPage(page);
    //login to the page
    await saucedemoaucedemoPage.goto();
    await saucedemoaucedemoPage.typeUsername(data1.username);
    await saucedemoaucedemoPage.typePassword(data1.password);
    await saucedemoaucedemoPage.clickLogin();
    await expect(page.locator('[data-test="title"]')).toContainText("Products");

    //add the item to the cart and finich the shopping
    await saucedemoaucedemoPage.addItemToCart('[data-test="add-to-cart-sauce-labs-backpack"]');
    await saucedemoaucedemoPage.addItemToCart('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    await saucedemoaucedemoPage.proceedToCheckout();
    await saucedemoaucedemoPage.fillCheckoutInformation('Stefan', 'Stojanovski', '7777');
    await saucedemoaucedemoPage.finishCheckout();
    await saucedemoaucedemoPage.backToProducts();
});

    // await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    // await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    // await page.locator('[data-test="shopping-cart-link"]').click();
    // await page.locator('[data-test="checkout"]').click();
    // await page.locator('[data-test="firstName"]').click();
    // await page.locator('[data-test="firstName"]').fill('ssss');
    // await page.locator('[data-test="lastName"]').click();
    // await page.locator('[data-test="lastName"]').fill('tttt');
    // await page.locator('[data-test="postalCode"]').click();
    // await page.locator('[data-test="postalCode"]').fill('7777');
    // await page.locator('[data-test="continue"]').click();
    // await page.locator('[data-test="finish"]').click();
    // await page.locator('[data-test="back-to-products"]').click();
  

