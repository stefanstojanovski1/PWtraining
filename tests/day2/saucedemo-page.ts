import { expect, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs';

const userData = JSON.parse(fs.readFileSync('tests/fixtures/user.json', "utf-8"));
const locators = JSON.parse(fs.readFileSync('tests/fixtures/locators/login.json', "utf-8")).login;

export class SaucedemoPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator(locators.username);
        this.password = page.locator(locators.password);
        this.loginButton = page.locator(locators.loginButton);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async typeUsername(user: string) {
        await this.username.fill(user);
    }

    async typePassword(pass: string) {
        await this.password.fill(pass);
    }

    async clickLogin() {
        await this.loginButton.click();
        await expect(this.page.locator('[data-test="title"]')).toContainText("Products");
    }

    async login(username: string, password: string) {
        await this.typeUsername(username);
        await this.typePassword(password);
        await this.clickLogin();
    }

    async addItemToCart(itemLocator: string) {
        await this.page.locator(itemLocator).click();
    }

    async addMultipleItemsToCart(itemLocators: string[]) {
        for (const itemLocator of itemLocators) {
            await this.addItemToCart(itemLocator);
        }
    }

    async proceedToCheckout(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator('[data-test="shopping-cart-link"]').click();
        await this.page.locator('[data-test="checkout"]').click();
        await this.fillCheckoutInformation(firstName, lastName, postalCode);
        await this.finishCheckout();
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator('[data-test="firstName"]').fill(firstName);
        await this.page.locator('[data-test="lastName"]').fill(lastName);
        await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    }

    async finishCheckout() {
        await this.page.locator('[data-test="continue"]').click();
        await this.page.locator('[data-test="finish"]').click();
    }

    async backToProducts() {
        await this.page.locator('[data-test="back-to-products"]').click();
    }
}


// import { expect, type Locator, type Page } from '@playwright/test';
// import * as fs from 'fs';
// const data1 = JSON.parse(fs.readFileSync('tests/fixtures/user.json',"utf-8"));
// const login = JSON.parse(fs.readFileSync('tests/fixtures/locators/login.json',"utf-8")).login;

// export class SaucedemoPage {
//     readonly page: Page;
//     readonly username: Locator;
//     readonly password: Locator;
//     readonly login: Locator;


//     constructor(page: Page) {
//         this.page = page;
//         this.username = page.locator(login.username);
//         this.password= page.locator(login.password);
//         this.login = page.locator(login.loginButton);
//       }

//       async goto() {
//         await this.page.goto('/');
//       }
    
//       async typeUsername(user) {
//         await this.username.fill(user);
//       }

//       async typePassword(pass){
//         await this.password.fill(pass);
//       }

//       async clickLogin(){
//         await this.login.click();
//     }
//     async addItemToCart(itemLocator) {
//         await this.page.locator(itemLocator).click();
//     }

//     async proceedToCheckout() {
//         await this.page.locator('[data-test="shopping-cart-link"]').click();
//         await this.page.locator('[data-test="checkout"]').click();
//     }

//     async fillCheckoutInformation(firstName, lastName, postalCode) {
//         await this.page.locator('[data-test="firstName"]').fill(firstName);
//         await this.page.locator('[data-test="lastName"]').fill(lastName);
//         await this.page.locator('[data-test="postalCode"]').fill(postalCode);
//     }

//     async finishCheckout() {
//         await this.page.locator('[data-test="continue"]').click();
//         await this.page.locator('[data-test="finish"]').click();
//     }

//     async backToProducts() {
//         await this.page.locator('[data-test="back-to-products"]').click();
//     }
// }



