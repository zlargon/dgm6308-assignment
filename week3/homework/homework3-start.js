var gradebookData = [];
var assignmentData = [];

/* NOTE :

The week 3 workshop is not the best example of program design. While we did some planning to make sure that we could dynamically create new rows and columns as needed, we are being a little bit naughty in creating UI elements (the actual <td>s and <tr>s that we see) when we create a new Student or Assignment.

One bonus for this week will be to move the lines that deal with user interface to a better spot so that there is a better separation between data and UI. Learning to do this is an important part of Object Oriented Design, especially if you go on to use the Model-View-Controller (MVC) design pattern that is preferred by many web tools.

I have also removed the passing around of gradebookData and assignmentData from function to function. We will instead treat them as global variables, which is a totally fine thing to do when we know we are the only script running. If we were going to run this script alongside others, then we would either want to avoid globals (maybe creating our own "local" global object) or, more simply, to put the data into an IIFE that would hold all of our data.

*/

/* HINT :

There are a few ways to go about solving this week's primary problem, which is to make sure that our script has a means of accessing any of the gradebook cells that represent an intersection between a student and a grade, as well as the cell for each student that provides the student's class score, expressed as a percentage of points earned out of points available.

One way to do this would be to dynamically create an ID property for each td, perhaps naming it with a combo of the student's ID and the assignment's ID  with some separator to ensure each one is unique (e.g., '0_0' for student 0, assignment 0) and then build a string from the grade you want to update each time). Another way would be to cycle through the whole gradebook and rewrite all of the data every time, which might be handy if you're offering different ways of sorting the data or if you might have to update the rows or columns once data is deleted, but we aren't doing deletion this week.

If you don't want to have a whole bunch of extra id properties in your DOM (and a bunch of variables storing them in your JavaScript), you can also solve this problem through DOM traversal. The tradeoff here is that it's arguably a little slower, since you'll have to grab the NodeList for the entire row and then grab the node that you want, but since we know that we don't have extra whitespace (because we created all of these nodes at runtime through our script rather than creating them statically in our HTML), we can iterate reliably through node siblings without worrying about any stray whitespaces that could become empty TextNodes!

In order to give you practice with node tree traversal, I have employed this last method in some of the code, though in my professional work I would be more likely to create a unique, calculable ID for each field.

*/
class Student {
	constructor (firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.id = gradebookData.length;
		this.grades = [];
		this.studentRow = addStudentRow(this.id, firstName, lastName);
	}
} // end class Student

class Assignment {
	constructor (assignmentName, totalPointValue) {
		this.assignmentName = assignmentName;
		this.totalPointValue = totalPointValue;
		this.id = assignmentData.length;
		this.gradeColumn = addGradeColumn(assignmentName, totalPointValue, this.id);
	}
	
} // end class Assignment


function createNewAssignment(assignmentName, totalPointValue) {
    var assignment = new Assignment(assignmentName, totalPointValue, assignmentData);
    var i;
    assignmentData.push(assignment);
    for (var i = 0; i < gradebookData.length; i = i + 1) {
        gradebookData[i].grades[assignment.id] = 0;
    }
}

function createNewStudent(firstName, lastName) {
    // create a new student object to add to the gradebook array...
    var student = new Student(firstName, lastName, gradebookData);
    var i;
    gradebookData.push(student);
    // update new student so s/he has a 0 for every assignment i from the assignment array
    for (i = 0; i < assignmentData.length; i = i + 1) {
        student.grades[i] = 0;
    }
}

// add to this function in order to update the specific grade before
// calling updateGrades() to update the averages

function updateStudentGrade(studentID, assignmentID, points) {
    // this updates the grade in the gradebook array, which is separate
    // from the visual component
    gradebookData[studentID].grades[assignmentID] = points;
    
    // Given a particular student, pull out the location of its row in the
    // DOM, then travel across the non-gradebook columns (studentID, Name, and 
    // Grade Percentage. This shifts us over to the column before grades begin
    var targetColumn = gradebookData[studentID].studentRow.firstChild.nextSibling.nextSibling;
    
    // Note that the targetColumn is now set to the percentage column, not the
    // column corresponding to assignmentData[0]. Take this into account when
    // writing your loop!
    
    // HOMEWORK STEP 3 GOES HERE
    
}

