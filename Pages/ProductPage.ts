import { Page, expect, Locator } from '@playwright/test';
import { HomePage } from './HomePage';

export class ProductPage {
        // Locators
    readonly page: Page;
    readonly viewProductBtn: Locator;
    readonly productDetails: Locator;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly searchedProducts: Locator;
    readonly addToCartBtn1: Locator;
    readonly addToCartBtn2: Locator;
    readonly continueshoppingBtn: Locator;
    readonly quantityBox: Locator;
    readonly addToCartviewproductpageBtn: Locator;


    


  

    constructor(page: Page) {
        // Initialize locators
        this.page = page;
        this.viewProductBtn = page.locator('a').filter({ hasText: 'View Product' }).first();
        this.productDetails = page.locator('.product-details');
        this.searchBox = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.searchedProducts = page.locator('div.product-overlay');
        this.addToCartBtn1 = page.getByText('Add to cart').nth(0);
        this.addToCartBtn2 = page.getByText('Add to cart').nth(2);
        this.continueshoppingBtn = page.getByText('Continue Shopping');
        this.quantityBox = page.locator('#quantity');
        this.addToCartviewproductpageBtn = page.getByText('Add to cart');

    }

    // Actions
    // Check if ProductPage exists
    async isProductPageExists(){
        let title:string = await this.page.title();
        if(title=="Automation Exercise - All Products")
        {
            console.log("Products page is displayed");
            return true;
        }
        return false;
    }


    async ViewFirstProduct() {
        await this.viewProductBtn.click();

    }



    async IsProductDetailsDisplayed() {
        return await this.productDetails.isVisible();
    }


    async SearchProduct(productName: string) {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }


    async addProductToCart() {
        await this.addToCartBtn1.click();
        await this.continueshoppingBtn.click();
        await this.addToCartBtn2.click();
        await this.continueshoppingBtn.click();

    }

    async setProductQuantity(quantity: string) {
        await this.quantityBox.fill(quantity);
        await this.addToCartviewproductpageBtn.click();
        await this.continueshoppingBtn.click();
    }

    



}