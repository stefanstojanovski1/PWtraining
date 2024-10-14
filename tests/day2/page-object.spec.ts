import { test, expect } from '@playwright/test';
import * as fs from 'fs';
const data1 = JSON.parse(fs.readFileSync('tests/fixtures/user.json',"utf-8"));
//const login = JSON.parse(fs.readFileSync('tests/fixtures/locators/login.json',"utf-8")).login;
import { SaucedemoPage } from './saucedemo-page';

  test('test with page object', async ({ page }) => {
    const saucedemoaucedemoPage = new SaucedemoPage(page);
    await saucedemoaucedemoPage.goto();
    await saucedemoaucedemoPage.typeUsername(data1.username);
    await saucedemoaucedemoPage.typePassword(data1.password);
    await saucedemoaucedemoPage.clickLogin();
    await expect(page.locator('[data-test="title"]')).toContainText("Products");
  });

  