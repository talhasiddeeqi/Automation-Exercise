
import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { RegisterPage } from '../Pages/RegisterPage';
import { TestConfig } from '../test.config';
import { RandomDataUtil } from '../utils/randomDataGenerator';

let homePage: HomePage;
let testConfig: TestConfig;
let registerPage: RegisterPage;
let randomData: RandomDataUtil;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    testConfig = new TestConfig();
    registerPage = new RegisterPage(page);
    await page.goto(testConfig.appUrl);
});

test('RegisterPage',async({page})=>{

    let name = RandomDataUtil.getFirstName();

await registerPage.LoginorSignup();
expect(await registerPage.isRegisterPageExists()).toBeTruthy();
expect(page.textContent("h2:has-text('New User Signup!')")).toBeTruthy();
console.log("New User Signup! is visible");
await registerPage.RegisterUser(name, RandomDataUtil.getEmail());
expect(page.textContent("h2:has-text('Enter Account Information')")).toBeTruthy();
console.log("Enter Account Information is visible");

await registerPage.FillAccountInformation(RandomDataUtil.getPassword(), RandomDataUtil.getRandomDay(), RandomDataUtil.getRandomMonth(), RandomDataUtil.getRandomYear(), true, true);  
//await page.waitForTimeout(5000);

await registerPage.FillAddressInformation(RandomDataUtil.getFirstName(), RandomDataUtil.getlastName(), RandomDataUtil.getCompanyName(), RandomDataUtil.getRandomAddress(), RandomDataUtil.getRandomAddress(), RandomDataUtil.getRandomCountry(), RandomDataUtil.getRandomState(), RandomDataUtil.getRandomCity(), RandomDataUtil.getZipCode(), RandomDataUtil.getPhoneNumber());
//await page.waitForTimeout(5000);

await registerPage.SubmitRegistration();
expect(page.textContent("h2:has-text('Account Created!')")).toBeTruthy();
console.log("Account Created! is visible");

//await page.waitForTimeout(5000);


await registerPage.ContinueAfterRegistration();
expect(page.textContent("a:has-text('Logged in as " + name + "')")).toBeTruthy();
console.log("Logged in as " + name + " is visible");


await registerPage.DeleteAccount();
expect(page.textContent("h2:has-text('Account Deleted!')")).toBeTruthy();
console.log("Account Deleted! is visible");

await registerPage.ContinueAfterDeletion();
expect(page.textContent("a:has-text('Signup / Login')")).toBeTruthy();
console.log("Signup / Login is visible");
}
);  