// Modo escuro // 

const checkbox = document.getElementById('theme-toggle-checkbox');
const themeLabel = document.querySelector('.theme-label');

function updateTheme(isDark) {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeLabel.textContent = isDark ? 'Modo Claro' : 'Modo Escuro';
}

checkbox.addEventListener('change', () => {
  updateTheme(checkbox.checked);
});
updateTheme(false);
