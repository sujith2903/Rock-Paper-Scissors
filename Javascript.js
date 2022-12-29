function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*(3))+1;
    let computerChoice;

    if (randomNumber == 1) {
        computerChoice = 'ROCK';
    } else if (randomNumber == 2) {
        computerChoice = 'PAPER';
    }else{
        computerChoice = 'SCISSOR';
    }

    return computerChoice;

}


function playRound(playerSelection,computerSelection){

    let result;
    let verdict;

    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()){
        result = "Game Draw";
        verdict = 'Game Draw';
    }else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() =='PAPER'){
        result = 'You Lose! Paper beats Rock';
        verdict = 'Lost';
    }else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() =='SCISSOR'){
        result = 'You Win! Rock beats Scissor';
        verdict = 'Won';
    }else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() =='ROCK'){
        result = 'You Win! Paper beats Rock';
        verdict = 'Won';
    }else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() =='SCISSOR'){
        result = 'You Lose! Scissor beats Paper';
        verdict = 'Lost';
    }else if (playerSelection.toUpperCase() == 'SCISSOR' && computerSelection.toUpperCase() =='ROCK'){
        result = 'You Lose! Rock beats Scissor';
        verdict = 'Lost';
    }else if (playerSelection.toUpperCase() == 'SCISSOR' && computerSelection.toUpperCase() =='PAPER'){
        result = 'You Win! Scissor beats Paper';
        verdict = 'Won';
    }

    console.log(result);
    return verdict;
}

function game(){

    let playerScore = 0 ;
    let computerScore = 0 ;


    for (let i = 0; i <5 ; i++){

        let playerSelection = prompt("Please enter your choice in Rock,Paper,Scissor");

        let computerSelection = getComputerChoice();

        let verdict = playRound(playerSelection,computerSelection);

        if (verdict === 'Won'){
            playerScore += 1;
        } else if (verdict === 'Lost'){
            computerScore += 1;
        }
        

    }

    console.log('Player : ' + playerScore);
    console.log('Computer : ' + computerScore);
    
    whoWon(playerScore, computerScore);

}

function whoWon(playerScore, computerScore){
    if (playerScore > computerScore){
        console.log("You won");
    }else if (playerScore < computerScore){
        console.log('You Lost');
    }else {
        console.log('Game Draw')
    }
}
game();


