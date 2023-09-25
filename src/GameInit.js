import BoardController from './Board/BoardController'
import GameData from './GameData/GameDataSingleton'
import GameoverScene from './Scenes/GameOverScene'
import GameScene from './Scenes/GameScene'
import PauseScene from './Scenes/PauseScene'

class GameInit {
  constructor() {
    /***
     *@type {CanvasRenderingContext2D}
     */
    this.ctx
    /***
     *@type {HTMLCanvasElement}
     */
    this.canvas
    /**
     *@type {GameScene}
     */
    this.boardController = new BoardController()
    this.gameScene
    this.pauseScene
    this.gameplayUIscene

    const initFunc = () => {
      this.canvas = document.getElementById('tile_game')
      this.ctx = this.canvas.getContext('2d')
      this.gameScene = new GameScene(this.canvas, this.ctx)
      this.pauseScene = new PauseScene(this.canvas, this.ctx)
      this.gameOverScene = new GameoverScene(this.canvas, this.ctx)
      // Start the first frame request
      window.requestAnimationFrame(gameLoop)
    }

    const gameLoop = () => {
      // this.ctx.fillStyle = 'black'
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      if (GameData.gameOver) {
        this.gameOverScene.update()
      } else if (!GameData.pause) {
        this.gameScene.update()
      } else {
        this.pauseScene.update()
      }

      window.requestAnimationFrame(gameLoop)
    }
    window.onload = initFunc
  }
}

export default GameInit
