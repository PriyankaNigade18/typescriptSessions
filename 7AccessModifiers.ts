/*
Type script support 3 access modifiers
1.public private protected

same class  subclass  outside
public        public      public 
private       no           no
protected     protected   no
*/

class Tester
{
    public testing():void{
        console.log("This is public method ...testing()");
        
    }

     private coding():void{
        console.log("This is private method ...coding()");
        
    }

    //solution to call private method
    public doCoding():void{
        this.coding();
    }

     protected monitor():void{
        console.log("This is protected method ...monitor()");
        
    }
    
}

//outside:public

let t1:Tester=new Tester();
t1.testing();//public method

console.log("----------------------");

class Emp extends Tester{


//inside metod create child class method
public test():void{
    let e1:Emp=new Emp();
    e1.monitor();
    e1.testing
}


}

let e1:Emp=new Emp();
e1.testing()
e1.doCoding();

let t2:Tester=new Emp();
t2.testing()
t2.doCoding();

/*For private method you can use encapsulation 
create public method which call private data
*/