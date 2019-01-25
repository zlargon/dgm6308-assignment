const ele = {}; // This is a global object to store all DOM elements

const gradebookData = [];
const assignmentData = [];

class Student {
	constructor (firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.id = gradebookData.length;
		this.grades = [];
		// AT THE END OF STEP 15, ADD A LINE TO CALL addStudentRow HERE
	}
} // end class Student

class Assignment {
	constructor (assignmentName, totalPointValue) {
		this.assignmentName = assignmentName;
		this.totalPointValue = totalPointValue;
		this.id = assignmentData.length;
		// STEP 11 GOES HERE
	}
}

function createNewAssignment(assignmentName, totalPointValue) {
    // create a new assignment object to add to the assignment array...
    var assignment = new Assignment(assignmentName, totalPointValue);
    var i;
    assignmentData.push(assignment);
    /*  ... then update the gradebook so every student i has a 0 score in
        that assignment spot. (Note that students just have a number for each
        assignment position; the assignment names are handled in the separate
        assignmentData array)
    */
    for (var i = 0; i < gradebookData.length; i = i + 1) {
        gradebookData[i].grades[assignment.id] = 0;
    }
}

function createNewStudent(firstName, lastName) {
    // create a new student object to add to the gradebook array...
    var student = new Student(firstName, lastName);
    var i;
    gradebookData.push(student);
    // update new student so s/he has a grade of 0 for every existing
    // assignment i from the assignment array
    for (i = 0; i < assignmentData.length; i = i + 1) {
        student.grades[i] = 0;
    }
}

function updateStudentGrade(studentID, assignmentID, points) {
    gradebookData[studentID].grades[assignmentID] = points;
}

// STEP 10: WRITE YOUR INITIAL addGradeColumn FUNCTION HERE
// STEP 17: EDIT addGradeColumn to ADD NEW COLUMNS TO ANY EXISTING STUDENTS



function addStudentRow(studentID, firstName, lastName) {
    var gradeTable = document.getElementById('gradebook');
    var studentRow = gradeTable.appendChild(document.createElement('tr'));

    var id = studentRow.appendChild(document.createElement('td'));
    var studentName = studentRow.appendChild(document.createElement('td'));
    var studentPercent = studentRow.appendChild(document.createElement('td'));

    id.appendChild(document.createTextNode(studentID));
    studentName.appendChild(document.createTextNode(firstName + " " + lastName));     studentPercent.appendChild(document.createTextNode("0"));

    // STEPS 14-15: CREATE A LOOP TO ITERATE THROUGH THE ASSIGNMENTDATA ARRAY
    // AND ADD A TABLE CELL CONTAINING "0" FOR EACH. PUT A RETURN VALUE
    // AT THE END OF THE FUNCTION.

}

// STEP 7: EDIT THIS FUNCTION
function promptForStudentInfo() {
    // Initialize local variables firstName and lastName to empty strings
    let firstName = '';
    let lastName = '';

    // Using a do...while loop, repeatedly ask the user to "Please enter the student's first name" until an answer consisting of 1 or more characters is typed.
    do {
        firstName = prompt("Please enter the student's first name");
    } while (typeof firstName !== 'string' || firstName.length <= 0);

    // Using a do...while loop, repeatedly ask the user to "Please enter the student's last name" until an answer consisting of 1 or more characters is typed.
    do {
        lastName = prompt("Please enter the student's last name");
    } while (typeof lastName !== 'string' || lastName.length <= 0);

    // Call the createNewStudent function, passing it firstName and LastName
    createNewStudent(firstName, lastName);
}

// STEPS 6 AND 9:
// IN STEP 6, WRITE A TEST FUNCTION TO MAKE SURE THE BUTTON WORKS
function promptForAssignmentInfo() {
    alert("Prompting for Assignment Info!");
}

// IN STEP 9, EDIT THE FUNCTION TO WORK AS DESCRIBED



// STEPS 4-6: ADD YOUR CODE TO WIRE THE BUTTON OBJECTS TO THE FUNCTIONS
ele.addStudent = document.getElementById('addStudent');                 // get the "Add Student" button from the DOM using document.getElementById
ele.addStudent.addEventListener('click', promptForStudentInfo, false);  // assign the click event to the function promptForStudentInfo

ele.addAssignment = document.getElementById('addAssignment');
ele.addAssignment.addEventListener('click', promptForAssignmentInfo, false);   // Have a click on this button call a function called promptForAssignmentInfo.

// HERE. FOR STEP 6, BE SURE TO ALSO ADD YOUR TEST FUNCTION ABOVE!



// THIS TEST DATA STILL WORKS AT THE WORKSHOP END SINCE WE CALL THE ROUTINES
// NECESSARY TO UPDATE THE INTERFACE WHENEVR WE CREATE SOMETHING NEW

createNewStudent("Adam","Anders");
createNewAssignment("Homework#1", 10);
createNewStudent("Beth","Booker");
createNewAssignment("Homework#2", 20);

// THE TEST DATA BELOW DOES NOT WORK AS OF THE END OF THE WORKSHOP BECAUSE
// WE HAVE NOT YET WRITTEN A ROUTINE TO VISUALLY UPDATE EXISTING TABLE ROWS
// In addition, because I have removed the routine that I wrote for last week
// to draw the gradebook, which also calculated the student grade percentages,
// that data just doesn't exist in this version (since we don't store a student's
// overall class score in Student objects right now.

updateStudentGrade(0, 0, 5);
updateStudentGrade(1, 1, 10);
