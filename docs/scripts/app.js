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
  {
    question: "Questão 3 – Como evitar a COVID-19?",
    answers: {
      a: "Ir a uma festa com muitas pessoas num espaço pequeno, sem usar máscara.",
      b: "Distanciamento, uso de máscaras, lavar as mãos, evitar ambientes fechados e aglomerações.",
      c: "Beber álcool em gel antes de entrar num ônibus lotado.",
      d: "Lavar as mãos apenas aos Domingos.",
    },
    gabarito: "b",
  },
  {
    question: "Questão 4 - a?",
    answers: {
      a: "a.",
      b: "b.",
      c: "c.",
      d: "d.",
    },
    gabarito: "a",
  },
  {
    question: "Questão 5 - d?",
    answers: {
      a: "a.",
      b: "b.",
      c: "c.",
      d: "d.",
    },
    gabarito: "d",
  },
  {
    question: "Questão 6 - c?",
    answers: {
      a: "a.",
      b: "b.",
      c: "c.",
      d: "d.",
    },
    gabarito: "c",
  },
  {
    question: "Questão 7 - a?",
    answers: {
      a: "a.",
      b: "b.",
      c: "c.",
      d: "d.",
    },
    gabarito: "a",
  },
  {
    question: "Questão 8 - b?",
    answers: {
      a: "a.",
      b: "b.",
      c: "c.",
      d: "d.",
    },
    gabarito: "b",
  },
  {
    question: "Questão 9 - c?",
    answers: {
      a: "a.",
      b: "b.",
      c: "c.",
      d: "d.",
    },
    gabarito: "c",
  },
  {
    question: "Questão 10 - a?",
    answers: {
      a: "a.",
      b: "b.",
      c: "c.",
      d: "d.",
    },
    gabarito: "a",
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
    // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/

    var answers;
    // para cada questão
    for (var respostas = 0; respostas < questions.length; respostas++) {
      // mas, primeiro resetamos a lista de questões
      answers = [];

      // e aqui faremos para cada resposta na questão.
      for (letras in questions[respostas].answers) {
        // Aqui será escrito para html para usar o checkbox.
        answers.push(
          `<label><input type="radio" name="question${respostas}" value="${letras}">${letras}) `,
          questions[respostas].answers[letras] + "</label>"
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question">${
          questions[respostas].question
        }</div><div class="answers">${answers.join("")}</div>`
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
          `input[name=question${respostas}]:checked`
        ) || {}
      ).value;

      if (respostaDoUsuario === questions[respostas].gabarito) {
        respostaCorreta++;

        answerContainers[respostas].style.color = "lightgreen";
      } else {
        answerContainers[respostas].style.color = "red";
      }
    }

    resultsContainer.innerHTML = `Você acertou ${respostaCorreta}, de ${questions.length} questões.`;

    /* O comando abaixo joga uma mensagem caso o usuário complete ou não o questionário */
    if (respostaCorreta === 10) {
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
