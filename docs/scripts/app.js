// Armazenando as questões sobre COVID-19. Serão chamadas abaixo. 
//var minhasQuestoes = [
//   {
//     question: "Questão 1 - O que é COVID-19 e onde ela surgiu?",
//     answers: {
//       a: "É uma doença provocada pelo SARS-COV-2. Surgiu em 2019, na China.",
//       b: "É uma doença provocada pelo vírus da Gripe. Surgiu em 2011, na Àfrica do Sul.",
//       c: "É uma doença provocada pelo Aedes Aegypti. Surgiu em 2002, no Brasil.",
//       d: "É uma doença provocada pelo Cachorro. Surgiu em 2005, nos Estados Unidos.",
//     },
//     gabarito: "a",
//   },
//   {
//     question: "Questão 2 - Como o Coronavírus é transmitido?",
//     answers: {
//       a: "Pelo sangue da pessoa infectada.",
//       b: "Quando o infectado expelir partículas sudoreicas no ambiente.",
//       c: "Ao comprar alimentos no supermercado.",
//       d: "Pelas partículas virais do coronavírus no ambiente, em contato com a boca ou olhos do não-infectado.",
//     },
//     gabarito: "d",
//   },
//   {
//     question: "Questão 3 – Como evitar a COVID-19?",
//     answers: {
//       a: "Ir a uma festa com muitas pessoas num espaço pequeno, sem usar máscara.",
//       b: "Distanciamento, uso de máscaras, lavar as mãos, evitar ambientes fechados e aglomerações.",
//       c: "Beber álcool em gel antes de entrar num ônibus lotado.",
//       d: "Lavar as mãos apenas aos Domingos.",
//     },
//     gabarito: "b",
//   },
//   {
//     question: "Questão 4 - Qual máscara devo usar para me proteger?",
//     answers: {
//       a: "a.",
//       b: "b.",
//       c: "c.",
//       d: "d.",
//     },
//     gabarito: "a",
//   },
//   {
//     question: "Questão 5 - d?",
//     answers: {
//       a: "a.",
//       b: "b.",
//       c: "c.",
//       d: "d.",
//     },
//     gabarito: "d",
//   },
//   {
//     question: "Questão 6 - c?",
//     answers: {
//       a: "a.",
//       b: "b.",
//       c: "c.",
//       d: "d.",
//     },
//     gabarito: "c",
//   },
//   {
//     question: "Questão 7 - a?",
//     answers: {
//       a: "a.",
//       b: "b.",
//       c: "c.",
//       d: "d.",
//     },
//     gabarito: "a",
//   },
//   {
//     question: "Questão 8 - b?",
//     answers: {
//       a: "a.",
//       b: "b.",
//       c: "c.",
//       d: "d.",
//     },
//     gabarito: "b",
//   },
//   {
//     question: "Questão 9 - c?",
//     answers: {
//       a: "a.",
//       b: "b.",
//       c: "c.",
//       d: "d.",
//     },
//     gabarito: "c",
//   },
//   {
//     question: "Questão 10 - a?",
//     answers: {
//       a: "a.",
//       b: "b.",
//       c: "c.",
//       d: "d.",
//     },
//     gabarito: "a",
//   },
// ];

// var quizContainer = document.getElementById("quiz");
// var resultsContainer = document.getElementById("results");
// const submitButton = document.getElementById("submit");
// // Controles de Slides 
// const previousButton = document.getElementById("previous");
// const nextButton = document.getElementById("next");
// const slides = document.getElementById(".slide");
// let currentSlide = 0;

// buildQuiz(minhasQuestoes, quizContainer, resultsContainer);
// showSlide(currentSlide);

// function buildQuiz(questions, quizContainer, resultsContainer, submitButton) {

//   function showQuestions(questions, quizContainer, submitButton) {
//     // precisaremos de um lugar para armazenar a saída e as opções de resposta
//     var output = [];
//     // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/
//     var answers;
//     // para cada questão

//     for (var escolhaDoUsuario = 0; escolhaDoUsuario < questions.length; escolhaDoUsuario++) {

//       // mas, primeiro resetamos a lista de questões
//       answers = [];

//       // e aqui faremos para cada resposta na questão.
//       for (letras in questions[escolhaDoUsuario].answers) {
//         // Aqui será escrito para html para usar o checkbox.
//         answers.push(
//           `<label><input type="radio" name="question${escolhaDoUsuario}" value="${letras}"> `,
//           questions[escolhaDoUsuario].answers[letras] + "</label>"
//         );
//       }

//       // add this question and its answers to the output
//       output.push(
//         `<div class="slide">
//         <div class="question">${questions[escolhaDoUsuario].question
//         }</div><div class="answers">${answers.join("")}</div>`
//       );
//     }

//     // finally combine our output list into one string of html and put it on the page
//     quizContainer.innerHTML = output.join("");
//   }

