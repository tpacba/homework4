// Query selector variables
var nav = document.querySelector(".navbar-brand");
var welcomePage = document.querySelector("#welcome-page");
var questionPage = document.querySelector("#question-page");
var startButton = document.querySelector("#start-button");
var questionHeader = document.querySelector("#question-header");
var multipleChoice = document.querySelector("#multiple-choice");
var timeColumn = document.querySelector("#time-column");
var time = document.querySelector("#timer");
var finalPage = document.querySelector("#final-page");
var score = document.querySelector("#score");
var scoresColumn = document.querySelector("#scores-column");
var nameInput = document.querySelector("#name-input");
var submitButton = document.querySelector("#submit-button");

// Refresh the page when navbar is clicked
nav.onclick = function(event) {
    event.preventDefault;
    window.location.reload(false); 

}

// Store the questions in objects
var question1 = {
    q: "What does HTML stand for?",
    a1: "Hyper Text Markup Language",
    a2: "Hyperlinks and Text Markup Language",
    a3: "Home Tool Markup Language"
}

var question2 = {
    q: "Inside which HTML element do we put the JavaScript?",
    a1: "<javascript>",
    a2: "<js>",
    a3: "<script>"
}

var question3 = {
    q: "Where is the correct place to insert a JavaScript?",
    a1: "The <body> section",
    a2: "Both the <head> section and the <body> section are correct",
    a3: "The <head> section"
}

var question4 = {
    q: "How do you write 'Hello World' in an alert box?",
    a1: "msgBox('Hello World');",
    a2: "alertBox('Hello World');",
    a3: "alert('Hello World');"
}

var question5 = {
    q: "How do you create a function in JavaScript?",
    a1: "function:myFunction()",
    a2: "function myFunction()",
    a3: "function = myFunction()"
}

// Initial universal variables
var correct = 0;
var timer = 50;

// Fake high scores to start with
var highscores = {
    name: ["John", "Taylor"],
    score: [5, 4]
}

// Grab localstorage to display for high scores
var newname = JSON.parse(localStorage.getItem("names"));
console.log(newname);
var newscore = JSON.parse(localStorage.getItem("score"));
console.log(newscore);

// If local storage is empty, refer back to the fake high scores
if (newname !== null && newscore !== null) {
    highscores.name = newname;
    highscores.score = newscore;
}

// Append high scores list grabbed from local storage into scores column
function showscore() {
    scoresColumn.innerHTML = ""

    for (var i = 0; i < highscores.name.length; i++) {
        var lists = document.createElement("li");
        lists.textContent = highscores.name[i];
        lists.classList.add("list-group-item");
        lists.classList.add("d-flex");
        lists.classList.add("justify-content-between");
        lists.classList.add("align-items-center");
        var badge = document.createElement("span");
        badge.textContent = highscores.score[i];
        badge.classList.add("badge");
        badge.classList.add("badge-primary");
        badge.classList.add("badge-pill");
        lists.appendChild(badge);
        scoresColumn.appendChild(lists);
    }
}

// Run function to append high scores
showscore();

// Hide welcome page, show question page, start timer
startButton.addEventListener("click", start);
function start() {
    timer = 50;
    welcomePage.style.display = "none";
    questionPage.style.display = "block";
    timeColumn.style.display = "block";
    scoresColumn.style.display = "none";
    document.getElementById("tag").style.display = "none";
    startTime();
    q1();
}

// Create button element for correct answer, alert and add to correct variable
function rightanswer (answer) {
    var a = document.createElement("button");
    a.textContent = answer;
    a.className = "btn btn-warning"
    multipleChoice.appendChild(document.createElement("hr"));
    multipleChoice.appendChild(a);
    a.addEventListener("click", function() {
        correct++;
        alert("Correct! You got 1 point.");
    })
}

// Create button element for wrong answer, alert and subtract from timer
function wronganswer (answer) {
    var a = document.createElement("button");
    a.textContent = answer;
    a.className = "btn btn-warning"
    multipleChoice.appendChild(document.createElement("hr"));
    multipleChoice.appendChild(a);
    a.addEventListener("click", function() {
        timer -= 5;
        alert("Wrong! You've lost 5 seconds.");
    })
}

// First question, on click of any button run next function
function q1() {
    questionHeader.innerHTML = question1.q;
    multipleChoice.innerHTML = "";

    rightanswer(question1.a1);
    wronganswer(question1.a2);
    wronganswer(question1.a3);

    for (var i = 0; i < 3; i++) {
    var next = multipleChoice.getElementsByClassName("btn")[i];
    next.addEventListener("click", q2);
    }
}

// Second question, on click of any button run next function
function q2() {
    questionHeader.innerHTML = question2.q;
    multipleChoice.innerHTML = "";

    wronganswer(question2.a1);
    wronganswer(question2.a2);
    rightanswer(question2.a3);

    for (var i = 0; i < 3; i++) {
        var next = multipleChoice.getElementsByClassName("btn")[i];
        next.addEventListener("click", q3);
        }
}

// Third question, on click of any button run next function
function q3() {
    questionHeader.innerHTML = question3.q;
    multipleChoice.innerHTML = "";

    rightanswer(question3.a1);
    wronganswer(question3.a2);
    wronganswer(question3.a3);

    for (var i = 0; i < 3; i++) {
        var next = multipleChoice.getElementsByClassName("btn")[i];
        next.addEventListener("click", q4);
        }
}

// Fourth question, on click of any button run next function
function q4() {
    questionHeader.innerHTML = question4.q;
    multipleChoice.innerHTML = "";

    wronganswer(question4.a1);
    wronganswer(question4.a2);
    rightanswer(question4.a3);

    for (var i = 0; i < 3; i++) {
        var next = multipleChoice.getElementsByClassName("btn")[i];
        next.addEventListener("click", q5);
        }
}

// Fifth Second question, on click of any button run next function to final page
function q5() {
    questionHeader.innerHTML = question5.q;
    multipleChoice.innerHTML = "";

    wronganswer(question5.a1);
    rightanswer(question5.a2);
    wronganswer(question5.a3);

    for (var i = 0; i < 3; i++) {
        var next = multipleChoice.getElementsByClassName("btn")[i];
        next.addEventListener("click", final);
        }
}

// Hide question page, show final page
function final() {
    timer = 0;
    questionPage.style.display = "none";
    timeColumn.style.display = "none";
    finalPage.style.display = "block";
    scoresColumn.style.display = "block";
    document.getElementById("tag").style.display = "block";
    score.innerHTML = correct;
    
    // Submit input into local storage
    submitButton.onclick = function(event) {
        event.preventDefault();

        var initals = String(nameInput.value);

        highscores.name.push(initals);
        highscores.score.push(correct);

        showscore();
        localStorage.setItem("names", JSON.stringify(highscores.name));
        localStorage.setItem("score", JSON.stringify(highscores.score));
        submitButton.disabled = true;
    }
}

// Timer
function startTime() {
    setInterval(function() {
        if (timer <= 0) {
            final();
        } else {
            timer--;
            time.innerHTML = timer;
        }
    }, 1000)
}