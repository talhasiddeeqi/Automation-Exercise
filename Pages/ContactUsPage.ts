import { Page, expect, Locator } from '@playwright/test';

export class ContactUsPage {
        // Locators
    readonly page: Page;
    readonly nameBox: Locator;
    readonly emailBox: Locator;
    readonly subjectBox: Locator;
    readonly messageBox: Locator;
    readonly uploadFileInput: Locator;
    readonly submitButton: Locator;

    


  

    constructor(page: Page) {
        // Initialize locators
        this.page = page;
        this.nameBox = page.locator('input[name="name"]');
        this.emailBox = page.locator('input[name="email"]');
        this.subjectBox = page.locator('input[name="subject"]');
        this.messageBox = page.locator('textarea[name="message"]');
        this.uploadFileInput = page.locator('input[type="file"]');
        this.submitButton = page.locator('input[type="submit"]');


    }

    // Actions
    // Check if ContactUsPage exists
    async isContactUsPageExists(){
        let title:string = await this.page.title();
        if(title=="Automation Exercise - Contact Us")
        {
            console.log("Contact Us page is displayed");
            return true;
        }
        return false;
    }

    async FillContactForm(name: string, email: string, subject: string, message: string) {
        await this.nameBox.fill(name);
        await this.emailBox.fill(email);
        await this.subjectBox.fill(subject);
        await this.messageBox.fill(message);
    }
    async UploadFile(filePath: string) {
        await this.uploadFileInput.setInputFiles(filePath);
    }
    async SubmitContactForm() {
        await this.submitButton.click();
    }


}