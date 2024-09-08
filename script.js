const slides = document.querySelectorAll('.carousel-slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const container = document.querySelector('.carousel-container');
let currentIndex = 0;

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    container.style.transform = `translateX(${offset}%)`;
}

next.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

prev.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

// Troca automática de slides a cada 5 segundos
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

// Inicializa a posição dos slides
showSlide(0);


// Definindo a data do ENEM
const examDate = new Date('November 3, 2024 00:00:00').getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = examDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  // Quando a contagem chegar a zero
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = "O ENEM já começou!";
  }
}, 1000);

const quotes = [
    { quote: "A única coisa que temos a temer é o próprio medo.", author: "Franklin D. Roosevelt" },
    { quote: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.", author: "Nelson Mandela" },
    { quote: "Não sou produto das minhas circunstâncias. Sou produto das minhas decisões.", author: "Stephen Covey" },
    { quote: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", author: "Winston Churchill" },
    { quote: "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.", author: "Albert Einstein" },
    { quote: "Eu penso, logo existo.", author: "René Descartes" },
    { quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.", author: "John Lennon" },
    { quote: "Quem tem um porquê para viver pode suportar quase qualquer como.", author: "Friedrich Nietzsche" },
    { quote: "A imaginação é mais importante que o conhecimento.", author: "Albert Einstein" },
    { quote: "Eu prefiro morrer de paixão do que de tédio.", author: "Vincent van Gogh" }
  ];
  
  // Função para obter uma citação com base na data
  function getQuoteOfTheDay() {
    const date = new Date();
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    
    // Seleciona a citação com base no dia do ano
    const dailyQuote = quotes[dayOfYear % quotes.length];
    
    // Insere a citação no HTML
    document.getElementById("daily-quote").innerText = dailyQuote.quote;
    document.getElementById("author").innerText = dailyQuote.author;
  }
  
  // Chama a função ao carregar a página
  getQuoteOfTheDay();
  



document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const icons = document.querySelectorAll('.icon-container .icon');
    
    icons.forEach(icon => {
        const text = icon.textContent.toLowerCase();
        if (text.includes(query)) {
            icon.style.display = 'block';
        } else {
            icon.style.display = 'none';
        }
    });
});
