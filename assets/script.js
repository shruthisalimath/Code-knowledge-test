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
        "correct" : "3"
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
var startPage = document.getElementById("start-page");
var startQuizBtn = document.getElementById("start-quiz");
var timerElement = document.getElementById("timer");
var quizInfoElement = document.getElementById("quizinfo");
var answerVerifyEl = document.getElementById("verify");
var quizContainerEl = document.getElementById("quizContainer");
var submitContainerEl = document.getElementById("submitContainer");
var finalscoreEl = document.getElementById("finalscore");
var highscoreBtnEl = document.getElementById("highscore");
//quizContainerEl.style.display = none;
//submitContainerEl.style.display = none;

var score;
var highScore;
var currentQuestion;
var isAllDone = false;

//timer set

var timerCount;
var penalty =10;

startQuizBtn.addEventListener("click", startQuiz);



function startQuiz() {
    timerCount = 75;
    startQuizBtn.hidden = true;
    quizInfoElement.hidden = true;
    score = 0;
    
    loadNextQuestion();
    
    startTimer();
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
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
        gameOver();
      }
    }, 1000);
  }

  function allDone() {
    alert("ALL DONE ANSWERING");
  }
  function gameOver() {
    alert("GAME OVER");
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

highscoreBtnEl.addEventListener("click", viewHighScore);

function viewHighScore() {

}

function choiceMade1() {
    if(1 == questionList[currentQuestion].Correct) {
        
        answerVerifyEl.textContent = "Correct!";
        score += 20;
    } else {
        
        answerVerifyEl.textContent = "Wrong!";
        penaliseTime();
    }
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
        submitContainerEl.style.display = block;
        quizContainerEl.style.display = none;
    }
    
};





