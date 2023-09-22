class TileSearchBase {
  constructor(board) {
    this.board = board
  }

  _getTileByPos = pos => {
    if (
      pos?.y < this.board.length &&
      pos?.x < this.board[0].length &&
      pos?.y >= 0 &&
      pos?.x >= 0
    )
      return this.board[pos.y][pos.x]

    return null
  }

  _searchTileNeighbors = pos => {
    const neighborOffset = [
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: -1 },
      { x: 0, y: 1 },
    ]
    const result = neighborOffset.map(item => {
      const posY = pos.y + item.y
      const posX = pos.x + item.x
      if (this._getTileByPos({ x: posX, y: posY })) {
        return { x: posX, y: posY }
      }
    })
    const filteredResult = result.filter(item => item !== null)
    return filteredResult
  }
}

export default TileSearchBase
