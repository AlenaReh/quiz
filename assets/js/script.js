//sort the scores from high to low
//style score input
//Game Over?
//change alert style

//my variables
var startButton = document.querySelector("#start-button");
var questionContainerEl = document.getElementById("question-container");
var instructions = document.getElementById("instructions");
var cardEl = document.querySelector(".container");
var questionEl = document.getElementById("question");
var answerBtn1El = document.getElementById("option-0");
var answerBtn2El = document.getElementById("option-1");
var answerBtn3El = document.getElementById("option-2");
var answerBtn4El = document.getElementById("option-3");
var userInitials = document.querySelector("#initials");
var submitScore = document.querySelector("#submitScore");
var submitButton = document.getElementById("submitButton");

var score = 0;
var finalScore = [];
var initials = [];

var currentQuestionIndex = 0;
var userInitials = document.querySelector("#initials");
var timerEl = document.getElementById("timer");
var secondsLeft = 60;
var timerInterval;
//Quiz array
var quizList = [
  {
    question:
      "What research team was influential in their study of human sexual behavior and response?",
    answers: [
      { text: "Gilbert and Sullivan", correct: false },
      { text: "Crockett and Tubbs", correct: false },
      { text: "Masters and Johnson", correct: true },
      { text: "Proctor and Gamble", correct: false },
    ],
  },

  {
    question:
      "What phenomenon of developmental psychology occurs when a child (usually around 9 months) no longer ascribes to an 'out of sight, out of mind' view of the world?",
    answers: [
      { text: "Object permanence", correct: true },
      { text: "Symbolic representation", correct: false },
      { text: "Scaffolding", correct: false },
      { text: "Egocentric thinking", correct: false },
    ],
  },

  {
    question:
      "Asch's famous line experiment dealt with what central social psychological phenomenon?",
    answers: [
      { text: "Prejudice", correct: false },
      { text: "Conformity", correct: true },
      { text: "Authority", correct: false },
      { text: "Physical attractiveness", correct: false },
    ],
  },

  {
    question:
      "Which of the following is NOT considered one of the basic tastes - those given specific names?",
    answers: [
      { text: "Acerbic", correct: true },
      { text: "Bitter", correct: false },
      { text: "Sweet", correct: false },
      { text: "Sour", correct: false },
    ],
  },

  {
    question:
      "Which part of a neuron, whose name comes from the Greek for 'tree', extends from the cell body like a tree branch and receives stimuli from other neurons in the brain?",
    answers: [
      { text: "Synapse", correct: false },
      { text: "Axon", correct: false },
      { text: "Nucleus", correct: false },
      { text: "Dendrite", correct: true },
    ],
  },
];
var previousScoreList = JSON.parse(localStorage.getItem("highScoreList")) || [];

//function to start the Game
function startQuiz() {
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  //Start CLock
  timerInterval = setInterval(myTimer, 1000);
  //Display the next Question
  setNextQuestion();
}

//function for setting the next question
function setNextQuestion() {
  instructions.classList.add("hide");
  //Display Question
  questionEl.textContent = quizList[currentQuestionIndex].question;
  //Set Answer 1 text and value for the button
  answerBtn1El.textContent = quizList[currentQuestionIndex].answers[0].text;
  answerBtn1El.value = quizList[currentQuestionIndex].answers[0].correct;
  //Set Answer 2 text and value for the button
  answerBtn2El.textContent = quizList[currentQuestionIndex].answers[1].text;
  answerBtn2El.value = quizList[currentQuestionIndex].answers[1].correct;
  //Set Answer 3 text and value for the button
  answerBtn3El.textContent = quizList[currentQuestionIndex].answers[2].text;
  answerBtn3El.value = quizList[currentQuestionIndex].answers[2].correct;
  //Set Answer 4 text and value for the button
  answerBtn4El.textContent = quizList[currentQuestionIndex].answers[3].text;
  answerBtn4El.value = quizList[currentQuestionIndex].answers[3].correct;
}

//function for selecting the right answer
function selectAnswer() {
  //logic to compare right/wrong answers
  if (this.value === "true") {
    //increase the score
    score = secondsLeft;
    //alert keep going
    alert("You got it!");
  } else {
    //deduct time from the clock varaible
    secondsLeft = secondsLeft - 5;
    //alert wrong answer ----change alerts
    alert("Ooops... wrong answer");
  }
  //move to the nextQuestion
  currentQuestionIndex++;

  //Check if it's the last question
  if (currentQuestionIndex === quizList.length) {
    //stop the clock???
    clearInterval(timerInterval);

    alert("Your final score is " + secondsLeft + " points");
    document.querySelector("#finalScore").textContent = secondsLeft;
    cardEl.classList.add("hide");
    startButton.classList.add("hide");
    submitScore.classList.remove("hide");
  } else {
    //Display the next Question instead of a for loop
    setNextQuestion();
  }
}

//Timer
function myTimer() {
  secondsLeft--;
  timerEl.textContent = "Time: " + secondsLeft;
  if (secondsLeft === 0) {
    clearInterval(timerInterval);
    confirm("You're time is over! Another try?");
    if (r == true) {
    } else {
      txt = "Good Bye!";
    }
  }
}

function savePlayerScore() {
  initials = document.querySelector("#initials").value;
  finalScore = document.querySelector("#finalScore").textContent;

  if (initials === "") {
    alert("Initials cannot be blank");
  } else if (finalScore === "") {
    alert("Final Score cannot be blank");
  } else {
    var playerScore = {
      initials: initials,
      finalScore: finalScore,
    };
    console.log("playerScore", playerScore);
    //Apend new Score to the exisiting List
    previousScoreList.push(playerScore);
    //save the score in local Storage

    localStorage.setItem("highScoreList", JSON.stringify(previousScoreList));
    submitScore.classList.remove("hide");
    alert("Great! You have submited your score", "Final Score Submeted");
    //Redirect to the next Page
    window.location.href = "scores.html";
  }
}

//event Listeners
startButton.addEventListener("click", startQuiz);
answerBtn1El.addEventListener("click", selectAnswer);
answerBtn2El.addEventListener("click", selectAnswer);
answerBtn3El.addEventListener("click", selectAnswer);
answerBtn4El.addEventListener("click", selectAnswer);
submitButton.addEventListener("click", savePlayerScore);
