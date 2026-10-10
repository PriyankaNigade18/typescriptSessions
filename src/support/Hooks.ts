
import {Before,After,BeforeAll,AfterAll, ITestCaseHookParameter, Status} from "@cucumber/cucumber"
import { CustomWorld } from "./world.js"
import { Browser,chromium, firefox } from "@playwright/test"
import {config} from "../config/config";

let browser:Browser;

BeforeAll(async()=>{

    //crossbrowser test add switch case
    switch(config.browser)
    {
        //after 1.5.7 version now we can add like this channel is not required
        case "firefox": 
        browser=await firefox.launch({headless:config.headless});
        break;

        case "webkit": 
        browser=await firefox.launch({headless:config.headless});
        break;

        default:
        browser=await chromium.launch({headless:config.headless});
        break;
        
    }

//browser=await chromium.launch({headless:false});
})

//in arrow function can not have this so use normalanonymous function
Before(async function(this: CustomWorld){
this.context=await browser.newContext();
this.page=await this.context.newPage();
})

// After(async function(this:CustomWorld){
// await this.page.close();
// await this.context.close();

// //after test capture screenshot for fail testcase
// })


After(async function(this:CustomWorld,scenario:ITestCaseHookParameter){

    //if(scenario.result?.status===Status.FAILED)
    //{
        const screenshot=await this.page.screenshot();
        this.attach(screenshot,'image/png');

   // }
    await this.page.close();
    await this.context.close();

})
AfterAll(async()=>{
    await browser.close();
})