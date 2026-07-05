import {test,expect} from "@playwright/test"
import {LoginPage} from "../src/pages/LoginPage.js"
import {InventoryPage} from "../src/pages/InventoryPage.js"
import { log } from "console";

 let loginpage:LoginPage;
 let inventoryPage:InventoryPage;

test.beforeEach(async({page})=>{
     loginpage=new LoginPage(page);
    await loginpage.goToLoginPage();
    await loginpage.doLogin("standard_user","secret_sauce");
    inventoryPage=new InventoryPage(page);
})

test("Test the title of Inventorypage",async({})=>{
let appTitle=await inventoryPage.getInventoryPageTitle();
expect(appTitle).toEqual("Swag Labs");

})

test("Test for product count",async()=>{

   let count=await inventoryPage.getProductCount();
   expect(count).toEqual(6);
   console.log("Total Products: "+count);
   
})

test("Test for Products",async()=>{
let allProducts=await inventoryPage.getProductName();
for(let i of allProducts)
{
    console.log(i);
    
}
})