import BtnBoom from '/assets/boom_button.png'
import BtnReplace from '/assets/replace_button.png'
import BtnReset from '/assets/reset_button.png'
import BtnPause from '/assets/pause.png'
import BtnUnpause from '/assets/unpause.png'
import PanelScore from '/assets/panel-score.png'
//BOARD AND TILE INFO
export const TILE_WIDTH = 40
export const TILE_HEIGHT = 40
export const BOARD_HEIGHT = 10
export const BOARD_WIDTH = 10

//ABILITIES
export const ABILITY_1 = 'ability-1'
export const ABILITY_2 = 'ability-2'
export const ABILITY_3 = 'ability-3'
export const ABILITY_4 = 'ability-4'

//UI ELEMENTS POS
export const UI_BOARD_POS = {
  x: 100,
  y: 150,
}

export const UI_BUTTON_ABILITY_1 = {
  width: 90,
  height: 90,
  x: 600,
  y: 420,
  imgSrc: BtnReplace,
}

export const UI_BUTTON_ABILITY_1_COUNT = {
  fontSize: 20,
  x: 645,
  y: 520,
}

export const UI_BUTTON_ABILITY_2 = {
  width: 90,
  height: 90,
  x: 700,
  y: 420,
  imgSrc: BtnBoom,
}
export const UI_BUTTON_ABILITY_2_COUNT = {
  fontSize: 20,
  x: 745,
  y: 520,
}

export const UI_BUTTON_ABILITY_3 = {
  width: 90,
  height: 90,
  x: 795,
  y: 420,
  imgSrc: BtnReset,
}
export const UI_BUTTON_ABILITY_3_COUNT = {
  fontSize: 20,
  x: 835,
  y: 520,
}

export const UI_PANEL_SCORE = {
  width: 280,
  height: 270,
  x: 600,
  y: 150,
  imgSrc: PanelScore,
}

export const UI_BUTTON_PAUSE = {
  width: 60,
  height: 60,
  x: 900,
  y: 20,
  imgSrc: BtnPause,
}

export const UI_BUTTON_UNPAUSE = {
  width: 200,
  height: 200,
  x: 400,
  y: 250,
  imgSrc: BtnUnpause,
}

export const UI_STEPS_LEFT_TEXT = {
  fontSize: 50,
  x: 740,
  y: 250,
}

export const UI_CURRENT_SCORE_TEXT = {
  fontSize: 30,
  x: 740,
  y: 345,
}

export const UI_CURRENT_SCORE = {
  fontSize: 30,
  x: 740,
  y: 375,
}

export const UI_GAME_OVER_TEXT = {
  fontSize: 70,
  x: 500,
  y: 250,
}
export const UI_BUTTON_GAME_OVER = {
  width: 200,
  height: 250,
  x: 400,
  y: 200,
  imgSrc: BtnUnpause,
}

export const UI_LVL_TEXT = {
  x: 200,
  y: 100,
  fontSize: 50,
}

export const UI_POINTS_TO_REACH_TEXT = {
  x: 100,
  y: 650,
  fontSize: 50,
}
