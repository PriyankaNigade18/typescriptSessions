


import {test,expect} from "@playwright/test"
import { log } from "console";
import { json } from "stream/consumers";

let auth_Token={Authorization:'Bearer tokenfromaccount'};

let userId:number;
test("get user test",async({request})=>{
    console.log("Get user test");
    
   let response= await request.get("https://gorest.co.in/public/v2/users",{
        headers:auth_Token
    })

    console.log(response);

    //to get response body
    let jsonBody=await response.json();
    console.log(jsonBody);

    //to get status code
    console.log(response.status());
    
    //to get status message
    console.log(response.statusText());
    
    
    

})

//post call
test('create new user',async({request})=>{

    console.log("Creating new user");
    
//request payload
let userData={
    name:"Priyanka",
    email:`priyanka_${Date.now()}@open.com`,// //email:"priyanka@open.com",
    gender:"female",
    status:'active'
}

let response=await request.post("https://gorest.co.in/public/v2/users",{
    headers:auth_Token,
    data:userData

})

//get the responsebody
let jsonBody=await response.json();
console.log(jsonBody);

console.log(response.status());

//how to get id from jsonbody
userId=jsonBody.id;
console.log(userId);


})

//update
test('update new user',async({request})=>{

    console.log("Updating user");
    
//request payload
let userData={
    name:"PriyankaN",
    email:`priyankaautomation_${Date.now()}@open.com`,// //email:"priyanka@open.com",
    gender:"female",
    status:'active'
}

let response=await request.put("https://gorest.co.in/public/v2/users/"+userId,{
    headers:auth_Token,
    data:userData
})

//get the responsebody
let jsonBody=await response.json();
console.log(jsonBody);

console.log(response.status());

//how to get id from jsonbody

})

test('delete user',async({request})=>{

    console.log("deleting user");
    
    let response=await request.delete("https://gorest.co.in/public/v2/users/"+userId,{
        headers:auth_Token
    });

    console.log(response.status());
    console.log(response.statusText());
    
    
})


