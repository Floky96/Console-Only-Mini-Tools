alert("Hallo! \nBitte schreiben sie: game() in die konsole. \n\nEin tipp: um die konsole zu öffnen, drucken sie f12 auf ihrer Tastatur.")

//---------------------------------- Start Spielstart

const game = function () {

    alert("Willkommen bei meinem ersten Spiel! 'Schere-Stein-Papier' \n Die Regeln sind einfach:\n Sie spielen gegen einen Computergegner.\n 1. Suchen sie sich eins von den drei Möglichkeiten aus.\n 2. Geben Sie Ihre Auswahl in das Textfeld ein.\n 3. Das Spiel endet erst, wenn einer von den Teilnehmern 3 Punkte erreicht hat. (Eine Runde = 1 Punkt)\n Sie können ihre punkte in der Konsole verfolgen.\nViel Glück!");
    let userScore = 0;
    let compScore = 0;
    let userValue, compValue, score;

    do {

        userValue = userPlay();
        compValue = compPlay();
        score = playRound(compValue, userValue, userScore, compScore);
        if (score == "comp") {
            compScore += 1;
        }
        else if (score == "user") {
            userScore += 1;
        }


        if (wTool == compValue) {
            console.log(wTool + " Schlägt " + lTool + "\n Sie haben diese runde Verloren! \nDas resultat bis jetzt ist: \nSie: " + userScore + "\nGegner: " + compScore);
        }
        if (wTool == userValue) {
            console.log(wTool + " Schlägt " + lTool + "\n Sie haben diese runde Gewonnen! \nDas resultat bis jetzt ist: \nSie: " + userScore + "\nGegner: " + compScore);
        }
        if (wTool == "tie") {
            console.log(lTool + " ist gleich stark wie " + lTool + " \nDie runde is unentschieden! \nDas resultat bis jetzt ist: \nSie: " + userScore + "\nGegner: " + compScore);
        }
    } while (userScore < 3 && compScore < 3);

    if (userScore == 3) {
        console.log("Glückwunsch, Sie haben das Spiel Gewonnen!!");
        alert("Glückwunsch, Sie haben das Spiel Gewonnen!!")
    }
    else if (compScore == 3) {
        console.log(" Sie haben das Spiel leider verloren.");
        alert(" Sie haben das Spiel leider verloren.")
    }
    alert("Danke fürs Mitspielen bei meinen ersten Javascript Projekt. :) \n\nWenn sie nochmal spielen möchten geben sie einfach ganz unten in der konsole nochmall: game() ein.")
}

//---------------------------------- Ende Spielstart

//---------------------------------- Start Spieler Eingabe

const userPlay = function () {
    let inputCheck = true;
    let userInputMixed = prompt("Geben sie eine von den drei möglichkeiten ein. \n Schere   |   Stein   |   Papier");
    let userInput = userInputMixed.toLowerCase();
    let userValue;

    do {
        if (userInput == "schere") {
            userValue = "Schere";
            inputCheck = true;
            console.log("Sie haben Schere gespielt.")
        }
        else if (userInput == "stein") {
            userValue = "Stein";
            inputCheck = true;
            console.log("Sie haben Stein gespielt.")
        }
        else if (userInput == "papier") {
            userValue = "Papier";
            inputCheck = true;
            console.log("Sie haben Papier gespielt.")
        }
        else {
            inputCheck = false;
            alert("Sie haben einen Ungültigen Wert eingegeben");
            userInput = prompt("Geben sie eine von den drei möglichkeiten ein. \n schere   |   stein   |   papier");
        }
    } while (inputCheck == false);

    return userValue;
}

//---------------------------------- Ende Spieler Eingabe

//---------------------------------- Start Zuffalszahl Generation

const compPlay = function () {
    let compValue;
    random = Math.floor(Math.random() * 3);
    if (random == 0) {
        compValue = "Schere";
        console.log("Gegner hat Schere gespielt.")
    }
    if (random == 1) {
        compValue = "Stein";
        console.log("Gegner hat Stein gespielt.")

    }
    if (random == 2) {
        compValue = "Papier";
        console.log("Gegner hat Papier gespielt.")

    }

    return compValue;
}

//---------------------------------- Ende Zuffalszahl Generation

//---------------------------------- Start Eine Spielrunde

const playRound = function (compValue, userValue, userScore, compScore) {
    let roundwinner;
    if (compValue == userValue) {
        wTool = "tie";
        lTool = compValue;
        lTool = userValue;
    }
    if (compValue == "Schere") {
        if (userValue == "Stein") {
            wTool = userValue;
            lTool = compValue;
        }
        if (userValue == "Papier") {
            wTool = compValue;
            lTool = userValue;
        }
    }
    if (compValue == "Stein") {
        if (userValue == "Schere") {
            wTool = compValue;
            lTool = userValue;
        }
        if (userValue == "Papier") {
            wTool = userValue;
            lTool = compValue; lTool
        }
    }
    if (compValue == "Papier") {
        if (userValue == "Schere") {
            wTool = userValue;
            lTool = compValue;
        }
        if (userValue == "Stein") {
            wTool = compValue;
            lTool = userValue;
        }
    }
    if (wTool == compValue) {
        alert("Sie haben: " + userValue + " Gespielt.\nGegner hat: " + compValue + " Gespielt.\n" + wTool + " Schlägt " + lTool + " \n\nSie haben diese runde Verloren! \nDas resultat bis jetzt ist: \nSie: " + userScore + "\nGegner: " + (compScore + 1));
        roundWinner = "comp";
        return roundWinner;
    }
    if (wTool == userValue) {
        alert("Sie haben: " + userValue + " Gespielt.\nGegner hat: " + compValue + " Gespielt.\n" + wTool + " Schlägt " + lTool + " \n\nSie haben diese runde Gewonnen! \nDas resultat bis jetzt ist: \nSie: " + (userScore + 1) + "\nGegner: " + compScore);
        roundWinner = "user";
        return roundWinner;
    }
    if (wTool == "tie") {
        return alert("Sie haben: " + userValue + " Gespielt.\nGegner hat: " + compValue + " Gespielt.\n\nDie runde is unentschieden! \nDas resultat bis jetzt ist: \nSie: " + userScore + "\nGegner: " + compScore);
    }
}

//---------------------------------- Ende Eine Spielrunde


