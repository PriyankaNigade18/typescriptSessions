
import {test} from "@playwright/test"


test("this is for screenshot attach and display in report",async({page},testInfo)=>{

    await page.goto("https://www.facebook.com");

    //attach screenshot in report
    let screenshot=await page.screenshot();

    await test.info().attach("Facebookpage",{
        body:screenshot,
        contentType:'Image/png'
    });


//attach  custom logs in playwright
await testInfo.attach('registerLog',{
    body:"user:priyanka,cart:3,price$1000",
    contentType:'text/plain'
})

})
