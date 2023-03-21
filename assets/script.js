//Array of questions
var questionList = [
    {
        "id" : 1,
        "Question": "Comonly Used Datatypes DO Not include:_________" ,
        "opt1" : "1. Strings",
        "opt2" : "2. Booleans",
        "opt3" : "3. Alerts",
        "opt4" : "4. Numbers",
        "Correct" : "3"
    },
    
    {
        "id" : 2,
        "Question": "Conditon in an if/else statement is enclosed with:________",
        "opt1" : "1. Quotes",
        "opt2" : "2. Curly Brackets",
        "opt3" : "3. Square Brackets",
        "opt4" : "4. Parenthesis",
        "Correct" : "4"  
     },
     { 
        "id" : 3,
        "Question": "Arrays in Javascript can be used to store ________",
        "opt1" : "1. Numbers and Strings",
        "opt2" : "2. Other arrays",
        "opt3" : "3. Booleans",
        "opt4" : "4. All of the above",
        "Correct" : "4"
     },
     {
        "id" : 4,
        "Question": "String values must be enclosed within _____ when being assigned to variable",
        "opt1" : "1. Commas",
        "opt2" : "2. Curly brackets",
        "opt3" : "3. Quotes",
        "opt4" : "4. Parenthesis",
        "Correct" : "3"
     },
     {
        "id" : 5,
        "Question": "A useful tool used during development & debugging for printing content to the debugger is _________",
        "opt1" : "1. Javascript",
        "opt2" : "2. Terminal/bash",
        "opt3" : "3. For loops",
        "opt4" : "4. Console.log",
        "Correct" : "4"
     }  
];
var bodyEl = document.body;
var startPageEl = document.getElementById("start-page");
var mainEl = document.querySelector(".main");
var startQuizBtn = document.getElementById("start-quiz");
var timerElement = document.getElementById("timer");
var quizInfoElement = document.getElementById("quizinfo");
var answerVerifyEl = document.getElementById("verify");
var quizContainerEl = document.getElementById("quizContainer");
var submitContainerEl = document.getElementById("submitContainer");
var submitFormBtn = document.getElementById("submit-form");
var inputEl = document.getElementById("initial");

var finalscoreEl = document.getElementById("finalscore");
var highscoreBtnEl = document.getElementById("highscore");
var gobackButtonEl = document.createElement("button");
var clearButtonEl = document.createElement("button");

var score;
var highScore;
var currentQuestion;
var isAllDone = false;

//timer set

var timerCount;
var penalty =10;

startQuizBtn.addEventListener("click", startQuiz);
highscoreBtnEl.addEventListener("click", viewHighScore);

function startQuiz() {
    timerCount = 75;
    
    mainEl.parentNode.removeChild(mainEl);
    startPageEl.appendChild(quizContainerEl);
    loadNextQuestion(); 
    score = 0;  
    startTimer();
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if  condition is met
        if (isAllDone && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          allDone() //winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        allDone();
      }
    }, 1000);
  }

  function allDone() {
    quizContainerEl.parentNode.removeChild(quizContainerEl);
    startPageEl.appendChild(submitContainerEl);
  }

//function to create list of questions
var questionDiv = document.getElementById("question");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");
var option4El = document.getElementById("option4");
var questionNum = document.getElementById("id");



option1El.addEventListener("click", choiceMade1);
option2El.addEventListener("click", choiceMade2);
option3El.addEventListener("click", choiceMade3);
option4El.addEventListener("click", choiceMade4);




function choiceMade1() {
    if(1 == questionList[currentQuestion].Correct) {
        
        answerVerifyEl.textContent = "Correct!";
        score += 20;
        
    } else {
        
        answerVerifyEl.textContent = "Wrong!";
        penaliseTime();
    }
    //answerVerifyEl.removechild(answerVerifyEl);
    loadNextQuestion();
}

function choiceMade2() {
    if(2 == questionList[currentQuestion].Correct) {
        
        answerVerifyEl.textContent = "Correct!";
        score += 20;
    } else {
        
        answerVerifyEl.textContent = "Wrong!";
        penaliseTime();
    }
    loadNextQuestion();
}

function choiceMade3() {
    if(3 == questionList[currentQuestion].Correct) {
        
        answerVerifyEl.textContent = "Correct!";
        score += 20;
    } else {
        
        answerVerifyEl.textContent = "Wrong!";
        penaliseTime();
    }
    loadNextQuestion();
}

function choiceMade4() {
    if(4 == questionList[currentQuestion].Correct) {
        answerVerifyEl.textContent = "Correct!";
        score += 20;
    } else {
        
        answerVerifyEl.textContent = "Wrong!";
        penaliseTime();
    }
    loadNextQuestion();
}

function penaliseTime() {
    timerCount = timerCount - penalty;
}

//counter to keep track of questions 
var count = 0;
function loadNextQuestion(){
    if(count <=4) {
        questionDiv.textContent = questionList[count].Question;
        option1El.textContent = questionList[count].opt1;
        option2El.textContent = questionList[count].opt2;
        option3El.textContent = questionList[count].opt3;
        option4El.textContent = questionList[count].opt4;
        currentQuestion = count;
        count++;
    } else {
        //all done
        isAllDone = true;
        finalscoreEl.textContent = score;
        if(score > highScore) {
            highScore = score;
        }
        //Handle the final score details.
        // submitContainerEl.style.display = false;
        // quizContainerEl.style.display = none;
    }
    
};


submitFormBtn.addEventListener("click",function(event) {
event.preventDefault();
var initialInput = inputEl.value;
if( initialInput === null){
    alert("no value entered!");
}else{
    var finalScore = {
        initialInput : initialInput,
        score : score,
    };
    //localStorage.setItem("score", score);
    var allScores = localStorage.getItem("allScores");
      if (allScores === null) {
        allScores = [];
      } else {
        allScores = JSON.parse(allScores);
      }
      allScores.push(finalScore);
      var newScore = JSON.stringify(allScores);
      localStorage.setItem("allScores", newScore);
      //viewHighScore();
    }
  });

  /*gobackButtonEl.textContent = "Go Back";
  gobackButtonEl.className = "btn hscores-gobtn";       
  
      //create clear high scores button
  clearButtonEl.textContent = "Clear high scores";
  clearButtonEl.className = "btn hscores-clbtn";*/



function viewHighScore() {
    alert("Inside view highSCore");
    clearButtonEl.textContent = "Clear high scores";
    clearButtonEl.addEventListener("click", function(){
    localStorage.clear();
    });
    var allScores = localStorage.getItem("allScores");
    allScores = JSON.parse(allScores);

    if (allScores !== null) {
        for (var i = 0; i < allScores.length; i++) {
            var createLi = document.createElement("li");
            createLi.textContent = allScores[i].initials + " " + allScores[i].score;
            highScore.appendChild(createLi);
        }
    }
    startPageEl.removeChild(submitContainerEl);
    startPageEl.removeChild(mainEl);
    startPageEl.removeChild(quizContainerEl);
    startPageEl.appendChild
    gobackButtonEl.textContent = "Go Back";
    gobackButtonEl.addEventListener("click", function () {
    //window.location.replace("index.html");
});
}
/*function viewHighScore() {
    inputEl = localStorage.getItem("initial");
    finalscoreEl = localStorage.getItem("finalscore");
    if(!inputEl || !finalscoreEl){
        return;
    }

}
inputEl.setAttribute("id", "initial");*/

quizContainerEl.parentNode.removeChild(quizContainerEl);
submitContainerEl.parentNode.removeChild(submitContainerEl);




