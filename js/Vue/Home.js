/* eslint-disable eqeqeq */
/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */

import { AllPhotographersApi } from '../api/api'

export class HomePage {

     constructor () {
          this.photographersApi = new AllPhotographersApi().getPhotographers()
          this.$photographerSection = document.querySelector('.photographer_section')

     }

     async home () {

          const photographersData = await this.photographersApi
          this.photographers = photographersData

          photographersData.forEach((photographer) => {
               const template = new PhotographerCard(photographer)
               this.$photographerSection.appendChild(template.createPhotographerCard())
          })

     }

}

class PhotographerCard {

     constructor (photographer) {
          this.photographer = photographer
     }

     createPhotographerCard () {
          const articles = document.createElement('article')

          articles.innerHTML = `<a href='photographers.html?id=${this.photographer.id}'>
                                             <img src="../../assets/photographers/${this.photographer.portrait}" />
                                             <h2>${this.photographer.name}</h2>
                                             <p>${this.photographer.city}, ${this.photographer.country}</p>
                                             <p>${this.photographer.tagline}</p>
                                             <p>${this.photographer.price}€/jour</p>
                                        </a>`
          return articles
     }

}
