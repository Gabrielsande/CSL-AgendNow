// Modo escuro
const checkbox = document.getElementById('theme-toggle-checkbox');

function updateTheme(isDark) {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
}

checkbox.addEventListener('change', () => {
  updateTheme(checkbox.checked);
});

updateTheme(false);

// Função para alternar mostrar/ocultar senha e trocar emoji
function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = 'Ocultar'; // emoji ocultar
  } else {
    input.type = 'password';
    btn.textContent = 'Mostrar'; // emoji mostrar
  }
}

// Validação do telefone (mesmo que você tinha)
const telefoneInput = document.querySelector('input[placeholder="Telefone"]');
telefoneInput.addEventListener('input', () => {
  let value = telefoneInput.value.replace(/\D/g, '');
  if (value.length > 11) value = value.slice(0, 11);
  if (value.length > 2) value = '(' + value.slice(0, 2) + ') ' + value.slice(2);
  if (value.length > 7) value = value.slice(0, 9) + '-' + value.slice(9);
  telefoneInput.value = value;
});

// Validação e formatação CEP
const cepInput = document.querySelector('input[placeholder="CEP"]');
cepInput.addEventListener('input', () => {
  let value = cepInput.value.replace(/\D/g, '');
  if (value.length > 8) value = value.slice(0, 8);
  if (value.length > 5) value = value.slice(0, 5) + '-' + value.slice(5);
  cepInput.value = value;
});

// Validação e mensagem para e-mail
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
emailInput.addEventListener('input', () => {
  const value = emailInput.value.trim();
  if (value === '' || value.endsWith('@gmail.com')) {
    emailError.style.display = 'none';
    emailInput.style.boxShadow = '';
  } else {
    emailError.style.display = 'block';
    emailInput.style.boxShadow = '0 0 6px red';
  }
});

// Validação das senhas
const senhaInput = document.getElementById('senha');
const confirmarSenhaInput = document.getElementById('confirmarSenha');
const senhaError = document.getElementById('senha-error');

function validarSenhas() {
  if (confirmarSenhaInput.value === '') {
    senhaError.style.display = 'none';
    confirmarSenhaInput.style.boxShadow = '';
    return;
  }
  if (senhaInput.value === confirmarSenhaInput.value) {
    senhaError.style.display = 'none';
    confirmarSenhaInput.style.boxShadow = '';
  } else {
    senhaError.style.display = 'block';
    confirmarSenhaInput.style.boxShadow = '0 0 6px red';
  }
}

senhaInput.addEventListener('input', validarSenhas);
confirmarSenhaInput.addEventListener('input', validarSenhas);
