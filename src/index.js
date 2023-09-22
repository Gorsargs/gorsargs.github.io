import BlueTilePng from '/assets/blue.png'
import RedTilePng from '/assets/red.png'
import GreenTilePng from '/assets/green.png'
import PurpleTilePng from '/assets/purple.png'
import YellowTilePng from '/assets/yellow.png'
import Game from './Scenes/Game'
import GameData from './GameData/GameDataSingleton'

const imagePathMap = {
  green: new Image(),
  red: new Image(),
  purple: new Image(),
  yellow: new Image(),
  blue: new Image(),
}

imagePathMap['green'].src = GreenTilePng
imagePathMap['blue'].src = BlueTilePng
imagePathMap['red'].src = RedTilePng
imagePathMap['purple'].src = PurpleTilePng
imagePathMap['yellow'].src = YellowTilePng

let canvas
let ctx

window.onload = init

function init() {
  canvas = document.getElementById('tile_game')
  ctx = canvas.getContext('2d')
  // Start the first frame request
  window.requestAnimationFrame(gameLoop)
  game = new Game(canvas, ctx)
}

/**
 * @type {Game} game
 */
let game

// let secondsPassed = 0
// let oldTimeStamp = 0
// let movingSpeed = 50
function gameLoop() {
  // secondsPassed = (timeStamp - oldTimeStamp) / 1000
  // if (secondsPassed > 5) {
  //   oldTimeStamp = timeStamp
  // }
  // code here
  if (!GameData.pause) {
    ctx.clearRect(0, 0, canvas.height, canvas.width)
    game.update()
  }

  window.requestAnimationFrame(gameLoop)
}
