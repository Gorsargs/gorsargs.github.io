import AbilityBase from './AbilityBase'
import TileSearchRegular from '../TileSearch/TileSearchRegular'

class AbilityRegular extends AbilityBase {
  constructor(boardController, canvas) {
    super(boardController, canvas)

    this.tileFinder = new TileSearchRegular(this.boardController.getBoard())
  }

  onExecute() {
    const tilesToDestroy = this.tileFinder.searchNeighborTiles(
      this.findTileFromCanvas.findTile(this.mousePos),
    )
    if (tilesToDestroy.length > 0) {
      this.boardController.destroyTiles(tilesToDestroy)
      this.gameData.onRegularTileRemove()
    }
  }
}

export default AbilityRegular
