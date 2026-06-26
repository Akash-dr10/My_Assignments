//- Implement the interface in a Concrete class.  
// - Provide concrete implementations for the abstract methods in the Concrete class. 
class PlaywrightConnection {
    connect() {
        console.log("Connect");
    }
    disconnect() {
        console.log("Disconnect");
    }
    executeUpdate() {
        console.log("Execute");
    }
}
const connect = new PlaywrightConnection();
connect.connect();
connect.disconnect();
connect.executeUpdate();
export {};
