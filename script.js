let tries = 3; //adding how many times the user can play 23.11

function play() {
    if (tries>0){ //23.11
    //declare vars
    var player = document.getElementById("playerChoice").value; //from the user , string 

    var options = ["rock", "paper", "scissors"]; 
    var computer = options[Math.floor(Math.random() * 3)];

    document.getElementById("computer").innerHTML =
        "My choice: " + computer;


        //conditions
    if (player === computer) {
        document.getElementById("winner").innerHTML =
            "Draw!";
    }
    else if (player === "rock") {
        document.getElementById("winner").innerHTML =
            (computer === "scissors") ?
            "You WON! Rock breaks scissors" :
            "You LOST! Paper covers rock.";
    }
    else if (player === "paper") {
        document.getElementById("winner").innerHTML =
            (computer === "rock") ?
            "You WON! Paper covers rock" :
            "You LOST! Scissors cut paper.";
    }
    else if (player === "scissors") {
        document.getElementById("winner").innerHTML =
            (computer === "paper") ?
            "You WON! Scissors cut paper" :
            "You LOST! Rock breaks scissors.";
    }

    tries--; //decreasing 1
}
if (tries === 0) {
        document.getElementById("winner").innerHTML += "<br><b>GAME OVER</b>";
    }
}

