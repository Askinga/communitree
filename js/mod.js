let modInfo = {
	name: "The Bee Tree",
	id: "allofemBeE",
	author: "Askinga",
	pointsName: "bees",
	discordName: "",
	discordLink: "",
	initialStartPoints: EN (0), // Used for hard resets and new players
	
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0",
	name: "Highly Responsive to Modifications",
}

let changelog = () => `<h1>Changelog:</h1><br/>
	<i>(Be warned: this contains spoilers!)</i><br/>
	<br/>
	<h2>v0.0</h2><br/>
		Initial release.<br/>
	<br/>
`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new ExpantaNum(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	
	let gain = EN(1)
	
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	() => `<h5 style="opacity:.5"><br/><i>(Current endgame: ${format([800, 2, 0, 1])} points)`
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte([800, 2, 0, 1])
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
