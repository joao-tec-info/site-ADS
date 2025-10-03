const carrosselDisciplinas = document.getElementById("carrossel-disciplinas");

function moverCarrosselDisciplinas(direcao) {
  const item = carrosselDisciplinas.querySelector(".item");
  const larguraItem = item.offsetWidth + 20; // inclui o gap
  carrosselDisciplinas.scrollBy({
    left: direcao * larguraItem,
    behavior: "smooth"
  });
}