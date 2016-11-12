// Panel objects for Lais generation
var laiPanels = [
	{
		brutal: 0,
		passion: 0,
		src: "panels/nuns1.png"
	},

	{
		brutal: 0,
		passion: 0,
		src: "panels/nuns2.png"
	},

	{
		brutal: 0,
		passion: 1,
		src: "panels/towers.png"
	},

	{
		brutal: 2,
		passion: 0,
		src: "panels/werewolf.png"
	},

	{
		brutal: 0,
		passion: 3,
		src: "panels/neverBetray.png"
	},

	{
		brutal: 4,
		passion: 0,
		src: "panels/anOmen.png"
	},

	{
		brutal: 5,
		passion: 0,
		src: "panels/realDad.png"
	},

	{
		brutal: 1,
		passion: 0,
		src: "panels/hideClothes.png"
	},

	{
		brutal: 5,
		passion: 0,
		src: "panels/nightingale.png"
	},

	{
		brutal: 3,
		passion: 0,
		src: "panels/boat.png"
	},

	{
		brutal: 1,
		passion: 0,
		src: "panels/tower.png"
	},

	{
		brutal: 1,
		passion: 5,
		src: "panels/dieFuckMe.png"
	},

	{
		brutal: 0,
		passion: 4,
		src: "panels/allWomens.png"
	},

	{
		brutal: 0,
		passion: 1,
		src: "panels/broGrabs.png"
	},

	{
		brutal: 2,
		passion: 0,
		src: "panels/inspireLoyalty.png"
	},

	{
		brutal: 0,
		passion: 3,
		src: "panels/powerDynamic.png"
	},

	{
		brutal: 3,
		passion: 3,
		src: "panels/killHusband.png"
	},

	{
		brutal: 4,
		passion: 0,
		src: "panels/brobaths.png"
	}
]

var unbrutalPanels = [];
	for (i = 0; i < laiPanels.length; i++) {
		if (laiPanels[i].brutal == 0) {
			unbrutalPanels.push(laiPanels[i]);
		}
	}

var moreBrutalPanels = [];
	for (i = 0; i < laiPanels.length; i++) {
		if (laiPanels[i].brutal > 2) {
			moreBrutalPanels.push(laiPanels[i]);
		}
	}








