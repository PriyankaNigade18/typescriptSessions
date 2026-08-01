import {test as baseTest} from "@playwright/test";
import { ApiHelper } from "../api/ApiHelper.js";

//define types for page fixtures
type apiFixtures={
   apiHelper:ApiHelper
}

//extend playwright basetest
export let test=baseTest.extend<apiFixtures>({

    apiHelper:async({request},use)=>{
        let apiHelper=new ApiHelper(request,process.env.APIBASEURL!);
        await use(apiHelper);
    }
    
})

export {expect} from "@playwright/test";