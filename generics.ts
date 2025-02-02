// Generics

// Generics with Functions

function createPairWithoutGenerics(v1: string,v2: number)
{
  return [v1,v2];  
}

//console.log(`${createPairWithoutGenerics('hello',42)}`);

console.log(createPairWithoutGenerics('hello',42));

function createPairWithGenerics<S,T>(v1: S,v2: T)
{
    return [v1,v2];
}

console.log(createPairWithGenerics<string,number>('hello',42));

// Generics with Classes

class NamedValue<T>
{
  private value: T | undefined;

  constructor(private name: string)
  {
    
  }

  public setValue(value: T)
  {
    this.value=value;
  }

  public getValue(): T | undefined
  {
    return this.value;
  }

  public toString():string
  {
    return `${this.name} : ${this.value}`;
  }
  
}

const val=new NamedValue<number>('myNumber');

val.setValue(10);

console.log(val.getValue());

console.log(val.toString());

// Type Aliases

type Wrapped<T> = {value : T};

const wrappedValue:Wrapped<number>={value : 10};

console.log(wrappedValue);

console.log("Hello");


