/*  */
var minhasQuestoes = [
  {
    question: "Questão 1 - O que é COVID-19 e onde ela surgiu?",
    answers: {
      a: "É uma doença provocada pelo SARS-COV-2. Surgiu em 2019, na China.",
      b: "É uma doença provocada pelo vírus da Gripe. Surgiu em 2011, na Àfrica do Sul.",
      c: "É uma doença provocada pelo Aedes Aegypti. Surgiu em 2002, no Brasil.",
      d: "É uma doença provocada pelo Cachorro. Surgiu em 2005, nos Estados Unidos.",
    },
    correctAnswer: "a",
  },
  {
    question: "Questão 2 - Como o Coronavírus é transmitido?",
    answers: {
      a: "É uma doença provocada pelo SARS-COV-2. Surgiu em 2019, na China.",
      b: "É uma doença provocada pelo vírus da Gripe. Surgiu em 2011, na Àfrica do Sul.",
      c: "É uma doença provocada pelo Aedes Aegypti. Surgiu em 2002, no Brasil.",
      d: "É uma doença provocada pelo Cachorro. Surgiu em 2005, nos Estados Unidos.",
    },
    correctAnswer: "d",
  },
];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(minhasQuestoes, quizContainer, resultsContainer, submitButton);

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

    resultsContainer.innerHTML =
      "Você acertou " + numCorrect + ", de " + questions.length + " questões.";

    /*
    Verificar este comando abaixo, para adicionar um laço 'if'
    A ideia é pra fazer com que, se os resultados forem 
    menores que 10, apareça na tela uma mensagem dizendo
    para o usuário tentar novamente
    Caso contrário, irá aparecer um "Você sabe tudo sobre COVID-19!"
     alert(resultsContainer.innerHTML) 
     */
  }

  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}
