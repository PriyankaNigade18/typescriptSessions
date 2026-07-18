
import { Page } from "@playwright/test";
import {BasePage} from "./BasePage.js"

export class CartPage extends BasePage
{
    //locators
    private readonly cartOption;
    private readonly productDesc;
    private readonly removeButton;
    private readonly continueShoppingBtn;
    private readonly checkoutBtn;

    constructor(page:Page)
    {
        super(page);
        this.cartOption=page.locator("a.shopping_cart_link");
        this.productDesc=page.locator("div.inventory_item_name");
        this.removeButton=page.locator("//button[text()='Remove']");
        this.continueShoppingBtn=page.locator("#continue-shopping");
        this.checkoutBtn=page.locator("#checkout");

    }

async launchCartPage():Promise<void>
{
    return await this.cartOption.click();
}

async getCartProduct():Promise<String>
{
    return await this.productDesc.innerText();
}

async navigateToCheckoutPage():Promise<void>
{
    return await this.checkoutBtn.click();
}


}