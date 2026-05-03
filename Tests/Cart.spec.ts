import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { TestConfig } from '../test.config';
import { ContactUsPage } from '../Pages/ContactUsPage';
import { TestCasePage } from '../Pages/TestCasePage';
import { CartPage } from '../Pages/CartPage';
import { ProductPage } from '../Pages/ProductPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';


let homePage: HomePage;
let testConfig: TestConfig;
let contactUsPage: ContactUsPage;
let testCasePage: TestCasePage;
let cartPage: CartPage;
let productPage: ProductPage;


test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    testConfig = new TestConfig();
    contactUsPage = new ContactUsPage(page);
    testCasePage = new TestCasePage(page);
    cartPage = new CartPage(page);
    productPage = new ProductPage(page);
    await page.goto(testConfig.appUrl);
    expect(page.url()).toBe(testConfig.appUrl);
    console.log("Navigated to home page successfully");
    
 
});

test('Cart Page',async({page})=>{
    await homePage.productsBtn.click();
    expect(await productPage.isProductPageExists()).toBeTruthy();
    await productPage.addProductToCart();
    console.log("Product added to cart successfully");



    await homePage.cartBtn.click();
    expect(page.url()).toContain("/view_cart");
    expect(await cartPage.isCartPageExists()).toBeTruthy();
    console.log("Navigated to cart page successfully");
    let cartItems = await cartPage.getCartItems();
    if(cartItems.length > 0){
        console.log("Cart has items and they are displayed below");
        for(let i=0;i<cartItems.length;i++){
            console.log(await cartItems[i].textContent());
        }
    }else{
        console.log("Cart is empty");
    }
    
});





test.only('Changed Quantity',async({page})=>{
    await homePage.productsBtn.click();
    expect(await productPage.isProductPageExists()).toBeTruthy();
    await productPage.ViewFirstProduct();
    expect(page.url()).toContain("/product_details/1");
    console.log("Navigated to first product details page successfully");
    let quantity = RandomDataUtil.getRandomQuantity();
    await productPage.setProductQuantity(quantity);
    console.log("Product quantity set to " + quantity + " and added to cart successfully");
    await homePage.cartBtn.click();
    expect(page.url()).toContain("/view_cart");
    expect(await cartPage.isCartPageExists()).toBeTruthy();
    console.log("Navigated to cart page successfully");
    expect(await cartPage.productQuantity.textContent()).toBe(quantity);
    console.log("Product quantity in cart is " + quantity + " as expected");



    
});