
import {test,expect} from "../src/fixtures/pagefixture.js"
import { InventoryPage } from "../src/pages/InventoryPage.js";

test.beforeEach(async({loginPage})=>{
    await loginPage.goToLoginPage();
    await loginPage.doLogin("standard_user","secret_sauce");
    
})

test("Test the title of Inventorypage",async({inventoryPage})=>{
let appTitle=await inventoryPage.getInventoryPageTitle();
expect(appTitle).toEqual("Swag Labs");

})

test("Test for product count",async({inventoryPage})=>{
   let count=await inventoryPage.getProductCount();
   expect(count).toEqual(6);
   console.log("Total Products: "+count);
   
})

test("Test for Products",async({inventoryPage})=>{
let allProducts=await inventoryPage.getProductName();
for(let i of allProducts)
{
    console.log(i);
    
}
})