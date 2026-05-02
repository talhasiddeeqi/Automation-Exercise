# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Registration.spec.ts >> RegisterPage with existing email
- Location: tests\Registration.spec.ts:79:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('a:has-text("Logout")')

```

# Test source

```ts
  1  | import { Page, expect, Locator } from '@playwright/test';
  2  | 
  3  | export class LogoutPage {
  4  |         // Locators
  5  |     readonly page: Page;
  6  |     readonly logoutButton: Locator;
  7  | 
  8  |     
  9  | 
  10 | 
  11 |   
  12 | 
  13 |     constructor(page: Page) {
  14 |         // Initialize locators
  15 |         this.page = page;
  16 |         this.logoutButton = page.locator('a:has-text("Logout")');
  17 | 
  18 | 
  19 |     }
  20 | 
  21 |     // Actions
  22 |     // Check if LoginPage exists
  23 |     async logout(){
> 24 |         await this.logoutButton.click();
     |                                 ^ Error: locator.click: Target page, context or browser has been closed
  25 |     }
  26 | 
  27 |     
  28 | 
  29 | 
  30 | }
```