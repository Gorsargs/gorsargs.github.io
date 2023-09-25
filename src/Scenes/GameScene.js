import BoardAnimator from '../Animation/BoardAnimator'
import ButtonWindow from '../UI/ButtonWindow'
import AbilityController from '../Abilities/AbilityController'
import BoardController from '../Board/BoardController'
import {
  ABILITY_2,
  ABILITY_3,
  ABILITY_4,
  TILE_HEIGHT,
  TILE_WIDTH,
  UI_BOARD_POS,
  UI_BUTTON_ABILITY_1,
  UI_BUTTON_ABILITY_1_COUNT,
  UI_BUTTON_ABILITY_2,
  UI_BUTTON_ABILITY_2_COUNT,
  UI_BUTTON_ABILITY_3,
  UI_BUTTON_ABILITY_3_COUNT,
  UI_BUTTON_PAUSE,
  UI_CURRENT_SCORE,
  UI_CURRENT_SCORE_TEXT,
  UI_LVL_TEXT,
  UI_PANEL_SCORE,
  UI_POINTS_TO_REACH_TEXT,
  UI_STEPS_LEFT_TEXT,
} from '../constants'
import GameData from '../GameData/GameDataSingleton'
import TileSearchRegular from '../TileSearch/TileSearchRegular'
import ImageWindow from '../UI/ImageWindow'
import TextWindow from '../UI/TextWindow'
import SceneBase from './SceneBase'
import TileSearchRadius from '../TileSearch/TileSearchRadius'
import CanvasTileFinder from '../Scripts/Handlers/CanvasTileFinder'

class GameScene extends SceneBase {
  constructor(canvas, ctx) {
    super(canvas, ctx)
    this.gameData = GameData
    this.boardController = new BoardController()
    this.radiusTileFinder = new TileSearchRadius(
      this.boardController.getBoard(),
    )

    this.boardAnimator = new BoardAnimator(
      this.boardController.getBoard(),
      this.ctx,
    )
    this.abilityController = new AbilityController(
      this.canvas,
      this.boardController,
    )
    //default ability
    this.abilirtBtnCount1 = new TextWindow(UI_BUTTON_ABILITY_1_COUNT, this.ctx)
    this.abilirtBtnCount2 = new TextWindow(UI_BUTTON_ABILITY_2_COUNT, this.ctx)
    this.abilirtBtnCount3 = new TextWindow(UI_BUTTON_ABILITY_3_COUNT, this.ctx)

    this.abilityController.changeAbility()
    this.abilityBtn1 = new ButtonWindow(
      UI_BUTTON_ABILITY_1,
      this.ctx,
      this.canvas,
      () => {
        if (GameData.pause || GameData.teleportTiles == 0) return
        this.abilityController.changeAbility(ABILITY_2)
      },
    )

    this.abilityBtn2 = new ButtonWindow(
      UI_BUTTON_ABILITY_2,
      this.ctx,
      this.canvas,
      () => {
        if (GameData.pause || GameData.radiusRemove == 0) return
        this.abilityController.changeAbility(ABILITY_3)
        this.showRadiusTiles = true
      },
      () => {
        this.showRadiusTiles = false
      },
    )

    this.abilityBtn3 = new ButtonWindow(
      UI_BUTTON_ABILITY_3,
      this.ctx,
      this.canvas,
      () => {
        if (GameData.pause || GameData.resetBoard == 0) return
        this.abilityController.changeAbility(ABILITY_4)
        //this action will be executed immediately after clicking on the button
        this.abilityController.abilityInstance.onExecute()
        this.abilityController.changeAbility()
      },
    )

    this.panelScore = new ImageWindow(UI_PANEL_SCORE, this.ctx)
    this.panelScoreTextMoves = new TextWindow(UI_STEPS_LEFT_TEXT, this.ctx)
    this.panelCurrentScoreNumber = new TextWindow(UI_CURRENT_SCORE, this.ctx)
    this.panelCurrentScoreText = new TextWindow(UI_CURRENT_SCORE_TEXT, this.ctx)
    this.pauseBtn = new ButtonWindow(
      UI_BUTTON_PAUSE,
      this.ctx,
      this.canvas,
      () => {
        if (GameData.pause) return
        GameData.pause = true
      },
    )
    this.panelLevel = new TextWindow(UI_LVL_TEXT, this.ctx)
    this.panelPointsToReach = new TextWindow(
      UI_POINTS_TO_REACH_TEXT,
      this.ctx,
      'left',
    )
    this.findTileFromCanvas = new CanvasTileFinder(canvas)
    this.tileFinder = new TileSearchRegular(this.boardController.getBoard())
    this.showRadiusTiles = false
    this.mousePos = { x: 0, y: 0 }
    window.addEventListener('mousemove', e => {
      this.mousePos.x = e.clientX
      this.mousePos.y = e.clientY
    })
  }

  isLoss() {
    if (this.gameData.moves === 0) {
      if (this.gameData.currentPoints < this.gameData.pointsToReach) {
        this.gameData.gameOver = true
        return
      }
      const foundNeighbors = this.tileFinder._searchAllNeighborTiles()
      if (foundNeighbors.length === 0) {
        this.gameData.gameOver = true
        return
      }
    }
  }

  isWin() {
    if (this.gameData.currentPoints >= this.gameData.pointsToReach) {
      this.gameData.onWin()
    }
  }

  update() {
    //calls this function every frame
    this.isLoss()
    this.isWin()
    this.boardAnimator.draw()
    if (!this.boardAnimator.isAnimating) {
      this.abilityController.use()
    }
    this.abilityBtn1.draw()
    this.abilirtBtnCount1.draw(this.gameData.teleportTiles)
    this.abilityBtn2.draw()
    this.abilirtBtnCount2.draw(this.gameData.radiusRemove)
    this.abilityBtn3.draw()
    this.abilirtBtnCount3.draw(this.gameData.resetBoard)
    this.panelScore.draw()
    this.panelScoreTextMoves.draw(this.gameData.moves)
    this.panelCurrentScoreNumber.draw(this.gameData.currentPoints)
    this.panelCurrentScoreText.draw('score:')
    this.pauseBtn.draw()
    this.panelLevel.draw(`Level ${this.gameData.level}`)
    this.panelPointsToReach.draw(
      `${this.gameData.currentPoints}/${this.gameData.pointsToReach}`,
    )

    if (this.showRadiusTiles) {
      const tilesInRadiusToDraw = this.radiusTileFinder.searchTilesInRadius(
        this.findTileFromCanvas.findTile(this.mousePos),
      )

      tilesInRadiusToDraw.forEach(tile => {
        this.ctx.fillStyle = 'rgba(225,225,225,0.2)'
        this.ctx.fillRect(
          UI_BOARD_POS.x + tile.x * TILE_WIDTH,
          UI_BOARD_POS.y + tile.y * TILE_HEIGHT,
          TILE_WIDTH,
          TILE_HEIGHT,
        )
      })
    }
  }
}

export default GameScene
