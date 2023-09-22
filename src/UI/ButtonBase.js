class ButtonBase {
  /**
   *
   * @param {{width:number,height:number,x:number,y:number, imgSrc: string}} UIdata
   * @param {CanvasRenderingContext2D} ctx
   * @param {()=>void} onClick
   */
  constructor(UIdata, ctx, canvas, onClick = () => {}) {
    this.ctx = ctx
    this.width = UIdata.width
    this.height = UIdata.height
    this.posX = UIdata.x
    this.posY = UIdata.y
    this.img = new Image()
    this.img.src = UIdata.imgSrc
    this.isActive = false
    window.addEventListener('click', event => {
      const mouseX = event.clientX - canvas.getBoundingClientRect().left
      const mouseY = event.clientY - canvas.getBoundingClientRect().top

      if (
        mouseX >= this.posX &&
        mouseX <= this.posX + this.width &&
        mouseY >= this.posY &&
        mouseY <= this.posY + this.height
      ) {
        onClick()
        this.isActive = true
        setTimeout(() => {
          this.isActive = false
        }, 100)
      }
    })
  }

  draw() {
    if (this.isActive) this.ctx.globalAlpha = 0.5
    this.ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height)
    this.ctx.globalAlpha = 1
  }
}

export default ButtonBase
