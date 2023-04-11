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

// Selectors
var timeEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var choicesConEl = document.querySelector(".choices-container");

// variables

var answerChoiceEl;
var score = 0
var questionCounter = 0;
var secondsLeft = 3;
var timerInterval;



// array of questions and answers
let questions = [
  {
    question: "What is Taylor's lucky number?",
    choices: ["13", "3", "10", "21"],
    answer: "13"
  },
  {
    question: "What was Taylor's first 2020 album?",
    choices: ["Evermore", "Folklore", "Forevermore", "Woodvale"], 
    answer: "Folklore"
  },
  {
    question: "Finish the lyric: 'Karma is my ...'",
    choices: ["god", "grammy", "cat", "boyfriend"],
    answer: "boyfriend"
  },
  {
    question: "What is the name of Taylor's completely solo-written ablum?",
    choices: ["Speak Now", "Fearless", "Midnights", "Taylor Swift"],
    answer: "Speak Now"
  },
  {
    question: "Taylor wrote a short film for which song?",
    choices: ["Love Story", "Anti-Hero", "The Man", "All Too Well (10 Minute Version)"],
    answer: "All Too Well (10 Minute Version)"
  },

]

// // start game function
// startQuiz() {
//   questionCounter = 0;
//   score = 0;
//   renderQuestion();
// }

// get new questions function
function renderQuestion() { 
  
  var currentQuestion = questions[questionCounter];
  questionEl.textContent = currentQuestion.question;
  
  choicesConEl.innerHTML = "";
  
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = currentQuestion.choices[i];
    choicesConEl.appendChild(answerBtn);
  }
}
  // startQuiz();
  // renderQuestion();




function checkAnswer(){
    if (userChoice === questions[0].choices[0]) {
    choiceResponse.textContent = "Correct!";
  } else {
    choiceResponse.textContent = "Wrong!";
  } if (userChoice === questions[1].choices[1]) { 
      choiceResponse.textContent = "Correct!";
  } else {
      choiceResponse.textContent = "Wrong!";
  } if (userChoice === questions[2].choices[3]) {
      choiceResponse.textContent = "Correct!";
  } else {
      choiceResponse.textContent = "Wrong!";
  } if (userChoice === questions[3].choices[0]) {
        choiceResponse.textContent = "Correct!";
  } else {
        choiceResponse.textContent = "Wrong!";
  } if (userChoice === questions[5].choices[3]) {
    choiceResponse.textContent = "Correct!";
  } else {
    choiceResponse.textContent = "Wrong!";
}
}

// timer


// timer function
 function countdown() {
 
  timerInterval = setInterval(function () {
     
    if (secondsLeft > 1) {
      timeEl.textContent = secondsLeft + " seconds remaining";
      secondsLeft--;
    } else if (secondsLeft === 1) {
      timeEl.textContent = secondsLeft + ' second remaining';
      secondsLeft--;
    } else {
        endGame(); 
    }
  }, 1000);
  renderQuestion()
}

countdown();


function endGame(){
  timeEl.textContent = '';
  clearInterval(timerInterval);
}
  
    