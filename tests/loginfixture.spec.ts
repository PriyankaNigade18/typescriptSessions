
import {test,expect} from "../src/fixtures/pagefixture.js"

test.beforeEach(async({loginPage})=>{
        await loginPage.goToLoginPage();
   
})

//step1:create test cases
test("Test for title",async({loginPage})=>{

    const pageTitle=await loginPage.getPageTitle();
    console.log("Page title is: "+pageTitle);
    expect(pageTitle).toBe("Swag Labs");
    

})


test("Test for Login ",async({loginPage,inventoryPage})=>{
await loginPage.doLogin("standard_user","secret_sauce");
//expect(loginPage).toHaveTitle("Swag Labs");
expect(await inventoryPage.getInventoryPageTitle()).toEqual("Swag Labs");

})

//even you can remove {page} from test cases also