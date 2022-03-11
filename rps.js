




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
const rpsCards = document.querySelector("#playChoice");
const titleText = document.querySelector('#titleText');
const div = document.createElement('div');
const p = document.createElement('p');
const lb = document.querySelectorAll(".results");
const start = document.querySelector('.text')

let playerCount = 0;
let pcScore = 0;
let draw = 0;

start.addEventListener('click', () => {
    titleText.style.display = "none";

    

})



choices.forEach(input => input.addEventListener('click', () => {

    let result = rpsChoice(input);
    lb[0].textContent = playerCount.toString() + " : player score";
    lb[2].textContent = pcScore.toString() + " : pc score";
    lb[1].textContent = draw.toString() + " : draw";
   
    
    if (result == 1) {
        playerCount++;

    } else if (result == 0){
        pcScore++;

    } else {
        draw++;

    }

    if (playerCount == 4) {
        console.log('it worked');
        rpsCards.style.display = "none";
        lb.forEach(item => {
            
            if (item.getAttribute('name') == 'results') {
                console.log('pass')
            } else {
                item.textContent = '';
            }
        })
        lb[3].textContent = " You Won !";
        
        
    } else if (pcScore == 4) {
        rpsCards.style.display = "none";
        lb.forEach(item => {
            if (item.getAttribute('name') == 'results') {
                console.log('pass')
            } else {
                item.textContent = '';
            }
        })
        lb[3].textContent = " You Lost ...";
        
    }

}))




function rpsChoice(choice) {
    let user_choice = (choice.getAttribute("name"));
    let winner = playRound(user_choice);
    console.log("result: " + winner) ;
    return winner;
}

// to think about
