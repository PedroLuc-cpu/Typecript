let multiple: number | boolean
multiple = 20
multiple = false

function add(x: number | string, y: number | string){
       if(typeof x === "number" && typeof y === "number"){
              return x + y
       } else if(typeof x === "string" && typeof y === "string"){
              return x.concat(y)
       }
       throw new Error('Parameters must be numbers or strings');
}

console.log(add('one', 'two'));
console.log(add(1, 2));
console.log(add('one', 2))  