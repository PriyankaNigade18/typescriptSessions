import { Browser, chromium, Page } from "@playwright/test";

(async()=>{
let browser:Browser=await chromium.launch({headless:false});
let page:Page=await browser.newPage();

await page.goto("https://www.google.com/");
await page.close();

})();