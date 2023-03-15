//Os parâmetros rest são tratados como um número ilimitado de parâmetros opcionais.
//Você pode deixá-los desativados ou usar o máximo que desejar.

let addAllNumbers = (firstNumber:number, ...resOfNumbers:number[]):number =>{
       let total: number = firstNumber
              for(let counter = 0; counter < resOfNumbers.length; counter++){
                     if(isNaN(resOfNumbers[counter])){
                            continue
                     }
                     total += Number(resOfNumbers[counter])
              }
              return total
}

console.log(addAllNumbers(1,3,4,6,6,7))
console.log(addAllNumbers(2,4,5))