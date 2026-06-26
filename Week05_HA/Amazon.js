//Create a Concrete Class Amazon that inherits CanaraBank, implementing methods.  
import { CanaraBank } from "./canaraBank.js";
class Amazon extends CanaraBank {
    cashOnDelivery() {
        console.log("Payment method is Cash On Delivery");
    }
    upiPayments() {
        console.log("Payment method is UPI");
    }
    cardPayments() {
        console.log("Payment method is Card");
    }
    internetBanking() {
        console.log("Payment method is Internet Banking");
    }
    recordPaymentDetails() {
        console.log("Payment details are recorded sucessfully");
    }
}
const amazonPayment = new Amazon();
amazonPayment.cardPayments();
amazonPayment.cashOnDelivery();
amazonPayment.internetBanking();
amazonPayment.upiPayments();
amazonPayment.recordPaymentDetails();
