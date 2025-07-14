const mainHeader = document.querySelector('.main-header');
const cards = document.querySelectorAll('.card');

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Математика умножение

function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
}
let firstNumber = document.querySelector('.first-int-mult');
let secondNumber = document.querySelector('.second-int-mult');
let answerInput = document.getElementById('answer-mult');
let score = 0;
let maxScore = 0;
let currentRecord = document.getElementById('current-record');
let maxRecord = document.getElementById('max-record');

function generateQuestion() {
     const num1 = getRandomInt();
     const num2 = getRandomInt();
    firstNumber.textContent = num1;
    secondNumber.textContent = num2;
    return num1 * num2;
};
let correctAnswer = generateQuestion();

function checkAnswer() {
    const userAnswer = parseInt(answerInput.value.trim());
    if (userAnswer === correctAnswer) {
        score += 1;
        correctAnswer = generateQuestion();
    } else {
        score = 0;
    }
    currentRecord.textContent = `Текущая серия: ${score}`;
    if (score > maxScore) {
        maxScore = score;
    }
    maxRecord.textContent = `Лучший результат: ${maxScore}`;
    answerInput.value = '';
    
}

document.getElementById("giveAnswer").addEventListener("click", checkAnswer);
answerInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

//математика деление
let firstDivNumber = document.querySelector('.first-int-div');
let secondDivNumber = document.querySelector('.second-int-div');
let answerDivInput = document.getElementById('answer-div');
let divScore = 0;
let divMaxScore = 0;
let divCurrentRecord = document.getElementById('div-current-record');
let divMaxRecord = document.getElementById('div-max-record');



function generateDivisionQuestion() {
     const num2 = getRandomInt();
     const correctAnswer = getRandomInt();
     const num1 = num2 * correctAnswer;

    firstDivNumber.textContent = num1;
    secondDivNumber.textContent = num2;
    return correctAnswer;
};

let correctDivAnswer = generateDivisionQuestion();

function checkDivAnswer() {
    const userAnswer = parseInt(answerDivInput.value.trim());
    if (userAnswer === correctDivAnswer) {
        divScore += 1;
        correctDivAnswer = generateDivisionQuestion();
    } else {
        divScore = 0;
    }
    divCurrentRecord.textContent = `Текущая серия: ${divScore}`;
    if (divScore > divMaxScore) {
        divMaxScore = divScore;
    }
    divMaxRecord.textContent = `Лучший результат: ${divMaxScore}`;
    answerDivInput.value = '';
    
};
document.getElementById("giveDivAnswer").addEventListener("click", checkDivAnswer);
answerDivInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkDivAnswer();
    }
});