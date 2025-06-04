// Modo escuro com troca de ícone (lua <-> sol) e persistência
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Ícones para o toggle
const moonIcon = '🌙';
const sunIcon = '☀️';

// Inicializa o ícone conforme o estado salvo no localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = sunIcon; // modo escuro ativo, mostra sol
} else {
  darkModeToggle.textContent = moonIcon; // modo claro, mostra lua
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');

  if (isDark) {
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.textContent = sunIcon; // troca para sol
  } else {
    localStorage.removeItem('darkMode');
    darkModeToggle.textContent = moonIcon; // troca para lua
  }
});

// Filtro de serviços + título dinâmico acima dos cards
const buttons = document.querySelectorAll('.service-buttons button');
const cards = document.querySelectorAll('.card');
const main = document.querySelector('main');

// Cria ou seleciona o h2 que será o título do filtro
let filtroTitulo = document.querySelector('.filtro-titulo');
if (!filtroTitulo) {
  filtroTitulo = document.createElement('h2');
  filtroTitulo.classList.add('filtro-titulo');
  // Insere o título logo acima da seção dos cards
  const cardsContainer = document.querySelector('.cards-container');
  cardsContainer.parentNode.insertBefore(filtroTitulo, cardsContainer);
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const className = button.classList[0]; // pega a primeira classe do botão
    
    if (className === 'show-all') {
      // Mostrar todos os cards
      cards.forEach(card => card.style.display = 'block');
      filtroTitulo.textContent = ''; // limpa o título
    } else {
      // Esconde todos os cards
      cards.forEach(card => card.style.display = 'none');
      // Mostra só os cards que têm a classe correspondente
      document.querySelectorAll(`.${className}-card`).forEach(card => {
        card.style.display = 'block';
      });
      // Coloca o título com o nome do serviço no filtro
      // Para melhorar, deixa a primeira letra maiúscula e adiciona "s"
      const nomeServico = button.title || button.alt || className;
      filtroTitulo.textContent = nomeServico.endsWith('s') ? nomeServico : nomeServico + 's';
    }
  });
});
