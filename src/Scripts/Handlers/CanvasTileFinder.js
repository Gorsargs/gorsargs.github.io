import {
  TILE_WIDTH,
  BOARD_HEIGHT,
  TILE_HEIGHT,
  BOARD_WIDTH,
  UI_BOARD_POS,
} from '../../constants'

class CanvasTileFinder {
  constructor(canvas) {
    this.canvas = canvas
  }

  /**
   * @param {{x:number, y: number}} mousePos
   * @returns {{x: number, y: number}}
   */
  findTile = mousePos => {
    const rect = this.canvas.getBoundingClientRect()
    const mouseX = mousePos.x - rect.left - UI_BOARD_POS.x
    const mouseY = mousePos.y - rect.top - UI_BOARD_POS.y

    const xPos = Math.floor(mouseX / TILE_WIDTH)
    const yPos = Math.floor(mouseY / TILE_HEIGHT)

    if (xPos >= 0 && xPos < BOARD_WIDTH && yPos >= 0 && yPos < BOARD_HEIGHT) {
      return { y: yPos, x: xPos }
    } else {
      return null
    }
  }
}

export default CanvasTileFinder
