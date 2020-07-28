var startButton = document.querySelector("#welcome-button");
var welcomePage = document.querySelector("#welcome-page");
var questionPage = document.querySelector("#questions");


startButton.addEventListener("click", start);

function start() {
    startTimer();
    hideWelcome();
    showQuestions();
}

function hideWelcome() {
    welcomePage.style.display = "none";
}

function showQuestions() {
    questionPage.style.display = "block";
}


function startTimer() {
    var timer = 10;
setInterval(function() {
    if (timer <= 0) {
        return;
    } else {
        timer--;
        document.getElementById("timer").textContent = timer;
    }
}, 1000)
}

