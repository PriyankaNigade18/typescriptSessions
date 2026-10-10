import {Given,When,Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test"
import { LoginPage } from "../pages/Loginpage";
import { CustomWorld } from "../support/world";

let loginPage:LoginPage
Given('User on Login page', async function (this:CustomWorld) {
 
    loginPage=new LoginPage(this.page);
    await loginPage.navigate();
});

When('User enter username {string}', async function (this:CustomWorld,un) {
  await loginPage.enterUserName(un);
});

When('User enter password {string}', async function (this:CustomWorld,psw) {
  await loginPage.enterPassword(psw);
});

When('User click on Login button', async function (this:CustomWorld) {
await loginPage.clickOnLogin();
await loginPage.waitforStep();

});

Then('User should navigate to inventory page', async function (this:CustomWorld) {
  expect(this.page).toHaveURL(/inventory/);
  console.log("Login completed!User Navigated to inventory page!");
  
});

Then('User should see error message {string}', async function (this:CustomWorld,expMessage:string) {
  //forthis create getErrormessage in page class
  let actualError=await loginPage.getErrorMessage();
  expect(actualError).toContain(expMessage);
});


//data driven
Then('User should see {string}', async function (this:CustomWorld,result:string) {
  
  if(result === "inventory page")
  {
    expect(this.page).toHaveURL(/inventory/);
  console.log("Login completed!User Navigated to inventory page!");
  }else{
      let actualError=await loginPage.getErrorMessage();
     expect(actualError).toContain(result);
  }
});