"use strict";
// Generics
// Generics with Functions
function createPairWithoutGenerics(v1, v2) {
    return [v1, v2];
}
//console.log(`${createPairWithoutGenerics('hello',42)}`);
console.log(createPairWithoutGenerics('hello', 42));
function createPairWithGenerics(v1, v2) {
    return [v1, v2];
}
console.log(createPairWithGenerics('hello', 42));
// Generics with Classes
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    toString() {
        return `${this.name} : ${this.value}`;
    }
}
const val = new NamedValue('myNumber');
val.setValue(10);
console.log(val.getValue());
console.log(val.toString());
const wrappedValue = { value: 10 };
console.log(wrappedValue);
console.log("Hello");
