var i = 0
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

function blink() {
	var f = document.getElementById('blink');
	setInterval( function() {
		f.style.display = (f.style.display == 'none' ? '' : 'none');
	}, 1000);
};