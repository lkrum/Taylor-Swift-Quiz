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
var answerChoiceEl;
var question;
var userAnswer
var choiceResponse;

// Question  1 variables
var questOneOptions = ["13", "10", "3", "21"]

// Question 1 function
var questOneChoice = function () {
  if (questOneChoice.includes("13"))
    choiceResponse.textContent = "Correct!";
  else {
    choiceResponse.textContent = "Wrong!";

}
}

questOneChoice();

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
    } if (answerChoiceEl !== correct) {
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

// question function
var answerChoiceEl = document.getElementsByTagName("li");
var choiceResponse = document.getElementsByClassName("choice-response");
answerChoiceEl.addEventListener('click', function())

//   for (var x = 0; x < answerEl.length; x++)) {
   
  
  
  
//   if (userAnswer === ) {
//       choiceResponse.textContent = "Correct!";
//     } else {
//       choiceResponse.textContent = "Wrong!";
      
// }
// })

// console.log(answerChoiceEl[0]);



// button function

// console.log(answerEl)
// for (var x = 0; x < answerEl.length; x++) {
//   // answerEl.addEventListener("click", myFunction() {
//   answerEl.textContent = "Correct!";