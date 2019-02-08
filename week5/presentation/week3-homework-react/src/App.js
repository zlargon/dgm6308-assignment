import React from 'react';
import Immutable from 'immutable';
import StudentRow from './StudentRow';

function App() {

  const [gradebookData, setGradebookData] = React.useState([
    {
      "firstName": "Adam",
      "lastName": "Anders",
      "id": 0,
      "grades": [
        5,
        0
      ]
    },
    {
      "firstName": "Beth",
      "lastName": "Booker",
      "id": 1,
      "grades": [
        0,
        10
      ]
    }
  ]);

  const [assignmentData, setAssignmentData] = React.useState([
    {
      "assignmentName": "Homework#1",
      "totalPointValue": 10,
      "id": 0
    },
    {
      "assignmentName": "Homework#2",
      "totalPointValue": 20,
      "id": 1
    }
  ]);

  // 1. addStudent
  const addStudent = () => {
    const firstName = prompt('Give me your fucking First Name');
    const lastName = prompt('Give me your fucking Last Name');

    const newGradebookData = [
      ...gradebookData,
      {
        firstName,
        lastName,
        id: gradebookData.length,
        grades: new Array(assignmentData.length).fill(0)
      }
    ];

    setGradebookData(newGradebookData);
  }

  // 2. addAssignment
  const addAssignment = () => {
    const assignmentName = prompt('Give me your fucking Assignment Name');
    const totalPointValue = Number(prompt('Give me your fucking Total Points'));

    const newAssignmentData = [
      ...assignmentData,
      {
        assignmentName,
        totalPointValue,
        id: assignmentData.length
      }
    ];

    const newGradebookData = gradebookData.map(student => {
      return {
        ...student,
        grades: [...student.grades, 0]
      }
    });

    setGradebookData(newGradebookData);
    setAssignmentData(newAssignmentData);
  }

  // 3. updateGrade
  const updateGrade = () => {

    const studentID = Number(prompt('Give me your fucking studentID'));
    const assignmentID = Number(prompt('Give me your fucking assignmentID'));
    const points = Number(prompt('Give me your fucking Points'));

    const newGradebookData = Immutable.List(gradebookData)
                                      .setIn([studentID, 'grades', assignmentID], points)
                                      .toJS();

    setGradebookData(newGradebookData);
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Student</td>
            <td>Overall</td>
            { assignmentData.map((x, i) => {
                return <td key={i}>
                  {`ID#${x.id}: ${x.assignmentName} (${x.totalPointValue} points)`}
                </td>
              })
            }
          </tr>
        </tbody>
        {
          gradebookData.map((student, i) => {
            return <StudentRow
              key={i}
              student={student}
              assignments={assignmentData}
            />
          })
        }
      </table>

      <button onClick={addStudent}>Add Student</button>
      <button onClick={addAssignment}>Add Assignment</button>
      <button onClick={updateGrade}>Update Grade</button>
    </div>
  );
}

export default App;
