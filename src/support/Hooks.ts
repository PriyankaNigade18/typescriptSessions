
import {Before,After,BeforeAll,AfterAll} from "@cucumber/cucumber"
import { CustomWorld } from "./world.js"
import { Browser,chromium } from "@playwright/test"

let browser:Browser;

BeforeAll(async()=>{
browser=await chromium.launch({headless:false});

})

//in arrow function can not have this so use normalanonymous function
Before(async function(this: CustomWorld){
this.context=await browser.newContext();
this.page=await this.context.newPage();
})

After(async function(this:CustomWorld){
await this.page.close();
await this.context.close();
})

AfterAll(async()=>{
    await browser.close();
})