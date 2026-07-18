

import {test,expect} from "../src/fixtures/pagefixture.js";


test.beforeEach(async({loginPage,inventoryPage,cartPage,checkoutPage})=>{
await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.APPUSERNAME!,process.env.APPPASSWORD!);
    await inventoryPage.addProductToCart("Sauce Labs Fleece Jacket");
    await cartPage.launchCartPage();
    
})




test("test for docheckout",async({cartPage,checkoutPage})=>{
await cartPage.navigateToCheckoutPage();
await checkoutPage.doCheckout("abc","abc","abc");
expect(await checkoutPage.getPageUrl()).toContain("checkout-step-two");
await checkoutPage.wait(2000);
})