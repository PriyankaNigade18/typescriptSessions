/*
Install required package
npm install avj

AVJ used for json schema validation
AJV stands for "Another json schema validator"

ajv.compile(schema) this returns a validator function
validate(data) checks if response matches the schema

*/


import {test,expect} from "@playwright/test"
//import Ajv from "ajv"
import AjvModule from "ajv";

const Ajv = AjvModule.default;



test("Schema validation",async({request})=>{

    //send the request and get the response
    const response=await request.get("https://mocktarget.apigee.net/json");
    const jsonRes=await response.json();
    console.log(jsonRes);
    

    //step2: define the schema
    const schema={
   "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "city": {
      "type": "string"
    },
    "state": {
      "type": "string"
    }
  },
  "required": [
    "firstName",
    "lastName",
    "city",
    "state"
  ]
}
 
//step3: check response against schema
const ajv=new Ajv();
const validate=ajv.compile(schema);//it returns validate anonymous function
const isValid=validate(jsonRes);//check response matches schema

expect(isValid).toBeTruthy();

//if response is not align with schema then you will get error








})