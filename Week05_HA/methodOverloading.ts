//- Inside the APIClient class

class APIClient{

    //Define the sendRequest method with multiple overloaded versions.  
    //- One version should accept one input argument: a string for the endpoint.  
    sendRequest(endpoint: string):void

    //- Another version of the sendRequest method should accept three input arguments: a string for 
    //the endpoint, a string for the requestBody, and a boolean parameter requestStatus to verify 
    //whether the request is successful. 
    sendRequest(endpoint: string, requestBody: string, requestStatus: boolean):void

    //- Create a method to demonstrate the usage of the overloaded sendRequest method.  
    sendRequest(endpoint?: string, requestBody?: string, requestStatus?: boolean):void{

        if(requestStatus){
        console.log("RequestStatus")    
        }
        else if(requestBody){
        console.log("RequestBody")    
        }
        else if(endpoint){
        console.log("EndPoint")    
        }
        else if(!endpoint && !requestBody && !requestStatus){
        console.log("API normal working flow")    
        }
    }

}

// Create an object of the APIClient class.  
// - Call both versions of the sendRequest method on the APIClient object with different sets of input arguments to showcase method overloading.  

const apiclient = new APIClient()
apiclient.sendRequest("API end point", "API request body", true)
apiclient.sendRequest("API end point")