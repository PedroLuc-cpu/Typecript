class Carro{
       //Declarar as propriedades da classe
      private _make:string
      private _color:string
      private _doors:number
       
       //Definir o construtor da classe
       constructor(make:string, color:string,doors = 4){
              this._make  = make
              this._color = color
              if((doors % 2) == 0 && doors <= 4){
                     this._doors = doors;
                 }
                 else{
                     throw new Error("Door must be an even number")
                 }
       }

       //Definir os acessadores

       get meke(){
              return this._make
       }

       get color(){
              return `The color of the car is ${this._color}`
       }

       set color(color){
              this._color = color
       }

       get doors(){
              return this._doors
       }

       set doors(doors){
              if((doors % 2) === 0  && doors <= 4){
                     this._doors = doors
              }else{
                     throw new Error("Door must be an even number")
              }
       }

       //Definir os métodos da classe

       accelerate(speed:number):string{
              return `${this.worker()} é aceleração para ${speed} MPH`
       }
       brake():string{
              return `${this.worker()} está freando com o sistema de freio padrão.`
       }
       turn(direction: "esquerdo" | "direita"):string{
              return `${this.worker()} está virando ${direction}`
       }

       //Esta função executa o trabalho para as outras funções do método
      private worker():string{
              return this._make
       }
}

let Carro1 = new Carro("Fiat", "Branco", 4)


let myCarro2 = new Carro('Galaxy Motors', 'red', 2);


let myCarro3 = new Carro('Galaxy Motors', 'gray');


console.log(Carro1.accelerate(40))
console.log(Carro1.brake())
console.log(Carro1.turn("esquerdo"))



