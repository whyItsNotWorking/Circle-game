window.onload = function() {

	intiateGame();
}
// Global variables are not good....
ListOfColors = [];
globalIndex = ["first","second","third","fourth","fifth","sixth"];
function rng() {
	return Math.floor((Math.random() * 255));
 	
 }

function getInitialColors(colorags) {
	var color = colorags || {}; 	//no need
	color.red = rng();
	color.blue = rng();
	color.green = rng();
	return color;

}

function intiateGame(){
	var questColor = {};
	
	getInitialColors(questColor);
	var colorsBalls = [];
	for (var i = 0; i < 5; i++) {
		ListOfColors.push(getInitialColors());
	}

	myRandIndex  = Math.floor((Math.random() * 5));
	console.log("myRandIndex = "+myRandIndex);
	
	ListOfColors.splice(myRandIndex, 0, questColor);
	document.getElementById("answerIndex").innerHTML = "?"

	document.getElementById("game_qu").innerHTML = "RBG("+ListOfColors[i].red+","+ListOfColors[i].blue+","+ListOfColors[i].green+")";
	//Create Circles 
	for (var i = 0; i < 6; i++) {

		var colorStr = "rgb("+ListOfColors[i].red+","+ListOfColors[i].blue+","+ListOfColors[i].green+")";
		document.getElementById(globalIndex[i]+"-cirlcle").style.backgroundColor= colorStr;
	}
}

function showAnswer() {
	document.getElementById("answerIndex").innerHTML = myRandIndex;
}
	
function onMyClick(clickedIndex) {
		console.log("Called");
		if (clickedIndex==myRandIndex) {

			M.toast({html: 'You Won! New Game in 3 seconds'})

		}
		else
			M.toast({html: 'You Lost! This game sucks anyway. New Game in 3 seconds'})

		setTimeout(function(){ 

			intiateGame();
		}, 3000);
}
// for that damn index tooltip
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.tooltipped');
	var instances = M.Tooltip.init(elems, {});
});