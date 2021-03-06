import { CreateElement } from '../utils/CreateElement'
/* Il prend le nombre de likes de chaque publication et les additionne pour obtenir le nombre total de
likes */
export class TotalLikes {
     constructor (data) {
          this.data = data
     }

     /**
      * Il prend le nombre de likes de chaque publication et les additionne pour obtenir le nombre total de
      * likes.
      * @returns La somme des likes.
      */
     async likecounter () {
          this.likes = document.querySelectorAll('.likeBtn')
          this.total = document.querySelector('.counter')
          this.likeNumArray = Array.from(this.likes, e => parseFloat(e.innerText))
          this.sum = 0
          for (let i = 0; i < this.likeNumArray.length; i++) {
               this.sum += this.likeNumArray[i]
          }
          this.total.innerText = this.sum

     }

     /**
      * Il prend le nombre de likes de chaque publication et les additionne pour obtenir un nombre total de
      * likes.
      * @returns la variable compteur.
      */
     templates () {
          this.likes = document.querySelectorAll('.likeBtn')
          this.likeNumArray = Array.from(this.likes, e => parseFloat(e.innerText))
          this.sum = 0
          for (let i = 0; i < this.likeNumArray.length; i++) {
               this.sum += this.likeNumArray[i]
          }

          const counter = CreateElement('section', {
               class: 'static-counter',
               innerHTML: ` 
               <div class='totalLikes'>
                    <h1 class='counter'>${this.sum}</h1>
                    <i  class="fa-solid fa-heart"></i>
               </div>
               <h1 class='priceDay'>${this.data[0].price}$ / jour</h1>`
          })

          return counter
     }

}
