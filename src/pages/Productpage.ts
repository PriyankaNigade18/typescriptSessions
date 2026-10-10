
import {Page} from "@playwright/test";

export class ProductPage
{
constructor(private page:Page){};

private locators=
{
    inventoryItems:".inventory_item",
    cartBadge:".shopping_cart_link",
    sortDropdown:"select[data-test='product-sort-container']",
    itemPrice:".inventory_item_price",
    //arrow function which hase expression name then that expression behave like function
    addToCartButton:(productName:string)=>`//div[text()='${productName}']/ancestor::div[@class='inventory_item']//button`

}
async getProductsCount():Promise<number>
{
    return await this.page.locator(this.locators.inventoryItems).count();
}

async addProductToCart(productName:string)
{
    return this.page.locator(this.locators.addToCartButton(productName)).click();
}


async getCartBadgeCount():Promise<string>
{
return await this.page.locator(this.locators.cartBadge).innerText();
}

async selectOption(option:string)
{
await this.page.locator(this.locators.sortDropdown).selectOption({label:option});
}

async getAllPrices():Promise<number[]>
{
let allPricesText= await this.page.locator(this.locators.itemPrice).allInnerTexts();
console.log("All Prices: "+allPricesText);
//to remove $
return allPricesText.map(price=>Number(price.replace('$','')));

}
}