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
	{id: "s1e1f5", file: "1b3613b63n.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f6", file: "n135b531n315.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f7", file: "b315n135.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f8", file: "n135v31n513.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f9", file: "b51135b135.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f10", file: "b36108b163.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f11", file: "n6139un631.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f12", file: "v36b01368.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f13", file: "n631b316.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f14", file: "b136361b.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f15", file: "b613n8013.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f16", file: "b36103681.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f17", file: "b361m136.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f18", file: "b631m61.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f19", file: "n316m136.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f20", file: "n316np136.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f21", file: "n13n13o6.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f22", file: "jb136hb913.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f23", file: "b31n361931.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f24", file: "b31608613n.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f25", file: "n316016n1.jpg", episode: "S1E1 - Live with the Flow, Baby"},
	{id: "s1e1f26", file: "n136631.jpg", episode: "S1E1 - Live with the Flow, Baby"},

	{id: "s1e2f1", file: "b13n3981.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f2", file: "n31m0b831.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f3", file: "b13608m6.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f4", file: "b1308663.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f5", file: "ehd1635t511.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f6", file: "jm1v538631.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f7", file: "q9eqt1eqtj.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f8", file: "w1v91n135.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f9", file: "bwq539u3.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f10", file: "wew69u232.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f11", file: "nq360831.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f12", file: "n215j61.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f13", file: "n1369136.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f14", file: "n136kj631.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f15", file: "b13h136.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f16", file: "gkm246.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f17", file: "b16397136.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f18", file: "mbeqt96.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f19", file: "b361m79136.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f20", file: "bn361n136.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f20", file: "h1o5j3n15.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f20", file: "ojk163316.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f20", file: "jr163n136.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f20", file: "ngeagaeg1n63.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},
	{id: "s1e2f20", file: "jb169b13836.jpg", episode: "S1E2 - The Search for the Phantom Space Ramen, Baby"},








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
	document.getElementById("imageOutput").src = "frames/" + currentFrame.file
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
    console.log("It's not dandy to cheat, baby.");
};
