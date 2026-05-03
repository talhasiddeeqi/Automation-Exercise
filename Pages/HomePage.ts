import { Page, expect, Locator } from '@playwright/test';

export class HomePage {
        
    // Locators
    readonly page: Page;
    readonly homebtn: Locator;
    readonly productsBtn: Locator;
    readonly cartBtn: Locator;
    readonly loginOrSignupButton: Locator;
    readonly contactUsButton: Locator;
    readonly testcasesBtn: Locator;
    readonly apiTestingBtn: Locator;
    readonly videoTutorialsBtn: Locator
    readonly subscribeEmailBox: Locator;
    readonly subscribeButton: Locator;


  

    constructor(page: Page) {
        
        // Initialize locators
        this.page = page;
        this.homebtn = page.locator('a:has-text("Home")');
        this.productsBtn = page.locator('a:has-text("Products")');
        this.cartBtn = page.locator('a:has-text("Cart")').first();
        this.loginOrSignupButton = page.getByText('Signup / Login');
        this.contactUsButton = page.getByText('Contact us');
        this.testcasesBtn = page.getByText('Test Cases').first()
        this.apiTestingBtn = page.getByText('API Testing');
        this.videoTutorialsBtn = page.getByText('Video Tutorials');
        this.subscribeEmailBox = page.locator('#susbscribe_email');
        this.subscribeButton = page.locator('#subscribe');


     
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


    async SubscribeToNewsletter(email: string) {
        await this.subscribeEmailBox.fill(email);
        await this.subscribeButton.click();
    }

    


}