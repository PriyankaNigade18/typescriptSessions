
import {test,expect} from "@playwright/test"

test("store login session",async({page})=>{

await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

await page.locator("#input-email").fill("test2525@gmail.com");
await page.locator("#input-password").fill("test123");
await page.locator("input.btn-primary").click();

await page.context().storageState({path:"auth/session.json"});


    
})