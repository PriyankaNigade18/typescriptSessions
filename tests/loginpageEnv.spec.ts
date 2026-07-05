
import {test,expect} from "../src/fixtures/pagefixture.js"



test.beforeEach(async({loginPage})=>{
   
        await loginPage.goToLoginPage();
    
    
})

//step1:create test cases
test("Test for title",async({loginPage})=>{

    // let loginpage=new LoginPage(page);
    // await loginpage.goToLoginPage();
    const pageTitle=await loginPage.getPageTitle();
    console.log("Page title is: "+pageTitle);
    expect(pageTitle).toBe("Swag Labs");
    

})


test("Test for Login ",async({loginPage})=>{
// loginPage=new LoginPage(page);
// await loginPage.goToLoginPage();
await loginPage.doLogin(process.env.APPUSERNAME!,process.env.APPPASSWORD!);
//expect(page).toHaveTitle("Swag Labs");
//expect(await inventoryPage.getInventoryPageTitle()).toEqual("Swag Labs");

})

//even you can remove {page} from test cases also