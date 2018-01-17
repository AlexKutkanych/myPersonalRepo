var inputColor = document.querySelector('#base');
var inputBlur = document.querySelector('#blur');
var inputSpacing = document.querySelector('#spacing');

var image = document.querySelector('.image');
var changeColorText = document.querySelector('.change-color__text');
var changeColorBg = document.querySelector('.change-color__bg');

function setDefaultValues(){
  changeColorBg.style.backgroundColor = inputColor.value;
  changeColorText.style.color = inputColor.value;
  image.style.filter = `blur(${inputBlur.value}px)`;
  image.style.marginTop = inputSpacing.value + 'px';
  image.style.marginLeft = inputSpacing.value + 'px';
}

function changeColor(e){
  var colorVal = e.target.value;
  changeColorBg.style.backgroundColor = colorVal;
  changeColorText.style.color = colorVal;
}

function changeBlur(e){
  var blurVal = e.target.value;
  image.style.filter = `blur(${blurVal}px)`;
}

function changeSpacing(e){
  var spacingVal = e.target.value;
  image.style.margin = `${spacingVal}px 0 0 ${spacingVal}px`;
}

window.addEventListener('load', setDefaultValues);
inputColor.addEventListener('change', changeColor);
inputBlur.addEventListener('change', changeBlur);
inputSpacing.addEventListener('change', changeSpacing);
