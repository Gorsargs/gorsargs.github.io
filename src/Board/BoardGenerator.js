import Tile from './Tile.js'
import { BOARD_HEIGHT, BOARD_WIDTH, TILE_HEIGHT } from '../constants.js'
import TileColorGenerator from './TileColorGenerator.js'

class BoardGenerator {
  #generateEmptyBoard = () => {
    return new Array(BOARD_HEIGHT).fill(
      new Array(BOARD_WIDTH).fill(new Number(null)),
    )
  }

  /**
   * @returns {Tile[][]}
   */
  generateRandomBoard = () => {
    const emptyBoard = this.#generateEmptyBoard()
    const randomColoredBoard = emptyBoard.map((arr, y) =>
      arr.map((_, x) => {
        const randomColor = new TileColorGenerator().generateRandomColor()
        const tile = new Tile(randomColor, { x, y: y - TILE_HEIGHT })
        tile.pos = { x, y }
        return tile
      }),
    )
    return randomColoredBoard
  }
}

export default BoardGenerator
