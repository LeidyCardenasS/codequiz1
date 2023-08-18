// Array of objects storing questions and answers
var questions = [
    { question: "Question #1: Javascript is an _______ language?", answers: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"], correct: "Object-Oriented" },
    { question: "Question #2: What does HTML stand for?", answers: ["Hyper Text Preprocessor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"], correct: "Hyper Text Markup Language" },
    { question: "Question #3: What does CSS stand for?", answers: ["Cascading Style Sheet", "Common Style Sheet", "Colorful Style Sheet", "Computer Style Sheet"], correct: "Cascading Style Sheet" },
    { question: "Question #4: Which of the following keywords is usedne a variable in Javascript?", answers: ["var", "let", "Both A and B", "None of the above"], correct: "Both A and B" },
];
  var highscoreListLocal = [];
  var highscoreList = [];
  var gameResult = {};
  var questionLog = 0;
  var playerScore = 0;
  var timer,
    counter = 60;
  var player = {};
  var playerName = "";
  var trackEndGame = 0;
  
  // Displays question
  function showQuestion() {
    document.getElementById("question").innerHTML =
        questions[questionLog].question;
    document.getElementById("answer-1").innerHTML =
        questions[questionLog].answers[0];
    document.getElementById("answer-2").innerHTML =
        questions[questionLog].answers[1];
    document.getElementById("answer-3").innerHTML =
        questions[questionLog].answers[2];
    document.getElementById("answer-4").innerHTML =
        questions[questionLog].answers[3];
  }
  
  // Countdown function
  function countdown() {
    document.getElementById("counter").innerHTML = counter;
  timer = setInterval(function () {
    counter--;
    //displaying timer in console to check bugs
    //console.log(counter);
    document.getElementById("counter").innerHTML = counter;
    if (counter === 0 && trackEndGame === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
  }
  
  // Function to end quiz/enter initials for score
  function endGame() {
    var quizScreen = document.getElementById("quizSection");
  var quizInstructions = document.getElementById("quizDirections");
  var timeLeft = document.getElementById("timerText");
  trackEndGame = 1;
  playerScore = counter;
  document.getElementsByClassName("countDown")
  quizInstructions.classList.add("invisible");
  quizScreen.classList.add("invisible");
  document.getElementById("result").innerHTML = ("YOU SCORED " + playerScore + "!");
  timeLeft.classList.add("invisible");
  }
  
  
  // Function to start the quiz
  function startGame() {
    var quizScreen = document.getElementById("quizSection");
    var quizInstructions = document.getElementById("quizDirections");
    var timerTime =  document.getElementById("timerText");
    timerTime.classList.remove("invisible");
    quizInstructions.classList.add("invisible");
    quizScreen.classList.remove("invisible");
    quizScreen.classList.add("startScreen");
    showQuestion();
  }
  
  // Click events to submit questions
  document.getElementById("answer-1").addEventListener("click", function () {
        if (this.textContent === questions[questionLog].correct) {
          console.log("correct");
          //show correct on result
          document.getElementById("result").innerHTML ="CORRECT!"
        } else {
          console.log("incorrect");
          //show result incorrect
          document.getElementById("result").innerHTML ="INCORRECT!"
          counter = counter - 10;
        }
        questionLog++;
        if (questionLog === questions.length) {
          endGame();
        } else {
          showQuestion();
        }
      });
  
  document.getElementById("answer-2").addEventListener("click", function () {
  if (this.textContent === questions[questionLog].correct) {
    console.log("correct");
    //show correct on result
    document.getElementById("result").innerHTML ="CORRECT!"
  } else {
    console.log("incorrect");
    //show result incorrect
    document.getElementById("result").innerHTML ="INCORRECT!"
    counter = counter - 10;
  }
  questionLog++;
  if (questionLog === questions.length) {
    endGame();
  } else {
    showQuestion();
  }
  });
  
  document.getElementById("answer-3").addEventListener("click", function () {
    if (this.textContent === questions[questionLog].correct) {
        console.log("correct");
        //show correct on result
        document.getElementById("result").innerHTML ="CORRECT!"
      } else {
        console.log("incorrect");
        //show result incorrect
        document.getElementById("result").innerHTML ="INCORRECT!"
    
        counter = counter - 10;
      }
      questionLog++;
      if (questionLog === questions.length) {
        endGame();
      } else {
        showQuestion();
      }
  });
  
  document.getElementById("answer-4").addEventListener("click", function () {
    if (this.textContent === questions[questionLog].correct) {
      console.log("correct");
      //show correct on result
      document.getElementById("result").innerHTML ="CORRECT!"
    } else {
      console.log("incorrect");
      //show result incorrect
      document.getElementById("result").innerHTML ="INCORRECT!"
  
      counter = counter - 10;
    }
    questionLog++;
    if (questionLog === questions.length) {
      endGame();
    } else {
      showQuestion();
    }
  });
  
  // Click event to start the game
  document.getElementById("startButton").addEventListener("click", startGame);
  document.getElementById("startButton").addEventListener("click", countdown);