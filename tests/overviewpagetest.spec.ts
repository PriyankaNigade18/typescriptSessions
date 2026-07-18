
import {test,expect} from "../src/fixtures/pagefixture.js"



test.beforeEach(async({loginPage,inventoryPage,cartPage,checkoutPage})=>{
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.APPUSERNAME!,process.env.APPPASSWORD!);
    

})


test("Test for payement details",async({overviewPage,inventoryPage,cartPage,checkoutPage})=>{
await inventoryPage.addProductToCart("Sauce Labs Fleece Jacket");
    await cartPage.launchCartPage();
    await cartPage.navigateToCheckoutPage();
    await checkoutPage.doCheckout("ff","dd","dd");
    await checkoutPage.wait(1500);
    let allData=await overviewPage.getPaymentDetail();
for(let i of allData)
{
    console.log(i);
    
}
})

test("test for complete checkout",async({overviewPage,checkoutPage,inventoryPage,cartPage})=>{

    await inventoryPage.addProductToCart("Sauce Labs Fleece Jacket");
    await cartPage.launchCartPage();
    await cartPage.navigateToCheckoutPage();
    await checkoutPage.doCheckout("ff","dd","dd");
    await checkoutPage.wait(1500);
    let message=await overviewPage.completeChekout();
    expect(message).toBe('Thank you for your order!');
})