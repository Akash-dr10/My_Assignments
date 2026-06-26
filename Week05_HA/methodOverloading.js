"use strict";
//- Inside the APIClient class
class APIClient {
    //- Create a method to demonstrate the usage of the overloaded sendRequest method.  
    sendRequest(endpoint, requestBody, requestStatus) {
        if (requestStatus) {
            console.log("RequestStatus");
        }
        else if (requestBody) {
            console.log("RequestBody");
        }
        else if (endpoint) {
            console.log("EndPoint");
        }
        else if (!endpoint && !requestBody && !requestStatus) {
            console.log("API normal working flow");
        }
    }
}
// Create an object of the APIClient class.  
// - Call both versions of the sendRequest method on the APIClient object with different sets of input arguments to showcase method overloading.  
const apiclient = new APIClient();
apiclient.sendRequest("API end point", "API request body", true);
apiclient.sendRequest("API end point");
