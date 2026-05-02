import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { RegisterPage } from '../Pages/RegisterPage';
import { TestConfig } from '../test.config';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { LoginPage } from '../Pages/LoginPage';

let homePage: HomePage;
let testConfig: TestConfig;
let registerPage: RegisterPage;
let loginPage: LoginPage;
let randomData: RandomDataUtil;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    testConfig = new TestConfig();
    registerPage = new RegisterPage(page);
    loginPage = new LoginPage(page);
    await page.goto(testConfig.appUrl);
    await homePage.loginOrSignupButton.click();
});

test('LoginPage',async({page})=>{
    await expect(page.locator("h2:has-text('Login to your account')")).toBeVisible();
    console.log("Login to your account is visible");
    await loginPage.LoginUser(testConfig.email, testConfig.password);

    await loginPage.SubmitLogin();
    expect(page.textContent("a:has-text('Logged in as " + testConfig.name + "')")).toBeTruthy();
    console.log("Logged in as " + testConfig.name + " is visible");


    await registerPage.DeleteAccount();
    expect(page.textContent("h2:has-text('Account Deleted!')")).toBeTruthy();
    console.log("Account Deleted! is visible");

    

});