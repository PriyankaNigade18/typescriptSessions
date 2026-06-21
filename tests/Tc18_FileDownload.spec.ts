
import {test,expect} from "@playwright/test"
import fs from "fs"

test("Test for file download",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/download");

let [downloadFile]=await Promise.all([
    page.waitForEvent('download'),
    page.locator("//a[text()='sampleFile.txt']").click()
])


//during file download expecting that there should notbe any error
expect(await downloadFile.failure()).toBeNull();

//file download and saved in temporary location in pw browser not in our window
//get the file name
console.log("File name: "+downloadFile.suggestedFilename());


//save to the specific location
let filePath="./downloads/"+downloadFile.suggestedFilename();
await downloadFile.saveAs(filePath);

//verify the file exist?
expect(fs.existsSync(filePath)).toBeTruthy();

//verify file size >0
let filesize=fs.statSync(filePath).size;
console.log("File size is: "+filesize);

expect(filesize).toBeGreaterThan(0);


await page.waitForTimeout(2000);



})