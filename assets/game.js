var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

var compLetter;
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guesses = 9;
var guessList = [];



var nGame = function () {
guessLeft = 9;
compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
document.getElementById("guessRem").innerHTML = "Guesses Left: " + guessLeft;
document.getElementById("guessCount").innerHTML = "Guesses so far: " + guessList.join(",");
}

document.onkeyup = function (event) {
var userGuess = event.key;
guessLeft--;
  guessList.push(userGuess);
  document.getElementById("guessCount").innerHTML = "Guesses so far: " + guessList.join(",");
  document.getElementById("guessRem").innerHTML = "Guesses Left: " + guessLeft;
  if (guessLeft > 0) {
    if (userGuess == compLetter) {
      wins++;
      document.getElementById("gameWins").innerHTML = "Wins:" + wins;
      nGame();
    }
  } else if (guessLeft == 0) {
    losses++;
    document.getElementById("gameLosses").innerHTML = "Losses:" + losses;
    nGame();
  }
 };