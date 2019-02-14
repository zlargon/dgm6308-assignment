// elements
const radios = document.querySelectorAll('input[name="mode"]');
const panels = document.getElementById('panel').children;

const login = {
  username: document.getElementById('login_username'),
  password: document.getElementById('login_password'),
  submit:   document.getElementById('login_submit')
};

const signup = {
  username: document.getElementById('signup_username'),
  password: document.getElementById('signup_password'),
  verify:   document.getElementById('signup_verify_password'),
  submit:   document.getElementById('signup_submit')
};

const guest = {
  login: document.getElementById('guest_login')
}

const show = (ele, bool) => {
  ele.classList[bool ? 'remove' : 'add']('hide');
}

const render = () => {
  // get mode: login / signup / guest
  const mode = document.querySelector('input[name="mode"]:checked').value;

  for (const panel of panels) {
    // add class 'hide' if mode is not matched; otherwise, remove class 'hide'
    show(panel, panel.getAttribute('mode') === mode);
  }
}

// when the form be changed, invoke render()
const form = document.querySelector('form');
form.addEventListener('change', render);

// init the mode panel at first time
render();

