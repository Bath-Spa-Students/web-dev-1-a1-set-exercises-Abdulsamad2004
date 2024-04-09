// Initialize score, lives, and round number
var score = 0;
var lives = 3;
var round = 1;

// Function to generate a random RGB color
function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Function to start a new round of the game
function startNewRound() {
    // Deduct a life if lives remain
    if (lives > 0) {
        var correctColor = getRandomColor();
        var options = [correctColor, getRandomColor(), getRandomColor()];

        // Display the RGB value that the player needs to match
        var rgbElement = document.getElementById('rgb');
        rgbElement.textContent = correctColor;

        // Apply random RGB colors to the three options
        var option1 = document.getElementById('option1');
        var option2 = document.getElementById('option2');
        var option3 = document.getElementById('option3');

        option1.style.backgroundColor = options[0];
        option2.style.backgroundColor = options[1];
        option3.style.backgroundColor = options[2];

        // Attach click event handlers to the options
        option1.onclick = function() { checkAnswer(option1.style.backgroundColor, correctColor); };
        option2.onclick = function() { checkAnswer(option2.style.backgroundColor, correctColor); };
        option3.onclick = function() { checkAnswer(option3.style.backgroundColor, correctColor); };
    } else {
        // Game over if no lives remain
        var messageElement = document.getElementById('message');
        messageElement.textContent = "Game Over! Your final score is: " + score;
    }
}

// Function to reset the game
function resetGame() {
    score = 0;
    lives = 3;
    updateScore();
    updateLives();
    startNewRound();
}

// Function to check the player's answer
function checkAnswer(selectedColor, correctColor) {
    var messageElement = document.getElementById('message');
    if (selectedColor === correctColor) {
        messageElement.textContent = "Correct! Well done!";
        score += 1;
        updateScore();
        // Update RGB value for the next round
        startNewRound();
    } else {
        messageElement.textContent = "Incorrect. Try again!";
        score -= 1; // Deduct points for incorrect answer
        lives--;    // Deduct a life
        updateScore();
        updateLives();
        // Restart the round if lives remain
        if (lives > 0) {
            startNewRound();
        } else {
            // Game over if no lives remain
            var gameOverMessageElement = document.getElementById('message');
            gameOverMessageElement.textContent = "Game Over! Your final score is: " + score;
        }
    }
}

// Function to update the player's score
function updateScore() {
    var scoreElement = document.getElementById('score');
    scoreElement.textContent = "Score: " + score;
}

// Function to update the player's lives
function updateLives() {
    var livesElement = document.getElementById('lives');
    livesElement.textContent = "Lives: " + lives;
}

// Start the game by initiating the first round
startNewRound();

// Add event listener to the restart button
document.getElementById('restartButton').addEventListener('click', resetGame);
