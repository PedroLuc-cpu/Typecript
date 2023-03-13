interface IceCream{
       flavor: string;
       scoops: number
}

let myIceCream: IceCream = {
       flavor:" Vanilla",
       scoops: 2
}

// function tooManyScoops(dessert: IceCream){
//        if(dessert.scoops >= 4){
//               return dessert.scoops + ' is too many scoops!'
//        } else{"you order will be ready soon!"}
// }

interface Sundae extends IceCream{
       sauce: 'chocolate' | "caramel" | 'orangew';
       nuts?: boolean;
       whippedCream?: boolean;
       instruction?: boolean
}

let myIceCream2: Sundae ={
       flavor:"Testing",
       scoops:2,
       sauce:'caramel',
       nuts:true,
}

function tooManyScoops(dessert: Sundae){
       if(dessert.scoops >= 4){
              return dessert.scoops + ' is too many scoops!'
       } else{"you order will be ready soon!"}
}
console.log(tooManyScoops({flavor:"Pedronic", scoops:5, sauce:"caramel"}))

// Create indexable types

interface IceCreamArray{
       [index: number]:string
}
let myIceCreamArray: IceCreamArray;
myIceCreamArray = ["NestJS","Nextjs","Typescript"]
let myStr: string = myIceCreamArray[0]
console.log(myStr)
