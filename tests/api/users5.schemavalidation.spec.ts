

import {test,expect} from "../../src/fixtures/apifixture.js";
import AjvModule from "ajv";

const Ajv = AjvModule.default;

const ajv = new Ajv();

const token=process.env.TOKEN!;
let auth_Header={Authorization:`Bearer ${token}`,
     "Content-Type": "application/json",
        Accept: "application/json"};

let userSchema={
   "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "gender": {
      "type": "string"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "id",
    "name",
    "email",
    "gender",
    "status"]
}

let arrayschema={
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "number"
      },
      "name": {
        "type": "string"
      },
      "email": {
        "type": "string"
      },
      "gender": {
        "type": "string"
      },
      "status": {
        "type": "string"
      }
    },
    "required": [
      "id",
      "name",
      "email",
      "gender",
      "status"
    ]
  }
}

test("Get - single user test schema",async({apiHelper})=>{

    //request payload
    let userData={
    name:"Priyanka",
    email:`priyanka_${Date.now()}@open.com`,// //email:"priyanka@open.com",
    gender:"female",
    status:'active'
}

    //create user
    let newUser=await apiHelper.post("/public/v2/users",userData,auth_Header);
    let userId=newUser.body.id;

    //get the same user
    let response=await apiHelper.get(`/public/v2/users/${userId}`,auth_Header);
    expect(response.status).toBe(200);

    //schema validation
    
    let validate=ajv.compile(userSchema);
    let isschemaValid=validate(response.body);

    if(!isschemaValid)
    {
        console.log("Schema Error!"+validate.errors);
       
        
    }

    expect(isschemaValid).toBeTruthy();


})

test("Test for array schema type",async({apiHelper})=>{
 //get the same user
    let response=await apiHelper.get(`/public/v2/users`,auth_Header);
    expect(response.status).toBe(200);

    //schema validation
    
    let validate=ajv.compile(arrayschema);
    let isschemaValid=validate(response.body);

    if(!isschemaValid)
    {
        console.log("Schema Error!"+validate.errors);
       
        
    }

    expect(isschemaValid).toBeTruthy();

})