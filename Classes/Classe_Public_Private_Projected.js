"use strict";
class Carro {
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
let Carro1 = new Carro("Fiat", "Branco", 4);
let myCarro2 = new Carro('Galaxy Motors', 'red', 2);
let myCarro3 = new Carro('Galaxy Motors', 'gray');
console.log(Carro1.accelerate(40));
console.log(Carro1.brake());
console.log(Carro1.turn("esquerdo"));
