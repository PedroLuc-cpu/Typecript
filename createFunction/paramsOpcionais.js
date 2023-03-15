"use strict";
function calculate(x, y) {
    return Math.sqrt(x * y);
}
console.log(calculate(3, 4));
function calculateParamsOpcionais(x, y) {
    if (y === undefined) {
        return x;
    }
    else {
        return Math.sqrt(x * y);
    }
}
console.log(calculateParamsOpcionais(2, 3));
console.log(calculateParamsOpcionais(22));
