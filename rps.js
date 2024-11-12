function playGame() {
    function getComputerChoice() {
        let num = Math.floor(Math.random() * 3);
        let comp;

        if (num == 0) {
            comp = 'rock';
        }
        else if (num == 1) {
            comp = 'paper';
        }
        else if (num == 2) {
            comp = 'scissors';
        }

        return comp;
    }

    function getHumanChoice() {
        let humanChoice = prompt('Choose rock, paper, or scissors: ').toLowerCase();
        return humanChoice;
    }


    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        console.log('Your Choice: ', humanChoice);
        console.log('Computer Choice: ', computerChoice);

        if ((humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')) {
            console.log('You Win!');
            humanScore++;
        } else if ((humanChoice == 'rock' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'rock')) {
            console.log("Computer wins.")
            computerScore++; 
        } else {
            console.log('Draw!');
        }
    
        console.log('Your Score: ', humanScore);
        console.log('Computer Score: ', computerScore);
    }
    

    for (let i = 0; i < 5; i++)  {
        console.log('Round', (i + 1));
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log('You win the game!');
    } else if (computerScore > humanScore) {
        console.log('The computer wins.');
    } else {
        console.log('The game is a draw.')
    }
}

playGame();