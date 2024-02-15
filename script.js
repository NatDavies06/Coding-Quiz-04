let startBtn = document.getElementById("start-btn");
let nextBtn = document.getElementById("next-btn");
let questionContainer = document.getElementById("question-container");
let optionsContainer = document.getElementById("options-container");
let timerElement = document.getElementById("time");
let resultElement = document.getElementById("results");
let scoreContainer = document.getElementById("score-container");
let submitBtn = document.getElementById("submit-btn");

// Timer funciton
let timer;
let time = 120;
let score = 0;
let currentQuestionIndex = 0;

// Questions for quiz
let question = [ {
    question: "How do you declare a variable in Javascript??",
    options:  ["var", "let", "const", "make"],
    correctIndex: 2
}];

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", question);

function startQuiz() {
    startBtn.style.display = "none";
    loadQuestion();
    startTimer();
}
// Question functions
function loadQuestion() {
    let currentQuestin = question;
    questionContainer.innerText = currentQuestin.question;

    // Clear previous options
    optionsContainer.innerHTML = "";

    // display answer choices
    currentQuestin.options.forEach((option, index) => {
        const button = document.createElement("button")
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(index));

    });
}

function checkAnswer(index) {
    // Corrrect answer
    resultElement.innerText = "Correct!";
    score++;
    resultElement.style.display = "block";
    nextBtn.style.display = "block";

    optionsContainer.querySelectorAll("button").forEach(button => {
        button.display = true;
    })

    // Incorrect answer
    resultElement.innerText = "Incorrect!";
    score--;
    resultElement.style.display = "block";
    nextBtn.style.display = "block";

    optionsContainer.querySelectorAll("button").forEach(button => {
    button.disable = false;
})

timerElement.innerText = time;

function nextQuestion() {
    resultElement.style.display = "none";
    nextBtn.style.display = "none";
    currentQuestionIndex++;

    if (currentQuestionIndex < question.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    timer = setInterval(() => {
        if (time > 0) {
            time--;
            timerElement.innerText = time;
        } else {
            endQuiz();
        }
    }, 10000);
}
}
