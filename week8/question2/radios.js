// IIFE
(() => {
  const ele = {
    form: document.getElementById('myForm'),
    submit: document.getElementById('submit'),
    select: document.getElementById('addSelect'),
    message: document.getElementById('welcomemessage')
  };

  // heard radio group
  for (const radio of ele.form.querySelectorAll('input[name="heard"]')) {
    radio.addEventListener('change', (e) => {
      const action = e.target.value === 'other' ? 'remove' : 'add';
      ele.select.classList[action]('hide');

      ele.message.classList.add('hide');  // hide message
    });
  }

  // create a select box in JS from an array
  const array = ['Friend', 'Email', 'Career Fair', 'Referal'];
  const selectBox = document.createElement('select');
  selectBox.innerHTML = array.map(option => `<option>${option}</option>`);
  selectBox.addEventListener('change', () => {
    ele.message.classList.add('hide');  // hide message
  });
  ele.select.append(selectBox);

  // submit
  ele.submit.onclick = (e) => {
    e.preventDefault();

    const heard = ele.form.querySelector('input[name="heard"]:checked');
    if (heard === null) return;

    let msg;
    if (heard.value !== 'other') {
      const content = ele.form.querySelector(`label[for="${heard.value}"]`).innerText;
      msg = `Thank you for choosing ${content}.`;
    } else {
      msg = `Thank you for letting us know your other choice: ${selectBox.value}.`;
    }

    // show message
    ele.message.classList.remove('hide');
    ele.message.innerText = msg;
  };
})();
