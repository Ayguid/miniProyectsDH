//global variables
var game_container = document.querySelector("#game_container");
var characters_list= 'abcdefghijklmnopqrstuvwxyz0123456789';
var character_container = document.querySelector("#character_container");
//start game_
var current_character=showRandomCharacter(character_container, characters_list) ;
//

//solo seteamos variables globales cuando ocurre un evento
//capturamos las teclas en DOWN event
document.addEventListener('keydown', handleKey);

function handleKey(event) {
  var keyDown = event.key || event.keyCode;
  if (event.defaultPrevented) {
    return;
  }
  if (validateKeyDown(keyDown, current_character)) {
    current_character = showRandomCharacter(character_container, characters_list);
    setStyles(true, character_container);
  }else {
    setStyles(false, character_container);
  }
  console.log(keyDown + " down");
}

function validateKeyDown(key, correct_answer) {
  return (key == correct_answer)==true;
}

function showRandomCharacter(container, list) {
  char=list[getRandomInt(0, (list.length)-1)];
  container.innerHTML='<div class="fadeIn">'+char+'</div>';
  return char;
}

// special functions
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//

function setStyles(state, who) {
  if (state) {
    who.classList.remove("alert");
  }else {
    who.classList.remove("alert");
    who.offsetWidth;//trick to delay animation
    who.classList.add("alert");
  }
}
