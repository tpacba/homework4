var welcomePage = document.querySelector("#welcome-page");
var questionPage = document.querySelector("#question-page");
var startButton = document.querySelector("#start-button");
var questionHeader = document.querySelector("#question-header");
var multipleChoice = document.querySelector("#multiple-choice");

startButton.addEventListener("click", start);

function start() {
    welcomePage.style.display = "none";
    questionPage.style.display = "block";
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

function q1() {
    questionHeader.innerHTML = question1.q;

    var a1 = document.createElement("button");
    var a2 = document.createElement("button");
    var a3 = document.createElement("button");
    
    a1.textContent = question1.a1;
    a2.textContent = question1.a2;
    a3.textContent = question1.a3;

    a1.className = "btn btn-warning";
    a2.className = "btn btn-warning";
    a3.className = "btn btn-warning";

    multipleChoice.appendChild(document.createElement("hr"));
    multipleChoice.appendChild(a1);
    multipleChoice.appendChild(document.createElement("hr"));
    multipleChoice.appendChild(a2);
    multipleChoice.appendChild(document.createElement("hr"));
    multipleChoice.appendChild(a3);

    a1.addEventListener("click", function() {
        alert("Correct!")
        q2();
    })
    a2.addEventListener("click", function() {
        alert("Wrong!")
        q2();
    })
    a3.addEventListener("click", function() {
        alert("Wrong!")
        q2();
    })
}

function q2() {
    questionHeader.innerHTML = question2.q;
    multipleChoice.innerHTML = "";
}


// var startButton = document.querySelector("#welcome-button");
// var welcomePage = document.querySelector("#welcome-page");
// var questionPage = document.querySelector("#question-page");
// var questionHead = document.querySelector("#question-header");
// var answers = document.querySelector("#multiple-choice");
// var points = document.querySelector("#points");

// var correct = 0;

// var listQuestions = {
//     q0 : "Question 1: Are cats dogs?",
//     q1 : "Question 2: Are dogs cats?",
//     q2 : "Question 3: Are cats cats?",
//     q3 : "Question 4: Are dogs dogs?"
// };

// var listAnswers = ["Yes", "No", "Maybe"];

// function start() {
//     startTimer();
//     welcomePage.style.display = "none";
//     questionPage.style.display = "block";
//     q0();
// };

// function q0() {
//     questionHead.textContent = listQuestions.q0;
//     points.textContent = correct;
//     for (var i = 0; i < listAnswers.length; i++) {
//         var list = document.createElement("button");
//         list.textContent = listAnswers[i];
//         list.setAttribute("data-index", i);
//         answers.appendChild(list);
//     }
    
//     answers.children[0].addEventListener("click", function() {
//         timer -= 5;
//         alert("wrong! You lose 5 seconds.");
//     })
//     answers.children[1].addEventListener("click", function() {
//         correct++;
//         alert("correct!");
//     })
//     answers.children[2].addEventListener("click", function() {
//         timer -= 5;
//         alert("wrong! You lose 5 seconds.");
//     })
// }





// var timer = 100;

// function startTimer() {
    
//     setInterval(function() {
//     if (timer <= 0) {
//         return;
//     } else {
//         timer--;
//         document.getElementById("timer").textContent = timer;
//     };
// }, 1000);
// };

// startButton.addEventListener("click", start);