function addGradeColumn(assignmentName, totalPointValue, id) {
    var gradeHeaderRow = document.getElementById('gradeHeaders');
    var gradeColumn = document.createElement('td');
    gradeColumn.appendChild(document.createTextNode("ID#"+id + " : " + assignmentName + " (" + totalPointValue + " points)"));
    gradeHeaderRow.appendChild(gradeColumn);
    
    for (var i = 0; i<gradebookData.length; i++) {
        var gradeCell = gradebookData[i].studentRow.appendChild(document.createElement('td'));
        gradeCell.appendChild(document.createTextNode("0"));
    }
    
    return gradeColumn;
}

function addStudentRow(studentID, firstName, lastName) {
    var gradeTable = document.getElementById('gradebook');
    var studentRow = gradeTable.appendChild(document.createElement('tr'));
    
    var id = studentRow.appendChild(document.createElement('td'));
    var studentName = studentRow.appendChild(document.createElement('td'));
    var studentPercent = studentRow.appendChild(document.createElement('td'));
    
    id.appendChild(document.createTextNode(studentID));
    studentName.appendChild(document.createTextNode(firstName + " " + lastName));     studentPercent.appendChild(document.createTextNode("0"));

    for (var j = 0; j < assignmentData.length; j = j + 1) {
        var gradeData = studentRow.appendChild(document.createElement('td'));
        gradeData.appendChild(document.createTextNode("0"));
    }
    
    return studentRow;
}

function updateGrades() {
    // Calculate each student's grade 
    
    var i, j;
    
    // figure out how many points everything is worth by adding up assignments
    var totalPoints = 0;
    
    for (i = 0; i < assignmentData.length; i = i + 1) {
        totalPoints = totalPoints + assignmentData[i].totalPointValue;
    }

    // For each student i in gradebook, add up scores for all assignments j
    // the outer i loop iterates through the students
    // the inner j loop iterates through that student's grades
    
    for (i = 0; i  < gradebookData.length; i = i + 1) {
        var studentRunningTotal = 0;
        for (j = 0; j < gradebookData[i].grades.length; j = j + 1) {
            var assignmentScore = gradebookData[i].grades[j];
            studentRunningTotal = studentRunningTotal + assignmentScore;
        } 
    
    // Now that we have a running total for this student we can calculate a
    // percentage. The funny-looking structure inside the equation here prevents
    // a "divison by zero" error. Basically it says "If totalPoints is greater
    // than zero, then divide by that number. Otherwise, divide by 1." This
    // assumes that students could never have any points if the class were worth
    // 0 points, and it also assumes that the class can't be worth negative
    // points, but, when you think about it, those are both pretty safe
    // assumptions! Look up ?: if you are curious about how this operator works.
        
        var studentPercentage = (studentRunningTotal/(totalPoints > 0 ? totalPoints : 1)) * 100;
        
    // HOMEWORK STEP 5 GOES HERE
    }
}

function promptForStudentInfo() {
    var firstName = "";
    var lastName = "";
    do {
        firstName = prompt("Please enter the student's first name:");
    } while (firstName.length < 1);
    do {
        lastName = prompt("Please enter the student's last name:");
    } while (lastName.length < 1);
    createNewStudent(firstName, lastName);
}

function promptForAssignmentInfo() {
    var assignmentName = "";
    var assignmentValue = 0;
    do {
        assignmentName = prompt("Please enter a name for the assignment:");
    } while (assignmentName.length < 1);
    do {
        assignmentValue = Number(prompt("Please enter a point value for the assignment:")); // IMPORTANT TO COERCE TO A NUMBER HERE!
    } while (assignmentValue < 1);
    createNewAssignment(assignmentName, assignmentValue);
}

//HOMEWORK STEP 2 GOES HERE

var addStudentButton = document.getElementById('addStudent');
addStudentButton.addEventListener('click', promptForStudentInfo, false);
    
var addAssignmentButton = document.getElementById('addAssignment');
addAssignmentButton.addEventListener('click',promptForAssignmentInfo, false);

// HOMEWORK STEP 1 GOES HERE

createNewStudent("Adam","Anders");
createNewAssignment("Homework#1", 10);
createNewStudent("Beth","Booker");
createNewAssignment("Homework#2", 20);

// ONCE YOU HAVE COMPLETED THE HOMEWORK CORRECTLY, THE TEST DATA BELOW SHOULD WORK

updateStudentGrade(0, 0, 5);
updateStudentGrade(1, 1, 10);
