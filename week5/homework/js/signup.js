// 1. sign up
window.getSignup = () => {
  const ele = document.getElementById('signup');
  const username = ele.querySelector('input[name="username"]');
  const password = ele.querySelector('input[name="password"]');
  const verify = ele.querySelector('input[name="verify_password"]');
  const warning = ele.querySelector('.warning');
  const submit = ele.querySelector('button');

  addEventListenerAll([username, password, verify], 'input', () => {
    hide(warning);
    hide(submit);

    if (password.value.length !== 0 && verify.value.length !== 0) {
      if (password.value !== verify.value) {
        show(warning);
      } else if (username.value.length !== 0) {
        show(submit);
      }
    }
  });

  return {
    ...displayFuncFactory(ele),
    getUsername: () => username.value,
    onSubmit: (callback) => {
      submit.addEventListener('click', () => {
        callback(username.value, password.value);
      });
    }
  };
}

// 2. sign up result
window.getSignupResult = () => {
  const ele = document.getElementById('signup_result');
  const greeting = ele.querySelector('.greeting');
  const submit = ele.querySelector('button');
  const warning = ele.querySelector('.warning');

  return {
    ...displayFuncFactory(ele),
    setUsername: username => { greeting.textContent = `Welcome, ${username}!` },
    setPassword: password => { show(warning, password.length <= 5) },
    onSubmit:    callback => { submit.addEventListener('click', callback) }
  }
}
