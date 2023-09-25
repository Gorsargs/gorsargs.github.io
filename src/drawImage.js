import BlueTilePng from '/assets/blue.png'
import RedTilePng from '/assets/red.png'
import GreenTilePng from '/assets/green.png'
import PurpleTilePng from '/assets/purple.png'
import YellowTilePng from '/assets/yellow.png'
import { TILE_HEIGHT, TILE_WIDTH } from './constants'

const imagePathMap = {
  green: new Image(),
  red: new Image(),
  purple: new Image(),
  yellow: new Image(),
  blue: new Image(),
  blank: new Image(),
}

imagePathMap['green'].src = GreenTilePng
imagePathMap['blue'].src = BlueTilePng
imagePathMap['red'].src = RedTilePng
imagePathMap['purple'].src = PurpleTilePng
imagePathMap['yellow'].src = YellowTilePng
imagePathMap['blank'].src = ''

const drawImage = (src, ctx, posX, posY) => {
  ctx.drawImage(imagePathMap[src] || src, posX, posY, TILE_WIDTH, TILE_HEIGHT)
}

export default drawImage
