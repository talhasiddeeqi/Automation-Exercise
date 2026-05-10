import { Page, expect, Locator } from '@playwright/test';

export class CartPage {
        // Locators
    readonly page: Page;
    readonly cartItems: Locator;
    readonly productQuantity: Locator;
    readonly proceedToCheckoutBtn: Locator;
    readonly continueoncartBtn: Locator;


    


  

    constructor(page: Page) {
        // Initialize locators
        this.page = page;
        this.cartItems = page.locator('#cart_info');
        this.productQuantity = page.locator(".disabled");
        this.proceedToCheckoutBtn = page.getByText('Proceed To Checkout');
        this.continueoncartBtn = page.getByText('Continue On Cart', { exact: true });



    }

    // Actions
    // Check if CartPage exists
    async isCartPageExists(){
        let title:string = await this.page.title();
        if(title=="Automation Exercise - Checkout")
        {
            console.log("Cart page is displayed");
            return true;
        }
        return false;
    }

    async getCartItems() {
        return await this.cartItems.all();
    }


}