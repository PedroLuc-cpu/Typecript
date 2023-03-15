"use strict";
// function nomeadas
/*   function addNumbers(x: number, y: number){
          return x + y
   }
          console.log(addNumbers(2,3))
          
*/
// function anonima
/* let AddNumber= function(x: number, y: number):number{
        return x + y
 }

 console.log(AddNumber(3,5))
 
 */
// function nomeadas e anonima juntas
let sum = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(sum([2, 4, 6]));
