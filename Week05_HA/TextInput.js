//Step 3: Implement the `TextInput` Derived Class
//Define a class `TextInput` that extends `WebComponent` with: 
import { WebComponent } from "./learnInheritance.js";
class TextInput extends WebComponent {
    // - A property `value` initialized to an empty string. 
    value;
    constructor(selector) {
        super(selector);
        this.value = "";
    }
    //- An `enterText(text: string)` method that sets `value` and prints a message simulating text entry. 
    enterText(text) {
        this.value = text;
        console.log("Simulating text entry");
    }
}
const inputText = new TextInput("Test entry");
inputText.enterText("Text input");
inputText.focus();
