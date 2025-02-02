"use strict";
// Tuples
const person = {
    name: "Maximilion",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
// person.role.push('admin');
// person.role[1]=10; // Error Number is not assignable for type string
// person.role=[0,'admin','user']; // Error Type '[number, string, string]' is not assignable to type '[number, string]'Source has 3 element(s) but target allows only 2
// Enums
// const ADMIN=0;
// const READ_ONLY=1;
// const AUTHOR=2;
// enum Role { ADMIN,READ_ONLY,AUTHOR };
// enum Role { ADMIN=5,READ_ONLY,AUTHOR };
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
;
const person1 = {
    name: "Maximilion",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
console.log(person1.role);
// Any Type
const items = {
    bag: ['Story Book', 'Novel', 31]
};
console.log(items.bag);
// Union Type
function combine(input1, input2) {
    let res;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        res = input1 + input2;
    }
    else {
        res = input1.toString() + input2.toString();
    }
    return res;
}
const combinedAges = combine(30, 26);
console.log(combinedAges);
const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
// Literal Type
function combine2(input1, input2, resultConversion) {
    let res;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        res = +input1 + +input2; // Here + operator is used to implicitly convert input to a number
    }
    else {
        res = input1.toString() + input2.toString();
    }
    return res;
}
console.log(combine2(30, 26, 'as-number'));
console.log(combine2('30', '26', 'as-text'));
console.log(combine2('30', '26', 'as-number'));
function combine3(input1, input2, resultConversion) {
    let res;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        res = +input1 + +input2;
    }
    else {
        res = input1.toString() + input2.toString();
    }
    return res;
}
console.log(combine2(30, 26, 'as-number'));
console.log(combine2('30', '26', 'as-text'));
console.log(combine2('30', '26', 'as-number'));
// Function Return types and void
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function printResult1(num) {
    console.log('Result: ' + num);
    return;
}
printResult(add(5, 12));
printResult1(add(5, 12));
