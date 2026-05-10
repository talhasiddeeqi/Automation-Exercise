# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout.spec.ts >> Register While Checkout
- Location: tests\Checkout.spec.ts:45:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { HomePage } from '../Pages/HomePage';
  3   | import { TestConfig } from '../test.config';
  4   | import { ContactUsPage } from '../Pages/ContactUsPage';
  5   | import { TestCasePage } from '../Pages/TestCasePage';
  6   | import { CartPage } from '../Pages/CartPage';
  7   | import { ProductPage } from '../Pages/ProductPage';
  8   | import { CheckoutPage } from '../Pages/CheckoutPage';
  9   | import { RegisterPage } from '../Pages/RegisterPage';
  10  | import { PaymentPage } from '../Pages/PaymentPage';
  11  | import { RandomDataUtil } from '../utils/randomDataGenerator';
  12  | 
  13  | 
  14  | let homePage: HomePage;
  15  | let testConfig: TestConfig;
  16  | let checkoutPage: CheckoutPage;
  17  | let contactUsPage: ContactUsPage;
  18  | let testCasePage: TestCasePage;
  19  | let cartPage: CartPage;
  20  | let productPage: ProductPage;
  21  | let registerPage: RegisterPage;
  22  | let paymentPage: PaymentPage;
  23  | 
  24  |     let name = RandomDataUtil.getFirstName();
  25  |     let email = RandomDataUtil.getEmail();
  26  |     let password = RandomDataUtil.getPassword();
  27  | 
  28  | test.beforeEach(async ({ page }) => {
  29  |     homePage = new HomePage(page);
  30  |     testConfig = new TestConfig();
  31  |     checkoutPage = new CheckoutPage(page);
  32  |     contactUsPage = new ContactUsPage(page);
  33  |     testCasePage = new TestCasePage(page);
  34  |     cartPage = new CartPage(page);
  35  |     registerPage = new RegisterPage(page);
  36  |     productPage = new ProductPage(page);
  37  |     paymentPage = new PaymentPage(page);
> 38  |     await page.goto(testConfig.appUrl);
      |                ^ Error: page.goto: Target page, context or browser has been closed
  39  |     expect(page.url()).toBe(testConfig.appUrl);
  40  |     console.log("Navigated to home page successfully");
  41  | 
  42  | 
  43  | });
  44  | 
  45  | test('Register While Checkout', async ({ page }) => {
  46  | 
  47  |     await homePage.productsBtn.click();
  48  |     expect(await productPage.isProductPageExists()).toBeTruthy();
  49  |     await productPage.addProductToCart();
  50  |     console.log("Product added to cart successfully");
  51  | 
  52  |     await homePage.cartBtn.click();
  53  |     expect(page.url()).toContain("/view_cart");
  54  |     expect(await cartPage.isCartPageExists()).toBeTruthy();
  55  |     console.log("Navigated to cart page successfully");
  56  | 
  57  |     await cartPage.proceedToCheckoutBtn.click();
  58  |     expect(page.textContent("p:has-text('Register / Login account to proceed on checkout.')")).toBeTruthy();
  59  |     console.log("Warning to register first is shown");
  60  | 
  61  |     await cartPage.continueoncartBtn.click();
  62  |     await homePage.loginOrSignupButton.click();
  63  |     await registerPage.RegisterUser(name, email);
  64  |     expect(page.textContent("h2:has-text('Enter Account Information')")).toBeTruthy();
  65  |     console.log("Enter Account Information is visible");
  66  |     await registerPage.FillAccountInformation(password, RandomDataUtil.getRandomDay(), RandomDataUtil.getRandomMonth(), RandomDataUtil.getRandomYear(), true, true);
  67  |     await registerPage.FillAddressInformation(RandomDataUtil.getFirstName(), RandomDataUtil.getlastName(), RandomDataUtil.getCompanyName(), RandomDataUtil.getRandomAddress(), RandomDataUtil.getRandomAddress(), RandomDataUtil.getRandomCountry(), RandomDataUtil.getRandomState(), RandomDataUtil.getRandomCity(), RandomDataUtil.getZipCode(), RandomDataUtil.getPhoneNumber());
  68  |     await registerPage.SubmitRegistration();
  69  |     expect(page.textContent("h2:has-text('Account Created!')")).toBeTruthy();
  70  |     console.log("Account Created! is visible");
  71  |     console.log("Registered user: " + name + " with email: " + email + " and password: " + password);
  72  |     await registerPage.ContinueAfterRegistration();
  73  |     expect(page.textContent("a:has-text('Logged in as " + name + "')")).toBeTruthy();
  74  |     console.log("Logged in as " + name + " is visible");
  75  | 
  76  |     await homePage.cartBtn.click();
  77  |     expect(page.url()).toContain("/view_cart");
  78  |     expect(await cartPage.isCartPageExists()).toBeTruthy();
  79  |     console.log("Navigated to cart page successfully");
  80  | 
  81  |     await cartPage.proceedToCheckoutBtn.click();
  82  |     expect(await checkoutPage.isCheckoutPageExists()).toBeTruthy();
  83  |     expect(page.textContent("h2:has-text('Address Details')")).toBeTruthy();
  84  |     console.log("Navigated to checkout page successfully");
  85  | 
  86  |         let cartItems = await cartPage.getCartItems();
  87  |     if(cartItems.length > 0){
  88  |         console.log("Cart has items and they are displayed below");
  89  |         for(let i=0;i<cartItems.length;i++){
  90  |             console.log(await cartItems[i].textContent());
  91  |         }
  92  |     }else{
  93  |         console.log("Cart is empty");
  94  |     }
  95  | 
  96  | 
  97  |         let addressInfo = await checkoutPage.getAddressInfo();
  98  |     if(addressInfo.length > 0){
  99  |         console.log("Delivery address information is displayed below");
  100 |         for(let i=0;i<addressInfo.length;i++){
  101 |             console.log(await addressInfo[i].textContent());
  102 |         }
  103 |     }else{
  104 |         console.log("Addreess is empty");
  105 |     }
  106 | 
  107 | 
  108 | 
  109 | 
  110 |         let billingInfo = await checkoutPage.getBillingInfo();
  111 |     if(billingInfo.length > 0){
  112 |         console.log("Billing address information is displayed below");
  113 |         for(let i=0;i<billingInfo.length;i++){
  114 |             console.log(await billingInfo[i].textContent());
  115 |         }
  116 |     }else{
  117 |         console.log("Billing address is empty");
  118 |     }
  119 | 
  120 |     page.waitForTimeout(5000);
  121 | 
  122 | 
  123 |     await checkoutPage.descriptionbox.fill("Please deliver between 9 AM to 5 PM");
  124 |     await checkoutPage.placeorderBtn.click();
  125 |     expect(page.textContent("h2:has-text('Payment')")).toBeTruthy();
  126 |     console.log("Navigated to payment page successfully");
  127 | 
  128 |     
  129 |     await paymentPage.FillPaymentDetails("John Doe", "4111111111111111", "123", "12", "2025");
  130 |     await paymentPage.payAndConfirmOrderBtn.click();
  131 |     expect(page.textContent("h2:has-text('Your order has been placed successfully!')")).toBeTruthy();
  132 |     console.log("Order placed successfully and confirmation message is visible");
  133 | 
  134 |     page.waitForTimeout(5000);
  135 | 
  136 | 
  137 |     await registerPage.DeleteAccount();
  138 |     expect(page.textContent("h2:has-text('Account Deleted!')")).toBeTruthy();
```