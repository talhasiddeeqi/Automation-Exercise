import { Page, expect, Locator } from '@playwright/test';

export class PaymentPage {
        // Locators
    readonly page: Page;
    readonly nameOnCardBox: Locator;
    readonly cardNumberBox: Locator;
    readonly cvcBox: Locator;
    readonly expiryMonthBox: Locator;
    readonly expiryYearBox: Locator;
    readonly payAndConfirmOrderBtn: Locator;




    


  

    constructor(page: Page) {
        // Initialize locators
        this.page = page;
        this.nameOnCardBox = page.locator('input[name="name_on_card"]');
        this.cardNumberBox = page.locator('input[name="card_number"]');
        this.cvcBox = page.locator('input[name="cvc"]');
        this.expiryMonthBox = page.locator('input[name="expiry_month"]');
        this.expiryYearBox = page.locator('input[name="expiry_year"]');
        this.payAndConfirmOrderBtn = page.getByText('Pay and Confirm Order');





    }

    // Actions
    // Check if PaymentPage exists
    async isPaymentPageExists(){
        let title:string = await this.page.title();
        if(title=="Automation Exercise - Payment")
        {
            console.log("Payment page is displayed");
            return true;
        }
        return false;
    }

    async FillPaymentDetails(nameOnCard: string, cardNumber: string, cvc: string, expiryMonth: string, expiryYear: string) {
        await this.nameOnCardBox.fill(nameOnCard);
        await this.cardNumberBox.fill(cardNumber);
        await this.cvcBox.fill(cvc);
        await this.expiryMonthBox.fill(expiryMonth);
        await this.expiryYearBox.fill(expiryYear);
    }

    async SubmitPayment() {
        await this.payAndConfirmOrderBtn.click();
    }






}