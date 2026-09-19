
import {test,expect, request} from "@playwright/test"
import { Buffer } from "buffer";//for encoding data

test("Test for no authentication",async({request})=>{



    //send the get request
        const response=await request.get("https://jsonplaceholder.typicode.com/posts/1");

    //varify status code
    expect(response.status()).toBe(200);

    //read response body
    const jsonRes=await response.json();
    console.log(jsonRes);

    //validate response
  expect(jsonRes.userId).toBe(1);
  expect(jsonRes.id).toBe(1);
  expect(jsonRes).toHaveProperty('title');

})

test("For Basic Authentication",async({request})=>{

  const username="postman";
  const password="password";
  //for encoding this data use Buffer package from Js
  //this will convert data into encoded string
  const base64credentials=Buffer.from(`${username}:${password}`).toString("base64");
console.log(base64credentials);//cG9zdG1hbjpwYXNzd29yZA==

const response=await request.get("https://postman-echo.com/basic-auth",
  {headers:{
    Authorization: `Basic ${base64credentials}`
  }}
)

const jsonRes=await response.json();

expect(response.status()).toBe(200);
console.log(jsonRes);

expect(jsonRes.authenticated).toBe(true);


    
})

test("APIKey testauth",async({request})=>{

  const apikey="free_user_371D25GCR1ikcLkDHqH4qCYlrnH"

  const response=await request.get("https://reqres.in/api/users?page=2",{
    headers:{
      'x-api-key':`${apikey}`
    }
  })

  expect(response.status()).toBe(200);


})

