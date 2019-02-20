$(function() {

  // SETUP
  const $list = $('ul');                         // Cache the unordered list
  const $newItemForm = $('#newItemForm');        // Cache form to add new items
  const $newItemButton = $('#newItemButton');    // Cache button to show form

  $('li').hide().each((index, ele) => {          // Hide list items
    // 1. Modify the special effects so that all of the list items fade in at the same time over a period of half a second.
    //    This means all items should come in at once rather than one at a time.
    $(ele).fadeIn(500);                          // Then fade them in
  });

  // ITEM COUNTER
  function updateCount() {                       // Create function to update counter


  // WRITE YOUR LOGIC HERE


  }
  updateCount();                                 // Call the function

  // SETUP FORM FOR NEW ITEMS
  $newItemButton.show();                         // Show the button
  $newItemForm.hide();                           // Hide the form
  $('#showForm').on('click', function() {        // When click on add item button
    $newItemButton.hide();                       // Hide the button
    $newItemForm.show();                         // Show the form
  });

  // ADDING A NEW LIST ITEM
  $newItemForm.on('submit', function(e) {       // When a new item is submitted

        // Prevent form being submitted
        // Get value of text input
        // Add item to end of the list
        // Empty the text input
        // Update the count

  });

  // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
  $list.on('click', 'li', (event) => {
    const li = $(event.target);               // Cache the element in a jQuery object
    if (li.hasClass('complete')) {            // Check if item is complete


        // If so, animate opacity + padding
        // Use callback when animation completes
        // Then completely remove this item

    } else {                           // Otherwise indicate it is complete

      // 2. Modify the CSS that handles an element that has been marked "completed" so that the bar is a uniform gray color.
      //    Make this modification in your JavaScript file.
      li.addClass('complete');         // add complete class to the list item

      // 3. Modify the code that handles an element that has been marked "completed",
      //    grayed out and move it to the bottom of the list.
      li.hide().fadeIn(300);           // Hide list item so it can be faded in
      $list.append(li);                // move the list item to the bottom of the list

      updateCount();                   // Update the counter
    }                                  // End of else option
  });                                  // End of event handler

});