//   // A função abaixo faz com que as questões aparecam como slides 
//   //function showSlide(diversos) {
//     // remove o slide respondido 
//     //slides[currentSlide].classList.remove('active-slide');
//     // adiciona o slide da nova questão a ser respondida 
//     slides[diversos].classList.add('active-slide');
//     // armazena a nova resposta no novo slide 
//     currentSlide = diversos;

//     if (currentSlide === 0) {

//       previousButton.style.display = 'none';

//     } else {

//       previousButton.style.display = 'inline-block';

//     }

//     if (currentSlide === slides.length - 1) {

//       nextButton.style.display = 'none';
//       submitButton.style.display = 'inline-block';

//     } else {

//       nextButton.style.display = 'inline-block';
//       submitButton.style.display = 'none';

//     }
//   }
//   // nas linhas adiante iremos fazer a função showSlide() funcionar 
//   // e adicionar lógica aos botões dos Slides 

//   function showNextSlide() {
//     showSlide(currentSlide + 1);
//   }

//   function showPreviousSlide() {
//     showSlide(currentSlide - 1);
//   }

//   function showResults(questions, quizContainer, resultsContainer) {

//     var answerContainers = quizContainer.querySelectorAll(".answers");
//     var respostaDoUsuario = "";
//     var respostaCorreta = 0;

//     for (var escolhaDoUsuario = 0; escolhaDoUsuario < questions.length; escolhaDoUsuario++) {
//       // agora ele vai virar a letra que esta marcada.
//       respostaDoUsuario = (answerContainers[escolhaDoUsuario].querySelector(`input[name=question${escolhaDoUsuario}]:checked`) || {}).value;

//       if (respostaDoUsuario === questions[escolhaDoUsuario].gabarito) {
//         // recebendo respostas corretas do usuário 
//         respostaCorreta++;

//         answerContainers[escolhaDoUsuario].style.color = "lightgreen";

//       } else {

//         answerContainers[escolhaDoUsuario].style.color = "red";

//       }
//     }

//     resultsContainer.innerHTML = `Você acertou ${respostaCorreta}, de ${questions.length} questões.`;

//     // O comando abaixo joga uma mensagem caso o usuário complete ou não o questionário 
//     if (respostaCorreta === 10) {
//       alert("Parabéns!\n\n Você acertou todas questões!");
//     } else {
//       alert("Ops!\n\n Você errou pelo menos uma questão.");
//     }
//   }

//   // show questions right away
//   showQuestions(questions, quizContainer);

//   // on submit, show results
//   submitButton.onclick = function () {
//     showResults(questions, quizContainer, resultsContainer);

//   };

//   previousButton.addEventListener("click", showPreviousSlide);
//   nextButton.addEventListener("click", showNextSlide);
// } 

// TENTATIVA DE DEIXAR O PROGRAMA MAIS LEGÍVEL 
// COM BASE EM ESTUDOS DE OUTROS ALGORITMOS PARA O MESMO OBJETIVO 

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
  //variável que armazena as saídas em HTML
  const output = [];

  // para cada Questão:
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      //variavel que armazena as possíveis listas de respostas do usuário
      const answers = [];

      // adicionando um laço de for para avaliar as respostas do usuário
      for (letter in currentQuestion.answers) {

        // chamando os botões 'radio' para o HTML
        // os botões que ficam ao lado das questões
        answers.push(
          `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} : 
          ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      // adicionando questões aos slides do quiz
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answer"> ${answers.join('')} </div>`
      );
    }
  );
  // chamando o output para transformar tudo na pagina HTML
  quizContainer.innerHTML = output.join('');
}

function showResults() { }

// exibindo o Quiz
buildQuiz();

// mostrando os resultados
submitButton.addEventListener('click', showResults);

// armazenando o quiz
const myQuestions = [
  {
    question: "Questão 1 - O que é COVID-19 e onde ela surgiu?",
    answers: {
      a: "É uma doença provocada pelo SARS-COV-2. Surgiu em 2019, na China.",
      b: "É uma doença provocada pelo vírus da Gripe. Surgiu em 2011, na Àfrica do Sul.",
      c: "É uma doença provocada pelo Aedes Aegypti. Surgiu em 2002, no Brasil.",
      d: "É uma doença provocada pelo Cachorro. Surgiu em 2005, nos Estados Unidos."
    },
    correctAnswer: "a"
  },
  {
    question: "Questão 2 - Como o Coronavírus é transmitido?",
    answers: {
      a: "Pelo sangue da pessoa infectada.",
      b: "Quando o infectado expelir partículas sudoreicas no ambiente.",
      c: "Ao comprar alimentos no supermercado.",
      d: "Pelas partículas virais do coronavírus no ambiente, em contato com a boca ou olhos do não-infectado."
    },
    correctAnswer: "d"
  },
]

