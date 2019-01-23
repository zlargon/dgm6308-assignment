// Task2: store all of the Students and their grades
const gradebookData = [
  // {
  //   id: 0,
  //   firstName: 'Adam',
  //   lastName: 'Anders',
  //   grades: [5, 0]
  // },
  // {
  //   id: 1,
  //   firstName: 'Beth',
  //   lastName: 'Booker',
  //   grades: [0, 10]
  // }
];

// Task2: store Assignments and the total points available on each assignment
const assignmentData = [
  // {
  //   id: 0,
  //   assignmentName: 'Homework#1',
  //   totalPointValue: 10
  // },
  // {
  //   id: 1,
  //   assignmentName: 'Homework#2',
  //   totalPointValue: 20
  // }
];

// Task3: write a class for the Student here
class Student {

  // this function should be passed the student's first name and last name as well as a reference to the gradebookData array
  constructor(firstName, lastName, gradebookData) {
    this.id = gradebookData.length; // create an id property for the Student object, and set its value the current length of the gradebookData array
    this.firstName = firstName;     // create a firstName property for the object and set it to the value of the first name that was passed into the function
    this.lastName = lastName;       // create a lastName property for the object and set it to the value of the last name that was passed into the function
  }
}

// Task4: Test the Student class constructor
function testStudentClass () {
  const c = new Student("Charlie", "Chaplin", gradebookData);
  console.log(c);
}

// Assignment class
class Assignment {
  constructor (assignmentName, totalPointValue, assignmentData) {
    "use strict";
    this.assignmentName = assignmentName;
    this.totalPointValue = totalPointValue;
    this.id = assignmentData.length;
  } // end Assignment constructor
} // end Assignment class

// write function createNewAssignment here

// write function createNewStudent here

// write function updateStudentGrade here


// OUTPUT CODE -- DO NOT EDIT THIS WEEK!

function outputGradebook(gradebookData, assignmentData) {
  // for now, this routine will draw the gradebook once, since this isn't yet an
  // interactive page
  var i, j;

  // set up our assignment header column in gradebook
  var gradeHeader = document.createElement('tr');
  var gradeTable = document.getElementById('gradebook');
  var totalPoints = 0;

  gradeHeader.appendChild(document.createElement('td')); // firstName blank
  gradeHeader.appendChild(document.createElement('td')); // lastName blank
  gradeHeader.appendChild(document.createElement('td')); // total percentage blank
  for (i = 0; i < assignmentData.length; i = i + 1) {
    var assignmentHeader = document.createElement('td');
    assignmentHeader.appendChild(document.createTextNode(assignmentData[i].assignmentName + " (" + assignmentData[i].totalPointValue + ")"));
    gradeHeader.appendChild(assignmentHeader);
    totalPoints = totalPoints + assignmentData[i].totalPointValue;
  }
  gradeTable.appendChild(gradeHeader);

  // output students from gradebook
  for (i = 0; i  < gradebookData.length; i = i + 1) {
    var studentRow = gradeTable.appendChild(document.createElement('tr'));
    var id = studentRow.appendChild(document.createElement('td'));
    id.appendChild(document.createTextNode(gradebookData[i].id));
    var studentName = studentRow.appendChild(document.createElement('td'));
    studentName.appendChild(document.createTextNode(gradebookData[i].firstName +
                            " " + gradebookData[i].lastName));
    // we are creating a place for our student % but we don't know the value yet!
    var studentPercent = studentRow.appendChild(document.createElement('td'));
    var studentRunningTotal = 0;
    for (j = 0; j < gradebookData[i].grades.length; j = j + 1) {
      var gradeData = studentRow.appendChild(document.createElement('td'));
      var assignmentScore = gradebookData[i].grades[j];
      gradeData.appendChild(document.createTextNode(assignmentScore));
      studentRunningTotal = studentRunningTotal + assignmentScore;
    }
    // now that we have a running total for this student we can calculate a percentage
    var studentPercentage = (studentRunningTotal/totalPoints) * 100;

    studentPercent.appendChild(document.createTextNode(studentPercentage.toFixed(1)));
  }

}

// END OF OUTPUT CODE

// UNCOMMENT THESE LINES WHEN INSTRUCTED IN THE WORKSHOP

// createNewStudent("Adam","Anders", assignmentData, gradebookData);
// createNewAssignment("Homework#1", 10, assignmentData, gradebookData);
// createNewStudent("Beth","Booker", assignmentData, gradebookData);
// createNewAssignment("Homework#2", 20, assignmentData, gradebookData);
// updateStudentGrade(0, 0, 5, gradebookData);
// updateStudentGrade(1, 1, 10, gradebookData);

outputGradebook(gradebookData, assignmentData);
