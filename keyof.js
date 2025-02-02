"use strict";
// keyof Person here creates a union type of "name" and "age". Other Strings will not be allowed
function printPersonProperty(person, property) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name");
