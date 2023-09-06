import BoardGenerator from '../GeneratorClasses/BoardGenerator'

class GameField {
  #board
  constructor(size) {
    this.#board = new BoardGenerator().generateRandomBoard(size)
  }

  getBoard() {
    return this.#board
  }

  set setBoard(board) {
    this.#board = board
  }
}

export default GameField
