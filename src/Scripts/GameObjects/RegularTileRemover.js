import TileRemoverBase from './TileRemoverBase'

class RegularTileRemover extends TileRemoverBase {
  #minTileToDestroy
  constructor(board, minTileToDestroy = 2) {
    super(board)
    this.#minTileToDestroy = minTileToDestroy
  }

  calculateTilesToDestroy = clickPos => {
    const tilesToDestroy = this.neighborTilesDFS(clickPos)
    if (this.#minTileToDestroy <= tilesToDestroy.length) {
      return tilesToDestroy
    }
    return []
  }

  neighborTilesDFS = startPos => {
    const potentialTilePosStack = [startPos]
    const initialTile = this._getTileByPos(startPos)
    if (!initialTile) return []
    const matchedTiles = []
    let stepsToFind = 0
    while (potentialTilePosStack.length !== 0) {
      const currPos = potentialTilePosStack.pop()
      // if (!(currPos.y < board.length && currPos.x < board[0].length)) return [];
      const currTile = this._getTileByPos(currPos)
      stepsToFind++
      console.log(stepsToFind)
      if (
        !matchedTiles.includes(currTile) &&
        currTile &&
        currTile?.getColorData().value == initialTile?.getColorData().value
      ) {
        //neighbors
        matchedTiles.push(currTile)
        const neigbors = this._getTileNeighbors(currPos)
        neigbors.forEach(item => {
          if (item.getColorData().value == initialTile.getColorData().value) {
            potentialTilePosStack.push(item.getPos())
          }
        })
      }
    }

    return matchedTiles
  }
}

export default RegularTileRemover
