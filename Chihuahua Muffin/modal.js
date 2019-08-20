var modal = document.querySelector('#myModal');
var span = document.querySelector(".close");

span.onclick = function() {
  modal.style.display = "none";
}



var buttonSubmit = document.querySelector("#ingreso_usuario");
buttonSubmit.onclick = function() {
  var user_name = document.querySelector("#user_name");
  var user_input = document.querySelector("#user_input");
  user_name.innerHTML= user_input.value;
  modal.style.display = "none";
}
