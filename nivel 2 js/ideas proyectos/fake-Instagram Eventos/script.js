var gallery = document.querySelector('.gallery');

gallery.addEventListener('click', handleClick);

function handleClick(event) {
  var target = event.target;
  target.classList.contains('like-container')?target.innerHTML=parseInt(target.innerHTML)+1:'';
}
