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
    },
    {
        question: "Which is not a way to add 1 to variable n?",
        option0: "a. n+",
        option1: "b. n++",
        option2: "c. n = n + 1",
        option3: "d. These can all be used",
        answer: "a. n+",
        optionNumber: 4
    },
    {
        question: "Which operator returns the remainder of a division problem?",
        option0: "a. /",
        option1: "b. %",
        option2: "c. !",
        option3: "d. :",
        answer: "b. %",
        optionNumber: 4
    },
    {
        question: "Which of the following is a logical operator in Javascript meaning NOT?",
        option0: "a. #",
        option1: "b. &",
        option2: "c. $",
        option3: "d. !",
        answer: "d. !",
        optionNumber: 4
    },
    {
        question: "Which of the following is a logical operator in Javascript meaning OR?",
        option0: "a. &&",
        option1: "b. ||",
        option2: "c. ##",
        option3: "d. ??",
        answer: "b. ||",
        optionNumber: 4
    },
    {
        question: "What does DOM stand for?",
        option0: "a. Direct Oriented Methods",
        option1: "b. Directed Operator Mechanism",
        option2: "c. Data Output Mode",
        option3: "d. Document Object Model",
        answer: "d. Document Object Model",
        optionNumber: 4
    },
    {
        question: "Which of the following DOM method calls would select an HTML element with a class of 'main'?",
        option0: "a. document.querySelector('.main')",
        option1: "b. document.getElementById('main')",
        option2: "c. document.innerText('main')",
        option3: "d. document.querySelector('#main')",
        answer: "a. document.querySelector('.main')",
        optionNumber: 4
    }
];

//Prepare the JSON and parsed versions of the question set. 
let JSONquestions = JSON.stringify(questionSet);
let parsedquestions = JSON.parse(JSONquestions); 