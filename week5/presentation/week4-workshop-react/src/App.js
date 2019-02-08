import React from 'react';

function App () {
  return (
    <GridButton x={3} y={3} n={0} />
  );
}

// 3. GridButton
function GridButton(props) {
  const { x, y } = props;

  let n = props.n;
  const rows = [];
  for (let i = 0; i < x; i++) {

    const numbers = [];
    for (let j = 0; j < y; j++) {
      numbers.push(n++);
    }

    rows.push(<RowButton numbers={numbers} />)
  }

  return <table>{ rows }</table>
}

// 2. RowButton
function RowButton(props) {
  const { numbers } = props;

  return(
    <tbody>
      <tr>
        { numbers.map(num => <MyButton num={num}/>) }
      </tr>
    </tbody>
  );
}

// 1. GridButton
function MyButton(props) {
  // Hook (React 16.8.x)
  const [number, setNumber] = React.useState(props.num);

  const buttonHandler = () => {
    setNumber(number + 1);
  }

  return (
    <td>
      <button onClick={buttonHandler}>
        Button {number}
      </button>
    </td>
  );
}

export default App;
