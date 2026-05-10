import { Page, expect, Locator } from '@playwright/test';

export class CheckoutPage {
        // Locators
    readonly page: Page;
    readonly deliveryaddressbox: Locator;
    readonly billingaddressbox: Locator;
    readonly descriptionbox: Locator;
    readonly placeorderBtn: Locator;



    


  

    constructor(page: Page) {
        // Initialize locators
        this.page = page;
        this.deliveryaddressbox = page.locator('div.col-xs-12.col-sm-6').first();
        this.billingaddressbox = page.locator('div.col-xs-12.col-sm-6').last();
        this.descriptionbox = page.locator('textarea[name="message"]');
        this.placeorderBtn = page.getByText('Place Order');




    }

    // Actions
    // Check if CheckoutPage exists
    async isCheckoutPageExists(){
        let title:string = await this.page.title();
        if(title=="Automation Exercise - Checkout")
        {
            console.log("Checkout page is displayed");
            return true;
        }
        return false;
    }

        async getAddressInfo() {
        return await this.deliveryaddressbox.all();
    }


        async getBillingInfo() {
        return await this.billingaddressbox.all();
    }

    async PlaceOrder(description: string) {
        await this.descriptionbox.fill(description);
        await this.placeorderBtn.click();
    }




}