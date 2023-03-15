
       function calculate(x: number, y: number): number{
              return Math.sqrt(x *y);
       }
       console.log(calculate(3,4))
       

       function calculateParamsOpcionais(x: number, y?: number): number{
              if(y === undefined){
                     return x
              }else{
                     return Math.sqrt(x * y)
              }
       }
       console.log(calculateParamsOpcionais(2,3))
       console.log(calculateParamsOpcionais(22))