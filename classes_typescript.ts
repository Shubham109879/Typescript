// Class Members : Types

 class Person {
    name: string;
  }
        
  const person = new Person();
  person.name = "Jane";
  
  console.log(`Person Details: ${person}`);

  // Members: Visibility

  class Person1
  {
    private name: string;

    public constructor(name: string)
    {
      this.name=name;
    }

    public getName()
    {
        return this.name;
    }
  }

  const p1=new Person1("Jane");

  console.log(p1.getName()); // person.name isn't accessible from outside the class since it's private

  // Inheritence Implements

  interface Shape
  {
    getArea: ()=>number; 
  }

  class Rectangle implements Shape
  {
    width: number;
    height: number;

    public constructor(width: number,height: number)
    {
      this.width=width;
      this.height=height;
    }

    public getArea(): number{
       return this.width*this.height;
    }
  }

  const r1=new Rectangle(10,20);

  console.log(`Area of Rectangle: ${r1.getArea()}`);

  // Inheritence Extends

  class Square extends Rectangle
  {
    public constructor(width: number)
    {
       super(width,width);
    }
  }

  const sq=new Square(20);

  console.log(`Area of Square: ${sq.getArea()}`);


