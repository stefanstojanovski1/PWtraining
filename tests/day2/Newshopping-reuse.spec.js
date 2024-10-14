import { test, expect } from '@playwright/test';
import * as fs from 'fs';
const data1 = JSON.parse(fs.readFileSync('tests/fixtures/user.json',"utf-8"));
//const login = JSON.parse(fs.readFileSync('tests/fixtures/locators/login.json',"utf-8")).login;
import { SaucedemoPage } from './saucedemo-page';

  test('Add multiple products', async ({ page }) => {
    const saucedemoaucedemoPage = new SaucedemoPage(page);
    await saucedemoaucedemoPage.goto();
    await saucedemoaucedemoPage.typeUsername(data1.username);
    await saucedemoaucedemoPage.typePassword(data1.password);
    await saucedemoaucedemoPage.clickLogin();
    await expect(page.locator('[data-test="title"]')).toContainText("Products");
    await saucedemoaucedemoPage.addItemToCart('[data-test="add-to-cart-sauce-labs-backpack"]');
    await saucedemoaucedemoPage.addItemToCart('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    await saucedemoaucedemoPage.proceedToCheckout();
    await saucedemoaucedemoPage.fillCheckoutInformation('Stefan', 'Stojanovski', '7777');
    await saucedemoaucedemoPage.finishCheckout();
    await saucedemoaucedemoPage.backToProducts();
});

test('Add one prduct', async ({ page }) => {
    const saucedemoaucedemoPage = new SaucedemoPage(page);
    await saucedemoaucedemoPage.goto();
    await saucedemoaucedemoPage.typeUsername(data1.username);
    await saucedemoaucedemoPage.typePassword(data1.password);
    await saucedemoaucedemoPage.clickLogin();
    await expect(page.locator('[data-test="title"]')).toContainText("Products");
    await saucedemoaucedemoPage.addItemToCart('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    await saucedemoaucedemoPage.proceedToCheckout();
    await saucedemoaucedemoPage.fillCheckoutInformation('Darko', 'Stojanovski', '7777');
    await saucedemoaucedemoPage.finishCheckout();
    await saucedemoaucedemoPage.backToProducts();
});

  
