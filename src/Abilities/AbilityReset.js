import AbilityBase from './AbilityBase'

class AbilityReset extends AbilityBase {
  constructor(boardController, canvas) {
    super(boardController, canvas)
  }

  onExecute() {
    this.boardController.resetBoard()
    this.gameData.onBoardReset()
  }
}

export default AbilityReset
