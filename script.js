let score = 0;
let maxScore = 0;
let leftNumber = document.getElementById("left-number");
let rightNumber = document.getElementById("right-number");
let answerInput = document.getElementById("answer");
let rightAnswers = document.getElementById("rightAnswers");
let recordDisplay = document.getElementById("record");

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    leftNumber.textContent = num1;
    rightNumber.textContent = num2;
    return num1 * num2;
}

let correctAnswer = generateQuestion();

function checkAnswer() {
    const userAnswer = parseInt(answerInput.value.trim());
    if (userAnswer === correctAnswer) {
        score += 1;
        correctAnswer = generateQuestion();
    } else {
        score = 0;
    }

    rightAnswers.textContent = score;

    if (score > maxScore) {
        maxScore = score;
    }

    recordDisplay.textContent = `Твой рекорд: ${maxScore}`;
    answerInput.value = '';
}

document.getElementById("giveAnswer").addEventListener("click", checkAnswer);

answerInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});