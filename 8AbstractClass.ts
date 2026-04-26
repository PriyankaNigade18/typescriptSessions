/*
Data abstraction is hiding internal details amd showing relevant information
to the user.

Abstraction is used for information hiding
Abstraction examples: ATM machine

How to impletement it
1.abstract class
2.interface
*/

abstract class Page{
 abstract title():void;
 abstract url():void;

 pageLoad():void{
    console.log("Page loading is 5sec");
    
 }

 }


 class LoginPage extends Page{
     title(): void {
         console.log("Application title");
         
     }
     url(): void {
         console.log("Application url");
         
     }

     doLogin(un:string,psw:string):void
     {
        console.log("user "+un+"loggedIn");
        

     }
    
 }


 //objects

 //parent ref and parent object : invalid

 //child ref and child object: valid
let lp:LoginPage=new LoginPage();
lp.title();
lp.url();
lp.pageLoad();
lp.doLogin("Admin","admin123");


//parent ref and child object allowed
let p1:Page=new LoginPage();
p1.title();
p1.url();
p1.pageLoad()