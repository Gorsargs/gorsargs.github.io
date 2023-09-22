import TileAnimator from './TileAnimator'
// eslint-disable-next-line no-unused-vars
import Tile from '../Board/Tile'
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  TILE_HEIGHT,
  TILE_WIDTH,
} from '../constants'
import drawImage from '../drawImage'
import BoardBackgroundImg from '/assets/board-background.png'
import { UI_BOARD_POS } from '../constants'

class BoardAnimator {
  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  constructor(board, ctx) {
    this.isAnimating = true
    /**
     * @type {(Tile|null)[][]} this.board
     */
    this.board = board
    this.ctx = ctx
    /**
     * @type {TileAnimator[][]} this.animationBoard
     */
    this.animationBoard
    this.bgImage = new Image()
    this.bgImage.src = BoardBackgroundImg
  }

  checkIsAnimating() {
    for (let y = 0; y < this.animationBoard.length; y++) {
      for (let x = 0; x < this.animationBoard[0].length; x++) {
        const tile = this.animationBoard[y][x]
        if (tile) {
          const { x: xC, y: yC } = tile.getCurrPos()
          const { x: xN, y: yN } = tile.getNextPos()
          if (xC !== xN || yC !== yN) {
            this.isAnimating = true
            return
          }
        }
      }
    }
    this.isAnimating = false
    return
  }

  updateAnimationBoard(board) {
    const tempArr = JSON.parse(JSON.stringify(board))
    board.forEach((tileArr, y) => {
      tileArr.forEach((tile, x) => {
        if (tile) {
          tempArr[y][x] = new TileAnimator(
            tile.getColorData().color,
            tile.prevPos,
          )
        } else {
          tempArr[y][x] = null
        }
      })
    })
    return tempArr
  }

  update() {
    this.animationBoard = this.updateAnimationBoard(this.board)
    this.ctx.drawImage(
      this.bgImage,
      UI_BOARD_POS.x - 10,
      UI_BOARD_POS.y - 10,
      TILE_WIDTH * BOARD_WIDTH + 20,
      TILE_HEIGHT * BOARD_HEIGHT + 20,
    )
    this.animationBoard.forEach((tiles, y) => {
      tiles.forEach((tile, x) => {
        if (tile) {
          tile.moveTo(this.board[y][x].pos)
          if (tile.currPos.y + UI_BOARD_POS.y >= UI_BOARD_POS.y - 2) {
            drawImage(
              tile.color,
              this.ctx,
              UI_BOARD_POS.x + tile.currPos.x * TILE_WIDTH,
              UI_BOARD_POS.y + tile.currPos.y * TILE_HEIGHT,
            )
          }
        }
      })
    })
    //show moving tiles on top of not the static ones by drawing them after the static tiles are drawn
    this.animationBoard.forEach(tiles => {
      tiles.forEach(tile => {
        if (
          tile &&
          (tile.currPos.x !== tile.nextPos.x ||
            tile.currPos.y !== tile.nextPos.y)
        ) {
          if (tile.currPos.y + UI_BOARD_POS.y >= UI_BOARD_POS.y - 2) {
            drawImage(
              tile.color,
              this.ctx,
              UI_BOARD_POS.x + tile.currPos.x * TILE_WIDTH,
              UI_BOARD_POS.y + tile.currPos.y * TILE_HEIGHT,
            )
          }
        }
      })
    })

    this.checkIsAnimating()
  }
}

export default BoardAnimator
