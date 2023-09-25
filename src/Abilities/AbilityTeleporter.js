import AbilityBase from './AbilityBase'

class AbilityTeleporter extends AbilityBase {
  constructor(boardController, canvas) {
    super(boardController, canvas)
    this.firstTilePos = null
    this.secondTilePos = null
  }

  execute() {
    if (this.isClicked) {
      this.isClicked = false
      const tilePosFromCanvas = this.findTileFromCanvas.findTile(this.mousePos)
      if (!this.firstTilePos) {
        this.firstTilePos = tilePosFromCanvas
      } else if (
        !this.secondTilePos &&
        JSON.stringify(tilePosFromCanvas) !== JSON.stringify(this.firstTilePos)
      ) {
        this.secondTilePos = tilePosFromCanvas
      }
      if (this.firstTilePos && this.secondTilePos) {
        this.boardController.swapTiles(this.firstTilePos, this.secondTilePos)
        this.firstTilePos = null
        this.secondTilePos = null
        this.isAbilityUsed = true
        this.gameData.onTeleportTiles()
      }
    }
  }
}

export default AbilityTeleporter
