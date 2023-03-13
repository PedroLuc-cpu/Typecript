"use strict";
/*function greeter(fn:(a: string)=> void){
       fn("Hello world!");
}

function printToConsole(str: string){
       console.log(str);
}

greeter(printToConsole)*/
function Greeter(fn) {
    fn("Hello world");
}
function Print(log) {
    console.log(log);
}
Greeter(Print);
function doSomething(fn) {
    console.log(fn.description + "returned" + fn(6));
}
