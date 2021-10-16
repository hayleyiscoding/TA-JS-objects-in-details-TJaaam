If we want to build any app the two most important thing to think about is Data and Behavior. So for our quiz app let's break it down. To make a quiz app we need to create Single Question object.

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

- Without Object
- Organize using object
- Use a function to create object
- Convert the function to use `this` keyword
- Write test by creating two objects also test both methods.

### To test use the following data

```js
const testData = {
  title: "Where is the capital of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,
};
```

```js

// without Object

let title = testData.title;
let options = testData.options;
let correctAnswerIndex = testData.options[1];
function isAnswerCorrect(num) {
  if (num === correctAnswerIndex){
return true;
  } else {
    return false;
  }
}
function getCorrectAnswer(correctAnswerIndex) {
  testData.options[correctAnswerIndex];
}

// with Object

let singleQuestion = {
  title: "",
  options: [],
  correctAnswerIndex: i,
  getCorrectAnswer: function getCorrectAnswer() {
    return testData.options[correctAnswerIndex];
    },
  isAnswerCorrect: function isAnswerCorrect(num) {
  if (num === correctAnswerIndex){
return true;
  } else {
    return false;
  }
}

// Use a function to create the object

function createQuestion(title, options) {
  let singleQuestion = {};
  singleQuestion.title = title;
  singleQuestion.options = options;
  singleQuestion.getCorrectAnswer = function() {
    return testData.options[correctAnswerIndex];
  };
  singleQuestion.isAnswerCorrect = function (num) {
  if (num === correctAnswerIndex){
    return true;
    } else {
    return false;
    }
  }
  return singleQuestion;
}

// Convert the function the 'this keyword':

function createQuestion(title, options) {
  let singleQuestion = {};
  this.title = title;
  this.options = options;
  this.getCorrectAnswer = function() {
    return this.options[correctAnswerIndex];
  };
 this.isAnswerCorrect = function(num) {
  if (num === correctAnswerIndex){
    return true;
    } else {
    return false;
    }
 }
  return singleQuestion;
}

```
