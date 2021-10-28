/* var myQuestions = [
  {
    question: "O que é COVID-19 e onde ela surgiu?",
    a:
      "É uma doença provocada pelo SARS-COV-2. Surgiu em 2019, na China.",
    b:
      "É uma doença provocada pelo vírus da Gripe. Surgiu em 2011, na Àfrica do Sul.",
    c:
      "É uma doença provocada pelo Aedes Aegypti. Surgiu em 2002, no Brasil.",
    d:
      "É uma doença provocada pelo Cachorro. Surgiu em 2005, nos Estados Unidos.",
    correctAnswer: 1,
  },
  /*   {
      questao2:
        "Como o Coronavírus é transmitido?",
      a: "",
      b: "<script name='xxx.js'>",
      c: "<script src='xxx.js'>",
      d: "<script file='xxx.js'>",
      correctAnswer: 3,
    },
    {
      questao: "How do you write 'Hello World' in an alert box ? ",
      a: "msgBox('Hello World');",
      b: "alertBox('Hello World');",
      c: "msg('Hello World');",
      d: "alert('Hello World');",
      correctAnswer: 4,
    },
    {
      questao:
        "What is the correct syntax for referring to an external script called 'xxx.js'?",
      a: "<script href='xxx.js'>",
      b: "<script name='xxx.js'>",
      c: "<script src='xxx.js'>",
      d: "<script file='xxx.js'>",
      correctAnswer: 2,
    },
    {
      questao:
        "What is the correct syntax for referring to an external script called 'xxx.js'?",
      a: "<script href='xxx.js'>",
      b: "<script name='xxx.js'>",
      c: "<script src='xxx.js'>",
      d: "<script file='xxx.js'>",
      correctAnswer: 4,
    },
    {
      questao:
        "What is the correct syntax for referring to an external script called 'xxx.js'?",
      a: "<script href='xxx.js'>",
      b: "<script name='xxx.js'>",
      c: "<script src='xxx.js'>",
      d: "<script file='xxx.js'>",
      correctAnswer: 1,
    },
    {
      questao:
        "What is the correct syntax for referring to an external script called 'xxx.js'?",
      a: "<script href='xxx.js'>",
      b: "<script name='xxx.js'>",
      c: "<script src='xxx.js'>",
      d: "<script file='xxx.js'>",
      correctAnswer: 3,
    },
    {
      questao:
        "What is the correct syntax for referring to an external script called 'xxx.js'?",
      a: "<script href='xxx.js'>",
      b: "<script name='xxx.js'>",
      c: "<script src='xxx.js'>",
      d: "<script file='xxx.js'>",
      correctAnswer: 2,
    },
    {
      questao:
        "What is the correct syntax for referring to an external script called 'xxx.js'?",
      a: "<script href='xxx.js'>",
      b: "<script name='xxx.js'>",
      c: "<script src='xxx.js'>",
      d: "<script file='xxx.js'>",
      correctAnswer: 2,
    },
    {
      questao:
        "What is the correct syntax for referring to an external script called 'xxx.js'?",
      a: "<script href='xxx.js'>",
      b: "<script name='xxx.js'>",
      c: "<script src='xxx.js'>",
      d: "<script file='xxx.js'>",
      correctAnswer: 4,
    },
];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    // precisaremos de um lugar para armazenar a saída e as opções de resposta
    var output = [];
    var answers; // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/

    // para cada questão
    for (var i = 0; i < questions.length; i++) {
      // mas, primeiro resetamos a lista de questões
      answers = [];

      // e aqui faremos para cada resposta na questão.
      for (letter in questions[i].answers) {
        // Aqui será escrito para html para usar o Radio.
        answers.push(
          "<label>" +
          '<input type="radio" name="question' +
          i +
          '" value="' +
          letter +
          '">' +
          //	+ letter + ') ' vou deixar a letra comentada, porque achei melhor assim
          questions[i].answers[letter] +
          "</label>"
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' +
        questions[i].question +
        "</div>" +
        '<div class="answers">' +
        answers.join("") +
        "</div>"
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll(".answers");

    var userAnswer = "";
    var numCorrect = 0;

    for (var i = 0; i < questions.length; i++) {
      // agora ele vai virar a letra que esta marcada.
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      if (userAnswer === questions[i].correctAnswer) {
        numCorrect++;

        answerContainers[i].style.color = "lightgreen";
      } else {
        answerContainers[i].style.color = "red";
      }
    }

    resultsContainer.innerHTML = numCorrect + " de " + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}
 */
var myQuestions = [
  {
    question: "Qual a alternativa correta?",
    answers: {
      a: "errada",
      b: "certa",
      c: "errada",
    },
    correctAnswer: "b",
  },
  {
    question: "Qual é o maior numero?",
    answers: {
      a: "-30",
      b: "5",
      c: "10",
      d: "9",
    },
    correctAnswer: "c",
  },
  {
    question: "Nada",
    answers: {
      a: "musica",
      b: "filme",
      c: "da like",
      d: "não me julgue pela lingua ;-;",
    },
    correctAnswer: "a",
  },
];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    // precisaremos de um lugar para armazenar a saída e as opções de resposta
    var output = [];
    var answers; // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/

    // para cada questão
    for (var i = 0; i < questions.length; i++) {
      // mas, primeiro resetamos a lista de questões
      answers = [];

      // e aqui faremos para cada resposta na questão.
      for (letter in questions[i].answers) {
        // Aqui será escrito para html para usar o Radio.
        answers.push(
          "<label>" +
          '<input type="radio" name="question' +
          i +
          '" value="' +
          letter +
          '">' +
          //	+ letter + ') ' vou deixar a letra comentada, porque achei melhor assim
          questions[i].answers[letter] +
          "</label>"
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' +
        questions[i].question +
        "</div>" +
        '<div class="answers">' +
        answers.join("") +
        "</div>"
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll(".answers");

    var userAnswer = "";
    var numCorrect = 0;

    for (var i = 0; i < questions.length; i++) {
      // agora ele vai virar a letra que esta marcada.
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      if (userAnswer === questions[i].correctAnswer) {
        numCorrect++;

        answerContainers[i].style.color = "green";
      } else {
        answerContainers[i].style.color = "red";
      }
    }

    resultsContainer.innerHTML = numCorrect + " de " + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}
