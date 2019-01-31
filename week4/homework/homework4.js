// 4 ERRORS IN THE VARIABLE INITIALIZATIONS
var myArray = ['first','second''third'];
var myObject = {first thing:'1st', second_thing:'2nd', third_thing: '3rd'}; 
var i;
var element1 = Document.getElementById('first');
var element2 = document.getElementbyID(2);

// 1 ERROR IN THE FUNCTION
function appendWithComma(string1, string2) {
    string1 = string1 + ", " + string2;
    return string1;

// 3 ERRORS IN THE LOOP
for (i = myArray.length; i > 0; i = i - 2) {
    if (element1.textContent.length = 0) {
        element1.textContent = myArray[i];
    } else {
        element1.textContent = appendWithComma(element1.textContent, myArray[i]);
    }
}

// 2 ERRORS IN THE LOOP
for (i in myObject) {
    if (element2.textContent > 0) {
        element2.textContent = appendWithComma(element2.textContent, myObject[i]);
    } else {
        element2.textContent = myObject.i;
    }
}