/*Os genéricos são modelos de código que você pode definir e reutilizar em toda a base de código.
Eles fornecem uma forma de informar a funções, classes ou interfaces que tipo você deseja usar
 ao chamá-las.*/
const firstElement = <T>(arr: T[]): T => {
       return arr[0];
}
console.log(firstElement([9, 6, 7, 7, 44, 43, 2, 3]))



function getArray(item: any[]): any[] {
       return new Array().concat(item);
}

let numberArray = getArray([2, 3, 6, 8, 10])
console.log(numberArray)

let stringArray = getArray(["price", "amount", "salary", "currency"])
console.log(stringArray)

stringArray.push("This is not a number")
console.log(stringArray)

numberArray.push(["price", "amount", "salary", "currency"])
console.log(numberArray)


// ultilizado agora <T> como generic sem uso do any

function getNewArray<T>(item:T[]): T[]{
       return new Array().concat(item);
}

let nemeroMatriz = getNewArray(["price", "amount", 22, 34])
console.log(nemeroMatriz)


// ultilizado agora <U, T> como generic para objetos
       function mergeObject<U, T>(objeto:U, Objeto:T){
              return{
                     ...objeto,
                     ...Objeto
              }
       }

       let newObject = mergeObject({nome:"Pedro"}, {sobrenome:"Lucas", idade:21})
              console.log(newObject)

       console.log(typeof newObject.idade)