
import {Locator, Page} from "@playwright/test";
import { BasePage } from "./BasePage.js";

export class LoginPage extends BasePage
{

//private locators
private readonly username:Locator;
private readonly password:Locator;
private readonly loginBtn:Locator;


//constructor
constructor(page:Page)
{
    super(page);
    this.username=page.locator("#user-name");
    this.password=page.locator("#password");
    this.loginBtn=page.locator("#login-button");


}



//public methods
async goToLoginPage():Promise<void>
{
    await this.page.goto("/");

}

async getPageTitle():Promise<string>
{
    return await this.page.title();
}

async getPageUrl():Promise<String>
{
    return this.page.url();
}

async doLogin(username:string,password:string):Promise<void>
{
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
}


}