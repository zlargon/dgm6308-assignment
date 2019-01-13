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

// Create variables for the welcome message
const greeting = 'Howdy ';
const name = 'Molly';
const message = ', please check your order:';
// Concatenate the three variables above to create the welcome message
const welcome = greeting + name + message;

// Create variables to hold details about the sign
const sign = 'Montague House';
const tiles = sign.length;
const tileType = 'stone';                       // Requirement 2
const pricePerTile = getTilePrice(tileType);    // Requirement 3
const subTotal = tiles * 5;
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
