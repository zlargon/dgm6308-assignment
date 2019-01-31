const theTable = document.getElementById('myTable');
const numRows = 3;
const numColumns = 3;

// task 1: Create a nested set of loops. The outer loop, i, should count from 0 to (but not including) numRows.
// The inner loop, j, should count from 0 to (but not including) numColumns.
for (let i = 0; i < numRows; i++) {

  // task 2: Each time through the outer loop i, before inner loop j begins, use document.createElement() to create a new table row.
  // Assign the newly created element to variable theRow. Then make theRow a child of theTable using appendChild().
  const theRow = document.createElement('tr');
  theTable.appendChild(theRow);

  for (let j = 0; j < numColumns; j++) {

    // task 3
    // a. Create a new td element and assign it to the variable theCell.
    const theCell = document.createElement('td');

    // b. Make theCell a child of theRow
    theRow.appendChild(theCell);

    // c. Create a new button element and assign it to the variable theButton.
    const theButton = document.createElement('button');

    // d. Set the id attribute of theButton to the value of j followed by an underscore plus the value of i.
    theButton.setAttribute('id', `${j}_${i}`);  // i_j or j_i ?

    // e. Make theButton a child of theCell
    theCell.appendChild(theButton);

    // f. Using document.createTextNode(), create a textNode that contains "Button" plus a Number
    const theText = document.createTextNode(`Button ${i * numRows + j}`);

    // g. Make theText a child of theButton.
    theButton.appendChild(theText);

    // h. Add an Event Listener to theButton
    // when the button is clicked, call a function called changeMyName.
    theButton.addEventListener('click', changeMyName, false);
  }
}

// task 4: write a stub for the function changeMyName
function changeMyName() {
  console.log('got here');
}
