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

  }
}
