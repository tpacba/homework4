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

var correct = 0;
var timer = 50;

var highscores = {
    name: ["John"],
    score: [5]
}

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

startButton.addEventListener("click", start);

function start() {
    welcomePage.style.display = "none";
    questionPage.style.display = "block";
    timeColumn.style.display = "block";
    scoresColumn.style.display = "none";
    startTime();
    q1();
}

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

function q1() {
    questionHeader.innerHTML = question1.q;

    rightanswer(question1.a1);
    wronganswer(question1.a2);
    wronganswer(question1.a3);

    for (var i = 0; i < 3; i++) {
    var next = multipleChoice.getElementsByClassName("btn")[i];
    next.addEventListener("click", final);
    }
}

// function q2() {
//     questionHeader.innerHTML = question2.q;
//     multipleChoice.innerHTML = "";

//     wronganswer(question2.a1);
//     wronganswer(question2.a2);
//     rightanswer(question2.a3);

//     for (var i = 0; i < 3; i++) {
//         var next = multipleChoice.getElementsByClassName("btn")[i];
//         next.addEventListener("click", q3);
//         }
// }

// function q3() {
//     questionHeader.innerHTML = question2.q;
//     multipleChoice.innerHTML = "";

//     rightanswer(question3.a1);
//     wronganswer(question3.a2);
//     wronganswer(question3.a3);

//     for (var i = 0; i < 3; i++) {
//         var next = multipleChoice.getElementsByClassName("btn")[i];
//         next.addEventListener("click", q4);
//         }
// }

// function q4() {
//     questionHeader.innerHTML = question2.q;
//     multipleChoice.innerHTML = "";

//     wronganswer(question4.a1);
//     wronganswer(question4.a2);
//     rightanswer(question4.a3);

//     for (var i = 0; i < 3; i++) {
//         var next = multipleChoice.getElementsByClassName("btn")[i];
//         next.addEventListener("click", q5);
//         }
// }

// function q5() {
//     questionHeader.innerHTML = question2.q;
//     multipleChoice.innerHTML = "";

//     wronganswer(question5.a1);
//     rightanswer(question5.a2);
//     wronganswer(question5.a3);

//     for (var i = 0; i < 3; i++) {
//         var next = multipleChoice.getElementsByClassName("btn")[i];
//         next.addEventListener("click", final);
//         }
// }

function final() {
    questionPage.style.display = "none";
    timeColumn.style.display = "none";
    finalPage.style.display = "block";
    scoresColumn.style.display = "block";
    score.innerHTML = correct;

    submitButton.addEventListener("click", function(event) {
        event.preventDefault;
        console.log(nameInput.value);
        console.log(correct);


        console.log("freakingcrap");
        alert("freakingcrap!");
    })
}

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