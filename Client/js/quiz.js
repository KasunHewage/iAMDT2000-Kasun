const questions = [
  {
    id: 01,
    question: "What is AMDT?",
    answers: {
      a: "Answer 01",
      b: "Answer 02",
      c: "Answer 03",
    },
    correctAnswer: "Answer 01",
  },
  {
    id: 02,
    question: "What is Sri Lanka?",
    answers: {
      a: "Answer 04",
      b: "Answer 05",
      c: "Answer 06",
    },
    correctAnswer: "Answer 05",
  },
  {
    id: 03,
    question: "What are we?",
    answers: {
      a: "Answer 07",
      b: "Answer 08",
      c: "Answer 09",
    },
    correctAnswer: "Answer 09",
  },
];

const inputedAnswers = [];

const quizeContainer = document.querySelector(".quizes");
const quize = document.querySelector(".quizes h3");
const answers = document.querySelectorAll(".quizes h4");
const answersContainer = document.querySelector(".answers-container");
const answerTab = document.querySelectorAll(".answer-tab");
const warn = document.querySelector(".warn");
const footer = document.querySelector(".quiz-footer p");
const submitBtn = document.querySelector(".submitBtn");
const tryBtn = document.querySelector(".tryAgain");
const notifi = document.querySelector(".notification-container");
const notifiText = document.querySelector(".notification");

let questionNumber = 0;
let query = questions[questionNumber];
let isAnswered = false;
let userAnswer;
let isTrue;
let totalScore = 0;

//////////////////////////on page load
const onPageLoad = () => {
  //footer text
  footer.innerHTML = `${questionNumber + 1} of ${questions.length} quections`;

  // add the quiz
  quize.innerHTML = query.question;

  // add the answers
  Object.keys(query.answers).map((key, index) => {
    answers[index].innerHTML = query.answers[key];
  });
};

onPageLoad();

//////////////////////////select the answer
answersContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".answer-tab");

  if (!clicked) {
    return;
  }

  clicked.classList.add("active");

  answerTab.forEach((tab) => tab.classList.remove("active"));

  clicked.classList.add("active");

  isAnswered = true;

  userAnswer = e.target.innerHTML;
});

//////////////////////////on submit
submitBtn.addEventListener("click", () => {
  //check whether answred
  if (!isAnswered) {
    warn.classList.add("warn-message");
    return;
  } else if (isAnswered) {
    warn.classList.remove("warn-message");
    isAnswered = false;
  }

  //check answer correct or false
  if (userAnswer == query.correctAnswer) {
    isTrue = true;
  } else {
    isTrue = false;
  }

  //push answer object
  inputedAnswers.push({
    quizID: query.id,
    correct: isTrue,
    givenAnswer: userAnswer,
  });

  questionNumber++;
  query = questions[questionNumber];

  if (questionNumber + 1 == questions.length) {
    submitBtn.innerHTML = "Get result";
  }

  if (questionNumber == questions.length) {
    inputedAnswers.map((obj) =>
      obj.correct == true
        ? (totalScore = totalScore + 2)
        : (totalScore = totalScore - 1),
    );

    const style =
      totalScore > 3
        ? "style = 'color: rgb(0, 255, 85);'"
        : "style='color: rgb(224, 32, 32)'";

    notifiText.innerHTML = `
      <h1 ${style}>${totalScore > 3 ? "Congratulations!" : "Try harder next time!"}</h1>
      <p>${
        totalScore >= 0
          ? `You have scored ${totalScore} out of ${
              questions.length * 2
            } points`
          : `You have scored 0 out of ${questions.length * 2} points`
      }</p>
    `;

    notifi.classList.add("enablenotification");

    submitBtn.classList.add("btnHide");
    tryBtn.classList.remove("btnHide");

    return;
  }

  //footer text
  footer.innerHTML = `${questionNumber + 1} of ${questions.length} quections`;

  answerTab.forEach((tab) => tab.classList.remove("active"));

  // change the quiz
  quize.innerHTML = query.question;

  // change the answers
  Object.keys(query.answers).map((key, index) => {
    answers[index].innerHTML = query.answers[key];
  });
});

//notofication
notifi.addEventListener("click", (e) => {
  const clicked = e.target;

  if (clicked.classList.contains("notification-container")) {
    notifi.classList.remove("enablenotification");
    notifi.classList.add("disablenotification");
  }
});

//try again
tryBtn.addEventListener("click", () => location.reload());
