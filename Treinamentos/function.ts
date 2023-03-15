       function paramsOptions(w:number, z?:number){
              if(z === undefined){
                     return w
              }else{
                     return w + z
              }

       }

       console.log(paramsOptions(2,3))