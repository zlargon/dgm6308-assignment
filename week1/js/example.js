// use IIFE (Immediately Invoked Function Expression) to prevent global variable
(() => {

const getTilePrice = (tileType) => {
  const TILE_TYPE_PRICE = {
    stone: 10,
    clay: 5,
    wood: 7
  };

  tileType = tileType.toLowerCase();

  // check whether the type exist in TILE_TYPE_PRICE or not.
  // If it does exist, return the price of the tile type.
  // If not, return 0.
  return tileType in TILE_TYPE_PRICE ? TILE_TYPE_PRICE[tileType] : 0;
}

const calculateLengthWithoutSpace = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {

    // if the character of index is not space, increase 'count' with 1
    if (str.charAt(i) !== ' ') {
      count++;
    }
  }
  return count;
}

// Create variables for the welcome message
const greeting = 'Howdy ';
const name = 'Molly';
const message = ', please check your order:';
// Concatenate the three variables above to create the welcome message
const welcome = greeting + name + message;

// Create variables to hold details about the sign
const sign = 'Montague House September Space Sale!'; // BONUS
const tiles = calculateLengthWithoutSpace(sign);

// Alternative Solution:
// const tiles = sign.replace(/\s/g, '').length;    // find all whitespace characters (\s) by regular expression and replace them to ''
                                                    // count the length without whitespace characters

const tileType = 'stone';                           // Requirement 2
const pricePerTile = getTilePrice(tileType);        // Requirement 3
const subTotal = tiles * pricePerTile;              // Requirement 4
const shipping = 7;
const grandTotal = subTotal + shipping;

const ele = {}; // The object to store the elements

// Get the element that has an id of greeting
ele.greeting = document.getElementById('greeting');
// Replace the content of that element with the personalized welcome message
ele.greeting.textContent = welcome;

// Get the element that has an id of userSign then update its contents
ele.userSign = document.getElementById('userSign');
ele.userSign.textContent = sign;

// Get the element that has an id of tiles then update its contents
ele.tiles = document.getElementById('tiles');
ele.tiles.textContent = tiles;

// Requirement 5
ele.pricePerTile = document.getElementById('pricePerTile');
ele.pricePerTile.textContent = `(${tileType}) $${pricePerTile}`;

// Get the element that has an id of subTotal then update its contents
ele.subTotal = document.getElementById('subTotal');
ele.subTotal.textContent = '$' + subTotal;

// Get the element that has an id of shipping then update its contents
ele.shipping = document.getElementById('shipping');
ele.shipping.textContent = '$' + shipping;

// Get the element that has an id of grandTotal then update its contents
ele.grandTotal = document.getElementById('grandTotal');
ele.grandTotal.textContent = '$' + grandTotal;

// Note: textContent does not work in IE8 or earlier - see explanation on website

})();
