function validation () {
	const form = document.getElementById("formulario");
	const email = document.getElementById("Email").value;

	const text = document.getElementById("text");
	const pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (email.match(pattern)) {
		form.classList.add("valid");
		form.classList.remove("invalid");
		text.innerHTML = "It's OK Email valid !";
		text.style.color = "hsl(120, 69%, 57%)";
	}
	else {
		form.classList.remove("valid");
		form.classList.add("invalid");
		text.innerHTML = "Please provide a valid email";
		text.style.color = "hsl(0, 93%, 68%)";
	}

	if (email == "") {
		form.classList.remove("valid");
		form.classList.remove("invalid");
		text.innerHTML = "Press your Email";
	}
}