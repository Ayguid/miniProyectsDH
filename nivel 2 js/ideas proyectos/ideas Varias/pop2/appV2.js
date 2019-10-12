var game_container = document.getElementById('gameContainer');
var boxes = document.getElementsByClassName('box');
var cantidadFantasmas;
var fantasmas = [];
var puntos = 0;
var delay = 150;
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
  if (cantidadFantasmas<=boxes.length) {
    //primero sacamos los fantasmas anteriores
    for (var i = 0; i < fantasmas.length; i++) {
      fantasmas[i].classList.remove('show');
      fantasmas[i].classList.remove('bomb');
    }
    //despues agregamos fantasmas nuevos
    for (var i = 0; i < cantidadFantasmas; i++) {
      var ghost = boxes[numeroRandom()];
      fantasmas[i] = ghost;
      //preguntamos si el fantasma actual esta en un div,,,si lo tiene corremos devuelta la funcion
      if (yaExiste(fantasmas, ghost)) {
        return ponerFantasmas();
      }
    }
    fantasmas.forEach(delayFadeAnimation(delay));
    setearMalos();
  }

}

//funcion que anima la aparicion de nuestros fantasmas
function delayFadeAnimation(delay) {
  return function(who, i){
    setTimeout(() => {
      who.classList.add('show');
    }, i * delay);
  }
}

function setearMalos() {
  var cantidadMalos=0;
  for (var i = 0; i < fantasmas.length; i++) {
    var random_boolean = Math.random() >= 0.5;
    if (random_boolean){
      cantidadMalos++;
      if (cantidadMalos<fantasmas.length) {
        fantasmas[i].classList.add('bomb');
      }
    }
  }
}

//funcion para saber si los fantasmas random se repiten
function yaExiste(donde, que) {
  return donde.filter(item => item == que).length >1;
}

var clicks = 0;
function calcularCantidadDeFantasmas(){
  if (clicks<4) {
    cantidadFantasmas=1;
  }
  if (clicks>=4) {
    cantidadFantasmas=3;
  }
}

var max_time = (60 * 1)/2;

function startTimer(duration) {
    var timer = max_time, minutes, seconds;
    var time = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        document.getElementById('time_container').textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
            clearInterval(time);
            game_container.onclick = null;//si se acaba el tiempo no se pueden hacer mas clicks
        }
    }, 1000);
}

function startFantasmas() {
  var timer = max_time, minutes, seconds;
  var time = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if (--timer < 0) {
      timer = duration;
      clearInterval(time);
    }
    calcularCantidadDeFantasmas();
    ponerFantasmas();
  }, 1000);
}

////////////////---------//////////////
//-----------//GAME-FLOW//----------//
/////////////----------//////////////

//creamos el tablero
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
    if (clicks==1) {
      startTimer();
      startFantasmas();
    }
    if (objective.classList.contains('bomb')) {
      puntos--;
      clase="alert";
    }else {
      puntos++;
      clase="success";
    }
    objective.classList.add(clase);
    setTimeout(function(){objective.classList.remove(clase);}, delay);
    // calcularCantidadDeFantasmas();
    // ponerFantasmas();
    document.getElementById('click_container').innerHTML = clicks;
    document.getElementById('points_container').innerHTML = puntos;
    console.log(puntos);
  }
}
