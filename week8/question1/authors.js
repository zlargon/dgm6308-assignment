const authors = [
  'Ernest Hemingway',
  'Charlotte Bronte',
  'Louisa May Alcott',
  'Charles Dickens'
];

const titles = [
  'The Old Man and the Sea',
  'Jane Eyre',
  'Little Women',
  'Oliver Twist'
];


// write this function to take 2 strings, an author and a title and add them to the BEGINNING of the respective arrays.
function addToArrays(myAuthor, myTitle) {
  authors.unshift(myAuthor);
  titles.unshift(myTitle);

  // In a loop, list in console.log the list of authors and their titles.
  for (let i = 0; i < authors.length; i++) {
    console.log(`${i}. ${authors[i]} ${titles[i]}`);
  }
}

// now call the function with your author and title -- you can make up names!
addToArrays('J. K. Rowling', 'Harry Potter');

// write the function to create the table and add the authors and their titles
function outputTable(authors, titles) {
  const table = document.getElementById('myAuthors');

  // create header
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <th>Author</th>
    <th>Title</th>
  `;
  table.append(tr);

  for (let i = 0; i < authors.length; i++) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${authors[i]}</td>
      <td>${titles[i]}</td>
    `;
    table.append(tr);
  }
}

// now invoke the function:
outputTable(authors, titles);

// Finally add the 2 paragraphs
document.write(`<p>First: ${authors[0]}, ${titles[0]}</p>`);
document.write(`<p>Last: ${authors.pop()}, ${titles.pop()}</p>`)
