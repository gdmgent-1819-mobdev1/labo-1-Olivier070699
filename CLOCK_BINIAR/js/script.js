//BE
function clock(){
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let time = hours + ":" + minutes + ":" + seconds;
	document.getElementById("digclock").innerHTML = time;

	setTimeout(clock, 1000);
};

clock();