// create our AudioContext and Oscillator Nodes
var sounds, states, gain;

gain = 0.8;

sounds = new Array(9);
states = new Array(9);

sounds[0] = new Audio("./media/oHan.wav"); //Hanukkah Oh Hanukkah
sounds[1] = new Audio("./media/sandHan.wav"); //Adam Sandler's Hanukkah
sounds[2] = new Audio("./media/bareHan.wav"); // Hanukkah Blessings
sounds[3] = new Audio("./media/maozHan.wav"); //Maoz Tzur
sounds[4] = new Audio("./media/dreidHan.wav"); //I Had a Little Dreidel
sounds[5] = new Audio("./media/sevHan.wav"); //Sevivon Sov Sov Sov
sounds[6] = new Audio("./media/miyaHan.wav"); // Mi'Yamel
sounds[7] = new Audio("./media/hereHan.wav"); // Hanukkah is Here
sounds[8] = new Audio("./media/alhanHan.wav"); // Al Hanisim

states[0] = 0;
states[1] = 0;
states[2] = 0;
states[3] = 0;
states[4] = 0;
states[5] = 0;
states[6] = 0;
states[7] = 0;
states[8] = 0;

for (var i = 0; i < sounds.length; i++){
	sounds[i].volume = gain;
}

//get buttons from html doc

var clip0 = document.getElementById('cs');
var clip1 = document.getElementById('c1');
var clip2 = document.getElementById('c2');
var clip3 = document.getElementById('c3');
var clip4 = document.getElementById('c4');
var clip5 = document.getElementById('c5');
var clip6 = document.getElementById('c6');
var clip7 = document.getElementById('c7');
var clip8 = document.getElementById('c8');

//Create functions to start and stop
function clp0(){
	if(states[0] == 0){
		states[0] = 1;
		sounds[0].play();
	}
	else{
		states[0] = 0;
		sounds[0].pause();
		sounds[0].currentTime = 0;
	}
}
function clp1(){
	if(states[1] == 0){
		states[1] = 1;
		sounds[1].play();
	}
	else{
		states[1] = 0;
		sounds[1].pause();
		sounds[1].currentTime = 0;
	}
}
function clp2(){
	if(states[2] == 0){
		states[2] = 1;
		sounds[2].play();
	}
	else{
		states[2] = 0;
		sounds[2].pause();
		sounds[2].currentTime = 0;
	}
}
function clp3(){
	if(states[3] == 0){
		states[3] = 1;
		sounds[3].play();
	}
	else{
		states[3] = 0;
		sounds[3].pause();
		sounds[3].currentTime = 0;
	}
}
function clp4(){
	if(states[4] == 0){
		states[4] = 1;
		sounds[4].play();
	}
	else{
		states[4] = 0;
		sounds[4].pause();
		sounds[4].currentTime = 0;
	}
}
function clp5(){
	if(states[5] == 0){
		states[5] = 1;
		sounds[5].play();
	}
	else{
		states[5] = 0;
		sounds[5].pause();
		sounds[5].currentTime = 0;
	}
}
function clp6(){
	if(states[6] == 0){
		states[6] = 1;
		sounds[6].play();
	}
	else{
		states[6] = 0;
		sounds[6].pause();
		sounds[6].currentTime = 0;
	}
}
function clp7(){
	if(states[7] == 0){
		states[7] = 1;
		sounds[7].play();
	}
	else{
		states[7] = 0;
		sounds[7].pause();
		sounds[7].currentTime = 0;
	}
}
function clp8(){
	if(states[8] == 0){
		states[8] = 1;
		sounds[8].play();
	}
	else{
		states[8] = 0;
		sounds[8].pause();
		sounds[8].currentTime = 0;
	}
}


//Add event listeners to respond to buttons
clip0.addEventListener('click', clp0);
clip1.addEventListener('click', clp1);
clip2.addEventListener('click', clp2);
clip3.addEventListener('click', clp3);
clip4.addEventListener('click', clp4);
clip5.addEventListener('click', clp5);
clip6.addEventListener('click', clp6);
clip7.addEventListener('click', clp7);
clip8.addEventListener('click', clp8);

