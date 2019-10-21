var words = [
  ["T", "R", "E", "E", "H", "O", "U", "S", "E"],
  ["J","A","V","A","S","C","R","I","P","T"],
  ["W","E","B","D","E","S","I","G","N"],
  ["E","D","U","C","A","T","I","O","N"],
  ["C","H","O","C","O","L","A","T","E"],
  ["G","E","R","M","A","N","Y"]
]
var random = Math.floor((Math.random()*(words.length-1)));

var randomWord = words[random]; // the word to guess will be chosen from the array above
var randomWordLength = new Array(randomWord.length);
var errors = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < randomWordLength.length; i++){
	randomWordLength[i] = "_ ";
}

// prints the guessfield
function printGuessField(){
  var wordContainer = document.getElementById("wordContainer");
	for (var i = 0; i < randomWordLength.length; i++){
	var text = document.createTextNode(randomWordLength[i]);
	wordContainer.appendChild(text);
	}
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var submitAnswer = function(){
	var f = document.guessForm;
	var b = f.elements["input"];
	var value = b.value; // the letter provided by the user
	value = value.toUpperCase();
	for (var i = 0; i < randomWord.length; i++){
		if(randomWord[i] === value){
			randomWordLength[i] = value + " ";
			var found = true;
		}
	b.value = "";
	}

	//deletes the guessfield and replaces it with the new one
	var wordContainer = document.getElementById("wordContainer");
	wordContainer.innerHTML="";
	printGuessField();

	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!found){
		var wrongContainer = document.getElementById("wrongContainer");
		var text = document.createTextNode(" " + value);
		wrongContainer.appendChild(text);
		errors++;
	}

	//checks if all letters have been foundAll
	var foundAll = true;
	for (var i = 0; i < randomWordLength.length; i++){
		if(randomWordLength[i] === "_ "){
			foundAll = false;
		}
	}
	if(foundAll){
		alert("You win!");
	}

	//once you got six wrong letters, you lose
	if(errors === 6){
		alert("Uh...I guess you're dead now.");
	}
}

function init(){
	printGuessField();
}

window.onload = init;
