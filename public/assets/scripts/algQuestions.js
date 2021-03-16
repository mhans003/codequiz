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
        question: "Which sorting algorithm will likely consume more memory (higher space complexity) than the others?",
        option0: "a. Bubble",
        option1: "b. Insertion",
        option2: "c. Selection",
        option3: "d. Merge",
        answer: "d. Merge",
        optionNumber: 4
    },
    {
        question: "Which sorting algorithm does not require direct comparison between values stored in memory?",
        option0: "a. Radix",
        option1: "b. Selection",
        option2: "c. Merge",
        option3: "d. Bubble",
        answer: "a. Radix",
        optionNumber: 4
    },
    {
        question: "On average, which data structure is most optimal (best time complexity) for searching?",
        option0: "a. Queue",
        option1: "b. Hash Table",
        option2: "c. Stack",
        option3: "d. Binary Search Tree",
        answer: "b. Hash Table",
        optionNumber: 4
    },
    {
        question: "Which data structure is known for having 'FIFO' method/structure for storing/removing data?",
        option0: "a. Stack",
        option1: "b. Queue",
        option2: "c. Singly-Linked List",
        option3: "d. Doubly-Linked List",
        answer: "b. Queue",
        optionNumber: 4
    },
    {
        question: "Which data structure is known for having 'LIFO' method/structure for storing/removing data?",
        option0: "a. Stack",
        option1: "b. Queue",
        option2: "c. Singly-Linked List",
        option3: "d. Doubly-Linked List",
        answer: "a. Stack",
        optionNumber: 4
    },
    {
        question: "As far as average time complexity goes, a standard array is best suited for...",
        option0: "a. Access",
        option1: "b. Search",
        option2: "c. Insertion",
        option3: "d. Deletion",
        answer: "a. Access",
        optionNumber: 4
    },
    {
        question: "Which of the following is considered the worst Big-O complexity compared to the others?",
        option0: "a. O(n^2)",
        option1: "b. O(n log(n))",
        option2: "c. O(n)",
        option3: "d. O(1)",
        answer: "a. O(n^2)",
        optionNumber: 4
    },
    {
        question: "Which of the following is considered the worst Big-O complexity compared to the others?",
        option0: "a. O(log(n))",
        option1: "b. O(n^2)",
        option2: "c. O(2^n)",
        option3: "d. O(n!)",
        answer: "d. O(n!)",
        optionNumber: 4
    },
    {
        question: "Which of the following is considered the best Big-O complexity compared to the others?",
        option0: "a. O(n^2)",
        option1: "b. O(n log(n))",
        option2: "c. O(n)",
        option3: "d. O(1)",
        answer: "d. O(1)",
        optionNumber: 4
    },
    {
        question: "Which of the following is considered the best Big-O complexity compared to the others?",
        option0: "a. O(log(n))",
        option1: "b. O(n^2)",
        option2: "c. O(2^n)",
        option3: "d. O(n!)",
        answer: "a. O(log(n))",
        optionNumber: 4
    },
    {
        question: "Which Big-O complexity is worse than O(n^2)?",
        option0: "a. O(1)",
        option1: "b. O(n log(n))",
        option2: "c. O(log(n))",
        option3: "d. O(n!)",
        answer: "d. O(n!)",
        optionNumber: 4
    },
    {
        question: "Which is NOT a property of a Binary Heap?",
        option0: "a. Each node/element has at most two children",
        option1: "b. There must be ordering (greater/less) between parents and children",
        option2: "c. There must be ordering (greater/less) between siblings",
        option3: "d. Can be Max (descending order) or Min (ascending order)",
        answer: "c. There must be ordering (greater/less) between siblings",
        optionNumber: 4
    },
    {
        question: "What is a key difference between singly-linked lists and doubly-linked lists?",
        option0: "a. In singly-linked lists, one node is connected to the others; In doubly-linked lists, two nodes are connected to the others.",
        option1: "b. In singly-linked lists, each node connects to the next; In doubly-linked lists, nodes connect to the next and previous node(s).",
        option2: "c. In singly-linked lists, only one node can contain a connection; In doubly-linked lists, any node can contain a connection.",
        option3: "d. Singly-linked list nodes can contain only one property; Doubly-linked list nodes can contain two properties.",
        answer: "b. In singly-linked lists, each node connects to the next; In doubly-linked lists, nodes connect to the next and previous node(s).",
        optionNumber: 4
    },
    {
        question: "What is the average Big-O time complexity for access, search, insertion, and deletion in a Binary Search Tree?",
        option0: "a. O(1)",
        option1: "b. O(log(n))",
        option2: "c. O(n log(n))",
        option3: "d. O(n)",
        answer: "b. O(log(n))",
        optionNumber: 4
    },
    {
        question: "What is the average Big-O time complexity for accessing and searching in stacks and queues?",
        option0: "a. O(1)",
        option1: "b. O(log(n))",
        option2: "c. O(n log(n))",
        option3: "d. O(n)",
        answer: "d. O(n)",
        optionNumber: 4
    },
    {
        question: "What is the average Big-O time complexity for insertion and deletion in stacks and queues?",
        option0: "a. O(1)",
        option1: "b. O(log(n))",
        option2: "c. O(n log(n))",
        option3: "d. O(n)",
        answer: "a. O(1)",
        optionNumber: 4
    },
    {
        question: "What is the average Big-O time complexity for accessing and searching in a linked list?",
        option0: "a. O(1)",
        option1: "b. O(log(n))",
        option2: "c. O(n log(n))",
        option3: "d. O(n)",
        answer: "d. O(n)",
        optionNumber: 4
    },
    {
        question: "What is the average Big-O time complexity for insertion and deletion in linked lists?",
        option0: "a. O(1)",
        option1: "b. O(log(n))",
        option2: "c. O(n log(n))",
        option3: "d. O(n)",
        answer: "a. O(1)",
        optionNumber: 4
    },
    {
        question: "Radix sort has an average Big-O time complexity of...",
        option0: "a. O(n)",
        option1: "b. O(n^2)",
        option2: "c. O(n + k)",
        option3: "d. O(nk)",
        answer: "d. O(nk)",
        optionNumber: 4
    },
    {
        question: "To implement a binary search on an array of integers, the data should be...",
        option0: "a. randomized",
        option1: "b. deleted",
        option2: "c. sorted",
        option3: "d. moved into an object",
        answer: "c. sorted",
        optionNumber: 4
    },
    {
        question: "On average, a linear search on an array of integers will have a Big-O time complexity of...",
        option0: "a. O(n^2) - Every element must be compared to every other.",
        option1: "b. O(n) - Every element is searched until it is found.",
        option2: "c. O(log(n)) - The portion of the array searched is halved each iteration.",
        option3: "d. O(n log(n)) - Every element in each halved portion is compared to every other element.",
        answer: "b. O(n) - Every element is searched until it is found.",
        optionNumber: 4
    },
    {
        question: "On average, a binary search on an array of integers will have a Big-O time complexity of...",
        option0: "a. O(n^2) - Every element must be compared to every other.",
        option1: "b. O(n) - Every element is searched until it is found.",
        option2: "c. O(log(n)) - The portion of the array searched is halved each iteration.",
        option3: "d. O(n log(n)) - Every element in each halved portion is compared to every other element.",
        answer: "c. O(log(n)) - The portion of the array searched is halved each iteration.",
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