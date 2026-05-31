

import {test,expect} from "@playwright/test"

test("Test for locator chain",async({page})=>{
    await page.goto("https://qavbox.github.io/demo/webtable/");

    let totalRows:number=await page.locator("#table01").locator("tr").count();
    console.log("Total rows are: "+totalRows);
    
    //goto 2nd row and click on checkbox
    await page.locator("#table01").locator("tr").nth(2).getByRole('checkbox').click();

    

    await page.waitForTimeout(2000);
})