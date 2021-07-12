//Reset Score 
//stop the timer
//scores.html
//shuffle the right answers

//my variables
var userInitials = document.querySelector("#initials");
var submitScore = document.querySelector("#submitScore");
var startButton = document.querySelector("#start-button");
var questionContainerEl = document.getElementById("question-container");
var instructions = document.getElementById("instructions");
var cardEl = document.querySelector(".container")
var questionEl = document.getElementById("question");
var answerBtn1El = document.getElementById("option-0");
var answerBtn2El = document.getElementById("option-1");
var answerBtn3El = document.getElementById("option-2");
var answerBtn4El = document.getElementById("option-3");

var score=0;
var finalScore = [];
var storedWins = [];

var currentQuestionIndex=0;
var userInitials = document.querySelector("#initials");
var timerEl = document.getElementById("timer");
var secondsLeft = 60;

//Quiz array
var quizList = [
    {   question: "What research team was influential in their study of human sexual behavior and response?",
        answers: [
            { text: "Masters and Johnson", correct: true },
            { text: "Crockett and Tubbs", correct: false},
            { text: "Gilbert and Sullivan", correct: false},
            { text: "Proctor and Gamble", correct: false}],
        },

    {   question: "What phenomenon of developmental psychology occurs when a child (usually around 9 months) no longer ascribes to an 'out of sight, out of mind' view of the world?",
        answers: [
            { text: "Object permanence", correct: true },
            { text: "Symbolic representation", correct: false},
            { text: "Scaffolding", correct: false},
            { text: "Egocentric thinking", correct: false},],
        },

    {   question: "Asch's famous line experiment dealt with what central social psychological phenomenon?",
        answers: [
            { text: "Conformity", correct: true },
            { text: "Prejudice", correct: false},
            { text: "Authority", correct: false},
            { text: "Physical attractiveness", correct: false},],
        },

    {   question: "Which of the following is NOT considered one of the basic tastes - those given specific names?",
        answers: [
            { text: "Acerbic", correct: true },
            { text: "Bitter", correct: false},
            { text: "Sweet", correct: false},
            { text: "Sour", correct: false},],
        },

    {   question: "Which part of a neuron, whose name comes from the Greek for 'tree', extends from the cell body like a tree branch and receives stimuli from other neurons in the brain?",
        answers: [
            { text: "Dendrite", correct: true },
            { text: "Axon", correct: false},
            { text: "Nucleus", correct: false},
            { text: "Synapse", correct: false},],
        }
];

//function to start the Game
function startQuiz () {
    startButton.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    //Start CLock
    myTimer();
    //Display the next Question 
    setNextQuestion()
}

//function for setting the next question
function setNextQuestion () {
    instructions.classList.add('hide');
    //console.log("currentQuestionIndex", currentQuestionIndex);
    //console.log(quizList[currentQuestionIndex]);
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
function selectAnswer () {
    //logic to compare right/wrong answers
    if(this.value === "true"){
        //increase the score
        score = secondsLeft;
        //alert keep going 
        alert ("Keep going!")
    } else { 
        //deduct time from the clock varaible 
        secondsLeft = secondsLeft - 5;
    //alert wrong answer
        alert ("Wrong answer!");
    }
        //move to the nextQuestion 
        currentQuestionIndex++; 
    //Check if it's the last question 
    if (currentQuestionIndex === quizList.length) {
        alert ("Your final score is " + score + " points");

        cardEl.classList.add('hide');
        startButton.classList.add('hide');
        submitScore.classList.remove('hide');
    } else {
        //Display the next Question instead of a for loop 
        setNextQuestion()
    }
}

// Updates your score on the screen and sets win count to client storage
//function submitScore() {
  //  submitScore.setAttribute("style", "visibility: visible");
  //  score.textContent = scoreCounter;
  //  localStorage.setItem("scoreCounter", scoreCounter);
 // }

// Get stored value from client storage, if it exists
//var storedScore = localStorage.getItem("scoreCounter");
  //finalScore = storedWins;

//Render win count to page
//score.textContent = finalScore;

//Sumbiting your score ????
//function submitScore (){
   // submitScore.setAttribute("style", "visibility: visible");
//}

//function that would hide the quiz and stop the timer

//Timer
function myTimer() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert ("Game Over!")
        }
    }, 1000);
}

function submitScore(){
    //save the score in local Storage 
    var initials = localStorage.getItem("initials");
    var finalScore = localStorage.getItem("finalScore");
    if (!initials || !finalScore) {
        return;
      }
    
      userInitials.textContent = initials;
      finalScore.textContent = finalScore;
    }
    
    submitScore.addEventListener("click", function(event) {
      event.preventDefault();
    
      initials = document.querySelector("#initials").value;
      finalScore = document.querySelector("#finalScore").value;
    
      if (initials === "") {
        //alert ("Initials cannot be blank");???
      } else if (finalScore === "") {
        //alert ("Final Score cannot be blank");
      } else {
       // alert ("success", "Final Score Submeted");
    
        localStorage.setItem("initials", initials);
        localStorage.setItem("finalScore", finalScore);
        submitScore.classList.remove('hide');
      }
    });

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

//event Listener
startButton.addEventListener('click', startQuiz) 
answerBtn1El.addEventListener('click', selectAnswer)
answerBtn2El.addEventListener('click', selectAnswer)
answerBtn3El.addEventListener('click', selectAnswer)
answerBtn4El.addEventListener('click', selectAnswer)
document.getElementById("finalScore").addEventListener('click', submitScore)