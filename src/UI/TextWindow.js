import WindowBase from './WindowBase'

class TextWindow extends WindowBase {
  /**
   *
   * @param {{fontSize:number, x: number, y: number }} UIdata
   */
  constructor(UIdata, ctx, alignText = 'center') {
    super(UIdata, ctx)
    this.fontSize = UIdata.fontSize
    this.alignText = alignText
  }

  draw(text) {
    this.ctx.font = `${this.fontSize}px Marvin`
    this.ctx.fillStyle = 'white'
    this.ctx.textAlign = this.alignText
    this.ctx.fillText(text, this.posX, this.posY)
  }
}

export default TextWindow
