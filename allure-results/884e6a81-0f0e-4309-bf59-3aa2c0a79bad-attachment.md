# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users3.api.individual.spec.ts >> post: create a new user
- Location: tests\api\users3.api.individual.spec.ts:25:1

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
  3  | 
  4  | const token=process.env.TOKEN!;
  5  | let auth_Header={Authorization:`Bearer ${token}`};
  6  | 
  7  | //create generic function which will create first user and same user id 
  8  | // then we will use in all test for parallel testing
  9  | 
  10 | async function createUser(apiHelper:any)
  11 | {
  12 |     let userData={
  13 |         name:`Priyanka`,
  14 |         email:'priyanka'+new Date().getTime()+"gmail.com",
  15 |         gender:"female",
  16 |         status:'active'
  17 |     }
  18 |     
  19 |     let response=await apiHelper.post("/public/v2/users/",userData,auth_Header);
  20 | 
  21 |     return response.body;
  22 |    
  23 | }
  24 | 
  25 | test("post: create a new user",async({apiHelper})=>{
  26 | 
  27 |     let userRes=await createUser(apiHelper);
  28 | 
  29 |     let response=await apiHelper.get(`/public/v2/users/${userRes.id}`,auth_Header);
  30 | 
> 31 |     expect(response.status).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  32 |     console.log(response.body);
  33 |     
  34 | 
  35 | 
  36 | })
```