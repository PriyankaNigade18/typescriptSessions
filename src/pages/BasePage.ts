

import {Page} from "@playwright/test";


export class BasePage{


protected readonly page;
private readonly footerLink;


constructor(page:Page)
{
this.page=page;
this.footerLink=page.locator("//footer");
}


async getPageTitle():Promise<String>
{
    return await this.page.title();
}

async getPageUrl():Promise<String>
{
    return this.page.url();
}

async getPageFooterCount():Promise<number>
{
    return await this.footerLink.count();
}

async getPageFooters():Promise<string[]>
{
    return await this.footerLink.allInnerTexts();
}

async wait(timeout:number):Promise<void>
{
await this.page.waitForTimeout(timeout);
}
}