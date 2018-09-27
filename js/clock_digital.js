//BE
function clockbe(){
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let time = hours + ":" + minutes + ":" + seconds;
	document.getElementById("clockbe").innerHTML = time;

	setTimeout(clockbe, 1000);
};

clockbe();

//NY
function clockny(){
	let date = new Date();
	let hours = date.getHours() - 6;
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let time = hours + ":" + minutes + ":" + seconds;
	document.getElementById("clockny").innerHTML = time;

	setTimeout(clockny, 1000);
};

clockny();