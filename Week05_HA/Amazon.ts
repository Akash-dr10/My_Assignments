//Create a Concrete Class Amazon that inherits CanaraBank, implementing methods.  

import { CanaraBank } from "./canaraBank.js";
import { Payments } from "./interfacePayments.js";

class Amazon extends CanaraBank implements Payments{

    cashOnDelivery():void{
    console.log("Payment method is Cash On Delivery")
    }

    upiPayments():void{
    console.log("Payment method is UPI")
    }

    cardPayments():void{
    console.log("Payment method is Card")
    }

    internetBanking():void{
    console.log("Payment method is Internet Banking")
    }

    recordPaymentDetails():void{
    console.log("Payment details are recorded sucessfully")
    }

}

const amazonPayment = new Amazon()
amazonPayment.cardPayments()
amazonPayment.cashOnDelivery()
amazonPayment.internetBanking()
amazonPayment.upiPayments()
amazonPayment.recordPaymentDetails()