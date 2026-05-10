# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout.spec.ts >> Register While Checkout
- Location: tests\Checkout.spec.ts:45:5

# Error details

```
Error: page.textContent: Test ended.
Call log:
  - waiting for locator('h2:has-text(\'Your order has been placed successfully!\')')

```

# Test source

```ts
  29  |     homePage = new HomePage(page);
  30  |     testConfig = new TestConfig();
  31  |     checkoutPage = new CheckoutPage(page);
  32  |     contactUsPage = new ContactUsPage(page);
  33  |     testCasePage = new TestCasePage(page);
  34  |     cartPage = new CartPage(page);
  35  |     registerPage = new RegisterPage(page);
  36  |     productPage = new ProductPage(page);
  37  |     paymentPage = new PaymentPage(page);
  38  |     await page.goto("https://automationexercise.com/");
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
  120 | 
  121 | 
  122 |     await checkoutPage.PlaceOrder("Please deliver between 9 AM to 5 PM");
  123 |     expect(page.textContent("h2:has-text('Payment')")).toBeTruthy();
  124 |     console.log("Navigated to payment page successfully");
  125 | 
  126 |     
  127 |     await paymentPage.FillPaymentDetails("John Doe", "4111111111111111", "123", "12", "2025");
  128 |     await paymentPage.payAndConfirmOrderBtn.click();
> 129 |     expect(page.textContent("h2:has-text('Your order has been placed successfully!')")).toBeTruthy();
      |                 ^ Error: page.textContent: Test ended.
  130 |     console.log("Order placed successfully and confirmation message is visible");
  131 | 
  132 | 
  133 | 
  134 |     await registerPage.DeleteAccount();
  135 |     expect(page.textContent("h2:has-text('Account Deleted!')")).toBeTruthy();
  136 |     console.log("Account Deleted! is visible");
  137 | 
  138 |     await registerPage.ContinueAfterDeletion();
  139 |     expect(page.textContent("a:has-text('Signup / Login')")).toBeTruthy();
  140 |     console.log("Signup / Login is visible");
  141 | 
  142 | 
  143 | });
```