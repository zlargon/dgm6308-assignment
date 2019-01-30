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
        this.gradeColumn = addGradeColumn(assignmentName, totalPointValue);
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
function addGradeColumn(assignmentName, totalPointValue) {
    // Find the gradeHeaders element in the document object and assign it to a local variable called gradeHeaderRow
    const gradeHeaderRow = document.getElementById('gradeHeaders');

    // Assign the results of document.createElement('td') to a local variable called gradeColumn.
    const gradeColumn = document.createElement('td');

    // Calling appendChild from our gradeColumn, attach a new text node (created using document.createTextNode)
    const textNode = document.createTextNode(`${assignmentName} (${totalPointValue})`);
    gradeColumn.appendChild(textNode);

    // Once you have gradeColumn all set up with its text node child, use appendChild again to attach the gradeColumn to gradeHeaderRow.
    gradeHeaderRow.appendChild(gradeColumn);

    return gradeColumn;
}

// STEP 13
function addStudentRow(studentID, firstName, lastName) {
    var gradeTable = document.getElementById('gradebook');
    var studentRow = gradeTable.appendChild(document.createElement('tr'));

    var id = studentRow.appendChild(document.createElement('td'));
    var studentName = studentRow.appendChild(document.createElement('td'));
    var studentPercent = studentRow.appendChild(document.createElement('td'));

    id.appendChild(document.createTextNode(studentID));
    studentName.appendChild(document.createTextNode(firstName + " " + lastName));
    studentPercent.appendChild(document.createTextNode("0"));

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
// IN STEP 9, EDIT THE FUNCTION TO WORK AS DESCRIBED
function promptForAssignmentInfo() {
    let assignmentName = '';    // initialize assignmentName to an empty string
    let assignmentValue = 0;    // initialize assignmentValue to the number 0

    // Using a do...while loop, repeatedly ask the user until an answer consisting of 1 or more characters is typed
    do {
        assignmentName = prompt("Please enter the assignment's name");
    } while (typeof assignmentName !== 'string' || assignmentName.length <= 0);

    // Using a do...while loop, repeatedly ask the user until an numeric answer is typed
    for (;;) {
        const input = prompt("Please enter a positive numeric point value for the assignment");
        if (input === 'Infinity') {
            continue;
        }

        assignmentValue = Number(input);
        if (Number.isNaN(assignmentValue) || assignmentValue <= 0) {
            continue;
        }

        /*
         * https://stackoverflow.com/questions/12227594/which-is-better-numberx-or-parsefloatx
         *
         * 1. Number() will convert 'Infinity' to Infinity
         *    e.g.
         *    Number('Infinity')  // => Infinity
         *
         * 2. Number() will convert empty strings or strings containing only white space to ZERO
         *    e.g.
         *    Number("")          // => 0
         *    Number(' \r\n\t')   // => 0
         *
         *    To avoid these strange cases, I check the input string (which should not be 'Infinity')
         *    and check the assignmentValue (which should be greater than 0)
         */
        break;
    }

    // Call the createNewAssignment function, passing it assignmentName and assignmentValue
    createNewAssignment(assignmentName, assignmentValue);
}

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
