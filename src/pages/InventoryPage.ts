
import { Locator, Page } from "@playwright/test";
import {BasePage} from "./BasePage.js"

//fixtures:supply data /object to test cases

export class InventoryPage extends BasePage

{
    //locator
    private readonly productList:Locator;
    private readonly cartOption:Locator;

    constructor(page:Page)
    {
        super(page);
        this.productList=page.locator("div.inventory_item_name");
        this.cartOption=page.locator("a.shopping_cart_link");
    }

    //actions method

    async getInventoryPageTitle():Promise<string>
    {
        return await this.page.title();
    }

    async getProductCount():Promise<number>
    {
        return await this.productList.count();
    }

    async getProductName():Promise<string[]>
    {
        return await this.productList.allInnerTexts();
    }





}