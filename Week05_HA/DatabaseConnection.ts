//Create an interface DatabseConnection with the following abstract methods:  
// - connect()  - disconnect()  - executeUpdate()  

export interface DatabaseConnection{

    connect():void;
    disconnect():void;
    executeUpdate():void;

}