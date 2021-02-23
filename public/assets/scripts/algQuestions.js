//QUESTIONS 

const questionSet = [
    {
        question: "Which 'basic' sorting method tends to perform fastest on randomly ordered data?",
        option0: "a. Insertion",
        option1: "b. Selection",
        option2: "c. Bubble",
        option3: "d. Bogo",
        answer: "a. Insertion",
        optionNumber: 4
    },
    {
        question: "Which 'basic' sorting method tends to perform slowest on nearly-sorted data?",
        option0: "a. Insertion",
        option1: "b. Selection",
        option2: "c. Bubble",
        option3: "d. Shell",
        answer: "b. Selection",
        optionNumber: 4
    },
    {
        question: "Which common sorting algorithm relies on a helper function which orders data around a 'pivot' element?",
        option0: "a. Selection",
        option1: "b. Bubble",
        option2: "c. Merge",
        option3: "d. Quick",
        answer: "d. Quick",
        optionNumber: 4
    },
    {
        question: "Which common sorting algorithm iteratively/recursively breaks an array into single-element arrays then reconstructs them?",
        option0: "a. Merge",
        option1: "b. Bubble",
        option2: "c. Quick",
        option3: "d. Insertion",
        answer: "a. Merge",
        optionNumber: 4
    },
    {
        question: "Which sorting algorithm iterates through an array, comparing neighboring elements and repeatedly shifting larger values towards the end?",
        option0: "a. Selection",
        option1: "b. Insertion",
        option2: "c. Bubble",
        option3: "d. Quick",
        answer: "c. Bubble",
        optionNumber: 4
    },
    {
        question: "Which sorting algorithm repeatedly iterates through the unsorted section of an array to search for a 'next' value in the sorted section?",
        option0: "a. Insertion",
        option1: "b. Selection",
        option2: "c. Bubble",
        option3: "d. Merge",
        answer: "b. Selection",
        optionNumber: 4
    },
    {
        question: "Which sorting algorithm repeatedly removes elements from the unsorted section of an array to find the correct location in the sorted section?",
        option0: "a. Insertion",
        option1: "b. Selection",
        option2: "c. Bubble",
        option3: "d. Merge",
        answer: "a. Insertion",
        optionNumber: 4
    },
    {
        question: "Which sorting algorithm does NOT have an average time complexity of O(n log(n))?",
        option0: "a. Heap",
        option1: "b. Selection",
        option2: "c. Merge",
        option3: "d. Quick",
        answer: "b. Selection",
        optionNumber: 4
    },
    {
        question: "Which sorting algorithm does NOT have an average time complexity of O(n^2)?",
        option0: "a. Bubble",
        option1: "b. Insertion",
        option2: "c. Selection",
        option3: "d. Merge",
        answer: "d. Merge",
        optionNumber: 4
    },
    {
        question: "Which efficient sorting algorithm CAN potentially drop to time complexity O(n^2) in its worst case?",
        option0: "a. Quick",
        option1: "b. Merge",
        option2: "c. Heap",
        option3: "d. Radix",
        answer: "a. Quick",
        optionNumber: 4
    },
    {
        question: "Which efficient sorting algorithm CAN potentially drop to time complexity O(n^2) in its worst case?",
        option0: "a. Quick",
        option1: "b. Merge",
        option2: "c. Heap",
        option3: "d. Radix",
        answer: "a. Quick",
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