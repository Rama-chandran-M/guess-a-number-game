let secretNumber;
let attempts;
let score;

function startGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 3;
    score = 0;

    updateUI();
}

function updateUI() {
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('score').textContent = score;
    document.getElementById('guessInput').value = '';
    document.getElementById('result').textContent = '';
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const resultMessage = document.getElementById('result');
    const attemptsSpan = document.getElementById('attempts');

    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        resultMessage.textContent = 'Please enter a valid number between 1 and 10';
        resultMessage.style.color = 'red';
    } else {
        attempts--;

        if (guess === secretNumber) {
            resultMessage.textContent = `Congratulations! You guessed the correct number: ${secretNumber}`;
            resultMessage.style.color = 'green';
            score++;
            disableInputAndButton();
        } else {
            resultMessage.textContent = `Incorrect guess. ${attempts} attempt(s) left.`;
            resultMessage.style.color = 'red';

            if (attempts === 0) {
                resultMessage.textContent = `Game over. The correct number was ${secretNumber}.`;
                disableInputAndButton();
            }
        }
    }

    attemptsSpan.textContent = attempts;
}

function disableInputAndButton() {
    const guessInput = document.getElementById('guessInput');
    const submitButton = document.querySelector('button');

    guessInput.disabled = true;
    submitButton.disabled = true;
}

function resetGame() {
    const guessInput = document.getElementById('guessInput');
    const submitButton = document.querySelector('button');

    guessInput.disabled = false;
    submitButton.disabled = false;

    startGame();
}

// Initialize the game when the page loads
window.onload = startGame;
