"use strict";
class Cadastro {
    //  New static property
    static numberOfCadastros = 0;
    _Name;
    _LastName;
    _Cpf;
    age;
    constructor(name, lastName, cpf, age) {
        this._Name = name;
        this._LastName = lastName;
        this._Cpf = cpf;
        this.age = age;
        Cadastro.numberOfCadastros++;
    }
    static GetNumberOfCadastros() {
        return Cadastro.numberOfCadastros;
    }
}
let User01 = new Cadastro("Pedro", "Lucas", 8337064382, 2);
let User02 = new Cadastro("Pedro", "Lucas", 8337064382, 2);
let User03 = new Cadastro("Pedro", "Lucas", 8337064382, 2);
console.log(Cadastro.GetNumberOfCadastros());
