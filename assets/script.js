const items = ['Rock', 'Paper', 'Scissors'];

let computer = 0;
let player = 0;


function getComputerChoice(items) {
  let choise = [Math.floor(Math.random()*items.length)];
  
  if (choise == 0){
      console.log ("Comp chooses Rock");
      return "rock";
  } if (choise == 1) {
      console.log ("Comp chooses Paper");
      return "paper";
  } if (choise == 2) {
      console.log ("Comp chooses Scissors");
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
     console.log('Tie, try again, please!');
 
  } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
    console.log('You WIN! Rock beats Scissors'); 
    player++;
  } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
    console.log('You Lose! Paper beats Rock'); 
    computer++;
  } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
    console.log('You Lose! Scissors beats Paper'); 
    computer++;
  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    console.log('You WIN! Paper beats Rock'); 
    player++;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
    console.log('You Lose! Rock beats Scissors'); 
    computer++;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
    console.log('You WIN! Scissors beats Paper'); 
    player++;
  } else  {
   console.log('Wrong input.');
   } 

};


function game() {

  for (let i = 0; i < 5; i++) {
    playRound(playerSelection(), computerSelection());
    console.log(`Player score:${player}`);
    console.log(`Computer score:${computer}`);
  }


  if (computer >= 2) {
    return "Computer beat you!!!"; 
} else if (player >= 2) {
    return "You win!";
} else {
    return "It's a tie";
}

}

console.log(game());
