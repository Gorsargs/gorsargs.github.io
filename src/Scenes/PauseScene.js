import GameData from '../GameData/GameDataSingleton'
import ButtonWindow from '../UI/ButtonWindow'
import { UI_BUTTON_UNPAUSE } from '../constants'
import SceneBase from './SceneBase'

class PauseScene extends SceneBase {
  constructor(canvas, ctx) {
    super(canvas, ctx)
    this.puaseBtn = new ButtonWindow(
      UI_BUTTON_UNPAUSE,
      this.ctx,
      this.canvas,
      () => {
        GameData.pause = false
      },
    )
  }

  update() {
    this.puaseBtn.draw()
  }
}

export default PauseScene
