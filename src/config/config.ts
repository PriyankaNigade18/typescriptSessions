
import * as dotenv from "dotenv"
import * as path from "path"

//load environment specific file
let enviornment=process.env.ENV ||'default'; 
let envFileName=enviornment==='default'?".env":`.env.${enviornment}`;

dotenv.config({path:path.resolve(process.cwd(),envFileName)});

export const config={
    baseurl:process.env.APPURL || "https://www.saucedemo.com/",
    headless:process.env.HEADLESS==='true',
    browser:process.env.BROWSER || 'chromium',

    //multiusers we can maintainw with nested object
    users:
    {
        standard:{
            username:process.env.USERNAME || 'standard_user',
            password:process.env.PASSWORD || 'secret_sauce'
        }
    },
    timeout:{
        default:30000
    }
}