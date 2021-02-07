'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ':D Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').textContent = 23;
console.log(document.querySelector('.guess').value);
*/

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Entered!';
  } else if (guess === number) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = 'o/ Correct Number!';
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else {
    if (score === 0) {
      document.querySelector('.message').textContent = 'You lose! :c';
    }
    score--;
    document.querySelector('.score').textContent = score;
    if (guess < number) {
      document.querySelector('.message').textContent = 'Too Low! :O';
    } else if (guess > number) {
      document.querySelector('.message').textContent = 'Too High! (+.+)';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
});
