/*
import {test,expect} from "@playwright/test"

let accessToken;


test("Get the token first",async({request})=>{
    let baseUrl="https://github.com/login/oauth/access_token";
    let apiToken="apitoken"
    let queryParam={
        client_id:`id`,
        client_secret:`se`,
        code:`code`//this will have short lifespan so generate it and use it
    }
 let response=await request.get(`https:git access_token`,{headers:{
    Accept:"application/json"
 }
    ,params:queryParam})

 console.log(response);
 console.log(await response.json());

 let responseBody=await response.json();
accessToken=responseBody.access_token;

let auth_Token={Authorization:`Bearer ${accessToken}`}
let repo=await request.get("https:githubuserrepo",{headers:auth_Token})
 console.log(await repo.json());
 
})

*/