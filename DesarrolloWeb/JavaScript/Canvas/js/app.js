var canvas = document.getElementById('miCanvas');
  context = canvas.getContext('2d');

var imageObj = new Image();
imageObj.onload = function(){
  context.drawImage(imageObj,50, 50, 200, 150);
};
imageObj.src =
