
import {test,expect} from "@playwright/test"
import {LoginPage} from "../src/pages/LoginPage.js"

 let loginpage:LoginPage;

test.beforeEach(async({page})=>{
     loginpage=new LoginPage(page);
    await loginpage.goToLoginPage();
})

//step1:create test cases
test("Test for title",async({page})=>{

    // let loginpage=new LoginPage(page);
    // await loginpage.goToLoginPage();
    const pageTitle=await loginpage.getPageTitle();
    console.log("Page title is: "+pageTitle);
    expect(pageTitle).toBe("Swag Labs");
    

})


test("Test for Login ",async({page})=>{
// loginPage=new LoginPage(page);
// await loginPage.goToLoginPage();
await loginpage.doLogin("standard_user","secret_sauce");
expect(page).toHaveTitle("Swag Labs");

})

//even you can remove {page} from test cases also