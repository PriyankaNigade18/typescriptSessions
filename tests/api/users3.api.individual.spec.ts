
//parallel testing 
import {test,expect} from "../../src/fixtures/apifixture.js"

const token=process.env.TOKEN!;
let auth_Header={Authorization:`Bearer ${token}`};

//create generic function which will create first user and same user id 
// then we will use in all test for parallel testing

async function createUser(apiHelper:any)
{
    //request payload
    let userData={
    name:"Priyanka",
    email:`priyanka_${Date.now()}@open.com`,// //email:"priyanka@open.com",
    gender:"female",
    status:'active'
}
    
    let response=await apiHelper.post("/public/v2/users",userData,auth_Header);
    expect(response.status).toBe(201);
    return response.body;
   
}

//Test1: create user and validate using get()
test("post: create a new user",async({apiHelper})=>{

    let userRes=await createUser(apiHelper);

    let response=await apiHelper.get(`/public/v2/users/${userRes.id}`,auth_Header);

    expect(response.status).toBe(200);
    console.log(response.body);

})

//create user+get the id+use it in put and verify
test('PUT-update user',async({apiHelper})=>{

    let userRes=await createUser(apiHelper);

    let updateUser=
    {
        name:"PriyankaN",
        status:'inactive'
    }

    //updateUser
    let response=await apiHelper.put(`/public/v2/users/${userRes.id}`,updateUser,auth_Header);
    expect(response.status).toBe(200);

    //get the user
    let getRes=await apiHelper.get(`/public/v2/users/${userRes.id}`,auth_Header);
    expect(getRes.status).toBe(200);
    console.log(getRes.body);
    


})

//test3:delete user
//post-->userid--->delete--->get for validation
test("Delete user",async({apiHelper})=>{

    let userRes=await createUser(apiHelper);

    let response=await apiHelper.delete(`/public/v2/users/${userRes.id}`,auth_Header)
    
        expect(response.status).toBe(204);
       
        //get the user
         let getRes=await apiHelper.get(`/public/v2/users/${userRes.id}`,auth_Header);
    expect(getRes.status).toBe(404);
    console.log(getRes.body);
})