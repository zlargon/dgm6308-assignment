(() => {
const radios = getRadios();
const login = getLogin();
const signup = getSignup();
const guest = getGuest();
const signup_result = getSignupResult();
const guest_result = getGuestResult();
const change_password = getChangePassword();
const final_message = getFinalMessage();

// radios: prev => current
radios.onSelect((prev, current) => {
  const ele = { login, signup, guest }
  ele[prev].hide();     // hide previous one
  ele[current].show();  // show current one
});

// login => login_result
login.onLogin((username, password) => {
  radios.hide();
  login.hide();
  final_message.show();
  final_message.setMessage(`Welcome back, ${username}!`);
});

// signup => signup_result
signup.onSubmit((username, password) => {
  radios.hide();
  signup.hide();
  signup_result.show();
  signup_result.setUsername(username);
  signup_result.setPassword(password);
});

// signup_result => change_password
signup_result.onSubmit(() => {
  signup_result.hide();
  change_password.show();
});

// guest => guest_result
guest.onLogin(() => {
  radios.hide();
  guest.hide();
  guest_result.show();
});

// guest_result => signup
guest_result.onSignUp(() => {
  radios.show();
  guest_result.hide();
  radios.select('signup');
});

// change_password => final_message
change_password.onSubmit(() => {
  change_password.hide();
  final_message.show();
  final_message.setMessage('Your password has been changed.');
});

})();
