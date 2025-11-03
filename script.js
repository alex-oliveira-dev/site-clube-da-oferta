let indice = 1; // começa na imagem 2 (lembrando que o índice começa do 0)

function mostrarSlide() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(-${indice * 1100}px)`;
}

function mudarSlide(direcao) {
    const slides = document.querySelector('.slides');
    const total = slides.children.length;

    indice += direcao;

    // Loop: se passar da última, volta à primeira; se voltar da primeira, vai à última
    if (indice >= total) indice = 0;
    if (indice < 0) indice = total - 1;

    mostrarSlide();
}

// Troca automática a cada 3 segundos
setInterval(() => mudarSlide(1), 3000);

// Mostra a imagem 2 ao abrir o site
window.onload = mostrarSlide;
