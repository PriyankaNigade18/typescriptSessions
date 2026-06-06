
import {test,expect, Frame, FrameLocator} from "@playwright/test"


test("Automate nested frames",async({page})=>{

    page.setDefaultTimeout(10000);
    await page.goto("https://selectorshub.com/iframe-scenario/");

    let frame1:FrameLocator=page.frameLocator("(//iframe[@id='pact1'])[1]");
    await frame1.locator("#inp_val").fill("Selenium");

    //frame1-->frame2-->ele
    let frame2:FrameLocator=frame1.frameLocator("#pact2");
    await frame2.locator("#jex").fill("playwright");

    //frame2--->frame3--->ele

    await frame2.frameLocator("#pact3").locator("#glaf").fill("Programming");

    await page.waitForTimeout(2000);
})


test("Test for frame element",async({page})=>{

 await page.goto("https://www.londonfreelance.org/courses/frames/index.html");
 let frame:FrameLocator=page.frameLocator("frame[name='main']");
 let title=await frame.getByRole('heading',{level:2}).innerText();
 console.log(title);

 await page.waitForTimeout(2000);
 
})






test("Test for total frames",async({page})=>{

    await page.goto("https://www.londonfreelance.org/courses/frames/index.html");

    let allFrames:Frame[]=page.frames();
    let frameCount=allFrames.length;
    console.log('Total frames are: '+frameCount);

    //Returns frame's name attribute as specified in the tag.
    for(let fr of allFrames)
    {
        let frName=fr.name();
        let frUrl=fr.url();

        console.log(frName+" : "+frUrl);
        
    }
    await page.waitForTimeout(2000);

    

})