let allQuestions = [
  {
    title: "What is the capital of Spain?",
    options: ["Madrid", "Barcelona", "Seville"],
    correctAnswer: 0,
  },
  {
    title: "What is the capital of England?",
    options: ["Perth", "London", "Dublin"],
    correctAnswer: 1,
  },
  {
    title: "What is the capital of South Korea?",
    options: ["Pyongyang", "Seoul", "Busan"],
    correctAnswer: 1,
  },
  {
    title: "What is the capital of Japan?",
    options: ["Seoul", "Tokyo", "Osaka"],
    correctAnswer: 1,
  },
  {
    title: "What is the capital of Thailand?",
    options: ["Phuket", "Chiang Mai", "Bangkok"],
    correctAnswer: 2,
  },
];

let form = document.querySelector("form");
let root = document.querySelector("ul");

class Question {
  constructor(title, options, correctAnswer) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswer;
  }
  isCorrect(answer) {
    return answer === this.correctAnswer;
  }
}

let 
class Quiz {
  constructor(allQuestions) {
    this.allQuestions = allQuestions;
    this.activeIndex = 0;
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
    let questions = this.allQuestions[this.activeIndex];
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
    input3.value = "option3";
    input3.name = "question";
    let label3 = document.createElement("label");
    label3.for = "option1";
    label3.innerText = this.options[2];
    let button = document.createElement("button");
    button.innerText = "Next Question >>>";
    let button = document.querySelector("button");
    button.addEventListener("click", () => {
      this.question.activeIndex = this.question.activeIndex + 1;
      this.createUI();
    });
    li.append(p, input1, label1, input2, label2, input3, label3, button);
    root.append(li);
  }
}
