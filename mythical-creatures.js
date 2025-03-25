console.log('%cMYTHICAL-CREATURES.js', 'color:black; background-color:rgb(64,64,255); padding:0 150px 0 150px')

const mythicalCreatures = [
    { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
    { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
    { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
    { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
    { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" }
];

const waterCreature = mythicalCreatures.find((creature) => {
    return creature.type === 'Water'
});
console.log(waterCreature.name);


const griffinIdx = mythicalCreatures.findIndex((creature) => {
    return creature.name === 'Griffin'
});
console.log(griffinIdx);


const forestLocation = mythicalCreatures.find((creature) => {
    return creature.lastSeen === 'Enchanted Forest'
});
console.log(forestLocation.name);