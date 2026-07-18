
import {test,expect} from "../src/fixtures/pagefixture.js"

test.beforeEach(async({loginPage,inventoryPage,cartPage})=>{
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.APPUSERNAME!,process.env.APPPASSWORD!);
    await inventoryPage.addProductToCart("Sauce Labs Fleece Jacket");
    await cartPage.launchCartPage();
    
})

test("Test for cart productDetails",async({cartPage})=>{
let pname=await cartPage.getCartProduct();
expect(pname).toBe("Sauce Labs Fleece Jacket");

})

test("Test for checkoutPagenavigation",async({cartPage})=>{

    await cartPage.navigateToCheckoutPage();
    expect(await cartPage.getPageUrl()).toContain("checkou");
    console.log("User navigated to checkout page");
    
})