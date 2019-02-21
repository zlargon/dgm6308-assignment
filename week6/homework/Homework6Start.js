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
    const count = $('li').length - $('li.complete').length
    $('#counter').text(count);
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
    e.preventDefault();                         // Prevent form being submitted

    // 5. Write additional code in the form submit event handler that checks to see if
    //    the form value being submitted is blank. If it is blank, then DO NOT add a
    //    new row to the to-do list or update the number of items. Instead, change the
    //    form field's placeholder text to read "Seriously, add a description." Once the
    //    user has submitted an item to the form correctly, change the placeholder
    //    back to "Add description"

    // Get value of text input
    // Add item to end of the list
    // Empty the text input
    // Update the count
    const itemDescription = $('#itemDescription');

    // check the text input; return if the text is blank
    const text = itemDescription.val();
    if (text.length === 0) {
      // update the placeholder
      itemDescription.attr('placeholder', 'Seriously, add a description.');
      return;
    }

    // create new list item, which would be insert later
    const li = $(`<li>${text}</li>`);
    li.hide().fadeIn(300);

    // insert the item before the first completed item
    // if the first completed item is not found, insert to the bottom of the list
    const firstComplete = document.querySelector('.complete');
    if (firstComplete) {
      // http://api.jquery.com/insertbefore/
      li.insertBefore(firstComplete);
    } else {
      $list.append(li);
    }

    // reset placeholder after submit succss
    itemDescription.attr('placeholder', 'Add description');

    // update the count
    updateCount();
  });

  // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
  $list.on('click', 'li', (event) => {
    const li = $(event.target);               // Cache the element in a jQuery object
    if (li.hasClass('complete')) {            // Check if item is complete

      // 4. second click on the completed item will remove the item from the list

      // If so, animate opacity + padding
      // Use callback when animation completes
      // Then completely remove this item
      li.animate({ opacity: 0, padding: 0 }, () => {
        li.remove();
      });

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
