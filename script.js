// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


// variables
var timeEl;
var question;
var answer;
var correct = ["13", "Folklore", "boyfriend", "Speak Now", "All Too Well (10 Minute Version)"]

// timer
var timeEl = document.getElementById("timer");

// timer function
function countdown() {
  var secondsLeft = 60;
  var timerInterval = setInterval(function () {
    if (secondsLeft > 1) {
      timeEl.textContent = secondsLeft + " seconds left";
      secondsLeft--;
    } if (answer === false) {
      secondsLeft - 10;
      timeEl.textContent = secondsLeft + " seconds left";
    } if (secondsLeft === 1) {
      timeEl.textContent = secondsLeft + " second left";
      secondsLeft--;
    } else if (secondsLeft === 0) {
      timeEl.textContent = '';
      clearInterval(timerInterval);
    }
  }, 1000);
}

countdown();

// questions
var answerEl = document.getElementById("answer");


function quiz() {
  if (correct.includes(answer)) {
    answerEl.textContent = "Correct!";
  } else {
    answerEl.textContent = "Wrong!"
  }
}

quiz();