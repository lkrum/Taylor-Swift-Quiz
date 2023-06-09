// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// Selectors
var timeEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var choicesConEl = document.querySelector(".choices-container");
var answerValEl = document.getElementById("answer-validation");
var scoreConEl = document.getElementById("scores-container");
var scoreListEl = document.createElement("ol");
var scoreListUser = document.createElement("li");

// variables

var answerChoiceEl;
var questionCounter = 0;
var score = 0;
var secondsLeft = 60;
var timerInterval;
var q;
var userInitials;

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

// function to start game

function renderQuestion() {

  var q = questions[questionCounter];
  questionEl.textContent = q.question;
  choicesConEl.innerHTML = "";

  // loop to create buttons
  // loop was created with the help of Chris Barcal
  for (let i = 0; i < q.choices.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = q.choices[i];
    answerBtn.setAttribute("value", q.choices[i]);
    choicesConEl.appendChild(answerBtn);
  }
}

// function to check answers
// function was created with the help of Chris Barcal
function checkAnswer(event) {
  if ((secondsLeft == 0) || (questionCounter > questions.length - 1)) {
    endGame();
  }
  let correctAnswer = questions[questionCounter].answer;
  if (event.target.tagName == 'BUTTON');
  // answer validation
  {
    var button = event.target;
    if (button.value == questions[questionCounter]) {
      var qs = document.getElementsByTagName("button");
      for (let j = 0; j < qs.length; j++) {
        qs[j].parentNode.removeChild(qs[j]);
      }
      if (questionCounter <= questions.length - 1) {
        questionCounter++;
        renderQuestion();
      }
    }
    else {
      questionCounter++;
      renderQuestion();
    }
  } if (button.value == correctAnswer) {
    answerValEl.textContent = "Correct!";
  } else {
    secondsLeft -= 10;
    answerValEl.textContent = "Wrong!";

  } 
}

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
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
  renderQuestion()
}



// end game function

function endGame() {
  timeEl.textContent = '';
  clearInterval(timerInterval);
  return window.location.replace("./highscores.html");
}


renderQuestion();
document.addEventListener("click", checkAnswer);
countdown();

// get high scores 

// scoreConEl.appendChild(scoreListEl);
// scoreListEl.appendChild(scoreListUser);

// localStorage.setItem("userinitials", userInitials);
// localStorage.setItem("highscore", secondsLeft);


// scoreListUser.textContent = userInitials + secondsLeft; 
