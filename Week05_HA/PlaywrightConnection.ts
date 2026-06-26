//- Implement the interface in a Concrete class.  
// - Provide concrete implementations for the abstract methods in the Concrete class. 

import { DatabaseConnection } from "./DatabaseConnection"

class PlaywrightConnection implements DatabaseConnection{

    connect():void{
    console.log("Connect")    
    }

    disconnect():void{
    console.log("Disconnect")    
    }

    executeUpdate():void{
    console.log("Execute")    
    }
}

const connect = new PlaywrightConnection()
connect.connect()
connect.disconnect()
connect.executeUpdate()