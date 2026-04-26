/*
Data abstraction is hiding internal details amd showing relevant information
to the user.

Abstraction is used for information hiding
Abstraction examples: ATM machine

How to impletement it
1.abstract class
2.interface
================
In typescript interface used to create prototypes for object and classes

here we can have for object any property or method prototype
type keyword also used to create prototype but type can help you 
only to have properties prototype not methods
*/

//interface for object

interface User{
    name:string,
    age:number,
    salary?:number,
    city:string

    //method
    coding():void;
    testing():void;
}

let u1:User={
    name:"Sagar",
    age:55,
    city:'pune',

    coding():void{
        console.log("codig....");
        
    },

     testing():void{
        console.log("testing....");
        
    }
}

console.log(u1);

//class level interface

interface IndianMA{
    physio():void;
    cardio():void
}

interface UsMA{
    dental():void;
    neuro():void;
}

class NobleHs implements IndianMA,UsMA{
    physio(): void {
        console.log("Implemented by Noble....physio");
    }
    cardio(): void {
        console.log("Implemented by Noble....cardio");
    }
    dental(): void {
        console.log("Implemented by Noble....dental");
    }
    neuro(): void {
       console.log("Implemented by Noble....Neuro");
       
    }

    medical():void{
        console.log("Implemented by Noble....medical");
    }
    
}

//Object

let n1:NobleHs=new NobleHs();
n1.cardio();
n1.dental();
n1.medical();
n1.neuro();
n1.physio();


