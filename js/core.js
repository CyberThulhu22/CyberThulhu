var i = 0
function typeWriter() {
	// Typing Text...
	var txt = "CyberThulhu's Main Page";
	var speed = 100; /* The Speed/Duration of the effect in milliseconds*/

	if (i < txt.length){
		document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}