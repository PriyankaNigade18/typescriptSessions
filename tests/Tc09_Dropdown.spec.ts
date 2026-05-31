

import {test,expect, Locator, Page} from "@playwright/test"
import { log } from "node:console";

test("Test for dropdown",async({page})=>{

    await page.goto("https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/");
    await page.locator("#justAnInputBox").click();
    let allOptions:Locator[]=await page.locator("(//div[@class='comboTreeDropDownContainer'])[1]//li/span[@class='comboTreeItemTitle']").all();

    for(let i of allOptions)
    {
    
        
        console.log(await i.innerText());
        if((await i.innerText()).includes("choice 6 2"))
        {
            await i.click();
            break;
        }

        
    }

    await page.waitForTimeout(3000);

})



test("Test using filter",async({page})=>{

     await page.goto("https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/");

     await page.locator("#justAnInputBox").click();
     //out of 45 ---> 3match--->first
     //await page.locator("span.comboTreeItemTitle").filter({hasText:"choice 5"}).first().click();


    await selectChoice(page,['choice 5','choice 6','choice 7']);

     await page.waitForTimeout(2000);
})


async function selectChoice(page:Page,choice:string[]):Promise<void>
{
for(let i of choice)
{
    await page.locator("span.comboTreeItemTitle").filter({hasText:`${i}`}).first().click()
}
}