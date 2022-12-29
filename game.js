
// const guessSubmit = document.querySelector('.guessSubmit');
// guessSubmit.addEventListener('click', playRound);

const computerSelection = getComputerChoice();
const playerSelection = getPlayerSelection();

game();
 
function getComputerChoice() {
    const computerSelection = ["rock", "paper", "scissors"];

    const randomNumber = Math.floor(Math.random() * computerSelection.length);
    
    return computerSelection[randomNumber];

}

function getPlayerSelection(){

    // const playerSelection = document.querySelector('.guessField');

    const playerSelection = prompt("Enter your option:");

    return playerSelection;

}

function playRound(playerSelection, computerSelection) {
    const playerWins = 0;
    const computerWins = 0;
    console.log("Let's the round begin!");
    console.log("Computer: "+computerSelection+ "   You: "+playerSelection);

    if(
        (playerSelection === "rock" && computerSelection === "paper")||(playerSelection === "paper" && computerSelection === "scissors")||
        (playerSelection === "scissors" && computerSelection === "rock")
        ){
            computerWins++;
    }
    if((playerSelection === "rock" && computerSelection === "scissors")||(playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")){

            playerWins++;
        }
    
    }
   