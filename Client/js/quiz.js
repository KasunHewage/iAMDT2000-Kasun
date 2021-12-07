const questions = [
  {
    id: 01,
    question: "Creativity starts in?",
    answers: {
      a: "AMDT",
      b: "Somewhere else",
      c: "I don't know",
    },
    correctAnswer: "AMDT",
  },
  {
    id: 02,
    question: "When was the AMDT established?",
    answers: {
      a: "1998",
      b: "2005",
      c: "2012",
    },
    correctAnswer: "2005",
  },
  {
    id: 03,
    question: "What does AMDT stands for?",
    answers: {
      a: "I don't know",
      b: "Acedemy Multinational Development Training",
      c: "Academy of Multimedia Design and Technology",
    },
    correctAnswer: "Academy of Multimedia Design and Technology",
  },
  {
    id: 04,
    question: "What does AMDT do?",
    answers: {
      a: "Inspiring Creative Minds",
      b: "Making you creative",
      c: "Teaching you the life",
    },
    correctAnswer: "Inspiring Creative Minds",
  },
  {
    id: 05,
    question: "How old AMDT is?",
    answers: {
      a: "16",
      b: "8",
      c: "20",
    },
    correctAnswer: "16",
  },
  {
    id: 06,
    question: "What program is used to make vector images?",
    answers: {
      a: "Photoshop",
      b: "After Effects",
      c: "illustrator",
    },
    correctAnswer: "illustrator",
  },
  {
    id: 07,
    question: "Color can be used to:",
    answers: {
      a: "Provoke emotion",
      b: "Group elements together or isolate them",
      c: "All of these",
    },
    correctAnswer: "All of these",
  },
  {
    id: 08,
    question: "What does 'ai' stand for regarding graphic design software?",
    answers: {
      a: "Adobe Indesign",
      b: "Photoshop",
      c: "Adobe illustrator",
    },
    correctAnswer: "Adobe illustrator",
  },
  {
    id: 09,
    question: "Which image file format most commonly supports animation?",
    answers: {
      a: ".jpg",
      b: ".psd",
      c: ".gif",
    },
    correctAnswer: ".gif",
  },
  {
    id: 10,
    question: "What is the correct color mode for files to be printed?",
    answers: {
      a: "CMYK",
      b: "GREYSCALE",
      c: "RGB",
    },
    correctAnswer: "CMYK",
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

  console.log(inputedAnswers);

  questionNumber++;
  query = questions[questionNumber];

  // enable get result button
  if (questionNumber + 1 == questions.length) {
    submitBtn.innerHTML = "Get result";
  }

  // set the score
  if (questionNumber == questions.length) {
    inputedAnswers.map((obj) =>
      obj.correct == true
        ? (totalScore = totalScore + 2)
        : (totalScore = totalScore - 1),
    );

    const style =
      totalScore > 12
        ? "style = 'color: rgb(0, 255, 85);'"
        : "style='color: rgb(224, 32, 32)'";

    notifiText.innerHTML = `
      <h1 ${style}>${
      totalScore > 12 ? "Congratulations!" : "Try harder next time!"
    }</h1>
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
