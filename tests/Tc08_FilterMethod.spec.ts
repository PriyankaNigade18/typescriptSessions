
import{test,expect, Locator} from "@playwright/test"


test("Test for filter method",async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    let allFooters:Locator=page.locator("footer a");
    await allFooters.filter({hasText:"Privacy Policy",visible:true}).click();
})

test("Test for Amazon Search",async({page})=>{
await page.goto("https://www.amazon.in/");

await page.getByRole('searchbox',{name:'Search Amazon.in'}).fill("MacBook Pro");
await page.locator("div.s-suggestion span").filter({hasText:'16 inch'}).click();

await page.pause();

})