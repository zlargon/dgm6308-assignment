import React from 'react';

function Cell() {
  const signs = ['', 'O', 'X'];
  const [index, setIndex] = React.useState(0);

  return (
    <td onClick={() => setIndex((index + 1) % signs.length)}>
      {signs[index]}
    </td>
  );
}

export default Cell;
