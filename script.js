'use strict';
//
// let secretNumber = Math.trunc(Math.random() * 20 + 1)
// let score = 20
// let highScore = 0
//
// console.log(secretNumber)
// document.querySelector('.check').addEventListener('click', function () {
//     const guess = Number(document.querySelector('.guess').value)
//     console.log(guess, typeof guess)
//     // when there is no input
//     if (!guess) {
//         document.querySelector('.message').textContent = 'no number!'
//         //When player wins
//     }else if (guess === secretNumber){
//         document.querySelector('.message').textContent = '🎉 Correct Number!'
//         document.querySelector('.number').textContent = secretNumber
//         document.querySelector('body').style.backgroundColor = 'green';
//         document.querySelector('.number').style.width = '30rem'
//         // highScore
//         if (score>highScore) {
//             highScore = score
//
//             document.querySelector('.highscore').textContent = highScore
//
//         }
//     } else if (guess !== secretNumber){
//         if (score>1){
//             document.querySelector('.message').textContent =
//                 guess > secretNumber ? '📈 Too high':'📉 Too low'
//             score--
//             document.querySelector('.score').textContent = score
//         } else {
//             document.querySelector('.message').textContent =
//                 'You Last the game !!!'
//             document.querySelector('.score').textContent = 0
//
//         }
//     }
// })
//
// //btn Again
// document.querySelector('.again').addEventListener('click',function(){
//     score = 20
//     secretNumber = Math.trunc(Math.random() * 20 + 1)
//
//     document.querySelector('.score').textContent = score
//     document.querySelector('.message').textContent = 'Start guessing...'
//     document.querySelector('.guess').value = ''
//     document.querySelector('.number').textContent = '?'
//     document.querySelector('body').style.backgroundColor = 'black'
//     document.querySelector('.number').style.width = '15rem'
//
// })

//
'use strict';

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('No number!');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        updateHighScore();
    } else {
        displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
        updateScore(guess === secretNumber ? 0 : -1);
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = generateSecretNumber();
    resetUI();
});

function generateSecretNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function updateScore(value) {
    score += value;
    document.querySelector('.score').textContent = score;
    if (score <= 0) {
        displayMessage('🧑🏻‍🦽 You lose !!!');
    }
}

function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}

function resetUI() {
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';
}
