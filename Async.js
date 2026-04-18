//API
// let response=fetch("https://restful-booker.herokuapp.com/booking");
// console.log(response);//Promise { <pending> }

/*Solution
------------
-to handle promise create async method and 
the statement which returns promise use await before that statement
-Any method design with async keyword will become asynchronus method

*/

async function apiTest()
{
let response=await fetch("https://restful-booker.herokuapp.com/booking");
console.log(response);

}

//call

apiTest();


import {readFile} from "fs/promises"
// let data=readFile("Week6_OOP/Test.txt","utf-8");
// console.log(data);//Promise { <pending> }

async function fileRead()
{
let data=await readFile("./test.txt","utf-8");
console.log(data);
}

fileRead();