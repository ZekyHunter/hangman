// ne true or false, ale zobraz letter na obrazovce till refresh. A kdyz tam to pismeno neni, tak zobraz slovo “wrong”

var word = "car";
var guessedLetters = [];

function showLetter(letter) {
    var containsLetter = word.includes(letter);
    var message = "wrong";

    if (containsLetter) {
        message = letter;
    }
    document.getElementById("p2").textContent = message;
    document.getElementById("p3").innerHTML = guessedLetters.push(letter);
    document.getElementById("p3").innerHTML = guessedLetters;
}

var lives = 10;