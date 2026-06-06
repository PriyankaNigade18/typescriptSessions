import {test,expect} from "@playwright/test"



test("Automate Hidden element",async({page})=>{

    await page.goto("https://www.letskodeit.com/practice");

    //click on hide button
    await page.locator("#hide-textbox").click();

    await page.waitForTimeout(1000);
    //type into input box which is hidden then use js
    //await page.locator("#displayed-text").fill("hello All");

    await page.evaluate(()=>{
        const ele=document.querySelector("#displayed-text") as HTMLInputElement;
        ele.value="hello";
    })

    //click on Show()
    await page.locator("#show-textbox").click();


    await page.waitForTimeout(1000);
})






test("Automate Disable Element",async({page})=>{

    await page.goto("https://www.letskodeit.com/practice");

    let inputElement=page.getByPlaceholder("Enabled/Disabled Field");

    //current status
    console.log("Input Box current status IsEnabled? "+await inputElement.isEnabled());//true
    
    console.log("Input Box current status Isdisabled? "+ await inputElement.isDisabled());//false

    //click on Disable button
    await page.locator("#disabled-button").click();

    console.log("Input Box status After Click on Disable button Isdisabled? "+ await inputElement.isDisabled());

    //type 
    await page.evaluate(()=>{
        const ele=document.querySelector("#enabled-example-input") as HTMLInputElement;
        ele.value="testing";
    })

    await page.waitForTimeout(2000);
})