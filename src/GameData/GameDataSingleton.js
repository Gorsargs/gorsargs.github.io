class GameDataSingleton {
  constructor() {
    this.level = 0

    this.moves = 30
    this.pointsToReach = 1000
    this.currentPoints = 0

    this.resetBoard = 3
    this.radiusRemove = 3
    this.teleportTiles = 10
    this.pause = false
  }
  onMove() {
    if (this.moves > 0) {
      this.moves--
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
