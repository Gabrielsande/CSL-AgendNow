const buttons = document.querySelectorAll('.service-buttons button');
const cards = document.querySelectorAll('.card');

// Cria ou seleciona o título do filtro
let filtroTitulo = document.querySelector('.filtro-titulo');
if (!filtroTitulo) {
  filtroTitulo = document.createElement('h2');
  filtroTitulo.classList.add('filtro-titulo');
  const cardsContainer = document.querySelector('.cards-container');
  cardsContainer.parentNode.insertBefore(filtroTitulo, cardsContainer);
}

// Função para deixar a primeira letra maiúscula
function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Adiciona evento a todos os botões
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const className = button.classList[0]; // ex: barbeiro, dentista, etc.

    if (className === 'home' || className === 'show-all') {
      cards.forEach(card => card.style.display = 'block'); // Mostrar todos
      filtroTitulo.textContent = ''; // Remover título
    } else {
      cards.forEach(card => card.style.display = 'none'); // Esconder todos
      document.querySelectorAll(`.${className}-card`).forEach(card => {
        card.style.display = 'block'; // Mostrar apenas os filtrados
      });
      const nomeServico = button.title || button.alt || className;
      filtroTitulo.textContent = nomeServico.endsWith('s')
        ? capitalizar(nomeServico)
        : capitalizar(nomeServico + 's');
    }
  });
});
