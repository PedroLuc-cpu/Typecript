"use strict";
class Car {
    //Declarar as propriedades da classe
    _make;
    _color;
    _doors;
    //Definir o construtor da classe
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        if ((doors % 2) == 0 && doors <= 4) {
            this._doors = doors;
        }
        else {
            throw new Error("Door must be an even number");
        }
    }
    //Definir os acessadores
    get meke() {
        return this._make;
    }
    get color() {
        return `The color of the car is ${this._color}`;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0 && doors <= 4) {
            this._doors = doors;
        }
        else {
            throw new Error("Door must be an even number");
        }
    }
    //Definir os métodos da classe
    accelerate(speed) {
        return `${this.worker()} é aceleração para ${speed} MPH`;
    }
    brake() {
        return `${this.worker()} está freando com o sistema de freio padrão.`;
    }
    turn(direction) {
        return `${this.worker()} está virando ${direction}`;
    }
    //Esta função executa o trabalho para as outras funções do método
    worker() {
        return this._make;
    }
}
let meuCarro1 = new Car("Fiat", "Branco", 4);
console.log(meuCarro1._color);
console.log(meuCarro1.color);
let myCar2 = new Car('Galaxy Motors', 'red', 2);
console.log(myCar2._doors);
let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3._doors); // returns 4, the default value
console.log(meuCarro1.accelerate(40));
console.log(meuCarro1.brake());
console.log(meuCarro1.turn("esquerdo"));
meuCarro1.;
