
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