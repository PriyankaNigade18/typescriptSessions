import {test,expect,Browser, chromium, Page} from "@playwright/test"

test("Test for Real Chrome instance",async({})=>{

    //open chrome browser
let browser:Browser=await chromium.launch({headless:false,channel:"msedge"});

//open new tab
let page:Page=await browser.newPage();

await page.goto("https://www.facebook.com");

console.log("Applicaton title is: ",await page.title());

await page.waitForTimeout(2000);
})
