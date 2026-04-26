//primitive data types

//Syntax
//let variableName:type=value

let num:number=100;
console.log(num);
console.log(typeof num);

let isActive:boolean=true;
console.log(isActive);
console.log(typeof isActive);

let userName:string="Admin"
console.log(userName);
console.log(typeof userName);

/*for null and undefined no changed
any variable if you write with null or undefined
means by defualt it will become of same type

*/

let user:null=null;
//or
let user1=null;

let x=undefined;
//so same no need to write its type 

//BigInt
let distance:bigint=100n;
//here you need to change target from tsconfing
//BigInt literals are not available when targeting lower than ES2020.

console.log(distance+10n);

//new Datattypes
//1.any:any type of data can add

let testValue:any;

testValue=100;
testValue='testing';
testValue=true;

console.log(testValue);
console.log(typeof testValue);//boolean
//last assign value it will take

//2.unknown: not known data and there is no specific use case 
//as any and unkown almost same

let value:unknown='hello';
console.log(value);
console.log(typeof value);

//3.void: doen not return anything from function
//example 1
function testing():void{
    console.log("Hello testing...");
    
}

testing();

//example2

function getMarks(sname:string):void{
    console.log(sname,100);;
    
}

getMarks('jini');
//when you pass other data will start throwing error

/*
4.never
never means the function will never complete normally -- it
always throws an error or runs forever

to design function whuch always thrown an error as per
scenario we use never
*/

// function throwElementError(locator:string):never
// {
// throw new Error(locator+" isnot found!");
// }


// throwElementError('loginButton');

//we are testing on prod,dev, qa but not on uat
// function throwEnvNotFound(envName:string):never{
//     throw new Error("Invalid enviornment: "+envName);
// }

// throwEnvNotFound("uat");

//Union type:A union type allows a variable to hold more than one type. Use the | (pipe) symbol

let id:string|number;
id="1234";
id=11213;
console.log(id);//11213

//Arrays
//1.
let marks:number[]=[10,20,30,40];
console.log(marks);
console.log(marks.length);

let devices:string[]=['mac','mouse','keyboard'];
console.log(devices);

//or
//one more way to declare array in ts
let names:Array<string>=['tom','jerry'];

//touples:A tuple is a fixed-length array where each position has a specific type. Think of it as a static, structured array

let user2:[string,number]=['sonika',6757];
console.log(user2);
console.log(user2[0]);


let person:[string,string,number,boolean]=['tom','peter',30,true];
console.log(person);
console.log(typeof person);


//Object
// let newUser={
//             name:"priyanka",
//             salary:1213,
//             isActive:true,
//             city:'pune'
//             }

/*where you can definetype here after key also we can not add
    
*/

let newUser:{name:string,
    salary:number,
    isActive:boolean,
    city:string};

newUser={ name:"priyanka",
            salary:1212,
            isActive:true,
            city:"pune"

        }

        console.log(newUser);
        
//but again its lengthy declaration so we can use here type keyword
//Use the 'type' keyword to create a custom type. 
// This is useful for defining object shapes and reusable union types.


type userType={name:string,
    salary:number,
    isActive:boolean,
    city:string};

    let upadtedUser:userType={
            name:"priyanka",
            salary:1212,
            isActive:true,
            city:"pune"

    }

    console.log(upadtedUser);
    
    console.log(typeof upadtedUser);
    

