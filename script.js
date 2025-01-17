'use strict';

//displayMessage() 9;

// console.log((document.querySelector('.number').textContent = 10));

// document.querySelector('.number').textContent = 10;

//console.log((document.querySelector('.btn-check').textContent = 33));

// console.log((document.querySelector('.guess').value = 33));

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// document.querySelector('.number').textContent = secretNumber;
// x;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //No number
  if (!guess) {
    displayMessage('No Number ❌');
    //correct number
  } else if (guess === secretNumber) {
    displayMessage('Correct Number✔️');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(26, 193, 8)';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // dry code
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High📈' : 'Too Low');
      // guess > secretNumber ? 'Too High📈' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //high score
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //    displayMessage() 'Too High📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //    displayMessage() 'You Lost the game';
  //   }
  //   //low score
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //    displayMessage() 'Too Low📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //    displayMessage() 'You Lost the game';
  //   }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)

//problems
//messege section start quessing
//number 0
//score 20
// guess 0
