"use strict";
let myIceCream = {
    flavor: " Vanilla",
    scoops: 2
};
let myIceCream2 = {
    flavor: "Testing",
    scoops: 2,
    sauce: 'caramel',
    nuts: true,
};
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        "you order will be ready soon!";
    }
}
console.log(tooManyScoops({ flavor: "Pedronic", scoops: 5, sauce: "caramel" }));
let myIceCreamArray;
myIceCreamArray = ["NestJS", "Nextjs", "Typescript"];
let myStr = myIceCreamArray[0];
console.log(myStr);
