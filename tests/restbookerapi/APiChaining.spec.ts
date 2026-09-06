/*
createbooking-->bookingid
create token
bookingid+requestpayload--->partial update
bookingid+requestpayload--->full update
bookingid--->delete
*/

import {test,expect} from "@playwright/test"
import fs from "fs";
import { getRawPointer } from "node:ffi";

//utility function to read JSON data from  file
function readJson(filepath:string)
{
return JSON.parse(fs.readFileSync(filepath,"utf-8"));
}


const BASE_URL="https://restful-booker.herokuapp.com";

test("test for create-->get--->update request",async({request})=>{
    //step1: create booking
    const createbookingdata=readJson("src/data/postdata.json");

    const  response=await request.post(`${BASE_URL}/booking`,
                            {headers:{
                                    'Content-Type': 'application/json'
                                    },data:createbookingdata});

        //extract body
        const jsonRes=await response.json();

        //get the booking id
        const bookingid=jsonRes.bookingid;

        //step2:Get the response based on id
        const getRes=await request.get(`${BASE_URL}/booking/${bookingid}`);
        const getJson=await getRes.json();
        console.log("Booking details defore update: ",getJson);

        //step3: create token-->put/patch/delete
        const authData=readJson("src/data/authdata.json");
        const authRes=await request.post(`${BASE_URL}/auth`,{headers:{
            'Content-Type': 'application/json'
        },data:authData});

        //get the token
       const authJson=await authRes.json();
       const  token=authJson.token;

       console.log("New token generated: "+token);
       
       //step4: partial update
const patchData=readJson("src/data/patchdata.json");

      const patchRes=await request.patch(`${BASE_URL}/booking/${bookingid}`,{headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cookie': `token=${token}`
       },data: patchData});

       expect(patchRes.status()).toBe(200);

      const patchJson=await patchRes.json();
       console.log("Updated booking: ", patchJson);
       
        
})

test("test for create-->get--->Full update request",async({request})=>{
    //step1: create booking
    const createbookingdata=readJson("src/data/postdata.json");

    const  response=await request.post(`${BASE_URL}/booking`,
                            {headers:{
                                    'Content-Type': 'application/json'
                                    },data:createbookingdata});

        //extract body
        const jsonRes=await response.json();

        //get the booking id
        const bookingid=jsonRes.bookingid;

        //step2:Get the response based on id
        const getRes=await request.get(`${BASE_URL}/booking/${bookingid}`);
        const getJson=await getRes.json();
        console.log("Booking details defore update: ",getJson);

        //step3: create token-->put/patch/delete
        const authData=readJson("src/data/authdata.json");
        const authRes=await request.post(`${BASE_URL}/auth`,{headers:{
            'Content-Type': 'application/json'
        },data:authData});

        //get the token
       const authJson=await authRes.json();
       const  token=authJson.token;

       console.log("New token generated: "+token);
       
       //step4: partial update
    const putData=readJson("src/data/putdata.json");

      const putRes=await request.patch(`${BASE_URL}/booking/${bookingid}`,{headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cookie': `token=${token}`
       },data: putData});

       expect(putRes.status()).toBe(200);

      const putJson=await putRes.json();
       console.log("Full Updated booking: ", putJson);
       
        
})

//delete
test("test for create-->get--->delete",async({request})=>{
    //step1: create booking
    const createbookingdata=readJson("src/data/postdata.json");

    const  response=await request.post(`${BASE_URL}/booking`,
                            {headers:{
                                    'Content-Type': 'application/json'
                                    },data:createbookingdata});

        //extract body
        const jsonRes=await response.json();

        //get the booking id
        const bookingid=jsonRes.bookingid;

        //step2:Get the response based on id
        const getRes=await request.get(`${BASE_URL}/booking/${bookingid}`);
        const getJson=await getRes.json();
        console.log("Booking details defore update: ",getJson);

        //step3: create token-->put/patch/delete
        const authData=readJson("src/data/authdata.json");
        const authRes=await request.post(`${BASE_URL}/auth`,{headers:{
            'Content-Type': 'application/json'
        },data:authData});

        //get the token
       const authJson=await authRes.json();
       const  token=authJson.token;

       console.log("New token generated: "+token);
       
       //step4:delete record
       let deleteres=await request.delete(`${BASE_URL}/booking/${bookingid}`,{headers:{
        'Content-Type': 'application/json',
        'Cookie': `token=${token}`
       }})
    
       expect(deleteres.status()).toBe(201);
       console.log('Record deleted!');
       
       
        
})