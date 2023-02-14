"use strict";
var genero;
(function (genero) {
    genero[genero["feminino"] = 0] = "feminino";
    genero[genero["masculino"] = 1] = "masculino";
})(genero || (genero = {}));
const Pessoa = [
    { nome: "Pedro", idade: 21, peso: 76, altura: 1.78, sexo: genero.masculino },
    { nome: "Joao", idade: 34, peso: 90, altura: 1.91, sexo: genero.masculino },
    { nome: "Maria", idade: 19, peso: 68, altura: 1.65, sexo: genero.feminino },
    { nome: "Ana", idade: 12, peso: 54, altura: 1.70, sexo: genero.feminino },
    { nome: "Lucas", idade: 14, peso: 45, altura: 1.82, sexo: genero.masculino },
    { nome: "Vinicios", idade: 10, peso: 32, altura: 1.62, sexo: genero.masculino },
    { nome: "Vick", idade: 18, peso: 64, altura: 1.60, sexo: genero.feminino }
];
const mapending = Pessoa.filter(mapKey => mapKey.sexo === genero.masculino);
const mapending1 = Pessoa.filter(mapKey => mapKey.sexo === genero.feminino);
console.log(mapending);
console.log(mapending1);
