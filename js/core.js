var i = 0;

function typeWriter() {
	// Typing Text...
	var speed = 70; /* The Speed/Duration of the effect in milliseconds*/
	var txt = "CyberThulhu's Main Page";
	if (i < txt.length){
		document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
};

function welcome_alert() {
	// Welcome Page Alert Box
	window.alert("Welcome to My Page");
};