/*
Acceptancve Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score

1. Make an array with quiz questions with answers
2. Create a view Highscores page
3. Add an event listener
4. create score variable
5. Set the timer
*/

//my variables

var finalScore = document.querySelector("#finalScore");
var startButton = document.querySelector("#start-button");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerBtn1El = document.getElementById("option-0");
var answerBtn2El = document.getElementById("option-1");
var answerBtn3El = document.getElementById("option-2");
var answerBtn4El = document.getElementById("option-3");

var score=0;
var timer=60;
var currentQuestionIndex=0;

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
            { text:"Symbolic representation", correct: false},
            { text:"Scaffolding", correct: false},
            { text:"Egocentric thinking", correct: false},],
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
            { text:  "Nucleus", correct: false},
            { text: "Synapse", correct: false},],
        }
];




//function to start the Game
function startQuiz () {
    //console.log('Started')
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    //Start CLock

    //Display the next Question 
    setNextQuestion()
}

//function for setting the next question
function setNextQuestion () {
    console.log("currentQuestionIndex", currentQuestionIndex);
    console.log(quizList[currentQuestionIndex]);
    //Display Question 
    questionEl.textContent = quizList[currentQuestionIndex].question;
    //Set Answer 1 text and value for the button 
    answerBtn1El.textContent = quizList[currentQuestionIndex].answers[0].text;
    answerBtn1El.value = quizList[currentQuestionIndex].answers[0].correct;
    //Set Answer 1 text and value for the button 
    answerBtn2El.textContent = quizList[currentQuestionIndex].answers[1].text;
    answerBtn2El.value = quizList[currentQuestionIndex].answers[1].correct;

    //Set Answer 1 text and value for the button 
    answerBtn3El.textContent = quizList[currentQuestionIndex].answers[2].text;
    answerBtn3El.value = quizList[currentQuestionIndex].answers[2].correct;

    //Set Answer 1 text and value for the button 
    answerBtn4El.textContent = quizList[currentQuestionIndex].answers[3].text;
    answerBtn4El.value = quizList[currentQuestionIndex].answers[3].correct;


}  
//function for selecting the right answer
function selectAnswer () {
    
    console.log ("selectingAnswers is clicked", this.textContent , this.value );
    //logic to compare ans right/wrong 
    //comparision condition
// if( ){
//     // increse the score 
//     //alert keep going 
// }else { 
//     //deduct time fro mthe clock varaible 
//     //alert wrong ans 
// }
    //move to the nextQuestion 
    currentQuestionIndex++; 
    console.log("moving on..........", currentQuestionIndex, "quiz list length", quizList.length);

    //CHeck if its the last question 
    if (currentQuestionIndex === quizList.length) {
        alert ("Game Over!")
        //make thesubmit score form visible submitScore

        
    }else {

        //Display the next Question i{nstead of a for loop 
        setNextQuestion()
    }

}

function submitScore(){
    //save the score in lOcal STorage 
}

//event Listener
startButton.addEventListener('click', startQuiz) 
answerBtn1El.addEventListener('click', selectAnswer)
answerBtn2El.addEventListener('click', selectAnswer)
answerBtn3El.addEventListener('click', selectAnswer)
answerBtn4El.addEventListener('click', selectAnswer)
document.getElementById("finalScore").addEventListener('click', submitScore)