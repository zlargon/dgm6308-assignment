// 4 ERRORS IN THE VARIABLE INITIALIZATIONS
var myArray = ['first','second','third'];   // (1) syntax error: missing comma between 'second' and 'third' values
var myObject = {first_thing:'1st', second_thing:'2nd', third_thing: '3rd'}; // (2) syntax error: missing underscore for key of first_thing
var i;
var element1 = document.getElementById('first');  // (3) misspelling: the first letter of 'Document' should be lowercase
var element2 = document.getElementById(2);        // (4) misspelling: the function 'getElementbyID' should be 'getElementById'

// 1 ERROR IN THE FUNCTION
function appendWithComma(string1, string2) {
    string1 = string1 + ", " + string2;
    return string1;
}  // (1) syntax error: missing closed curly bracket end the end of the function

// 3 ERRORS IN THE LOOP
for (i = myArray.length - 1; i >= 0; i = i - 2) { // (1) overflow: the last index of array is "myArray.length - 1";
                                                  // (2) logic error: change "i > 0" to "i >= 0" so that the i could be 0 in second round
    if (element1.textContent.length === 0) {      // (3) logic error: for comparing the value, the "=" should be changed to "===" or "=="
        element1.textContent = myArray[i];
    } else {
        element1.textContent = appendWithComma(element1.textContent, myArray[i]);
    }
}

// 2 ERRORS IN THE LOOP
for (i in myObject) {
    if (element2.textContent.length > 0) {   // (1) logic error: element2.textContent is a string could not compare with number.
                                             //                  use element2.textContent.length to get the length
        element2.textContent = appendWithComma(element2.textContent, myObject[i]);
    } else {
        element2.textContent = myObject[i];  // (2) syntax error: 'i' is a string variable, so it should use square brackets to access the value
    }
}
