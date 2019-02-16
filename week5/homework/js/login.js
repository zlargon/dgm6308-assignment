// login
window.getLogin = () => {
  const ele = document.getElementById('login');
  const username = ele.querySelector('input[name="username"]');
  const password = ele.querySelector('input[name="password"]');
  const submit = ele.querySelector('button');

  addEventListenerAll([username, password], 'input', () => {
    show(submit, username.value.length !== 0 && password.value.length !== 0);
  })

  return {
    ...displayFuncFactory(ele),
    getUsername: () => username.value,
    onLogin: (callback) => {
      submit.addEventListener('click', () => {
        callback(username.value, password.value);
      });
    }
  };
}
