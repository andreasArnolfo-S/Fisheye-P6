/* eslint-disable indent */
/* eslint-disable no-tabs */

export class TotalLikes {
     constructor (data) {
          this.data = data
          this.counter()
     }

     /**
      * It creates a section element with a class of static-counter, then it adds the sum of the likes and
      * the price of the first item in the data array to the section element.
      * @returns the counter variable.
      */
     templates () {
          const counter = this.createElement('section', 'class', 'static-counter')
          counter.innerHTML = ` 
		<div class='totalLikes'>
			<p class='counter'>${this.sum}</p>
			<i  class="fa-solid fa-heart"></i>
		</div>
		<p>${this.data[0].price}$ / jour</p>`

          return counter
     }

     /**
      * It takes the number of likes from each post and adds them together to get the total number of likes.
      * @returns The sum of the likes.
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

     /**
      * This function creates an element, sets an attribute, and returns the element.
      * @param element - The element you want to create.
      * @param attr - the attribute you want to set
      * @param className - The class name of the element you want to create.
      * @returns The element that was created.
      */
     createElement (element, attr, className) {
          this.e = document.createElement(element)
          this.e.setAttribute(attr, className)
          return this.e
     }
}
