# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePage.spec.ts >> HomePage
- Location: tests\HomePage.spec.ts:17:5

# Error details

```
Error: page.textContent: Test ended.
Call log:
  - waiting for locator('p:has-text(\'Your shopping cart is empty!\')')

```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | import { HomePage } from '../Pages/HomePage';
  4  | import { TestConfig } from '../test.config';
  5  | import { RandomDataUtil } from '../utils/randomDataGenerator';
  6  | 
  7  | let homePage: HomePage;
  8  | let testConfig: TestConfig;
  9  | 
  10 | test.beforeEach(async ({ page }) => {
  11 |     homePage = new HomePage(page);
  12 |     testConfig = new TestConfig();
  13 |     await page.goto(testConfig.appUrl);
  14 | });
  15 | 
  16 | 
  17 | test('HomePage',async({page})=>{
  18 | expect(await homePage.isHomePageExists()).toBeTruthy();
  19 | 
  20 |  await homePage.SubscribeToNewsletter(RandomDataUtil.getEmail());
  21 |  expect(page.textContent("div:has-text('You have been successfully subscribed!')")).toBeTruthy();
  22 |  console.log("You have been successfully subscribed! is visible in home page");
  23 | 
  24 |  await homePage.cartBtn.click();
> 25 |  expect(page.textContent("p:has-text('Your shopping cart is empty!')")).toBeTruthy();
     |              ^ Error: page.textContent: Test ended.
  26 |  console.log("Your shopping cart is empty! is visible in home page");
  27 | 
  28 |   await homePage.SubscribeToNewsletter(RandomDataUtil.getEmail());
  29 |  expect(page.textContent("div:has-text('You have been successfully subscribed!')")).toBeTruthy();
  30 |  console.log("You have been successfully subscribed! is visible in cart page");
  31 | 
  32 | 
  33 | 
  34 | }
  35 | );  
```