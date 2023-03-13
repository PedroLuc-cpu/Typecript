//As asserções de tipo têm duas formas. Uma é a as-sintaxe:

let Randomvalue: unknown = 10
Randomvalue = "MAX"
Randomvalue = true

// As asserções de tipo têm duas formas. Uma é a as-sintaxe:

console.log((Randomvalue as string).toUpperCase())

// A outra versão é a sintaxe "colchete angular":

console.log((<string>Randomvalue).toUpperCase())

/*
OBS: A "as" é a sintaxe preferida. Alguns aplicativos do TypeScript, como o JSX, 
podem ser confundidos ao usar o < > para conversões de tipo.
*/

////////////////////////////////////////////////////////////////


/*O exemplo a seguir executa a verificação necessária para determinar que
 randomValue é um string antes de usar a declaração de tipo para chamar o método toUpperCase.*/

 let ValorAleatorio: unknown = 10
  ValorAleatorio = true
  ValorAleatorio = "MUZAN"


  //Protetores de tipo
  if(typeof ValorAleatorio === "string"){
       console.log((ValorAleatorio as string).toUpperCase())
  }else{
       console.log("Error - A string was expected here.")
  }