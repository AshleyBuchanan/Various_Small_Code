console.log('%cmoreScratch.js', 'color:black; background-color:rgb(64,255,64); padding:0 150px 0 150px;')

function add(x, y) { return x + y }
function sub(x, y) { return x - y }
function mul(x, y) { return x * y }
function div(x, y) { return x / y }

const mathFunctions = [add, sub, mul, div];

function doAllMath(x, y, mathFunctions) {
    const results = [];
    mathFunctions.forEach((element) => {
        results.push(element(x, y));
    });
    return results;
}

function forEach2(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i, arr);
    }
}

forEach2([1, 2, 3, 4], function (el, i, arr) {
    console.log(el, `[${i}]`, arr)
})

Array.prototype.forEach2 = forEach2;

[2, 4, 8, 6].forEach((el, i, arr) => { console.log(el, i, arr) })



const forEach3 = function (callback, thisArg) {
    if (this == null) throw new TypeError('Array.prototype.forEach called on null or undefined');
    const O = Object(this);
    const len = O.length >>> 0;

    for (let i = 0; i < len; i++) {
        if (O) {
            callback.call(thisArg, O[i], i, O)
        }
    }
};
const plate = [2, 4, 8, 16];
Array.prototype.forEach3 = forEach3
plate.forEach3((el, i, arr) => { console.log(el, i, arr) })
