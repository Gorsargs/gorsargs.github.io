import TilePalette from '../GameObjects/TilePalette.js'
import Tile from '../GameObjects/Tile.js'
class BoardGenerator {
  #generateEmptyBoard = size => {
    return new Array(size.n).fill(new Array(size.m).fill(0))
  }

  #getRandomColorData = () => {
    const colorKeys = TilePalette.getColorKeys()
    const randomIndex = Math.floor(Math.random() * 2 || colorKeys.length)
    const randomColor = colorKeys[randomIndex]
    return randomColor
  }

  generateRandomBoard = size => {
    const emptyBoard = this.#generateEmptyBoard(size)
    const randomColoredBoard = emptyBoard.map((arr, y) =>
      arr.map((_, x) => {
        const randomColor = this.#getRandomColorData()
        return new Tile(randomColor, { y, x })
      }),
    )
    return randomColoredBoard
  }
}

export default BoardGenerator
