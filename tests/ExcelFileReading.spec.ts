


import {test,expect} from "@playwright/test"
import {readSheet} from "../utils/ExcelSheetwise.js"
test("Excel file reading",()=>
{
    let loginData=readSheet("login",2);
   
   
    console.log(loginData.username);
    
    
})