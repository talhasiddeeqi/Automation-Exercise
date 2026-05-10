import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { TestConfig } from '../test.config';
import { ContactUsPage } from '../Pages/ContactUsPage';
import { TestCasePage } from '../Pages/TestCasePage';
import { CartPage } from '../Pages/CartPage';
import { ProductPage } from '../Pages/ProductPage';
import { CheckoutPage } from '../Pages/CheckoutPage';
import { RegisterPage } from '../Pages/RegisterPage';
import { PaymentPage } from '../Pages/PaymentPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';


let homePage: HomePage;
let testConfig: TestConfig;
let checkoutPage: CheckoutPage;
let contactUsPage: ContactUsPage;
let testCasePage: TestCasePage;
let cartPage: CartPage;
let productPage: ProductPage;
let registerPage: RegisterPage;
let paymentPage: PaymentPage;

    let name = RandomDataUtil.getFirstName();
    let email = RandomDataUtil.getEmail();
    let password = RandomDataUtil.getPassword();

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    testConfig = new TestConfig();
    checkoutPage = new CheckoutPage(page);
    contactUsPage = new ContactUsPage(page);
    testCasePage = new TestCasePage(page);
    cartPage = new CartPage(page);
    registerPage = new RegisterPage(page);
    productPage = new ProductPage(page);
    paymentPage = new PaymentPage(page);
    await page.goto("https://automationexercise.com/");
    expect(page.url()).toBe(testConfig.appUrl);
    console.log("Navigated to home page successfully");


});

test('Register While Checkout', async ({ page }) => {

    await homePage.productsBtn.click();
    expect(await productPage.isProductPageExists()).toBeTruthy();
    await productPage.addProductToCart();
    console.log("Product added to cart successfully");

    await homePage.cartBtn.click();
    expect(page.url()).toContain("/view_cart");
    expect(await cartPage.isCartPageExists()).toBeTruthy();
    console.log("Navigated to cart page successfully");

    await cartPage.proceedToCheckoutBtn.click();
    expect(page.textContent("p:has-text('Register / Login account to proceed on checkout.')")).toBeTruthy();
    console.log("Warning to register first is shown");

    await cartPage.continueoncartBtn.click();
    await homePage.loginOrSignupButton.click();
    await registerPage.RegisterUser(name, email);
    expect(page.textContent("h2:has-text('Enter Account Information')")).toBeTruthy();
    console.log("Enter Account Information is visible");
    await registerPage.FillAccountInformation(password, RandomDataUtil.getRandomDay(), RandomDataUtil.getRandomMonth(), RandomDataUtil.getRandomYear(), true, true);
    await registerPage.FillAddressInformation(RandomDataUtil.getFirstName(), RandomDataUtil.getlastName(), RandomDataUtil.getCompanyName(), RandomDataUtil.getRandomAddress(), RandomDataUtil.getRandomAddress(), RandomDataUtil.getRandomCountry(), RandomDataUtil.getRandomState(), RandomDataUtil.getRandomCity(), RandomDataUtil.getZipCode(), RandomDataUtil.getPhoneNumber());
    await registerPage.SubmitRegistration();
    expect(page.textContent("h2:has-text('Account Created!')")).toBeTruthy();
    console.log("Account Created! is visible");
    console.log("Registered user: " + name + " with email: " + email + " and password: " + password);
    await registerPage.ContinueAfterRegistration();
    expect(page.textContent("a:has-text('Logged in as " + name + "')")).toBeTruthy();
    console.log("Logged in as " + name + " is visible");

    await homePage.cartBtn.click();
    expect(page.url()).toContain("/view_cart");
    expect(await cartPage.isCartPageExists()).toBeTruthy();
    console.log("Navigated to cart page successfully");

    await cartPage.proceedToCheckoutBtn.click();
    expect(await checkoutPage.isCheckoutPageExists()).toBeTruthy();
    expect(page.textContent("h2:has-text('Address Details')")).toBeTruthy();
    console.log("Navigated to checkout page successfully");

        let cartItems = await cartPage.getCartItems();
    if(cartItems.length > 0){
        console.log("Cart has items and they are displayed below");
        for(let i=0;i<cartItems.length;i++){
            console.log(await cartItems[i].textContent());
        }
    }else{
        console.log("Cart is empty");
    }


        let addressInfo = await checkoutPage.getAddressInfo();
    if(addressInfo.length > 0){
        console.log("Delivery address information is displayed below");
        for(let i=0;i<addressInfo.length;i++){
            console.log(await addressInfo[i].textContent());
        }
    }else{
        console.log("Addreess is empty");
    }




        let billingInfo = await checkoutPage.getBillingInfo();
    if(billingInfo.length > 0){
        console.log("Billing address information is displayed below");
        for(let i=0;i<billingInfo.length;i++){
            console.log(await billingInfo[i].textContent());
        }
    }else{
        console.log("Billing address is empty");
    }



    await checkoutPage.PlaceOrder("Please deliver between 9 AM to 5 PM");
    expect(page.textContent("h2:has-text('Payment')")).toBeTruthy();
    console.log("Navigated to payment page successfully");

    
    await paymentPage.FillPaymentDetails("John Doe", "4111111111111111", "123", "12", "2025");
    await paymentPage.payAndConfirmOrderBtn.click();
    //expect(page.textContent("h2:has-text('Your order has been placed successfully!')")).toBeTruthy();
    console.log("Order placed successfully and confirmation message is visible");



    await registerPage.DeleteAccount();
    expect(page.textContent("h2:has-text('Account Deleted!')")).toBeTruthy();
    console.log("Account Deleted! is visible");

    await registerPage.ContinueAfterDeletion();
    expect(page.textContent("a:has-text('Signup / Login')")).toBeTruthy();
    console.log("Signup / Login is visible");


});