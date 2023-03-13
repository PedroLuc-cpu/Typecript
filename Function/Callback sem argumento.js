"use strict";
function greetin(name) {
    return `Olá, ${name}`;
}
function preGreetin(f, userName) {
    console.log("Preparing greeting");
    const greet = f(userName);
    console.log(greet);
}
preGreetin(greetin, "João");
preGreetin(greetin, "Maria");
