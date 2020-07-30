var welcomePage = document.querySelector("#welcome-page");
var questionPage = document.querySelector("#question-page");
var startButton = document.querySelector("#start-button");
var questionHeader = document.querySelector("#question-header");
var multipleChoice = document.querySelector("#multiple-choice");
var timeColumn = document.querySelector("#time-column");
var time = document.querySelector("#timer");

var correct = 0;
var timer = 100;

startButton.addEventListener("click", start);

function start() {
    welcomePage.style.display = "none";
    questionPage.style.display = "block";
    timeColumn.style.display = "block";
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

function q1() {
    questionHeader.innerHTML = question1.q;

    rightanswer(question1.a1);
    wronganswer(question1.a2);
    wronganswer(question1.a3);

    function rightanswer (answer) {
        var a = document.createElement("button");
        a.textContent = answer;
        a.className = "btn btn-warning"
        multipleChoice.appendChild(document.createElement("hr"));
        multipleChoice.appendChild(a);
        a.addEventListener("click", function() {
            correct++;
            alert("Correct! You got 1 point.")
            q2();
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
            q2();
        })
    }
}

function q2() {
    questionHeader.innerHTML = question2.q;
    multipleChoice.innerHTML = "";

    wronganswer(question2.a1);
    wronganswer(question2.a2);
    rightanswer(question2.a3);

    function rightanswer (answer) {
        var a = document.createElement("button");
        a.textContent = answer;
        a.className = "btn btn-warning"
        multipleChoice.appendChild(document.createElement("hr"));
        multipleChoice.appendChild(a);
        a.addEventListener("click", function() {
            correct++;
            alert("Correct! You got 1 point.")
            q3();
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
            q3();
        })
    }
}

function q3() {
    questionHeader.innerHTML = question2.q;
    multipleChoice.innerHTML = "";

    rightanswer(question3.a1);
    wronganswer(question3.a2);
    wronganswer(question3.a3);

    function rightanswer (answer) {
        var a = document.createElement("button");
        a.textContent = answer;
        a.className = "btn btn-warning"
        multipleChoice.appendChild(document.createElement("hr"));
        multipleChoice.appendChild(a);
        a.addEventListener("click", function() {
            correct++;
            alert("Correct! You got 1 point.")
            q4();
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
            q4();
        })
    }
}

function q4() {
    questionHeader.innerHTML = question2.q;
    multipleChoice.innerHTML = "";

    wronganswer(question4.a1);
    wronganswer(question4.a2);
    rightanswer(question4.a3);

    function rightanswer (answer) {
        var a = document.createElement("button");
        a.textContent = answer;
        a.className = "btn btn-warning"
        multipleChoice.appendChild(document.createElement("hr"));
        multipleChoice.appendChild(a);
        a.addEventListener("click", function() {
            correct++;
            alert("Correct! You got 1 point.")
            q5();
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
            q5();
        })
    }
}

function q5() {
    questionHeader.innerHTML = question2.q;
    multipleChoice.innerHTML = "";

    wronganswer(question5.a1);
    rightanswer(question5.a2);
    wronganswer(question5.a3);

    function rightanswer (answer) {
        var a = document.createElement("button");
        a.textContent = answer;
        a.className = "btn btn-warning"
        multipleChoice.appendChild(document.createElement("hr"));
        multipleChoice.appendChild(a);
        a.addEventListener("click", function() {
            correct++;
            alert("Correct! You got 1 point.")
            final();
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
            final();
        })
    }
}

function startTime() {
    setInterval(function() {
        if (timer <= 0) {
            return;
        } else {
            timer--;
            time.innerHTML = timer;
        }
    }, 1000)
}