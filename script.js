let indice = 1; // começa na imagem 2

function enviarFormulario() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  console.log("Formulário enviado:");
  console.log("Nome:", nome);
  console.log("Email:", email);
  console.log("Mensagem:", mensagem);

  alert("Obrigado por entrar em contato, " + nome + "! Responderemos em breve.");
}

function entrarNoGrupoDoWhats() {
  const url = "https://chat.whatsapp.com/Kl2hYJ3bX1gD3F6YzY7G5H";
  window.open(url, '_blank');
  console.log("Botão clicado! Redirecionando para o grupo do WhatsApp.");
}

function mostrarSlide() {
  const slides = document.querySelector('.slides');
  const slideWidth = slides.clientWidth;
  slides.style.transform = `translateX(-${indice * slideWidth}px)`;
}

function mudarSlide(direcao) {
  const slides = document.querySelector('.slides');
  const total = slides.children.length;

  indice += direcao;

  if (indice >= total) indice = 0;
  if (indice < 0) indice = total - 1;

  mostrarSlide();
}

// -------------------------
// Função do menu mobile
// -------------------------
const menu = document.querySelector('.navegacaoMobile');
const btnAbrirMenu = document.querySelector('.btnAbrirMenu');
const btnFecharMenu = document.querySelector('.btnFecharMenu');

// Abre o menu
btnAbrirMenu.addEventListener('click', (e) => {
  e.stopPropagation(); // impede o clique de fechar imediatamente
  menu.style.display = 'flex';
});

// Fecha ao clicar no botão fechar
btnFecharMenu.addEventListener('click', () => {
  menu.style.display = 'none';
});

// Fecha ao clicar fora do menu
document.addEventListener('click', (event) => {
  // Só fecha se o menu estiver visível
  if (
    menu.style.display === 'flex' &&
    !menu.contains(event.target) &&
    event.target !== btnAbrirMenu
  ) {
    menu.style.display = 'none';
  }
});

// Fecha ao clicar em qualquer link dentro do menu
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.style.display = 'none';
  });
});

// -------------------------
// Slides automáticos
// -------------------------
setInterval(() => mudarSlide(1), 4000);
window.onload = mostrarSlide;
