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
    this.name = name;                             // A "name" property that is initialized using a value passed to the constructor function
    this.species = species.trim().toLowerCase();  // A "species" property that is initialized using a value passed to the constructor function
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

// 3a. Create two more people, naming them however you want.
const claire = new Person('Claire');
const leon = new Person('Leon');

// 3a. Create two new Pets for the second person, also naming them whatever you want making them of whatever species you want.
const cuihua = new Pet('Cuihua', 'dog');
const igloo = new Pet('Igloo', 'dog');
assignPetToPerson(cuihua, claire);
assignPetToPerson(igloo, claire);

// 3b. For the third person, assign him or her the same Pet object that Mary has (so they co-own Fluffy).
assignPetToPerson(fluffy, leon);

//  Then create two new Pets for the third person, also making them whatever you want, so that the third person has a total of three pets.
const bubble = new Pet('Bubble', 'dog');
const stark = new Pet('Stark', 'dog');
assignPetToPerson(bubble, leon);
assignPetToPerson(stark, leon);

// 5a. After the code for all of the above, change Mary's pet's name to Mittens.
fluffy.name = 'Mittens';

// 4 & 5. Write a reportPets function that takes a Person object as a parameter and outputs to the console the person's name followed colon followed by a comma- separated list of pets with the species of pet in parentheses after each pet.
const reportPets = (person) => {
  const pets = person.pets.map(pet => `${pet.name} (${pet.species})`) // use "map" to return a new string array with specified format: "pet (species)"
                          .join(', ');                                // return a new string which combines all the string elements in array with "comma separator"

  console.log(`${person.name}: ${pets}`);
}

// Bonus: display one person per row and as many pets per row (each in their own cell) as that person owns!
// This is a function to render the table with people data
const render = (table, people) => {
  // reset the table element
  table.innerHTML = '';

  /** 1. create person header and pet header **/

  // create a <tr>
  const tr = document.createElement('tr');

  // person's name <th>
  const personHeader = document.createElement('th');
  personHeader.textContent = "Person's Name";
  tr.appendChild(personHeader);

  // pet <th>
  const petHeader = document.createElement('th');
  petHeader.textContent = "Pets";
  // set the "colspan" of the pet header by the biggest number of owning pets, and use Spread syntax to transfor array to parameters
  petHeader.colSpan = Math.max(...people.map(person => person.pets.length));
  tr.appendChild(petHeader);

  // add <tr> to table
  table.appendChild(tr);


  /** 2. use for loop to create <tr>, <th>, and <td> and put the data of person and pet to cells. **/
  for (const person of people) {
    const tr = document.createElement('tr');

    // Person Name <th>
    const th = document.createElement('th');
    th.textContent = person.name;
    tr.appendChild(th);

    // Pet list <td>
    for (const pet of person.pets) {
      const td = document.createElement('td');
      td.textContent = `${pet.name} (${pet.species})`;
      tr.appendChild(td);
    }

    // add <tr> to table
    table.appendChild(tr);
  }
}

// render the HTML
render(
  document.getElementById('reportTable'),   // pass the report table's DOM element
  [mary, claire, leon]                      // pass all the people to function as an array parameter
);
