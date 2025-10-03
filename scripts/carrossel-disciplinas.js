let slideIndexDisciplinas = 0;
const slidesDisciplinas = document.querySelectorAll('#carrossel-disciplinas .item');

function mostrarSlideDisciplinas(index) {
  slidesDisciplinas.forEach((slide, i) => {
    slide.classList.remove('ativo');
    slide.style.display = 'none';
    if (i === index) {
      slide.classList.add('ativo');
      slide.style.display = 'block';
    }
  });
}

function moverCarrosselDisciplinas(direcao) {
  slideIndexDisciplinas = (slideIndexDisciplinas + direcao + slidesDisciplinas.length) % slidesDisciplinas.length;
  mostrarSlideDisciplinas(slideIndexDisciplinas);
}

mostrarSlideDisciplinas(slideIndexDisciplinas);
