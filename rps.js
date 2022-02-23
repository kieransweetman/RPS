
// computers choice
function computerPlay() {
    var pcMove = Math.floor((Math.random()*3)+1);
    return move(pcMove);
}

// transforms pc choice into english
function move(move) {
    if (move === 1) {
        return "Rock";
    } else if (move === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// formats player choice

function playerSelection(choice) {
    
    switch(choice.toLowerCase()) {
        case "rock":
            return 'Rock';

        case "paper":
            return 'Paper';

        case "scissors":
            return 'Scissors';

        default:
            alert("not a valid choice");
            return playerSelection(prompt("Rock, Paper or Sciccors?")); 
            
    }   

}
 


function playRound() {
    let user_choice = prompt("Rock, Paper or Sciccors?");

    let computerMove = computerPlay();

    let choice = playerSelection(user_choice);

    if (computerMove === choice) {
        alert("its a draw.");
        return 2;
    } else {
        let result = winner(choice, computerMove);
        return result;
    }
}

function winner(choice, computerMove) {
    if  (choice === "Rock") {
        //ROCK
        if (computerMove === "Paper") {
            alert("Scissors, you won");
            return 1;
        } else {
            alert("Paper, you lose");
            return 0;
        }
    } else if (choice === "Paper") {
        //PAPER
        if (computerMove === "Rock") {
            alert("Rock, you won");
            return 1;
        } else {
            alert("Scissors, you lose");
            return 0;
        }
    } else {
        //SCISSORS
        if (computerMove === "Paper") {
            alert("Paper, you won");
            return 1;
        } else {
            alert("Rock, you lose");
            return 0;
        }
    }
     
    
}

    
function game() {
    var playerCount = 0;
    var pcCount = 0;
    var draw = 0

    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result == 1) {
            playerCount++;
        } else if (result == 0) {
            pcCount++;
        } else {
            draw++;
        }
        
        
    }
    if (playerCount > pcCount) {
        return console.log("You Won! --- Player Score: " + playerCount + " | " + "Pc Score: " + pcCount + " | " + "Draws: " + draw);

    } else if (playerCount < pcCount) {
        return console.log("You Lost... --- Pc Score: " + pcCount  + " | " + "Player Score: " + playerCount + " | " + "Draws: " + draw);
    } else {
        return console.log("It's a draw... --- Draws: " + draw + " | " + "Player Score: " + playerCount + " | " + "Pc Score: " + pcCount);
    }
}
