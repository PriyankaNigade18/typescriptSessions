import{test,expect} from "@playwright/test"

//change setup in config file and run

test('Test for Launch the application',async({page})=>{

//open application
await page.goto("https://www.google.com");

})