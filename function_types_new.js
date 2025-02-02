"use strict";
// Function Types
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
// let combineValues;
//let combineValues: Function;
let combineValues;
// combineValues=5; Error because combineValues is defined to be of type Function
combineValues = add;
// combineValues=printResult; Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.Type 'void' is not assignable to type 'number'.ts
console.log(combineValues(5, 12));
let printValues;
// printValues=add; Type 'number' is not assignable to type '(a: number) => void'.
printValues = printResult;
printValues(10);
// Function Types and Callbacks
function addAndHandle(n1, n2, cb) {
    const res = n1 + n2;
    cb(res);
}
addAndHandle(10, 20, (res) => {
    console.log(res);
    // return res; Works fine as we have mentioned void as return type, so it is not restricting us to return a value
});
