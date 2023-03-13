/*function greeter(fn:(a: string)=> void){
       fn("Hello world!");
}

function printToConsole(str: string){
       console.log(str);
}

greeter(printToConsole)*/

// ou 
type GreetFunction = (a:string) => void;
function Greeter(fn:GreetFunction){
   fn("Hello world")
}
function Print(log:string){
       console.log(log);
}
Greeter(Print)


//Assinaturas de chamada

type DescribableFunction ={
       description:string
       (someArgs:number):boolean
}
function doSomething(fn:DescribableFunction){
       console.log(fn.description + "returned" + fn(6))
}
