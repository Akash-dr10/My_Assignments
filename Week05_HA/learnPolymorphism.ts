//- Create a class. 

class Polymorphism{

    //- Inside this class, define the reportStep method with multiple overloaded versions:  
    //- One version should accept two input arguments: a string for the message (msg) and another string for the status (status).  

    reportStep(msg: string, status:string):void

    //- Another version of the reportStep method should accept three input arguments: a string for 
    //the message (msg), a string for the status (status), and a boolean parameter (snap) to indicate 
    //whether to take a snapshot.  

    reportStep(msg: string, status:string, snap:boolean):void

    //- Create a method to demonstrate the usage of the overloaded reportStep method.  
    reportStep(msg?:string, status?:string, snap?:boolean):void{
        if(snap){
        console.log("Snap")
        }
        else if(status){
        console.log("Status")
        }
        else if(msg){
        console.log("Message")
        }
        else if(!msg && !status && !snap){
        console.log("Perform generic operation")
        }
    }
}
//- Call both versions of the reportStep method with different sets of input arguments to showcase method overloading.  
const poly = new Polymorphism()
poly.reportStep("Polymorphism", "Akash",true)
poly.reportStep("Message", "Status")