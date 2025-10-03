let slideIndex = 0;
const slides = document.querySelectorAll('#carrossel-projetos .item');

function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('ativo');
    slide.style.display = 'none';
    if (i === index) {
      slide.classList.add('ativo');
      slide.style.display = 'block';
    }
  });
}

function avancarSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  mostrarSlide(slideIndex);
}

function voltarSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  mostrarSlide(slideIndex);
}

setInterval(avancarSlide, 4000); // troca automática
mostrarSlide(slideIndex);