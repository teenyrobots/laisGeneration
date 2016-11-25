// Javascript for Lais of Marie de France

//jQuery initialize
$(document).ready(function(){
	$("#aboutCopy").hide();
	$("#aboutHead").click(function(){
		$("#aboutCopy").show();
		$('html, body').scrollTop( $(document).height() );
	});
})

//splices 90% of panels meeting condition
function ninetySplicer(i) {
	var randomSplicer = Math.floor(Math.random() * 11);
			if (randomSplicer < 10) {
				laiPanels.splice(i,1);
			}
}

//make a lai!
function generateLai2() {
	var playerBrutality = document.getElementById("playerBrutality").value;
	var playerPassion = document.getElementById("playerPassion").value;
	//var playerKnights = document.getElementById("playerKnights").value;

	var overallBrutality = 0;
	var overallPassion = 0;
	//var overallKnights = i haven't figured this out yet;

	//splice most of the brutalest ones
	if (playerBrutality < 11) {
		for (var i=0; i<laiPanels.length; i++) {
			if (laiPanels[i].brutal>3){
				ninetySplicer(i);
			}
		}
		//console.log("i spliced lots of brutal panels");
	}

	//splice most of the least brutal things
	if (playerBrutality > 30){
		for (var i=0; i<laiPanels.length; i++){
			if(laiPanels[i].brutal<2){
				ninetySplicer(i);
			}
		}
		//console.log("i spliced lots of gentle panels");
	}

	//splice most of the passionest ones
	if (playerPassion < 11) {
		for (var i=0; i<laiPanels.length; i++) {
			if (laiPanels[i].passion>3){
				ninetySplicer(i);
			}
		}
		console.log("i spliced lots of passionate panels");
	}

	//splice most of the honorablest things
	if (playerPassion > 30){
		for (var i=0; i<laiPanels.length; i++){
			if(laiPanels[i].passion<2){
				ninetySplicer(i);
			}
		}
		console.log("i spliced lots of honorable panels");
	}

	for (var i=0; i<8; i++) {
		var randomPanel = Math.floor(Math.random() * laiPanels.length) + 0;
		var panel = document.createElement("img");
		panel.src = laiPanels[randomPanel].src;
		document.getElementById("lai").appendChild(panel);

		//check up on current meters:
		overallBrutality += laiPanels[randomPanel].brutal;
		console.log("overallBrutality is: "+overallBrutality);
		overallPassion += laiPanels[randomPanel].passion;
		console.log("overallPassion is: "+overallPassion);

		//cut the panel we just used
		laiPanels.splice(randomPanel, 1);

		//if diff between playerBrutality and overallBrutality is less than x, remove all panels from the list that are too brutal
		//but maybe it should be: if remaining brutality is a certain percentage of playerBrutality then splice all the super brutal ones OR the not brutal ones
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

		if (i==7) {
			console.log("the player brutality was: "+playerBrutality);
			console.log("the final brutality was: "+overallBrutality);
			console.log("the player passion was: "+playerPassion);
			console.log("the final passion was: "+overallPassion);
		}

		//NOTES
		//if there are too many knights, don't introduce any new nights (string based?)

	}

	//print out the src's for the panels left in the array
	/*for (var k=0; k<laiPanels.length; k++) {
			console.log(laiPanels[k].src);
	}*/

	var btn = document.getElementById("btn");
	btn.disabled = true;
}



// NOTES

// Returns a random integer between min and max:
// Math.floor(Math.random() * (max - min + 1)) + min;







