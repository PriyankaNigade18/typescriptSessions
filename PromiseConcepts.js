/*
- A Promise is an object used to managing asynchronous operataion
- promise allow you to write code that continue after a specific event occur
- Promises enabled the handling of data that is not currently available
but will be available in the future
- A promise has 3 states pending, resolve and reject

pending: This is initial state when the promise is neither fullfilled or rejetcted

fullfilled: This state means asynchronous operation associated with
promise has been successfully completed

Rejected: This state indicates that the asynchronus operation has failed
or been rejected

setteled
============
-when promise is either fullfilled or rejected it enter the settled state
-In this state there are two important methods
1.then():
------------
when promise successfully transitions to the fullfilled state, then method
allows you to specify a callback function that will work with completed data
-this is used to define what should happen when a successfull result is obtained

catch():
-----------
when promise transitions to the "rejected" state the catch method let you specify
a callback function that will work with rejected error
-This is used to handle situation where the operation fails

*/


let myPromise=new Promise((resolve,reject)=>{

    let status=true;
    if(status)
    {
        resolve("Test passed")
    }else{
        reject("Test Fail")
    }
})


myPromise.then(msg=>{console.log(msg)})
.catch(msg=>{console.log(msg)});


//error promise
let errorPromise=new Promise((resolve,reject)=>{

    reject("Ops....Something got failed!")
});


//call
errorPromise.catch(error=>console.log(error));

//resolved promise
let resolvePromise=new Promise((resolve,reject)=>{
resolve("Promise completed....")
})

resolvePromise.then(res=>{
    console.log(res)
})

/*
There is one more way to declare promise
*/

let p1=Promise.resolve("Task 1 is done");
let p2=Promise.reject('Failure');

p1.then(res=>{console.log(res);
});

p2.catch(error=>{
    console.log(error);
    
})

//Promise with real async operation

let dataPromise=new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("Task done after 3sec")
    },3000);
});

dataPromise.then(res=>{
    console.log(res);
    
})


//real async operation with finally()
// function fetchUser()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let user={
//                 name:"Priyanka",
//                 role:"Trainer"
//             }
//             resolve(user)
//         },3000);
//     })
// }

// fetchUser().then(res=>{
//     console.log(res);
    
// })

//if youwanted to add error state and finally()
//Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). 

function fetchUser()
{
    return new Promise((resolve,reject)=>{
        let flag=true;
        if(flag)
        {
        setTimeout(() => {
            let user={
                name:"Priyanka",
                role:"Trainer"
            }
            resolve(user)
        },3000);
        }else{
            setTimeout(() => {
                reject("User not found!")
            },2000);
        }
        
    })
}

fetchUser().then(res=>{
    console.log(res);
    
}).catch(error=>{
    console.log(error);
    
}).finally(()=>{
    console.log("We are in serach of Automation Engineer...");
    
})

//promise.all()
/*
Run multiple promise in parallel and wait until all of them
succeed
*/

let p11=Promise.resolve("Task1 done");
let p21=Promise.resolve("Task2 done");
let p31=Promise.resolve("Task3 done");

Promise.all([p11,p21,p31])
.then((res)=>{
console.log(res);

})

//with wait
let p111=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        resolve("display logo on the page")
    },3000);
})

let p112=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        resolve("load the login page")
    },2000);
})

let p113=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        resolve("load footer of the page")
    },1000);
})

Promise.all([p111,p112,p113])
.then(res=>{
    console.log(res);
    
})

//with error;
let p101=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        resolve("display logo on the page")
    },3000);
})

let p102=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        reject("rejected")
    },2000);
})

let p103=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        resolve("load footer of the page")
    },1000);
})

Promise.all([p101,p102,p103])
.then(res=>{
    console.log(res);
    
}).catch(err=>{
    console.log(err);
    
})

//race():It return first promise that finished
let p101=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        resolve("display logo on the page")
    },3000);
})

let p102=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        reject("rejected")
    },2000);
})

let p103=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        resolve("load footer of the page")
    },1000);
})

Promise.race([p101,p102,p103])
.then(res=>{
    console.log(res);
    
}).catch(err=>{
    console.log(err);
    
})

//allsetted: waits for all the promise to finsih whether they succeed or failed
let p101=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        resolve("display logo on the page")
    },3000);
})

let p102=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        reject("rejected")
    },2000);
})

let p103=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        resolve("load footer of the page")
    },1000);
})

Promise.allSettled([p101,p102,p103])
.then(res=>{
    console.log(res);
    
}).catch(err=>{
    console.log(err);
    
})

//any():returns 1st successfull promise
let p101=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        resolve("display logo on the page")
    },3000);
})

let p102=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        reject("rejected")
    },2000);
})

let p103=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        resolve("load footer of the page")
    },1000);
})

Promise.any([p101,p102,p103])
.then(res=>{
    console.log(res);
    
}).catch(err=>{
    console.log(err);
    
})