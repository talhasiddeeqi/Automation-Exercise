# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout.spec.ts >> Register While Checkout
- Location: tests\Checkout.spec.ts:42:5

# Error details

```
Error: page.goto: net::ERR_SOCKET_NOT_CONNECTED at https://automationexercise.com/
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - heading "This site can’t be reached" [level=1] [ref=e7]
  - paragraph [ref=e8]:
    - text: The webpage at
    - strong [ref=e9]: https://automationexercise.com/
    - text: might be temporarily down or it may have moved permanently to a new web address.
  - generic [ref=e10]: ERR_SOCKET_NOT_CONNECTED
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
  10  | import { RandomDataUtil } from '../utils/randomDataGenerator';
  11  | 
  12  | 
  13  | let homePage: HomePage;
  14  | let testConfig: TestConfig;
  15  | let checkoutPage: CheckoutPage;
  16  | let contactUsPage: ContactUsPage;
  17  | let testCasePage: TestCasePage;
  18  | let cartPage: CartPage;
  19  | let productPage: ProductPage;
  20  | let registerPage: RegisterPage;
  21  | 
  22  |     let name = RandomDataUtil.getFirstName();
  23  |     let email = RandomDataUtil.getEmail();
  24  |     let password = RandomDataUtil.getPassword();
  25  | 
  26  | test.beforeEach(async ({ page }) => {
  27  |     homePage = new HomePage(page);
  28  |     testConfig = new TestConfig();
  29  |     checkoutPage = new CheckoutPage(page);
  30  |     contactUsPage = new ContactUsPage(page);
  31  |     testCasePage = new TestCasePage(page);
  32  |     cartPage = new CartPage(page);
  33  |     registerPage = new RegisterPage(page);
  34  |     productPage = new ProductPage(page);
> 35  |     await page.goto(testConfig.appUrl);
      |                ^ Error: page.goto: net::ERR_SOCKET_NOT_CONNECTED at https://automationexercise.com/
  36  |     expect(page.url()).toBe(testConfig.appUrl);
  37  |     console.log("Navigated to home page successfully");
  38  | 
  39  | 
  40  | });
  41  | 
  42  | test('Register While Checkout', async ({ page }) => {
  43  | 
  44  |     await homePage.productsBtn.click();
  45  |     expect(await productPage.isProductPageExists()).toBeTruthy();
  46  |     await productPage.addProductToCart();
  47  |     console.log("Product added to cart successfully");
  48  | 
  49  |     await homePage.cartBtn.click();
  50  |     expect(page.url()).toContain("/view_cart");
  51  |     expect(await cartPage.isCartPageExists()).toBeTruthy();
  52  |     console.log("Navigated to cart page successfully");
  53  | 
  54  |     await cartPage.proceedToCheckoutBtn.click();
  55  |     expect(page.textContent("p:has-text('Register / Login account to proceed on checkout.')")).toBeTruthy();
  56  |     console.log("Warning to register first is shown");
  57  | 
  58  |     await cartPage.continueoncartBtn.click();
  59  |     await homePage.loginOrSignupButton.click();
  60  |     await registerPage.RegisterUser(name, email);
  61  |     expect(page.textContent("h2:has-text('Enter Account Information')")).toBeTruthy();
  62  |     console.log("Enter Account Information is visible");
  63  |     await registerPage.FillAccountInformation(password, RandomDataUtil.getRandomDay(), RandomDataUtil.getRandomMonth(), RandomDataUtil.getRandomYear(), true, true);
  64  |     await registerPage.FillAddressInformation(RandomDataUtil.getFirstName(), RandomDataUtil.getlastName(), RandomDataUtil.getCompanyName(), RandomDataUtil.getRandomAddress(), RandomDataUtil.getRandomAddress(), RandomDataUtil.getRandomCountry(), RandomDataUtil.getRandomState(), RandomDataUtil.getRandomCity(), RandomDataUtil.getZipCode(), RandomDataUtil.getPhoneNumber());
  65  |     await registerPage.SubmitRegistration();
  66  |     expect(page.textContent("h2:has-text('Account Created!')")).toBeTruthy();
  67  |     console.log("Account Created! is visible");
  68  |     console.log("Registered user: " + name + " with email: " + email + " and password: " + password);
  69  |     await registerPage.ContinueAfterRegistration();
  70  |     expect(page.textContent("a:has-text('Logged in as " + name + "')")).toBeTruthy();
  71  |     console.log("Logged in as " + name + " is visible");
  72  | 
  73  |     await homePage.cartBtn.click();
  74  |     expect(page.url()).toContain("/view_cart");
  75  |     expect(await cartPage.isCartPageExists()).toBeTruthy();
  76  |     console.log("Navigated to cart page successfully");
  77  | 
  78  |     await cartPage.proceedToCheckoutBtn.click();
  79  |     expect(await checkoutPage.isCheckoutPageExists()).toBeTruthy();
  80  |     expect(page.textContent("h2:has-text('Address Details')")).toBeTruthy();
  81  |     console.log("Navigated to checkout page successfully");
  82  | 
  83  |         let cartItems = await cartPage.getCartItems();
  84  |     if(cartItems.length > 0){
  85  |         console.log("Cart has items and they are displayed below");
  86  |         for(let i=0;i<cartItems.length;i++){
  87  |             console.log(await cartItems[i].textContent());
  88  |         }
  89  |     }else{
  90  |         console.log("Cart is empty");
  91  |     }
  92  | 
  93  | 
  94  |         let addressInfo = await checkoutPage.getAddressInfo();
  95  |     if(addressInfo.length > 0){
  96  |         console.log("Delivery address information is displayed below");
  97  |         for(let i=0;i<addressInfo.length;i++){
  98  |             console.log(await addressInfo[i].textContent());
  99  |         }
  100 |     }else{
  101 |         console.log("Addreess is empty");
  102 |     }
  103 | 
  104 | 
  105 | 
  106 | 
  107 |         let billingInfo = await checkoutPage.getBillingInfo();
  108 |     if(billingInfo.length > 0){
  109 |         console.log("Billing address information is displayed below");
  110 |         for(let i=0;i<billingInfo.length;i++){
  111 |             console.log(await billingInfo[i].textContent());
  112 |         }
  113 |     }else{
  114 |         console.log("Billing address is empty");
  115 |     }
  116 | 
  117 |     page.waitForTimeout(5000);
  118 | });
```