// get login & password from the user
(function() {
	var form = document.getElementById('login');
	
	addEvent(form, 'submit', function(e) {
		e.preventDefault();
		var elements = this.elements;
		var username = elements.username.value;
		var msg = 'Welcome ' + username;
		document.getElementById('main').textContent = msg;
	});
	
	// changing password input field to be visible or not	
	var pwd = document.getElementById('pwd');
	var chk = document.getElementById('showPwd');
	
	addEvent(chk, 'change', function(e){
		var target= e.target || e.srcElement;
		console.log(" pwd = " + pwd);
		try{
			if (target.checked) {
				pwd.type = 'text';
			} else {
				pwd.type = 'password';
			}
		} catch(error) {
			alert('This browser cannot switch type');
		}
	});
	
	
}());