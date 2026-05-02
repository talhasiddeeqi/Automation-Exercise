import { Page, expect, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    
    // Locators

  

    constructor(page: Page) {
        this.page = page;
        
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