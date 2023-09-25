import GameData from '../GameData/GameDataSingleton'
import ButtonTextWindowComposite from '../UI/ButtonTextWindow'
import { UI_BUTTON_GAME_OVER, UI_GAME_OVER_TEXT } from '../constants'
import SceneBase from './SceneBase'

class GameoverScene extends SceneBase {
  constructor(canvas, ctx) {
    super(canvas, ctx)
    this.btnPlayAgain = new ButtonTextWindowComposite(
      UI_BUTTON_GAME_OVER,
      UI_GAME_OVER_TEXT,
      this.ctx,
      this.canvas,
      () => {
        if (!GameData.gameOver) return
        GameData.restart()
        GameData.gameOver = false
      },
    )
  }

  update() {
    this.btnPlayAgain.draw('Try Again')
  }
}

export default GameoverScene
