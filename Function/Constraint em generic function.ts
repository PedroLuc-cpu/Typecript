function biggestNumber<T extends number | string>(a:T, b:T):T{
       let biggest: T

       if(+a > +b){
              biggest = a
       }else{
              biggest = b
       }
       return biggest
}

console.log(biggestNumber(5,2))
console.log(biggestNumber("3", "4"))