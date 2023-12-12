

//Assign const variables to HTML id elements

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button ");


// Questions for the quiz{

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
        {text: "Something we use to store groups of data", correct: false },
        {text: "A reusable block of code that performs a specific task", correct: true },
        {text: "A way we can store a single piece of data", correct: false},
    ]
    },
    {
        question: "Which syntax is used to call a function?",
        answers: [
            {text: "functionName()", correct: true },
            {text: "functionName", correct: false },
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

// Create variables

let currentQuestionIndex = 0; //index will start from 0 
let score = 0;


// Function to begin quiz, once started, should reset the current question and score to 0; 

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    //Change text to "Next" because at the end of the quiz it will change to retry quiz
    nextButton.innerHTML = "Next"; 

    //Call new function to display a new/different question
    showQuestion();
}

//Make function to display first set of questions
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
//Display the first question when set at 0 and display next question when add 1 to the index. Also show the question number
    let questionNumber = currentQuestionIndex + 1;
    
    //change HTML text
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;
}