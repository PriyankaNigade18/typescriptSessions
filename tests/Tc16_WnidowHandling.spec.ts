

import {test,expect, chromium, Browser, BrowserContext, Page, Locator} from "@playwright/test"

test('Test for Window handling',async({})=>{

   let  browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
   let context:BrowserContext=await browser.newContext();
   let page:Page=await context.newPage();
   
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    /*
    When any hyperlink contains target=_blank attribute means it will open in newTab

    */

    //dont write await inside as it should run parallelly and both promise should be fullfill
    let [childWindow]=await Promise.all([

        context.waitForEvent('page'),//start listening the page event in the browser context

        page.getByRole("link",{name:"OrangeHRM, Inc"}).click()//this will click on link
    ])

    //wait till the child winodw load completely
await childWindow.waitForLoadState();

    //total windows
console.log("Total number of pages: "+context.pages().length);

//to bring childwindow in focus
await childWindow.bringToFront();

console.log("Child window title is: "+ await childWindow.title());
await childWindow.getByRole("button",{name:'Contact Sales'}).first().click();

await childWindow.waitForTimeout(2000);
await childWindow.close();


//to take focus on parent
await page.bringToFront();

await page.waitForTimeout(2000);


})



test("Handle multiple windows",async({})=>{

 let browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
   let context:BrowserContext=await browser.newContext();
   let page:Page=await context.newPage();
   
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    
    let allLinks=[
          page.locator("//a[contains(@href,'linkedin')]"),
    page.locator("//a[contains(@href,'facebook')]"),
    page.locator("//a[contains(@href,'twitter')]"),
    page.locator("//a[contains(@href,'youtube')]"),
    page.locator("//a[contains(@href,'orangehrm.com')]")
    ]
 
let childWindowPages:Page[]=[];
    for(let link of allLinks)
    {
        
        let [childWindow]=await Promise.all([
            context.waitForEvent('page'),
            link.click()
        ]);

        await childWindow.waitForLoadState();
        childWindowPages.push(childWindow);
    }

    //total pages
    console.log("Total pages are: "+context.pages().length);

    //go to every child page and getthe title and close it

    for(let i of childWindowPages)
    {
    await i.bringToFront();
    console.log(await i.title());
    await i.waitForTimeout(1000);
    await i.close();
    
    }

    await page.bringToFront();
    await page.waitForTimeout(2000);
    

    




})