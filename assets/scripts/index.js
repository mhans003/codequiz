//Page Elements
const contentContainer = document.querySelector("#content-container");  
let questionBox = document.querySelector("#question-box"); 
let startButton; 
const correctScore = document.querySelector("#correct"); 
const incorrectScore = document.querySelector("#incorrect"); 
const colon = document.querySelectorAll(".colon"); 
const highscoreButton = document.querySelector("#highscore-button")
const highscoreOutput = document.querySelector("#highscore-output"); 
const submitScoreModal = document.querySelector("#submitscore-modalbody"); 
const submitScoreHeading = document.querySelector("#scoreSubmittedModalLabel"); 
const resetButton = document.querySelector("#reset-button"); 
const chime = document.querySelector("#chime"); 

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
    colon.forEach((colon) => {
        colon.style.display = "initial"; 
    });

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

    //Show reset button.
    resetButton.style.display = "initial";
    
    //Hide the timer
    timerVar.style.display = "none";
    colon.forEach((colon) => {
        colon.style.display = "none"; 
    });

    //Display score form 
    displayFinalScore(); 

    //Disable question box
    questionBox.innerHTML = ""; 
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
    //question.innerHTML = `<span class="incorrect-text">${selectedQuestion.question}</span>`; 

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
        //option.innerHTML = `<span class="incorrect-text">${selectedQuestion[optionKey]}</span>`; 
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
        chime.play(); 
        totalCorrect++; 
        //console.log(`total correct: ${totalCorrect}`); 

        //generate question again here? 
        generateQuestion(); 
    } else {
        totalIncorrect++; 
        //console.log(`total incorrect: ${totalIncorrect}`); 
        

        //Reduce the time left over by 5 seconds. 
        remainingTime -= 500; 

        //make this one red and inactive 
        event.target.removeEventListener("click", checkAnswer); 
        event.target.classList.add("is-incorrect"); 
        //event.target.innerHTML += `<span class="minus-five float-right">-5 Seconds</span>`; 
    }
    updateScore(); 

}

function updateScore() {
    correctScore.innerHTML = `<i class="fas fa-thumbs-up"></i>: ${totalCorrect}`; 
    incorrectScore.innerHTML = `<i class="fas fa-thumbs-down"></i>: ${totalIncorrect}`; 
}

