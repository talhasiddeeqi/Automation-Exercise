import { Page, expect, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly homebtn: Locator;
    readonly productsBtn: Locator;
    readonly cartBtn: Locator;
    readonly loginOrSignupButton: Locator;
    
    // Locators

  

    constructor(page: Page) {
        this.page = page;
        this.homebtn = page.locator('a:has-text("Home")');
        this.productsBtn = page.locator('a:has-text("Products")');
        this.cartBtn = page.locator('a:has-text("Cart")');
        this.loginOrSignupButton = page.getByText('Signup / Login');
        
        // Initialize locators

     
    }

    // Actions
    // Check if HomePage exists
    async isHomePageExists(){
        let title:string = await this.page.title();
        if(title=="Automation Exercise")
        {
            console.log("Home page is displayed");
            return true;
        }
        return false;
    }

    


}