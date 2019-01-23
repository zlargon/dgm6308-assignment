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
