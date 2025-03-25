console.log('%cPLANETS.js', 'color:black; background-color:rgb(64,64,255); padding:0 150px 0 150px')

const planets = [
    { name: "Mercury", temperature: 440, distance: 0.39 },
    { name: "Venus", temperature: 737, distance: 0.72 },
    { name: "Earth", temperature: 288, distance: 1 },
    { name: "Mars", temperature: 253, distance: 1.5 },
    { name: "Jupiter", temperature: 163, distance: 5.2 },
    { name: "Saturn", temperature: 133, distance: 9.58 },
    { name: "Uranus", temperature: 78, distance: 19.22 },
    { name: "Neptune", temperature: 73, distance: 30.05 }
];

//>=253 <=323
//>=.75 <=1.5
const result = planets.filter((planet) =>
    planet.temperature >= 253 &&
    planet.temperature <= 323 &&
    planet.distance >= .75 &&
    planet.distance <= 1.5
);
console.log(result);
