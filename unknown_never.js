"use strict";
let userInp;
let userName;
userInp = 5;
userInp = 'Max';
//userName=userInp; Error: Type 'unknown' is not assignable to type 'string'.
if (typeof userInp === 'string') {
    userName = userInp;
    console.log(userName);
}
// function generateError(message: string,code: number): never{
//     throw {message: message, errorCode: code};
// }
// let res=generateError('An error occured',500);
// console.log(res);
// TypeScript Casting
// Casting with as
let x = 'hello';
console.log(x.length);
// Casting with <>
console.log(x.length);
