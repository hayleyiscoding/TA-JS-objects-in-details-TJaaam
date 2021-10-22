let quizCollection = [
  {
    title: "What is the capital of Spain?",
    options: ["Madrid", "Barcelona", "Seville"],
    correctAnswerIndex: 0,
  },
  {
    title: "What is the capital of England?",
    options: ["Perth", "London", "Dublin"],
    correctAnswerIndex: 1,
  },
  {
    title: "What is the capital of South Korea?",
    options: ["Pyongyang", "Seoul", "Busan"],
    correctAnswerIndex: 1,
  },
  {
    title: "What is the capital of Japan?",
    options: ["Seoul", "Tokyo", "Osaka"],
    correctAnswerIndex: 1,
  },
  {
    title: "What is the capital of Thailand?",
    options: ["Phuket", "Chiang Mai", "Bangkok"],
    correctAnswerIndex: 2,
  },
];

let form = document.querySelector("form");
let root = document.querySelector("ul");
let button = document.querySelector(".next");
let button2 = document.querySelector(".prev");
let totalQuestions = document.querySelector(".total");

class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isCorrect(answer) {
    return answer === this.options[this.correctAnswerIndex];
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

class Quiz {
  constructor(questions = [], score = 0) {
    this.questions = questions;
    this.score = score;
    this.activeIndex = 0;
  }
  addQuestion(title, options, correctAnswerIndex) {
    let question = new Question(title, options, correctAnswerIndex);
    this.questions.push(question);
  }
  prevQuestion() {
    this.activeIndex = this.activeIndex - 1;
    this.createUI();
  }
  nextQuestion(index) {
    this.activeIndex = this.activeIndex + 1;
    this.createUI();
  }
  handleButtons(button,btn2) {
    if (this.activeIndex === 0) {
      btn2.style.display = "none";
    } else if (this.activeIndex === this.questions.length - 1) {
      button.style.display = "none";
    } else {
        btn2.style.display = "inline-block";
        button.style.display = "inline-block";
    }
  }
  createUI() {
    root.innerHTML = "";
    //      <li>
    //     <p>What's the capital of Spain?</p>
    //     <input type="radio" class="option1" name="question" value="option1" />
    //     <label for="option1">Barcelona</label>
    //     <input type="radio" class="option2" name="question" value="option2" />
    //     <label for="option2">Madrid</label>
    //     <input type="radio" class="option3" name="question" value="option3" />
    //     <label for="option3">Seville</label>
    //     <button><<< Previous Question</button>
    //     <button>Next Question >>></button>
    //   </li>
    let activeQuestion = this.questions[this.activeIndex];
    console.log(activeQuestion);
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = activeQuestion.title;
    let input1 = document.createElement("input");
    input1.type = "radio";
    input1.classList.add("option1");
    input1.value = "option1";
    input1.name = "question";
    let label1 = document.createElement("label");
    label1.for = "option1";
    label1.innerText = activeQuestion.options[0];
    let input2 = document.createElement("input");
    input2.type = "radio";
    input2.classList.add("option2");
    input2.value = "option2";
    input2.name = "question";
    let label2 = document.createElement("label");
    label2.for = "option2";
    label2.innerText = activeQuestion.options[1];
    let input3 = document.createElement("input");
    input3.classList.add("option3");
    input3.value = "option3";
    input3.name = "question";
    input3.type = "radio";
    let label3 = document.createElement("label");
    label3.for = "option1";
    label3.innerText = activeQuestion.options[2];
    let br = document.createElement("br");
    let button = document.createElement("button");
    button.innerText = "Next Question >>>";
    button.classList.add("next");
    let button2 = document.createElement("button");
    button2.classList.add("prev");
    button2.innerText = "<<< Previous Question";
    button.addEventListener("click", quiz.nextQuestion.bind(quiz));
    button2.addEventListener("click", quiz.prevQuestion.bind(quiz));
    totalQuestions.innerText = `Total Questions: ${this.questions.length}`;
    this.handleButtons(button,button2);
    li.append(
      p,
      input1,
      label1,
      input2,
      label2,
      input3,
      label3,
      br,
      button2,
      button
    );
    root.append(li);
  }
}

let quiz = new Quiz();
// quiz.createUI();
quizCollection.forEach((question) => {
  quiz.addQuestion(
    question.title,
    question.options,
    question.correctAnswerIndex
  );
});
quiz.createUI();
