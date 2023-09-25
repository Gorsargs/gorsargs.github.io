class GameDataSingleton {
  constructor() {
    this.level

    this.moves
    this.pointsToReach
    this.currentPoints

    this.resetBoard
    this.radiusRemove
    this.teleportTiles
    this.pause
    this.gameOver
    this._resetToDefault()
  }

  _resetToDefault() {
    this.level = 0

    this.moves = 30
    this.pointsToReach = 1000
    this.currentPoints = 0

    this.resetBoard = 3
    this.radiusRemove = 3
    this.teleportTiles = 10
    this.pause = false
    this.gameOver = false
  }

  restart() {
    this._resetToDefault()
  }

  onWin() {
    this.level++
    this.moves = 30
    this.currentPoints = 0
    this.pointsToReach += 30
    this.resetBoard = 3
    this.radiusRemove = 3
    this.teleportTiles = 10
  }

  onMove() {
    if (this.moves > 0) {
      this.moves--
    }
  }

  onTileDelete(deletedTilesCount) {
    if (deletedTilesCount < 3) {
      this.currentPoints += deletedTilesCount * 5
    } else {
      this.currentPoints += deletedTilesCount * 10
    }
  }

  onRegularTileRemove() {
    this.onMove()
  }

  onRadiusTileRemove() {
    if (this.radiusRemove > 0) {
      this.radiusRemove--
    }
    this.onMove()
  }

  onTeleportTiles() {
    if (this.teleportTiles > 0) {
      this.teleportTiles--
    }
    this.onMove()
  }

  onBoardReset() {
    if (this.resetBoard > 0) {
      this.resetBoard--
    }
    this.onMove()
  }

  pauseToggle() {
    this.pause = !this.pause
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new GameDataSingleton()
    }
    return this.instance
  }
}

const GameData = GameDataSingleton.getInstance()

export default GameData
