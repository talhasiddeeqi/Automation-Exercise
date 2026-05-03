# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.ts >> Changed Quantity
- Location: tests\Cart.spec.ts:61:6

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#quantity')

```

# Test source

```ts
  1  | import { Page, expect, Locator } from '@playwright/test';
  2  | import { HomePage } from './HomePage';
  3  | 
  4  | export class ProductPage {
  5  |         // Locators
  6  |     readonly page: Page;
  7  |     readonly viewProductBtn: Locator;
  8  |     readonly productDetails: Locator;
  9  |     readonly searchBox: Locator;
  10 |     readonly searchButton: Locator;
  11 |     readonly searchedProducts: Locator;
  12 |     readonly addToCartBtn1: Locator;
  13 |     readonly addToCartBtn2: Locator;
  14 |     readonly continueshoppingBtn: Locator;
  15 |     readonly quantityBox: Locator;
  16 |     readonly addToCartviewproductpageBtn: Locator;
  17 | 
  18 | 
  19 |     
  20 | 
  21 | 
  22 |   
  23 | 
  24 |     constructor(page: Page) {
  25 |         // Initialize locators
  26 |         this.page = page;
  27 |         this.viewProductBtn = page.locator('a').filter({ hasText: 'View Product' }).first();
  28 |         this.productDetails = page.locator('.product-details');
  29 |         this.searchBox = page.locator('#search_product');
  30 |         this.searchButton = page.locator('#submit_search');
  31 |         this.searchedProducts = page.locator('div.product-overlay');
  32 |         this.addToCartBtn1 = page.getByText('Add to cart').nth(0);
  33 |         this.addToCartBtn2 = page.getByText('Add to cart').nth(2);
  34 |         this.continueshoppingBtn = page.getByText('Continue Shopping');
  35 |         this.quantityBox = page.locator('#quantity');
  36 |         this.addToCartviewproductpageBtn = page.getByText('Add to cart');
  37 | 
  38 |     }
  39 | 
  40 |     // Actions
  41 |     // Check if ProductPage exists
  42 |     async isProductPageExists(){
  43 |         let title:string = await this.page.title();
  44 |         if(title=="Automation Exercise - All Products")
  45 |         {
  46 |             console.log("Products page is displayed");
  47 |             return true;
  48 |         }
  49 |         return false;
  50 |     }
  51 | 
  52 | 
  53 |     async ViewFirstProduct() {
  54 |         await this.viewProductBtn.click();
  55 | 
  56 |     }
  57 | 
  58 | 
  59 | 
  60 |     async IsProductDetailsDisplayed() {
  61 |         return await this.productDetails.isVisible();
  62 |     }
  63 | 
  64 | 
  65 |     async SearchProduct(productName: string) {
  66 |         await this.searchBox.fill(productName);
  67 |         await this.searchButton.click();
  68 |     }
  69 | 
  70 | 
  71 |     async addProductToCart() {
  72 |         await this.addToCartBtn1.click();
  73 |         await this.continueshoppingBtn.click();
  74 |         await this.addToCartBtn2.click();
  75 |         await this.continueshoppingBtn.click();
  76 | 
  77 |     }
  78 | 
  79 |     async setProductQuantity(quantity: string) {
> 80 |         await this.quantityBox.fill(quantity);
     |                                ^ Error: locator.fill: Target page, context or browser has been closed
  81 |         await this.addToCartviewproductpageBtn.click();
  82 |         await this.continueshoppingBtn.click();
  83 |     }
  84 | 
  85 |     
  86 | 
  87 | 
  88 | 
  89 | }
```