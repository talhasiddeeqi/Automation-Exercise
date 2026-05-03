import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { TestConfig } from '../test.config';
import { ProductPage } from '../Pages/ProductPage';
import { TestCasePage } from '../Pages/TestCasePage';
import { RandomDataUtil } from '../utils/randomDataGenerator';


let homePage: HomePage;
let testConfig: TestConfig;
let productPage: ProductPage;
let testCasePage: TestCasePage;
let a: string[];


test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    testConfig = new TestConfig();
    productPage = new ProductPage(page);
    testCasePage = new TestCasePage(page);
    await page.goto(testConfig.appUrl);
    expect(page.url()).toBe(testConfig.appUrl);
    console.log("Navigated to home page successfully");
    
 
});

test('Product Page',async({page})=>{
    await homePage.productsBtn.click();
    expect(await productPage.isProductPageExists()).toBeTruthy();


    await productPage.ViewFirstProduct();
    expect(page.url()).toContain("/product_details/1");
    console.log("Navigated to first product details page successfully");


    await productPage.IsProductDetailsDisplayed();
    expect(page.textContent("h2:has-text('Blue Top')")).toBeTruthy();
    expect(page.textContent("p:has-text('Category: Women')")).toBeTruthy();
    expect(page.textContent("span:has-text('Rs. 500')")).toBeTruthy();
    expect(page.textContent("p:has-text('Availability: In Stock')")).toBeTruthy();
    expect(page.textContent("p:has-text('Condition: New')")).toBeTruthy();
    expect(page.textContent("p:has-text('Brand: Polo')")).toBeTruthy();
    console.log("Product details are visible and are displayed below");
    console.log(await productPage.productDetails.textContent());

    await homePage.productsBtn.click();
    await productPage.SearchProduct(RandomDataUtil.getRandomColor());
    expect(page.textContent("h2:has-text('Searched Products')")).toBeTruthy();
    console.log("Searched Products is/are visible and displayed below");
    let a =productPage.searchedProducts;
    let b = (await a.all());
    for(let i=0;i<b.length;i++){
        console.log(await b[i].textContent());


    };



    
});