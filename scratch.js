console.log('%cSCRATCH.js', 'color:black; background-color:rgb(64,64,255); padding:0 150px 0 150px')
console.log('I was just testing what I\'d learned');
// let Person = function (name, birthYear, gender) {
//     this.name = name;
//     this.birthYear = Number(birthYear);
//     this.gender = gender;
// }

// Person.prototype.calcAge = function () {
//     return new Date().getFullYear() - this.birthYear;
// }

// let Employee = function (name, birthYear, gender, employeeID, salary) {
//     Person.call(this, name, birthYear, gender);
//     this.employeeID = employeeID;
//     this.salary = salary;
// }
// Employee.prototype = Person.prototype;
// Employee.prototype.sayHi = function () { return 'Hi!' }

// class Person {
//     constructor(name, birthYear, gender) {
//         this.name = name;
//         this.birthYear = birthYear;
//         this.gender = gender;
//     }

//     calcAge() {
//         return new Date().getFullYear() - this.birthYear;
//     }
// }

// class Employee extends Person {
//     constructor(name, birthYear, gender, employeeID, salary) {
//         super(name, birthYear, gender);
//         this.employeeID = employeeID;
//         this.salary = salary
//     }

//     sayHi() {
//         return 'Hi!';
//     }
// }

// let person = {
//     calcAge() {
//         return new Date().getFullYear() - this.birthYear;
//     },
//     personInit(name, birthYear, gender) {
//         this.name = name;
//         this.birthYear = birthYear;
//         this.gender = gender;
//     }
// }

// let employee = Object.create(person);

// employee.employeeInit = function (name, birthYear, gender, employeeID, salary) {
//     employee.personInit(name, birthYear, gender);
//     this.employeeID = employeeID;
//     this.salary = salary;
// }


function SecretData() {
    let privateData = 'this is private data';

    return class {
        getSecret() {
            return privateData;
        }

        setSecret(newValue) {
            privateData = newValue;
        }
    }
}

// const SecureClass = new SecretData();
// const instance = new SecureClass();

// console.log('instance.getSecret() ->', instance.getSecret());
// console.log('instance.privateData ->', instance.privateData);
// console.log('instance.setSecret(\'new private data\');',);
// instance.setSecret('new private data');
// console.log('instance.getSecret() ->', instance.getSecret());


// const array1 = [1, 2, 3].map(function (x) {
//     return x * 2;
// });

// const array2 = [1, 2, 3].map((x) => {
//     return x * 2;
// });

// const array3 = [1, 2, 3].map(x => x * 2);

// console.log(array1, array2, array3);

// const cat = {
//     name: 'Bubs',
//     eat: function () {
//         console.log(this);
//         return `${this.name} chows down`;
//     },
//     meow: () => {
//         console.log(this);
//         return `${this.name} says MEOW!!!`;
//     },
//     scratch: () => (`${this.name} scratches post`)
// };

function sum() {
    // Array.from() fixes the not array issue
    return Array.from(arguments).reduce((sum, val) => {
        return sum + val;
    });
}

function max() {
    return Array.from(arguments).reduce((max, currentValue) => {
        return currentValue > max ? currentValue : max;
    });
}

const newMax = (...arguments) => {
    return arguments.reduce((max, currentValue) => {
        return currentValue > max ? currentValue : max;
    });
}

const tea = {
    type: 'oolong',
    name: 'winter sprout',
    origin: 'taiwan'
}


const shoppingCart = [
    {
        name: 'honey orchid',
        quantity: 2,
        price: 13.5
    },
    {
        name: 'african solstice',
        quantity: 4,
        price: 25.99
    }
];
console.log(shoppingCart)

const updatedCart = [
    ...shoppingCart
]
console.log(shoppingCart)
console.log(updatedCart)