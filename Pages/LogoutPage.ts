import { Page, expect, Locator } from '@playwright/test';

export class LogoutPage {
        // Locators
    readonly page: Page;
    readonly logoutButton: Locator;

    


  

    constructor(page: Page) {
        // Initialize locators
        this.page = page;
        this.logoutButton = page.locator('a:has-text("Logout")');


    }

    // Actions
    // Check if LoginPage exists
    async logout(){
        await this.logoutButton.click();
    }

    


}