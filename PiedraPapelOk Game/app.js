//capturamos el contenedor del juego y agregamos un event listener (oreja) para las cartas
var game_container = document.querySelector("#game_container");
game_container.addEventListener("click", clickToplay);

//capturamos el contenedor del resultado y puntaje
var result_container = document.querySelector("#result_container");

// creamos una funcion que devuelve un numero random entre los valores especificados
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var opciones_pc = ["piedra", "papel", "tijera"];
var resultado;

function clickToplay(e) {
  //guardamos en una variable un numero random entre 0 y el largo del array actuando como sub dentro del array de opciones...esto sera la eleccion de la pc
  var eleccion_pc = opciones_pc[getRandomInt(0, opciones_pc.length)];
  //guardamos en una variable el valor que selecciono el usuario
  var objetivo_id = e.target.id;
  resultado="Perdiste";
  switch (eleccion_pc) {
    case "piedra":
    if (objetivo_id=="papel") {
      resultado="Ganaste";
    }
    break;
    case "papel":
    if (objetivo_id=="tijera") {
      resultado="Ganaste";
    }
    break;
    case "tijera":
    if (objetivo_id=="piedra") {
      resultado="Ganaste";
    }
    break;
    default:
  }
  if (objetivo_id==eleccion_pc) {
    resultado="Empate";
  }
  //mostramos el resultado
  result_container.innerHTML = resultado;
}
