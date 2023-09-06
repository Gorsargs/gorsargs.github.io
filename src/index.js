let canvas
let context

window.onload = init

function init() {
  canvas = document.getElementById('tile_game')
  context = canvas.getContext('2d')
  // Start the first frame request
  window.requestAnimationFrame(gameLoop)
}

function gameLoop() {
  // code here
  window.requestAnimationFrame(gameLoop)
}
