//QUESTIONS 

const questionSet = [
    {
        question: "Example Question: Which is red?",
        a: "a. Red",
        b: "b. Blue",
        c: "c. Yellow",
        d: "d. Purple",
        answer: "a. Red"
    },
    {
        question: "Example Question: Which is yellow?",
        a: "a. Red",
        b: "b. Blue",
        c: "c. Yellow",
        d: "d. Purple",
        answer: "c. Yellow"
    },
    {
        question: "Example Question: Which is blue?",
        a: "a. Red",
        b: "b. Blue",
        c: "c. Yellow",
        d: "d. Purple",
        answer: "b. Blue"
    }
];

//Page Elements
const startButton = document.querySelector("#start-timer");

//Events
startButton.addEventListener("click", startGame); 

//Timer Variables 
let startTime = 60; 
let remainingTime = 0; 
let timerInterval = '';

//Document Timer Elements
let timerVar = document.querySelector("#timer"); 
let minOutput = document.querySelector("#min"); 
let secOutput = document.querySelector("#sec"); 

function setUpTimer() {
    //Prepare the timer for the first time.

    //Set the remaining time initially to the starting time.
    remainingTime = startTime; 

    //Hide start button after timer starts and display the timer. 
    startButton.style.display = "none";
    timerVar.style.display = "initial";

    //Display the minutes and seconds for the first time.
    minOutput.innerHTML = getMinutes(); 
    secOutput.innerHTML = getSeconds(); 

    //Set the interval for every second.
    timerInterval = setInterval(countDown, 1000); 
}

//Access the minutes in the appropriate format using the remaining seconds left. 
function getMinutes() {
    //Convert seconds to minutes and disregard the fractional part of the quotient by rounding down.
    let minutes = Math.floor(remainingTime / 60); 

    //See if an extra zero is needed for formatting. 
    if(minutes < 10) { 
        return `0${minutes}`; 
    } else {
        return minutes; 
    }
    
}

//Access the seconds in the appropriate format using the remaining seconds left.
function getSeconds() {
    //Find the number of seconds left within the current minute by finding the remainder when converting seconds to minutes using division.
    let seconds = remainingTime % 60; 

    //See if an extra zero is needed for formatting. 
    if(seconds < 10) {
        return `0${seconds}`;
    } else {
        return seconds; 
    }
}

//Count down one second from the remaining time on each tick.
function countDown() {
    remainingTime--; 

    //Output the new minutes and seconds in the appropriate format.
    minOutput.innerHTML = getMinutes(); 
    secOutput.innerHTML = getSeconds(); 

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
    setUpTimer(); 
}

function endGame() {
    //End game conditions here 

    //Display score form 

    //When submitted, JSON.stringify object to store

    //When retrieving, JSON.parse to turn back to object 
}