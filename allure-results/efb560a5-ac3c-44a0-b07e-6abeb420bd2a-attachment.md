# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Registration.spec.ts >> RegisterPage
- Location: tests\Registration.spec.ts:34:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | import { HomePage } from '../Pages/HomePage';
  4  | import { RegisterPage } from '../Pages/RegisterPage';
  5  | import { TestConfig } from '../test.config';
  6  | import { RandomDataUtil } from '../utils/randomDataGenerator';
  7  | import { LoginPage } from '../Pages/LoginPage';
  8  | import { LogoutPage } from '../Pages/LogoutPage';   
  9  | 
  10 | let homePage: HomePage;
  11 | let testConfig: TestConfig;
  12 | let registerPage: RegisterPage;
  13 | let loginPage: LoginPage;
  14 | let logoutPage: LogoutPage;
  15 | 
  16 | 
  17 |     let name = RandomDataUtil.getFirstName();
  18 |     let email = RandomDataUtil.getEmail();
  19 |     let password = RandomDataUtil.getPassword();
  20 | 
  21 | test.beforeEach(async ({ page }) => {
  22 |     homePage = new HomePage(page);
  23 |     testConfig = new TestConfig();
  24 |     registerPage = new RegisterPage(page);
  25 |     loginPage = new LoginPage(page);
  26 |     logoutPage = new LogoutPage(page);
> 27 |     await page.goto(testConfig.appUrl);
     |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  28 | });
  29 | test.afterEach(async ({ page }) => {
  30 |     //await logoutPage.logout();
  31 |     await page.close();
  32 | });
  33 | 
  34 | test('RegisterPage',async({page})=>{
  35 | 
  36 | 
  37 | 
  38 | await registerPage.LoginorSignup();
  39 | expect(await registerPage.isRegisterPageExists()).toBeTruthy();
  40 | expect(page.textContent("h2:has-text('New User Signup!')")).toBeTruthy();
  41 | console.log("New User Signup! is visible");
  42 | await registerPage.RegisterUser(name, email);
  43 | expect(page.textContent("h2:has-text('Enter Account Information')")).toBeTruthy();
  44 | console.log("Enter Account Information is visible");
  45 | 
  46 | await registerPage.FillAccountInformation(password, RandomDataUtil.getRandomDay(), RandomDataUtil.getRandomMonth(), RandomDataUtil.getRandomYear(), true, true);  
  47 | //await page.waitForTimeout(5000);
  48 | 
  49 | await registerPage.FillAddressInformation(RandomDataUtil.getFirstName(), RandomDataUtil.getlastName(), RandomDataUtil.getCompanyName(), RandomDataUtil.getRandomAddress(), RandomDataUtil.getRandomAddress(), RandomDataUtil.getRandomCountry(), RandomDataUtil.getRandomState(), RandomDataUtil.getRandomCity(), RandomDataUtil.getZipCode(), RandomDataUtil.getPhoneNumber());
  50 | //await page.waitForTimeout(5000);
  51 | 
  52 | await registerPage.SubmitRegistration();
  53 | expect(page.textContent("h2:has-text('Account Created!')")).toBeTruthy();
  54 | console.log("Account Created! is visible");
  55 | console.log("Registered user: " + name + " with email: " + email + " and password: " + password);
  56 | 
  57 | //await page.waitForTimeout(5000);
  58 | 
  59 | 
  60 | await registerPage.ContinueAfterRegistration();
  61 | expect(page.textContent("a:has-text('Logged in as " + name + "')")).toBeTruthy();
  62 | console.log("Logged in as " + name + " is visible");
  63 | /*
  64 | await registerPage.DeleteAccount();
  65 | expect(page.textContent("h2:has-text('Account Deleted!')")).toBeTruthy();
  66 | console.log("Account Deleted! is visible");
  67 | 
  68 | 
  69 | await registerPage.ContinueAfterDeletion();
  70 | expect(page.textContent("a:has-text('Signup / Login')")).toBeTruthy();
  71 | console.log("Signup / Login is visible");
  72 | */
  73 | }
  74 | 
  75 | 
  76 | );  
  77 | 
  78 | 
  79 | test('RegisterPage with existing email',async({page})=>{
  80 | 
  81 | await registerPage.LoginorSignup();
  82 | expect(await registerPage.isRegisterPageExists()).toBeTruthy();
  83 | expect(page.textContent("h2:has-text('New User Signup!')")).toBeTruthy();
  84 | console.log("New User Signup! is visible");
  85 | await registerPage.RegisterUser(name,email);
  86 | expect(page.textContent("p:has-text('Email Address already exist!')")).toBeTruthy();
  87 | console.log("Email Address already exist! is visible");
  88 | 
  89 | 
  90 | 
  91 | });
```