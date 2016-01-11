function validatenames(id) {
	
	var fnm = id;//document.RegForm.fname;

	if (fnm.value == null || fnm.value == "") {
		fnm.style.borderColor = "#D81B60";
		return false;
	}

	else if (fnm.value.match(/^[A-Za-z]+$/)) {
		fnm.style.borderColor = "";
		return true;
	}
};

function isChecked() {
	if(document.RegForm.male.checked == false && document.RegForm.female.checked == false) {
		alert("Please select any of the gender.");
		return false;
	}
};

function validateEmail() {
	var email = document.RegForm.email;

	if (email.value == null || email.value == "") {
		email.style.borderColor = "#D81B60";
		return false;
	}

	else if(email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
		email.style.borderColor = "";
		return true;
	}
};

function validatePass() {
	var pass = document.RegForm.pasword;
	var repass = document.RegForm.repassword;

	if (pass.value == "" || pass.value == null) {
		pass.style.borderColor = "red";
		return false;
	}
	else if(repass.value == "" || repass.value == null) {
		repass.style.borderColor = "red";
		return false;
	}

	

	else if (pass.value != repass.value) {
		alert("Both the passwords should be same.");
		return false;
	}

	else {
		pass.style.borderColor = "";
		repass.style.borderColor = "";
		return true;
	}

};

function isTicked() {
	var checkbox = document.RegForm.terms;

	if (checkbox.checked == false) {
		alert("Terms!", "You must tick the Terms and Conditions");
		return false;
	}
};

function validateAll() {
	if (validatenames(document.RegForm.fname) == false || validatenames(document.RegForm.lname) == false || isChecked() == false || validateEmail() == false || validatePass() == false || isTicked() == false)
		return false;
};