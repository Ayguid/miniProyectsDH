//global variables
var score;
var player;
var questionNum=0;
var questionContainer = document.querySelector('#question-container');
var imageContainer = questionContainer.children[0];
var answerButtons = document.querySelector('#answer-buttons');

var questions={
  0:{
    answer:'true',
    image:'./images/chihuahua1.png'
  },
  1:{
    answer:'false',
    image:'./images/muffin1.png'
  },
  2:{
    answer:'true',
    image:'./images/chihuahua2.png'
  },
  3:{
    answer:'false',
    image:'./images/muffin2.png'
  },
}



//
function showQuestion() {
  //set image for question
    imageContainer.src = questions[questionNum].image;
  //
}

answerButtons.addEventListener('click', answerQuestion);
function answerQuestion(event) {
  var target = event.target;
  if (target==answerButtons) {
    return;
  }else if(Object.keys(questions).length-1>questionNum){//if we have questions left...
    //if it is correct
    if (target.value == questions[questionNum].answer ) {
      questionNum++;
      showQuestion();
    }else {//if not
      alert('Intenta nuevamente');
    }
  }
}

//start game
showQuestion();
