
import{test,expect} from "@playwright/test"


test('Test for Launch the application',async({page})=>{

//open application
await page.goto("https://www.google.com");

//get the title and print the same
let appTitle:string=await page.title();
console.log("Application title is: "+appTitle);

//get the url and print
let appUrl:string=page.url();
console.log("Application url is: "+appUrl);

await page.waitForTimeout(3000);




})