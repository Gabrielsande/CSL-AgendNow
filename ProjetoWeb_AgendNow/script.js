const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.removeItem('darkMode');
  }
});

// Exibir apenas os cards correspondentes ao botão clicado
document.querySelectorAll('.service-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const selectedClass = button.classList[0] + '-card';
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.style.display = 'none';
    });

    document.querySelectorAll('.' + selectedClass).forEach(card => {
      card.style.display = 'block';
    });
  });
});
