
import { Locator, Page } from "@playwright/test";
import {BasePage} from "./BasePage.js"

//fixtures:supply data /object to test cases

export class InventoryPage extends BasePage
{
    //locator
    private readonly productList:Locator;
    private readonly cartOption:Locator;
    private readonly cartButton;
    constructor(page:Page)
    {
        super(page);
        this.productList=page.locator("div.inventory_list div.inventory_item_name ");
        this.cartOption=page.locator("a.shopping_cart_link");
        this.cartButton=page.locator("#add-to-cart");
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

async addProductToCart(pname:string)
{
    let allOptions:Locator[]=await this.productList.all();
    for(let product of allOptions)
    {
        if((await product.innerText()).includes(pname))
        {
            await product.click();
            break;
        }

    }
    console.log("Product found: "+pname);
    await this.cartButton.click();
    
    console.log(pname+" added into cart");
       

}



}