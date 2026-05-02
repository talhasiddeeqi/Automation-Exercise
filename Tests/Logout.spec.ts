import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { RegisterPage } from '../Pages/RegisterPage';
import { TestConfig } from '../test.config';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { LoginPage } from '../Pages/LoginPage';
import { LogoutPage } from '../Pages/LogoutPage';

let homePage: HomePage;
let testConfig: TestConfig;
let registerPage: RegisterPage;
let loginPage: LoginPage;
let logoutPage: LogoutPage;
let randomData: RandomDataUtil;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    testConfig = new TestConfig();
    registerPage = new RegisterPage(page);
    loginPage = new LoginPage(page);
    logoutPage = new LogoutPage(page);
    await page.goto(testConfig.appUrl);
    await homePage.loginOrSignupButton.click();
    await loginPage.LoginUser(testConfig.email, testConfig.password);
    await loginPage.SubmitLogin();
});

test('LogoutPage',async({page})=>{

await logoutPage.logout();
expect(page.textContent("a:has-text('Signup / Login')")).toBeTruthy();
console.log("Signup / Login is visible");



});