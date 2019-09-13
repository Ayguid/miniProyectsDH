var result_container = document.querySelector("#result_container");
var computer_score_container = document.querySelector("#computer_score_container");
var user_score_container = document.querySelector("#user_score_container");

var computer_score = 0;
var user_score = 0;
var resultado;

var game_container = document.querySelector("#game_container");
game_container.addEventListener("click", clickToplay);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var opciones = ["piedra", "papel", "tijera"];

function clickToplay(event) {
  eleccion_pc = opciones[getRandomInt(0, 2)];
  seleccion_usuario = event.target.id;
  resultado = validarRespuesta(eleccion_pc, seleccion_usuario);
  calcularYmostrarPuntos(resultado, eleccion_pc, seleccion_usuario);
}

function validarRespuesta(eleccion_pc, seleccion_usuario) {
  resultado = "Perdiste";
  if (eleccion_pc == "piedra" && seleccion_usuario == "papel") {
    resultado = "Ganaste";
  }
  if (eleccion_pc == "papel" && seleccion_usuario == "tijera") {
    resultado = "Ganaste";
  }
  if (eleccion_pc == "tijera" && seleccion_usuario == "piedra") {
    resultado = "Ganaste";
  }
  if (eleccion_pc == seleccion_usuario) {
    resultado = "Empate";
  }
  return resultado;
}

function calcularYmostrarPuntos(resultado, eleccion_pc, seleccion_usuario) {
  if (resultado == "Perdiste") {
    computer_score++;
  }
  if (resultado == "Ganaste") {
    user_score++;
  }
  result_container.innerHTML = resultado + "  ...  PC = " + eleccion_pc + " User = " + seleccion_usuario;
  computer_score_container.innerHTML = computer_score;
  user_score_container.innerHTML = user_score;
}
