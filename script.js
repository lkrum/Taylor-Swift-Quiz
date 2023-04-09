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
var currentQuestion = {};
var userAnswer
var choiceResponse;
var score = 0
var questionCounter = 0;
var questionList = [];

// array of questions and answers
let questions = [
  {
    question: "What is Taylor's lucky number?",
    choice1: "13",
    choice2: "3",
    choice3: "10",
    choice4: "21",
    answer: 1
  },
  {
    question: "What was Taylor's first 2020 album?",
    choice1: "Evermore",
    choice2: "Folklore",
    choice3: "Forevermore",
    choice4: "Woodvale",
    answer: 2
  },
  {
    question: "Finish the lyric: 'Karma is my ...'",
    choice1: "god",
    choice2: "grammy",
    choice3: "cat",
    choice4: "boyfriend",
    answer: 4
  },
  {
    question: "What is the name of Taylor's completely solo-written ablum?",
    choice1: "Speak Now",
    choice2: "Fearless",
    choice3: "Midnights",
    choice4: "Taylor Swift",
    answer: 1
  },
  {
    question: "Taylor wrote a short film for which song?",
    choice1: "Love Story",
    choice2: "Anti-hero",
    choice3: "The Man",
    choice4: "All Too Well (10 Minute Version)",
    answer: 4
  },

]

// Question  1 variables
var questOneOptions = ["13", "10", "3", "21"]
var question = document.getElementsByTagName("h2");
console.log(question);
var correct = ["13", "Folklore", "boyfriend", "Speak Now", "All Too Well (10 Minute Version)"]

// // Game begins
// var playGame() { 

// Question 1 function
// var questOneChoice = function () {
//   if (questOneChoice ("13"))
//     choiceResponse.textContent = "Correct!";
//   else {
//     choiceResponse.textContent = "Wrong!";

// }





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
var questionEl = document.getElementsByClassName("question")
var answerChoiceEl = document.getElementsByTagName("li");
var choiceResponseEl = Array.from(document.getElementsByClassName("choice-response"));
console.log(choiceResponseEl)
// answerChoiceEl.addEventListener('click', function())

//   for (var x = 0; x < answerEl.length; x++)) {
   
  
  
  
//   if (userAnswer === ) {
//       choiceResponseEl.textContent = "Correct!";
//     } else {
//       choiceResponseEl.textContent = "Wrong!";
      
// }
// })

// console.log(answerChoiceEl[0]);



// button function

// console.log(answerEl)
// for (var x = 0; x < answerEl.length; x++) {
//   // answerEl.addEventListener("click", myFunction() {
//   answerEl.textContent = "Correct!";