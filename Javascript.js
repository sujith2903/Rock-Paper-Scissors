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
    let roundresult = document.querySelector('.roundresult');

    if (playerSelection === computerSelection){
        result = "Game Draw";
        verdict = 'Game Draw';
    }else if (playerSelection == 'ROCK' && computerSelection =='PAPER'){
        result = 'You Lost this round! Paper beats Rock';
        verdict = 'Lost';
    }else if (playerSelection == 'ROCK' && computerSelection =='SCISSOR'){
        result = 'You Won this round! Rock beats Scissor';
        verdict = 'Won';
    }else if (playerSelection == 'PAPER' && computerSelection =='ROCK'){
        result = 'You Won this round! Paper beats Rock';
        verdict = 'Won';
    }else if (playerSelection == 'PAPER' && computerSelection =='SCISSOR'){
        result = 'You Lost this round! Scissor beats Paper';
        verdict = 'Lost';
    }else if (playerSelection == 'SCISSOR' && computerSelection =='ROCK'){
        result = 'You Lost this round! Rock beats Scissor';
        verdict = 'Lost';
    }else if (playerSelection == 'SCISSOR' && computerSelection =='PAPER'){
        result = 'You Won this round! Scissor beats Paper';
        verdict = 'Won';
    }

    roundresult.textContent = `${result}`;
    return verdict;
}



function whoWon(playerScore, computerScore){
    if (playerScore == 5){
        let finalresult = document.querySelector('.roundresult');
        finalresult.textContent = 'YOU WON THE GAME :) HIT RESTART TO PLAY AGAIN';        
    }else if (computerScore == 5){
        let finalresult = document.querySelector('.roundresult');
        finalresult.textContent = 'YOU LOST THE GAME :( HIT RESTART TO PLAY AGAIN';
    }else {
        return;
    }
}


let playerScore = 0 ;

let computerScore = 0 ; 

let playerSelection = '';  

const player_Score = document.querySelector('.playerscore');

const computer_Score = document.querySelector('.computerscore');

let roundresult = document.querySelector('.roundresult');
roundresult.textContent = 'Start game';

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        if (playerScore <5 && computerScore <5){
            playerSelection = button.id;

            let computerSelection = getComputerChoice();  

            let verdict = playRound(playerSelection,computerSelection);

            if (verdict == 'Won'){
                playerScore += 1;
            }else if (verdict == 'Lost'){
                computerScore += 1;
            }

            player_Score.textContent = `Player Score : ${playerScore}`;
            computer_Score.textContent = `Computer Score: ${computerScore}`;
                
            whoWon(playerScore, computerScore);
        }

    });
});

const replay = document.querySelector('.replay');

replay.addEventListener('click',() =>{
    playerScore = 0 ;
    computerScore = 0 ; 
    player_Score.textContent = `Player Score : ${playerScore}`;
    computer_Score.textContent = `Computer Score: ${computerScore}`;
    roundresult.textContent = 'Start game';
});
