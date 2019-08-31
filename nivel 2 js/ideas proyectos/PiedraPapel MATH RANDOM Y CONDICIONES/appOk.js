//creamos una variable guardando un valor booleano de manera random.
// var random_1 = Math.random() >= 0.5;
// var random_2 = !random_1;
// console.log(random_1);
// console.log(random_2);

// creamos una funcion que devuelve un numero random entre los valores especificados
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



//capturamos el contenedor del juego y agregamos un event listener (oreja) para las cartas
var game_container = document.querySelector("#game_container");
game_container.addEventListener("click", validarRespuesta);


//capturamos el contenedor del resultado y puntaje
var result_container = document.querySelector("#result_container");


function validarRespuesta(e) {
  //guardamos en una variable un numero random entre uno y tres...esto sera la eleccion de la pc
  var eleccion_pc = getRandomInt(1, 3);
  //guardamos en una variable el valor que selecciono el usuario
  var objetivo_id = e.target.id;

  resultado = "Perdiste";
  if (eleccion_pc == 1 && objetivo_id=="papel") {
    resultado = "Ganaste";
  }
  if (eleccion_pc == 2 && objetivo_id=="tijera") {
    resultado = "Ganaste";
  }
  if (eleccion_pc == 3 && objetivo_id=="piedra") {
    resultado = "Ganaste";
  }
  if ((eleccion_pc == 1 && objetivo_id=="piedra")||(eleccion_pc == 2 && objetivo_id=="papel")||(eleccion_pc == 3 && objetivo_id=="tijera")) {
    resultado = "Empate";
  }

  //si la pc elige piedra = 1
  // if (eleccion_pc == 1 && objetivo_id=="piedra") {
  //   resultado = ("Empate");
  // }
  // if (eleccion_pc == 1 && objetivo_id=="papel") {
  //   resultado = ("Ganaste");
  // }
  // if (eleccion_pc == 1 && objetivo_id=="tijera") {
  //   resultado = ("Perdiste");
  // }
  // //si la pc elige papel = 2
  // if (eleccion_pc == 2 && objetivo_id=="piedra") {
  //   resultado = ("Perdiste");
  // }
  // if (eleccion_pc == 2 && objetivo_id=="papel") {
  //   resultado = ("Empate");
  // }
  // if (eleccion_pc == 2 && objetivo_id=="tijera") {
  //   resultado = ("Ganaste");
  // }
  // //si la pc elige tijera =3
  // if (eleccion_pc == 3 && objetivo_id=="piedra") {
  //   resultado = ("Ganaste");
  // }
  // if (eleccion_pc == 3 && objetivo_id=="papel") {
  //   resultado = ("Perdiste");
  // }
  // if (eleccion_pc == 3 && objetivo_id=="tijera") {
  //   resultado = ("Empate");
  // }
  //mostramos el resultadoa
  result_container.innerHTML="Play : "+ resultado;
}
