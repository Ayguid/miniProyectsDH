console.log('Hola');


function openNav() {
  console.log('Abrio');
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
  console.log('Cerro');
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


function cambiarContenido(){
  document.getElementById("tuContenido").innerHTML = 'Tu contenido fue: "'+ prompt('Ingresa una idea') + '"';
}


function cambiarColorDeFondo(event) {
  console.log(event);
  document.getElementById("app").style.backgroundColor = event.target.value;
}










//extras
var shakingElements = [];
var shake = function (element, magnitude = 16, angular = false) {
  var tiltAngle = 1;
  var counter = 1;
  var numberOfShakes = 15;
  var startX = 0,
  startY = 0,
  startAngle = 0;
  var magnitudeUnit = magnitude / numberOfShakes;


  var randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  if(shakingElements.indexOf(element) === -1) {
    shakingElements.push(element);
    if(angular) {
      angularShake();
    } else {
      upAndDownShake();
    }
  }


  function upAndDownShake() {
    if (counter < numberOfShakes) {
      element.style.transform = 'translate(' + startX + 'px, ' + startY + 'px)';
      magnitude -= magnitudeUnit;
      var randomX = randomInt(-magnitude, magnitude);
      var randomY = randomInt(-magnitude, magnitude);
      element.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';
      counter += 1;
      requestAnimationFrame(upAndDownShake);
    }
    if (counter >= numberOfShakes) {
      element.style.transform = 'translate(' + startX + ', ' + startY + ')';
      shakingElements.splice(shakingElements.indexOf(element), 1);
    }
  }


  function angularShake() {
    if (counter < numberOfShakes) {
      console.log(tiltAngle);
      element.style.transform = 'rotate(' + startAngle + 'deg)';
      magnitude -= magnitudeUnit;
      var angle = Number(magnitude * tiltAngle).toFixed(2);
      console.log(angle);
      element.style.transform = 'rotate(' + angle + 'deg)';
      counter += 1;
      tiltAngle *= -1;
      requestAnimationFrame(angularShake);
    }
    if (counter >= numberOfShakes) {
      element.style.transform = 'rotate(' + startAngle + 'deg)';
      shakingElements.splice(shakingElements.indexOf(element), 1);
    }
  }
};


document.querySelector('.red').addEventListener('mouseenter', (e) => {
  shake(e.currentTarget);
});
document.querySelector('.green').addEventListener('mouseenter', (e) => {
  shake(e.currentTarget, 20, true);
});
