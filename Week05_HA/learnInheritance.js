//Step 1: Implement the `WebComponent` Base Class 
//Define a class `WebComponent` with:
export class WebComponent {
    selector;
    //- A constructor that initializes a `selector` property.
    constructor(selector) {
        this.selector = selector;
    }
    //- A `click()` method that prints a console message simulating a click. 
    click() {
        console.log("Simulating a click");
    }
    //- A `focus()` method that prints a console message simulating focusing on the component. 
    focus() {
        console.log("Simulating focusing on the component");
    }
}
