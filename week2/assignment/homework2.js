// 1a. Create a Person class where the constructor function creates a new object with properties "name" and "pets"
class Person {
  constructor(name) {
    this.name = name; // A "name" property that is initialized using a value passed to the constructor function
    this.pets = [];   // A "pets" property that is initialized as an empty Array
  }
}

// 1b. Create a Pet class with a constructor function that has properties "name" and "species"
class Pet {
  constructor(name, species) {
    this.name = name;         // A "name" property that is initialized using a value passed to the constructor function
    this.species = species;   // A "species" property that is initialized using a value passed to the constructor function
  }
}

// 2a. Using the new keyword, create a Person named Mary. Then create a Pet named Fluffy, which is of the species cat.
const mary = new Person('Mary');
const fluffy = new Pet('Fluffy', 'cat');

// 2b. Write a function called assignPetToPerson, which takes a Pet object and a Person object as parameters.
const assignPetToPerson = (pet, person) => {
  // add the passed Pet object to the end of the pets array for the passed Person.
  person.pets.push(pet);
}

// Test this function by assigning Fluffy to Mary
assignPetToPerson(fluffy, mary);
