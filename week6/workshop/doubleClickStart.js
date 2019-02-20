$(() => {
  const DELAY = 700;
  let clicks = 0, timer = null;

  $('a').on('click', (e) => {
    clicks++; // increase clicks

    // leave function because the timer is already started
    if (timer !== null) {
      return;
    }

    // set timer
    timer = setTimeout(() => {
      // alert the result
      alert(clicks > 1 ? 'Double Click' : 'Single Click');

      // reset clicks
      clicks = 0;

      // reset timer
      clearTimeout(timer);
      timer = null;

    }, DELAY);

  })
  .on('dblclick', (e) => {
    e.preventDefault(); // cancel system double-click event
  });
});
