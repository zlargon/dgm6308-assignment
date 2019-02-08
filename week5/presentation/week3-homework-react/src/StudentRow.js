import React from 'react';

function StudentRow(props) {
  const { student, assignments } = props;

  const assignmentTotal = assignments.map(x => x.totalPointValue)   // [10, 20]
                                     .reduce((sum, x) => sum + x);  // 30

                           // map: [1, 2] => [2, 3]
                           // reduce: [2, 3] => 5

  const studentPoints = student.grades.reduce((sum, x) => sum + x);

  return (
    <tbody>
      <tr>
        <td>{student.id}</td>
        <td>{`${student.firstName} ${student.lastName}`}</td>
        <td>{ (studentPoints / assignmentTotal * 100).toFixed(2) }%</td>
        {
          student.grades.map((x, i) => {
            return <td key={i}>{x}</td>
          })
        }
      </tr>
    </tbody>
  );
}

export default StudentRow;
