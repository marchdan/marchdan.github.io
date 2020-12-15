// create our AudioContext and Oscillator Nodes
var sounds, states, gain;

gain = 0.8;

sounds = new Array(13);
states = new Array(13);

sounds[0] = new Audio("./media/bannerJuly.wav"); // Star Spangled
sounds[1] = new Audio("./media/blessJuly.wav"); // G'd Bless America
sounds[2] = new Audio("./media/hymnJuly.wav"); // Battle Hymn of the Republic
sounds[3] = new Audio("./media/stripesJuly.wav"); //Stars and Stripes Forever
sounds[4] = new Audio("./media/tisJuly.wav"); //'Tis the Season to be Jolly
sounds[5] = new Audio("./media/landJuly.wav"); //This land is your land
sounds[6] = new Audio("./media/chiefJuly.wav"); //Hail to the Chief
sounds[7] = new Audio("./media/johnnyJuly.wav"); // Johnny Comes Marching Home
sounds[8] = new Audio("./media/fallenJuly.wav"); // Hymn to the Fallen
sounds[9] = new Audio("./media/columbiaJuly.wav"); //Colubia
sounds[10] = new Audio("./media/flagJuly.wav"); //Grand Old Flag
sounds[11] = new Audio("./media/aforceJuly.wav"); //Air Force Song
sounds[12] = new Audio("./media/armyJuly.wav"); //Army Song
sounds[13] = new Audio("./media/marineJuly.wav"); //Marine Song

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
states[12] = 0;
states[13] = 0;

for (var i = 0; i < sounds.length; i++){
	sounds[i].volume = gain;
}

//get buttons from html doc

var clip0 = document.getElementById('bx');
var clip1 = document.getElementById('s1');
var clip2 = document.getElementById('s2');
var clip3 = document.getElementById('s3');
var clip4 = document.getElementById('s4');
var clip5 = document.getElementById('s5');
var clip6 = document.getElementById('s6');
var clip7 = document.getElementById('s7');
var clip8 = document.getElementById('s8');
var clip9 = document.getElementById('s9');
var clip10 = document.getElementById('s10');
var clip11 = document.getElementById('s11');
var clip12 = document.getElementById('s12');
var clip13 = document.getElementById('s13');

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
function clp12(){
	if(states[12] == 0){
		states[12] = 1;
		sounds[12].play();
	}
	else{
		states[12] = 0;
		sounds[12].pause();
		sounds[12].currentTime = 0;
	}
}
function clp13(){
	if(states[13] == 0){
		states[13] = 1;
		sounds[13].play();
	}
	else{
		states[13] = 0;
		sounds[13].pause();
		sounds[13].currentTime = 0;
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
clip9.addEventListener('click', clp9);
clip10.addEventListener('click', clp10);
clip11.addEventListener('click', clp11);
clip12.addEventListener('click', clp12);
clip13.addEventListener('click', clp13);
