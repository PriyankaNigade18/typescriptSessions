# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users5.schemavalidation.spec.ts >> Get - single user test schema
- Location: tests\api\users5.schemavalidation.spec.ts:39:1

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | 
  2  | import {APIRequestContext} from "@playwright/test"
  3  | import { endianness } from "node:os";
  4  | 
  5  | export class ApiHelper{
  6  |     private readonly request:APIRequestContext;
  7  |     private readonly baseURL:string;
  8  | 
  9  |     constructor(request:APIRequestContext,baseURL:string)
  10 |     {
  11 |         this.request=request;
  12 |         this.baseURL=baseURL;
  13 |     }
  14 | 
  15 |     //public methods
  16 |     async get(endpoint:string,headers?:Record<string,string>)
  17 |     {
  18 |         let response=await this.request.get(`${this.baseURL}${endpoint}`,
  19 |             {headers:headers
  20 |             });
  21 | 
  22 |             return {status:response.status(),
  23 |                 body:await response.json()
  24 |             }
  25 |     }
  26 | 
  27 |     async post(endpoint:string,data:object,headers?:Record<string,string>)
  28 |     {
  29 |         let response=await this.request.post(`${this.baseURL}${endpoint}`,
  30 |             {headers:headers,
  31 |                 data:data
  32 |             });
  33 | 
  34 |             return {status:response.status(),
> 35 |                 body:await response.json()
     |                      ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  36 |             }
  37 |     }
  38 | 
  39 |       async put(endpoint:string,data:object,headers?:Record<string,string>)
  40 |     {
  41 |         let response=await this.request.put(`${this.baseURL}${endpoint}`,
  42 |             {headers:headers,
  43 |                 data:data
  44 |             });
  45 | 
  46 |             return {status:response.status(),
  47 |                 body:await response.json()
  48 |             }
  49 |     }
  50 | 
  51 |     async delete(endpoint:string,headers?:Record<string,string>)
  52 |     {
  53 |         let response=await this.request.delete(`${this.baseURL}${endpoint}`,
  54 |             {headers:headers,
  55 |                
  56 |             });
  57 | 
  58 |             return {status:response.status()
  59 |             }
  60 |     }
  61 | }
  62 | 
  63 | //to supply this in test case lets create fixture
```