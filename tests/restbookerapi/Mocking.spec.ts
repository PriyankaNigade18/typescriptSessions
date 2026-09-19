
import {test,expect} from "@playwright/test"


test("mocking the api",async({page})=>{

    //intercept api url before navigating
    await page.route("**/api/v1/fruits",async(route)=>{
        const fakeres=[
            {name:'Apple',id:123},
            {name:'Mango',id:345}
        ]

        //step2: full fill the request with your mock data
        await route.fulfill({
            status:200,
            contentType:"application/json",
            body:JSON.stringify(fakeres)
        })   
    })
//step3: goto the page and verify mock data
    await page.goto("https://demo.playwright.dev/api-mocking/");

await expect(page.getByText("Apple")).toBeVisible();
    await page.waitForTimeout(2000);
})