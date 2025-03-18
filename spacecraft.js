console.log('%cSPACECRAFT.js', 'color:black; background-color:rgb(64,64,255); padding:0 150px 0 150px;')

/* Task 1: No Parameters: Activate Hyperdrive */
const activateHyperdrive = () => console.log('Hyperdrive activated!');
activateHyperdrive();

/* Task 2: Implicit Return: Scan for Lifeforms */
const scanForLife = () => 'No lifeforms detected';
console.log(scanForLife());

/* Task 3: Implicit Return with Objects: Log Coordinates */
const currentCoordinates = () => ({ x: '-3.85', y: '-2.19', z: '-0.052', param: 'light years' });
console.log(currentCoordinates());

/* Task 4: Understanding `this`: Message from Home Base */
const spacecraft = {
    receiveMessage: (messageData) => {
        console.log(`Message received: ${messageData}`);
        console.log(`Message received: ${this.messageData}`);
    }
}
spacecraft.receiveMessage('i aim to misbehave.');

const spacecraft2 = {
    name: 'serenity',
    style: 'color: lightGreen; background: rgba(64, 255, 64, .25); padding: 0 5px 0 5px; border-radius: 2px;',
    receiveMessage: (messageData, style) => console.log(`% cMessage received: ${messageData}`, style)
}
spacecraft2.receiveMessage("everything's shiny captain!", spacecraft2.style);
/*
   Observations/Explain:
    'this' references the 'window' object and not the object itself. Adjusting the object's arrow
    function to directly reference the arguments passed into it is the only way to keep everything 
    in scope and correctly log the message.
 */
