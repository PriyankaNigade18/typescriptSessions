
import {test,expect} from "@playwright/test"

test("Test for copy and paste",async({page})=>{

await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

let fname= page.locator("#input-firstname");
await fname.fill("Priyanka");

//windows Control+A  mac: Meta-A  common ControlOrMeta+A
//select
await fname.press('ControlOrMeta+A');
//copy
await fname.press('ControlOrMeta+C');

//paste
let lname=page.locator("#input-lastname");
await lname.press("ControlOrMeta+V");

await page.waitForTimeout(2000);


})