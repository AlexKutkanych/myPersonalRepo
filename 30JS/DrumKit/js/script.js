var btnWrapper = document.querySelector('.buttons-wrapper');

function playSound(e){
  var audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  var btn = document.querySelector(`section[data-key='${e.keyCode}']`);
  if(!audio){
    return;
  }
  audio.currentTime = 0;
  audio.play();
  btn.classList.add('button_playing');
  setTimeout(function(){
    btn.classList.remove('button_playing');
  }, 100);
}

window.addEventListener('keydown', playSound);
window.addEventListener('click', playSound);
