//global variables
var score;
var player;
var questionNum=0;
var questionContainer = document.querySelector('#question-container');
var imageContainer = questionContainer.children[0];
var answerButtons = document.querySelector('#answer-buttons');
var questions={
  0:{
    answer:'Chihuahua',
    image:'./images/chihuahua1.png'
  },
  1:{
    answer:'Muffin',
    image:'./images/muffin1.png'
  },
  2:{
    answer:'Chihuahua',
    image:'./images/chihuahua2.png'
  },
  3:{
    answer:'Muffin',
    image:'./images/muffin2.png'
  },
}

function showQuestion() {//set image for question
  imageContainer.src = questions[questionNum].image;
}

answerButtons.addEventListener('click', answerQuestion);
function answerQuestion(event) {
  var target = event.target;
  if (target==answerButtons) {
    return;
  }else if(Object.keys(questions).length-1>questionNum){//if we have questions left...
    if (target.value == questions[questionNum].answer ) {//if correct
      questionNum++;
      showQuestion();
    }else {//if wrong
      alert('Intenta nuevamente');
    }
  }else {//if we dont have questions left...!!!
    alert('No quedan preguntas');
  }
}


//start game
showQuestion();
