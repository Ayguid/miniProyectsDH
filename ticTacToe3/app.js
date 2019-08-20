/*
Los dos jugadores. Es importante esto ya que lo vamos a usar como innerHTML mas adelante.
*/
 var player1="X";
 var player2="O";

 // El turno en el que nos encontramos...como solo importa si es par,,,,es lo mismo que un true false....
 var turn=true;

 /*Una variable para saber si el juego termino. La que nos va a permitir que no se pueda hacer mas click en el tablero
 cuando no queden casilleros libres o alguien gane*/
 var game_over=false;


 /*Buscamos el tablero,,,osea el board con un query selector*/
 board=document.querySelector("#board"),

/* A nuestro tablero le gregamos una oreja para escuchar a los clicks de cada usuario,,,,,eventListener,,
,,,y en un click ejecutaremos la funcion handleClick...la cual recibe un evento como parametro*/
board.addEventListener("click", handleClick);

/*declaramos la funcion handleClick*/
function handleClick(event) {
  /*Declaramos en una variable objetivo, el target del evento,,,osea donde hicimos click*/
  var objective = event.target;
  /*Preguntamos....si el usuario clickeo fuera del casillero,,,andate no hagas nada*/
  if (objective==board) {
    return;
  /*Sino procedemos a validar el juego..en cada click haremos esto!!!*/
  }else {
      /*Primero preguntamos si el casillero contiene la clase selected,,,,de ser asi,,,tampoco queremos que el juego haga nada
      Tampoco si el Juego termino,,e ahi la variable game over.
      */
      if (objective.classList.contains('selected') || game_over) {
        return;
      }else {
        /*Aca es donde validamos a que usuario le toca....y declaramos el una variable temporal,,,current_player*/
        if (turn) {
          figure = 'cross';
          current_player = player1;
        }
        else {
          figure ='circle';
          current_player = player2;
        }
        /*Procedemos a pintar el cuadrado,,,,pasandole parametros a la funcion lo cuales son
        objective, current_player, y la figura que queremos usar en el coloreado*/
        markSquare(objective, current_player, figure);
       /*Luego procedemos a alternar a quien le tocaria cambiando el turn a su valor opuesto*/
        turn = !turn;
        // console.log(objective);
        // console.log(objective.tagName);
      }
  }
}

function markSquare(elmn, plyr, fig) {
  elmn.innerText = plyr;
  /*Le sumamos tres clases distintas,,,,una que informa si fue selecionado,,,orta que le da un efecto,,,,y la 3era es un parametro que definimos como figura,,,,cross or circle*/
  elmn.classList.add('selected', 'floating', fig);
  //cuando tertminamos de pintar el cuadrado si se uedo ,,,luego validamos el tablero/board
  return validateBoard(plyr);
}



/*Capturamos la caja en la que mostraremos al ganador*/
 winner_container=document.querySelector("#winner_container"),
/*Capturamos el boton al cual le agregaremos la funcion de reset para comezar el juego nuevamente.*/
 reset_button=document.querySelector("#reset_button");
reset_button.addEventListener("click", reset);
function reset() {
  location.reload();
}

function validateBoard(plyr) {
  if (validateHorizontal(plyr) || validateVertical(plyr) || validateDiagonal(plyr)) {
    winner_container.innerHTML="Player "+plyr+ " wins";
    game_over=true;
  }
}

//
var
a1=document.querySelector("#a1"),
a2=document.querySelector("#a2"),
a3=document.querySelector("#a3"),
b1=document.querySelector("#b1"),
b2=document.querySelector("#b2"),
b3=document.querySelector("#b3"),
c1=document.querySelector("#c1"),
c2=document.querySelector("#c2"),
c3=document.querySelector("#c3");


/*Una funcion para saber si estan todo lo casilleros de una fila pintados,,,*/
function validateHorizontal(plyr){
  row1 = a1.innerText==plyr && a2.innerText==plyr && a3.innerText==plyr;
  row2 = b1.innerText==plyr && b2.innerText==plyr && b3.innerText==plyr;
  row3 = c1.innerText==plyr && c2.innerText==plyr && c3.innerText==plyr;
  if (row1 || row2 || row3) {
    console.log("row-"+plyr);
    return true;
  }
}
/*Una funcion para saber si estan todo lo casilleros de una columna pintados,,,*/
function validateVertical(plyr){
  col1 = a1.innerText==plyr && b1.innerText==plyr && c1.innerText==plyr;
  col2 = a2.innerText==plyr && b2.innerText==plyr && c2.innerText==plyr;
  col3 = a3.innerText==plyr && b3.innerText==plyr && c3.innerText==plyr;
  if (col1 || col2 || col3) {
    console.log("col-"+plyr);
    return true;
  }
}
/*Una funcion para saber si estan todo lo casilleros de una diagonal pintados,,,*/
function validateDiagonal(plyr){
  diag1 = a1.innerText==plyr && b2.innerText==plyr && c3.innerText==plyr;
  diag2 = c1.innerText==plyr && b2.innerText==plyr && a3.innerText==plyr;
  if (diag1 || diag2) {
    console.log("diag-"+plyr);
    return true;
  }
}
