// type calculaotor = (xx:number, yy:number) => number

interface calculaotor {
       (xx: number, yy:number): number
}

let addNumber: calculaotor = (x:number , y):number => x + y
let substrationNumber: calculaotor = (x:number , y:number): number => x - y

console.log(addNumber(2,3))
console.log(substrationNumber(5,2))


let doCalculation = (operation: 'add' | 'substract'):calculaotor =>{
       if(operation === 'add'){
              return addNumber
       }
       else{
              return substrationNumber
       }
}

console.log(doCalculation('add')(2,3))
