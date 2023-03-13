"use strict";
/**
OBS: Lembre-se de que toda a conveniência do any vem ao custo da perda da segurança de tipos.
A segurança de tipos é uma das principais motivações para usar o TypeScript.
Evite usar any quando não for necessário.*/
let randomValue = 10;
randomValue = "MAX";
randomValue = true;
console.log(randomValue.name);
randomValue(); //is not a function
randomValue.toUpperCase(); //is not a function
