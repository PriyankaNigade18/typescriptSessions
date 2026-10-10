import {Given,When,Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import { CustomWorld } from "../support/world";
import { LoginPage } from "../pages/Loginpage";
import { ProductPage } from "../pages/Productpage";

let loginPage:LoginPage;
let productPage:ProductPage;
Given('I am loged in as a valid user', async function (this:CustomWorld) {

    loginPage=new LoginPage(this.page);
    productPage=new ProductPage(this.page);
    await loginPage.navigate();
    await loginPage.enterUserName("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickOnLogin();

});
//cuucmber understand int but you use typescript number type
Then('I should see at least {int} product on the page', async function(this:CustomWorld,minCount:number) {
  let productCount=await productPage.getProductsCount();
  expect(productCount).toBeGreaterThanOrEqual(minCount);
});

When('I add {string} to the cart', async function (this:CustomWorld,productName:string) {
await productPage.addProductToCart(productName);
});

Then('the cart badge should show {string} item', async function (this:CustomWorld,expectedCount:string) {
  let actualCount=await productPage.getCartBadgeCount();
  expect(actualCount).toBe(expectedCount);
});

When('I sort products by  {string}', async function (this:CustomWorld,sortOption:string) {
  await productPage.selectOption(sortOption);
});

Then('first product price should be lowest', async function (this:CustomWorld) {

    let allPrices:number[]=await productPage.getAllPrices();
    const sortedPrice=allPrices.sort((a,b)=>a-b);
    console.log("Sorted price: "+sortedPrice);
    expect(allPrices[0]).toBe(sortedPrice[0])
    

});
