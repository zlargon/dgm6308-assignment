$(document).ready(() => {

  // Solition 1
  $('button').click(() => {
    $('li').each((index, ele) => {
      const value = ele.textContent;

      // sends an alert for the value of each item as well as listing each item in console.log
      alert(value);
      console.log(value);
    });
  });


  // Solution 2 for Question b
  $('li').on('click', (event) => {
    const ele = event.target;
    const value = ele.textContent;

    // sends an alert for the value of each item as well as listing each item in console.log
    alert(value);
    console.log(value);
  });

});
