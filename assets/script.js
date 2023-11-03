const items = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice(items) {
  let choise = [Math.floor(Math.random()*items.length)];
  console.log(choise);
  if (choise == 0){
      console.log ("Comp chooses Rock");
      return "rock";
  } if (choise == 1) {
      console.log ("Comp chooses Paper");
      return "paper";
  } if (choise == 2) {
      console.log ("Comp chooses scissors");
      return "scissors";
  }
}


function computerSelection () {
  return getComputerChoice(items).toUpperCase();
}

function playerSelection () {
    return prompt('Please choose "Rock", "Paper" or "Scissors".: ').toUpperCase();
}

function playRound(playerSelection, computerSelection) {
 
  if (playerSelection === computerSelection) {
    return console.log('Tie, try again, please!');
  } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
    return console.log('You WIN! Rock beats Scissors'); 
  } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
    return console.log('You Lose! Paper beats Rock'); 
  } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
    return console.log('You Lose! Scissors beats Paper'); 
  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    return console.log('You WIN! Paper beats Rock'); 
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
    return console.log('You Lose! Rock beats Scissors'); 
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
    return console.log('You WIN! Scissors beats Paper'); 
  } else if (playerSelection !== 'ROCK' || playerSelection !== 'SCISSORS' || playerSelection !== 'PAPER') {
   return console.log('Wrong input.');
   } 

};

let str = playRound(playerSelection, computerSelection);

console.log(typeof playRound)

function game() {
    for (let i = 0; i < 5; i++){
        playRound(playerSelection(), computerSelection());
    }
}



console.log(game())
