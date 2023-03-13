function greetin(name: string):string{
       return `Olá, ${name}`
}


function preGreetin(f:(name:string)=> string, userName:string){
       console.log("Preparing greeting")
       const greet = f(userName)
       
       console.log(greet)
}

preGreetin(greetin, "João")
preGreetin(greetin, "Maria")