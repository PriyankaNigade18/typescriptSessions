import {test,expect} from "@playwright/test"

test("Test file upload if type=file is not ",async({page})=>{

    await page.goto("https://naveenautomationlabs.com/opencart/ui/file-upload.html");

    let [fileUpload]=await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator("#custom-upload-btn").click()
    ])

    await fileUpload.setFiles([
        "./downloads/sampleFile.txt"
    ])

    //if you wanted to remove this then 
    //await fileUpload.setFiles([ ]);

    await page.waitForTimeout(2000);

})