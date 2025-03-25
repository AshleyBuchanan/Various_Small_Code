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




const words = [
    'immunoelectrophoretically',
    'rotavator',
    'tsktsk',
    'psychophyicotherapeutics',
    'squirrelled',
    'crypt',
    'uncopyrightable',
    'cysts',
    'pseudopseudohypoparathyroidism',
    'unimaginatively'
]

const longWords = words.filter(function (word) { return word.length >= 20 });
console.log('longWords:', longWords);

const coolWords = words.filter(function (w) {
    return w[0] === 'u' || w[0] === 'c';
});
console.log('coolWords:', coolWords);

function hasVowels(word) {
    for (let i = 0; i < word.length; i++) {
        // if (word[i] === 'a' ||
        //     word[i] === 'e' ||
        //     word[i] === 'i' ||
        //     word[i] === 'o' ||
        //     word[i] === 'u') { return true }
        if ('aeiou'.indexOf(word[i]) > -1) { return true }
    }
    return false;
}

const noVowels = words.filter(function (word) {
    return (!hasVowels(word));
});
console.log('noVowels:', noVowels);

const long = words.some(function (word) {
    return word.length > 25;
});
console.log(long);

const thy = words.every(function (word) {
    return word.includes('thyroid');
});
console.log(thy);


const mySome = function (arr, str) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(str)) return true
    }
    return false;
}
console.log(mySome(words, 'thyroid'));

const mySome2 = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) return true;
    }
    return false;
}

const yes = mySome2(words, function (word) {
    return word.includes('thyroid')
});
console.log(yes);




const mySome3 = function (callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
    }
}
Array.prototype.mySome3 = mySome3;
const r = words.mySome3(function (word) {
    return word.includes('thyroid')
});

const testScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 59, 69, 73, 73, 75, 79, 83, 88, 91, 93];

const s75 = testScores.find(function (score) {
    return score > 75;
});
console.log(s75)