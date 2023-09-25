import BoardGenerator from './BoardGenerator'
import TileColorGenerator from './TileColorGenerator'
import { BOARD_HEIGHT } from '../constants'
import Tile from './Tile'

class BoardController {
  #board = new BoardGenerator().generateRandomBoard()

  getBoard() {
    return this.#board
  }

  destroyTiles(tilesToDestroy) {
    tilesToDestroy.forEach(pos => {
      const { x, y } = pos
      this.#board[y][x] = null
    })
    this._pushTilesToBottom()
  }

  swapTiles(posOne, posTwo) {
    const tempTileOne = this.#board[posOne.y][posOne.x]
    const tempTileTwo = this.#board[posTwo.y][posTwo.x]

    this.#board[posOne.y][posOne.x] = tempTileTwo
    tempTileTwo.pos = posOne

    this.#board[posTwo.y][posTwo.x] = tempTileOne
    tempTileOne.pos = posTwo
  }

  _fillEmptySpace() {
    this.#board.forEach((tileArr, y) => {
      tileArr.forEach((tile, x) => {
        if (tile == null) {
          const tileTemp = new Tile(
            new TileColorGenerator().generateRandomColor(),
            // { x, y: -BOARD_HEIGHT - (BOARD_HEIGHT - y * 2) },
            { x, y: -BOARD_HEIGHT + y },
          )
          tileTemp.pos = { x, y }
          this.#board[y][x] = tileTemp
        }
      })
    })
  }

  resetBoard() {
    this.#board.forEach((tileArr, y) => {
      tileArr.forEach((_, x) => {
        this.#board[y][x] = null
      })
    })
    this._fillEmptySpace()
  }

  _pushTilesToBottom() {
    //checking each element per column and pushing down by emptyCount
    for (let col = this.#board.length - 1; col >= 0; col--) {
      let emptyCount = 0
      for (let row = this.#board[col].length - 1; row >= 0; row--) {
        const tile = this.#board[row][col]
        if (!tile) {
          emptyCount++
        } else {
          const boardTemp = this.#board[row][col]
          this.#board[row][col] = null
          this.#board[row + emptyCount][col] = boardTemp
          this.#board[row + emptyCount][col].pos = {
            x: col,
            y: row + emptyCount,
          }
        }
      }
    }
    this._fillEmptySpace()
  }
}

export default BoardController
