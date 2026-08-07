// random test bs
function testfunction() {
				document.getElementById("test").innerHTML = "wow you're goated";
				console.log("hello");
			}
//array randomizer
const originalFrames = [
	{id: "s1e1f1", file: "01357bn.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f2", file: "135c9b6.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f3", file: "1bv9531673.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f4", file: "b315nnn613.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f3", file: "1b3613b63n.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f3", file: "n135b531n315.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f3", file: "b315n135.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f3", file: "n135v31n513.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f3", file: "b51135b135.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f3", file: "b36108b163.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f3", file: "n6139un631.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f3", file: "v36b01368.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f", file: "n631b316.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f", file: "b136361b.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f", file: "b613n8013.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f", file: "b36103681.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f", file: "b361m136.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f", file: "b631m61.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f", file: "n316m136.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f", file: "n316np136.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f", file: "n13n13o6.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f", file: "jb136hb913.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f", file: "b31n361931.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f", file: "b31608613n.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f", file: "n316016n1.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f", file: "n136631.jpg", episode: "S1E1 - Live with the Flow, Baby"},








]
let frames = [...originalFrames]


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//////////////////encryption?????


shuffle(frames);

//array functions
let currentFrame = null;

function shuffleArray() {
	shuffle(frames)
}

function printArray() {
	if (frames === undefined || frames.length == 0) {
			document.getElementById("guess").style="display: none;"
			document.getElementById("submit").style="display: none;"
			document.getElementById("label").style="display: none;"
	
			document.getElementById("output").textContent = "You Win!"
			document.getElementById("output").style="display: block"

		return
}
	currentFrame = frames.pop();
	document.getElementById("output").textContent = currentFrame.id
	document.getElementById("imageOutput").src = "frames\\" + currentFrame.file
}

function refreshArray() {
	frames = [...originalFrames]
}

var score = 0
var highscore = 0

function checkResult() {
	var guess = document.getElementById("guess").value.trim();
	if (guess == currentFrame.episode) {
		printArray();
		document.getElementById("guess").value = ""
		score = score + 1
		document.getElementById("score").textContent = "Score: " + score

		if (score >= highscore) {
			highscore = score
			document.getElementById("highscore").textContent = "Highscore: " + highscore
		}
		return
	} else
		document.getElementById("output").style="display:block"
		document.getElementById("output").textContent="Not quite. The episode was " + currentFrame.episode 
		document.getElementById("submit").style="display: none;"
		document.getElementById("tryAgain").style="display: block;"


}

function tryAgain() {
	score = 0
	document.getElementById("score").textContent = "Score: " + score
	document.getElementById("output").style="display:none"
	document.getElementById("guess").value = ""
	document.getElementById("tryAgain").style="display: none;"
	document.getElementById("submit").style="display: block;"



	refreshArray()
	shuffleArray()
	printArray()
}

window.onload = function () {
    refreshArray();
    shuffleArray();
    printArray();
    console.log("It's not cool to cheat, baby.");
};
