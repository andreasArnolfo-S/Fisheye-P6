import { CreateElement } from '../utils/CreateElement'
export class TotalLikes {
     constructor (data) {
          this.data = data
          this.counter()
     }

     templates () {
          const counter = CreateElement('section', {
               class: 'static-counter',
               innerHTML: ` 
               <div class='totalLikes'>
                    <p class='counter'>${this.sum}</p>
                    <i  class="fa-solid fa-heart"></i>
               </div>
               <p>${this.data[0].price}$ / jour</p>`
          })

          return counter
     }

     /**
      * Il prend le nombre de likes de chaque publication et les additionne pour obtenir le nombre total de
      * likes.
      * @returns La somme des likes.
      */
     async counter () {
          this.likes = document.querySelectorAll('.num-likes')
          this.total = document.querySelector('.counter')
          this.likeNumArray = Array.from(this.likes, e => parseFloat(e.innerText))
          this.sum = 0
          for (let i = 0; i < this.likeNumArray.length; i++) {
               this.sum += this.likeNumArray[i]
          }
          this.total.innerHTML = this.sum

          return this.sum
     }
}
