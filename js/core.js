function typeWriter() {
	// Typing Text...
	var i = 0;
	var txt = "CyberThulhu's Main Page";
	var speed = 50; /* The Speed/Duration of the effect in milliseconds*/

	if (i < txt.length){
		document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}