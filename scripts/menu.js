function abrirMenu() {
  document.getElementById("menu-lateral").style.left = "0";
  document.getElementById('menu-toggle').style.display = 'none';
}

function fecharMenu() {
  const menuLateral = document.getElementById("menu-lateral");
  if (window.innerWidth <= 768) {
    menuLateral.style.left = "-100%";
  } else {
    menuLateral.style.left = "-250px";
  }
  document.getElementById('menu-toggle').style.display = 'block';
}
