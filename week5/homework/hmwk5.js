// elements
const radios = document.querySelectorAll('input[name="mode"]');
const panels = document.getElementById('panel').children;

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

// when the form be changed, invoke render()
const form = document.querySelector('form');
form.addEventListener('change', render);
form.addEventListener('keyup', render);

// init the mode panel at first time
render();

