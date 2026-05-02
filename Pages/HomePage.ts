import { Page, expect, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly loginOrSignupButton: Locator;
    
    // Locators

  

    constructor(page: Page) {
        this.page = page;
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