import WindowBase from './WindowBase'

class ImageWindow extends WindowBase {
  /**
   *
   * @param {{width:number,height:number,x:number,y:number, imgSrc: string}} UIdata
   * @param {CanvasRenderingContext2D} ctx
   * @param {()=>void} onClick
   */
  constructor(UIdata, ctx) {
    super(UIdata, ctx)
    this.width = UIdata.width
    this.height = UIdata.height
    this.img = new Image()
    this.img.src = UIdata.imgSrc
  }

  draw() {
    this.ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height)
  }
}

export default ImageWindow
