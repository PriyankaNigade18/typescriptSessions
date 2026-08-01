
import {test,expect} from "../../src/fixtures/apifixture.js"

const token=process.env.TOKEN!;

let auth_Header={Authorization:`Bearer ${token}`};

let userId:number;
test('GET api -get all users',async({apiHelper})=>{

    let response=await apiHelper.get(`/public/v2/users`,auth_Header);
    expect(response.status).toBe(200);
    console.log(response.status);
    expect(response.body.length).toBeGreaterThan(0);

})

test("POST api-create new user",async({apiHelper})=>{

    //request payload
    let userData={
    name:"Priyanka",
    email:`priyanka_${Date.now()}@open.com`,// //email:"priyanka@open.com",
    gender:"female",
    status:'active'
}

let response=await apiHelper.post("/public/v2/users",userData,auth_Header);

expect(response.status).toBe(201);
expect(response.body.name).toBe(userData.name);

 userId=response.body.id;

console.log("User created with id: "+userId);


})

test("PUT api-update user",async({apiHelper})=>{

 //request payload
    let userData={
    name:"PriyankaN",
    email:`priyanka_${Date.now()}@open.com`,// //email:"priyanka@open.com",
    gender:"female",
    status:'active'
}


let response=await apiHelper.put(`/public/v2/users/${userId}`,userData,auth_Header);

expect(response.status).toBe(200);
expect(response.body.name).toBe(userData.name);
expect(response.body.status).toBe(userData.status);
console.log(response.body);
console.log("User updated with Id:"+userId);


})

//here execute all test in sequence
test("DELETE api:delete the user",async({apiHelper})=>{

    let response=await apiHelper.delete(`/public/v2/users/${userId}`,auth_Header)

    expect(response.status).toBe(204);
    console.log("User deleted with id: "+userId);
    
})
//but here we cant run in parallel so let right independent test which will run in parallel



