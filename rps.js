




// -------------------- RPS LOGIC ---------------------------
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
            console.log("not a valid choice");
            return playerSelection(prompt("Rock, Paper or Sciccors?")); 
            
    }   

}
 


function playRound(user_choice) {

    let computerMove = computerPlay();

    if (computerMove === user_choice) {
        // console.log("its a draw.");
        return 2;
    } else {
        let result = winner(user_choice, computerMove);
        return result;
    }
}

function winner(choice, computerMove) {
    if  (choice === "Rock") {
        //ROCK
        if (computerMove === "Paper") {
            // console.log("Scissors, you won");
            return 1;
        } else {
            // console.log("Paper, you lose");
            return 0;
        }
    } else if (choice === "Paper") {
        //PAPER
        if (computerMove === "Rock") {
            // console.log("Rock, you won");
            return 1;
        } else {
            // console.log("Scissors, you lose");
            return 0;
        }
    } else {
        //SCISSORS
        if (computerMove === "Paper") {
            // console.log("Paper, you won");
            return 1;
        } else {
            // console.log("Rock, you lose");
            return 0;
        }
    }
     
    
}

    
// function game() {
//     var playerCount = 0;
//     var pcCount = 0;
//     var draw = 0

//     for (let i = 0; i < 5; i++) {
//         let result = playRound();
//         if (result == 1) {
//             playerCount++;
//         } else if (result == 0) {
//             pcCount++;
//         } else {
//             draw++;
//         }
        
        
//     }
//     if (playerCount > pcCount) {
//         console.log("You Won! --- Player Score: " + playerCount + " | " + "Pc Score: " + pcCount + " | " + "Draws: " + draw);
//         return console.log("You Won! --- Player Score: " + playerCount + " | " + "Pc Score: " + pcCount + " | " + "Draws: " + draw);
        

//     } else if (playerCount < pcCount) {
//         console.log("You Lost... --- Pc Score: " + pcCount  + " | " + "Player Score: " + playerCount + " | " + "Draws: " + draw);
//         return console.log("You Lost... --- Pc Score: " + pcCount  + " | " + "Player Score: " + playerCount + " | " + "Draws: " + draw);
        
//     } else {
//         console.log("It's a draw... --- Draws: " + draw + " | " + "Player Score: " + playerCount + " | " + "Pc Score: " + pcCount);
//         return console.log("It's a draw... --- Draws: " + draw + " | " + "Player Score: " + playerCount + " | " + "Pc Score: " + pcCount);
        
//     }
// }
/// ------------------------------end of rps logic--------------------------------------

const choices = document.querySelectorAll(".choice");
const content = document.querySelector("#content");
const div = document.createElement('div');
const p = document.createElement('p');

choices.forEach(input => input.addEventListener('click', () => {
    let user_choice = (input.getAttribute("name"));
    let winner = playRound(user_choice);
    scoreCount(winner);
    
}))

// to think about
function scoreCount(roundWinner) {
       

    let playerScore = 0;
    let pcScore = 0;
    let draw = 0;

    if (playerScore != 5 || pcScore != 5 ) {
        console.log(playerScore);
        if (roundWinner == 2) {
            draw += 1
        } else if (roundWinner == 1){
            playerScore += 1
        } else {
            pcScore += 1
        }
    }
        

    
};
