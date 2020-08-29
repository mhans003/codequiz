//QUESTIONS 

const questionSet = [
    {
        question: "Using jQuery, which of the following would select an element with an ID of 'target'?",
        option0: "a. $(target)",
        option1: "b. $('target')",
        option2: "c. $('.target')",
        option3: "d. $('#target')",
        answer: "d. $('#target')",
        optionNumber: 4
    },
    {
        question: "Which of these string methods splits a string into a returned array of substrings by taking a separator?",
        option0: "a. slice()",
        option1: "b. substr()",
        option2: "c. split()",
        option3: "d. substring()",
        answer: "c. split()",
        optionNumber: 4
    },
    {
        question: "Which kind of variable must be assigned a value upon declaration?",
        option0: "a. var",
        option1: "b. let",
        option2: "c. const",
        option3: "d. All of the Above",
        answer: "c. const",
        optionNumber: 4
    }
];

let JSONquestions = JSON.stringify(questionSet);
console.log(JSONquestions); 
let parsedquestions = JSON.parse(JSONquestions); 
console.log(parsedquestions);  