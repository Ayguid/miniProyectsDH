

function likePost() {
  if (event.target.classList.contains('liked')) {
    return;
  }else {
    event.target.classList.add('liked');
    event.target.innerHTML = parseInt(event.target.innerHTML)+1;//utilizamos este metodo "parseInt()" para pasar el "texto de html" a numeros y sumarle un like
  }
}
