# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cartpagetest.spec.ts >> Test for checkoutPagenavigation
- Location: tests\cartpagetest.spec.ts:18:1

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.saucedemo.com/
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: www.saucedemo.com
      - text: ’s DNS address could not be found. Diagnosing the problem.
    - generic [ref=e10]:
      - paragraph
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "Try running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e14]: DNS_PROBE_STARTED
  - button "Reload" [ref=e17] [cursor=pointer]
```

# Test source

```ts
  1  | 
  2  | import {Locator, Page} from "@playwright/test";
  3  | import { BasePage } from "./BasePage.js";
  4  | 
  5  | export class LoginPage extends BasePage
  6  | {
  7  | 
  8  | //private locators
  9  | private readonly username:Locator;
  10 | private readonly password:Locator;
  11 | private readonly loginBtn:Locator;
  12 | private readonly errorMessage:Locator;
  13 | 
  14 | 
  15 | //constructor
  16 | constructor(page:Page)
  17 | {
  18 |     super(page);
  19 |     this.username=page.locator("#user-name");
  20 |     this.password=page.locator("#password");
  21 |     this.loginBtn=page.locator("#login-button");
  22 |     this.errorMessage=page.locator("//h3[@data-test='error']");
  23 | 
  24 | 
  25 | }
  26 | 
  27 | 
  28 | 
  29 | //public methods
  30 | async goToLoginPage():Promise<void>
  31 | {
> 32 |     await this.page.goto("/");
     |                     ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.saucedemo.com/
  33 | 
  34 | }
  35 | 
  36 | async getPageTitle():Promise<string>
  37 | {
  38 |     return await this.page.title();
  39 | }
  40 | 
  41 | async getPageUrl():Promise<String>
  42 | {
  43 |     return this.page.url();
  44 | }
  45 | 
  46 | async doLogin(username:string,password:string):Promise<void>
  47 | {
  48 |     await this.username.fill(username);
  49 |     await this.password.fill(password);
  50 |     await this.loginBtn.click();
  51 | }
  52 | 
  53 | 
  54 | async isInvalidLoginErrorMessageDisplays():Promise<boolean>
  55 | {
  56 | return await this.errorMessage.isVisible();
  57 | }
  58 | 
  59 | 
  60 | async getInvalidLoginErrorMessage():Promise<string>
  61 | {
  62 | return await this.errorMessage.innerText();
  63 | }
  64 | }
```