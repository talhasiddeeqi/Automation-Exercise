
import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { TestConfig } from '../test.config';

let homePage: HomePage;
let testConfig: TestConfig;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    testConfig = new TestConfig();
    await page.goto(testConfig.appUrl);
});


test('HomePage',async({page})=>{
expect(await homePage.isHomePageExists()).toBeTruthy();
}
);  