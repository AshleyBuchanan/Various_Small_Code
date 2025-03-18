console.log('%cWILDLIFE.js', 'color:black; background-color:rgb(64,64,255); padding:0 150px 0 150px')

/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals 
// within the sanctuary. This function should accept an arbitrary number of animal names.
const sightings = (...animalNames) => console.log(...animalNames);

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine 
// them into a comprehensive list of protected areas within the sanctuary.
const allHabitats = [...forestHabitats, ...savannahHabitats];
console.log(...allHabitats);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
    population: 500,
    status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the 
// spread operator to update this status with new information, such as an increase in 
// population or a change in habitat.
const updatedRhinoStatus = {
    ...rhinoStatus,
    population: 27000,
    species: {
        0: {
            name: 'All',
            location: 'Africa and Asia',
            status: 'varied with species -> including extiction',
            img: 'https://rhinos.org/wp-content/uploads/2020/10/SumatranRhino_Andatu_USE.jpg'
        },
        1: {
            name: 'White Rhino',
            location: 'South Africa',
            population: 16056,
            status: 'near threatened',
            img: 'https://rhinos.org/wp-content/uploads/2020/10/kjr_0975-1-scaled.jpg'
        },
        2: {
            name: 'Black Rhino',
            location: 'Africa',
            population: 6421,
            status: 'critically endangered',
            img: 'https://rhinos.org/wp-content/uploads/2020/10/dreamstime_xxl_39302992-scaled.jpg'
        },
        3: {
            name: 'Greater One-Horned Rhino',
            location: 'India and Nepal',
            population: 4000,
            status: 'vulnerable',
            img: 'https://rhinos.org/wp-content/uploads/2020/09/hero-species-onehorned.jpg'
        },
        4: {
            name: 'Javan Rhino',
            location: 'Indonesia\'s Ujung Kulon National Park (UKNP)',
            population: 64,
            status: 'critically endangered && population stable',
            img: 'https://rhinos.org/wp-content/uploads/2020/10/javan-rhino-steven-belcher.jpeg'
        },
        5: {
            name: 'Sumatran Rhino',
            location: 'Indonesia',
            population: 34,
            status: 'critically endangered',
            img: 'https://rhinos.org/wp-content/uploads/2020/10/hero-species-sumatran-1.jpg'
        }
    },
    status: 'see .species[<0-5>].status'
}
console.log(updatedRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
    name: "Leo",
    age: 5,
    species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity 
// information using the `genetics` property to this copy. Observe and explain how changes 
// to nested properties affect both the original and the copied object.
const updatedLionProfile = {
    //I added the name key to double check if it's the same memory space.
    ...lionProfile, name: 'Shane', genetics: {
        deversityInfo:
            // I broke it up into array elements to keep the width down.
            ['Lion genetic diversity, while still considered high compared to other mammals, has decreased due ',
                'to habitat fragmentation and human activities, leading to increased isolation and reduced gene ',
                'flow between populations.']
    }
}
console.log(lionProfile, updatedLionProfile);
/*
   Observations:
    {name: 'Shane', age: 5, species: 'Lion', genetics: {…}}
    {name: 'Leo', age: 5, species: 'Lion'}

   Explain:
    Shallow copying duplicates the copied object in a different memory space. I wasn't sure at first because if copied
    an Array in the same way, it would be in the same memory space. I validated this presumption by adding the name
    key:value pair to the copied object. Cool.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
    waterQuality: "Good",
    foodSupply: {
        herbivores: "Abundant",
        carnivores: "Sufficient",
    }
};

// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water 
// quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how 
// changes to nested properties affect both the original and the copied object.
const copyOf_ecosystemHealth = {
    ...ecosystemHealth,
    waterQuality: 'Borderline Potable',
    foodSupply: {
        //...ecosystemHealth.foodSupply,
        herbivores: 'Dwendling',
        overall: {
            folliage: '100 tons',
            carcases: '260 tons'
        }
    }
}
console.log(ecosystemHealth, copyOf_ecosystemHealth)
copyOf_ecosystemHealth.waterQuality = 'Amazing!'

/*
 * Observations:
 * TODO: Explain here.
 */



