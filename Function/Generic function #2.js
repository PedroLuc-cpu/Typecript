"use strict";
// function getArray<T>(items : T[]) : T[] {
//        return new Array<T>().concat(items);
//    }
// let numeroArray = getArray<number>([2,4,6,8,10])
// numeroArray.push(12)
// // numeroArray.push("This is not a number")  Generates a compile time type check error
//    console.log(numeroArray)
// let StringArray = getArray<string>(["Pedro", "Lucas", "Nueva",])
// StringArray.push("Lorem")
// console.log(StringArray)
// Como usar variáveis de vários tipos
function identificado(value, message) {
    console.log(message);
    return value;
}
let returnNumber = identificado(100, "hello");
let returnString = identificado('100', "hello");
let returnBoolean = identificado(true, "hello");
returnNumber = returnNumber * 100;
// returnString  = returnString * 100 Error: Type 'number' not assignable to type 'string'
// returnBoolean = returnBoolean * 100 Error: Type 'number' not assignable to type 'boolean'
function Generiq(user) {
    console.log(user);
    return user;
}
const myName = "Pedro Lucas";
Generiq(myName);
