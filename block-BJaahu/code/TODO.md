### For single question we need the following data and methods:

- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

### Create the object using the following ways

For each different ways of creating object write different solutions.

- Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
- Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
- Create using class
- Write test by creating two objects also test both methods.

### To test use the following data

You can use the data given below. You will also have to change the name of the function while calling them.

```js
let firstQuestion = new Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
let secondQuestion = new Question(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);
```

```js
// Object

let question = {
  title: "What's your name?",
  options: ["Jane", "John", "Jim"],
  correctAnswerIndex: 1,
  isAnswerCorrect(index) {
    return index === currentAnswerindex;
  },
  getCorrectAnswer() {
    return options[correctAnswerIndex];
  },
};

// Prototypal Pattern

let questionMethods = {
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  },
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  },
}

function createQuestion(title, options, correctAnswerIndex){
  let question = Object.create(questionMethods);
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  return question; 
}

let question1 = createQuestion ("Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1);

let question2 = createQuestion ("Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2)

// Pseudoclassical Pattern

function CreateQuestion(title, options, correctAnswerIndex){
  this.title = title;
  this.options = options;
  this.correctAnswerIndex = correctAnswerIndex;
}

CreateQuestion.prototype = {
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  },
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  },
}

let question1 = new CreateQuestion ("Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1);

let question2 = new CreateQuestion ("Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2)

// Class

class Question {
  constructor(title, options, correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
   isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

let question1 = new Question ("Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1);

```
