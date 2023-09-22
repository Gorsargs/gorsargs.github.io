import TileSearchBase from './TileSearchBase'

class TileSearchRegular extends TileSearchBase {
  #minTileToDestroy
  constructor(board, minTileToDestroy = 2) {
    super(board)
    this.#minTileToDestroy = minTileToDestroy
  }

  searchNeighborTiles = clickPos => {
    const tilesToDestroy = this._neighborTilesDFS(clickPos)
    if (this.#minTileToDestroy <= tilesToDestroy.length) {
      return tilesToDestroy
    }
    return []
  }

  _searchAllNeighborTiles = () => {
    const neighborTilesAll = []
    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board[y].length; x++) {
        if (!neighborTilesAll.flat().find(pos => pos.x == x && pos.y == y)) {
          const foundNeighborTiles = this._neighborTilesDFS({ y, x })
          if (foundNeighborTiles.length > 1) {
            neighborTilesAll.push(foundNeighborTiles)
          }
        }
      }
    }
    return neighborTilesAll
  }

  _neighborTilesDFS = startPos => {
    const potentialNeighborPosStack = [startPos]
    const initialTile = this._getTileByPos(startPos)
    if (!initialTile) return []
    const matchedTiles = []
    while (potentialNeighborPosStack.length !== 0) {
      const currPos = potentialNeighborPosStack.pop()
      const currTile = this._getTileByPos(currPos)
      if (
        !matchedTiles.find(pos => pos.x == currPos.x && pos.y == currPos.y) &&
        currTile &&
        currTile?.getColorData().value == initialTile?.getColorData().value
      ) {
        matchedTiles.push(currPos)
        const neigbors = this._searchTileNeighbors(currPos)
        neigbors.forEach(pos => {
          if (
            this._getTileByPos(pos)?.getColorData().value ==
            initialTile?.getColorData().value
          ) {
            potentialNeighborPosStack.push(pos)
          }
        })
      }
    }
    return matchedTiles
  }
}

export default TileSearchRegular
