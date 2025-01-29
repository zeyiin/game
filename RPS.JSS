const userChoiceElement = document.getElementById('user-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const winnerElement = document.getElementById('winner');

const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.choice').forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.dataset.choice;
    userChoiceElement.textContent = `You chose: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`;
    
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceElement.textContent = `Computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    
    determineWinner(userChoice, computerChoice);
  });
});

function determineWinner(userChoice, computerChoice) {
  let winner = '';

  if (userChoice === computerChoice) {
    winner = 'It\'s a tie!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    winner = 'You win!';
  } else {
    winner = 'Computer wins!';
  }

  winnerElement.textContent = `Winner: ${winner}`;
}
