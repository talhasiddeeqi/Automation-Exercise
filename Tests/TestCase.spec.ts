import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { TestConfig } from '../test.config';
import { ContactUsPage } from '../Pages/ContactUsPage';
import { TestCasePage } from '../Pages/TestCasePage';


let homePage: HomePage;
let testConfig: TestConfig;
let contactUsPage: ContactUsPage;
let testCasePage: TestCasePage;


test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    testConfig = new TestConfig();
    contactUsPage = new ContactUsPage(page);
    testCasePage = new TestCasePage(page);
    await page.goto(testConfig.appUrl);
    expect(page.url()).toBe(testConfig.appUrl);
    console.log("Navigated to home page successfully");
    
 
});

test('TestCase Page',async({page})=>{
    await homePage.testcasesBtn.click();
    expect(await testCasePage.isTestCasePageExists()).toBeTruthy();
    
});