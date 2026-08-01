# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users3.api.individual.spec.ts >> post: create a new user
- Location: tests\api\users3.api.individual.spec.ts:23:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | 
  2  | import {test,expect} from "../../src/fixtures/apifixture.js"
  3  | const token=process.env.TOKEN!;
  4  | let auth_Header={Authorization:`Bearer ${token}`};
  5  | 
  6  | //create generic function which will create first user and same user id 
  7  | // then we will use in all test for parallel testing
  8  | 
  9  | async function createUser(apiHelper:any)
  10 | {
  11 |     let userData={
  12 |         name:`Priyanka`,
  13 |         email:'priyanka'+new Date().getTime()+"gmail.com",
  14 |         gender:"female",
  15 |         status:'active'
  16 |     }
  17 |     
  18 |     let response=await apiHelper.post("/public/v2/users/");
  19 |     return response.body;
  20 |    
  21 | }
  22 | 
  23 | test("post: create a new user",async({apiHelper})=>{
  24 | 
  25 |     let userRes=await createUser(apiHelper);
  26 | 
  27 |     let response=await apiHelper.get(`/public/v2/users/${userRes.id}`,auth_Header);
  28 | 
> 29 |     expect(response.status).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  30 |     console.log(response.body);
  31 |     
  32 | 
  33 | 
  34 | })
```