# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\user.api.fixturebased.spec.ts >> PUT api-update user
- Location: tests\api\user.api.fixturebased.spec.ts:40:1

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
  5  | 
  6  | let auth_Header={Authorization:`Bearer ${token}`};
  7  | 
  8  | let userId:number;
  9  | test('GET api -get all users',async({apiHelper})=>{
  10 | 
  11 |     let response=await apiHelper.get(`/public/v2/users`,auth_Header);
  12 |     expect(response.status).toBe(200);
  13 |     console.log(response.status);
  14 |     expect(response.body.length).toBeGreaterThan(0);
  15 | 
  16 | })
  17 | 
  18 | test("POST api-create new user",async({apiHelper})=>{
  19 | 
  20 |     //request payload
  21 |     let userData={
  22 |     name:"Priyanka",
  23 |     email:`priyanka_${Date.now()}@open.com`,// //email:"priyanka@open.com",
  24 |     gender:"female",
  25 |     status:'active'
  26 | }
  27 | 
  28 | let response=await apiHelper.post("/public/v2/users",userData,auth_Header);
  29 | 
  30 | expect(response.status).toBe(201);
  31 | expect(response.body.name).toBe(userData.name);
  32 | 
  33 |  userId=response.body.id;
  34 | 
  35 | console.log("User created with id: "+userId);
  36 | 
  37 | 
  38 | })
  39 | 
  40 | test("PUT api-update user",async({apiHelper})=>{
  41 | 
  42 |  //request payload
  43 |     let userData={
  44 |     name:"PriyankaN",
  45 |     email:`priyanka_${Date.now()}@open.com`,// //email:"priyanka@open.com",
  46 |     gender:"female",
  47 |     status:'active'
  48 | }
  49 | 
  50 | 
  51 | let response=await apiHelper.put(`/public/v2/users/${userId}`,userData,auth_Header);
  52 | 
> 53 | expect(response.status).toBe(200);
     |                         ^ Error: expect(received).toBe(expected) // Object.is equality
  54 | expect(response.body.name).toBe(userData.name);
  55 | expect(response.body.status).toBe(userData.status);
  56 | console.log(response.body);
  57 | 
  58 | 
  59 | 
  60 | })
  61 | 
  62 | 
  63 | 
  64 | 
```