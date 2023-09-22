import AbilityBase from './AbilityBase'
import TileSearchRadius from '../TileSearch/TileSearchRadius'

class AbilityRadius extends AbilityBase {
  constructor(boardController, canvas) {
    super(boardController, canvas)

    this.tileFinder = new TileSearchRadius(this.boardController.getBoard())
  }

  onExecute() {
    const tilesToDestroy = this.tileFinder.searchTilesInRadius(
      this.findTileFromCanvas.findTile(this.mousePos),
    )
    if (tilesToDestroy.length > 0) {
      this.boardController.destroyTiles(tilesToDestroy)
      this.gameData.onRadiusTileRemove()
    }
  }
}

export default AbilityRadius
