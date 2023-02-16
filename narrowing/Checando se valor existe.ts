function operationa(arr: number[], operation?: string | undefined){
       if(operation){
              if(operation === "sum"){
                     const sum =  arr.reduce((acc, val) => acc + val, 0);
                     console.log(sum)
              }else if(operation === "multiply"){
                     const multiply =   arr.reduce((acc, val) => acc * val, 1);
                     console.log(multiply)
           }       
       }else[
              console.log("Valor Vazio:", operation)
       ]

}


operationa([1,3,4], "sum")
operationa([1,3,4], "multiply")