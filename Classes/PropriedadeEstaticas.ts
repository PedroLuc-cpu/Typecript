class Cadastro{

       //  New static property
       private static numberOfCadastros: number = 0
       
       private _Name: string
       private _LastName: string
       private _Cpf: number
       private age: number
       
       constructor(name:string, lastName:string, cpf:number,   age:number){
              this._Name = name
              this._LastName = lastName
              this._Cpf = cpf
              this.age = age
              Cadastro.numberOfCadastros++
       }

       public static GetNumberOfCadastros():number{
              return Cadastro.numberOfCadastros;
       }


}

let User01 = new Cadastro("Pedro", "Lucas",8337064382,2)
let User02 = new Cadastro("Pedro", "Lucas",8337064382,2)
let User03 = new Cadastro("Pedro", "Lucas",8337064382,2)



console.log(Cadastro.GetNumberOfCadastros())