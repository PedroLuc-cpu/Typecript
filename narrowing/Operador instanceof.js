"use strict";
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
function userGreeting(idUser) {
    if (idUser instanceof SuperUser) {
        console.log(`Olá, ${idUser.name}, Bem-vindo novamente!`);
    }
    else if (idUser instanceof User) {
        console.log(`Olá, ${idUser.name}, Bem-vindo!`);
    }
}
userGreeting(jhon);
userGreeting(paul);
