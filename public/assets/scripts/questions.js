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
        question: "Which of the following is a logical operator in JavaScript meaning NOT?",
        option0: "a. #",
        option1: "b. &",
        option2: "c. $",
        option3: "d. !",
        answer: "d. !",
        optionNumber: 4
    },
    {
        question: "Which of the following is a logical operator in JavaScript meaning OR?",
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
    },
    {
        question: "When was JavaScript developed?",
        option0: "a. 1990",
        option1: "b. 1995",
        option2: "c. 2000",
        option3: "d. 2005",
        answer: "b. 1995",
        optionNumber: 4
    },
    {
        question: "In what kind of HTML tag can embedded JavaScript be placed?",
        option0: "a. <javascript>",
        option1: "b. <java>",
        option2: "c. <script>",
        option3: "d. <js>",
        answer: "c. <script>",
        optionNumber: 4
    },
    {
        question: "Items/values in an array are placed between which symbols?",
        option0: "a. []",
        option1: "b. ()",
        option2: "c. {}",
        option3: "d. <>",
        answer: "a. []",
        optionNumber: 4
    },
    {
        question: "What are values received by a function called?",
        option0: "a. strings",
        option1: "b. return statements",
        option2: "c. constants",
        option3: "d. arguments",
        answer: "d. arguments",
        optionNumber: 4
    },
    {
        question: "When a function is defined, what are the values placed in parentheses called?",
        option0: "a. indexes",
        option1: "b. parameters",
        option2: "c. iterators",
        option3: "d. conditionals",
        answer: "b. parameters",
        optionNumber: 4
    },
    {
        question: "Functions that are stored as properties in objects are called...",
        option0: "a. methods",
        option1: "b. vectors",
        option2: "c. constants",
        option3: "d. regular expressions",
        answer: "a. methods",
        optionNumber: 4
    },
    {
        question: "Things that happen to an element on a page due to a user or browser action are called...",
        option0: "a. triggers",
        option1: "b. events",
        option2: "c. action statements",
        option3: "d. driver functions",
        answer: "b. events",
        optionNumber: 4
    },
    {
        question: "What JavaScript data type is used to hold text, or a series of characters?",
        option0: "a. boolean",
        option1: "b. char",
        option2: "c. string",
        option3: "d. null",
        answer: "c. string",
        optionNumber: 4
    },
    {
        question: "Which value does not evaluate as a 'falsy' value in a boolean context?",
        option0: "a. 0",
        option1: "b. undefined",
        option2: "c. false",
        option3: "d. []",
        answer: "d. []",
        optionNumber: 4
    },
    {
        question: "Which array method removes the last element?",
        option0: "a. shift()",
        option1: "b. pop()",
        option2: "c. push()",
        option3: "d. reduce()",
        answer: "b. pop()",
        optionNumber: 4
    },
    {
        question: "Which of the following is the assignment operator?",
        option0: "a. =",
        option1: "b. =>",
        option2: "c. ===",
        option3: "d. !",
        answer: "a. =",
        optionNumber: 4
    },
    {
        question: "All of the following are types of JavaScript loops except:",
        option0: "a. for",
        option1: "b. while",
        option2: "c. during",
        option3: "d. do/while",
        answer: "c. during",
        optionNumber: 4
    },
    {
        question: "Which built-in JavaScript object contains the methods floor() and ceil()?",
        option0: "a. Arithmetic",
        option1: "b. Operator",
        option2: "c. Digits",
        option3: "d. Math",
        answer: "d. Math",
        optionNumber: 4
    },
    {
        question: "Which of the following types of statements can be used to perform different actions based on different conditions?",
        option0: "a. Alternate Statements",
        option1: "b. Iterative Statements",
        option2: "c. Switch Statements",
        option3: "d. Break Statements",
        answer: "c. Switch Statements",
        optionNumber: 4
    },
    {
        question: "What are sequences of characters that form a search pattern?",
        option0: "a. Regular Expressions",
        option1: "b. Conditional Statements",
        option2: "c. Iterative Variables",
        option3: "d. Continue Statements",
        answer: "a. Regular Expressions",
        optionNumber: 4
    },
    {
        question: "Which of the following is an example of a template literal?",
        option0: "a. var str = 'JavaScript is fun!';",
        option1: "b. var str = `${JavaScript} is fun!`;",
        option2: "c. var str = '/JavaScript/ is fun!';",
        option3: "d. var str = `[JavaScript] is fun!`;",
        answer: "b. var str = `${JavaScript} is fun!`;",
        optionNumber: 4
    },
    {
        question: "What of the following is the name of a syntax which can be converted to/from a JavaScript object and is used for storing and exchanging data?",
        option0: "a. Sass",
        option1: "b. jQuery",
        option2: "c. JSON",
        option3: "d. AJAX",
        answer: "c. JSON",
        optionNumber: 4
    },
    {
        question: "getTotal(); is an example of a...",
        option0: "a. Function Declaration",
        option1: "b. Function Parameter",
        option2: "c. Function Invocation",
        option3: "d. Function Argument",
        answer: "c. Function Invocation",
        optionNumber: 4
    },
    {
        question: "What kind of object method serves as a blueprint for creating many objects of the same class?",
        option0: "a. Constructor Functions",
        option1: "b. Conditional Statements",
        option2: "c. Ternary Operators",
        option3: "d. Regular Expressions",
        answer: "a. Constructor Functions",
        optionNumber: 4
    },
    {
        question: "To add a new property/method to an object construtor, what property is accessed?",
        option0: "a. initial",
        option1: "b. copy",
        option2: "c. this",
        option3: "d. prototype",
        answer: "d. prototype",
        optionNumber: 4
    },
    {
        question: "variable = (condition) ? expressionTrue : expressionFalse; is the format for the...",
        option0: "a. Switch Statement",
        option1: "b. Ternary Operator",
        option2: "c. For Loop",
        option3: "d. Object Constructor",
        answer: "b. Ternary Operator",
        optionNumber: 4
    },
    {
        question: "What would be the correct way to access an HTML element's background color using the DOM?",
        option0: "a. background-color",
        option1: "b. backgroundcolor",
        option2: "c. background_color",
        option3: "d. backgroundColor",
        answer: "d. backgroundColor",
        optionNumber: 4
    },
    {
        question: "When a variable/function is declared outside all other functions and code blocks, it is in the...",
        option0: "a. Global Scope",
        option1: "b. Block Scope",
        option2: "c. Local Scope",
        option3: "d. Universal Scope",
        answer: "a. Global Scope",
        optionNumber: 4
    },
    {
        question: "what is the JavaScript operator for multiplication?",
        option0: "a. x",
        option1: "b. #",
        option2: "c. *",
        option3: "d. ++",
        answer: "c. *",
        optionNumber: 4
    },
    {
        question: "True/false are called:",
        option0: "a. Conditional Statements",
        option1: "b. Boolean Values",
        option2: "c. Template Literals",
        option3: "d. Constants",
        answer: "b. Boolean Values",
        optionNumber: 4
    },
    {
        question: "Which of the following is not a JavaScript conditional statement?",
        option0: "a. switch",
        option1: "b. if",
        option2: "c. else",
        option3: "d. when",
        answer: "d. when",
        optionNumber: 4
    },
    {
        question: "In for(var i = 0; i < 10; i++), what is var i = 0?",
        option0: "a. Ending Condition",
        option1: "b. Counter Variable",
        option2: "c. Incrementer",
        option3: "d. Constant",
        answer: "b. Counter Variable",
        optionNumber: 4
    },
    {
        question: "Which JSON method converts a JavaScript object into a string?",
        option0: "a. JSON.string()",
        option1: "b. JSON.toString()",
        option2: "c. JSON.parse()",
        option3: "d. JSON.stringify()",
        answer: "d. JSON.stringify()",
        optionNumber: 4
    },
    {
        question: "Which statement can be used to display a pop-up to the user?",
        option0: "a. alert()",
        option1: "b. console.log()",
        option2: "c. message()",
        option3: "d. console.show()",
        answer: "a. alert()",
        optionNumber: 4
    },
    {
        question: "By default, the Math.random() function returns a number between:",
        option0: "a. 0-1000",
        option1: "b. 0-100",
        option2: "c. 0-10",
        option3: "d. 0-1",
        answer: "d. 0-1",
        optionNumber: 4
    },
    {
        question: "Which number method returns a string written with a certain number of specified decimal places?",
        option0: "a. toRound()",
        option1: "b. toDecimal()",
        option2: "c. toFixed()",
        option3: "d. toPlace()",
        answer: "c. toFixed()",
        optionNumber: 4
    },
    {
        question: "Which of the following is not a comparison operator?",
        option0: "a. <",
        option1: "b. >=",
        option2: "c. =",
        option3: "d. !==",
        answer: "c. =",
        optionNumber: 4
    },
    {
        question: "Which of the following properties signifies a non-legal number?",
        option0: "a. !Number",
        option1: "b. NaN",
        option2: "c. Null",
        option3: "d. 0",
        answer: "b. NaN",
        optionNumber: 4
    },
    {
        question: "Dividing a number by zero in the JavaScript console will return a value of:",
        option0: "a. NaN",
        option1: "b. Infinity",
        option2: "c. -Infinity",
        option3: "d. Undefined",
        answer: "b. Infinity",
        optionNumber: 4
    },
    {
        question: "What keyword is used to create a method in a class that is called directly on the class rather than on objects/instance?",
        option0: "a. void",
        option1: "b. const",
        option2: "c. static",
        option3: "d. let",
        answer: "c. static",
        optionNumber: 4
    },
    {
        question: "Which event property returns the element that triggered the event?",
        option0: "a. type",
        option1: "b. trigger",
        option2: "c. touch",
        option3: "d. target",
        answer: "d. target",
        optionNumber: 4
    },
    {
        question: "How is the location object accessed?",
        option0: "a. window.location",
        option1: "b. document.location",
        option2: "c. window.document.location",
        option3: "d. document.window.location",
        answer: "a. window.location",
        optionNumber: 4
    },
    {
        question: "Which object holds the document object?",
        option0: "a. console",
        option1: "b. window",
        option2: "c. location",
        option3: "d. localStorage",
        answer: "b. window",
        optionNumber: 4
    },
    {
        question: "Which symbol ends/separates JavaScript statements?",
        option0: "a. ;",
        option1: "b. ,",
        option2: "c. :",
        option3: "d. {}",
        answer: "a. ;",
        optionNumber: 4
    },
    {
        question: "What is the pattern for an arrow function?",
        option0: "a. func => () = {}",
        option1: "b. func () = {} =>",
        option2: "c. func {} = () =>",
        option3: "d. func = () => {}",
        answer: "d. func = () => {}",
        optionNumber: 4
    },
    {
        question: "What keyword passes a value back from a function?",
        option0: "a. let",
        option1: "b. switch",
        option2: "c. return",
        option3: "d. set",
        answer: "c. return",
        optionNumber: 4
    },
    {
        question: "What keyword refers to the object it belongs to?",
        option0: "a. return",
        option1: "b. this",
        option2: "c. break",
        option3: "d. const",
        answer: "b. this",
        optionNumber: 4
    },
    {
        question: "Which jQuery method can be used to send an asynchronous HTTP request?",
        option0: "a. $.request",
        option1: "b. $.ajax",
        option2: "c. $.http",
        option3: "d. $.async",
        answer: "b. $.ajax",
        optionNumber: 4
    },
    {
        question: "Which statement will evaluate TRUE?",
        option0: "a. [2,4,5] === [2,4,5]",
        option1: "b. null === undefined",
        option2: "c. null == undefined",
        option3: "d. 0 === null",
        answer: "c. null == undefined",
        optionNumber: 4
    },
    {
        question: "Which character is known as the escape character?",
        option0: "a. *",
        option1: "b. ?",
        option2: "c. |",
        option3: "d. \\",
        answer: "d. \\",
        optionNumber: 4
    },
    {
        question: "The default behavior by which variable declarations are moved to the top of the current scope is called...",
        option0: "a. hoisting",
        option1: "b. initializing",
        option2: "c. scoping",
        option3: "d. invoking",
        answer: "a. hoisting",
        optionNumber: 4
    },
    {
        question: "What is the default string representation of a JavaScript object?",
        option0: "a. '[object String]'",
        option1: "b. '[object Object]'",
        option2: "c. 'stringify({})'",
        option3: "d. 'stringify(Object)'",
        answer: "b. '[object Object]'",
        optionNumber: 4
    },
    {
        question: "JavaScript objects are essentially hashtables of name-value pairs where the names(keys) are...",
        option0: "a. null",
        option1: "b. linked lists",
        option2: "c. integers",
        option3: "d. strings",
        answer: "d. strings",
        optionNumber: 4
    },
    {
        question: "What is found down the 'end' of the object prototype chain?",
        option0: "a. []",
        option1: "b. {}",
        option2: "c. null",
        option3: "d. 0",
        answer: "c. null",
        optionNumber: 4
    },
    {
        question: "A function along with its surrounding state can be referred to in combination as a(n)...",
        option0: "a. closure",
        option1: "b. async function",
        option2: "c. anonymous function",
        option3: "d. global state",
        answer: "a. closure",
        optionNumber: 4
    },
    {
        question: "The Fetch API would be used to...",
        option0: "a. embed an external stylesheet",
        option1: "b. make HTTP requests",
        option2: "c. receive requests from a client",
        option3: "d. query a database",
        answer: "b. make HTTP requests",
        optionNumber: 4
    },
    {
        question: "Axios is different from Fetch for the following reasons. Which is NOT true?",
        option0: "a. Fetch sends 'body' while Axios sends 'data'",
        option1: "b. Fetch needs to use JSON.stringify while Axios doesn't",
        option2: "c. Fetch response contains an ok property while Axios doesn't",
        option3: "d. Fetch gets response data with data property while Axios requires json() function",
        answer: "d. Fetch gets response data with data property while Axios requires json() function",
        optionNumber: 4
    },
    {
        question: "An Immediately Invoked Function Expression...",
        option0: "a. runs as soon as it is defined",
        option1: "b. runs immediately but cannot return a single value",
        option2: "c. cannot be anonymous",
        option3: "d. are always hoisted before other functions",
        answer: "a. runs as soon as it is defined",
        optionNumber: 4
    },
    {
        question: "Which of the following is true about arrow functions?",
        option0: "a. They are optimal for using 'this' and to define object methods.",
        option1: "b. They should not be declared with const.",
        option2: "c. They aren't hoisted and must be defined before use.",
        option3: "d. The return keyword and curly brackets can always be omitted.",
        answer: "c. They aren't hoisted and must be defined before use.",
        optionNumber: 4
    },
    {
        question: "The code ['sample'].__proto__ will access...",
        option0: "a. Array.prototype",
        option1: "b. Object.prototype",
        option2: "c. String.prototype",
        option3: "d. null",
        answer: "a. Array.prototype",
        optionNumber: 4
    },
    {
        question: "The function expression var foo = function(){ alert('hello') } can NOT be...",
        option0: "a. defined",
        option1: "b. referenced using foo",
        option2: "c. invoked using foo()",
        option3: "d. hoisted",
        answer: "d. hoisted",
        optionNumber: 4
    },
    {
        question: "Which is a COMPARISON operator that requires equal value AND equal type?",
        option0: "a. =",
        option1: "b. ==",
        option2: "c. ===",
        option3: "d. !=",
        answer: "c. ===",
        optionNumber: 4
    },
    {
        question: "The symbols ? and : (used in conjunction with three operands) constitute the...",
        option0: "a. switch statement",
        option1: "b. ternary operator",
        option2: "c. increment operator",
        option3: "d. modulus",
        answer: "b. ternary operator",
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

