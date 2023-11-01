const items = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice(items) {
  let choise = [Math.floor(Math.random()*items.length)];
  console.log(choise);
  //if 0 return rock
  if (choise == 0)
  {
      console.log ("Comp chooses Rock");
      return "rock";
  } 
  //if 1 return paper
  
  if (choise == 1)
  {
      console.log ("Comp chooses Paper");
      return "paper";
  } 
  //if 2 return scissors
  
  if (choise == 2) 
  {
      console.log ("Comp chooses scissors");
      return "scissors";
  }
}
function computerSelection () {
  return getComputerChoice(items).toUpperCase();
}

//let computerSelection = getComputerChoice(items).toUpperCase();

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
//console.log(playRound(playerSelection, computerSelection) )

function game() 
{
    for (let i = 0; i < 5; i++){
        playRound(playerSelection(), computerSelection());
    }
}

console.log(game())
