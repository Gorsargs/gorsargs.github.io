import ImageWindow from './ImageWindow'
class ButtonWindow extends ImageWindow {
  /**
   *
   * @param {{width:number,height:number,x:number,y:number, imgSrc: string}} UIdata
   * @param {CanvasRenderingContext2D} ctx
   * @param {()=>void} onClick
   */
  constructor(
    UIdata,
    ctx,
    canvas,
    onClick = () => {},
    onOutisdeClick = () => {},
  ) {
    super(UIdata, ctx)
    this.canvas = canvas
    this.isActive = false
    this.onClick = onClick
    this.onOutsideClick = onOutisdeClick
    this.isClicked = false

    window.addEventListener('click', event => {
      if (this._checkHover(event)) {
        this.onClick()
      } else {
        this.onOutsideClick()
      }
    })
  }

  _checkHover(mouseEvent) {
    const mouseX = mouseEvent.clientX - this.canvas.getBoundingClientRect().left
    const mouseY = mouseEvent.clientY - this.canvas.getBoundingClientRect().top
    if (
      mouseX >= this.posX &&
      mouseX <= this.posX + this.width &&
      mouseY >= this.posY &&
      mouseY <= this.posY + this.height
    ) {
      return true
    }
    return false
  }

  draw() {
    if (this.isActive) this.ctx.globalAlpha = 0.5
    super.draw()
    this.ctx.globalAlpha = 1
  }
}

export default ButtonWindow
