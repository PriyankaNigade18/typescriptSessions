
import {test,expect} from "../src/fixtures/pagefixture.js"
import {CsvHelper} from "../utils/CsvHelper.js"
import {ExcelHelper} from "../utils/ExcelHelper.js";
import {JsonHelper} from "../utils/JsonHelper.js";

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

//test for invalid login and data driven approach

const testData=CsvHelper.readCsv("src/data/loginData.csv");

for(let row of testData)
{
    test(`test for invalid data ${row.username} & ${row.password}`,async({loginPage})=>{

        await loginPage.doLogin(row.username,row.password);
        expect(loginPage.isInvalidLoginErrorMessageDisplays()).toBeTruthy();
        let msg:string=await loginPage.getInvalidLoginErrorMessage();
        console.log("InvalidMessage",msg);
        
    })
}

// this test will run number of time you have data in csv file row count


const testExcelData=ExcelHelper.readExcel("src/data/TestExcelData.xlsx","login");

for(let row of testExcelData)
{
    test(`test for invalid excel data ${row.username}`,async({loginPage})=>{

        await loginPage.doLogin(row.username,row.password);
        expect(loginPage.isInvalidLoginErrorMessageDisplays()).toBeTruthy();
        let msg:string=await loginPage.getInvalidLoginErrorMessage();
        console.log("InvalidMessage",msg);
        
    })
}


const testJsonData=JsonHelper.readJson("src/data/loginjson.json");

for(let row of testJsonData)
{
    test(`test for ${row.username} invalid jsonstring data`,async({loginPage})=>{

        await loginPage.doLogin(row.username,row.password);
        expect(loginPage.isInvalidLoginErrorMessageDisplays()).toBeTruthy();
        let msg:string=await loginPage.getInvalidLoginErrorMessage();
        console.log("InvalidMessage",msg);
        
    })
}
