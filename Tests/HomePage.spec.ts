
import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { TestConfig } from '../test.config';
import { RandomDataUtil } from '../utils/randomDataGenerator';

let homePage: HomePage;
let testConfig: TestConfig;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    testConfig = new TestConfig();
    await page.goto(testConfig.appUrl);
});


test('HomePage',async({page})=>{
expect(await homePage.isHomePageExists()).toBeTruthy();

 await homePage.SubscribeToNewsletter(RandomDataUtil.getEmail());
 expect(page.textContent("div:has-text('You have been successfully subscribed!')")).toBeTruthy();
 console.log("You have been successfully subscribed! is visible in home page");

 await homePage.cartBtn.click();
 expect(page.textContent("p:has-text('Cart is empty!')")).toBeTruthy();
 console.log("Cart is empty! is visible in cart page");

  await homePage.SubscribeToNewsletter(RandomDataUtil.getEmail());
 expect(page.textContent("div:has-text('You have been successfully subscribed!')")).toBeTruthy();
 console.log("You have been successfully subscribed! is visible in cart page");



}
);  