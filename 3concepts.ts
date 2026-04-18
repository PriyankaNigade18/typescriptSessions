/*optional parameters_functionreturn_function Signature with 
overloding_enum_Promise
*/
/*
Optional Parameters
====================
-sometimes we need to share parameters and sometimes its optional then
it is called optional parameter
-we can add one or many optional parameters
-optional parameter is always last parameter of a function
-we declare optional parameter with ?parametername
*/

function printData(name:string,age?:number)
{
    console.log(name);
    if(age)
    {
        console.log(age);
        
    }
    
}

printData("Sarang");
printData("Prita",90);


//example2:Real UseCase:run test case in headleass browser or with normal browser
function launchBrowser(bname:string,headless?:boolean):boolean{
    if(headless)
    {
        console.log("Execute test case in headless browser: "+bname);
        return true;
        
    }else{
        console.log("Execute test case with UI: "+bname);
        return true;
        
    }
}

let isLaunched=launchBrowser('chrome',true);
if(isLaunched)
{
    console.log("Open application ");
    
}

//example3: Search scenario
function search(name:string,color:string,price?:number,seller?:string):void
{
    if(price && seller)
    {
        console.log("Performing search with ",name,color,price,seller);
        
    }
    else
        {
        console.log("Performing search with ",name,color);

    }
}

//call
search('iphone','black');
search('mango','red',3423,'asd');

/*
-function overloding: different function with same name and different parameter
TypeScript supports function overloading. 
-You define multiple signatures (prototypes) but only one
implementation with the body.
-function overloding in ts we do at signature level
-we cant have multiple function with same name so we use in ts prototype signature
-function overloading at design type using prototype

*/

//first design prototype:signature

function combination(a:number,b:number):number;
function combination(a:string,b:number):string;


function combination(a:any,b:any):any
{
return a+b;
}

//call
console.log(combination(100,100));
console.log(combination("hello",100));
//console.log(combination("hello","tom"));//not alowed as no signature
