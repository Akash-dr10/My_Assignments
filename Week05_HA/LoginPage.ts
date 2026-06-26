//- Create a subclass named LoginPage

import { BasePage } from "./methodOverriding.js"

class LoginPage extends BasePage{
    //- Override the performCommonTasks() method in the LoginPage class.  
    performCommonTasks():void{
    console.log("Perform the common tasks successfully")
    }
}

const loginpage = new LoginPage()
loginpage.findElement()
loginpage.clickElement()
loginpage.enterText()
loginpage.performCommonTasks()
