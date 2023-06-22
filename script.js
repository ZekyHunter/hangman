// ne true or false, ale zobraz letter na obrazovce till refresh. A kdyz tam to pismeno neni, tak zobraz slovo “wrong”
// 1. Udelej to tak, aby po tom co kliknes jednou na nejake pismeno uz na to stejne pismeno neslo kliknout znovu.
// Bud muzes dat to tlacitko disabled nebo ho muzes dat display=none, oboji bude fungovat v pohode pro ucely te hry - HOTOVO
// 2.vytvor tam nejaky paragraf kde budes zobrazovat kolik ma uzivatel zivotu. Dej jich tam treba pet na zacatek, to je jedno. - HOTOVO
// unfinished:
// 3. Pokazde, kdyz kliknes na tlacitko, tak si zjisti z toho paragrafu v bodu 2 kolik je v nem zivotu momentalne,
// a muzes to prozatim preba console.log do konzole, to cislo

var wordList = ["car", "abx", "caa", "bca", "abc"];

var word = wordList[Math.floor(Math.random() * wordList.length)]
var guessedLetters = [];
var lives = 10;
const buttons = document.getElementsByClassName("button");
var LivesP = document.getElementById("livesP");

//pokud hádané slovo neobsahuje dané písmeno, message = wrong
function showLetter(letter) {
    var containsLetter = word.includes(letter);
    var message = "wrong";

    if (containsLetter) {
        message = letter;
    }

    document.getElementById("guesses").textContent = message;
    var p2= document.getElementById("choice").innerHTML = guessedLetters.push(letter); //prida hadane pismeno do odstavce choice
    document.getElementById("choice").innerHTML = guessedLetters;

    // Check if the guessed letter is wrong and decrease lives
    if (!containsLetter) {
        loseLives();

    }
}

// spatna odpoved - jeden zivot, zbyvajici zivoty
function loseLives() {
    lives--;
    if (lives <= 0) {
        console.log("Game over!");
    } else {
        console.log("Remaining lives:", lives);
    }
}

// iteruje mezi tlacitky
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        this.disabled = true; // disabled clicknute tlacitko
        this.classList.add("disabled-button"); // prida button class disabled button, ktera tlacitku zmeni barvu

    });
}

// zobrazuje pocet zivotu
LivesP.innerHTML = "Lives counter: " + lives;

function checkLives() {
    if (lives <= 0) {
        console.log("Game over!");
    } else {
        console.log("Remaining lives:", lives);
    }
}