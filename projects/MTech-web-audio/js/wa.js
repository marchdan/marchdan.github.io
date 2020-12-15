var sound, state, gain;

gain = 0.8;

sound = new Audio("./media/alma_mater.wav"); 


state = 0;

sound.volume = gain;

//get buttons from html doc

var clip = document.getElementById('hidden');
//Create functions to start and stop
function clp(){
	if(state == 0){
		state = 1;
		sound.play();
	}
	else{
		state = 0;
		sound.pause();
		sound.currentTime = 0;
	}
}

//Add event listeners to respond to buttons
clip.addEventListener('click', clp);