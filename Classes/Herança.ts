class CarroTradicion{
       //Declarar as propriedades da classe
    private   _make:string
    private   _color:string
    private   _doors:number
       
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
       protected worker():string{
              return this._make
       }
}


class CarroEletrico extends CarroTradicion{
       private _range:number

       constructor(make:string, color:string, range:number, doors = 2){
              super(make, color, doors)
              this._range = range
       }

       //Accessors
       get range():number{
              return this._range
       }
       set range(range){
              this._range = range 
       }

       change(){
              console.log(this.worker() + "is changing")
       }
}

let spark = new CarroEletrico("Spark Motors","Silves",124,2)
let eCar = new CarroEletrico("Eletric Car CO","Black",264)
console.log(eCar.doors)
spark.change()