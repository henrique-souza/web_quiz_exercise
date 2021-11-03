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
  {
    question: "Questão 4 - Qual das vacinas contra o SARS-CoV-2 abaixo utiliza a tecnologia de vetor viral?",
    answers: {
      a: "Pfizer",
      b: "CoronaVac",
      c: "Moderna",
      d: "Sputnik V",
    },
    correctAnswer: "d",
  },
  {
    question: "Questão 5 - Tendo em vista o período de Virulência do SARS-CoV-2, qual teste é mais recomendado para verificar uma possível infecção por COVID-19 após 30 dias do início dos sintomas?",
    answers: {
      a: "RT-qPCR",
      b: "Pesquisa de Anticorpos IgM",
      c: "Pesquisa de Anticorpos IgG",
      d: "Pesquisa de Antígeno",
    },
    correctAnswer: "c",
  },
  {
    question: "Questão 6 - Qual variante de preocupação já é responsável por mais de 99% dos casos no Estado do Rio de Janeiro?  Como surgem novas variantes?",
    answers: {
      a: "Gama. A ausência de uma cobertura vacinal contra o SARS-CoV-2 propicia o surgimento de novas variantes. ",
      b: "Delta. O surgimento de novas variantes se dá através de mutações ocasionadas pela replicação do vírus dentro do nosso organismo.",
      c: "Gama. As variantes surgem através de uma ampla disseminação do SARS-CoV-2.",
      d: "Delta. As variantes surgem através de mutações no genoma viral do SARS-CoV-2 antes da infecção do indivíduo.",
    },
    correctAnswer: "b",
  },
  {
    question: "Questão 7 - Qual a única forma de prevenção EFICAZ contra o SARS-CoV-2?",
    answers: {
      a: "Uso de Cloroquina",
      b: "Ozonoterapia",
      c: "Uso de Ivermectina",
      d: "Vacinação",
    },
    correctAnswer: "d",
  },
  {
    question: "Questão 8 - Qual máscara contém uma maior eficácia na proteção contra o vírus?",
    answers: {
      a: "Máscara de pano",
      b: "Máscara cirúrgica",
      c: "Pff2/N95",
      d: "Máscara de TNT",
    },
    correctAnswer: "c",
  },
  {
    question: "Questão 9 - Por que as vacinas emergenciais contra o SARS-CoV-2 foram desenvolvidas em tempo recorde?",
    answers: {
      a: "Devido a sobreposição de fases, possibilitada pelos conhecimentos prévios obtidos através de anos de pesquisas.",
      b: "Os cientistas deixaram de considerar algumas informações necessárias para gerar uma vacina contra o coronavírus",
      c: "Obtenção de lucro pelas farmacêuticas ",
      d: "Pois a República Popular da China enxergou a possibilidade de implantar nanochips através das vacinas para dominar a população e controlar a economia mundial",
    },
    correctAnswer: "a",
  },
  {
    question: "Questão 10 - Qual proteína do SARS-CoV-2 é responsável por possibilitar a entrada do vírus na célula?",
    answers: {
      a: "Proteína de Membrana",
      b: "Proteína do Núcleocapsídeo",
      c: "Proteína da Espícula",
      d: "Proteína do Envelope",
    },
    correctAnswer: "c",
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
