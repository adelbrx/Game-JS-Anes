import GameElement from "./GameElement.js";
import oiseaugaucheimag from './assets/images/oiseau-voleur-gauche-droite.png';
import Oiseaudroit from "./oiseaudroit.js";

export default class Oiseaugauche extends GameElement {

    constructor(x,y) {
        super(x,y,4,0,oiseaugaucheimag);
        this.image=new Image();
        this.image.src=oiseaugaucheimag;

        
    }
    draw(context) {
        context.drawImage(this.image,this.x,this.y);
    }

    update(canvas) {
      // Déplacer l'oiseau vers la droite
      this.x += this.deltaX;
    
      // Vérifier si l'oiseau sort du canvas
      if (this.x > canvas.width) {
        // Définir une position de départ aléatoire pour l'oiseau
        this.x =  Math.floor(Math.random() * (canvas.width + this.image.width));
        this.y = Math.floor(Math.random() * (400 - 100 + 1)) + 100;
    
        // Vérifier si un nouvel oiseau doit apparaître
        const probaApparition = 0.75; // Probabilité d'apparition
        const intervalleApparition = 1000; // Temps d'attente entre chaque apparition
    
        setTimeout(() => {
          const hasard = Math.random(); // Tirage aléatoire entre 0 et 1
          if (hasard < probaApparition) {
            // Ajouter un nouvel oiseau avec un léger décalage
            const oiseau = new Oiseaudroit(
              -Math.floor(Math.random() * (canvas.width + oiseau.image.width)),
              Math.floor(Math.random() * (canvas.height - oiseau.image.height)),
              4
            );
            canvas.addElement(oiseau);
          }
        }, intervalleApparition);
      }
    }





  
      

    
 
  
 




}