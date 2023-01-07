        let playerWins = 0;
        let computerWins = 0;
        let gameOver = false;
        let playerSelection;
        let computer;
        let randomNumber;
        let options= ["rock", "paper", "scissors"];
        let buttonPressed;
        

// BUTTONS      
        const rockButton = document.querySelector('#rock');
        rockButton.addEventListener('click', () => {
            buttonPressed = rockButton.id;
            playRound();
        });

        const paperButton = document.querySelector('#paper');
        paperButton.addEventListener('click', () => {
            buttonPressed = paperButton.id;
            playRound();
        });

        const scissorsButton = document.querySelector('#scissors');
        scissorsButton.addEventListener('click', () => {
            buttonPressed = scissorsButton.id;
            playRound();
        });

        let results = document.querySelector('#results');
        results.setAttribute('style', 'white-space: pre;');

//FUNCTIONS
 
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * options.length);
  
    computer = options[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    if (gameOver == true) return;
    getComputerChoice();
    computerSelection = computer;
    playerSelection = buttonPressed;


    if (computerSelection === playerSelection){
                results.textContent = `It's a tie!\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;
            } else if (computerSelection === 'rock' && playerSelection === 'paper') {
                ++playerWins;
                results.textContent = `You picked Paper. Computer picked Rock.\r\nPaper beats Rock! You win!\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;
            } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
                ++computerWins;
                results.textContent = `You picked Scissors. Computer picked Rock.\r\nRock beats Scissors! You lose!\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;
            } else if (computerSelection === 'paper' && playerSelection === 'rock') {
                ++computerWins;
                results.textContent = `You picked Rock. Computer picked Paper.\r\nPaper beats Rock! You lose!\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;
            } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
                ++playerWins;
                results.textContent = `You picked Scissors. Computer picked Paper.\r\nScissors beats Paper! You win!\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;
            } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
                ++computerWins;
                results.textContent = `You picked Paper. Computer picked Scissors.\r\nScissors beats Paper! You lose!\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;
            } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
                ++playerWins;  
                results.textContent = `You picked Rock. Computer picked Scissors.\r\nRock beats Scissors! You win!\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;    
            } 
            if (playerWins == 5){
                results.textContent = `You win the game!\r\n\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;    
                gameOver = true;
                titleButton.classList.add('hidden');
                setTimeout(showButtons, 1000);
            }
            if (computerWins == 5){
                results.textContent = `You lose the game!\r\n\r\n\r\nPlayer: ${playerWins}\r\nComputer: ${computerWins}`;    
                gameOver = true;
                titleButton.classList.add('hidden');
                setTimeout(showButtons, 1000);
            }
}

        const paButton = document.querySelector('#play-again');
        const titleButton = document.querySelector('#title');

        paButton.addEventListener('click', () => {
            let answer;
                playerWins = 0;
                computerWins = 0;
                results.textContent = '';
                gameOver = false;
                paButton.classList.add('hidden');
                titleButton.classList.remove('hidden');
        });

        function showButtons() {
            paButton.classList.remove('hidden');
        };