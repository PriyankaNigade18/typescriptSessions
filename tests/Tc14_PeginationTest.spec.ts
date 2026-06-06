
import {test,expect, Locator} from "@playwright/test"

test("Test Pagination table",async({page})=>{

await page.goto("https://selectorshub.com/xpath-practice-page/");
let pgno:number=0;
while(true)
{
    pgno++;
    let eleExist:boolean=await page.locator("//td[text()='Hong Kong']").isVisible();

    if(eleExist)
    {
        console.log("Element found! at page: "+pgno);
        await page.locator("//td[text()='Hong Kong']//preceding-sibling::td//input[@type='checkbox']").check();
        break;
        
    }

    await page.waitForTimeout(1000);
    //next page click
    let nextButton:Locator=page.locator("//button[@aria-label='Next']");
    await nextButton.click();

    //ele not found
    if(await nextButton.isDisabled())
    {
        console.log("Element not found...Pagination Over");
        break;
        
    }


}

await page.waitForTimeout(2000);
})