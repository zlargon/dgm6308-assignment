import React from 'react';
import Cell from './Cell';

function Board(props) {
  // get the properties "width" and "height"
  const { width, height } = props;

  // new Array(5).fill(2) is equal to [2, 2, 2, 2, 2]
  // generate an empty array which length is 5
  // and fill each item value with 2

  return (
    <table>{
      // a new array filled with <tr>{...}</tr>
      new Array(height).fill(
        <tr>{
          new Array(width).fill(<Cell/>)  // a new array filled with <Cell/>
        }</tr>
      )
    }</table>
  );
}

export default Board;
