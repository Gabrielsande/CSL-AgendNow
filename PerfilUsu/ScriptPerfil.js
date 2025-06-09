document.addEventListener("DOMContentLoaded", () => {
  const preview = document.getElementById("preview");
  const corTema = document.getElementById("corTema");
  const corBorda = document.getElementById("corBorda");
  const iconeLua = document.getElementById("iconeLua");
  const iconeSol = document.getElementById("iconeSol");

  const dados = JSON.parse(localStorage.getItem("dadosPerfil"));

  if (dados) {
    // Aplica cor do tema salva
    if (dados.corTema) {
      corTema.value = dados.corTema;
      document.documentElement.style.setProperty("--card-color", dados.corTema);
    }

    // Aplica cor da borda salva
    if (dados.corBorda) {
      corBorda.value = dados.corBorda;
      document.documentElement.style.setProperty("--borda-color", dados.corBorda);
    }

    // Aplica imagem salva
    if (dados.foto) {
      preview.src = dados.foto;
    }

    // Aplica modo escuro
    if (dados.darkMode) {
      document.body.classList.add("dark");
      iconeLua.style.display = "none";
      iconeSol.style.display = "inline";
    } else {
      document.body.classList.remove("dark");
      iconeLua.style.display = "inline";
      iconeSol.style.display = "none";
    }
  }
});


  // Atualizar cor do tema em tempo real
  corTema.addEventListener("input", () => {
    document.documentElement.style.setProperty("--card-color", corTema.value);
  });


// Alternar modo escuro/claro com ícone
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark");

  const isDark = body.classList.contains("dark");
  const iconeLua = document.getElementById("iconeLua");
  const iconeSol = document.getElementById("iconeSol");

  if (isDark) {
    iconeLua.style.display = "none";
    iconeSol.style.display = "inline";
  } else {
    iconeLua.style.display = "inline";
    iconeSol.style.display = "none";
  }

  // Atualiza o localStorage
  const dados = JSON.parse(localStorage.getItem("dadosPerfil")) || {};
  dados.darkMode = isDark;
  localStorage.setItem("dadosPerfil", JSON.stringify(dados));
}

// Alternar visibilidade da senha
function toggleSenha() {
  const senhaInput = document.getElementById("senha");
  const btn = document.querySelector('.mostrar-btn');
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    btn.textContent = "Ocultar";
  } else {
    senhaInput.type = "password";
    btn.textContent = "Mostrar";
  }
}

// Salvar dados no localStorage
function salvar() {
  const corTema = document.getElementById("corTema").value;
  const preview = document.getElementById("preview").src;
  const darkMode = document.body.classList.contains("dark");
  const corBorda = document.getElementById("corBorda").value;

  const dados = {
    corTema,
    corBorda,
    foto: preview,
    darkMode
  };

  document.documentElement.style.setProperty("--card-color", corTema);
  document.documentElement.style.setProperty("--borda-color", corBorda);

  localStorage.setItem("dadosPerfil", JSON.stringify(dados));

  const msg = document.getElementById("mensagemSucesso");
  msg.classList.add("mostrar");

  const botaoSalvar = event.target;
  const textoOriginal = botaoSalvar.textContent;

  // Feedback visual no botão
  botaoSalvar.textContent = "Salvando...";
  botaoSalvar.disabled = true;

  setTimeout(() => {
    msg.classList.remove("mostrar");
    botaoSalvar.textContent = textoOriginal;
    botaoSalvar.disabled = false;
  }, 3000);
}

// Mudar fundo do carrossel (opcional, caso precise)
document.documentElement.style.setProperty("--bg-color", novaCorDeFundo);
document.documentElement.style.setProperty("--text-color", novaCorTexto);

// Função de rolagem do carrossel
function scrollCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const scrollAmount = carousel.offsetWidth / 1.5;
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Mostrar ou ocultar inputs de cores
function toggleCores() {
  const inputs = document.getElementById("colorInputs");
  inputs.classList.toggle("hidden");
}
function mostrarImagem(event) {
  const arquivo = event.target.files[0];
  const msg = document.getElementById("mensagemSucesso");

  if (!arquivo) return;

  // Verifica tipo do arquivo
  if (!arquivo.type.startsWith("image/")) {
    alert("Por favor, selecione um arquivo de imagem válido (jpg, png, etc).");
    event.target.value = ""; // limpa o input
    return;
  }

  // Verifica tamanho (limite de 2MB)
  const limiteMB = 2;
  if (arquivo.size > limiteMB * 1024 * 1024) {
    alert(`A imagem é muito grande! O limite é ${limiteMB}MB.`);
    event.target.value = "";
    return;
  }

  const leitor = new FileReader();
  leitor.onload = function () {
    const preview = document.getElementById("preview");
    preview.src = leitor.result;
    preview.style.display = "block";
    msg.classList.remove("mostrar"); // remove mensagem antiga
  };
  leitor.readAsDataURL(arquivo);
}
// Trocar tema com botão e mostrar mensagem
document.addEventListener("DOMContentLoaded", () => {
  const botaoTema = document.getElementById("botaoTema");
  const mensagemTema = document.getElementById("mensagemTema");
  const fecharMensagem = document.getElementById("fecharMensagem");

  if (botaoTema && mensagemTema && fecharMensagem) {
    botaoTema.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");

      // Atualiza ícones
      document.getElementById("iconeLua").style.display = isDark ? "none" : "inline";
      document.getElementById("iconeSol").style.display = isDark ? "inline" : "none";

      // Atualiza localStorage
      const dados = JSON.parse(localStorage.getItem("dadosPerfil")) || {};
      dados.darkMode = isDark;
      localStorage.setItem("dadosPerfil", JSON.stringify(dados));

      // Alternar visibilidade dos elementos
      botaoTema.style.display = "none";
      mensagemTema.style.display = "block";
    });

    fecharMensagem.addEventListener("click", () => {
      mensagemTema.style.display = "none";
      // Se quiser que o botão volte depois de fechar:
      botaoTema.style.display = "inline";
    });
  }
});
