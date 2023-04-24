import GameElement from "./GameElement.js";
import flechesimag from './assets/images/fleches.png';



export default class Carquois extends GameElement {

    constructor(x,y,deltaX,deltaY) {
        super(x,y,deltaX,deltaY,flechesimag);
        this.image=new Image();
        this.image.src=flechesimag;

        
    }

    update() {
        this.x += this.deltaX * Math.cos(this.deltaY);
        this.y += this.deltaX * Math.sin(this.deltaY);
    }
    draw(context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.deltaY);
        context.drawImage(this.image, -this.image.width / 2, -this.image.height / 2);
        context.restore();
    }





  
      

    
 
  
 




}