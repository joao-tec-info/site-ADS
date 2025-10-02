let indice = 0;
  function moverCarrossel(direcao) {
    const carrossel = document.getElementById("carrossel");
    const itens = carrossel.querySelectorAll(".item");
    indice += direcao;
    if (indice < 0) indice = 0;
    if (indice >= itens.length) indice = itens.length - 1;
    carrossel.scrollTo({
      left: itens[indice].offsetLeft,
      behavior: "smooth"
    });
  }
