let selectedRating = 0;

// Avaliação por estrelas
document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.getAttribute('data-value'));
    updateStarDisplay(selectedRating);
  });
});

function updateStarDisplay(rating) {
  document.querySelectorAll('.star').forEach(star => {
    const value = parseInt(star.getAttribute('data-value'));
    star.classList.toggle('selected', value <= rating);
  });
}

document.getElementById('ratingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  if (selectedRating === 0) {
    alert('Por favor, selecione uma quantidade de estrelas.');
    return;
  }

  const comment = document.getElementById('comment').value;
  const ratingEntry = document.createElement('div');
  ratingEntry.className = 'rating-entry';
  ratingEntry.innerHTML = `
    <p><strong>Avaliação:</strong> ${'⭐'.repeat(selectedRating)}</p>
    <p><strong>Comentário:</strong> ${comment}</p>
  `;

  document.getElementById('ratingsList').appendChild(ratingEntry);

  selectedRating = 0;
  updateStarDisplay(0);
  document.getElementById('ratingForm').reset();
});

// Modo Escuro
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const mode = body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
  localStorage.setItem('dark-mode', mode);
  toggle.textContent = mode === 'enabled' ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});
toggle.textContent = body.classList.contains('dark-mode') ? '☀️ Modo Claro' : '🌙 Modo Escuro';

// Modal da Agenda
const modal = document.getElementById('agendaModal');
const openBtn = document.getElementById('openAgendaBtn');
const closeBtn = document.querySelector('.modal .close');
const serviceDetails = document.getElementById('serviceDetails');

openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  serviceDetails.classList.add('hidden');
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  serviceDetails.classList.add('hidden');
});

document.querySelectorAll('.schedule-time').forEach(btn => {
  btn.addEventListener('click', () => {
    serviceDetails.classList.remove('hidden');
  });
});
