// Quiz questions
const myQuestions = [{
    question: "JavaScript is the same as Java. True or false?",
    answer: [
        {text: "True, JavaScript is a stripped-down version of Java.", isCorrect: false },
        {text: "False, JavaScripts' syntax is loosely base on Java.", isCorrect: true }
        ]
},

{
        qustion: "JavaScript is what type of language?",
        answer: [
            {text: "Object-Oriented", isCorrect: false},
            {text: "Object-Based", isCorrect: true},
            {text: "High-level", isCorrect: false},
            {text: "Assembly-language", isCorrect: false}
        ]
}
];


//HTNML Query Elements

let quizTimer = document.getElementById("quizTimer"); //Timer
let welcomePage = document.getElementById("welcomeMessage"); //Homepage
let quizContainer = document.getElementById("quiz"); //Quiz + questions
let resultsContainer = document.getElementById("results"); //Results
let leaderboardContainer = document.getElementById("leaderboard"); //Leaderboard

//Initial global variables
let id = 0;
let score = 0;
let timerCount = 0;
let timer;
let timeTaken;
let lastQuestion = false;
let result;


// Init function that loads the main page
function init () {
    quizTimer.textContent = "00";
    welcomePage.style.display = 'block';
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'none';
    leaderboardContainer.style.display = 'none';

}

// Start, generate quiz
function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    //Show questions
    function showQuestions(questions, quizContainer){}

    //Show results
    function showResults(questions, quizContainer, resultsContainer){}

}


//Initial loading page
init ();

//Start button
goBackButton.addEventListener("click", init, false);
startButton.addEventListener("click", startQuiz, false);