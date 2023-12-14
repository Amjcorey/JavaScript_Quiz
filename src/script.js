

// Questions for the quiz
const questions = [
    {
        question: "True or False: Java Script is case sensitive",
        answers: [
            { text: "True", correct: true},
            { text: "False", correct: false},
        ]
    },
    {
        question: "Which definition below describes a FUNCTION in Java Script?",
        answers: [
        {text: "Something we use to store groups of data", correct: false},
        {text: "A reusable block of code that performs a specific task", correct: true},
        {text: "A way we can store a single piece of data", correct: false},
    ]
    },
    {
        question: "Which syntax is used to call a function?",
        answers: [
            {text: "functionName()", correct: true},
            {text: "functionName", correct: false},
            {text: "functionName[]", correct: false},
        ]
    },
    {
        question: "How do you start a FOR loop?",
        answers: [
           {text: "for (i = 0; i < 5; i++)", correct: true},
           {text: "for (i = 0; i < 5)", correct: false},
           {text: "for (i = 0; i < 5; i--)", correct: false},
        ]
    },
    {
        question: "How do you start a WHILE loop?",
        answers: [
            {text: "while (i < 5; i++)", correct: false},
            {text: "while (i < 5; i--)", correct:false },
            {text: "while (i < 5)", correct: true},
        ]
    },
    
    {
        question: "What does || mean?",
        answers: [
            {text: "OR", correct: true}, 
            {text: "AND", correct: false},
            {text: "NOT", correct: false},
        ]
    }, 
    {
        question: "What does && mean?",
        answers: [
            {text: "OR", correct: false},
            {text: "NOT", correct: false}, 
            {text: "AND", correct: true},
        ]
    }
];

//HTML Elements

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

//Default values

let currentQuestionIndex = 0; //index will start from 0 
let score = 0;
// Function to begin quiz once started, should reset the current question and score to 0; 
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
//Change text to "Next" because at the end of the quiz it will change to retry quiz
    nextButton.innerHTML = "Next"; 
    displayQuestion();
}


//Make function to display first set of questions with the question number
//Display the first question when set at 0 and display next question when add 1 to the index. Also show the question number
function displayQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;
//Display answer options -- 
    currentQuestion.answers.forEarch(answer => {
        const button = document.createElement("button");
        //That will display the answers text
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        //Know when the correct answer is selected
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
//Event listener when user selects an answer, then need to call new function Select Answer
        button.addEventListener("click", selectAnswer);
    });
}  


// Reset quiz/questions function
function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(event) {
    event.preventDefault();
    const buttonClicked = e.target;
    const isCorrect = buttonClicked.dataset.correct === "true";
    if(isCorrect) {
        buttonClicked.classList.add("correct");
        score++;
    } else {
        buttonClicked.classList.add("incorrect");
    }
//prevent multiple answers from being selected; show correct answer if user choose incorrectly
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

//Display user score
function displayScore() {
    resetState();
    questionElement.innerHTML = `Nice! You scored ${score} out of ${questions.length}.`;
    nextButton.innerHTML = "Try again.";
    nextButton.style.display = "block";
}

//Enable button to display the next question
function nextButtonHandle() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        displayQuestion();
    } else {
        displayScore();
    }
}

// 
startQuiz();