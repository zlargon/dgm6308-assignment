// 1. Guest
window.getGuest = () => {
  const ele = document.getElementById('guest');
  const submit = ele.querySelector('button');

  return {
    ...displayFuncFactory(ele),
    onLogin: (callback) => { submit.addEventListener('click', callback) }
  }
}

// 2. Guest Result
window.getGuestResult = () => {
  const ele = document.getElementById('guest_result');
  const submit = ele.querySelector('button');

  return {
    ...displayFuncFactory(ele),
    onSignUp: (callback) => { submit.addEventListener('click', callback) }
  }
}
