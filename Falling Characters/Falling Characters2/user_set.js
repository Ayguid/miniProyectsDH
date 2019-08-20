var modal = document.querySelector('#myModal');

var buttonSubmit = document.querySelector("#submit_user");
var user_input = document.querySelector("#user_input");
var user_name = document.querySelector("#user_name");

buttonSubmit.onclick = function() {
  if (user_input.value) {
    user_name.innerHTML= user_input.value;
    modal.style.display = "none";
  }
  else {
    user_input.style.border="1px solid red";
    user_input.placeholder="Dont you have a name?";
  }
}

user_input.oninput = function(event){
  if (event.target.value) {
    user_input.style.border="1px solid green";
  }
  else {
    user_input.style.border="1px solid red";
  }
}
