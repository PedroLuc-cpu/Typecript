"use strict";
class CarroTradicion {
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
class CarroEletrico extends CarroTradicion {
    _range;
    constructor(make, color, range, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    //Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    change() {
        console.log(this.worker() + "is changing");
    }
}
let spark = new CarroEletrico("Spark Motors", "Silves", 124, 2);
let eCar = new CarroEletrico("Eletric Car CO", "Black", 264);
console.log(eCar.doors);
spark.change();
