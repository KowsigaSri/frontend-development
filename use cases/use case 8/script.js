const quizData = [
    {
        question: "What does HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which CSS property controls text color?",
        options: ["font-style", "color", "text-color", "background"],
        answer: 1
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        options: ["int", "var", "string", "float"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
const questionBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("optionsBox");
const nextBtn = document.getElementById("nextBtn");
const scoreBox = document.getElementById("scoreBox");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionBox.textContent = q.question;
    optionsBox.innerHTML = "";


    q.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="option" value="${index}">
            ${option}
        `;
        optionsBox.appendChild(label);
    });
}


function getSelectedOption() {
    const options = document.querySelectorAll("input[name='option']");
    for (let option of options) {
        if (option.checked) {
            return parseInt(option.value);
        }
    }
    return null;
}


nextBtn.addEventListener("click", () => {
    const selected = getSelectedOption();


    if (selected === null) {
        alert("Please select an answer");
        return;
    }


    if (selected === quizData[currentQuestion].answer) {
        score++;
    }


    currentQuestion++;


    if (currentQuestion < quizData.length) {
        loadQuestion();
        scoreBox.textContent = `Score: ${score}`;
    } else {
        showResult();
    }
});


function showResult() {
    questionBox.textContent = "Quiz Completed!";
    optionsBox.innerHTML = "";
    nextBtn.style.display = "none";
    scoreBox.textContent = `Final Score: ${score} / ${quizData.length}`;
}


// Initialize quiz
loadQuestion();


