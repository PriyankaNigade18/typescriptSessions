import {test as baseTest} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage.js";
import { InventoryPage} from "../pages/InventoryPage.js";
import {CartPage} from "../pages/CartPage.js"
import {CheckoutPage} from "../pages/CheckoutPage.js"
import {OverviewPage} from "../pages/OverviewPage.js"

//define types for page fixtures
type pageFixtures={
    loginPage:LoginPage,
    inventoryPage:InventoryPage,
    cartPage:CartPage;
    checkoutPage:CheckoutPage;
    overviewPage:OverviewPage;
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
    },
    
     cartPage:async({page},use)=>{
        let cartPage=new CartPage(page);
        await use(cartPage);
    },
    checkoutPage:async({page},use)=>{
        let checkoutPage=new CheckoutPage(page);
        await use(checkoutPage);
    },
    overviewPage:async({page},use)=>{

        let overviewPage=new OverviewPage(page);
        await use(overviewPage);
    }
})

export {expect} from "@playwright/test";