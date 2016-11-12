// Javascript for Lais of Marie de France

$(document).ready(function(){
	$("#aboutCopy").hide();
	$("#aboutHead").click(function(){
		$("#aboutCopy").show();
		$('html, body').scrollTop( $(document).height() );
	});
})


function generateLai2() {
	var playerBrutality = document.getElementById("playerBrutality").value;
	//var playerPassion = document.getElementById("playerPassion").value;
	//var playerKnights = document.getElementById("playerKnights").value;

	var overallBrutality = 0;
	var overallPassion = 0;
//	var overallKnights = i haven't figured this out yet;

//	start with a chunk that immediately splices everything that is going to be too brutal?

	for (var i=0; i<8; i++) {
		var randomPanel = Math.floor(Math.random() * laiPanels.length) + 0;
		var panel = document.createElement("img");
		panel.src = laiPanels[randomPanel].src;
		document.getElementById("lai").appendChild(panel);
		laiPanels.splice(randomPanel, 1);

		overallBrutality += laiPanels[randomPanel].brutal;
		var remainingBrutality = playerBrutality - overallBrutality;

//NOTES
//		if diff between playerBrutality and overallBrutality is less than x, remove all panels from the list that are too brutal
//		ok this is going to involve some actual maths here.
//		the things that remain in the list should have brutality such that they can meet the target
//		if the player brutality is low, the very brutal things should be removed
// 		if the player brutality is high, the not-very-brutal things should be removed
//		the range is 0 to 40. the range per panel is 0 to 5. 8 * 5 = 40.
//		

//		if diff between playerPassion and overallPassion is less than x , remove all panels from the list that are too passionate
//		if there are too many knights, don't introduce any new nights (string based?)
	}
}


function generateLai() {
	//get player's inputed brutality, which can be between 8 and 40
	var playerBrutality = document.getElementById("playerBrutality").value;
	console.log(playerBrutality);

	//how brutal the story is so far
	var overallBrutality = 0;

	// case statement for different levels of brutality
	// case 0: 0-15
		// choose random panels but don't exceed player brutality; switch to nuns
	// case 1: 16-29
		// choose more brutal panels but don't exceed 1/2 player brutality; switch to all random panels; switch to nuns
	// case 3: 30-40
		// choose more brutal panels but don't exceed 


		/* switch (true) {
			case (playerBrutality < 15 ): 
		} */

	var partPlayerBrutality = (playerBrutality * .8);

	console.log(partPlayerBrutality);

	for (var i = 0; i < 8; i++) {
		if (overallBrutality < partPlayerBrutality) {
			var randomPanel = Math.floor(Math.random() * moreBrutalPanels.length) + 0;
			var panel = document.createElement("img");
			panel.src = moreBrutalPanels[randomPanel].src;
			document.getElementById("lai").appendChild(panel);
			overallBrutality += moreBrutalPanels[randomPanel].brutal;
			moreBrutalPanels.splice(randomPanel, 1 );
		} else if (overallBrutality < playerBrutality) {
			//adds new random panel:
			var randomPanel = Math.floor(Math.random() * laiPanels.length) + 0;
			var panel = document.createElement("img");
			panel.src = laiPanels[randomPanel].src;
			document.getElementById("lai").appendChild(panel);
			//tracks brutality of lai thus far:
			overallBrutality += laiPanels[randomPanel].brutal;
			laiPanels.splice(randomPanel, 1 );
		} else {
			var randomPanel = Math.floor(Math.random() * unbrutalPanels.length) + 0;
			var panel = document.createElement("img");
			panel.src = unbrutalPanels[randomPanel].src;
			document.getElementById("lai").appendChild(panel);
			unbrutalPanels.splice(randomPanel, 1 );
		}
	}

	console.log(overallBrutality);

	var btn = document.getElementById("btn");
	btn.disabled = true;

}



// NOTES

// Returns a random integer between min and max:
// Math.floor(Math.random() * (max - min + 1)) + min;







