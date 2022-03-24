"use strict";
function myFilter(arr, callback) {
    const res = new Array();
    for (let index = 0; index < arr.length; index += 1) {
        if (callback(arr[index])) {
            res.push(arr[index]);
        }
    }
    return res;
}
const array = [1, 2, 3, 4, 5, 6];
function ehPar(num) {
    return num % 2 === 0;
}
const newArray = myFilter(array, ehPar);
console.log(newArray);
