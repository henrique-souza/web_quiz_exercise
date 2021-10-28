/* Armazenando as questões sobre COVID-19. Serão chamadas abaixo. */
var minhasQuestoes = [
  {
    question: "Questão 1 - O que é COVID-19 e onde ela surgiu?",
    answers: {
      a: "É uma doença provocada pelo SARS-COV-2. Surgiu em 2019, na China.",
      b: "É uma doença provocada pelo vírus da Gripe. Surgiu em 2011, na Àfrica do Sul.",
      c: "É uma doença provocada pelo Aedes Aegypti. Surgiu em 2002, no Brasil.",
      d: "É uma doença provocada pelo Cachorro. Surgiu em 2005, nos Estados Unidos.",
    },
    gabarito: "a",
  },
  {
    question: "Questão 2 - Como o Coronavírus é transmitido?",
    answers: {
      a: "Pelo sangue da pessoa infectada.",
      b: "Quando o infectado expelir partículas sudoreicas no ambiente.",
      c: "Ao comprar alimentos no supermercado.",
      d: "Pelas partículas virais do coronavírus no ambiente, em contato com a boca ou olhos do não-infectado.",
    },
    gabarito: "d",
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
    for (var respostas = 0; respostas < questions.length; respostas++) {
      // mas, primeiro resetamos a lista de questões
      answers = [];

      /* letter = ["a", "b", "c", "d"]; */

      // e aqui faremos para cada resposta na questão.
      for (letter in questions[respostas].answers) {
        // Aqui será escrito para html para usar o Radio.
        answers.push(
          `<label><input type="radio" name="question${respostas}" value="${letter}">${letter}) `, //vou deixar a letra comentada, porque achei melhor assim
            questions[respostas].answers[letter] +
            "</label>"
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' +
          questions[respostas].question +
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

    var respostaDoUsuario = "";
    var respostaCorreta = 0;

    for (var respostas = 0; respostas < questions.length; respostas++) {
      // agora ele vai virar a letra que esta marcada.
      respostaDoUsuario = (
        answerContainers[respostas].querySelector(
          "input[name=question" + respostas + "]:checked"
        ) || {}
      ).value;

      if (respostaDoUsuario === questions[respostas].gabarito) {
        respostaCorreta++;

        answerContainers[respostas].style.color = "lightgreen";
      } else {
        answerContainers[respostas].style.color = "red";
      }
    }

    resultsContainer.innerHTML =
      "Você acertou " +
      respostaCorreta +
      ", de " +
      questions.length +
      " questões.";
      /* O comando abaixo joga uma mensagem caso o usuário complete ou não o questionário */
    if (respostaCorreta === 2) {
      alert("Parabéns!\n\n Você acertou todas questões!");
    } else {
      alert("Ops!\n\n Você errou pelo menos uma questão.");
    }
  }

  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}
