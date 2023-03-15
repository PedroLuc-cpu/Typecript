"use strict";
// type calculaotor = (xx:number, yy:number) => number
let addNumber = (x, y) => x + y;
let substrationNumber = (x, y) => x - y;
console.log(addNumber(2, 3));
console.log(substrationNumber(5, 2));
let doCalculation = (operation) => {
    if (operation === 'add') {
        return addNumber;
    }
    else {
        return substrationNumber;
    }
};
console.log(doCalculation('add')(2, 3));
