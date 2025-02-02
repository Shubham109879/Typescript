function add(n1: number,n2: number,showResult: boolean,phrase: string)
{
//    if(typeof n1 !== 'number' || typeof n2 !== number)
//    {
//      throw new Error('Incorrect Input!');
//    }

   const res=n1+n2;

   if(showResult)
   {
    console.log(phrase+res);
   }
   else
   {
    return res;
   }
}

const num1:number=5; // 5.0
const num2:number=2.8;
const printRes:boolean=true;
const resPhrase:string="Result is: ";
add(num1,num2,printRes,resPhrase);