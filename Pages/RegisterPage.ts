import { Page, expect, Locator } from '@playwright/test';


export class RegisterPage {
// Locators
    readonly page: Page;
    readonly loginOrSignupButton: Locator;
    readonly nameBox: Locator;
    readonly emailBox: Locator;
    readonly signupButton: Locator;

    readonly passwordBox: Locator;
    readonly dayDropdown: Locator;
    readonly monthDropdown: Locator;
    readonly yearDropdown: Locator;
    readonly newsletterCheckbox: Locator;
    readonly offersCheckbox: Locator;  

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly company: Locator; 
    readonly address: Locator;
    readonly address2: Locator; 
    readonly countryDropdown: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccountButton: Locator;

    readonly continueBtn: Locator;
    readonly deleteBtn: Locator;
    readonly continieafterDeletionBtn: Locator;
    
   

  
// Initialize locators

    constructor(page: Page) {
        this.page = page;
        this.loginOrSignupButton = page.getByText('Signup / Login');
        this.nameBox = page.locator('input[name="name"]');
        this.emailBox = page.locator('input[name="email"]').last();
        this.signupButton = page.locator('button:has-text("Signup")');
        this.passwordBox = page.locator('input[name="password"]');
        this.dayDropdown = page.locator('select[name="days"]');
        this.monthDropdown = page.locator('select[name="months"]');
        this.yearDropdown = page.locator('select[name="years"]');
        this.newsletterCheckbox = page.locator('input[name="newsletter"]');
        this.offersCheckbox = page.locator('input[name="optin"]');
        this.firstName = page.locator('input[name="first_name"]');
        this.lastName = page.locator('input[name="last_name"]');
        this.company = page.locator('input[name="company"]');
        this.address = page.locator('input[name="address1"]');
        this.address2 = page.locator('input[name="address2"]');
        this.countryDropdown = page.locator('select[name="country"]');
        this.state = page.getByLabel('State *');
        this.city = page.locator('input[name="city"]');
        this.zipcode = page.locator('input[name="zipcode"]');
        this.mobileNumber = page.locator('input[name="mobile_number"]');
        this.createAccountButton = page.locator('button:has-text("Create Account")');
        this.continueBtn =page.getByText('Continue');
        this.deleteBtn = page.getByText('Delete Account');
        this.continieafterDeletionBtn = page.getByText('Continue');
    }

// Actions
//Click on Sing up / login button
    async LoginorSignup(){
        await this.loginOrSignupButton.click();
    }


    // Check if RegisterPage exists
    async isRegisterPageExists(){
        let title:string = await this.page.title();
        if(title=="Automation Exercise - Signup / Login")
        {
            console.log("Register page is displayed");
            return true;
        }
        return false;
    }

    async RegisterUser(name: string, email: string) {
        await this.nameBox.fill(name);
        await this.emailBox.fill(email);
        await this.signupButton.click();
    }

    async FillAccountInformation(password: string, day: string, month: string, year: string, newsletter: boolean, offers: boolean) {
        await this.passwordBox.fill(password);
        await this.dayDropdown.selectOption(day);
        await this.monthDropdown.selectOption(month);
        await this.yearDropdown.selectOption(year);
        await this.newsletterCheckbox.setChecked(newsletter);
        await this.offersCheckbox.setChecked(offers);
    }

    async FillAddressInformation(firstName: string, lastName: string, company: string, address: string, address2: string, country: string, state: string, city: string, zipcode: string, mobileNumber: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.company.fill(company);
        await this.address.fill(address);
        await this.address2.fill(address2);
        await this.countryDropdown.selectOption(country);
        await this.state.fill(state);
        await this.city.fill(city);
        await this.zipcode.fill(zipcode);
        await this.mobileNumber.fill(mobileNumber);
    }

    async SubmitRegistration() {
        await this.createAccountButton.click();
    }

    async ContinueAfterRegistration() {
        await this.continueBtn.click();
    }

    async DeleteAccount() {
        await this.deleteBtn.click();
    }

    async ContinueAfterDeletion() {
        await this.continieafterDeletionBtn.click();
    }

}