var question = document.querySelector("#question");
var answerA = document.querySelector("#answer-a");
var answerB = document.querySelector("#answer-b");
var answerC = document.querySelector("#answer-c");
var answerD = document.querySelector("#answer-d");
var result = document.querySelector("#result");

var tempAnswers = [];
var quizstep = 0;
var questionCount = 1;
var answersCorrect = 0;

var highscore = {
    name: "",
    score: "",
}

function askQuestion() {

    if (quizstep < questions.length) {
        console.log("quiz step in mian func -> " + quizstep);

        question.textContent = "Question " + questionCount + ": " + JSON.stringify(questions[quizstep].title).replace(/\"/g, "");
        for (var j = 0; j < 4; j++) {
            tempAnswers[j] = JSON.stringify(questions[quizstep].choices[j]).replace(/\"/g, "");
        }
        setAnswers();
        checkAnswer(quizstep);
        if (questionCount === questions.length) {
            result.textContent = "The quiz is over! You scored " + answersCorrect + " questions correctly out of " + questions.length + " total questions.";

        }
    }

}


function addScore() {
    answersCorrect++;
}

function quizstepUp() {
    quizstep++;
}

function questionCounter() {
    questionCount++;
}

function setAnswers() {
    answerA.textContent = tempAnswers[0];
    answerB.textContent = tempAnswers[1];
    answerC.textContent = tempAnswers[2];
    answerD.textContent = tempAnswers[3];
}

function checkAnswer(count) {
    answerA.addEventListener("click", function () {
        addScore();
        quizstepUp();
        questionCounter()
        if (JSON.stringify(questions[count].choices[0]) === JSON.stringify(questions[count].answer)) {
            result.textContent = "Correct!";
            interval = setInterval(function () {
                result.textContent = "";
            }, 2000);
            askQuestion();
        }
        else {
            result.textContent = "Wrong!";
            interval = setInterval(function () {
                result.textContent = "";
            }, 2000);
            askQuestion();
        }
    });
    answerB.addEventListener("click", function () {
        addScore();
        quizstepUp();
        questionCounter()
        if (questions[count].choices[1] === questions[count].answer) {
            result.textContent = "Correct!";
            interval = setInterval(function () {
                result.textContent = "";
            }, 2000);
            askQuestion();
        }
        else {
            result.textContent = "Wrong!";
            interval = setInterval(function () {
                result.textContent = "";
            }, 2000);
            askQuestion();
        }
    });
    answerC.addEventListener("click", function () {
        addScore();
        quizstepUp();
        questionCounter()
        if (JSON.stringify(questions[count].choices[2]) === JSON.stringify(questions[count].answer)) {
            console.log("quiz step -> " + quizstep);
            result.textContent = "Correct!";
            interval = setInterval(function () {
                result.textContent = "";
            }, 2000);

            askQuestion();

        }
        else {
            result.textContent = "Wrong!";
            interval = setInterval(function () {
                result.textContent = "";
            }, 2000);

            askQuestion();

        }
    });

    answerD.addEventListener("click", function () {
        addScore();
        quizstepUp();
        questionCounter()
        if (JSON.stringify(questions[count].choices[3]) === JSON.stringify(questions[count].answer)) {
            result.textContent = "Correct!";
            interval = setInterval(function () {
                result.textContent = "";
            }, 2000);

            askQuestion();
        }
        else {
            result.textContent = "Wrong!";
            interval = setInterval(function () {
                result.textContent = "";
            }, 2000);

            askQuestion();
        }
    });
}
askQuestion();
