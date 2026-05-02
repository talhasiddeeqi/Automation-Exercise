# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Registration.spec.ts >> RegisterPage
- Location: tests\Registration.spec.ts:18:5

# Error details

```
Error: page.textContent: Test ended.
Call log:
  - waiting for locator('h2:has-text(\'New ser Signup!\')')

```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | import { HomePage } from '../Pages/HomePage';
  4  | import { RegisterPage } from '../Pages/RegisterPage';
  5  | import { TestConfig } from '../test.config';
  6  | 
  7  | let homePage: HomePage;
  8  | let testConfig: TestConfig;
  9  | let registerPage: RegisterPage;
  10 | 
  11 | test.beforeEach(async ({ page }) => {
  12 |     homePage = new HomePage(page);
  13 |     testConfig = new TestConfig();
  14 |     registerPage = new RegisterPage(page);
  15 |     await page.goto(testConfig.appUrl);
  16 | });
  17 | 
  18 | test('RegisterPage',async({page})=>{
  19 | await registerPage.LoginorSignup();
  20 | expect(await registerPage.isRegisterPageExists()).toBeTruthy();
> 21 | expect(page.textContent("h2:has-text('New ser Signup!')")).toBeTruthy();
     |             ^ Error: page.textContent: Test ended.
  22 | }
  23 | );  
```