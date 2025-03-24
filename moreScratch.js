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
plate.forEach3((el, i, arr) => { console.log(el, i, arr) });



const todos = [
    {
        id: 1,
        text: 'walk the dog',
        priority: 'high'
    },
    {
        id: 2,
        text: 'walk the chickens',
        priority: 'medium'
    },
    {
        id: 3,
        text: 'feed the cats',
        priority: 'low'
    },
    {
        id: 4,
        text: 'put out the fire in my garage',
        priority: 'very high'
    }
]

const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);


function myMap(arr, callback) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(callback(arr[i], i, arr));
    }
    return mappedArray;
}
const newArray = myMap(todos, function (value) { return value.id })
console.log(newArray);


function myMap2(callback, thisArg) {
    const mappedArray = [];
    for (let i = 0; i < this.length; i++) {
        mappedArray.push(callback.call(thisArg, this[i], this));
    }
    return mappedArray;
}
Array.prototype.myMap2 = myMap2
const niceArray = [1, 3, { 5: { 6: 1 } }, 7];
const nicerArray = niceArray.myMap2(function (value) { return value });
console.log(nicerArray);