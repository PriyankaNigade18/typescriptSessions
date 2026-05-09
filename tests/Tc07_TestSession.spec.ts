
import {test,expect} from "@playwright/test"

test.use({storageState:"auth/session.json"});

test("Navigate to cart page",async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=checkout/cart")

    await page.waitForTimeout(5000);
})
