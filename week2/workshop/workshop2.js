// Task 2: store all of the Students and their grades
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

// Task 2: store Assignments and the total points available on each assignment
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

// Task 3: write a class for the Student here
class Student {

  // this function should be passed the student's first name and last name as well as a reference to the gradebookData array
  constructor(firstName, lastName, gradebookData) {
    this.id = gradebookData.length; // create an id property for the Student object, and set its value the current length of the gradebookData array
    this.firstName = firstName;     // create a firstName property for the object and set it to the value of the first name that was passed into the function
    this.lastName = lastName;       // create a lastName property for the object and set it to the value of the last name that was passed into the function

    // Task6: If you don't see Adam Anders appear in the HTML output, go to the JavaScript console and type in gradebookData to see if the object was properly populated with the data (which should include not only his name and ID, but also an empty array for his grades)!
    this.grades = [];
  }
}

// Task 4: Test the Student class constructor
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

// Task 7: write function createNewAssignment here
function createNewAssignment(assignmentName, totalPointValue, assignmentData, gradebookData) {
  // call the constructor function Assignment using the data
  const assignment = new Assignment(assignmentName, totalPointValue, assignmentData);

  // add the newly created assignment to the end of the assignmentData array
  assignmentData.push(assignment);

  // Task 9: give them a 0 for the new assignment, since they haven't yet done it!
  for (const student of gradebookData) {
    student.grades[assignment.id] = 0;
  }
}

// Task 5: write function createNewStudent here
function createNewStudent(firstName, lastName, assignmentData, gradebookData) {
  // create a temporary variable (I called mine "student"), call the Student constructor function, and store the results in your temporary variable.
  const student = new Student(firstName, lastName, gradebookData);

  // Task 12: whenever a new student is added, all assignments currently stored in assignmentData are added to the appropriate positions in the new Student's grades array
  for (const assignment of assignmentData) {
    student.grades[assignment.id] = 0;
  }

  // using the Array method push(), add the student that you've stored in your temporary variable to the end of the gradebookData array.
  gradebookData.push(student);
}

// Task 14: write function updateStudentGrade here
// a student ID #, an assignment ID #, the number of points that the student scored, and a reference to our gradebookData array
function updateStudentGrade(studentId, assignmentId, score, gradebookData) {
  gradebookData[studentId].grades[assignmentId] = score;
}


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

createNewStudent("Adam","Anders", assignmentData, gradebookData);     // Uncomment for Task 6
createNewAssignment("Homework#1", 10, assignmentData, gradebookData); // Uncomment for Task 8
createNewStudent("Beth","Booker", assignmentData, gradebookData);     // Uncomment for Task 11
createNewAssignment("Homework#2", 20, assignmentData, gradebookData); // Uncomment for Task 11
updateStudentGrade(0, 0, 5, gradebookData);                           // Uncomment for Task 14
updateStudentGrade(1, 1, 10, gradebookData);                          // Uncomment for Task 14

outputGradebook(gradebookData, assignmentData);
