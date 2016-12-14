// Javascript for Lais of Marie de France

/*TODO
[x] redraw panels
[x] properly categorize them
*/

//jQuery initialize
$(document).ready(function(){
	$("#aboutCopy").hide();
	$("#aboutHead").click(function(){
		$("#aboutCopy").show();
		$('html, body').scrollTop( $(document).height() );
	});
})

var overallBrutality = 0;
var overallPassion = 0;

//splices X% of panels meeting condition
function mySplicer(i, x) {
	var randomSplicer = Math.floor(Math.random() * 11);
	if (randomSplicer < x) {
		laiPanels.splice(i,1);
	}
}

//insert the panel
function insertPanel(randomPanel, playerBrutality, playerPassion, panelNumber) {
	//insert the panel
	console.log(panelNumber);
	var panel = document.createElement("img");
	panel.src = laiPanels[randomPanel].src;
	console.log(laiPanels[randomPanel].src);
	document.getElementById("lai").appendChild(panel);
	//check up on current meters:
	overallBrutality += laiPanels[randomPanel].brutal;
	console.log("overallBrutality is: "+overallBrutality);
	overallPassion += laiPanels[randomPanel].passion;
	console.log("overallPassion is: "+overallPassion);
	//get rid of stuff that is too extreme
	if ((playerBrutality - overallBrutality) < 7) {
			console.log("remainingBrutality is too low");
			for (var j=0; j<laiPanels.length; j++) {
				if (laiPanels[j].brutal == 5) {
					laiPanels.splice(j, 1);
				}
			}
		}
	if ((playerPassion - overallPassion) < 7) {
		console.log("remainingPassion is too low");
		for (var j=0; j<laiPanels.length; j++) {
			if (laiPanels[j].passion == 5) {
				laiPanels.splice(j, 1);
			}
		}
	}
	if (panelNumber == 3){
		$(panel).css("background-color", "red");
	}
	laiPanels.splice(randomPanel, 1);
}

function reloadLai() {
	window.location.reload();
	scroll(0,0);
}

//make a lai!
function generateLai2(options) {
	// var playerBrutality = document.getElementById("playerBrutality").value;
	// var playerPassion = document.getElementById("playerPassion").value;
	//var playerKnights = document.getElementById("playerKnights").value;


	var playerBrutality = options.playerBrutality,
		playerPassion = options.playerPassion;

	//var overallKnights = i haven't figured this out yet;

	//INITIAL SPLICING
	if (playerBrutality < 11) {
		for (var i=0; i<laiPanels.length; i++) {
			if (laiPanels[i].brutal>5){
				mySplicer(i, 10);
			}
		}
	}
	if (playerBrutality > 30){
		for (var i=0; i<laiPanels.length; i++){
			if(laiPanels[i].brutal<7){
				mySplicer(i, 10);
			}
		}
	}
	if (playerPassion < 11) {
		for (var i=0; i<laiPanels.length; i++) {
			if (laiPanels[i].passion>5){
				mySplicer(i, 10);
			}
		}
	}
	if (playerPassion > 30){
		for (var i=0; i<laiPanels.length; i++){
			if(laiPanels[i].passion<7){
				mySplicer(i, 10);
			}
		}
	}

	//PANEL ONE:
	var panelOneInserted = false;
	while (panelOneInserted == false) {
		var randomPanel = Math.floor(Math.random() * laiPanels.length);
		if (laiPanels[randomPanel].beginning === true){
			insertPanel(randomPanel, playerBrutality, playerPassion, 1);
			panelOneInserted = true;
		}
	}
	
	//PANEL TWO
	var panelTwoInserted = false;
	while (panelTwoInserted == false) {
		var randomPanel = Math.floor(Math.random() * laiPanels.length);
		if (laiPanels[randomPanel].middle === true){
			insertPanel(randomPanel, playerBrutality, playerPassion, 2);
			panelTwoInserted = true;
		}
	}

	//PANEL THREE
	var panelThreeInserted = false;
	while (panelThreeInserted == false) {
		var randomPanel = Math.floor(Math.random() * laiPanels.length);
		if (laiPanels[randomPanel].middle === true){
			insertPanel(randomPanel, playerBrutality, playerPassion, 3);
			panelThreeInserted = true;
		}
	}

	//PANEL FOUR
	var panelFourInserted = false;
	while (panelFourInserted == false) {
		var randomPanel = Math.floor(Math.random() * laiPanels.length);
		if (laiPanels[randomPanel].end === true){
			insertPanel(randomPanel, playerBrutality, playerPassion, 4);
			panelFourInserted = true;
		}
	}

	//PLAY AGAIN
	var playAgain = document.createElement("img");
	playAgain.src = "images/end.jpg";
	playAgain.style="margin-bottom: 2em";
	playAgain.onclick = reloadLai;
	document.getElementById("lai").appendChild(playAgain);

	//FINAL CHECKUP
	console.log("the player brutality was: "+playerBrutality);
	console.log("the final brutality was: "+overallBrutality);
	console.log("the player passion was: "+playerPassion);
	console.log("the final passion was: "+overallPassion);
	
	//Knights??

	var btn = document.getElementById("btn");
	btn.disabled = true;
}


// NOTES

// Returns a random integer between min and max:
// Math.floor(Math.random() * (max - min + 1)) + min;

