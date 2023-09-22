import BoardAnimator from '../Animation/BoardAnimator'
import ButtonBase from '../UI/ButtonBase'
import AbilityController from '../Abilities/AbilityController'
import BoardController from '../Board/BoardController'
import {
  ABILITY_2,
  ABILITY_3,
  ABILITY_4,
  UI_BUTTON_ABILITY_1,
  UI_BUTTON_ABILITY_2,
  UI_BUTTON_ABILITY_3,
  UI_BUTTON_PAUSE,
  UI_PANEL_SCORE,
} from '../constants'
import GameData from '../GameData/GameDataSingleton'
import TileSearchRegular from '../TileSearch/TileSearchRegular'

class Game {
  constructor(canvas, ctx) {
    this.gameData = GameData

    /**
     * @type {HTMLCanvasElement} this.canvas
     */
    this.canvas = canvas
    /**
     * @type {CanvasRenderingContext2D} this.ctx
     */
    this.ctx = ctx
    this.boardController = new BoardController()

    this.boardAnimator = new BoardAnimator(
      this.boardController.getBoard(),
      this.ctx,
    )
    this.abilityController = new AbilityController(
      this.canvas,
      this.boardController,
    )
    //default ability
    this.abilityController.changeAbility()
    this.abilityBtn1 = new ButtonBase(
      UI_BUTTON_ABILITY_1,
      this.ctx,
      this.canvas,
      () => {
        this.abilityController.changeAbility(ABILITY_2)
      },
    )

    this.abilityBtn2 = new ButtonBase(
      UI_BUTTON_ABILITY_2,
      this.ctx,
      this.canvas,
      () => {
        this.abilityController.changeAbility(ABILITY_3)
      },
    )

    this.abilityBtn3 = new ButtonBase(
      UI_BUTTON_ABILITY_3,
      this.ctx,
      this.canvas,
      () => {
        this.abilityController.changeAbility(ABILITY_4)
        //this action will be executed immediately after clicking on the button
        this.abilityController.abilityInstance.onExecute()
        this.abilityController.changeAbility()
      },
    )

    this.panelScore = new ButtonBase(UI_PANEL_SCORE, this.ctx, this.canvas)
    this.pauseBtn = new ButtonBase(
      UI_BUTTON_PAUSE,
      this.ctx,
      this.canvas,
      () => {
        GameData.pauseToggle()
      },
    )
    this.tileFinder = new TileSearchRegular(this.boardController.getBoard())
    this.showRadiusTiles = false
  }

  isLost() {
    if (this.gameData.moves === 0) {
      if (this.gameData.currentPoints < this.gameData.pointsToReach) return true
      const foundNeighbors = this.tileFinder._searchAllNeighborTiles()
      if (foundNeighbors.length === 0) return true
    }
    return false
  }

  isWin() {
    if (this.gameData.currentPoints >= this.gameData.pointsToReach) {
      return true
    }
    return false
  }

  update() {
    //calls this function every frame
    this.boardAnimator.update()
    if (!this.boardAnimator.isAnimating) {
      this.abilityController.use()
    }
    this.abilityBtn1.draw()
    this.abilityBtn2.draw()
    this.abilityBtn3.draw()
    this.panelScore.draw()
    this.pauseBtn.draw()

    // if (this.showRadiusTiles) {
    //   const tilesInRadiusToDraw =
    //     this.radiusTileRemover.calculateTilesToDestroy(
    //       this.canvasClickHandler.handleClick({
    //         clientX: this.mousePos.x,
    //         clientY: this.mousePos.y,
    //       }),
    //     )

    //   tilesInRadiusToDraw.forEach(tile => {
    //     this.ctx.fillRect(
    //       tile.x * TILE_WIDTH,
    //       tile.y * TILE_HEIGHT,
    //       TILE_WIDTH,
    //       TILE_HEIGHT,
    //     )
    //     this.ctx.fillStyle = 'rgba(225,225,225,0.5)'
    //   })
    // }
  }
}

export default Game
