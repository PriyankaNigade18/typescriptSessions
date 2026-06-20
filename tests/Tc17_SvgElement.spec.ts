import {Locator, test} from "@playwright/test"

test("Test for svg element",async({page})=>{

    await page.goto("https://petdiseasealerts.org/forecast-map#/");

    await page.waitForTimeout(4000);

    let frame=page.frameLocator("//iframe[contains(@id,'map-instance')]");

    let allRegions:Locator[]=await frame.locator("g#regions>g").all();
    console.log("Total Regions are: "+allRegions.length);

    for(let rg of allRegions)
    {
        console.log(await rg.getAttribute("id"));
        
    }
    await page.waitForTimeout(1000);
});