
//eg1
function getNumber():Promise<number>
{
    return Promise.resolve(100);
}

getNumber().then((res)=>console.log(res));

//eg2
function getTrainerName():Promise<string>
{
    return Promise.resolve("Priyanka");
}

getTrainerName().then(res=>{console.log(res);
})

//eg3
function getUserData():Promise<{name:string,age:number}>
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let user={
                name:'Anuja',
                age:30
            }
            resolve(user);
        },3000)
    })
}

//getUserData().then(user=>console.log(user));

//if i call getuserData()

async function myData()
{
    let data=await getUserData();
    console.log(data);
    
}

myData();

/*
In playwright you need to understand utility/generic codes
*/

//playwright code
function click(element:string):Promise<void>
{
    console.log('click on: '+element);
    return Promise.resolve();
}

//generic utility
async function doClick(element:string)
{
    await click(element);
}

//in test case
doClick('forgot password link');