// Change Password
const getChangePassword = () => {
  const ele = document.getElementById('change_password');
  const old_pwd = ele.querySelector('input[name="old_password"]');
  const new_pwd = ele.querySelector('input[name="new_password"]');
  const verify = ele.querySelector('input[name="verify_new_password"]');
  const warning = ele.querySelectorAll('.warning');
  const submit = ele.querySelector('button');

  addEventListenerAll([old_pwd, new_pwd, verify], 'input', () => {
    hide(warning[1]);
    hide(submit);

    // work around
    const pwd = document.querySelector('#signup input[name="password"]');

    show(warning[0], old_pwd.value.length !== 0 && pwd.value.length !== 0 && pwd.value !== old_pwd.value);

    if (new_pwd.value.length !== 0 && verify.value.length !== 0) {
      if (new_pwd.value !== verify.value) {
        show(warning[1]);
      } else if (old_pwd.value.length !== 0 && old_pwd.value === pwd.value) {
        show(submit);
      }
    }
  });

  return {
    ...displayFuncFactory(ele),
    onSubmit: (callback) => { submit.addEventListener('click', callback) }
  };
}
