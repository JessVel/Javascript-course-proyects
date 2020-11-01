'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', startGame);
document.querySelector('.again').addEventListener('click', resetGame);

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

function startGame() {
  const guessNumber = Number(document.querySelector('.guess').value);

  //Validation of input value
  if (!guessNumber) {
    displayMessage('😥 No number!');
  }
  //Win the game
  else if (guessNumber === secretNumber) {
    displayMessage('🥳 Correct number!');
    document.querySelector('body').style.background =
      'linear-gradient(to right, #1d976c, #93f9b9)';
    document.querySelector('.number').style.width = '30rem';

    //Set highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //Number diferent from secret number
  else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessNumber > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤡 You lost the game!');
      document.querySelector('body').style.background =
        'linear-gradient(to right, #c21500, #ffc500)';
      document.querySelector('.score').textContent = 0;
    }
  }
}

//Reset game
function resetGame() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundImage =
    'linear-gradient(to right, #ddd6f3, #faaca8)';
  document.querySelector('number').style.width = '15rem';
}
