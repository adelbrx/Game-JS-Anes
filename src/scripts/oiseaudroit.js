import GameElement from "./GameElement.js";
import oiseaudroitimag from './assets/images/oiseau-voleur-droite-gauche.png';
import Oiseaugauche from "./oiseaugauche.js";

export default class Oiseaudroit extends GameElement {

  constructor(x,y) {
    super(x, y, 4, 0, oiseaudroitimag);
    this.image = new Image();
    this.image.src = oiseaudroitimag;
    
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y);
  }
  update(canvas) {
    // Déplacer l'oiseau vers la gauche
    this.x -= this.deltaX;
  
    // Vérifier si l'oiseau sort du canvas
    if (this.x + this.image.width < 0) {
      // Définir une position de départ aléatoire pour l'oiseau
      this.x =  Math.floor(Math.random() * (canvas.width + this.image.width));
      this.y = Math.floor(Math.random() * (canvas.height - this.image.height));
  
      // Vérifier si un nouvel oiseau doit apparaître
      const probaApparition = 0.75; // Probabilité d'apparition
      const intervalleApparition = 1000; // Temps d'attente entre chaque apparition
  
      setTimeout(() => {
        const hasard = Math.random(); // Tirage aléatoire entre 0 et 1
        if (hasard < probaApparition) {
          // Ajouter un nouvel oiseau avec un léger décalage
          const oiseau = new Oiseaugauche(
            canvas.width + this.image.width + Math.random() * 200,
            Math.floor(Math.random() * (canvas.height - this.image.height)),
    
          );
          canvas.addElement(oiseau);
        }
      }, intervalleApparition);
    }
  }

}
