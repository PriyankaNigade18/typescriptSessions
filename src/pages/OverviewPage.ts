
import { Page } from "@playwright/test";
import {BasePage} from "../pages/BasePage.js"

export class OverviewPage extends BasePage
{
    private readonly paymentDetails;
    private readonly finishBtn;
    private readonly message;


    constructor(page:Page)
    {
        super(page);
        this.paymentDetails=page.locator("div.summary_info div[class^='summary']");
        this.finishBtn=page.getByRole("button",{name:'Finish'});
        this.message=page.getByRole("heading",{level:2});
    }

    async completeChekout():Promise<string>
    {
       await this.finishBtn.click();
       return await this.message.innerText();
    }

    async getPaymentDetail():Promise<string[]>
    {
        return await this.paymentDetails.allInnerTexts();
    }



}