console.log('%cmoreScratch_ES7ES8.js', 'color:black; background-color:rgb(64,255,64); padding:0 150px 0 150px;')



//String.prototype.padStart/padEnd
const string = '12345';
console.log(string.padStart(10, '.'));
console.log(string.padEnd(10, '.'));



//Object.values/keys/entries
const object = {
    name: 'John',
    age: 20,
    favoriteBooks: ['Harry Potter', 'Everything Is Tuberculosis', 'Narrative of the Operations and Recent Discoveries...']
}
console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));



//Async Functions



//Exponentiation
console.log(Math.pow(2, 3));
console.log(2 ** 3);



//Trailing Commas
const anotherObject = {
    first: 1,
    second: 2,
    third: 3,           //the comma at the end will not throw an error anymore.
}

console.log(anotherObject);
const anotherArray = [
    1,
    2,
    ,                   //an empty value will be added.
    4,                  //the comma at the end will not throw an error anymore.
]
console.log(anotherArray);



//mutable to immutable array functionality
const array = [1, 2, 3, 4];
let b1 = array.toSorted()        //doesn't modify array -> whereas array.sorted() does.
let b2 = array.toReversed()      //same
let b3 = array.toSpliced()       //same

let b4 = array.with(2, 'someOtherValue');   //doesn't modify array -> whereas array[2]='someOtherValue' does.



//Object.groupBy
const people = [
    { name: 'Kyle', age: 28 },
    { name: 'John', age: 59 },
    { name: 'Sally', age: 29 },
];

console.log(
    Object.groupBy(people, person => {
        return person.age;
    })
);



//Promise.withResolvers
const promise1 = new Promise((resolve, reject) => {
    resolve()
    reject()    //these need to be within the Promise Function.
});

const { promise, resolve, reject } = Promise.withResolvers();
resolve()
reject()        //these can be called anywhere now.



//Set.intersection
const A = new Set([1, 2, 3]);
const B = new Set([3, 4, 5]);
console.log(
    A.difference(B),
    A.intersection(B),
    A.symmetricDifference(B),
    A.union(B),
    A.isDisjointFrom(B),
    A.isSubsetOf(B),
    A.isSupersetOf(B),
);



//Temporal API
//new date&time functionality (HUGE)


//JSON modules
//import users from 'users.json' with {type: 'json'};



//Decorators
// @defineElement('my-class')
// class C extends HTMLElement {
//     @reactive accessor clicked = false;
// }
