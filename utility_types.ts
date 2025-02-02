// Partial

interface Point
{
  x: number;
  y: number;  
}

let pointPart: Partial<Point>={};
// Partial allows x and y to be optional

pointPart.x=10;

console.log(pointPart.x);

// Required

interface Car{
    make: string;
    model: string;
    mileage: number;
}

let c1: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage:12000 // Required forces mileage to be defined
}

console.log(c1);

// Record

const nameAgeMap: Record<string,number>={
    'Alice':21,
    'Bob':25
};

// Record<string,number> is equivalent to { [key: string]: number }

console.log(nameAgeMap);

// Omit

interface Person
{
  name: string;
  age: number;
  location: string;  
}

const bob: Omit<Person,'age' | 'location'>={
  name : 'Bob'
  // 'Omit' has removed age and location from the type and they can't be defined here
};

console.log(bob);

// Pick

const bob2: Pick<Person,'name'>={
    name: 'Bob'

    // 'Pick' has only kept name, so age and location were removed from the type and they can't be defined here 
};

console.log(bob2);

// Exclude

type Primitive = string | number | boolean

const value: Exclude<Primitive,string>=true; // a string cannot be used here since Exclude removed it from the type

console.log(typeof value);

// Return Type

type PointGen= ()=>{ x : number; y: number; };

const point: ReturnType<PointGen>={
    x:10,
    y:20
};

// Parameters

type PointPrint= (p: {x:  number; y: number; })=>void;

const point1: Parameters<PointPrint>[0]={
    x:10,
    y:20
};

console.log(point1);

// Readonly

interface Pers
{
  name: string;
  age: number;
}

const p1: Readonly<Pers>={
    name: "ABC",
    age:23
};

console.log(p1);

// p1.name="XYZ"; Error: Cannot assign to 'name' because it is a read-only property.






