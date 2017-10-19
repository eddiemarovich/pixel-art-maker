



var currentColor = '';

var canvas = document.getElementById('subcontain');

function makeTileColor(){
  event.target.style.backgroundColor = currentColor;
}
document.addEventListener('DOMContentLoaded', function makeTile() {
  for (var i = 0; i <1008; i++){
    var canvas = document.getElementById('subcontain');
    var tile = document.createElement('div');
    tile.classList.add('tile');
    canvas.appendChild(tile);
    tile.addEventListener('click', makeTileColor);
  }

  var palette = document.getElementById('palette');
    palette.addEventListener('click', newColor);
})

function newColor(event){
  currentColor = window.getComputedStyle(event.target).backgroundColor;
}