function displayFinalScore() {

    //Clear the previous items (if any from previous games).
    contentContainer.innerHTML = ""; 

    //Create a container div to hold the final score.
    let scoreDiv = document.createElement("div"); 
    
    //Create h2 to show that time is up.
    let timeUp = document.createElement("h2"); 
    timeUp.innerHTML = `Time's Up!`; 
    timeUp.style.animation = "popout 0.5s"; 

    //Create elements to show the final score.
    let finalCorrect = document.createElement("p"); 
    let finalIncorrect = document.createElement("p"); 
    let finalScore = document.createElement("p"); 
    finalCorrect.classList.add("correct"); 
    finalIncorrect.classList.add("incorrect"); 
    finalCorrect.innerHTML = `Final Correct: ${totalCorrect}`; 
    finalIncorrect.innerHTML = `Final Incorrect: ${totalIncorrect}`; 
    finalScore.innerHTML = `Final Score: ${totalCorrect - totalIncorrect}`; 
    finalCorrect.style.animation = "popout 0.5s";
    finalIncorrect.style.animation = "popout 0.5s";
    finalScore.style.animation = "popout 0.5s";

    //Create a form and its components to be held within the container div. 
    let formDiv = document.createElement("div");
    let scoreForm = document.createElement("form"); 
    let formGroupDiv = document.createElement("div"); 
    //let nameLabel = document.createElement("label"); 
    let nameInput = document.createElement("input"); 
    let submitButton = document.createElement("button"); 

    //Add classes and attributes to the div and form components.
    scoreDiv.classList.add("container"); 

    formDiv.classList.add("form-group"); 

    formGroupDiv.classList.add("form-group"); 

    //nameLabel.setAttribute("for", "input-name"); 
    //nameLabel.innerHTML = `Enter Your Name:`;

    nameInput.classList.add("form-control"); 
    nameInput.setAttribute("type", "text"); 
    nameInput.setAttribute("id", "input-name"); 
    nameInput.setAttribute("placeholder", "Enter Your Name"); 
    nameInput.style.animation = "popout 0.5s";

    submitButton.classList.add("btn", "btn-primary", "btn-lg"); 
    submitButton.setAttribute("type", "button"); 
    submitButton.setAttribute("data-toggle", "modal"); 
    submitButton.setAttribute("data-target", "#scoreSubmittedModal"); 
    submitButton.innerHTML = "Submit"; 

    //Append items, and append score div to page.
    //formGroupDiv.appendChild(nameLabel); 
    formGroupDiv.appendChild(nameInput); 

    scoreForm.appendChild(formGroupDiv); 
    scoreForm.appendChild(submitButton); 

    scoreDiv.appendChild(scoreForm); 
    contentContainer.appendChild(timeUp); 
    contentContainer.appendChild(finalCorrect); 
    contentContainer.appendChild(finalIncorrect); 
    contentContainer.appendChild(finalScore); 
    contentContainer.appendChild(scoreDiv); 

    //Add event listener to submit button that saves the stringified user info (name/score) to local storage.
    submitButton.addEventListener("click", function submitScore() {

        if(nameInput.value) {
            console.log(`Score being submitted for ${nameInput.value}`);
            let userInfo = {
                score: totalCorrect - totalIncorrect
            }
            localStorage.setItem(nameInput.value, JSON.stringify(userInfo)); 

            //Delete the used form.
            scoreDiv.style.display = "none";

            submitScoreHeading.innerText = "Success!"; 
            submitScoreModal.innerText = "Score Saved!"; 
        } else {
            submitScoreHeading.innerText = "Error"; 
            submitScoreModal.innerText = "Make sure you write in a name!"; 
        }
         
    }); 

}

//Initiate the beginning of the game. 
function init() {
    totalCorrect = 0; 
    totalIncorrect = 0; 
    correctScore.innerHTML = "<i class='fas fa-thumbs-up'></i>: --"; 
    incorrectScore.innerHTML = "<i class='fas fa-thumbs-down'></i>: --"; 
    //Keep timer hidden.
    timerVar.style.display = "none";
    colon.forEach((colon) => {
        colon.style.display = "none"; 
    });
    resetButton.style.display = "none"; 
    contentContainer.innerHTML = '<button id="start-timer" class="btn btn-primary btn-lg" display="initial">Start Timer <i class="far fa-clock"></i></button>';
    startButton = document.querySelector("#start-timer");
    startButton.addEventListener("click", startGame);
}

function resetGame() {
    init(); 
}

function displayHighScores() {

    //Clear the high score modal to start. 
    highscoreOutput.innerHTML = ""; 

    //Create an array to keep track of scores. 
    let scores = []; 
    console.log(scores); 

    //Access the scores from local memory and save to the scores array. 
    for(let i = 0; i < localStorage.length; i++) {
        //console.log(localStorage.key(i)); 
        console.log(localStorage.key(i)); 
        //console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
        let thisScore = JSON.parse(localStorage.getItem(localStorage.key(i))); 
        scores.push({"user":localStorage.key(i),"score":thisScore.score}); 
        //console.log(`Name: ${thisScore.name}. Their score: ${thisScore.}`)
        //highscoreOutput.innerHTML += `${localStorage.key(i)}: ${thisScore.score}`; 
        //highscoreOutput.innerHTML += "<br>"
    }

    //Sort the scores array by score from greatest to least. 
    scores.sort(function(a,b) {
        return b.score - a.score; 
    }); 

    //For each sorted score, output its user and score to the modal. 
    scores.forEach((thisScore) => {
        highscoreOutput.innerHTML += `${thisScore.user}: ${thisScore.score}`; 
        highscoreOutput.innerHTML += "<br>"; 
    }); 

}

//Events

highscoreButton.addEventListener("click", displayHighScores); 
resetButton.addEventListener("click", resetGame); 
