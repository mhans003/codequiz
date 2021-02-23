//QUESTIONS 

const questionSet = [
    {
        question: "Placeholder",
        option0: "a. ",
        option1: "b. ",
        option2: "c. ",
        option3: "d.",
        answer: "d.",
        optionNumber: 4
    }
];

//Prepare the JSON and parsed versions of the question set. 
let questionsLength = questionSet.length;  
let JSONquestions = JSON.stringify(questionSet);
let parsedquestions = JSON.parse(JSONquestions); 

//Use a function based on the Fisher-Yates shuffle to shuffle the array. 
function shuffleQuestions(questions) {
    //Starting at the end of the array, iterate backwards. 
    for (let currentIndex = questions.length - 1; currentIndex > 0; currentIndex--) {
      //Create a random number between 0 and the current index. 
      let randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      //Shuffle the items in the array. 
      [questions[currentIndex], questions[randomIndex]] = [questions[randomIndex], questions[currentIndex]];
    }
}