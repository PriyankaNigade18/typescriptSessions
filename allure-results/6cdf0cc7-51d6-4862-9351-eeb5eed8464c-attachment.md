# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users5.schemavalidation.spec.ts >> Get - single user test schema
- Location: tests\api\users5.schemavalidation.spec.ts:42:1

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | 
  2  | 
  3  | import {test,expect} from "../../src/fixtures/apifixture.js";
  4  | import AjvModule from "ajv";
  5  | 
  6  | const Ajv = AjvModule.default;
  7  | 
  8  | const ajv = new Ajv();
  9  | 
  10 | const token=process.env.TOKEN!;
  11 | let auth_Header={Authorization:`Bearer ${token}`,
  12 |      "Content-Type": "application/json",
  13 |         Accept: "application/json"};
  14 | 
  15 | let userSchema={
  16 |    "type": "object",
  17 |   "properties": {
  18 |     "id": {
  19 |       "type": "number"
  20 |     },
  21 |     "name": {
  22 |       "type": "string"
  23 |     },
  24 |     "email": {
  25 |       "type": "string"
  26 |     },
  27 |     "gender": {
  28 |       "type": "string"
  29 |     },
  30 |     "status": {
  31 |       "type": "boolean"
  32 |     }
  33 |   },
  34 |   "required": [
  35 |     "id",
  36 |     "name",
  37 |     "email",
  38 |     "gender",
  39 |     "status"]
  40 | }
  41 | 
  42 | test("Get - single user test schema",async({apiHelper})=>{
  43 | 
  44 |     //request payload
  45 |     let userData={
  46 |     name:"Priyanka",
  47 |     email:`priyanka_${Date.now()}@open.com`,// //email:"priyanka@open.com",
  48 |     gender:"female",
  49 |     status:'active'
  50 | }
  51 | 
  52 |     //create user
  53 |     let newUser=await apiHelper.post("/public/v2/users",userData,auth_Header);
  54 |     let userId=newUser.body.id;
  55 | 
  56 |     //get the same user
  57 |     let response=await apiHelper.get(`/public/v2/users/${userId}`,auth_Header);
  58 |     expect(response.status).toBe(200);
  59 | 
  60 |     //schema validation
  61 |     
  62 |     let validate=ajv.compile(userSchema);
  63 |     let isschemaValid=validate(response.body);
  64 | 
  65 |     if(!isschemaValid)
  66 |     {
  67 |         console.log("Schema Error!"+validate.errors);
  68 |        
  69 |         
  70 |     }
  71 | 
> 72 |     expect(isschemaValid).toBeTruthy();
     |                           ^ Error: expect(received).toBeTruthy()
  73 | 
  74 | 
  75 | })
```