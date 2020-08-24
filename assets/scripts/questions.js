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

let JSONquestions = JSON.stringify(questionSet);
console.log(JSONquestions); 
let parsedquestions = JSON.parse(JSONquestions); 
console.log(parsedquestions);  