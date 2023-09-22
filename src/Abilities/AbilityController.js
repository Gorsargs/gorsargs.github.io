import AbilityRadius from './AbilityRadius'
import AbilityRegular from './AbilityRegular'
import AbilityReset from './AbilityReset'
import AbilityTeleporter from './AbilityTeleporter'

import { ABILITY_1, ABILITY_2, ABILITY_3, ABILITY_4 } from '../constants'

const ABILITIES = {
  [ABILITY_1]: AbilityRegular,
  [ABILITY_2]: AbilityTeleporter,
  [ABILITY_3]: AbilityRadius,
  [ABILITY_4]: AbilityReset,
}

class AbilityController {
  constructor(canvas, boardController) {
    this.canvas = canvas
    this.boardController = boardController

    this.abilityInstance
    this.changeAbility()
  }

  /**
   *@param {ABILITY_1 | ABILITY_2 | ABILITY_3 | ABILITY_4} abilityKey
   **/
  changeAbility(abilityKey = ABILITY_1) {
    this.abilityInstance = new ABILITIES[abilityKey](
      this.boardController,
      this.canvas,
    )
  }

  use() {
    this.abilityInstance.execute()
    if (this.abilityInstance.isAbilityUsed) {
      //after using an ability change to the default ability
      this.changeAbility()
    }
  }
}

export default AbilityController
