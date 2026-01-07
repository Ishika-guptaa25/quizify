// Quiz Questions Data
const quizData = [
    {
        id: 1,
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
        ],
        correct: 0
    },
    {
        id: 2,
        question: "Which CSS property is used to change the text color?",
        options: ["text-color", "font-color", "color", "text-style"],
        correct: 2
    },
    {
        id: 3,
        question: "What is the correct JavaScript syntax to print 'Hello World'?",
        options: [
            "print('Hello World')",
            "console.log('Hello World')",
            "echo('Hello World')",
            "printf('Hello World')"
        ],
        correct: 1
    },
    {
        id: 4,
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Undefined"],
        correct: 2
    },
    {
        id: 5,
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        correct: 1
    },
    {
        id: 6,
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<css>", "<script>", "<style>", "<link>"],
        correct: 2
    },
    {
        id: 7,
        question: "In JavaScript, which operator is used to assign a value to a variable?",
        options: ["*", "=", "x", "-"],
        correct: 1
    },
    {
        id: 8,
        question: "What is the correct way to create a function in JavaScript?",
        options: [
            "function myFunction()",
            "function:myFunction()",
            "create myFunction()",
            "def myFunction()"
        ],
        correct: 0
    },
    {
        id: 9,
        question: "Which property is used to change the background color in CSS?",
        options: ["bgcolor", "background-color", "color-background", "bg-color"],
        correct: 1
    },
    {
        id: 10,
        question: "What is the purpose of the <head> tag in HTML?",
        options: [
            "To display the main content",
            "To contain metadata and links to scripts/stylesheets",
            "To create headers",
            "To define the body section"
        ],
        correct: 1
    }
];

// State Variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 300; // 5 minutes in seconds
let timerInterval = null;
let selectedAnswer = null;
let isAnswered = false;
let userAnswers = [];
let startTime = 0;

// DOM Elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const submitBtn = document.getElementById('submitBtn');
const restartBtn = document.getElementById('restartBtn');
const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('optionsContainer');
const currentQEl = document.getElementById('currentQ');
const totalQEl = document.getElementById('totalQ');
const timerEl = document.getElementById('timer');
const currentScoreEl = document.getElementById('currentScore');
const progressFillEl = document.getElementById('progressFill');
const feedbackMsg = document.getElementById('feedbackMsg');
const finalScoreEl = document.getElementById('finalScore');
const percentageEl = document.getElementById('percentage');
const timeTakenEl = document.getElementById('timeTaken');
const reviewContainer = document.getElementById('reviewContainer');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', submitAnswer);
restartBtn.addEventListener('click', restartQuiz);

// Initialize
totalQEl.textContent = quizData.length;

// Start Quiz
function startQuiz() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    startTime = Date.now();
    loadQuestion();
    startTimer();
}

// Start Timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// Update Timer Display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Load Question
function loadQuestion() {
    const question = quizData[currentQuestionIndex];
    questionEl.textContent = question.question;
    currentQEl.textContent = currentQuestionIndex + 1;

    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressFillEl.style.width = `${progress}%`;

    // Clear options
    optionsContainer.innerHTML = '';

    // Create options
    question.options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        optionEl.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
        `;
        optionEl.addEventListener('click', () => selectOption(index, optionEl));
        optionsContainer.appendChild(optionEl);
    });

    // Reset state
    selectedAnswer = null;
    isAnswered = false;
    submitBtn.disabled = true;
    feedbackMsg.classList.add('hidden');
}

// Select Option
function selectOption(index, optionEl) {
    if (isAnswered) return;

    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Add selection
    optionEl.classList.add('selected');
    selectedAnswer = index;
    submitBtn.disabled = false;
}

// Submit Answer
function submitAnswer() {
    if (selectedAnswer === null || isAnswered) return;

    isAnswered = true;
    const question = quizData[currentQuestion