const items = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice(items) {
  return items[Math.floor(Math.random()*items.length)];
}

let computerSelection = getComputerChoice(items).toUpperCase();
console.log(computerSelection);

let playerSelection = prompt('Please choose "Rock", "Paper" or "Scissors".: ').toUpperCase();

console.log(computerSelection, playerSelection);
// function playRound(playerSelection, computerSelection) {
  
//   let input = toLowerCase(playerSelection);
//   console.log(input);
//   }computerSelection
//   playRound()
// // const select = document.querySelector('select');
// // const para = document.querySelector('p');

// // select.addEventListener('change', setWeather);

// // function selector() {
// //   // const choice = select.value;
// //   switch (choice) {
// //     case 'Rock':
// //       para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
// //       break;
// //     case 'Paper':
// //       para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
// //       break;
// //     case 'Scissors':
// //       para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
// //       break;
// //       default:
// //       para.textContent = '';
// //       break;
// //   }
// // }
// }
