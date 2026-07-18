import { Page } from "@playwright/test";
import { BasePage } from "./BasePage.js";


export class CheckoutPage extends BasePage
{
    private readonly fname;
    private readonly lname;
    private readonly postalCode;
    private readonly continueBtn;

    constructor(page:Page)
    {
        super(page);
        this.fname=page.locator("#first-name");
        this.lname=page.locator("#last-name");
        this.continueBtn=page.locator("#continue");
        this.postalCode=page.locator("#postal-code");

        
    }

async doCheckout(fn:string,ln:string,pc:string)
{
    await this.fname.fill(fn);
    await this.lname.fill(ln);
    await this.postalCode.fill(pc);
    await this.continueBtn.click();
}






}