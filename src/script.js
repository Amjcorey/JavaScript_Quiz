let currentQuestionIndex = 0;
let score = 0;
let time = 60;

// Questions array
const questions = [
  {
    question: "True or False: JavaScript is case sensitive",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
      { text: "None", correct: false },
    ],
  },
  {
    question: "Which definition below describes a FUNCTION in Java Script?",
    answers: [
      { text: "Something we use to store groups of data", correct: false },
      {
        text: "A reusable block of code that performs a specific task",
        correct: true,
      },
      { text: "A way we can store a single piece of data", correct: false },
    ],
  },
  {
    question: "Which syntax is used to call a function?",
    answers: [
      { text: "function Name()", correct: true },
      { text: "function Name", correct: false },
      { text: "function Name[]", correct: false },
    ],
  },
  {
    question: "How do you start a FOR loop?",
    answers: [
      { text: "for (i = 0; i < 5; i++)", correct: true },
      { text: "for (i = 0; i < 5)", correct: false },
      { text: "for (i = 0; i < 5; i--)", correct: false },
    ],
  },
  {
    question: "How do you start a WHILE loop?",
    answers: [
      { text: "while (i < 5; i++)", correct: false },
      { text: "while (i < 5; i--)", correct: false },
      { text: "while (i < 5)", correct: true },
    ],
  },

  {
    question: "What does || mean?",
    answers: [
      { text: "OR", correct: true },
      { text: "AND", correct: false },
      { text: "NOT", correct: false },
    ],
  },
  {
    question: "What does && mean?",
    answers: [
      { text: "OR", correct: false },
      { text: "NOT", correct: false },
      { text: "AND", correct: true },
    ],
  },
];

//HTML Elements
let countDown = document.querySelector("#count-down");
let timeClock = document.querySelector("#time-clock");
let questionEl = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let answerSelection = ["#btn1", "#btn2", "#btn3", "#btn4"];
let nextButton = document.getElementById("next-btn");
let timer;

function startQuiz() {
  console.log("Quiz started");
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("home-container").style.display = "none";
  document.getElementById("start-btn").style.display = "none";
  document.getElementById("results-link").style.display = "none";
  document.getElementById("results-container").style.display = "none";
  nextButton.innerHTML = "Next";

  displayQuestion();
  startTimer();
}

// Start timer
function startTimer() {
  timer = setInterval(function() {
    if (time <= 0) {
      clearInterval(timer);
      timer = null;
      displayScore();
    } else {
      countDown.textContent = time;
    }
  time--;
  }, 1000);
}

//Make function to display first set of questions with the question number
//Display the first question when set at 0 and display next question when add 1 to the index. Also show the question number
//Event listener when user selects an answer, then need to call new function Select Answer

function displayQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionEl.innerHTML = questionNumber + ". " + currentQuestion.question;

  // create buttons showing the answer choices
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", clickedAnswer);
  });
}

// Reset quiz/questions
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}



function clickedAnswer(event) {
  event.preventDefault();
  const buttonClicked = event.target;
  const isCorrect = buttonClicked.dataset.correct === "true";
  if (isCorrect) {
    buttonClicked.classList.add("correct");
    score++;
  } else {
    buttonClicked.classList.add("incorrect");
  }
  // Prevent multiple answers from being selected and show correct answer if user choose incorrectly
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

// function collectScore() {

//   let initials = document.getElementById("init-form");
//   if (!initials.value == "") {
//     return ("Please enter initials");
//   } 
//   let highScore = JSON.parse(localStorage.getItem('highScore')) || [];
//   let newScore = { initials: initials, time: time, score: score };
//   highScore.push(newScore);
//   highScore.sort(function(a,b) {
//     return b.score - a.score;
//   });  
//   localStorage.setItem('highScore', JSON.stringify(highScore));
// }

//Display user score
function displayScore() {
  resetState();
  collectScore();
  questionEl.innerHTML = `Nice! You scored ${score} out of ${questions.length}.`;
  nextButton.innerHTML = "Play again.";
  nextButton.style.display = "block";
}

//Function for button to display next question
function nextButtonHandle() {
  // Update the current question index
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    startQuiz();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    nextButtonHandle();
  } else {
    displayScore();
  }
});

// startQuiz();
