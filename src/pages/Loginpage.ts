
import {Page} from "@playwright/test"
import { config } from "../config/config";


export class LoginPage{

    constructor(private page:Page)
    {

    }

    private locators={
        username:"#user-name",
        password:"#password",
        loginbutton:"#login-button",
        errorMessage:"h3[data-test='error']"
    }

    async navigate()
    {
        //await this.page.goto("https://www.saucedemo.com/");
        await this.page.goto(config.baseurl);
    }

    async enterUserName(un:string)
    {
 await this.page.locator(this.locators.username).fill(un);

    }

     async enterPassword(psw:string)
    {
  await this.page.locator(this.locators.password).fill(psw);

    }
     async clickOnLogin()
    {
  await this.page.locator(this.locators.loginbutton).click();

    }
    async doLogin(un:string,psw:string)
    {
        await this.page.locator(this.locators.username).fill(un);
        await this.page.locator(this.locators.password).fill(psw);
        await this.page.locator(this.locators.loginbutton).click();

    }

    async getUrl():Promise<string>
    {
        return this.page.url();
    }

    async waitforStep()
    {
        await this.page.waitForTimeout(2000);
    }

    //second senario
    async getErrorMessage():Promise<string>
    {
        return this.page.locator(this.locators.errorMessage).innerText();
    }

}