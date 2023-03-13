const numeroInteiro: number = 2
console.log(numeroInteiro)

const numeroReal:number = parseFloat("23.443453636")
console.log(numeroReal)
console.log(Math.ceil(numeroReal))
console.log(numeroInteiro * (Math.trunc(numeroReal)))
console.log(numeroInteiro * (Math.ceil(numeroReal)))


// array of numbers

const arrayNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
       const mapArraysNumeros = arrayNumeros.filter(n => n % numeroInteiro)
console.log(mapArraysNumeros)

// object with numbers and arrays
type user = { 
       nome: string
       idade: number
}

const objectNumeros:Array<user> = [{nome:"Pedro", idade:12}, {nome:"Lucas", idade:20}, {nome:"Santos", idade:32}]
       const mapObjectsAge = objectNumeros.map(age => age.idade)
 if(mapObjectsAge.includes(31) == false){
       console.log("number não exist")
 }else{
       console.log("OK")
 }