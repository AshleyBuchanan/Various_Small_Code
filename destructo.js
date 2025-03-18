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
console.log('\"' + translation + '\", said the Guardian.')

/* Task 5: The Array of Elements */
const elements = ["Fire", "Water", "Earth", "Air"];
// TODO: Inside the library, Destructo discovers an array that represents the elements needed to decipher the next clue. Use array destructuring to extract the first two elements. Print the essential elements.

/* Task 6: Skipping Stones */
const stones = [1, 2, 3, 4, 5, 6];
// TODO: Crossing the River of Reflections requires skipping certain stones. Use array destructuring to extract only the first and the sixth stones. Print the extracted stones.

/* Task 7: The Array of Shadows */
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];
// TODO: The Cave of Shadows hides more than it reveals. Use array destructuring with the rest parameter to separate the visible shadow (which is the first) from the hidden ones. Print the visible shadow and the hidden shadows.

/* Task 8: The Wise Function */
// TODO: Destructo needs to decode ancient directions to continue his quest. Help him by writing a function `revealPath` that decodes and prints the direction and distance to travel. The function takes an object with `direction` and `distance` as parameters.

/* Task 9: The Scroll of Defaults */
// TODO: Destructo finds an ancient scroll with a potion recipe, but some ingredients are missing. Write a function `mixPotion` that uses defaults "Water" and "Fireflower" for `ingredient1` and `ingredient2` if they are not specified and print those mixings. The function takes an object with these optional properties.

/* Task 10: The Array Spell */
// TODO: At the gates of an ancient library, Destructo must cast a spell with the first two ingredients from a list given to him by a wise owl. Create a function `castSpell` that uses array destructuring to access these ingredients from an array and print the spell casting.

/* Task 11: The Nested Secret */
const nestedSecret = { outer: { inner: "The Final Key" } };
// TODO: Behind the final door lies a nested artifact containing the ultimate clue. Use nested destructuring to extract `The Final Key`. Print the unveiled secret.

/* Task 12: The Swap of Fate */
let stoneA = "Emerald";
let stoneB = "Ruby";
// TODO: In the treasure chamber, two mystical stones control the treasure's safeguard. Use array destructuring to swap the values of `stoneA` and `stoneB`. Print the result of the swap.
