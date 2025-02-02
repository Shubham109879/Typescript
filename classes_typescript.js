"use strict";
// Class Members : Types
class Person {
}
const person = new Person();
person.name = "Jane";
console.log(person);
// Members: Visibility
class Person1 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const p1 = new Person1("Jane");
console.log(p1.getName()); // person.name isn't accessible from outside the class since it's private
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const r1 = new Rectangle(10, 20);
console.log(`Area of Rectangle: ${r1.getArea()}`);
// Inheritence Extends
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
}
const sq = new Square(20);
console.log(`Area of Square: ${sq.getArea()}`);
