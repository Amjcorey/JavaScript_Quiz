// Questions for the quiz
const questions = [
    {
        question: "True or False: Java Script is case sensitive",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
            { text: "None", correct: false },
        ]
    },
    {
        question: "Which definition below describes a FUNCTION in Java Script?",
        answers: [
            { text: "Something we use to store groups of data", correct: false },
            { text: "A reusable block of code that performs a specific task", correct: true },
            { text: "A way we can store a single piece of data", correct: false },
        ]
    },
    {
        question: "Which syntax is used to call a function?",
        answers: [
            { text: "function Name()", correct: true },
            { text: "functionN ame", correct: false },
            { text: "function Name[]", correct: false },
        ]
    },
    {
        question: "How do you start a FOR loop?",
        answers: [
            { text: "for (i = 0; i < 5; i++)", correct: true },
            { text: "for (i = 0; i < 5)", correct: false },
            { text: "for (i = 0; i < 5; i--)", correct: false },
        ]
    },
    {
        question: "How do you start a WHILE loop?",
        answers: [
            { text: "while (i < 5; i++)", correct: false },
            { text: "while (i < 5; i--)", correct: false },
            { text: "while (i < 5)", correct: true },
        ]
    },

    {
        question: "What does || mean?",
        answers: [
            { text: "OR", correct: true },
            { text: "AND", correct: false },
            { text: "NOT", correct: false },
        ]
    },
    {
        question: "What does && mean?",
        answers: [
            { text: "OR", correct: false },
            { text: "NOT", correct: false },
            { text: "AND", correct: true },
        ]
    }
];

//HTML Elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

//Default values
let currentQuestionIndex = 0;
let score = 0;

// Function to begin quiz once started, should reset the current question and score to 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next question"; 
    displayQuestion();
}
// Fix: Changed "Go to next question" to "Next question" for simplicity.


function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");

        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", clickedAnswer);
    });
    // console.log(currentQuestion);
}  
// Fix: Changed "forEarch" to "forEach" for correct spelling. Fixed the indentation.


// Reset Questions
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function clickedAnswer(e) {
//   event.preventDefault();
    const buttonClicked = e.target;
    const isCorrect = buttonClicked.dataset.correct === "true";
    if (isCorrect) {
        buttonClicked.classList.add("correct");
        score++;
    } else {
        buttonClicked.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

//Display user score
function displayScore() {
    resetState();
    questionElement.innerHTML = `Nice! You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Go again.";
    nextButton.style.display = "block";
}

//Enable button to display the next question
function nextButtonHandle() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        nextButtonHandle();
    } else {
        startQuiz();
    }
});

startQuiz();