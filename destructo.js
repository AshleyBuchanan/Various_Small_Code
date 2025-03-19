console.log('%cDESTRUCTO.js', 'color:black; background-color:rgb(64,64,255); padding:0 150px 0 150px;');


/* Task 1: Unveiling the Coordinates */
const coordinates = { x: 34, y: 42, z: 67 };
const { x, y } = coordinates;
console.log(`x:${x}, y:${y}`);


/* Task 2: The Map of Secrets */
const locations = {
    first: "Cave of Wonders",
    second: "Lake of Mystery",
    third: "Mount of Ages",
    fourth: "Desert of Shadows"
};
const { first, second, ...remaining } = locations;
console.log(`Key locations:\n first: ${first},\n second: ${second},`);
console.log('Remaining:')
console.log(remaining);


/* Task 3: The Mysterious Door */
const doorCode = {
    upper: "Alpha",
    lower: "Omega"
};
const { upper, middle = remaining.third, lower } = doorCode;
console.log(`sequence: 1) ${upper}, 2) ${middle}, 3) ${lower}`);


/* Task 4: The Guardian's Riddle */
const riddle = {
    ancientWord: "Sphinx",
    modernWord: "Cat"
};
const { ancientWord: translation, modernWord } = riddle;
console.log('\"' + translation + '\", said the Guardian.');


/* Task 5: The Array of Elements */
const elements = ["Fire", "Water", "Earth", "Air"];
const [firstElement, secondElement] = elements;
console.log(`firstElement: ${firstElement},\nsecondElement: ${secondElement}`);


/* Task 6: Skipping Stones */
const stones = [1, 2, 3, 4, 5, 6];
const [firstStone, , , , , sixthStone] = stones;
console.log(`stones: ${firstStone}, ${sixthStone}`);


/* Task 7: The Array of Shadows */
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];
const [visibleShadows, ...hiddenShadows] = shadows;
console.log(`visibleShadows: ${visibleShadows}\n`, `hiddenShadows:`, hiddenShadows);


/* Task 8: The Wise Function */
const revealPath = ({ direction, distance }) => console.log(`Head ${direction} for ${distance}.`);
revealPath({ direction: 'West', distance: 'eight miles' });


/* Task 9: The Scroll of Defaults */
const mixPotion = ({ ingredient1 = 'Water', ingredient2 = 'Fireflower' }) => {
    console.log(`ingredient1: ${ingredient1} && ingredient2: ${ingredient2}`);
}
mixPotion({ ingredient2: 'Oil' });


/* Task 10: The Array Spell */
const castSpell = ([firstIngredient, secondIngredient]) => {
    console.log(`Spell cast with ${firstIngredient} and ${secondIngredient}`);
}
castSpell(['thingOne', 'thingTwo']);


/* Task 11: The Nested Secret */
const nestedSecret = { outer: { inner: "The Final Key" } };
const { outer: { inner } } = nestedSecret;
console.log(inner);


/* Task 12: The Swap of Fate */
let stoneA = "Emerald";
let stoneB = "Ruby";
console.log('swapped:', [stoneA, stoneB] = [stoneB, stoneA]);
