
//restbooker site

import fs from "fs";
import {test,expect, APIResponse} from "@playwright/test";


const BASE_URL="https://restful-booker.herokuapp.com";

test("Test for GET request",async({request})=>{

    let response:APIResponse=await request.get("https://restful-booker.herokuapp.com/booking");
    console.log("Status code is: ",response.status());
    console.log("Status time: ",await response.body());
    let res=await response.json();
    console.log(res);
  
})

//https://restful-booker.herokuapp.com/booking?firstname=Jim

test("Test for path and query param",async({request})=>{

    //https://restful-booker.herokuapp.com/booking?firstname=Jim

    const firstname="Jim";

     const  response:APIResponse=await request.get(`${BASE_URL}/booking`,{
        params:
            firstname
     });
    console.log("Status code is: ",response.status());
    console.log("Status time: ",await response.body());
    let res=await response.json();
    console.log(res);

})



test("Create NewBooking",async({request})=>{
 let payload={
    firstname : "Jim",
    lastname : "Brown",
    totalprice : 111,
    depositpaid : true,
    bookingdates : {
        checkin : "2018-01-01",
        checkout : "2019-01-01"
    },
    additionalneeds : "Breakfast"
    }

let response=await request.post(`${BASE_URL}/booking`,{data:payload});

    expect(response.status()).toBe(200);

    let jsonres=await response.json();
    console.log(jsonres);

    //to validate response property
    expect(jsonres).toHaveProperty('bookingid');
    expect(jsonres).toHaveProperty('booking');
    expect(jsonres.bookingid).toEqual(expect.any(Number));

    //to validate data/booking fields
    let bookingObj=await jsonres.booking;
    expect(bookingObj).toMatchObject(payload);

    //to validate checkin dates
    expect(bookingObj.bookingdates).toMatchObject( {
        checkin : "2018-01-01",
        checkout : "2019-01-01"
    })


})

test("POST: test for create new resource",async({request})=>{

let payload={
firstname : "Jim",
lastname : "Brown",
totalprice : 111,
depositpaid : true,
bookingdates : {
    checkin : "2018-01-01",
    checkout : "2019-01-01"
},
additionalneeds : "Breakfast"
}

let response=await request.post("https://restful-booker.herokuapp.com/booking",{headers:{
'Content-Type':' application/json'},data:payload});

expect(response.status()).toBe(200);

let jsonres=await response.json();
console.log(jsonres);    
    
})

test("Post call with Json file payload ",async({request})=>{

 const payload = JSON.parse(
        fs.readFileSync('src/data/postdata.json', 'utf-8')
    );

    let response=await request.post("https://restful-booker.herokuapp.com/booking",{headers:{
    'Content-Type':' application/json'},data:payload});

    expect(response.status()).toBe(200);

    let jsonres=await response.json();
    console.log(jsonres);

    //to validate response property
    expect(jsonres).toHaveProperty('bookingid');
    expect(jsonres).toHaveProperty('booking');
    expect(jsonres.bookingid).toEqual(expect.any(Number));

    //to validate data/booking fields
    let bookingObj=await jsonres.booking;
    expect(bookingObj).toMatchObject(payload);

    //to validate fields
    expect(bookingObj).toMatchObject(
        {
            firstname:payload.firstname,
            lastname:payload.lastname,
            totalprice:payload.totalprice,
            depositpaid:payload.depositpaid,

        }
    )

    //to validate checkin dates
    expect(bookingObj.bookingdates).toMatchObject( {
        checkin : "2018-01-01",
        checkout : "2019-01-01"
    })

    expect(bookingObj.bookingdates).toMatchObject( {
        checkin :payload.bookingdates.checkin,
        checkout :payload.bookingdates.checkout
    })

})



