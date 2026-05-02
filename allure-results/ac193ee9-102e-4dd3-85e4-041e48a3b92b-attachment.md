# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logout.spec.ts >> LogoutPage
- Location: tests\Logout.spec.ts:28:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { HomePage } from '../Pages/HomePage';
  3  | import { RegisterPage } from '../Pages/RegisterPage';
  4  | import { TestConfig } from '../test.config';
  5  | import { RandomDataUtil } from '../utils/randomDataGenerator';
  6  | import { LoginPage } from '../Pages/LoginPage';
  7  | import { LogoutPage } from '../Pages/LogoutPage';
  8  | 
  9  | let homePage: HomePage;
  10 | let testConfig: TestConfig;
  11 | let registerPage: RegisterPage;
  12 | let loginPage: LoginPage;
  13 | let logoutPage: LogoutPage;
  14 | let randomData: RandomDataUtil;
  15 | 
  16 | test.beforeEach(async ({ page }) => {
  17 |     homePage = new HomePage(page);
  18 |     testConfig = new TestConfig();
  19 |     registerPage = new RegisterPage(page);
  20 |     loginPage = new LoginPage(page);
  21 |     logoutPage = new LogoutPage(page);
> 22 |     await page.goto(testConfig.appUrl);
     |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  23 |     await homePage.loginOrSignupButton.click();
  24 |     await loginPage.LoginUser(testConfig.email, testConfig.password);
  25 |     await loginPage.SubmitLogin();
  26 | });
  27 | 
  28 | test('LogoutPage',async({page})=>{
  29 | 
  30 | await logoutPage.logout();
  31 | expect(page.textContent("a:has-text('Signup / Login')")).toBeTruthy();
  32 | console.log("Signup / Login is visible");
  33 | 
  34 | 
  35 | 
  36 | });
```