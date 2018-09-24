	function checkCredentials(){
		let attemptedLogins=3
		let username=document.getElementById('username').value;
		let password=document.getElementById('password').value;

		if (username==="admin" && password==="password"){
			alert('Excellent! Correct Username/Password Combination');
			window.location='loggedin.html';
		}else{
			attemptedLogins--;
			alert(`Incorrect Username/Password Combination. You have ${attemptedLogins} attempts left`);
		}

		if (attemptedLogins===0){
			alert('The login button is now disabled since you failed the login/password combination')
			document.getElementById('login').disabled=true;
			document.getElementById('username').disabled=true;
			document.getElementById('password').disabled=true;


		}
	}

	const login=document.getElementById('login');
	login.addEventListener('click',checkCredentials, false);