// elements
const radios = document.querySelectorAll('input[name="mode"]');
const panels = document.getElementById('panel').children;
const form = document.querySelector('form');
const fieldset = document.querySelector('fieldset');

const login = {
  username: document.getElementById('login_username'),
  password: document.getElementById('login_password'),
  button:   document.getElementById('login_submit')
};

const signup = {
  username: document.getElementById('signup_username'),
  password: document.getElementById('signup_password'),
  verify:   document.getElementById('signup_verify_password'),
  warning:  document.getElementById('signup_warning'),
  button:   document.getElementById('signup_submit')
};

const guest = {
  button: document.getElementById('guest_login')
}

const show = (ele, bool) => {
  // add class 'hide' if bool is falsa; otherwise, remove class 'hide'
  ele.classList[bool ? 'remove' : 'add']('hide');
}

const render = () => {
  // get mode: login / signup / guest
  const mode = document.querySelector('input[name="mode"]:checked').value;

  // 2abc. show the panel according the mode
  for (const panel of panels) {
    show(panel, panel.getAttribute('mode') === mode);
  }

  // 3ab. login button: show the button when the fields are not blank
  show(login.button,
    login.username.value.length !== 0 &&
    login.password.value.length !== 0
  );

  // 3ab. signup button: show the button when the fields are not blank
  show(signup.button,
    signup.username.value.length !== 0 &&
    signup.password.value.length !== 0 &&
    signup.verify.value.length   !== 0
  );

  // 4abc. show the warning if the password fields don't match
  show(signup.warning,
    signup.password.value.length !== 0 &&
    signup.verify.value.length   !== 0 &&
    signup.password.value !== signup.verify.value
  );
}

// 5a. show "Welcome back, username!" after login
login.button.addEventListener('click', () => {
  fieldset.innerHTML = `Welcome back, ${login.username.value}!`;
});

// 5b. show "Welcome, username!" after signup
signup.button.addEventListener('click', () => {
  fieldset.innerHTML = `Welcome, ${signup.username.value}!`;

  // check to see if the user's password is longer than 5 characters
  if (signup.password.value.length <= 5) {
    fieldset.innerHTML += `<br>CAUTION: Your password may not be very secure.`;
  }
});

// 5c. show "Welcome, Guest!" after guest login
guest.button.addEventListener('click', () => {
  fieldset.innerHTML = 'Welcome, Guest!';
});

// when the form be changed, invoke render()
form.addEventListener('change', render);
form.addEventListener('keyup', render);
form.addEventListener('keydown', (event) => {
  // prevent Form submit by ENTER because it will automatically submit the Form
  if (event.keyCode === 13) {
    event.preventDefault();
  }
});

// init the mode panel at first time
render();
