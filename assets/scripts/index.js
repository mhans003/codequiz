//QUESTIONS 

const questionSet = [
    {
        question: "Example Question: Which is red?",
        option0: "a. Red",
        option1: "b. Gray",
        option2: "c. Tan",
        option3: "d. Pink",
        answer: "a. Red",
        optionNumber: 4
    },
    {
        question: "Example Question: Which is yellow?",
        option0: "a. Red",
        option1: "b. Orange",
        option2: "c. Yellow",
        option3: "d. White",
        answer: "c. Yellow",
        optionNumber: 4
    },
    {
        question: "Example Question: Which is blue?",
        option0: "a. Orange",
        option1: "b. Blue",
        option2: "c. Pink",
        option3: "d. Black",
        answer: "b. Blue",
        optionNumber: 4
    }
];

//Page Elements
const contentContainer = document.querySelector("#content-container");  
let questionBox = document.querySelector("#question-box"); 
let startButton; 

//Timer Variables 
//Set a number of 1/100 seconds.
let startTime = 9000; 
let remainingTime = 0; 
let timerInterval = '';

//Score Variables
let totalCorrect; 
let totalIncorrect; 

//Document Timer Elements
let timerVar = document.querySelector("#timer"); 
let minOutput = document.querySelector("#min"); 
let secOutput = document.querySelector("#sec"); 
let hundredthsecOutput = document.querySelector("#hundredthsec"); 

//Set up the beginning of the game. 
init(); 

function setUpTimer() {
    //Prepare the timer for the first time.

    //Set the remaining time initially to the starting time.
    remainingTime = startTime; 

    //Display the timer. 
    timerVar.style.display = "initial";

    //Display the minutes and seconds for the first time.
    minOutput.innerHTML = getMinutes(); 
    secOutput.innerHTML = getSeconds(); 
    hundredthsecOutput.innerHTML = getHundredthseconds(); 

    //Set the interval for every 1/100 second.
    timerInterval = setInterval(countDown, 10); 
}

//Access the minutes in the appropriate format using the remaining time left. 
function getMinutes() {
    //Convert hundredth seconds to minutes and disregard the fractional part of the quotient by rounding down. 
    let minutes = Math.floor(remainingTime / 6000); 

    //See if an extra zero is needed for formatting. 
    if(minutes < 10) { 
        return `0${minutes}`; 
    } else {
        return minutes; 
    }
    
}

//Access the seconds in the appropriate format using the remaining time left.
function getSeconds() {
    //Convert remaining hundredth seconds to seconds, then find the number of seconds within the current minute by accessing the remainder of the unit conversion from seconds to minutes.
    let seconds = (Math.floor(remainingTime / 100) % 60); 

    //See if an extra zero is needed for formatting. 
    if(seconds < 10) {
        return `0${seconds}`;
    } else {
        return seconds; 
    }
}

//Access the number of hundredth seconds in the appropriate format using the remaining time left. 
function getHundredthseconds() { 
    //Take the remaining time of hundredth seconds and find the number of hundredth seconds within the current second by accessing the remainder of the unit conversion from hundredth seconds to seconds.
    let hundredthseconds = Math.floor(remainingTime % 100); 

    //See if an extra zero are needed for formatting.
    if(hundredthseconds < 10) {
        return `0${hundredthseconds}`; 
    } else {
        return hundredthseconds; 
    }
}

//Count down one second from the remaining time on each tick.
function countDown() {
    remainingTime--; 

    //Output the new minutes and seconds in the appropriate format.
    minOutput.innerHTML = getMinutes(); 
    secOutput.innerHTML = getSeconds(); 
    hundredthsecOutput.innerHTML = getHundredthseconds(); 

    //If the timer has reached zero, end it. 
    if(remainingTime < 1) {
        endTimer();
    }
}

function endTimer() {
    //End the game 
    clearInterval(timerInterval); 
    endGame(); 
}

function clearTimer() {
    timerVar.style.display = "none"; 
}

//GAME FUNCTIONS

function startGame() {
    startButton.style.display = "none";
    setUpTimer(); 
    
    //Generate the first question
    generateQuestion(); 
}

function endGame() {
    //End game conditions here 

    //Display score form 

    //When submitted, JSON.stringify object to store

    //When retrieving, JSON.parse to turn back to object 
}

function generateQuestion() {

    //Clear the question box.
    questionBox.innerHTML = ""; 

    //Determine which question is selected.
    let randomNumber = Math.floor(Math.random() * questionSet.length); 
    let selectedQuestion = questionSet[randomNumber]; 

    //Generate question div.
    let question = document.createElement("div");
    question.classList.add("question"); 
    question.innerText = selectedQuestion.question; 

    //Generate answer box. 
    let answerBox = document.createElement("div"); 
    answerBox.classList.add("container");
    
    //Generate each option and add them to the answer box. 
    for(let thisOption = 0; thisOption < selectedQuestion.optionNumber; thisOption++) {
        let optionKey = `option${thisOption}`; 
        let option = document.createElement("div"); 
        option.classList.add("answer-option"); 
        
        //check if this is the correct answer 
        if(selectedQuestion[optionKey] === selectedQuestion.answer) {
            //option.classList.add("is-correct"); 
            option.setAttribute("correct-value", `${selectedQuestion.answer}`); 
        } else {
            //option.classList.add("is-incorrect"); 
            option.setAttribute("correct-value", `${selectedQuestion.answer}`)
        }

        //Make the button clickable.
        option.addEventListener("click", checkAnswer); 

        //Set the inner text of the option div and put it into the answer box. 
        option.innerText = selectedQuestion[optionKey]; 
        answerBox.appendChild(option); 
    }

    //Add the question to the question box.
    questionBox.appendChild(question); 

    //Add the answer box to the question box.
    questionBox.appendChild(answerBox); 

}

function checkAnswer(event) {
    //console.log("Correct answer: " + event.target.getAttribute("correct-value")); 
    //console.log("This answer: " + event.target.innerText); 
    //console.log(event.target.getAttribute("correct-value") === event.target.innerText); 

    if(event.target.getAttribute("correct-value") === event.target.innerText) {
        totalCorrect++; 
        console.log(`total correct: ${totalCorrect}`); 

        //generate question again here? 
        generateQuestion(); 
    } else {
        totalIncorrect++; 
        console.log(`total incorrect: ${totalIncorrect}`); 

        //Reduce the time left over by 5 seconds. 
        remainingTime -= 500; 

        //make this one red and inactive 
        event.target.removeEventListener("click", checkAnswer); 
        event.target.classList.add("is-incorrect"); 
    }

}

//Initiate the beginning of the game. 
function init() {
    totalCorrect = 0; 
    totalIncorrect = 0; 
    contentContainer.innerHTML = '<button id="start-timer" class="btn btn-primary btn-lg" display="initial">Start Timer</button>'; 
    startButton = document.querySelector("#start-timer");
    startButton.addEventListener("click", startGame);
}

//Events
