function abrirMenu() {
  document.getElementById("menu-lateral").style.left = "0";
  document.getElementById('menu-toggle').style.display = 'none';
}

function fecharMenu() {
  document.getElementById("menu-lateral").style.left = "-250px";
  document.getElementById('menu-toggle').style.display = 'block';
}