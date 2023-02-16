"use strict";
class Dog {
    name;
    breed;
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
        else if (breed === undefined) {
            this.breed = "SRD";
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
const hercules = new Dog("Hercules", "Lavrador");
const luffy = new Dog("Luffy");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log(`O cachorro é da raça SRD`);
    }
}
showDogDetails(turca);
showDogDetails(bob);
showDogDetails(hercules);
showDogDetails(luffy);
