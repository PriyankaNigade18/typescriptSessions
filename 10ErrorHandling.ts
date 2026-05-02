/*
In ts and js error or exception is same.
error means any unwanted situation comming because of code/
beacuse something is wrongly written so any error occurs we needs to handle
it.
as errors comes at runtime terminate the code so handling important

we can use here try-catch blcon/finally

if we dont to handle it then we can throw new error 

scenario:
we wanted to open application only when browser is launch but if browser
itself not launch then we dont want to open application my code should 
terminate over there
or I wnated to handle it 

*/

function div(a:number,b:number)
{
    if(b===0)
    {
        throw new Error("Cannot devided by 0");
    }else{
       return a/b; 
    }

}

console.log(div(10,5));//without error 
//console.log(div(10,0));//with error 

//example2:

function parsing()
{
    let result=JSON.parse("hi json");
    console.log(result);
    
}

//parsing();
//SyntaxError: Unexpected token 'h', "hi json" is not valid JSON

//solution
function parsing2()
{
    try{
       let result=JSON.parse("hi json");
    console.log(result); 
    }
    catch(error)
    {
        console.log("Provide right json otherwise "+error);
        
    }
}

parsing2();

/*
In javascript we cannot add multiple catch block

finally block added to run special code which 
willwork with or without error 

*/

function test(a:number,b:number)
{
    try{
        if(b===0)
        {
            throw new Error("Divide by 0");
        }else
        {
        return a/b;
        }
        
    }catch(error)
    {
        console.log("Cannot devide by 0");
        
    }

}

console.log(test(10,0));//undefined
console.log(test(10,10));

//CustomErrors.ts

//How to create your own custom error classes?


class ElementError extends Error{
    constructor(message:string)
    {
        super(message)
    }
}

class BrowserError extends Error{
    constructor(message:string)
    {
        super(message);
    }
}

let bname='Jay';
switch(bname)
{
    case 'chrome':
        console.log("Open chrome browser");
        break;
     default:
        console.log("wrong browser");
        //if you wanted to throw error 
        throw new BrowserError("---Invalid Browser---"+bname);
        break;   
        

}

//In playwright we create custom classes

