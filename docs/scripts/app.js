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

// Funções
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
          ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      // adicionando questões aos slides do quiz
      output.push(
        `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>
      </div>`
      );
    }
  );
  // chamando o output para transformar tudo na pagina HTML
  quizContainer.innerHTML = output.join('');
}

function showResults() {

  // pegando as respostas do usuário do Quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // acompanhando as respostas dos usuários
  let numberCorrect = 0;

  // para cada questão...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // buscando a resposta selecionada
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // se a resposta for correta...
      if (userAnswer === currentQuestion.correctAnswer) {
        // armazenar os números de respostas corretas
        numberCorrect++;

        //colorindo a respostas de verde
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // se for errada ou estiver em branco... 
      else {
        // colorindo as respostas de vermelho
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  // mostrando o numero de respostas corretas em relação ao total
  resultsContainer.innerHTML = `Você acertou ${numberCorrect}, de ${myQuestions.length} questões`;
}

function showSlide(qualquer) {

  slides[currentSlide].classList.remove('active-slide');
  slides[qualquer].classList.add('active-slide');
  currentSlide = qualquer;

  if (currentSlide === 0) {
    previousButton.style.display = 'none';
  }
  else {
    previousButton.style.display = 'inline-block';
  }

  if (currentSlide === slides.length - 1) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

// Variáveis
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
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
  {
    question: "Questão 3 – Como evitar a COVID-19?",
    answers: {
      a: "Ir a uma festa com muitas pessoas num espaço pequeno, sem usar máscara.", 
      b: "Usar máscaras, lavar as mãos, evitar ambientes fechados e aglomerações.",
      c: "Beber álcool em gel antes de entrar num ônibus lotado.",
      d: "Lavar as mãos apenas aos Domingos.",
    },
    correctAnswer: "b",
  },
]


// exibindo o Quiz
buildQuiz();

// Paginação
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Mostrando slides
showSlide(currentSlide);

// mostrando os resultados ao usuário
submitButton.addEventListener('click', showResults);
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
