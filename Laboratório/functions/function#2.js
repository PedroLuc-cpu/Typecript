"use strict";
let sortDescending = (a, b) => {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return 1;
    }
    else {
        return 0;
    }
};
let sortAscending = (a, b) => {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
};
function buildArray(items, sortOrder) {
    let randomNumber = new Array;
    let nextNumber;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumber.indexOf(nextNumber) === -1) {
            randomNumber.push(nextNumber);
        }
        else {
            counter--;
        }
    }
    if (sortOrder === 'crescente') {
        return randomNumber.sort(sortAscending);
    }
    else {
        return randomNumber.sort(sortDescending);
    }
}
let myArray = buildArray(12, 'crescente');
let myArray1 = buildArray(8, 'decrescente');
console.log(myArray1);
