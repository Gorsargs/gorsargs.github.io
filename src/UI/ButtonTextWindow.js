import ButtonWindow from './ButtonWindow'
import TextWindow from './TextWindow'

class ButtonTextWindow extends ButtonWindow {
  constructor(UIdata, UItextData, ctx, canvas, onClick, onOutsideClick) {
    super(UIdata, ctx, canvas, onClick, onOutsideClick)
    this.btnText = new TextWindow(UItextData, this.ctx)
  }

  draw(text) {
    super.draw()
    this.btnText.draw(text)
  }
}

export default ButtonTextWindow
