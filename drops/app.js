console.log("Start");
//global variables start
var clicks=0;
var points=0;
//global variables end


// global query selector function
function getElement(who) {
  return document.querySelector(who);
}
//we acpture the drops_container and add an event listener to hear clicks
var drops_container = getElement("#drops_container");
drops_container.addEventListener("click", handleClick);
//we do something on click
function handleClick(event) {
  setClicks();
  var objetivo = event.target;
  if (objetivo == drops_container) {
    return;
  }else {
    setPoints();
    setStyles(objetivo);
  }
  console.log(objetivo);
}
//set clicks function
function setClicks() {
  clicks++;
  getElement("#clicks_container").innerHTML = clicks;
  getElement("#progress_container").value = clicks;
}
//set points function
function setPoints() {
  points++;
  getElement("#points_container").innerHTML = points;
}
//generate random color function
function generateColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//set styles function
function setStyles(objetivo) {
  // objetivo.classList.toggle("clicked");
    objetivo.style.backgroundColor=generateColor();
    if (clicks%10==0) {
      objetivo.classList.add("shrink");
    }
    if (clicks%20==0) {
      objetivo.classList.add("float_right");
    }
    if (clicks==100) {
      //make alert method
      //to show points and restart game
      // without using async functions like alert, prompt or confirm!!!!
    }
  }
