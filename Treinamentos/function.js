"use strict";
function paramsOptions(w, z) {
    if (z === undefined) {
        return w;
    }
    else {
        return w + z;
    }
}
console.log(paramsOptions(2, 3));
