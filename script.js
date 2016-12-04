// Javascript for Lais of Marie de France

/*TODO
[ ] redraw panels
[ ] properly categorize them
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

//splices 90% of panels meeting condition
function mySplicer(i, x) {
	var randomSplicer = Math.floor(Math.random() * 11);
			if (randomSplicer < x) {
				laiPanels.splice(i,1);
			}
}

//insert the panel
function insertPanel(randomPanel, playerBrutality, playerPassion) {
	//insert the panel
	var panel = document.createElement("img");
	panel.src = laiPanels[randomPanel].src;
	console.log(laiPanels[randomPanel].src);
	document.getElementById("lai").appendChild(panel);
	laiPanels.splice(randomPanel, 1);
	//check up on current meters:
//	console.log(randomPanel);
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
}

function reloadLai() {
	window.location.reload();
	scroll(0,0);
}

//make a lai!
function generateLai2() {
	var playerBrutality = document.getElementById("playerBrutality").value;
	var playerPassion = document.getElementById("playerPassion").value;
	//var playerKnights = document.getElementById("playerKnights").value;


	//var overallKnights = i haven't figured this out yet;

	//INITIAL SPLICING
	if (playerBrutality < 11) {
		for (var i=0; i<laiPanels.length; i++) {
			if (laiPanels[i].brutal>3){
				mySplicer(i, 10);
			}
		}
	}
	if (playerBrutality > 30){
		for (var i=0; i<laiPanels.length; i++){
			if(laiPanels[i].brutal<2){
				mySplicer(i, 10);
			}
		}
	}
	if (playerPassion < 11) {
		for (var i=0; i<laiPanels.length; i++) {
			if (laiPanels[i].passion>3){
				mySplicer(i, 10);
			}
		}
	}
	if (playerPassion > 30){
		for (var i=0; i<laiPanels.length; i++){
			if(laiPanels[i].passion<2){
				mySplicer(i, 10);
			}
		}
	}

	//PANEL ONE:
	var panelOneInserted = false;
	while (panelOneInserted == false) {
		var randomPanel = Math.floor(Math.random() * laiPanels.length);
		if (laiPanels[randomPanel].beginning === true){
			insertPanel(randomPanel, playerBrutality, playerPassion);
			panelOneInserted = true;
			console.log("a panel was inserted!!");
		} else {
			console.log("a panel was not inserted");
		}
	}
	
	//PANEL TWO
	var panelTwoInserted = false;
	while (panelTwoInserted == false) {
		var randomPanel = Math.floor(Math.random() * laiPanels.length);
		if (laiPanels[randomPanel].middle === true){
			insertPanel(randomPanel, playerBrutality, playerPassion);
			panelTwoInserted = true;
			console.log("a panel was inserted!!");
		} else {
			console.log("a panel was not inserted");
		}
	}

	//PANEL THREE
	var panelThreeInserted = false;
	while (panelThreeInserted == false) {
		var randomPanel = Math.floor(Math.random() * laiPanels.length);
		if (laiPanels[randomPanel].middle === true){
			insertPanel(randomPanel, playerBrutality, playerPassion);
			panelThreeInserted = true;
			console.log("a panel was inserted!!");

			//$(panel).css("background-color","red");

		} else {
			console.log("a panel was not inserted");
		}
	}

	//PANEL FOUR
	var panelFourInserted = false;
	while (panelFourInserted == false) {
		var randomPanel = Math.floor(Math.random() * laiPanels.length);
		if (laiPanels[randomPanel].end === true){
			insertPanel(randomPanel, playerBrutality, playerPassion);
			panelFourInserted = true;
			console.log("a panel was inserted!!");
		} else {
			console.log("a panel was not inserted");
		}
	}

	//PLAY AGAIN
	var playAgain = document.createElement("img");
	playAgain.src = "panels/end.jpg";
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







