"use strict";
//- Create a class. 
class Polymorphism {
    //- Create a method to demonstrate the usage of the overloaded reportStep method.  
    reportStep(msg, status, snap) {
        if (snap) {
            console.log("Snap");
        }
        else if (status) {
            console.log("Status");
        }
        else if (msg) {
            console.log("Message");
        }
        else if (!msg && !status && !snap) {
            console.log("Perform generic operation");
        }
    }
}
//- Call both versions of the reportStep method with different sets of input arguments to showcase method overloading.  
const poly = new Polymorphism();
poly.reportStep("Polymorphism", "Akash", true);
poly.reportStep("Message", "Status");
