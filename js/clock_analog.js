let uurwijzer = document.getElementById('uurWijzer');
let minuutwijzer = document.getElementById('minuutWijzer');
let secondwijzer = document.getElementById('secondWijzer');

function clock(){
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let hoursdraai = (hours*30)+(0.5*minutes); // 30 graden. 30/60
	let minutesdraai = (minutes*6)+(0.1*seconds); // 6deg 6/60
	let secondsdraai = seconds*6; // 360/6

	uurwijzer.style.transform = 'rotate(' + hoursdraai + 'deg)';
	minuutwijzer.style.transform = 'rotate(' + minutesdraai + 'deg)';
	secondwijzer.style.transform = 'rotate(' + secondsdraai + 'deg)';

	setTimeout(clock, 1000) //Zorgt dat de klok kan draaien 	
}

clock();