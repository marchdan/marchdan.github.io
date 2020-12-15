// create our AudioContext and Oscillator Nodes
var sounds, states, gain;

gain = 0.8;
sounds = new Array(12);
states = new Array(12);

sounds[0] = new Audio("./media/wantChris.wav"); //All I Want For Christmas
sounds[1] = new Audio("./media/hollyChris.wav"); //
sounds[2] = new Audio("./media/frostChris.wav"); //Frosty the Snowman
sounds[3] = new Audio("./media/whiteChris.wav"); // White Christmas
sounds[4] = new Audio("./media/sleighChris.wav"); // Sleigh Ride
sounds[5] = new Audio("./media/jingleChris.wav"); // Jingle Bells
sounds[6] = new Audio("./media/believeChris.wav"); //Believe
sounds[7] = new Audio("./media/felizChris.wav"); // Feliz Navidad
sounds[8] = new Audio("./media/wonderChris.wav"); // Most Wonderful Time
sounds[9] = new Audio("./media/rudolphChris.wav"); //Rudolph the Red Nosed Reindeer
sounds[10] = new Audio("./media/silverChris.wav"); //Silver Bells
sounds[11] = new Audio("./media/grandChris.wav"); // Grandma Got Runover by a Reindeer

states[0] = 0;
states[1] = 0;
states[2] = 0;
states[3] = 0;
states[4] = 0;
states[5] = 0;
states[6] = 0;
states[7] = 0;
states[8] = 0;
states[9] = 0;
states[10] = 0;
states[11] = 0;

for (var i = 0; i < sounds.length; i++){
	sounds[i].volume = gain;
}

//get buttons from html doc

var clip0 = document.getElementById('bottom');
var clip1 = document.getElementsByClassName('red');
var clip2 = document.getElementsByClassName('orange');
var clip3 = document.getElementsByClassName('white');
var clip4 = document.getElementsByClassName('purple');
var clip5 = document.getElementsByClassName('blue');
var clip6 = document.getElementsByClassName('pink');
var clip7 = document.getElementsByClassName('yellow');
var clip8 = document.getElementsByClassName('blue2');
var clip9 = document.getElementsByClassName('orange2');
var clip10 = document.getElementsByClassName('yellow2');
var clip11 = document.getElementById('star');

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
function clp9(){
	if(states[9] == 0){
		states[9] = 1;
		sounds[9].play();
	}
	else{
		states[9] = 0;
		sounds[9].pause();
		sounds[9].currentTime = 0;
	}
}
function clp10(){
	if(states[10] == 0){
		states[10] = 1;
		sounds[10].play();
	}
	else{
		states[10] = 0;
		sounds[10].pause();
		sounds[10].currentTime = 0;
	}
}
function clp11(){
	if(states[11] == 0){
		states[11] = 1;
		sounds[11].play();
	}
	else{
		states[11] = 0;
		sounds[11].pause();
		sounds[11].currentTime = 0;
	}
}

//Add event listeners to respond to buttons
clip0.addEventListener('click', clp0);
for (var i = 0; i < clip1.length; i++){
	clip1[i].addEventListener('click', clp1);
}
for (var i = 0; i < clip2.length; i++){
	clip2[i].addEventListener('click', clp2);
}
for (var i = 0; i < clip3.length; i++){
	clip3[i].addEventListener('click', clp3);
}
for (var i = 0; i < clip4.length; i++){
	clip4[i].addEventListener('click', clp4);
}
for (var i = 0; i < clip5.length; i++){
	clip5[i].addEventListener('click', clp5);
}
for (var i = 0; i < clip6.length; i++){
	clip6[i].addEventListener('click', clp6);
}
for (var i = 0; i < clip7.length; i++){
	clip7[i].addEventListener('click', clp7);
}
for (var i = 0; i < clip8.length; i++){
	clip8[i].addEventListener('click', clp8);
}
for (var i = 0; i < clip9.length; i++){
	clip9[i].addEventListener('click', clp9);
}
for (var i = 0; i < clip10.length; i++){
	clip10[i].addEventListener('click', clp10);
}

clip11.addEventListener('click', clp11);
