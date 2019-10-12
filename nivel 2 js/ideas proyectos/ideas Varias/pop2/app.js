var game_container = document.getElementById('gameContainer');
var boxes = document.getElementsByClassName('box');
var cantidadFantasmas;
var fantasmas = [];

//esta funcion es para crear el tablero
function crearDivs(num) {
  for (var i = 0; i < num; i++) {
    var div = document.createElement('div');
    div.classList.add('box');
    div.id=i;
    game_container.appendChild(div);
  }
}

//funcion para generar un numero random
function numeroRandom() {
  return Math.floor(Math.random()*boxes.length);
}


function ponerFantasmas() {
  //primero sacamos los fantasmas anteriores
  for (var i = 0; i < fantasmas.length; i++) {
    fantasmas[i].classList.remove('show');
  }
  //despues agregamos fantasmas nuevos
  for (var i = 0; i < cantidadFantasmas; i++) {
    var random_boolean = Math.random() >= 0.5;//solo para ver si invertimos el fantasma,,,porque SI, pinto!
    var ghost = boxes[numeroRandom()];
    fantasmas[i] = ghost;
    if (random_boolean) {
      ghost.style.transform='scaleX(-1)';
    }
    ghost.classList.add('show');
    //preguntamos si el fantasma actual esta en un div,,,si lo tiene corremos devuelta la funcion
    if (yaExiste(fantasmas, ghost)) {
      return ponerFantasmas();
    }
  }
}

//funcion para saber si los fantasmas random se repiten
function yaExiste(donde, que) {
  return donde.filter(item => item == que).length >1;
}

var clicks = 0;
function calcularCantidadDeFantasmas(){
  cantidadFantasmas=1;
  if (clicks<3){
    cantidadFantasmas=1;
  }
  if (clicks>=3) {
    cantidadFantasmas=3;
  }
  if (clicks>=7) {
    cantidadFantasmas=5;
  }
  if (clicks>=10) {
    cantidadFantasmas=7;
  }
}

////////////////---------//////////////
//-----------//GAME-FLOW//----------//
/////////////----------//////////////

//creamos el tablero con la cantidad de divs que queremos
crearDivs(30);
//calcular cuantos fantasmas vamos a poner
calcularCantidadDeFantasmas();
//ponemos nuestros primeros fantasmas
ponerFantasmas();

//escuchamos nuestros clicks
game_container.onclick = function(event){
  var objective = event.target;//donde hicimos click?
  if (objective == game_container || !objective.classList.contains('show')){return}//si el objetivo es el tablero de fondo o un div que no tiene fantasma, nos vamos de la funcion
  else {
    clicks++;
    calcularCantidadDeFantasmas();
    ponerFantasmas();
  }
}
