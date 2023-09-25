import TileSearchBase from './TileSearchBase'

class TileSearchRadius extends TileSearchBase {
  #radiusToDestroy
  constructor(board, radiusToDestroy = 3) {
    super(board)
    this.#radiusToDestroy = radiusToDestroy
  }

  _calculateSearchSquareByRadius(startPos) {
    const squareToSearch = []
    if (!this._getTileByPos(startPos)) return squareToSearch

    const yStart = startPos.y - this.#radiusToDestroy
    const yEnd = startPos.y + this.#radiusToDestroy

    const xStart = startPos.x - this.#radiusToDestroy
    const xEnd = startPos.x + this.#radiusToDestroy

    for (let y = yStart; y <= yEnd; y++) {
      for (let x = xStart; x <= xEnd; x++) {
        const tileInSquare = this._getTileByPos({ x, y })
        if (tileInSquare) {
          squareToSearch.push({ x, y })
        }
      }
    }

    return squareToSearch
  }

  _isTileInRadiusRange(radiusStartPos, tilePos) {
    //Pythagorean Theorem
    const calcDistance = Math.sqrt(
      Math.pow(Math.abs(radiusStartPos.x - tilePos.x), 2) +
        Math.pow(Math.abs(radiusStartPos.y - tilePos.y), 2),
    )
    if (calcDistance <= this.#radiusToDestroy) {
      return true
    }
    return false
  }

  searchTilesInRadius = clickPos => {
    const potentialTilesToRemove = this._calculateSearchSquareByRadius(clickPos)
    const tilesToDestroy = []
    potentialTilesToRemove.forEach(tilePos => {
      if (this._isTileInRadiusRange(clickPos, tilePos)) {
        tilesToDestroy.push(tilePos)
      }
    })
    return tilesToDestroy
  }
}

export default TileSearchRadius
