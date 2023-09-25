import CanvasTileFinder from '../Scripts/Handlers/CanvasTileFinder'
// eslint-disable-next-line no-unused-vars
import BoardController from '../Board/BoardController'
import GameData from '../GameData/GameDataSingleton'

class AbilityBase {
  /**
   * @param {BoardController} boardController
   */
  constructor(boardController, canvas) {
    this.tileRemover
    this.boardController = boardController
    this.canvas = canvas
    this.findTileFromCanvas = new CanvasTileFinder(canvas)
    this.mousePos = { x: 0, y: 0 }
    this.gameData = GameData

    this.isClicked = false
    window.addEventListener('click', this._handleClickEvent)
    this.isAbilityUsed = false
  }

  _handleClickEvent = e => {
    this.isClicked = true
    this.mousePos = { x: e.clientX, y: e.clientY }
  }

  execute() {
    //override this for a spcific ability
    if (this.isClicked) {
      this.isClicked = false
      this.isAbilityUsed = true
      this.onExecute()
    }
  }

  //override this for the new ability
  onExecute() {}
}

export default AbilityBase
