import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { TestConfig } from '../test.config';
import { ContactUsPage } from '../Pages/ContactUsPage';


let homePage: HomePage;
let testConfig: TestConfig;
let contactUsPage: ContactUsPage;


test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    testConfig = new TestConfig();
    contactUsPage = new ContactUsPage(page);
    await page.goto(testConfig.appUrl);
    expect(page.url()).toBe(testConfig.appUrl);
    console.log("Navigated to home page successfully");
    await homePage.contactUsButton.click();
});

test('ContactUsPage',async({page})=>{
    expect(await contactUsPage.isContactUsPageExists()).toBeTruthy();
    expect(page.textContent("h2:has-text('Contact Us')")).toBeTruthy();
    console.log("Contact Us is visible");
    
    await contactUsPage.FillContactForm("John Doe", "john.doe@example.com", "Test Subject", "Test Message");
    await contactUsPage.UploadFile("utils/attachment.png");                     // check if file upload works

    await page.waitForTimeout(2000); // wait for 2 seconds to ensure file upload is processed
    await contactUsPage.SubmitContactForm();
    expect(page.textContent("div.status.alert.alert-success")).toBeTruthy();
    console.log("Success! Your details have been submitted successfully. is visible");

    await homePage.homebtn.click();
    expect(page.url()).toBe(testConfig.appUrl);
    console.log("Navigated back to home page successfully");





});