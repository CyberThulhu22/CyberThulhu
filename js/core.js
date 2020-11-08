var i = 0
function typeWriter() {
	// Typing Text...
	var speed = 100; /* The Speed/Duration of the effect in milliseconds*/
	var txt = "CyberThulhu's Main Page";
	if (i < txt.length){
		document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}