// Type guard

function suma(a: number|string, b: number|string){
if(typeof a === "string" && typeof b === "string"){
       console.log(parseFloat(a) + parseFloat(b))
}else if(typeof a === "number" && typeof b === "number"){
       console.log(a + b)
}else{
       console.log("Error")
}
}

suma(1,2)
suma("1","5")
