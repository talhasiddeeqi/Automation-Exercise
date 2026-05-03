import { Page, expect, Locator } from '@playwright/test';

export class TestCasePage {
        // Locators
    readonly page: Page;


    


  

    constructor(page: Page) {
        // Initialize locators
        this.page = page;



    }

    // Actions
    // Check if TestCasePage exists
    async isTestCasePageExists(){
        let title:string = await this.page.title();
        if(title=="Automation Practice Website for UI Testing - Test Cases")
        {
            console.log("Test Cases page is displayed");
            return true;
        }
        return false;
    }




}