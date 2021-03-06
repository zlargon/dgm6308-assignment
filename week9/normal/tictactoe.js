/* These two variables are declared in the global space
  because they are used to track the game state throughout. */

const boardArray = []; // represents the 9 squares (0-8) of the tic-tac-toe board

// For the purposes of our game:
// 0 in an array space means the game square is empty
// 1 in an array space means that "x" (the human) occupies the square
// 2 in an array space means that "o" (the computer) occupies the square

let moveCount = 0; // represents the number of squares filled in current game

/* Complete this function by following the instructions within */

function setUpGame() {
  for (let i = 0; i <= 8; i++) {

    // 1. set each element of boardArray (indexed by i) to 0
    boardArray[i] = 0;

    // 2. get the element from the HTML document called "square" + i
    const ele = document.getElementById('square' + i);

    // 3. set the "source" attribute of the element refer to the file "empty.jpg"
    ele.src = 'empty.jpg'

    /* 4. add a "click" event listener to the element as follows:

          addEventListener("click", function(event){
            attemptPlayerMove(event.currentTarget);
          }, false);

        HINT: This is an object method, so you need to call addEventListener
        on the object to which you wish to add the event
        (i.e., myobject.addEventListener())
    */
    ele.addEventListener('click', (event) => {
      attemptPlayerMove(event.target);
    }, false);

  } // loop ends here

  // Remainder of setUpGame function goes here:
  moveCount = 0;                                                // 1. set moveCount to 0
  document.getElementById('game_over').classList.add('hide');   // 2. hide your "game over" message
  document.getElementById('play_again').classList.add('hide');  // 3. hide your "play again" button
}

function attemptPlayerMove(eventTarget) {
  /*  NOTE: the local variable "square" here is looking at the last
    character of the id string of the item that detected a
    click event and sent us here. We can safely use -1 here
    to get the LAST character of the string because we know
    there are only 9 squares (numbered 0 to 8) in our game.
    If we had to go into double digits, this could be trickier! */

  const square = eventTarget.id.slice(-1);

  if (boardArray[square] === 0) { // if the square is empty...

    // 1. pass the selected square to the function makePlayerMove()
    makePlayerMove(square);

    // 2. declare a local variable called isGameOver and have it store
    //   the result of calling the function checkForGameOver()
    const isGameOver = checkForGameOver();

    // 3. If the game isn't over, call makeComputerMove()
    //    NOTE: if the game IS over, then the computer will not be told to
    //          make another move, and the player's only option will to be to hit
    //          the "Play Again" button, which is handled within checkForGameOver()
    if (!isGameOver) {
      makeComputerMove();
    }

  } // end conditional
}

function makePlayerMove(square) {
  // 1. Set the boardArray element referenced by "square" to indicate that
  //   it is now filled by a player piece (see data structure at top)
  boardArray[square] = 1;

  // 2. Remove the "click" event listener from the square so that it can't
  //   be clicked on again during this game
  // * This step is unnecessary

  // 3. Change the square's image to "x.jpg"
  document.getElementById('square' + square).src = 'x.jpg';

  // 4. increment moveCount by 1
  moveCount++;
}

function checkForGameOver() {
  // 1. Check if all moves have been made (hint: there are 9 moves!)
  if (moveCount === 9) {
    // 2a. show the "game over" and the "play again" button
    document.getElementById('game_over').classList.remove('hide');
    document.getElementById('play_again').classList.remove('hide');

    // 2b. return true to the calling function
    return true;

  } else {

    // 3a. If all moves have not been made:
    //     return false to the calling function
    return false;
  }
}

function makeComputerMove() {
  var madeMyMove = false;
  while (madeMyMove === false) {

    // 1. select a random number between 0 and 8
    const random = Math.round(Math.random() * 100) % 9;

    // 2. check to see if that square of the tic-tac-toe board is empty
    //   (as defined in our data structure at the top of this document)
    if (boardArray[random] === 0) {
      // 3a. Mark its space in the array as containing a computer piece
      boardArray[random] = 2;

      // 3b. Remove the "click" event listener from the square so that it can't
      //     be clicked on again during this game
      // * This step is unnecessary

      // 3c. Change the square's image to "o.jpg"
      document.getElementById('square' + random).src = 'o.jpg';

      // 3d. increment moveCount by 1
      moveCount++;

      // 3e. set madeMyMove to true <- IMPORTANT TO AVOID INFINITE LOOP!
      madeMyMove = true;
    }
  }
}

/* Last things that only need to be done the first time your script runs!
  1. add a "click" event listener to your "play again" button that calls the
    setUpGame function when the button is clicked (when the button is
    hidden, it can't be clicked, so we don't have to remove its event
    listener like we have to for game squares)
  2. add a call to the setUpGame function to start your game!
*/
setUpGame();

// play again
document.getElementById('play_again').addEventListener('click', setUpGame);
