//Step 2: Implement the `Button` Derived Class 
//Define a class `Button` that extends `WebComponent`. 

import { WebComponent } from "./learnInheritance.js";

class Button extends WebComponent{

    //Override the `click()` method to include an additional message specific to buttons. 
    click():void{
    console.log("Click button")    
    }

}

const clickButton = new Button("Click button")
clickButton.click()
clickButton.focus()