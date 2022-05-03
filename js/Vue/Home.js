/* eslint-disable eqeqeq */
/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */

/**
 * @file Home est mon ficher qui gere la page d'accueil
 * @author Andreas Arnolfo
 * @module Home module
 */
import { AllPhotographersApi } from '../api/api'

/**
 * class Home page qui affiche tout les photographes
 */
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
     /**
      * @param  photographer
      *
      * @return  {HTMLElement}
      */
     constructor (photographer) {
          this.photographer = photographer
     }

     createPhotographerCard () {
          const articles = document.createElement('article')
          articles.setAttribute('tabindex', '-1')
          articles.innerHTML = `<a  href='photographers.html?id=${this.photographer.id}'>
                                             <img src="../../assets/photographers/${this.photographer.portrait}" alt="portrait de ${this.photographer.name}" />
                                             <h2>${this.photographer.name}</h2>
                                             <p class='city'><strong>${this.photographer.city}, ${this.photographer.country}</strong></p>
                                             <p class='tag'><strong>${this.photographer.tagline}</strong></p>
                                             <p class='price'>${this.photographer.price}€/jour</p>
                                        </a>`
          return articles
     }

}
