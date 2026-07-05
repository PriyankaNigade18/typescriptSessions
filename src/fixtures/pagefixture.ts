import {test as baseTest} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage.js";
import { InventoryPage} from "../pages/InventoryPage";

//define types for page fixtures
type pageFixtures={
    loginPage:LoginPage,
    inventoryPage:InventoryPage
}

//extend playwright basetest
export let test=baseTest.extend<pageFixtures>({

    loginPage:async({page},use)=>{
        let loginPage=new LoginPage(page);
        await use(loginPage);
    },

    inventoryPage:async({page},use)=>{
        let inventoryPage=new InventoryPage(page);
        await use(inventoryPage);
    }
})

export {expect} from "@playwright/test";