import { Page, expect, Locator } from '@playwright/test';

export class LoginPage {
        // Locators
    readonly page: Page;
    readonly emailBox: Locator;
    readonly passwordBox: Locator;
    readonly loginButton: Locator;
    


  

    constructor(page: Page) {
        // Initialize locators
        this.page = page;
        this.emailBox = page.locator('input[name="email"]').first();
        this.passwordBox = page.locator('input[name="password"]');
        this.loginButton = page.locator('button:has-text("Login")');

    }

    // Actions
    // Check if LoginPage exists
    async isLoginPageExists(){
        let title:string = await this.page.title();
        if(title=="Automation Exercise - Signup / Login")
        {
            console.log("Login page is displayed");
            return true;
        }
        return false;
    }

    async LoginUser(email: string, password: string) {
        await this.emailBox.fill(email);
        await this.passwordBox.fill(password);
    }
    async SubmitLogin() {
        await this.loginButton.click();
    }

    


}