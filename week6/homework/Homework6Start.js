$(function() {

  // SETUP
  var $list, $newItemForm, $newItemButton;
  var item = '';                                 // item is an empty string
  $list = $('ul');                               // Cache the unordered list
  $newItemForm = $('#newItemForm');              // Cache form to add new items
  $newItemButton = $('#newItemButton');          // Cache button to show form

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
  $list.on('click', 'li', function() {
    var $this = $(this);               // Cache the element in a jQuery object
    var complete = $this.hasClass('complete');  // Is item complete

    if (complete === true) {           // Check if item is complete


        // If so, animate opacity + padding
        // Use callback when animation completes
        // Then completely remove this item

    } else {                           // Otherwise indicate it is complete
      item = $this.text();             // Get the text from the list item
      $this.remove();                  // Remove the list item
      $list                            // Add back to end of list as complete
        .append('<li class=\"complete\">' + item + '</li>')
        .hide().fadeIn(300);           // Hide it so it can be faded in
      updateCount();                   // Update the counter
    }                                  // End of else option
  });                                  // End of event handler

});
