console.log('%cTIME-TRAVEL.js', 'color:black; background-color:rgb(64,64,255); padding:0 150px 0 150px')

/* Task 1: Declare a Destination Variable */
let destination = 'Ancient Egypt';
console.log(destination);

/* Task 2: Change the Destination */
destination = 'Medieval Europe';
console.log(destination);

/* Task 3: Declare a Constant Travel Date */
const travelDate = '2024-03-15';

/* Task 3b: Change the value */
try {
    travelDate = 'something else';  //<-this will error out.
} catch (error) {
    const style = 'color: red; background: rgba(255, 0, 0, .25); padding: 0 5px 0 5px; border-radius: 2px;';
    console.log(`%c${error}`, style);
}

/*
   Observations:
    time-travel.js:13 Uncaught TypeError: Assignment to constant variable.
    at time-travel.js:13:12 (anonymous)	@ time-travel.js:13

    Explain:
    We cannot reasign a constant variable within the same block-scope.
    We could create a new constant variable with the same name if the block-scope
    is within:
        const travelDate = '2024-03-15';
        console.log(`outside travelDate: ${travelDate}`);
        let i = 0
        if (travelDate === '2024-03-15') {
            const travelDate = 'some_other_day';
            console.log(`inside travelDate: ${travelDate}`);
        }
        console.log(`outside travelDate: ${travelDate}`);
 */

/* Task 4: Experiment with Variable Hoisting */
console.log(`timeMachineModel: ${timeMachineModel}`);
var timeMachineModel = 'T-800'  // He'll be back. :-}
console.log(`timeMachineModel: ${timeMachineModel}`);

/*
   Observations:
    timeMachineModel: undefined
    timeMachineModel: T-800

    Explain:
    The internal functionality of JS 'hoists' variable declarations with no value [undefined] to the top of their
    function -> thus, are function scoped. If they are declared outside of a function, they are globally-scoped.
    In either case, it's bad practice to use var because of this -> even if the value isn't assigned, if a user
    wanted to identify key variables in a script, they could.
 */

