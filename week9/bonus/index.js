// IIFE: Immediately invoked function expression
(() => {

const ele = {
  root: document.getElementById('root')
};

const state = {
  isOver: false,
  squares: [ new Array(3), new Array(3), new Array(3) ]
}

// 1. create new square
class Sqaure {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ele = document.createElement('img');
    this.ele.classList.add('square');
    this.set();
  }

  set(value = 'empty') {
    this.value = value;
    this.ele.src = `img/${value}.jpg`;
  }
}

// 2-1. the algorithm to check the game winner
const isGameOver = (point) => {
  const directs = [
    { x: 0, y: 1 },  // right
    { x: 1, y: 0 },  // down
    { x: 1, y: 1 },  // down + right (x == y)
    { x: 1, y: -1 }  // down + left  (y == -1)
  ];
  return directs.reduce((result, direct) => result || checkLine(point, direct), false);
}
// 2-2.
const checkLine = (point, direct) => {
  const nextPoint = (point) => {
    const x = (point.x + direct.x) % 3;
    const y = direct.y === -1 ? (2 - x) : ((point.y + direct.y) % 3);
    return { x, y };
  };

  if (direct.x === direct.y && point.x !== point.y) return false;  // filter invalid 'down + right' cases
  if (direct.y === -1 && point.x + point.y !== 2)   return false;  // filter invalid 'down + left' cases

  const points = [ point ];
  points[1] = nextPoint(points[0]);
  points[2] = nextPoint(points[1]);

  return points.every(p => state.squares[p.x][p.y].value === point.value);   // all values are the same
}

// 3. show game result
const display = (msg) => {
  state.isOver = true;
  ele.result.innerText = msg;
  ele.result.style.left = ((400 - msg.length * 20.5) / 2) + 'px';
  ele.button.style.display = 'block';
}

// 1. init board
ele.board = document.createElement('div');
ele.board.classList.add('board');
ele.root.append(ele.board);

// 2. init game result
ele.result = document.createElement('div');
ele.result.classList.add('game_over');
ele.root.append(ele.result);

// 3. init again button
ele.button = document.createElement('button');
ele.button.innerText = 'Play Again?';
ele.button.classList.add('play_again');
ele.button.style.display = 'none';
ele.root.append(ele.button);
ele.button.addEventListener('click', () => {
  // reset game
  state.isOver = false;
  ele.result.innerText = '';
  ele.button.style.display = 'none';

  // reset squares
  state.squares.forEach(row => {
    row.forEach(square => {
      square.set();
    });
  });
});

// 4. init squares
for (let i = 0; i < state.squares.length; i++) {
  for (let j = 0; j < state.squares[i].length; j++) {
    const square = new Sqaure(i, j);
    state.squares[i][j] = square;
    ele.board.append(square.ele);
    square.ele.addEventListener('click', () => {
      if (state.isOver) return;

      if (square.value !== 'empty') {
        return alert('This square is already occupied. Please try another step.');
      }

      // 1. player turn
      square.set('x');
      if (isGameOver(square)) {
        return display('Player Wins!');
      }

      // get empty squares
      const remain = state.squares.reduce((result, list) => [
        ...result,
        ...list.filter(x => x.value === 'empty')
      ], []);

      // 2. no more steps -> game over
      if (remain.length === 0) {
        return display('Game Over!');
      }

      // 3. computer turn
      const index = parseInt(Math.random() * remain.length, 10);
      remain[index].set('o');
      if (isGameOver(remain[index])) {
        return display('Computer Wins!');
      }
    });
  }
}

})();
