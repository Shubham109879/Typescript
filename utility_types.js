"use strict";
// Partial
let pointPart = {};
// Partial allows x and y to be optional
pointPart.x = 10;
console.log(pointPart.x);
let c1 = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // Required forces mileage to be defined
};
console.log(c1);
// Record
const nameAgeMap = {
    'Alice': 21,
    'Bob': 25
};
// Record<string,number> is equivalent to { [key: string]: number }
console.log(nameAgeMap);
const bob = {
    name: 'Bob'
    // 'Omit' has removed age and location from the type and they can't be defined here
};
console.log(bob);
// Pick
const bob2 = {
    name: 'Bob'
    // 'Pick' has only kept name, so age and location were removed from the type and they can't be defined here 
};
console.log(bob2);
const value = true; // a string cannot be used here since Exclude removed it from the type
console.log(typeof value);
const point = {
    x: 10,
    y: 20
};
const point1 = {
    x: 10,
    y: 20
};
console.log(point1);
const p1 = {
    name: "ABC",
    age: 23
};
console.log(p1);
// p1.name="XYZ"; Error: Cannot assign to 'name' because it is a read-only property.
