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
    return answer == this.correctAnswerIndex;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

class Quiz {
  constructor(questions = [], score = {}) {
    this.questions = questions;
    this.score = score;
    this.activeIndex = 0;
  }
  incrementScore(correct) {
    if (correct) {
      this.score[this.activeIndex] = true;
    } else {
      this.score[this.activeIndex] = false;
    }
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
  handleButtons(button, btn2, button3) {
    if (this.activeIndex === 0) {
      btn2.style.display = "none";
    } else if (this.activeIndex === this.questions.length - 1) {
      button.style.display = "none";
      button3.style.display = "inline-block";
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
    let li = document.createElement("li");
    let options = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = activeQuestion.title;

    activeQuestion.options.forEach((option, index) => {
      let input1 = document.createElement("input");
      input1.type = "radio";
      input1.classList.add(`option${index}`);
      input1.value = index;
      input1.id = index;
      input1.name = "question";
      let label1 = document.createElement("label");
      label1.for = index;
      label1.innerText = option;

      input1.addEventListener("change", (event) => {
        event.preventDefault();
        this.incrementScore(activeQuestion.isCorrect(event.target.value));
      });
      options.append(input1, label1);
    });

    let br = document.createElement("br");
    let button = document.createElement("button");
    button.innerText = "Next Question >>>";
    button.classList.add("next");
    let button2 = document.createElement("button");
    button2.classList.add("prev");
    button2.innerText = "<<< Previous Question";
    button.addEventListener("click", quiz.nextQuestion.bind(quiz));
    button2.addEventListener("click", quiz.prevQuestion.bind(quiz));

    let button3 = document.createElement("button");
    button3.innerText = "Get Result";
    button3.classList.add("btn3");
    button3.style.display = "none";

    button3.addEventListener("click", () => {
      let score = Object.values(this.score).filter((a) => a === true).length;
      if (score === 5) {
        alert(`You got ${score} out of 5! Congrats! 🥳`);
      } else if (score === 0) {
        alert(`You got ${score} out of 5 😭 Better luck next time!`);
      } else {
        alert(`Your score is ${score} out of 5!`);
      }
    });

    totalQuestions.innerText = `Total Questions: ${this.questions.length}`;
    this.handleButtons(button, button2, button3);
    li.append(p, options, br, button2, button, button3);
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
