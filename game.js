const computerSelection = getComputerChoice();
const buttons = document.querySelectorAll(`button`);
buttons.forEach(button => {
  button.addEventListener('click', () => {
    var playerSelection = button.id;
    playRound(playerSelection, computerSelection);
  });
});
//game();
 
function getComputerChoice() {
    const computerSelection = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * computerSelection.length);
  
    return computerSelection[randomNumber];
}

function getPlayerSelection(){
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    let winner = 0;
    computerSelection = getComputerChoice();  
    console.log("Let's the round begin!");
    console.log("Computer: "+computerSelection+ "   You: "+playerSelection);

    if(
        (playerSelection === "rock" && computerSelection === "paper")||(playerSelection === "paper" && computerSelection === "scissors")||
        (playerSelection === "scissors" && computerSelection === "rock")
        ){
            console.log("COMPUTER wins this round");
            winner = 1;
    }
    else if((playerSelection === "rock" && computerSelection === "scissors")||(playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")){

            console.log("YOU win this round!");
            winner = 2;
        }
    else console.log("It's a draw!");
        return winner;
     }

    /*
    function game(){
        let playerWins = 0;
        let computerWins = 0;
        for (let i = 0; i < 5; i++) {
            playRound(playerSelection,computerSelection);
            if(playRound===1){
            computerWins++;
            }
            if(playRound===2){
                playerWins++;
                }
            }
         if(playerWins === 3){
            console.log("YOU WIN THIS GAME!!!");
         }
         if(computerWins === 3){
            console.log("COMPUTER WINS!! Sorry :(");
         }
    }
    */
