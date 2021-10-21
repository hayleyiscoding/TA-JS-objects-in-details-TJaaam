let allQuestions = {
    question1: {
        title: "What is the capital of Spain?",
        options: ["Madrid", "Barcelona", "Seville"],
        correctAnswer: "Madrid"
    },
    question2: {
        title: "What is the capital of England?",
        options: ["Perth", "London", "Dublin"],
        correctAnswer: "London"
    },
    question3: {
        title: "What is the capital of South Korea?",
        options: ["Pyongyang", "Seoul", "Busan"],
        correctAnswer: "Seoul"
    },
    question4: {
        title: "What is the capital of Japan?",
        options: ["Seoul", "Tokyo", "Osaka"],
        correctAnswer: "Tokyo"
    },
    question5: {
        title: "What is the capital of Thailand?",
        options: ["Phuket", "Chiang Mai", "Bangkok"],
        correctAnswer: "Bangkok"
    }
}

let form = document.querySelector("form");
let root = document.querySelector("ul");

// ### Make a Question class with these data and methods:

// DATA:

// - Title of the question
// - Options of the question
// - Correct answer

// METHODS:

// - isCorrect(answer)

// Check if the given answer is correct or not. It will accept one answer and return `true` is the answer is correct otherwise false.

// - getCorrectAnswer()
//   This method will return the correct answer of the question.

// - createUI (this will create the layout of a single question)

// This method will decide how the UI of a question look like. Calling this function should add the UI in the DOM.

class Question {
  constructor(title, options, correctAnswer) {
    this.title = title;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
  isCorrect(answer) {
    return answer === this.correctAnswer;
  }
}

// ### Make quiz class with these data and properties

// DATA:

// - allQuestions
//   Collection of Questions. An array with multiple question.
// - activeIndex
//   Index of the active visible question
// - score
//   Total number of correct answer

// METHOD:

// - nextQuestion()
//   This method should get the next question.
// - createUI
//   This will create the ui of the whole app.
// - updateScore
//   This method will update the score.

class Quiz {
  constructor(allQuestions, activeIndex, score) {
    this.allQuestions = allQuestions;
    this.activeIndex = activeIndex;
    this.score = score;
  }
  nextQuestion(index) {
    let question = new Question(title, options, correctAnswer);
    this.allQuestions[index + 1];
    this.createUI();
  }
  createUI() {
    //      <li>
//     <p>What's the capital of Spain?</p>
//     <input type="radio" class="option1" name="question" value="option1" />
//     <label for="option1">Barcelona</label>
//     <input type="radio" class="option2" name="question" value="option2" />
//     <label for="option2">Madrid</label>
//     <input type="radio" class="option3" name="question" value="option3" />
//     <label for="option3">Seville</label>
//     <button>Next Question >>></button>
//   </li>
    root.innerHTML = '';
    this.allQuestions.forEach((question) => {
      let li = document.createElement("li");
      let p = document.createElement("p");
      let input1 = document.createElement("input");
      input1.classList.add("option1");
      input1.value = "option1";
      input1.name = "question";
      let label1 = document.createElement("label");
      label1.for = "option1";
      label1.innerText = this.options[0];
      let input2 = document.createElement("input");
      input2.classList.add("option2");
      input2.value = "option2";
      input2.name = "question";
      let label2 = document.createElement("label");
      label2.for = "option2";
      label2.innerText = this.options[1];
      let input3 = document.createElement("input");
      input3.classList.add("option3");
      input3.value = "option1";
      input3.name = "question";
      let label3 = document.createElement("label");
      label3.for = "option1";
      label3.innerText = this.options[2];
      let button = document.createElement("button");
      button.innerText = "Next Question >>>";
      li.append(p, input1, label1, input2, label2, input3, label3, button);
      root.append(li);
    });
  }
  updateScore(newScore) {
    this.score = newScore;
    return this.score;
  }
}

let button = document.querySelector("button");

button.addEventListener("click", (event) => {
    event.preventDefault();
    nextQuestion();
});
