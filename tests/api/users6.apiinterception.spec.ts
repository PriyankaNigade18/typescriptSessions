
import { test } from "@playwright/test";

//What is interception?
//Interception means stopping a request or response in the middle and controlling
//  it before it reaches its destination.
/*
Now Playwright can:

Watch the request.
Change the request.
Change the response.
Block the request.
Send a fake response.
*/

test("API interception - observe request", async ({ page }) => {

    await page.route(
        "https://jsonplaceholder.typicode.com/users/1",
        async route => {

            console.log("API intercepted!");

            console.log("URL:", route.request().url());

            console.log("Method:", route.request().method());

            await route.continue();
        }
    );

    await page.goto("https://jsonplaceholder.typicode.com/users/1");
});

/*
| Method             | Meaning                                                                       |
| ------------------ | ----------------------------------------------------------------------------- |
| `route.continue()` | Let the request go to the real server                                         |
| `route.abort()`    | Block the request                                                             |
| `route.fulfill()`  | Give the browser your own response                                            |
| `route.fetch()`    | Send the request to the real server and get its response so you can modify it |

*/

test("To block any api request",async({page})=>{
await page.route(
    "https://jsonplaceholder.typicode.com/users/1",
    async route => {

        console.log("Request intercepted");

        await route.abort();
    }
);
})


//mocking the response
test("Mock user API", async ({ page }) => {

    await page.route(
        "https://jsonplaceholder.typicode.com/users/1",
        async route => {

            await route.fulfill({
                status: 200,

                contentType: "application/json",

                body: JSON.stringify({
                    id: 1,
                    name: "Kiran",
                    username: "kiran123"
                })
            });
        }
    );

    await page.goto("https://jsonplaceholder.typicode.com/users/1");
await page.waitForTimeout(2000);
});
//fullfill():Don't go to the actual server. I will provide the response myself."


/*
1. What is the purpose of this test?

The purpose is:

Intercept every network request made by the browser and print its HTTP method and URL, then allow the request to continue normally.

It does not block or modify anything.
*/

// **/* wildcard : Match every URL/request.
test("Intercept request",async({page})=>{

    await page.route('**/*',async(route)=>{

        console.log(route.request().method());

        console.log(route.request().url());

        

        await route.continue();
        
        
    })
    await page.goto('https://tutorialsninja.com/demo/index.php?');
})

//mocking
/*
till the time original database will ready we use fake data
*/

test("Mock user API opencart", async ({ page }) => {

    let fakeProducts=[
        {name:'fake mackbook pro',price:23123},
        {name:'fake mackbook pro22',price:33123}
    ]
    await page.route(
        "https://tutorialsninja.com/demo/index.php?route=product/search&search=macbook",
        async route => {

            await route.fulfill({
                status:200,
                contentType:"application/json",
                body:JSON.stringify(fakeProducts)
            });
        }
    );

    await page.goto("https://tutorialsninja.com/demo/index.php?route=product/search&search=macbook");
await page.waitForTimeout(2000);
});