"use strict";
// const person={
//     name: "Maximilion",
//     age:30
// };
// const person:object ={
//     name: "Maximilion",
//     age:30
// };
const person = {
    name: "Maximilion",
    age: 30
};
const person1 = {
    name: "Maximilion",
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
// console.log(person.name);
let favouriteActivities;
favouriteActivities = ['Sports'];
for (const hobby of person1.hobbies) {
    console.log(hobby.toUpperCase());
}
