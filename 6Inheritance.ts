/*Here we can create ref of parent and object of child
ref of parent and object of parent
ref of child and object of child
*/


class Car{

start():void{
    console.log("car...start");
    
}

stop():void{
    console.log("car...stop");
    
}

price():void{
    console.log("Car....1L");
    
}


}

class BMW extends Car{
    autoParking():void{
        console.log("BMW....autoparking()");
        
    }
   override price():void{
    console.log("BMW....50L");
    
}

}

//objects
//parent ref and parent obj
let c1:Car=new Car();
c1.start();
c1.stop();
c1.price();
console.log("--------------");

//child ref and child object
let b1:BMW=new BMW();
b1.start();
b1.stop();
b1.autoParking();
b1.price();
console.log("--------------");

//parent ref and child object(top casting)
let c2:Car=new BMW();
c2.start();
c2.stop();

//then show to the participants about override keyword for methods
//run time poly